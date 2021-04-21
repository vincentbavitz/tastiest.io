import {
  CmsApi,
  FIREBASE,
  FirestoreCollection,
  FunctionsResponse,
  IOrder,
  IOrderRequest,
} from '@tastiest-io/tastiest-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { firebaseAdmin } from 'utils/firebaseAdmin';

export type UpdateOrderReturn = FunctionsResponse<{
  order: IOrder | null;
}>;

/**
 * Requires `orderToken` as a parameter.
 * Optionally takes one or more of these parameters...
 *  ```heads: number;
 * promoCode: string;```
 *
 * Returns updated order object on success
 */
export default async function updateOrder(
  request: NextApiRequest,
  response: NextApiResponse<UpdateOrderReturn>,
) {
  // Only allow POST
  if (request.method !== 'POST') {
    response.status(405).end();
    return;
  }

  try {
    const body = JSON.parse(request.body);
    const { orderToken = null, heads = null, promoCode = null } = body;

    // Order token is required
    if (!orderToken || !orderToken.length) {
      response.json({
        success: false,
        data: { order: null },
        error: 'No order token provided',
      });
      return;
    }

    // Either heads or promo code must be given
    if (!heads || !heads.length || !promoCode || !promoCode.length) {
      response.json({
        success: false,
        data: { order: null },
        error:
          'You must provide a `heads` or `promoCode` paramter in your request',
      });
    }

    // Fetch the order from Firestore

    // Validate heads

    // Validate discount if required.

    const updatedOrder: IOrder = {
      ...order,
    };

    // Create order request in Firebase
    const { id: orderId } = await firebaseAdmin
      .firestore()
      .collection(FirestoreCollection.ORDERS)
      .add(orderRequest);

    response.json({
      success: true,
      data: { orderId },
      error: null,
    });
  } catch (error) {
    return;
  }
}

/**
 * Ensure all the types and values from Firebase are valid in the order request
 */
const validateOrderRequest = async (orderRequest: IOrderRequest) => {
  // Expired order request
  if (
    Date.now() >
    orderRequest?.timestamp + FIREBASE.ORDER_REQUEST_MAX_AGE_MS
  ) {
    return {
      success: false,
      error: 'validateOrderRequest: Order request has expired',
    };
  }

  // Valid number of heads?
  if (
    orderRequest?.heads < 1 ||
    orderRequest.heads > FIREBASE.ORDER_REQUEST_MAX_HEADS
  ) {
    return {
      success: false,
      error: 'validateOrderRequest: Invalid number of heads',
    };
  }

  // Get deal and restaurant from Contentful
  // If deal does not exist on Contentful, there was a clientside mismatch.
  // This could be an innocent error, or the user is sending nefarious requests.
  const cms = new CmsApi();
  const deal = await cms.getDeal(orderRequest.dealId ?? '');

  if (!deal) {
    return { success: false, error: 'Deal does not exist with this ID' };
  }

  // Validate promotion code
  orderRequest.promoCode;

  // Validate user ID (required?)
  null;

  // Passed all tests 🎉
  return { success: true, error: null };
};
