import {
  MastercardIcon,
  MasteroIcon,
  VisaIcon,
} from '@tastiest-io/tastiest-icons';
import { CardBrand } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { InputWrapper } from '../InputWrapper';

interface Props {
  brand?: CardBrand;
  children: ReactNode;
}

const CardRow = ({ brand }: { brand: CardBrand }) => {
  // Cards light up in color when the card number matches the brand
  return (
    <div className="flex space-x-2">
      <VisaIcon
        className={classNames(
          'h-6',
          brand === CardBrand.VISA ? 'filter-none' : 'filter-grayscale',
        )}
      />

      <MasteroIcon
        className={classNames(
          'h-6',
          brand !== CardBrand.MASTERO && 'filter-grayscale',
        )}
      />

      <MastercardIcon
        className={classNames(
          'h-6',
          brand !== CardBrand.MASTERCARD && 'filter-grayscale',
        )}
      />
    </div>
  );
};

export function InputCardNumberWrapper({ children, brand }: Props) {
  return (
    <div className="flex w-full space-x-3">
      <InputWrapper
        size="large"
        label="Card Number"
        className="py-1 font-mono"
        externalSuffix={<CardRow brand={brand} />}
      >
        {children}
      </InputWrapper>
    </div>
  );
}
