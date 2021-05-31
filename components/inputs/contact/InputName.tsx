import { Input } from '@tastiest-io/tastiest-components';
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

export function InputName(props: Props) {
  const {
    name,
    label,
    size = 'medium',
    placeholder,
    control,
    disabled,
    requiredText,
    defaultValue,
  } = props;

  const {
    field: { ref, ...fieldProps },
    fieldState: { error },
  } = useController({
    name,
    defaultValue,
    control,
    rules: {
      required: {
        value: true,
        message: requiredText ?? 'Please enter your name',
      },
      minLength: {
        value: 3,
        message: 'Name cannot be less than three characters',
      },
      maxLength: { value: 60, message: 'Name too long' },
      pattern: {
        value: /^([a-zA-Z]{0,15}[ ]?){1,4}$/,
        message: 'Names must be alphabetic only',
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
      color="secondary"
      {...fieldProps}
    />
  );
}
