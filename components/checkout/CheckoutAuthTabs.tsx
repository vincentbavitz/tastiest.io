import TabbedContent from 'components/TabbedContent';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CheckoutSignInTabSelected,
  setSignInTabSelected,
} from 'state/checkout';
import { IState } from 'state/reducers';
import { CheckoutSignIn } from './CheckoutSignIn';
import { CheckoutSignUp } from './CheckoutSignUp';

export function CheckoutAuthTabs() {
  const dispatch = useDispatch();
  const { signInTabSelected } = useSelector((state: IState) => state.checkout);

  return (
    <TabbedContent
      manualSelected={signInTabSelected}
      setManualSelected={value =>
        dispatch(setSignInTabSelected(value as CheckoutSignInTabSelected))
      }
    >
      {[
        {
          id: CheckoutSignInTabSelected.HAS_ACCOUNT,
          label: 'I have an account',
          content: (
            <div className="flex flex-col space-y-4">
              <CheckoutSignIn />
            </div>
          ),
        },
        {
          id: CheckoutSignInTabSelected.NEW_USER,
          label: "I'm new here",
          content: (
            <div className="flex flex-col space-y-4">
              <CheckoutSignUp />
            </div>
          ),
        },
      ]}
    </TabbedContent>
  );
}
