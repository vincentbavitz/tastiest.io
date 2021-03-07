import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { GetServerSideProps } from 'next';
import process from 'process';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stripe from 'stripe';
import { CheckoutOrderSummary } from '../components/checkout/CheckoutOrderSummary';
import { CheckoutStepIndicator } from '../components/checkout/CheckoutStepIndicator';
import { CheckoutStepAuth } from '../components/checkout/steps/CheckoutStepAuth';
import { CheckoutStepComplete } from '../components/checkout/steps/CheckoutStepComplete';
import { CheckoutStepPayment } from '../components/checkout/steps/CheckoutStepPayment';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';
import { useAuth } from '../hooks/useAuth';
import { setCheckoutStep } from '../state/checkout';
import { IState } from '../state/reducers';
import { CheckoutStep } from '../types/checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY_TEST);

interface Props {
  stripeClientSecret: string;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST, {});

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'gbp',
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: 'accept_a_payment' },
  });

  // Get user data sever side.

  // Get deal from url params

  // Check if cart is expired or invalid

  return {
    props: { stripeClientSecret: paymentIntent.client_secret },
  };
};

function Checkout({ stripeClientSecret }: Props) {
  const { isDesktop } = useContext(ScreenContext);
  return isDesktop ? (
    <CheckoutDesktop stripeClientSecret={stripeClientSecret} />
  ) : (
    <CheckoutMobile stripeClientSecret={stripeClientSecret} />
  );
}

function CheckoutDesktop({ stripeClientSecret }: Props) {
  const {
    flow: { step },
  } = useSelector((state: IState) => state.checkout);

  // If user is signed in, skip to payment screen
  const { isSignedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSignedIn) {
      dispatch(setCheckoutStep(CheckoutStep.PAYMENT));
    }
  }, [isSignedIn]);

  // useEffect(() => {
  //   dispatch(
  //     setOrder({
  //       restaurantID: '41214324322',
  //       restaurantName: 'Steakhouse Bar & Grill',
  //       dealName: 'Experience the best steak in London',
  //       dealImage: {
  //         source:
  //           'https://www.tasteofhome.com/wp-content/uploads/2019/01/medium-rare-steak-shutterstock_706040446.jpg',
  //         altText: 'sdfsdf',
  //         description: '',
  //       },
  //       dealDescription: '',
  //       dealPrefix: '',
  //       dealItems: ['Two-course-meal'],
  //       pricePerHeadGBP: 25,
  //       heads: 3,
  //     }),
  //   );
  // }, []);

  const isAuthStep = !isSignedIn;
  const isPaymentStep = isSignedIn && step === CheckoutStep.PAYMENT;
  const isCompleteStep = isSignedIn && step === CheckoutStep.COMPLETE;

  return (
    <Elements stripe={stripePromise}>
      <Contained>
        <div className="flex w-full space-x-10">
          <div
            style={{ minWidth: '360px' }}
            className="flex flex-col w-7/12 mt-12 space-y-10"
          >
            <CheckoutStepIndicator />

            {isAuthStep && <CheckoutStepAuth />}
            {isPaymentStep && <CheckoutStepPayment />}
            {isCompleteStep && <CheckoutStepComplete />}
          </div>

          <CheckoutOrderSummary stripeClientSecret={stripeClientSecret} />
        </div>
      </Contained>
    </Elements>
  );
}

function CheckoutMobile(props: Props) {
  return <div></div>;
}

export default Checkout;
