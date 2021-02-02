import React from 'react';
import { CheckoutSignIn } from '../CheckoutSignIn';
import { CheckoutSignInTabs } from '../CheckoutSignInTabs';

export function CheckoutStepSignIn() {
  return (
    <div className="flex flex-col space-y-6">
      <CheckoutSignInTabs />
      <CheckoutSignIn />
    </div>
  );
}
