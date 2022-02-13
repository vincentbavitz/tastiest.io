import { QuestionOutlined } from '@ant-design/icons';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
} from '@stripe/react-stripe-js';
import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
  StripeCardNumberElementOptions,
} from '@stripe/stripe-js';
import {
  MastercardIcon,
  MasteroIcon,
  VisaIcon,
} from '@tastiest-io/tastiest-icons';
import { Input, Tooltip } from '@tastiest-io/tastiest-ui';
import { CardBrand } from '@tastiest-io/tastiest-utils';
import React, { useEffect, useState } from 'react';

const CARD_ELEMENT_OPTIONS: StripeCardNumberElementOptions = {
  classes: {
    base: 'py-3 w-full',
  },
  style: {
    base: {
      fontSize: '16px',
    },
  },
};

interface Props {
  disabled?: boolean;
}

const CardRow = ({ brand }: { brand: CardBrand }) => {
  // Cards light up in color when the card number matches the brand
  return (
    <div className="flex space-x-2">
      {brand === CardBrand.VISA && <VisaIcon className="h-6" />}
      {brand === CardBrand.MASTERO && <MasteroIcon className="h-6" />}
      {brand === CardBrand.MASTERCARD && <MastercardIcon className="h-6" />}
    </div>
  );
};

export function CheckoutInputCard({ disabled }: Props) {
  const elements = useElements();
  const [brand, setBrand] = useState<CardBrand>(null);

  // Remove placeholder from Card input
  useEffect(() => {
    elements?.getElement('cardNumber').update({ placeholder: '' });
    elements?.getElement('cardExpiry').update({ placeholder: '' });
    elements?.getElement('cardCvc').update({ placeholder: '' });
  }, [elements]);

  const [cardNumberHasFocus, setCardNumberHasFocus] = useState(false);
  const [cardExpiryHasFocus, setCardExpiryHasFocus] = useState(false);
  const [cardCvvHasFocus, setCardCvvHasFocus] = useState(false);

  const onCardNumberChange = (event: StripeCardNumberElementChangeEvent) => {
    setCardNumberHasFocus(!event.empty);

    // prettier-ignore
    const brand = 
          event.brand === 'visa' ? CardBrand.VISA :
          event.brand === 'mastercard' ? CardBrand.MASTERCARD :
          undefined;

    setBrand(brand);
  };

  const onCardExpiryChange = (event: StripeCardExpiryElementChangeEvent) => {
    setCardExpiryHasFocus(!event.empty);
  };

  const onCardCvvChange = (event: StripeCardCvcElementChangeEvent) => {
    setCardCvvHasFocus(!event.empty);
  };

  return (
    <div className="flex flex-col space-y-4">
      <Input
        size="large"
        label="Card Number"
        className="font-mono"
        suffix={brand ? <CardRow brand={brand} /> : null}
        forceFocus={cardNumberHasFocus}
        disabled={disabled}
        input={
          <CardNumberElement
            onChange={onCardNumberChange}
            options={CARD_ELEMENT_OPTIONS}
          />
        }
      />

      <div className="flex w-full space-x-3">
        <Input
          size="large"
          label="Expiry"
          className="py-1"
          forceFocus={cardExpiryHasFocus}
          disabled={disabled}
          input={
            <CardExpiryElement
              onChange={onCardExpiryChange}
              options={CARD_ELEMENT_OPTIONS}
            />
          }
        />

        <div className="flex items-center space-x-2 w-28">
          <Input
            size="large"
            label="CVV"
            className="py-1"
            disabled={disabled}
            forceFocus={cardCvvHasFocus}
            suffix={
              <Tooltip content="This is the 3 digit code on the back of your card.">
                <QuestionOutlined className="text-lg -mt-1 opacity-75" />
              </Tooltip>
            }
            input={
              <CardCvcElement
                onChange={onCardCvvChange}
                options={CARD_ELEMENT_OPTIONS}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
