import classNames from 'classnames';
import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import MasterCardSVG from '../../../assets/svgs/checkout/mastercard.svg';
import MasteroSVG from '../../../assets/svgs/checkout/mastero.svg';
import VisaSVG from '../../../assets/svgs/checkout/visa.svg';
import { CardBrand } from '../../../types/checkout';
import { PaymentEngine } from '../../../utils/payment';
import { InputAbstract } from '../InputAbstract';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
}

const Input = (props: Props) => (
  <InputAbstract
    inputMode="decimal"
    size="large"
    label="Card Number"
    className="font-mono"
    externalSuffix={<CardRow value={props.value} />}
    {...props}
  />
);

const CardRow = ({ value }: { value: string }) => {
  const stripped = value.replace(/[_-\s]/gi, '');
  const selected = PaymentEngine.getCardBrand(stripped);

  console.log('InputCardNumber ➡️ value:', stripped);
  console.log('InputCardNumber ➡️ selected:', selected);

  // Cards light up in color when the card number matches the brand
  return (
    <div className="flex space-x-2">
      <VisaSVG
        className={classNames(
          'h-6',
          selected === CardBrand.VISA ? 'filter-none' : 'filter-grayscale',
        )}
      />

      <MasteroSVG
        className={classNames(
          'h-6',
          selected !== CardBrand.MASTERO && 'filter-grayscale',
        )}
      />

      <MasterCardSVG
        className={classNames(
          'h-6',
          selected !== CardBrand.MASTERCARD && 'filter-grayscale',
        )}
      />
    </div>
  );
};

export function InputCardNumber(props: Props) {
  const handleOnChange = ({ value }: NumberFormatValues) => {
    props.onValueChange(String(value));
  };

  return (
    <div className="flex space-x-3">
      <NumberFormat
        customInput={Input}
        value={props.value}
        onValueChange={handleOnChange}
        format="#### #### #### ####"
        mask="_"
      />
    </div>
  );
}
