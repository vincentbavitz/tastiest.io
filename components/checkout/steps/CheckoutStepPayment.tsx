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
import { IDateObject, IOrder } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { InputContactBirthday } from 'components/inputs/contact/InputContactBirthday';
import { useCheckout } from 'hooks/checkout/useCheckout';
import { useAuth } from 'hooks/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useUserData } from 'hooks/useUserData';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const { order, userId } = props;

  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);
  const dispatch = useDispatch();

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

  const { isMobile, isTablet, isDesktop } = useScreenSize();

  // Now that we're logged in, update order with user ID
  // useEffect(() => {
  //   updateOrder(order.id, { userId });
  // }, []);

  // if (!userId) {
  //   dispatch(setCheckoutStep(CheckoutStep.SIGN_IN));
  //   return null;
  // }

  // const pay = async (stripeClientSecret: string) => {
  //   if (!stripe || !elements) {
  //     return { success: null, error: null };
  //   }

  //   try {
  //     const { paymentMethod } = await stripe.createPaymentMethod({
  //       type: 'card',
  //       card: elements.getElement(CardNumberElement),
  //     });

  //     const { error, paymentIntent } = await stripe.confirmCardPayment(
  //       stripeClientSecret,
  //       {
  //         payment_method: paymentMethod.id,
  //       },
  //     );

  //     if (error) {
  //       return { success: false, error: error?.message };
  //     }

  //     // Payment success
  //     if (paymentIntent.status === 'succeeded') {
  //       return { success: true, error: null };
  //     }
  //   } catch (error) {
  //     return { success: false, error: error?.messsage };
  //   }

  //   // Segment: Payment failure event
  //   return { success: false, error: 'Unknown error' };
  // };

  // const handleSubmit = async () => {
  //   // Ensure all inputs are valid
  //   // DO THIS BY FIXING onBlurRegex for all inputs
  //   if (
  //     firstName.length < 2 ||
  //     lastName.length < 2 ||
  //     !birthday.day ||
  //     !birthday.month ||
  //     !birthday.year
  //   ) {
  //     alert('Please fill out contact details');
  //   }

  //   // const { success, error } = await pay(stripeClientSecret);

  //   const userDetails: IUserDetails = {
  //     firstName,
  //     lastName,
  //     birthday,
  //     address: {
  //       address: '',
  //       postalCode: cardPostcode,
  //       lat: null,
  //       lon: null,
  //     },
  //     email: userData?.details?.email ?? null,
  //     mobile: null,
  //   };

  //   // const paymentDetails: IPaymentDetails = {
  //   //   cardHolderName,
  //   //   cardPostcode,
  //   //   cardLastFour: '',
  //   // };

  //   if (success) {
  //     // const { success: orderMarkedSuccess } = await markOrderSuccess(
  //     //   order,
  //     //   userDetails,
  //     //   paymentDetails,
  //     // );

  //     // if (orderMarkedSuccess) {
  //     //   router.push(`/thank-you?orderId=${order.id}`);
  //     //   return;
  //     // }

  //     // Major error; assign error to order in Firebase
  //     // and redirect to home.
  //     router.push('/');
  //     return;
  //   }

  //   if (error) {
  //     // Segment: Payment failure event
  //   }

  //   dlog('CheckoutOrderSummary ➡️ error:', error);
  // };

  const onCardExpiryChange = (event: StripeCardExpiryElementChangeEvent) => {
    event;
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
        <CheckoutPaymentPanel order={order} onSubmit={() => null} />
      </div>
    </div>
  );
}
