import { ScreenContext } from 'contexts/screen';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { UI } from '../../../constants';
import { IState } from '../../../state/reducers';
import { CheckoutSignInTabSelected } from '../../../types/checkout';
import { CheckoutAuthTabs } from '../CheckoutAuthTabs';
import { CheckoutSignIn } from '../CheckoutSignIn';
import { CheckoutSignUp } from '../CheckoutSignUp';

export function CheckoutStepAuth() {
  const {
    flow: { signInTabSelected: tab },
  } = useSelector((state: IState) => state.checkout);

  const { isMobile } = useContext(ScreenContext);

  return (
    <div className="flex w-full space-x-10">
      <div
        style={{
          maxWidth: isMobile ? 'unset' : `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
        }}
        className="flex flex-col space-y-6"
      >
        <CheckoutAuthTabs />

        {tab === CheckoutSignInTabSelected.NEW_USER ? (
          <CheckoutSignUp />
        ) : (
          <CheckoutSignIn />
        )}
      </div>
    </div>
  );
}
