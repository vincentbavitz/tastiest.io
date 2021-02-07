import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutOrderSummary } from '../components/checkout/CheckoutOrderSummary';
import { CheckoutStepIndicator } from '../components/checkout/CheckoutStepIndicator';
import { CheckoutStepAuth } from '../components/checkout/steps/CheckoutStepAuth';
import { CheckoutStepComplete } from '../components/checkout/steps/CheckoutStepComplete';
import { CheckoutStepPayment } from '../components/checkout/steps/CheckoutStepPayment';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';
import { useAuth } from '../hooks/useAuth';
import { setCheckoutStep, setOrder } from '../state/checkout';
import { IState } from '../state/reducers';
import { CheckoutStep } from '../types/checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51HVFsIHZaOt3USRGOXhAlkKI9uBar8ZAnRY7lXJgyQWnfQwnlUoqgyKRPpjXYqSsFJQyGaAqeSbnsSi2IxAhnHZA00v99BVUGc',
);

function Checkout() {
  const { isDesktop } = useContext(ScreenContext);
  return isDesktop ? <CheckoutDesktop /> : <CheckoutMobile />;
}

function CheckoutDesktop() {
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

  useEffect(() => {
    dispatch(
      setOrder({
        restaurantID: '41214324322',
        restaurantName: 'Steakhouse Bar & Grill',
        dealName: 'Experience the best steak in London',
        dealImage: {
          source:
            'https://www.tasteofhome.com/wp-content/uploads/2019/01/medium-rare-steak-shutterstock_706040446.jpg',
          altText: 'sdfsdf',
          description: '',
        },
        dealDescription: '',
        dealPrefix: '',
        dealItems: ['Two-course-meal'],
        pricePerHeadGBP: 25,
        heads: 3,
      }),
    );
  }, []);

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

          <CheckoutOrderSummary />
        </div>
      </Contained>
    </Elements>
  );
}

function CheckoutMobile() {
  return <div></div>;
}

export default Checkout;
