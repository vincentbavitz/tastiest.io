import { Input } from '@tastiest-io/tastiest-components';
import { dlog, IDateObject } from '@tastiest-io/tastiest-utils';
import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { dateFormat, dateToString, stringToDate } from 'utils/text';

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

const InputCustom = (props: Props) => (
  <Input inputMode="decimal" inputClassName="font-mono w-full" {...props} />
);

export function InputDate(props: Props) {
  const handleOnChange = ({ value }: NumberFormatValues) => {
    dlog('value', value);
    const date = stringToDate(value);

    props.onDateChange(date);
  };

  return (
    <NumberFormat
      placeholder="DD/MM/YYYY"
      mask={['M', 'M', 'D', 'D', 'Y', 'Y', 'Y', 'Y']}
      format={value => dateFormat(value)}
      customInput={InputCustom}
      value={dateToString(props.date)}
      onValueChange={handleOnChange}
    />
  );
}
