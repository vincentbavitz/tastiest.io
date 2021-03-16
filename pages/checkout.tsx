import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutApi } from 'services/checkout';
import { UserDataApi } from 'services/userData';
import { CheckoutStepIndicator } from '../components/checkout/CheckoutStepIndicator';
import { CheckoutStepAuth } from '../components/checkout/steps/CheckoutStepAuth';
import { CheckoutStepComplete } from '../components/checkout/steps/CheckoutStepComplete';
import { CheckoutStepPayment } from '../components/checkout/steps/CheckoutStepPayment';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';
import { setCheckoutStep } from '../state/checkout';
import { IState } from '../state/reducers';
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
    return {
      redirect: {
        destination: '/?login=1',
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
    return {
      redirect: {
        destination: '/?login=1',
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

  const {
    flow: { step },
  } = useSelector((state: IState) => state.checkout);

  // If user is signed in, skip to payment screen
  const isSignedIn = Boolean(userId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSignedIn) {
      dispatch(setCheckoutStep(CheckoutStep.PAYMENT));
    }
  }, [isSignedIn]);

  const isAuthStep = !isSignedIn;
  const isPaymentStep = isSignedIn && step === CheckoutStep.PAYMENT;
  const isCompleteStep = isSignedIn && step === CheckoutStep.COMPLETE;

  return (
    <Contained>
      <div className="relative flex flex-col w-full mt-12 space-y-10">
        <CheckoutStepIndicator />

        {isAuthStep && <CheckoutStepAuth order={order} />}
        {isPaymentStep && (
          <CheckoutStepPayment
            userId={userId}
            stripeClientSecret={stripeClientSecret}
            order={order}
          />
        )}
        {isCompleteStep && <CheckoutStepComplete />}
      </div>
    </Contained>
  );
}

function CheckoutMobile(props: Props) {
  return <div></div>;
}

export default Checkout;
