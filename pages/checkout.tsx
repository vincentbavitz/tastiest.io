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
    <div>
      <Contained>
        <div
          style={{ minWidth: '433px' }}
          className="flex flex-col space-y-10 w-7/12"
        >
          <CheckoutStepIndicator step={CheckoutStep.COMPLETE} />
          <CheckoutSignInTabs tabs={signInTabs} />
          <CheckoutSignIn />
        </div>
      </Contained>
    </div>
  );
}

function CheckoutMobile() {
  return <div></div>;
}

export default Checkout;
