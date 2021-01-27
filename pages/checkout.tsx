import React, { useContext } from 'react';
import { CheckoutSignInTabs } from '../components/checkout/CheckoutSignInTabs';
import {
  CheckoutStep,
  CheckoutStepIndicator,
} from '../components/checkout/CheckoutStepIndicator';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';

function Checkout() {
  const { isDesktop } = useContext(ScreenContext);
  return isDesktop ? <CheckoutDesktop /> : <CheckoutMobile />;
}

const signInTabs = [
  { label: 'I have an account', selected: true, onClick: () => null },
  { label: "I'm new here", selected: false, onClick: () => null },
];

function CheckoutDesktop() {
  return (
    <Contained>
      <div className="flex w-full space-x-10">
        <div
          style={{ minWidth: '433px' }}
          className="flex flex-col space-y-10 w-7/12"
        >
          <CheckoutStepIndicator step={CheckoutStep.COMPLETE} />
          <CheckoutSignInTabs tabs={signInTabs} />
          {/* <CheckoutSignIn /> */}
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
