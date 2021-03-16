import Analytics from 'analytics-node';
import * as firebaseAdmin from 'firebase-admin';
import { GetServerSidePropsContext } from 'next';
import { parseCookies, setCookie } from 'nookies';
import { ParsedUrlQuery } from 'querystring';
import Stripe from 'stripe';
import { IOrder } from 'types/checkout';
import { IOrderRequest } from 'types/firebase';
import { FIREBASE } from '../constants';
import { CmsApi } from './cms';
import { UserDataApi } from './userData';

interface PaymentIntentCookie {
  orderId: string;
  paymentIntentId: string;
}

if (!firebaseAdmin.apps.length) {
  const cert = {
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    projectId: process.env.FIREBASE_PROJECT_ID,
  };

  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(cert),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

// Intended for server-side use ONLY!
export class CheckoutApi {
  private stripe: Stripe;
  private context: GetServerSidePropsContext<ParsedUrlQuery>;

  constructor(context: GetServerSidePropsContext<ParsedUrlQuery>) {
    if (typeof window !== 'undefined') {
      return null;
    }

    this.context = context;
    this.stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY, {
      apiVersion: '2020-08-27',
    });
  }

  public getOrCreatePaymentIntent = async (order: IOrder) => {
    const { paymentIntentRaw } = await parseCookies(this.context);
    const paymentIntentCookie: PaymentIntentCookie = JSON.parse(
      paymentIntentRaw ?? null,
    );

    let paymentIntent: Stripe.Response<Stripe.PaymentIntent>;

    // If the existing payment intent matches this order ID, use it. Otherwise make a new one.
    if (
      paymentIntentCookie?.orderId === order.id &&
      paymentIntentCookie?.paymentIntentId?.length
    ) {
      paymentIntent = await this.stripe.paymentIntents.retrieve(
        paymentIntentCookie.paymentIntentId,
      );

      return paymentIntent;
    }

    // We can trust the price, since we got order.deal from Contentful
    paymentIntent = await this.stripe.paymentIntents.create({
      amount: Math.ceil(order.deal.pricePerHeadGBP * order.heads * 100),
      currency: 'gbp',
    });

    console.log('checkout ➡️ orderId:', order.id);

    // Set paymentIntent for this specific order ID.
    const cookieValue: PaymentIntentCookie = {
      orderId: order.id,
      paymentIntentId: paymentIntent.id,
    };
    setCookie(this.context, 'paymentIntent', JSON.stringify(cookieValue), {});

    return paymentIntent;
  };

  public getOrderFromOrderRequest = async (
    orderId: string,
  ): Promise<IOrder | null> => {
    try {
      const doc = await firebaseAdmin
        .firestore()
        .collection('order-requests')
        .doc(orderId)
        .get();

      const orderRequest = (await doc.data()) as Partial<IOrderRequest>;

      // Get user ID. User MUST be logged in.
      const userDataApi = new UserDataApi();
      const { userId } = await userDataApi.init(this.context);
      const userIsValid = Boolean(userId) && userId === orderRequest?.userId;

      // Ensure all the types and values from Firebase are valid in the order request
      const orderRequestHeadsValid = orderRequest?.heads >= 1;
      const orderRequestSlugIsValid = orderRequest?.fromSlug?.length > 1;
      const orderRequestExpired =
        Date.now() >
        orderRequest?.timestamp + FIREBASE.ORDER_REQUEST_MAX_AGE_MS;

      // TODO - Make descriptive errors;
      if (
        orderRequestExpired ||
        !orderRequestHeadsValid ||
        !orderRequestSlugIsValid
      ) {
        console.log('exited early, wrong details');
        return null;
      }

      // Get deal and restaurant from Contentful
      // If deal does not exist on Contentful, there was a clientside mismatch.
      // This could be an innocent error, or the user is sending nefarious requests.
      const cms = new CmsApi();
      const deal = await cms.getDeal(orderRequest.dealId ?? '');

      if (!deal) {
        console.log('exited early, no deal');
        return null;
      }

      const order: IOrder = {
        id: orderId,
        deal,
        userId,
        heads: orderRequest.heads,
        fromSlug: orderRequest.fromSlug,
        totalPrice: deal.pricePerHeadGBP * orderRequest.heads,
        // TODO - paidAt should be updated with Firebase functions
        paidAt: null,
        orderedAt: Date.now(),
        abandonedAt: null,
        paymentDetails: null,
        refund: null,
      };

      // Track the order creation Server Side
      const analytics = new Analytics(process.env.ANALYTICS_WRITE_KEY);
      analytics.track({
        userId,
        event: 'Order Created',
        properties: {
          ...order,
        },
      });

      // NOW set Firebase order given that we've validated everything server side.
      await firebaseAdmin
        .firestore()
        .collection('orders')
        .doc(order.id)
        .set(order);

      return order;
    } catch (error) {
      return null;
    }
  };
}
