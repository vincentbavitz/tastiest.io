import { formatCurrency, IOrder } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CheckoutSignInTabSelected,
  setSignInTabSelected,
} from 'state/checkout';
import { UI } from '../../../constants';
import { IState } from '../../../state/reducers';
import { CheckoutAuthTabs } from '../CheckoutAuthTabs';
import { CheckoutCard } from '../CheckoutCard';
import { CheckoutSignIn } from '../CheckoutSignIn';
import { CheckoutSignUp } from '../CheckoutSignUp';

interface Props {
  order: IOrder;
}

export function CheckoutStepAuth(props: Props) {
  const { isDesktop } = useScreenSize();

  return isDesktop ? (
    <CheckoutStepAuthDesktop {...props} />
  ) : (
    <CheckoutStepAuthMobile {...props} />
  );
}

const CheckoutStepAuthDesktop = ({ order }: Props) => {
  const { signInTabSelected: tab } = useSelector(
    (state: IState) => state.checkout,
  );

  const totalPrice = (order?.heads ?? 1) * order?.deal?.pricePerHeadGBP;

  // Set initial value of sign in
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSignInTabSelected(CheckoutSignInTabSelected.HAS_ACCOUNT));
  }, []);

  return (
    <div className="flex justify-between w-full">
      <div
        style={{
          minWidth: `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
        }}
        className="flex flex-col w-7/12 pb-24 space-y-4"
      >
        <CheckoutAuthTabs />
      </div>

      <div className="flex-grow w-5/12 pl-10">
        <CheckoutCard title={order?.deal?.tagline} order={order}>
          <p className="font-medium">{order?.deal?.restaurant?.name}</p>

          <div className="flex items-center justify-between">
            <p className="text-sm">
              {order?.deal?.tagline} x{order?.heads}
            </p>

            <p className="pl-4 text-xl font-medium">£{totalPrice}</p>
          </div>
        </CheckoutCard>
      </div>
    </div>
  );
};

const CheckoutStepAuthMobile = ({ order }: Props) => {
  const { signInTabSelected: tab } = useSelector(
    (state: IState) => state.checkout,
  );

  const totalPrice = formatCurrency(order.heads * order?.deal?.pricePerHeadGBP);

  // Set initial value of sign in
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSignInTabSelected(CheckoutSignInTabSelected.NONE));
  }, []);

  return (
    <div className="flex flex-col w-full space-y-6">
      {tab === CheckoutSignInTabSelected.NONE && (
        <CheckoutCard title={order?.deal?.tagline} order={order}>
          <div>
            <p className="text-xl font-medium">
              {order?.deal?.restaurant?.name}
            </p>
            <p className="text-sm mobile:text-base">{order?.deal?.tagline}</p>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p>
                <span className="font-medium">Qty:</span> {order.heads}
              </p>

              <p className="pl-4 text-xl font-medium">£{totalPrice}</p>
            </div>
          </div>
        </CheckoutCard>
      )}

      <div
        style={{
          minWidth: `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
        }}
        className="flex flex-col pb-24 space-y-4"
      >
        <CheckoutAuthTabs />

        {tab === CheckoutSignInTabSelected.NEW_USER && <CheckoutSignUp />}
        {tab === CheckoutSignInTabSelected.HAS_ACCOUNT && <CheckoutSignIn />}
      </div>
    </div>
  );
};
