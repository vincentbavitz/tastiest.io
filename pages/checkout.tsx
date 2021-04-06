import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useAuth } from 'hooks/useAuth';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutApi } from 'services/checkout';
import { UserDataApi } from 'services/userData';
import { setCheckoutStep } from 'state/checkout';
import { IState } from 'state/reducers';
import { CheckoutStepIndicator } from '../components/checkout/CheckoutStepIndicator';
import { CheckoutStepAuth } from '../components/checkout/steps/CheckoutStepAuth';
import { CheckoutStepPayment } from '../components/checkout/steps/CheckoutStepPayment';
import { Contained } from '../components/Contained';
import { UI } from '../constants';
import { ScreenContext } from '../contexts/screen';
import { CheckoutStep, IOrder } from '../types/checkout';

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
  const userDataApi = new UserDataApi();
  const { userId } = await userDataApi.init(context);

  // Verify order is legit; else redirect and wipe order data.
  const orderId = String(context.query.orderId ?? '') ?? null;

  // If no order exists in URI, redirect to home
  if (!orderId) {
    console.log('no order id');

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Verify order exists with Firebase
  const checkoutApi = new CheckoutApi(context);
  const order: IOrder = await checkoutApi.getOrderFromOrderRequest(orderId);

  console.log('checkout ➡️ order:', order);

  // If no order exists in Firebase, redirect to home
  if (!order) {
    console.log('no actual order ');

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Get or create payment intent
  const paymentIntent = await checkoutApi.getOrCreatePaymentIntent(order);
  const stripeClientSecret = paymentIntent.client_secret;

  return {
    props: { stripeClientSecret, userId, order },
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

  console.log('checkout ➡️ isSignedIn:', isSignedIn);
  console.log('checkout ➡️ user:', user?.uid);

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
  const { isDesktop } = useContext(ScreenContext);

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
  const { stripeClientSecret, userId, order } = props;
  const { stepIsAuth, stepIsPayment } = useCheckoutStep();

  return (
    <Contained maxWidth={UI.CHECKOUT_WIDTH_PX}>
      <div className="relative flex flex-col w-full mt-12 space-y-10">
        <CheckoutStepIndicator />

        {stepIsAuth && <CheckoutStepAuth order={order} />}
        {stepIsPayment && (
          <CheckoutStepPayment
            userId={userId}
            stripeClientSecret={stripeClientSecret}
            order={order}
          />
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
          <CheckoutStepPayment
            userId={userId}
            stripeClientSecret={stripeClientSecret}
            order={order}
          />
        )}
      </div>
    </Contained>
  );
}

export default Checkout;
