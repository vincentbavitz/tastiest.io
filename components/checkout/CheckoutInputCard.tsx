import { CardNumberElement } from '@stripe/react-stripe-js';
import {
  StripeCardNumberElementChangeEvent,
  StripeCardNumberElementOptions,
} from '@stripe/stripe-js';
import {
  MastercardIcon,
  MasteroIcon,
  VisaIcon,
} from '@tastiest-io/tastiest-icons';
import { Input } from '@tastiest-io/tastiest-ui';
import { CardBrand } from '@tastiest-io/tastiest-utils';
import React, { useState } from 'react';

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
  const [brand, setBrand] = useState<CardBrand>(null);

  const onCardNumberChange = (event: StripeCardNumberElementChangeEvent) => {
    // prettier-ignore
    const brand = 
          event.brand === 'visa' ? CardBrand.VISA :
          event.brand === 'mastercard' ? CardBrand.MASTERCARD :
          undefined;

    setBrand(brand);
  };
  return (
    <div className="flex w-full space-x-3">
      <Input
        size="large"
        label="Card Number"
        className="font-mono"
        suffix={brand ? <CardRow brand={brand} /> : null}
        disabled={disabled}
        input={
          <CardNumberElement
            options={CARD_ELEMENT_OPTIONS}
            onChange={onCardNumberChange}
          />
        }
      />
    </div>
  );
}
