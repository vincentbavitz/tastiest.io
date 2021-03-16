import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import {
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
  StripeCardNumberElementOptions,
} from '@stripe/stripe-js';
import HelpSVG from '@svg/checkout/help.svg';
import { InputContactBirthday } from 'components/inputs/contact/InputContactBirthday';
import { ScreenContext } from 'contexts/screen';
import { useAuth } from 'hooks/useAuth';
import { useCheckout } from 'hooks/useCheckout';
import { useUserData } from 'hooks/useUserData';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { IUserDetails } from 'types/firebase';
import { IDateObject } from 'types/various';
import { UI } from '../../../constants';
import { CardBrand, IOrder, IPaymentDetails } from '../../../types/checkout';
import { InputCardNumberWrapper } from '../../inputs/card/InputCardNumberWrapper';
import { InputContactFirstName } from '../../inputs/contact/InputContactFirstName';
import { InputContactLastName } from '../../inputs/contact/InputContactLastName';
import { InputAbstract } from '../../inputs/InputAbstract';
import { InputWrapper } from '../../inputs/InputWrapper';
import { Tooltip } from '../../Tooltip';
import { CheckoutOrderSummaryPayment } from '../CheckoutOrderSummaryPayment';
import { CheckoutTabs } from '../CheckoutTabs';

const CARD_ELEMENT_OPTIONS: StripeCardNumberElementOptions = {
  classes: {
    base: 'py-2 w-full',
  },
};

interface Props {
  order: IOrder;
  userId: string;
  stripeClientSecret: string;
}

export function CheckoutStepPayment(props: Props) {
  const { order, stripeClientSecret } = props;
  const { userId: orderUserId } = order;
  const { userId: propsUserId } = props;
  const userId = propsUserId ?? orderUserId ?? null;

  const { updateOrder, markOrderSuccess } = useCheckout();
  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

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

  // Payment
  const [cardHolderName, setCardholderName] = useState('');
  const [cardPostcode, setCardPostcode] = useState('');
  const [cardBrand, setCardBrand] = useState<CardBrand | undefined>(undefined);
  const [paymentError, setPaymentError] = useState<string>(null);

  const { isMobile, isTablet } = useContext(ScreenContext);

  // Now that we're logged in, update order with user ID
  useEffect(() => {
    updateOrder(order.id, { userId });
  }, []);

  if (!userId) {
    return null;
  }

  const pay = async (stripeClientSecret: string) => {
    if (!stripe || !elements) {
      return { success: null, error: null };
    }

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardNumberElement),
      });

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        stripeClientSecret,
        {
          payment_method: paymentMethod.id,
        },
      );

      if (error) {
        return { success: false, error: error?.message };
      }

      // Payment success
      if (paymentIntent.status === 'succeeded') {
        return { success: true, error: null };
      }
    } catch (error) {
      return { success: false, error: error?.messsage };
    }

    // Segment: Payment failure event
    return { success: false, error: 'Unknown error' };
  };

  const handleSubmit = async () => {
    // Ensure all inputs are valid
    // DO THIS BY FIXING onBlurRegex for all inputs
    if (
      firstName.length < 2 ||
      lastName.length < 2 ||
      !birthday.day ||
      !birthday.month ||
      !birthday.year
    ) {
      alert('Please fill out contact details');
    }

    const { success, error } = await pay(stripeClientSecret);

    const userDetails: IUserDetails = {
      firstName,
      lastName,
      birthday,
      address: {
        address: '',
        postalCode: cardPostcode,
        lat: null,
        lon: null,
      },
      mobile: null,
    };

    const paymentDetails: IPaymentDetails = {
      cardHolderName,
      cardPostcode,
      cardLastFour: '',
    };

    if (success) {
      const { success: orderMarkedSuccess } = await markOrderSuccess(
        order,
        userDetails,
        paymentDetails,
      );

      if (orderMarkedSuccess) {
        router.push('/thank-you');
        return;
      }

      // Major error; assign error to order in Firebase
      // and redirect to home.
      router.push('/');
      return;
    }

    if (error) {
      // Segment: Payment failure event
    }

    console.log('CheckoutOrderSummary ➡️ error:', error);
  };

  // IF PAYMENT / CONTACT DETAILS ARE VALID, UPDATE THEIR USER FILES
  // IF PAYMENT / CONTACT DETAILS ARE VALID, UPDATE THEIR USER FILES
  // IF PAYMENT / CONTACT DETAILS ARE VALID, UPDATE THEIR USER FILES

  const onCardNumberChange = (event: StripeCardNumberElementChangeEvent) => {
    // prettier-ignore
    const brand = 
      event.brand === 'visa' ? CardBrand.VISA :
      event.brand === 'mastercard' ? CardBrand.MASTERCARD :
      undefined;

    setCardBrand(brand);
  };

  const onCardExpiryChange = (event: StripeCardExpiryElementChangeEvent) => {
    event;
  };

  return (
    <div className="flex justify-between w-full">
      <div
        style={{
          minWidth:
            isMobile || isTablet ? 'unset' : `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
        }}
        className="flex flex-col w-7/12 pb-24 space-y-16"
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
            <InputAbstract
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
                    <HelpSVG className="h-6" />
                  </Tooltip>
                }
              >
                <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
              </InputWrapper>
            </div>

            <InputAbstract
              label="Postcode"
              className="py-1 rounded-xl"
              regex={/^([a-zA-Z0-8]){1,10}$/}
              value={cardPostcode}
              onValueChange={setCardPostcode}
            />
          </div>
        </div>
      </div>

      <div className="flex-grow w-5/12 pl-10">
        <CheckoutOrderSummaryPayment order={order} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
