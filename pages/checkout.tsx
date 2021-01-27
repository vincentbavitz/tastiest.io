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
  { label: 'I have an account', onClick: () => null },
  { label: "I'm new here", onClick: () => null },
];

function CheckoutDesktop() {
  return (
    <div>
      <Contained>
        <div className="flex flex-col w-7/12">
          <CheckoutStepIndicator step={CheckoutStep.COMPLETE} />

          <CheckoutSignInTabs tabs={signInTabs} />
        </div>
      </Contained>
    </div>
  );
}

function CheckoutMobile() {
  return <div></div>;
}

export default Checkout;
