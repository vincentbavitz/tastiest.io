import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../state/reducers';
import { CheckoutSignInTabSelected } from '../../../types/checkout';
import { CheckoutAuthTabs } from '../CheckoutAuthTabs';
import { CheckoutSignIn } from '../CheckoutSignIn';
import { CheckoutSignUp } from '../CheckoutSignUp';

export function CheckoutStepAuth() {
  const {
    flow: { signInTabSelected: tab },
  } = useSelector((state: IState) => state.checkout);

  return (
    <div className="flex flex-col space-y-6">
      <CheckoutAuthTabs />

      {tab === CheckoutSignInTabSelected.NEW_USER ? (
        <CheckoutSignUp />
      ) : (
        <CheckoutSignIn />
      )}
    </div>
  );
}
