import { Input } from '@tastiest-io/tastiest-components';
import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { IDateObject } from 'types/various';
import { dlog } from 'utils/development';
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
  dlog('InputDate ➡️ props:', props);

  const handleOnChange = ({ value }: NumberFormatValues) => {
    dlog('value', value);

    const date = stringToDate(
      value,
      props.minYear ?? '1900',
      props.maxYear ?? '2099',
    );

    props.onDateChange(date);
  };

  return (
    <NumberFormat
      placeholder="DD/MM/YYYY"
      mask={['M', 'M', 'D', 'D', 'Y', 'Y', 'Y', 'Y']}
      format={value => dateFormat(value, props?.minYear, props?.maxYear)}
      customInput={InputCustom}
      value={dateToString(props.date)}
      onValueChange={handleOnChange}
    />
  );
}
