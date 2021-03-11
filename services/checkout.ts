import * as firebaseAdmin from 'firebase-admin';
import { GetServerSidePropsContext } from 'next';
import { parseCookies, setCookie } from 'nookies';
import { ParsedUrlQuery } from 'querystring';
import Stripe from 'stripe';
import { IOrder } from 'types/checkout';
import { IFirebaseOrder } from 'types/firebase';
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
      amount: order.deal.pricePerHeadGBP,
      currency: 'gbp',
    });

    // Set paymentIntent for this specific order ID.
    const cookieValue: PaymentIntentCookie = {
      orderId: order.id,
      paymentIntentId: paymentIntent.id,
    };
    setCookie(this.context, 'paymentIntent', JSON.stringify(cookieValue), {});

    return paymentIntent;
  };

  public getOrder = async (orderId: string): Promise<IOrder | null> => {
    try {
      const doc = await firebaseAdmin
        .firestore()
        .collection('orders')
        .doc(orderId)
        .get();

      const rawOrder = (await doc.data()) as IFirebaseOrder;
      const { dealId } = rawOrder;

      // Get deal and restaurant from Contentful
      const cms = new CmsApi();
      const deal = await cms.getDeal(dealId);

      // If deal does not exist on Contentful, there was a clientside mismatch.
      // This could be an innocent error, or the user is sending nefarious requests.
      if (!deal) {
        return null;
      }

      // Get user ID if user is logged in
      const userDataApi = new UserDataApi();
      const { userId } = await userDataApi.init(this.context);

      // Get isPaid status from Stripe!

      const order: IOrder = {
        id: orderId,
        deal,
        userId,
        heads: rawOrder.heads,
        orderedAt: rawOrder.orderedAt,
        dealDatedFor: rawOrder.dealDatedFor,
        fromSlug: rawOrder.fromSlug,
        // TODO - isPaid should be updated with Firebase functions
        isPaid: rawOrder?.isPaid ?? false,
      };

      console.log('checkout ➡️ order:', order);

      return order;
    } catch (error) {
      return null;
    }
  };
}
