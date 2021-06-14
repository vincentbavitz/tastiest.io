import {
  CmsApi,
  dlog,
  FirestoreCollection,
  FunctionsResponse,
  IOrder,
  PAYMENTS,
} from '@tastiest-io/tastiest-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { firebaseAdmin } from 'utils/firebaseAdmin';
import { calculatePromoPrice, validatePromo } from 'utils/order';

export interface UpdateOrderParams {
  token: string;
  userId?: string;
  promoCode?: string;
  heads?: number;
  paymentMethodId?: string;
}

export type UpdateOrderReturn = {
  order: IOrder | null;
};

/**
 * Requires `token` as a parameter.
 * This can only be obtained client side on article page.
 *
 * Optionally takes one or more of these parameters...
 *  ```
 *    userId: string;
 *    heads: number;
 *    promoCode: string;
 *    paymentMethodId: string;
 *  ```
 *
 * Returns updated order object on success
 */
export default async function updateOrder(
  request: NextApiRequest,
  response: NextApiResponse<FunctionsResponse<UpdateOrderReturn>>,
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
    userId = null,
    heads = null,
    promoCode = null,
    paymentMethodId = null,
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

    // Does the order belong to this user?
    if (order?.userId && order?.userId !== userId) {
      dlog('updateOrder ➡️ userId:', userId);
      dlog('updateOrder ➡️ order?.userId:', order?.userId);
      response.json({
        success: false,
        data: { order: null },
        error: 'Order does not belong to this user',
      });
      return;
    }

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

    // Start updating
    const updatedOrder: IOrder = {
      ...order,
    };

    // Adding userId to order
    if (!order?.userId && userId && userId.length) {
      updatedOrder.userId = userId;
    }

    // Validate heads
    if (heads && heads > 0) {
      updatedOrder.heads = heads;
    }

    // Validate discount if required
    if (promoCode && promoCode.length > 0) {
      const cms = new CmsApi();

      const promo = await cms.getPromo(promoCode);

      if (promo && validatePromo(order.deal, order.userId, promo)) {
        updatedOrder.promoCode = promoCode;
        updatedOrder.price.final = calculatePromoPrice(
          order.price.gross,
          promo,
        );
      } else {
        response.json({
          success: false,
          data: { order: null },
          error: "Promo code doesn't exist",
        });
        return;
      }
    }

    // Validate payment method and add if valid
    console.log('adfasfd');
    if (paymentMethodId && paymentMethodId?.length) {
      dlog('updateOrder ➡️ paymentMethodId:', paymentMethodId);

      const errorResponse = {
        success: false,
        data: { order: null },
        error: 'Invalid payment method ID',
      };

      const stripe = new Stripe(
        process.env.NODE_ENV === 'production'
          ? process.env.STRIPE_LIVE_SECRET_KEY
          : process.env.STRIPE_TEST_SECRET_KEY,
        {
          apiVersion: '2020-08-27',
        },
      );

      try {
        const paymentMethod = await stripe.paymentMethods.retrieve(
          paymentMethodId,
        );

        if (!paymentMethod) {
          dlog('updateOrder ➡️ errorResponse:', errorResponse);
          response.json(errorResponse);
        }

        updatedOrder.paymentMethod = paymentMethodId as string;
      } catch {
        console.log('caught');
        response.json(errorResponse);
        return;
      }
    }

    // Sync with Firestore
    await firebaseAdmin
      .firestore()
      .collection(FirestoreCollection.ORDERS)
      .doc(order.id)
      .set(updatedOrder, { merge: true });

    response.json({
      success: true,
      data: { order: updatedOrder },
      error: null,
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
