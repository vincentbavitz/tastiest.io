import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSignInTabSelected } from '../../state/checkout';
import { IState } from '../../state/reducers';
import { CheckoutSignInTabSelected } from '../../types/checkout';
import { CheckoutTabs, ITab } from './CheckoutTabs';

export function CheckoutAuthTabs() {
  const {
    flow: { signInTabSelected },
  } = useSelector((state: IState) => state.checkout);
  const disaptch = useDispatch();

  const tabs: ITab[] = [
    {
      label: 'I have an account',
      selected: signInTabSelected === CheckoutSignInTabSelected.HAS_ACCOUNT,
      onClick: () =>
        disaptch(setSignInTabSelected(CheckoutSignInTabSelected.HAS_ACCOUNT)),
    },
    {
      label: "I'm new here",
      selected: signInTabSelected === CheckoutSignInTabSelected.NEW_USER,
      onClick: () =>
        disaptch(setSignInTabSelected(CheckoutSignInTabSelected.NEW_USER)),
    },
  ];

  return <CheckoutTabs tabs={tabs} />;
}
