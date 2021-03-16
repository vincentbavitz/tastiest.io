import { ScreenContext } from 'contexts/screen';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { UI } from '../../../constants';
import { IState } from '../../../state/reducers';
import { CheckoutSignInTabSelected, IOrder } from '../../../types/checkout';
import { CheckoutAuthTabs } from '../CheckoutAuthTabs';
import CheckoutOrderSummaryAuth from '../CheckoutOrderSummaryAuth';
import { CheckoutSignIn } from '../CheckoutSignIn';
import { CheckoutSignUp } from '../CheckoutSignUp';

interface Props {
  order: IOrder;
}

export function CheckoutStepAuth({ order }: Props) {
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

      <CheckoutOrderSummaryAuth order={order} />
    </div>
  );
}
