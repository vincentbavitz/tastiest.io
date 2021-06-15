import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import {
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementOptions,
} from '@stripe/stripe-js';
import { Tooltip } from '@tastiest-io/tastiest-components';
import { HelpIcon } from '@tastiest-io/tastiest-icons';
import {
  dlog,
  IDateObject,
  IOrder,
  TastiestPaymentError,
  UserData,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { InputContactBirthday } from 'components/inputs/contact/InputContactBirthday';
import { InputMobile } from 'components/inputs/contact/InputMobile';
import { InputName } from 'components/inputs/contact/InputName';
import InputPostcode from 'components/inputs/contact/InputPostcode';
import { useCheckout } from 'hooks/checkout/useCheckout';
import { useOrder } from 'hooks/checkout/useOrder';
import { useAuth } from 'hooks/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useUserData } from 'hooks/useUserData';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPaymentProcessing } from 'state/checkout';
import { IState } from 'state/reducers';
import { UI } from '../../../constants';
import { InputCardNumberWrapper } from '../../inputs/card/InputCardNumberWrapper';
import { InputWrapper } from '../../inputs/InputWrapper';
import { CheckoutPaymentPanel } from '../CheckoutPaymentPanel';
import { CheckoutTabs } from '../CheckoutTabs';

const CARD_ELEMENT_OPTIONS: StripeCardNumberElementOptions = {
  classes: {
    base: 'py-2 w-full',
  },
  style: {
    base: {
      fontSize: '16px',
    },
  },
};

interface Props {
  userId: string;
  order: IOrder;
  anonymousId: string;
  shopifyProductId: string;
}

type FormData = {
  firstName: string;
  lastName: string;
  mobile: string;
  cardPostcode: string;
  cardHolderName: string;
};

export function CheckoutStepPayment(props: Props) {
  const { order: initialOrder, shopifyProductId } = props;

  const { user, isSignedIn } = useAuth();
  const { userData, setUserData } = useUserData(user);
  const dispatch = useDispatch();

  const { isPaymentProcessing } = useSelector(
    (state: IState) => state.checkout,
  );

  const { isMobile, isTablet, isDesktop } = useScreenSize();

  // Contact
  const [birthday, setBirthday] = useState<IDateObject>(
    userData?.details?.birthday ?? null,
  );

  // Checkout and order hooks
  const { cardBrand, addCard, onCardNumberChange } = useCheckout();
  const { order, pay, updateOrder } = useOrder(
    initialOrder?.token,
    initialOrder,
  );

  // For when cards are declined, etc
  const [error, setError] = useState<TastiestPaymentError | null>(null);

  useEffect(() => {
    dlog('CheckoutStepPayment ➡️ isPaymentProcessing:', isPaymentProcessing);
  }, [isPaymentProcessing]);

  const onCardExpiryChange = (event: StripeCardExpiryElementChangeEvent) => {
    event;
  };

  const makePayment = async ({
    firstName,
    lastName,
    mobile,
    cardPostcode,
    cardHolderName,
  }: FormData) => {
    // Validate birthday (input itself already does user facing error message)
    if (
      birthday?.day.length !== 2 ||
      birthday?.month.length !== 2 ||
      birthday?.year.length !== 4
    ) {
      return;
    }

    // Set user data, only if it differs from current data
    if (
      firstName?.length > 0 ||
      lastName?.length > 0 ||
      mobile?.length > 0 ||
      cardPostcode?.length > 0 ||
      JSON.stringify(birthday) !== JSON.stringify(userData.details?.birthday)
    ) {
      setUserData(UserData.DETAILS, {
        firstName,
        lastName,
        birthday,
        mobile,
        postalCode: cardPostcode,
      });
    }

    // Start isLoading
    dispatch(setIsPaymentProcessing(true));
    setError(null);

    const { paymentMethod, error: paymentMethodError } = await addCard(
      cardHolderName,
      cardPostcode,
    );

    // Error adding card. Either card already exists or validation error
    if (paymentMethodError) {
      dlog('CheckoutStepPayment ➡️ paymentMethodError:', paymentMethodError);

      dispatch(setIsPaymentProcessing(false));
      setError({
        code: 'card_error',
        type: 'tastiest-payment-error',
        message: 'This card is already in use. Please contact support.',
      });

      return;
    }

    const { error: updateOrderError } = await updateOrder({
      paymentMethodId: paymentMethod.id,
    });

    if (updateOrderError) {
      dlog('CheckoutStepPayment ➡️ updateOrderError:', updateOrderError);
      dispatch(setIsPaymentProcessing(false));
      setError({
        code: 'update_order_error',
        type: 'api_error',
        message: 'There was an error updating your order.',
      });

      dlog('CheckoutStepPayment ➡️ updateOrderError:', updateOrderError);
      return { success: false, error: updateOrderError };
    }

    const { success, error } = await pay(shopifyProductId);

    // Uh-oh - a general payment error!
    // This usually means the card declined.
    if (error) {
      setError({
        code: 'general_payment_error',
        type: 'card_error',
        message:
          'There was an error processing your payment. Please try using another card.',
      });
    }

    dlog('CheckoutStepPayment ➡️ error:', error);

    dispatch(setIsPaymentProcessing(false));
  };

  useEffect(() => {
    dlog('CheckoutStepPayment ➡️ order:', order);
  }, [order]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  dlog('CheckoutStepPayment ➡️ errors:', errors);

  return (
    <div className="flex flex-col-reverse w-full tablet:flex-row tablet:justify-between">
      <div
        style={{
          minWidth:
            isMobile || isTablet ? 'unset' : `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
        }}
        className="flex flex-col w-full pb-20 space-y-16 tablet:pb-0 tablet:w-7/12"
      >
        <div>
          {isDesktop ? (
            <CheckoutTabs tabs={[{ label: 'Contact Details' }]} />
          ) : (
            <div className="pt-4 mb-4 text-lg font-medium text-gray-600 border-b border-gray-400">
              Contact details
            </div>
          )}

          <div className="flex flex-col space-y-4">
            <InputName
              name="firstName"
              size="large"
              label="First Name"
              defaultValue={userData?.details?.firstName}
              control={control}
              disabled={isPaymentProcessing}
            />

            <InputName
              name="lastName"
              size="large"
              label="Last Name"
              defaultValue={userData?.details?.lastName}
              control={control}
              disabled={isPaymentProcessing}
            />

            <InputContactBirthday
              date={birthday}
              disabled={isPaymentProcessing}
              onDateChange={value => setBirthday(value)}
            />

            <InputMobile
              name="mobile"
              size="large"
              control={control}
              disabled={isPaymentProcessing}
              defaultValue={userData?.details?.mobile}
            />
          </div>
        </div>

        <div>
          {isDesktop ? (
            <CheckoutTabs tabs={[{ label: 'Payment' }]} />
          ) : (
            <div className="pt-4 mb-4 text-lg font-medium text-gray-600 border-b border-gray-400">
              Payment details
            </div>
          )}

          <div className="flex flex-col space-y-4">
            <InputName
              size="large"
              name="cardHolderName"
              label="Cardholder's Full Name"
              requiredText="Please enter the cardholder's name"
              control={control}
              disabled={isPaymentProcessing}
            />

            <InputCardNumberWrapper
              brand={cardBrand}
              disabled={isPaymentProcessing}
            >
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
                disabled={isPaymentProcessing}
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
                disabled={isPaymentProcessing}
                externalSuffix={
                  <Tooltip
                    placement="top-right"
                    content="This is the 3 digit code on the back of your card."
                  >
                    <HelpIcon className="h-6 text-gray-300 duration-200 fill-current hover:text-gray-400" />
                  </Tooltip>
                }
              >
                <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
              </InputWrapper>
            </div>

            <InputPostcode
              size="large"
              label="Postcode"
              name="cardPostcode"
              placeholder="WC2H 7LT"
              control={control}
              disabled={isPaymentProcessing}
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
        <CheckoutPaymentPanel
          order={order}
          submit={handleSubmit(makePayment)}
          error={error}
        />
      </div>
    </div>
  );
}
