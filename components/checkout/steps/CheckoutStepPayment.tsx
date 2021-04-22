import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import {
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementOptions,
} from '@stripe/stripe-js';
import { Input } from '@tastiest-io/tastiest-components';
import { HelpIcon } from '@tastiest-io/tastiest-icons';
import { dlog, IDateObject, IOrder } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { InputContactBirthday } from 'components/inputs/contact/InputContactBirthday';
import { useCheckout } from 'hooks/checkout/useCheckout';
import { useOrder } from 'hooks/checkout/useOrder';
import { useAuth } from 'hooks/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useUserData } from 'hooks/useUserData';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CheckoutStep, setCheckoutStep } from 'state/checkout';
import { UI } from '../../../constants';
import { InputCardNumberWrapper } from '../../inputs/card/InputCardNumberWrapper';
import { InputContactFirstName } from '../../inputs/contact/InputContactFirstName';
import { InputContactLastName } from '../../inputs/contact/InputContactLastName';
import { InputWrapper } from '../../inputs/InputWrapper';
import { Tooltip } from '../../Tooltip';
import { CheckoutPaymentPanel } from '../CheckoutPaymentPanel';
import { CheckoutTabs } from '../CheckoutTabs';

const CARD_ELEMENT_OPTIONS: StripeCardNumberElementOptions = {
  classes: {
    base: 'py-2 w-full',
  },
};

interface Props {
  userId: string;
  order: IOrder;
}

export function CheckoutStepPayment(props: Props) {
  const { order: initialOrder, userId } = props;

  const { user, isSignedIn } = useAuth();
  const { userData, setUserData } = useUserData(user);
  const dispatch = useDispatch();

  const { isMobile, isTablet, isDesktop } = useScreenSize();

  // Contact
  const [firstName, setFirstName] = useState<string>(
    userData?.details?.firstName ?? '',
  );
  const [lastName, setLastName] = useState<string>(
    userData?.details?.lastName ?? '',
  );
  const [birthday, setBirthday] = useState<IDateObject>(
    userData?.details?.birthday ?? null,
  );

  const {
    addCard,
    cardHolderName,
    setCardholderName,
    cardPostcode,
    setCardPostcode,
    cardBrand,
    onCardNumberChange,
  } = useCheckout();

  const { order, updateOrder, pay } = useOrder(
    initialOrder.token,
    initialOrder,
  );

  // Redirect if user is logged out
  useEffect(() => {
    if (isSignedIn === false) {
      dispatch(setCheckoutStep(CheckoutStep.SIGN_IN));
      return null;
    }
  }, [isSignedIn]);

  const onCardExpiryChange = (event: StripeCardExpiryElementChangeEvent) => {
    event;
  };

  const makePayment = async () => {
    const { paymentMethod, error: paymentMethodError } = await addCard(
      cardHolderName,
      cardPostcode,
    );

    if (paymentMethodError) {
      return { success: false, error: paymentMethodError };
    }

    const { error: updateOrderError } = await updateOrder({
      paymentMethodId: paymentMethod.id,
    });

    if (updateOrderError) {
      return { success: false, error: updateOrderError };
    }

    const { success, error } = await pay();
    dlog('CheckoutStepPayment ➡️ success:', success);
    dlog('CheckoutStepPayment ➡️ error:', error);
    //
  };

  return (
    <div className="flex flex-col-reverse w-full tablet:flex-row tablet:justify-between">
      <div
        style={{
          minWidth:
            isMobile || isTablet ? 'unset' : `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
        }}
        className="flex flex-col w-full pb-24 space-y-16 tablet:w-7/12"
      >
        <div className="">
          <CheckoutTabs tabs={[{ label: 'Contact Details' }]} />

          <div className="flex flex-col space-y-4">
            <InputContactFirstName
              value={firstName}
              onValueChange={value => setFirstName(value)}
            />

            <InputContactLastName
              value={lastName}
              onValueChange={setLastName}
            />

            <InputContactBirthday
              date={birthday}
              onDateChange={value => setBirthday(value)}
            />
          </div>
        </div>

        <div>
          <CheckoutTabs tabs={[{ label: 'Payment' }]} />

          <div className="flex flex-col space-y-4">
            <Input
              type="text"
              className="py-1 rounded-xl"
              label="Cardholder's Full Name"
              regex={/^([a-zA-z]{0,15}[ ]?){1,4}$/}
              value={cardHolderName}
              onValueChange={setCardholderName}
            />

            <InputCardNumberWrapper brand={cardBrand}>
              <CardNumberElement
                onChange={onCardNumberChange}
                options={CARD_ELEMENT_OPTIONS}
              />
            </InputCardNumberWrapper>

            <div className="flex w-full space-x-3">
              <InputWrapper
                size="large"
                label="Expiration Date"
                className="py-1"
              >
                <CardExpiryElement
                  onChange={onCardExpiryChange}
                  options={CARD_ELEMENT_OPTIONS}
                />
              </InputWrapper>

              <InputWrapper
                size="large"
                label="Security Code"
                className="py-1"
                externalSuffix={
                  <Tooltip content="This is the 3 digit code on the back of your card.">
                    <HelpIcon className="h-6" />
                  </Tooltip>
                }
              >
                <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
              </InputWrapper>
            </div>

            <Input
              label="Postcode"
              className="py-1 rounded-xl"
              regex={/^([a-zA-Z0-8]){1,10}$/}
              value={cardPostcode}
              onValueChange={setCardPostcode}
            />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'w-full tablet:flex-grow tablet:w-5/12',
          isDesktop && 'pl-10',
        )}
      >
        <CheckoutPaymentPanel order={order} submit={makePayment} />
      </div>
    </div>
  );
}
