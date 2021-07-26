import { LoadingOutlined } from '@ant-design/icons';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  dlog,
  FirestoreCollection,
  IOrder,
  PAYMENTS,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import Analytics from 'analytics-node';
import { useAuth } from 'hooks/auth/useAuth';
import { useOrder } from 'hooks/checkout/useOrder';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import nookies from 'nookies';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect } from 'react';
import { CheckoutStep } from 'state/checkout';
import { db, firebaseAdmin } from 'utils/firebaseAdmin';
import { CheckoutStepIndicator } from '../components/checkout/CheckoutStepIndicator';
import { CheckoutStepAuth } from '../components/checkout/steps/CheckoutStepAuth';
import { CheckoutStepPayment } from '../components/checkout/steps/CheckoutStepPayment';
import { Contained } from '../components/Contained';
import { UI } from '../constants';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY
    : process.env.NEXT_PUBLIC_STRIPE_LIVE_PUBLISHABLE_KEY,
);

const analytics = new Analytics(process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY);

interface Props {
  order: IOrder;
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
  const snapshot = await db(FirestoreCollection.ORDERS)
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

  // Order belongs to this user?
  if (userId && order?.userId && order.userId !== userId) {
    return {
      redirect: {
        destination: '/ad',
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
        destination: '',
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

  const props: Props = {
    order,
    userId,
    step: userId ? CheckoutStep.PAYMENT : CheckoutStep.SIGN_IN,
  };

  return { props };
};

/** Parent component takes initial values from props
 *  and feeds dynamic values into children
 */
function Checkout(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { isDesktop } = useScreenSize();
  const { order } = useOrder(props.order.token, props.order);

  // User sign in management needs to be very explicit here
  const { user, isSignedIn } = useAuth();

  dlog('checkout ➡️ user:', user);

  // Does this order really belong to the signed in user?
  useEffect(() => {
    if (user?.uid && order?.userId && user.uid !== order?.userId) {
      window.location.href = '/';
    }
  }, [user]);

  const step: CheckoutStep = user?.uid
    ? CheckoutStep.PAYMENT
    : CheckoutStep.SIGN_IN;

  const renderTawkToSnippet = () => `
    <!--Start of Tawk.to Script-->
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/60cb997d65b7290ac63685ba/1f9t2cevc';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    <!--End of Tawk.to Script-->
  `;

  return (
    <div className="flex-grow pb-20">
      <Head>
        <title>Checkout - Tastiest</title>
        <script dangerouslySetInnerHTML={{ __html: renderTawkToSnippet() }} />
      </Head>

      <Elements stripe={stripePromise}>
        <Contained maxWidth={UI.CHECKOUT_WIDTH_PX}>
          <div className="relative flex flex-col w-full mt-12 space-y-10">
            <CheckoutStepIndicator step={step} />

            {isSignedIn === null ? (
              <div className="flex justify-between">
                <div className="w-full pt-32 tablet:w-7/12">
                  <CheckoutLoader />
                </div>
              </div>
            ) : (
              <>
                {step === CheckoutStep.SIGN_IN && (
                  <CheckoutStepAuth order={order} />
                )}
                {step === CheckoutStep.PAYMENT && (
                  <CheckoutStepPayment userId={user.uid} order={order} />
                )}
              </>
            )}
          </div>
        </Contained>
      </Elements>
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
