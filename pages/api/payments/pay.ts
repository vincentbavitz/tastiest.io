import {
  Booking,
  dlog,
  FirestoreCollection,
  FunctionsResponse,
  generateConfirmationCode,
  generateUserFacingId,
  Order,
  PAYMENTS,
  reportInternalError,
  RestaurantDataApi,
  TastiestInternalErrorCode,
  transformPriceForStripe,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import { RestaurantDetails } from '@tastiest-io/tastiest-utils/dist/types/restaurant';
import Analytics from 'analytics-node';
import { DateTime } from 'luxon';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { db, firebaseAdmin } from 'utils/firebaseAdmin';

export type PayParams = {
  token: string;
  userId: string;
  userAgent: string;
};

export type PayReturn = {
  order: Order | null;
};

const analytics = new Analytics(process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY);

/**
 * Requires `token` as a parameter.
 * This can only be obtained client side on article page.
 *
 * Optionally takes one or more of these parameters...
 *  ```
 *    token: string
 *  ```
 *
 * Returns updated order object on success
 */
export default async function pay(
  request: NextApiRequest,
  response: NextApiResponse<FunctionsResponse<PayReturn>>,
) {
  // Only allow POST
  if (request.method !== 'POST') {
    response.status(405).end();
    return;
  }

  // Get body as JSON or raw
  let body;
  try {
    body = JSON.parse(request.body);
  } catch (e) {
    body = request.body;
  }

  const { token = null, userAgent = '' } = body;

  // Order token is required
  if (!token || !token.length) {
    response.json({
      success: false,
      data: { order: null },
      error: 'No order token provided',
    });
    return;
  }

  try {
    // Fetch the order from Firestore using orderToken
    const snapshot = await db(FirestoreCollection.ORDERS)
      .where('token', '==', token)
      .limit(1)
      .get();

    let order: Order;
    snapshot.docs.forEach(doc => (order = doc.data() as Order));

    const userDataApi = new UserDataApi(firebaseAdmin, order?.userId);
    const userData = await userDataApi.getUserData();
    const { details, paymentDetails } = userData;

    // Verify that the payment method is valid for Stripe
    const customerId = paymentDetails?.stripeCustomerId;
    if (!customerId) {
      const _error = "Stripe customer doesn't exist";
      response.json({
        success: false,
        data: { order: null },
        error: _error,
      });

      // Payment failure
      analytics.track({
        event: 'Payment Error',
        context: { userAgent },
        userId: order.userId,
        properties: {
          token,
          firstName: details.firstName,
          ...order,
          error: _error,
        },
      });
      return;
    }

    // Is the order already paid or expired?
    const isOrderExpired =
      order?.createdAt + PAYMENTS.ORDER_EXPIRY_MS < Date.now();
    if (order.paidAt || isOrderExpired) {
      const _error = 'Order already paid or is expired';

      // Payment expired or already paid
      analytics.track({
        event: 'Payment Error',
        context: { userAgent },
        userId: order.userId,
        properties: {
          token,
          ...order,
          error: _error,
        },
      });

      response.json({
        success: false,
        data: { order: null },
        error: _error,
      });
      return;
    }

    // Does order contain userId?
    if (!order?.userId) {
      response.json({
        success: false,
        data: { order: null },
        error: 'No user ID given',
      });
      return;
    }

    // Payment method exists?
    if (!order?.paymentMethod || !order?.paymentMethod.length) {
      const _error = 'No payment method ID given';

      response.json({
        success: false,
        data: { order: null },
        error: _error,
      });

      // Payment failure
      analytics.track({
        event: 'Payment Error',
        userId: order.userId,
        properties: {
          token,
          firstName: details.firstName,
          ...order,
          error: _error,
        },
      });
      return;
    }

    const stripe = new Stripe(
      process.env.NODE_ENV === 'production'
        ? process.env.STRIPE_LIVE_SECRET_KEY
        : process.env.STRIPE_TEST_SECRET_KEY,
      {
        apiVersion: '2020-08-27',
      },
    );

    const restaurantDataApi = new RestaurantDataApi(
      firebaseAdmin,
      order.deal.restaurant.id,
    );

    const {
      details: restaurantDetails,
      financial,
    } = await restaurantDataApi.getRestaurantData();

    // Set the payment portion based on follower status
    const isFollowingRestaurant = userData.metrics.restaurantsFollowed?.some(
      item => item.restaurantId === order.deal.restaurant.id,
    );

    // prettier-ignore
    const restaurantPayoutPercentage = isFollowingRestaurant
      ? financial?.commission?.followersRestaurantCut ?? PAYMENTS.RESTAURANT_CUT_FOLLOWERS_PC
      : financial?.commission?.followersRestaurantCut ?? PAYMENTS.RESTAURANT_CUT_DEFAULT_PC;

    // Internal measurements
    const calculateTastiestPortion = (subtotal: number, final: number) => {
      const portion =
        order.price.subtotal * (1 - restaurantPayoutPercentage / 100) -
        (subtotal - final);
      return portion;
    };

    // Restaurant pays the Stripe fee.
    const STRIPE_PAYMENT_FEE_PC = 0.033;
    const restaurantPortion =
      order.price.subtotal * (restaurantPayoutPercentage / 100) -
      STRIPE_PAYMENT_FEE_PC * order.price.final;

    dlog('pay ➡️ restaurantPayoutPercentage:', restaurantPayoutPercentage);
    dlog('pay ➡️ restaurantPortion:', restaurantPortion);

    const tastiestPortion = calculateTastiestPortion(
      order.price.subtotal,
      order.price.final,
    );

    // The `confirm` parameter attempts to pay immediately & automatically
    const paymentIntent = await stripe.paymentIntents.create({
      amount: transformPriceForStripe(order.price.final),
      currency: 'gbp',
      customer: customerId,
      payment_method: order.paymentMethod,
      off_session: true,
      confirm: true,

      // Automatically transfer to Connected Account
      transfer_data: {
        amount: transformPriceForStripe(restaurantPortion),
        destination:
          process.env.NODE_ENV === 'production'
            ? financial.stripeConnectedAccount.id
            : process.env.STRIPE_TEST_CONNECTED_ACCOUNT_ID,
      },
      // Used to manage Stripe Webhooks like `onPaymentSuccessWebhook`
      metadata: {
        orderId: order.id,
      },
    });

    // ////////////////////////////////////////////////////
    //              MANAGING PAYMENT SUCCESS             //
    // ////////////////////////////////////////////////////
    //
    // When 3D Secure is performed, we need to reconfirm the payment
    // after authentication has been performed.
    // Reference: https://stripe.com/docs/payments/accept-a-payment-synchronously#web-confirm-payment
    if (paymentIntent.status === 'requires_confirmation') {
      await stripe.paymentIntents.confirm(paymentIntent.id);
    }

    // Payment success
    if (paymentIntent.status === 'succeeded') {
      // Update order
      await db(FirestoreCollection.ORDERS).doc(order.id).set(
        {
          paidAt: Date.now(),
        },
        { merge: true },
      );

      // Add to bookings
      const booking: Booking = {
        userId: order.userId,
        restaurant: restaurantDetails as RestaurantDetails,
        restaurantId: order.deal.restaurant.id,
        orderId: order.id,
        userFacingBookingId: generateUserFacingId(),
        eaterName: `${details.firstName} ${details.lastName}`,
        eaterEmail: details.email as string,
        eaterMobile: details.mobile as string,
        dealName: order.deal.name,
        heads: order.heads,
        price: order.price,
        paidAt: Date.now(),
        hasBooked: false,
        hasArrived: false,
        hasCancelled: false,
        cancelledAt: null,
        confirmationCode: generateConfirmationCode(),
        bookedForTimestamp: order.bookedForTimestamp,
        bookedForHumanDate: DateTime.fromMillis(
          order.bookedForTimestamp,
        ).toFormat('h:mm DDD'),

        isConfirmationCodeVerified: false,
        isSyncedWithBookingSystem: false,
        isTest: process.env.NODE_ENV === 'development',
      };

      await firebaseAdmin
        .firestore()
        .collection(FirestoreCollection.BOOKINGS)
        .doc(order.id)
        .set(booking);

      // Track using Segment's Payment Success schema
      // https://segment.com/docs/connections/spec/ecommerce/v2/#order-completed
      await analytics.track({
        event: 'Order Completed',
        userId: order.userId,
        context: {
          userAgent,
          page: {
            url: 'https://tastiest.io/checkout',
          },
        },
        integrations: {
          All: false,
          'Facebook Pixel': true,
          'Facebook Conversions API': true,
          'Google Analytics': true,
        },
        properties: {
          checkout_id: order.token,
          order_id: order.id,
          affiliation: '',
          total: order.price.final,
          subtotal: order.price.subtotal,
          revenue: tastiestPortion,
          shipping: 0,
          tax: 0,
          discount: 0,
          coupon: order.promoCode,
          currency: order.price.currency,
          products: [
            {
              product_id: order.deal.id,
              sku: order.deal.id,
              name: order.deal.name,
              price: order.deal.pricePerHeadGBP,
              quantity: order.heads,
              category: '',
              url: `https://tastiest.io/r?offer=${order.deal.id}`,
              image_url: order.deal.image.url,
            },
          ],
          traits: {
            firstName: details.firstName,
            lastName: details.lastName,
            email: details.email,
            phone: details.mobile,
            birthday: JSON.stringify(details.birthday),
            postalCode: details.postalCode,

            address: {
              city: 'London',
            },
          },

          // Internal measurements
          tastiestPortion,
          restaurantPortion,

          // For Pixel
          action_source: 'website',
        },
      });

      response.json({
        success: true,
        data: { order },
        error: null,
      });

      return;
    } else {
      const _error = 'Payment Failure - Unable to confirm payment';
      await reportInternalError({
        code: TastiestInternalErrorCode.PAYMENT_ERROR,
        message: _error,
        timestamp: Date.now(),
        shouldAlert: false,
        originFile: 'pages/api/payments/pay.ts:335',
        severity: 'CRITICAL',
        properties: { ...order },
      });

      await analytics.track({
        event: 'Payment Failure',
        userId: order.userId,
        properties: {
          token,
          firstName: details.firstName,
          ...order,
          error: _error,
        },
      });

      response.json({
        success: false,
        data: { order: null },
        error: _error,
      });

      return;
    }
  } catch (error) {
    await reportInternalError({
      code: TastiestInternalErrorCode.PAYMENT_ERROR,
      message: 'Payment Failure - Caught error',
      timestamp: Date.now(),
      shouldAlert: false,
      originFile: 'pages/api/payments/pay.ts',
      severity: 'CRITICAL',
      properties: { token, error: String(error) },
      raw: String(error),
    });

    response.json({
      success: false,
      data: { order: null },
      error: String(error),
    });

    return;
  }
}
