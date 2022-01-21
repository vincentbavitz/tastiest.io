import { Input } from '@tastiest-io/tastiest-ui';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import { REGEX } from '../../../constants';

interface Props {
  name: string;
  label: string;
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  requiredText?: string;

  control: Control<any>;
  disabled?: boolean;
  defaultValue?: string;
}

export default function InputPostcode(props: Props) {
  const {
    name,
    label = 'Postcode',
    size,
    control,
    defaultValue,
    placeholder,
    disabled,
    requiredText,
  } = props;

  const {
    field: { ref, ...fieldProps },
    fieldState: { error },
  } = useController({
    name: name ?? 'postcode',
    defaultValue,
    control,
    rules: {
      required: {
        value: true,
        message: requiredText ?? 'Postal code is required',
      },
      pattern: {
        value: REGEX.POSTCODE_UK,
        message: 'Please enter a UK postal code',
      },
    },
  });

  return (
    <Input
      ref={ref}
      size={size}
      label={label}
      error={error?.message}
      disabled={disabled}
      placeholder={placeholder}
      {...fieldProps}
    />
  );
}
