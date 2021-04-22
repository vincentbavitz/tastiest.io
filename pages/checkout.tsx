import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  dlog,
  FirestoreCollection,
  IOrder,
  PAYMENTS,
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
}

export const getServerSideProps: GetServerSideProps = async context => {
  // Get user ID from cookie.
  const cookieToken = nookies.get(context)?.token;
  const userDataApi = new UserDataApi(firebaseAdmin);
  const { userId } = await userDataApi.initFromCookieToken(cookieToken);

  // Verify order is legit; else redirect and wipe order data.
  const token = String(context.query.token ?? '') ?? null;

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

  // Redirect if user somehow got to this state of no order request.
  if (!order) {
    return {
      redirect: {
        // TODO -> Destination should be /city/cuisine/slug
        destination: '/',
        permanent: false,
      },
    };
  }

  // Order already paid, or order expired?
  const isExpired = order.createdAt + PAYMENTS.ORDER_EXPIRY_MS < Date.now();
  if (order.paidAt !== null || isExpired) {
    return {
      redirect: {
        // TODO -> Destination should be /city/cuisine/slug
        destination: '',
        permanent: false,
      },
    };
  }

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

  return (
    <Contained maxWidth={UI.CHECKOUT_WIDTH_PX}>
      <div className="relative flex flex-col w-full mt-12 space-y-10">
        <CheckoutStepIndicator />

        {stepIsAuth && <CheckoutStepAuth order={order} />}
        {stepIsPayment && <CheckoutStepPayment userId={userId} order={order} />}
      </div>
    </Contained>
  );
}

function CheckoutMobile(props: Props) {
  const { userId, order } = props;
  const { stepIsAuth, stepIsPayment } = useCheckoutStep();

  return (
    <Contained>
      <div className="relative flex flex-col w-full mt-12 space-y-10">
        <CheckoutStepIndicator />

        {stepIsAuth && <CheckoutStepAuth order={order} />}
        {stepIsPayment && <CheckoutStepPayment userId={userId} order={order} />}
      </div>
    </Contained>
  );
}

export default Checkout;
