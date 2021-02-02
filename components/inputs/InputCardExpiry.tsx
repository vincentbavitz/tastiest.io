import React from 'react';
import NumberFormat from 'react-number-format';
import { InputAbstract, InputProps } from './InputAbstract';

const Input = (props: InputProps) => (
  <InputAbstract
    inputMode="decimal"
    size="large"
    label="Expiry"
    value={props.value}
    onValueChange={props.onValueChange}
  />
);

export function InputCardExpiry() {
  <NumberFormat
    format="##/##"
    placeholder="MM/YY"
    mask={['M', 'M', 'Y', 'Y']}
  />;
}
