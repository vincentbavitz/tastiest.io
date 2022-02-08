import { InputName } from 'components/inputs/contact/InputName';
import React from 'react';
import { Control } from 'react-hook-form';

interface CheckoutInputNameProps {
  // Form control from react-hook-form
  control: Control<any>;
  disabled?: boolean;
}

export default function CheckoutInputName(props: CheckoutInputNameProps) {
  const { control, disabled } = props;

  return (
    <InputName
      size="large"
      name="cardHolderName"
      label="Cardholder's Full Name"
      requiredText="Please enter the cardholder's name"
      control={control}
      disabled={disabled}
    />
  );
}
