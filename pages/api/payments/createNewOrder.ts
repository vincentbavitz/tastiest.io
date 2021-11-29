import {
  CmsApi,
  dlog,
  FIREBASE,
  FirestoreCollection,
  FunctionsResponse,
  generateUserFacingId,
  Order,
  OrderRequest,
  Promo,
  reportInternalError,
  TastiestInternalErrorCode,
} from '@tastiest-io/tastiest-utils';
import Analytics from 'analytics-node';
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'utils/firebaseAdmin';
import { calculatePromoPrice, validatePromo } from 'utils/order';
import { v4 as uuid } from 'uuid';

export type CreateNewOrderParams = OrderRequest & {
  userAgent?: string;
};

export type CreateNewOrderReturn = {
  token: string;
};

/**
 * Requires the query parameters...
 *  ```
 *  dealId: string;
 *  heads: number;
 *  fromSlug: string;
 *  promoCode: string | undefined
 *  userId: string | undefined
 *  anonymousId: string | undefined
 *  bookedForTimestamp: number;
 * ```
 *
 * Response is of the shape `{ orderId: string | null, error: Error | string | null }`
 */

export default async function createNewOrder(
  request: NextApiRequest,
  response: NextApiResponse<FunctionsResponse<CreateNewOrderReturn>>,
) {
  // Only allow POST
  if (request?.method !== 'POST') {
    dlog('Failed to create new order');
    response.status(405).end();
    return;
  }

  // Get body in JSON or raw.
  let body;
  try {
    body = JSON.parse(request.body);
  } catch {
    body = request.body;
  }

  const {
    dealId,
    heads: _heads,
    fromSlug,
    promoCode,
    userId,
    anonymousId,
    userAgent,
    bookedForTimestamp,
  } = body as Partial<OrderRequest>;

  const heads = Math.floor(_heads);
  const orderRequest: OrderRequest = {
    dealId,
    heads,
    fromSlug,
    promoCode,
    userId,
    bookedForTimestamp,
    timestamp: Date.now(),
  };

  dlog('createNewOrder ➡️ body:', body);
  dlog('createNewOrder ➡️ dealId:', dealId);
  dlog('createNewOrder ➡️ orderRequest:', orderRequest);

  const { success, error } = await validateOrderRequest(orderRequest);

  if (!success) {
    dlog('createNewOrder ➡️ error:', error);

    response.json({
      success: false,
      data: { token: null },
      error,
    });
    return;
  }

  const order = await buildOrder(orderRequest);

  try {
    // Create new order in Firebase
    await db(FirestoreCollection.ORDERS).doc(order.id).set(order);

    // Track with Segment following Segment's E-Commerce Spec
    // https://segment.com/docs/connections/spec/ecommerce/v2/#checkout-started
    const analytics = new Analytics(
      process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
    );

    // Use anonymousId for Pixel deduplication
    analytics.track({
      event: 'Checkout Started',
      userId: anonymousId ?? userId,
      context: {
        userAgent,
        page: {
          url: fromSlug,
        },
      },
      properties: {
        anonymousId,
        ...order,
        ...orderRequest,

        // Segment E-Commerce Spec
        order_id: order.id,
        affiliation: '',
        value: order.deal.pricePerHeadGBP,
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
          address: {
            city: 'London',
          },
        },
      },
    });
  } catch (error) {
    await reportInternalError({
      code: TastiestInternalErrorCode.PAYMENT_ERROR,
      message: 'Payment Failure - Caught error',
      timestamp: Date.now(),
      shouldAlert: false,
      originFile: 'pages/api/payments/createNewOrder.ts',
      severity: 'CRITICAL',
      properties: {},
      raw: String(error),
    });

    response.json({
      success: false,
      data: null,
      error: String(error),
    });

    return;
  }

  response.json({
    success: true,
    data: { token: order.token },
    error: null,
  });
}

/**
 * Ensure all the types and values from Firebase are valid in the order request
 */
const validateOrderRequest = async (orderRequest: OrderRequest) => {
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

  // Get deal and restaurant from Contentful
  // If deal does not exist on Contentful, there was a clientside mismatch.
  // This could be an innocent error, or the user is sending nefarious requests.
  const cms = new CmsApi();
  const deal = await cms.getDeal(orderRequest.dealId ?? '');

  if (!deal) {
    return {
      success: false,
      error: 'ExperienceProduct does not exist with this ID',
    };
  }

  // Valid number of heads?
  if (!deal.allowedHeads.includes(orderRequest.heads)) {
    return {
      success: false,
      error: 'validateOrderRequest: Invalid number of heads',
    };
  }

  // Validate promotion code
  orderRequest.promoCode;

  // Passed all tests 🎉
  return { success: true, error: null };
};

const buildOrder = async (orderRequest: OrderRequest) => {
  // Get deal
  const cms = new CmsApi();
  const deal = await cms.getDeal(orderRequest.dealId ?? '');

  // Validate deal and slug, validate that deal is still available
  //

  // Validate number of heads
  const heads = Math.floor(orderRequest.heads);

  // Is userId valid and is user online?
  // Is promoCode valid? If so, calculate Promo and final price
  const promo: Promo = await cms.getPromo(orderRequest.promoCode);
  const promoIsValid = validatePromo(deal, orderRequest?.userId, promo);
  if (promo?.validTo < Date.now()) {
    // Out of date
  }

  // Gross price
  const subtotal = deal.pricePerHeadGBP * heads;

  // New order
  const orderId = uuid();
  const orderToken = uuid();

  const order: Order = {
    id: orderId,
    userFacingOrderId: generateUserFacingId(),
    token: orderToken,
    deal,
    userId: orderRequest.userId ?? null,
    heads: orderRequest.heads,
    fromSlug: orderRequest.fromSlug,
    price: {
      subtotal,
      final: calculatePromoPrice(subtotal, promo),
      currency: 'GBP',
    },
    paymentMethod: null,
    paymentCard: null,
    promoCode: promo?.code ?? null,
    createdAt: Date.now(),
    bookedForTimestamp: orderRequest.bookedForTimestamp,

    // Timestamps
    // Null denotes not paid yet; not done yet.
    paidAt: null,
    abandonedAt: null,
    refund: null,
    isTest: process.env.NODE_ENV === 'development',
  };

  return order;
};
