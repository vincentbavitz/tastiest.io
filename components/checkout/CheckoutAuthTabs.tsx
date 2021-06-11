import { Button } from '@tastiest-io/tastiest-components';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CheckoutSignInTabSelected,
  setSignInTabSelected,
} from '../../state/checkout';
import { IState } from '../../state/reducers';
import { CheckoutTabs, ITab } from './CheckoutTabs';

export function CheckoutAuthTabs() {
  const { signInTabSelected: tab } = useSelector(
    (state: IState) => state.checkout,
  );

  const { isDesktop } = useScreenSize();
  const dispatch = useDispatch();

  const tabs: ITab[] = [
    {
      label: 'I have an account',
      selected: tab === CheckoutSignInTabSelected.HAS_ACCOUNT,
      onClick: () =>
        dispatch(setSignInTabSelected(CheckoutSignInTabSelected.HAS_ACCOUNT)),
    },
    {
      label: "I'm new here",
      selected: tab === CheckoutSignInTabSelected.NEW_USER,
      onClick: () =>
        dispatch(setSignInTabSelected(CheckoutSignInTabSelected.NEW_USER)),
    },
  ];

  return isDesktop ? (
    <CheckoutTabs tabs={tabs} />
  ) : (
    <div className="flex flex-col space-y-4">
      {tab !== CheckoutSignInTabSelected.NEW_USER && (
        <Button
          wide
          type={
            tab === CheckoutSignInTabSelected.HAS_ACCOUNT ? 'text' : 'solid'
          }
          size="large"
          color={
            tab === CheckoutSignInTabSelected.NONE ||
            tab === CheckoutSignInTabSelected.HAS_ACCOUNT
              ? 'primary'
              : 'secondary'
          }
          off={tab === CheckoutSignInTabSelected.HAS_ACCOUNT}
          onClick={() =>
            dispatch(
              setSignInTabSelected(CheckoutSignInTabSelected.HAS_ACCOUNT),
            )
          }
        >
          I have an account
        </Button>
      )}

      {tab !== CheckoutSignInTabSelected.HAS_ACCOUNT && (
        <Button
          wide
          type={tab === CheckoutSignInTabSelected.NEW_USER ? 'text' : 'solid'}
          size="large"
          off={tab === CheckoutSignInTabSelected.NEW_USER}
          color={
            tab === CheckoutSignInTabSelected.NONE ||
            tab === CheckoutSignInTabSelected.NEW_USER
              ? 'primary'
              : 'secondary'
          }
          onClick={() =>
            dispatch(setSignInTabSelected(CheckoutSignInTabSelected.NEW_USER))
          }
        >
          I'm new here
        </Button>
      )}
    </div>
  );
}
