import {
  FirestoreCollection,
  FunctionsResponse,
  generateUserFacingId,
  IBooking,
  IOrder,
  PAYMENTS,
  UserData,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import Analytics from 'analytics-node';
import moment from 'moment';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { firebaseAdmin } from 'utils/firebaseAdmin';
import { generateConfirmationCode, transformPriceForStripe } from 'utils/order';

export type PayParams = {
  token: string;
};

export type PayReturn = {
  order: IOrder | null;
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

  const { token = null } = body;

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
      response.json({
        success: false,
        data: { order: null },
        error: 'Order already paid or is expired',
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
      response.json({
        success: false,
        data: { order: null },
        error: 'No payment method ID given',
      });
      return;
    }

    const userDataApi = new UserDataApi(firebaseAdmin, order?.userId);
    const paymentDetails = await userDataApi.getUserData(
      UserData.PAYMENT_DETAILS,
    );

    const customerId = paymentDetails?.stripeCustomerId;

    if (!customerId) {
      response.json({
        success: false,
        data: { order: null },
        error: "Stripe customer doesn't exist",
      });
      return;
    }

    const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY, {
      apiVersion: '2020-08-27',
    });

    // The `confirm` parameter attempts to pay immediately & automatically
    const paymentIntent = await stripe.paymentIntents.create({
      amount: transformPriceForStripe(order.price.final),
      currency: 'gbp',
      customer: customerId,
      payment_method: order.paymentMethod,
      off_session: true,
      confirm: true,
    });

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
      const details = await userDataApi.getUserData(UserData.DETAILS);
      const eaterName = `${details.firstName} ${details.lastName}`;

      // Add to bookings
      const booking: IBooking = {
        orderId: order.id,
        userFacingBookingId: generateUserFacingId(),
        restaurantId: order.deal.restaurant.id,
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

      analytics.track({
        event: 'Payment Success',
        userId: order.userId,
        properties: {
          token,
          firstName: details.firstName,
          paidAtDate: moment(booking.paidAt).format('Do MMMM YYYY'),
          paymentCard: paymentMethod.card,
          ...order,
          ...booking,
        },
      });

      // Update identify with new payment and user-data
      analytics.identify({
        userId: order.userId,
        traits: {
          ...details,
        },
      });

      response.json({
        success: true,
        data: { order },
        error: null,
      });
      return;
    }

    response.json({
      success: false,
      data: { order: null },
      error: 'Unknown payment error',
    });
  } catch (error) {
    response.json({
      success: false,
      data: { order: null },
      error,
    });
    return;
  }
}
