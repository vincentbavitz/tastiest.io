import { Input } from '@tastiest-io/tastiest-ui';
import React from 'react';
import { Control, useController } from 'react-hook-form';

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
        value: /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$/,
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
