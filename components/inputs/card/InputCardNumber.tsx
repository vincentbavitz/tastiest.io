import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import VisaSVG from '../../../assets/svgs/checkout/visa.svg';
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
    externalSuffix={}
    {...props}
  />
);

interface CardRowProps {
  that: string;
}

const CardRow = (props: CardRowProps) => {
  return (
    <div className="flex space-x-2">
      <VisaSVG className="h-12" />
      <VisaSVG className="h-12" />;<VisaSVG className="h-12" />
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
