import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { InputAbstract, InputProps } from './InputAbstract';

interface Props {
  value: string;
  onValueChange: (value: string | number) => void;
}

const Input = (props: InputProps) => (
  <InputAbstract
    inputMode="decimal"
    size="large"
    label="Cardholder's Full Name"
    value={props.value}
    onValueChange={props.onValueChange}
  />
);

export function InputCardNumber(props: Props) {
  const handleOnChange = ({ value }: NumberFormatValues) => {
    props.onValueChange(String(value));
  };

  return (
    <NumberFormat
      customInput={Input}
      value={props.value}
      onValueChange={handleOnChange}
      format="#### #### #### ####"
      mask="_"
    />
  );
}
