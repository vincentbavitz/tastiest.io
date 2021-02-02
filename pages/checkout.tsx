import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutStepIndicator } from '../components/checkout/CheckoutStepIndicator';
import { CheckoutStepComplete } from '../components/checkout/steps/CheckoutStepComplete';
import { CheckoutStepPayment } from '../components/checkout/steps/CheckoutStepPayment';
import { CheckoutStepSignIn } from '../components/checkout/steps/CheckoutStepSignIn';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';
import { useAuth } from '../hooks/useAuth';
import { CheckoutStep, setCheckoutStep } from '../state/checkout';
import { IState } from '../state/reducers';

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

  const isSignInStep = !isSignedIn || step === CheckoutStep.SIGN_IN;
  const isPaymentStep = isSignedIn && step === CheckoutStep.PAYMENT;
  const isCompleteStep = isSignedIn && step === CheckoutStep.COMPLETE;

  return (
    <Contained>
      <div className="flex w-full space-x-10">
        <div
          style={{ minWidth: '433px' }}
          className="flex flex-col space-y-10 w-7/12"
        >
          <CheckoutStepIndicator />

          {isSignInStep && <CheckoutStepSignIn />}
          {isPaymentStep && <CheckoutStepPayment />}
          {isCompleteStep && <CheckoutStepComplete />}
        </div>

        <div className="flex-grow bg-blue-200"> </div>
      </div>
    </Contained>
  );
}

function CheckoutMobile() {
  return <div></div>;
}

export default Checkout;
