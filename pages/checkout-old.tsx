import { LoadingOutlined } from '@ant-design/icons';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { loadStripe } from '@stripe/stripe-js';
import {
  dlog,
  FirestoreCollection,
  Order,
  PAYMENTS,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLockBodyScroll } from 'react-use';
import { CheckoutStep } from 'state/checkout';
import { IState } from 'state/reducers';
import { db, firebaseAdmin } from 'utils/firebaseAdmin';
import { CheckoutStepIndicator } from '../components/checkout/CheckoutStepIndicator';
import { Contained } from '../components/Contained';
import { UI } from '../constants';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY
    : process.env.NEXT_PUBLIC_STRIPE_LIVE_PUBLISHABLE_KEY,
);

const Analytics = require('analytics-node');
const analytics = new Analytics(process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY);

interface Props {
  order: Order;
  step: CheckoutStep;
  userId: string | null;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
  // Get user ID from cookie.
  const cookieToken = nookies.get(context)?.token;
  const userDataApi = new UserDataApi(firebaseAdmin);
  const { userId } = await userDataApi.initFromCookieToken(cookieToken);

  const token = String(context.query.token);

  // If no order exists in URI, redirect to home.
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
  const snapshot = await db(FirestoreCollection.ORDERS)
    .where('token', '==', token)
    .limit(1)
    .get();

  let order: Order;
  snapshot.docs.forEach(doc => (order = doc.data() as Order));

  // Redirect if user somehow got to this state given no order request
  if (!order) {
    dlog('no order');

    return {
      redirect: {
        // TODO -> Destination should be /city/cuisine/restaurant/slug
        destination: '/',
        permanent: false,
      },
    };
  }

  dlog('checkout ➡️ userId:', userId);
  dlog('checkout ➡️ order:', order);

  // Order belongs to this user?
  if (userId && order.userId && order.userId !== userId) {
    // Destroy cookie if it's invalid.
    nookies.destroy(context, 'token');
    dlog('Bad user ID', order.userId, userId);

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Order expired?
  const isExpired = order.createdAt + PAYMENTS.ORDER_EXPIRY_MS < Date.now();
  if (isExpired) {
    dlog('checkout ➡️ isExpired:', isExpired);

    return {
      redirect: {
        // TODO -> Destination should be /city/cuisine/slug
        destination: '',
        permanent: false,
      },
    };
  }

  // Order already paid? Redirect to thank-you page
  if (order.paidAt !== null) {
    dlog('checkout ➡️ order.paidAt:', order.paidAt);

    return {
      redirect: {
        destination: `/thank-you?token=${token}`,
        permanent: false,
      },
    };
  }

  const recent = await db(FirestoreCollection.ORDERS)
    .where('userId', '==', order.userId)
    .orderBy('createdAt', 'desc')
    .limit(10)
    .get();

  dlog('checkout ➡️     recent,:', recent);

  const props: Props = {
    order,
    userId,
    step: userId ? CheckoutStep.PAYMENT : CheckoutStep.SIGN_IN,
  };

  return { props };
};

const fadeInBackground = keyframes`
     0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const PaymentLoadingOverlay = styled.div`
  animation: ${fadeInBackground} 0.25s;
`;

/** Parent component takes initial values from props
 *  and feeds dynamic values into children
 */
function Checkout(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const router = useRouter();

  const { isDesktop } = useScreenSize();
  // const { order } = useOrder(props.order.token, props.order);

  const { isPaymentProcessing } = useSelector(
    (state: IState) => state.checkout,
  );

  useLockBodyScroll(isPaymentProcessing);

  // User sign in management needs to be very explicit here
  const { user, isSignedIn } = useAuth();

  // Preload the thank-you page
  useEffect(() => {
    router.prefetch('/thank-you');
  }, []);

  // // Does this order really belong to the signed in user?
  // useEffect(() => {
  //   if (user?.uid && order?.userId && user.uid !== order?.userId) {
  //     window.location.href = '/';
  //   }
  // }, [user]);

  const step: CheckoutStep = user?.uid
    ? CheckoutStep.PAYMENT
    : CheckoutStep.SIGN_IN;

  return (
    <div className="flex-grow pb-20">
      <Head>
        <title>Checkout - Tastiest</title>
      </Head>

      <NextSeo
        title="Tastiest - Checkout"
        description="Tastiest Payment & Checkout"
        openGraph={{
          title: 'Tastiest - Checkout',
          description: 'Tastiest - Payment & Checkout',
          images: [
            {
              url: 'https://tastiest.io/assets/seo/page/checkout-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest Checkout Hero',
            },
            {
              url: 'https://tastiest.io//assets/seo/page/checkout-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest Checkout Hero',
            },
          ],
        }}
      />

      {isPaymentProcessing ? (
        <PaymentLoadingOverlay className="fixed inset-0 z-50 flex justify-center items-center bg-light">
          <CheckoutLoader />
        </PaymentLoadingOverlay>
      ) : null}

      <Contained maxWidth={UI.CHECKOUT_WIDTH_PX}>
        <div className="relative flex flex-col w-full mt-12 space-y-10">
          <CheckoutStepIndicator step={step} />

          {isSignedIn === null ? (
            <div className="flex justify-between">
              <div className="w-full pt-32 md:w-7/12">
                <CheckoutLoader />
              </div>
            </div>
          ) : (
            <>
              {/* {step === CheckoutStep.SIGN_IN && (
                <AuthTabsProvider>
                  <CheckoutStepAuth order={order} />
                </AuthTabsProvider>
              )}
              <Elements stripe={stripePromise}>
                {step === CheckoutStep.PAYMENT && (
                  <CheckoutStepPayment userId={user.uid} order={order} />
                )}
              </Elements> */}
            </>
          )}
        </div>
      </Contained>
    </div>
  );
}

const CheckoutLoader = () => {
  return (
    <div className="flex items-center justify-center flex-grow w-full h-full">
      <LoadingOutlined className="text-6xl text-primary" />
    </div>
  );
};

export default Checkout;
