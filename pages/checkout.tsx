import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  dlog,
  FirestoreCollection,
  IOrder,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import nookies from 'nookies';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutStep, setCheckoutStep } from 'state/checkout';
import { IState } from 'state/reducers';
import { LocalEndpoint } from 'types/api';
import { LocalApi } from 'utils/api';
import { firebaseAdmin } from 'utils/firebaseAdmin';
import { CheckoutStepIndicator } from '../components/checkout/CheckoutStepIndicator';
import { CheckoutStepAuth } from '../components/checkout/steps/CheckoutStepAuth';
import { CheckoutStepPayment } from '../components/checkout/steps/CheckoutStepPayment';
import { Contained } from '../components/Contained';
import { UI } from '../constants';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY,
);

interface Props {
  userId: string;
  order: IOrder;
  stripeClientSecret: string;
}

export const getServerSideProps: GetServerSideProps = async context => {
  // Get user ID from cookie.
  const cookieToken = nookies.get(context)?.token;
  const userDataApi = new UserDataApi(cookieToken);
  const { userId } = await userDataApi.initFromCookieToken(cookieToken);

  // Verify order is legit; else redirect and wipe order data.
  const orderId = String(context.query.orderId ?? '') ?? null;

  // If no order exists in URI, redirect to home
  if (!orderId) {
    dlog('no order id');

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  // Get order request, given our order ID.
  // If the order request exists, /api/payments has already
  // verified that it's valid.
  const {
    data: { orderRequest },
  } = await LocalApi.get(LocalEndpoint.GET_ORDER_REQUEST, {
    orderId,
  });

  // Redirect if user somehow got to this state of no order request.
  if (!orderRequest) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // // Order request found. Initiate new order.
  // // Create a new order in Firestore that we can only modify if
  // // we have the order token
  // id: string;
  // deal: IDeal;
  // userId: string;
  // heads: number;
  // fromSlug: string;
  // totalPrice: number;
  // paymentDetails: null | IPaymentDetails;

  // discount: null | IPromo;

  // // Timestamps
  // // Null denotes not paid yet; not done yet.
  // paidAt: null | number;
  // orderedAt: null | number;
  // abandonedAt: null | number;

  // refund: null | {
  //   amountGBP: number;
  //   timestamp: number;
  // };

  const order: IOrder = {};

  firebaseAdmin.firestore().collection(FirestoreCollection.ORDERS).add({});

  return {
    props: { userId, order },
  };
};

const useCheckoutStep = () => {
  const {
    flow: { step },
  } = useSelector((state: IState) => state.checkout);

  // If user is signed in, skip to payment screen
  const { user } = useAuth();
  const isSignedIn = Boolean(user?.uid);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSignedIn) {
      dispatch(setCheckoutStep(CheckoutStep.PAYMENT));
    }
  }, [isSignedIn]);

  dlog('checkout ➡️ isSignedIn:', isSignedIn);
  dlog('checkout ➡️ user:', user?.uid);

  const stepIsAuth = !isSignedIn;
  const stepIsPayment = isSignedIn && step === CheckoutStep.PAYMENT;
  const stepIsComplete = isSignedIn && step === CheckoutStep.COMPLETE;

  return {
    stepIsAuth,
    stepIsPayment,
    stepIsComplete,
  };
};

// User goes /checkout; loads normally
// User enters details, applies promo code
//      --> fires off event to Firebase Functions
// --> Stripe, creates paymetn intent sends back to us
//        modify our firestore
// fetch from firestore after ... blegh

// paymentIntent = await TastiestApiBackend.createPaymetnIntent();

function Checkout(props: Props) {
  const { isDesktop } = useScreenSize();

  return (
    <div>
      <Head>
        <title>Checkout - Tastiest</title>
      </Head>
      <Elements stripe={stripePromise}>
        {isDesktop ? (
          <CheckoutDesktop {...props} />
        ) : (
          <CheckoutMobile {...props} />
        )}
      </Elements>
    </div>
  );
}

function CheckoutDesktop(props: Props) {
  const { userId, order } = props;
  const { stepIsAuth, stepIsPayment } = useCheckoutStep();

  const orderToken = '0aa4b9ec-6b80-4a53-a009-bb51a68a1080';

  return (
    <Contained maxWidth={UI.CHECKOUT_WIDTH_PX}>
      <div className="relative flex flex-col w-full mt-12 space-y-10">
        <CheckoutStepIndicator />

        {stepIsAuth && <CheckoutStepAuth order={order} />}
        {stepIsPayment && (
          <CheckoutStepPayment userId={userId} orderToken={orderToken} />
        )}
      </div>
    </Contained>
  );
}

function CheckoutMobile(props: Props) {
  const { stripeClientSecret, userId, order } = props;
  const { stepIsAuth, stepIsPayment } = useCheckoutStep();

  return (
    <Contained>
      <div className="relative flex flex-col w-full mt-12 space-y-10">
        <CheckoutStepIndicator />

        {stepIsAuth && <CheckoutStepAuth order={order} />}
        {stepIsPayment && (
          <CheckoutStepPayment userId={userId} orderToken={orderToken} />
        )}
      </div>
    </Contained>
  );
}

export default Checkout;
