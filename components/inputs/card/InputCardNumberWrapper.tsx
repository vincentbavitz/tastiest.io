import {
  MastercardIcon,
  MasteroIcon,
  VisaIcon,
} from '@tastiest-io/tastiest-icons';
import { CardBrand } from '@tastiest-io/tastiest-utils';
import React, { ReactNode } from 'react';
import { InputWrapper } from '../InputWrapper';

interface Props {
  brand?: CardBrand;
  children: ReactNode;
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

export function InputCardNumberWrapper({ children, brand, disabled }: Props) {
  return (
    <div className="flex w-full space-x-3">
      <InputWrapper
        size="large"
        label="Card Number"
        className="font-mono"
        externalSuffix={brand ? <CardRow brand={brand} /> : null}
        disabled={disabled}
      >
        {children}
      </InputWrapper>
    </div>
  );
}
