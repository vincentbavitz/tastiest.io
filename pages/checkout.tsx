import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  dlog,
  FirestoreCollection,
  IOrder,
  PAYMENTS,
  postFetch,
} from '@tastiest-io/tastiest-utils';
import { useOrder } from 'hooks/checkout/useOrder';
import { useAuth } from 'hooks/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CheckoutStep } from 'state/checkout';
import { LocalEndpoint } from 'types/api';
import { firebaseAdmin } from 'utils/firebaseAdmin';
import { CheckoutStepIndicator } from '../components/checkout/CheckoutStepIndicator';
import { CheckoutStepAuth } from '../components/checkout/steps/CheckoutStepAuth';
import { CheckoutStepPayment } from '../components/checkout/steps/CheckoutStepPayment';
import { Contained } from '../components/Contained';
import { UI } from '../constants';
import {
  CreateNewOrderParams,
  CreateNewOrderReturn,
} from './api/payments/createNewOrder';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY
    : process.env.NEXT_PUBLIC_STRIPE_LIVE_PUBLISHABLE_KEY,
);

interface Props {
  order: IOrder;
  userId: string | null;
  step: CheckoutStep;
  shopifyProductId: string;
  anonymousId: string;
  cartToken: string;
}

export const getServerSideProps: GetServerSideProps = async context => {
  // Get user ID from cookie.
  // const cookieToken = nookies.get(context)?.token;
  // const userDataApi = new UserDataApi(firebaseAdmin);
  // const { userId } = await userDataApi.initFromCookieToken(cookieToken);

  const heads = parseInt(String(context.query.heads));
  const dealId = String(context.query.sku);
  const fromSlug = decodeURI(String(context.query.fromSlug));
  const shopifyProductId = String(context.query.productId);
  const cartToken = String(context.query.cart_token);
  const anonymousId = String(context.query.anonymousId);

  dlog('checkout ➡️ fromSlug:', fromSlug);
  dlog('checkout ➡️ dealId:', dealId);

  if (isNaN(heads) || heads < 1 || !dealId?.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Construct the order from Shopify query parameters...
  const urlPrefix =
    process.env.NODE_ENV === 'production'
      ? 'https://tastiest.io'
      : 'http://localhost:3000';

  const {
    data: { token },
    error,
  } = await postFetch<CreateNewOrderParams, CreateNewOrderReturn>(
    urlPrefix + LocalEndpoint.CREATE_NEW_ORDER,
    {
      userId: null,
      anonymousId,
      dealId,
      heads,
      fromSlug,
      promoCode: null,
      timestamp: Date.now(),
      shopifyProductId,
    },
  );

  dlog('checkout ➡️ error:', error);

  // If no order exists in URI, redirect to home
  if (!token) {
    dlog('no order token');

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Get order, given our order ID.
  // If the order exists, /api/payments/createNewOrder
  // has already verified that it's valid.
  const snapshot = await firebaseAdmin
    .firestore()
    .collection(FirestoreCollection.ORDERS)
    .where('token', '==', token)
    .limit(1)
    .get();

  let order: IOrder;
  snapshot.docs.forEach(doc => (order = doc.data() as IOrder));

  // Redirect if user somehow got to this state given no order request
  if (!order) {
    return {
      redirect: {
        // TODO -> Destination should be /city/cuisine/slug
        destination: '/',
        permanent: false,
      },
    };
  }

  // Order expired?
  const isExpired = order.createdAt + PAYMENTS.ORDER_EXPIRY_MS < Date.now();
  if (isExpired) {
    return {
      redirect: {
        // TODO -> Destination should be /city/cuisine/slug
        destination: '/',
        permanent: false,
      },
    };
  }

  // Order already paid? Redirect to thank-you page
  if (order.paidAt !== null) {
    return {
      redirect: {
        destination: `/thank-you?token=${token}`,
        permanent: false,
      },
    };
  }

  return {
    props: { userId: null, anonymousId, order, shopifyProductId, cartToken },
  };
};

/** Parent component takes initial values from props
 *  and feeds dynamic values into children
 */
function Checkout(props: Props) {
  const { shopifyProductId, anonymousId, cartToken } = props;

  const { isDesktop } = useScreenSize();
  const { order } = useOrder(props.order?.token, props.order);

  dlog('checkout ➡️ order:', order);

  // User sign in management needs to be very explicit here
  const { user, isSignedIn } = useAuth();
  const [userId, setUserId] = useState<string | null>(props.userId);

  // Manage user signed-in-status very carefully such that
  // a logged out user never sees the payment step for even a millisecond.
  useEffect(() => {
    window.analytics.setAnonymousId(anonymousId);

    // Update user client-side when useAuth loads
    if (user?.uid && isSignedIn) {
      setUserId(user.uid);

      // Identify user with Segment, coming from Shopify
      window.analytics.identify(user.uid, { anonymousId: anonymousId ?? null });
    }

    // Purge invalid session when useAuth has finished
    // loading and no user is signed in
    if (isSignedIn === false) {
      setUserId(null);
    }
  }, [user]);

  const step: CheckoutStep = userId
    ? CheckoutStep.PAYMENT
    : CheckoutStep.SIGN_IN;

  dlog('checkout ➡️ shopifyProductId:', shopifyProductId);

  return (
    <div className="pb-20">
      <Head>
        <title>Checkout - Tastiest</title>
      </Head>
      <Elements stripe={stripePromise}>
        {isDesktop ? (
          <CheckoutDesktop
            order={order}
            step={step}
            userId={userId}
            shopifyProductId={shopifyProductId}
            anonymousId={anonymousId}
            cartToken={cartToken}
          />
        ) : (
          <CheckoutMobile
            order={order}
            step={step}
            userId={userId}
            shopifyProductId={shopifyProductId}
            anonymousId={anonymousId}
            cartToken={cartToken}
          />
        )}
      </Elements>
    </div>
  );
}

function CheckoutDesktop(props: Props) {
  const {
    userId,
    order,
    step,
    shopifyProductId,
    anonymousId,
    cartToken,
  } = props;

  return (
    <Contained maxWidth={UI.CHECKOUT_WIDTH_PX}>
      <div className="relative flex flex-col w-full mt-12 space-y-10">
        <CheckoutStepIndicator step={step} />

        {step === CheckoutStep.SIGN_IN && <CheckoutStepAuth order={order} />}
        {step === CheckoutStep.PAYMENT && (
          <CheckoutStepPayment
            userId={userId}
            order={order}
            shopifyProductId={shopifyProductId}
            anonymousId={anonymousId}
            cartToken={cartToken}
          />
        )}
      </div>
    </Contained>
  );
}

function CheckoutMobile(props: Props) {
  const {
    userId,
    order,
    step,
    shopifyProductId,
    anonymousId,
    cartToken,
  } = props;

  return (
    <Contained>
      <div className="relative flex flex-col w-full mt-12 space-y-10">
        <CheckoutStepIndicator step={step} />

        {step === CheckoutStep.SIGN_IN && <CheckoutStepAuth order={order} />}
        {step === CheckoutStep.PAYMENT && (
          <CheckoutStepPayment
            userId={userId}
            order={order}
            shopifyProductId={shopifyProductId}
            anonymousId={anonymousId}
            cartToken={cartToken}
          />
        )}
      </div>
    </Contained>
  );
}

export default Checkout;
