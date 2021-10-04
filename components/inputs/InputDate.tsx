import { Input } from '@tastiest-io/tastiest-components';
import { IDateObject } from '@tastiest-io/tastiest-utils';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

interface Props {
  // Data
  date: IDateObject;
  minYear?: string;
  maxYear?: string;
  onDateChange: (date: IDateObject) => void;

  // Styling
  size?: 'large' | 'medium' | 'small';
  label?: string;
  subLabel?: string;
}

export function InputDate(props: Props) {
  const { control } = useForm<{ date: string }>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  const transformInput = (value: string) => {
    return String(value)
      .replace(/[^0-9/]*/g, '')
      .slice(0, 10);
  };

  return (
    <Controller
      control={control}
      defaultValue=""
      name="date"
      rules={{
        pattern: {
          value: /^((0[1-9])|([1-2][0-9])|(3[0-1]))\/((0[1-9])|(1[0-2]))\/((19[2-9][0-9])|(201[0-1])|(200[0-9]))$/,
          message: 'Please enter a valid date.',
        },
      }}
      render={({ field, formState }) => (
        <Input
          {...field}
          type="text"
          inputMode="decimal"
          placeholder="MM/DD/YYYY"
          className="py-2 font-mono"
          error={formState.errors.date?.message}
          onChange={e => field.onChange(e.target.value)}
          value={transformInput(field.value)}
        ></Input>
      )}
    />
  );
}
