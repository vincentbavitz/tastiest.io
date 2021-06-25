import {
  FirestoreCollection,
  FunctionsResponse,
  generateConfirmationCode,
  generateUserFacingId,
  IBooking,
  IOrder,
  IRestaurant,
  PAYMENTS,
  RestaurantDataApi,
  transformPriceForStripe,
  UserData,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import Analytics from 'analytics-node';
import moment from 'moment';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { firebaseAdmin } from 'utils/firebaseAdmin';

export type PayParams = {
  token: string;
  shopifyProductId: string;
  anonymousId: string;
  cartToken: string;
};

export type PayReturn = {
  order: IOrder | null;
};

// const shopifyDomain = 'tastiestio.myshopify.com';
// const shopifyStorefrontAccessToken = 'bcb518fdae51ece62ff871661a5ca08a';

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

  const {
    token = null,
    shopifyProductId = null,
    anonymousId = null,
    cartToken = null,
  } = body;

  // Order token is required
  if (!token || !token.length) {
    response.json({
      success: false,
      data: { order: null },
      error: 'No order token provided',
    });
    return;
  }

  // Fetch the order from Firestore using orderToken
  const snapshot = await firebaseAdmin
    .firestore()
    .collection(FirestoreCollection.ORDERS)
    .where('token', '==', token)
    .limit(1)
    .get();

  let order: IOrder;
  snapshot.docs.forEach(doc => (order = doc.data() as IOrder));

  // Is the order already paid or expired?
  const isOrderExpired =
    order?.createdAt + PAYMENTS.ORDER_EXPIRY_MS < Date.now();
  if (order.paidAt || isOrderExpired) {
    const _error = 'Order already paid or is expired';

    // Payment expired or already paid
    analytics.track({
      event: 'Payment Error',
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

  const userDataApi = new UserDataApi(firebaseAdmin, order?.userId);
  const details = await userDataApi.getUserData(UserData.DETAILS);
  const eaterName = `${details.firstName} ${details.lastName}`;

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

  try {
    const paymentDetails = await userDataApi.getUserData(
      UserData.PAYMENT_DETAILS,
    );

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

    const RESTAURANT_PAYOUT_PC = 0.75;
    const totalPaymentValue = order.price.final;
    const restaurantPaymentValue = totalPaymentValue * RESTAURANT_PAYOUT_PC;

    const restaurantDataApi = new RestaurantDataApi(
      firebaseAdmin,
      order.deal.restaurant.id,
    );

    const {
      details: restaurantDetails,
      financial: { stripeConnectedAccount },
    } = await restaurantDataApi.getRestaurantData();

    // The `confirm` parameter attempts to pay immediately & automatically
    const paymentIntent = await stripe.paymentIntents.create({
      amount: transformPriceForStripe(totalPaymentValue),
      currency: 'gbp',
      customer: customerId,
      payment_method: order.paymentMethod,
      off_session: true,
      confirm: true,

      // Automatically transfer to Connected Account
      transfer_data: {
        amount: transformPriceForStripe(restaurantPaymentValue),
        destination:
          process.env.NODE_ENV === 'production'
            ? stripeConnectedAccount.id
            : process.env.STRIPE_TEST_CONNECTED_ACCOUNT_ID,
      },
      // Temporarily used for Shopify webhook syncing
      description: JSON.stringify({
        title: order.deal.name,
        quantity: order.heads,
        unitPrice: order.deal.pricePerHeadGBP,
        restaurantPhone: order.deal.restaurant.publicPhoneNumber,
        restaurantAddress: order.deal.restaurant.location.address,
        shopifyProductId,
        anonymousId,
        cartToken,
      }),
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
      firebaseAdmin
        .firestore()
        .collection(FirestoreCollection.ORDERS)
        .doc(order.id)
        .set(
          {
            paidAt: Date.now(),
          },
          { merge: true },
        );

      // Update user data
      // Add to bookings
      const booking: IBooking = {
        userId: order.userId,
        email: details.email,
        restaurant: restaurantDetails as IRestaurant,
        restaurantId: order.deal.restaurant.id,
        orderId: order.id,
        userFacingBookingId: generateUserFacingId(),
        eaterName,
        dealName: order.deal.name,
        heads: order.heads,
        price: order.price,
        paidAt: Date.now(),
        bookingDate: null,
        hasBooked: false,
        hasArrived: false,
        hasCancelled: false,
        cancelledAt: null,
        confirmationCode: generateConfirmationCode(),
        isConfirmationCodeVerified: false,
      };

      firebaseAdmin
        .firestore()
        .collection(FirestoreCollection.BOOKINGS)
        .doc(order.id)
        .set(booking);

      // Track payment success
      const paymentMethod = await stripe.paymentMethods.retrieve(
        order.paymentMethod,
      );

      // Update identify with new payment and user-data
      await analytics.identify({
        anonymousId,
        userId: order.userId,
        traits: {
          anonymousId,
          ...details,
        },
      });

      analytics.track({
        event: 'Payment Success',
        userId: order.userId,
        anonymousId,
        properties: {
          token,
          firstName: details.firstName,
          paidAtDate: moment(booking.paidAt).format('Do MMMM YYYY'),
          paymentCard: paymentMethod.card,
          ...order,
          ...booking,
          // For Pixel
          action_source: 'Tastiest Backend',
        },
      });

      // Order Completed is handled by LittleData's own internal webhook.
      // littleDataAnalytics.track({
      // })

      response.json({
        success: true,
        data: { order },
        error: null,
      });
      return;
    } else {
      const _error = 'Unable to confirm payment';

      analytics.track({
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
    }
  } catch (error) {
    // Payment failure
    analytics.track({
      event: 'Payment Error',
      userId: order.userId,
      properties: {
        token,
        firstName: details.firstName,
        ...order,
        error: String(error),
      },
    });

    response.json({
      success: false,
      data: { order: null },
      error,
    });
    return;
  }
}
