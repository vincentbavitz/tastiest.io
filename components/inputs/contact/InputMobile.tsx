import { Input } from '@tastiest-io/tastiest-components';
import React from 'react';
import { Control, useController } from 'react-hook-form';

interface Props {
  name: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  control: Control<any>;
  disabled?: boolean;
  defaultValue?: string;
}

export function InputMobile(props: Props) {
  const {
    name = 'mobile',
    size = 'medium',
    label = 'Mobile',
    control,
    disabled,
    defaultValue = '',
  } = props;

  const {
    field: { ref: mobileFieldRef, ...mobileField },
    fieldState: { error },
  } = useController({
    name,
    defaultValue,
    control,
    rules: {
      required: { value: true, message: 'Please enter your mobile number' },
      pattern: {
        value: /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/,
        message: 'Please enter a valid UK mobile number',
      },
    },
  });

  return (
    <Input
      ref={mobileFieldRef}
      type="tel"
      size={size}
      label={label}
      error={error?.message}
      disabled={disabled}
      placeholder={'+44 111 222 1234'}
      {...mobileField}
    />
  );
}
