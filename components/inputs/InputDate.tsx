import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { IDateObject } from 'types/various';
import { dateFormat, dateToString, stringToDate } from 'utils/text';
import { InputAbstract } from './InputAbstract';

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

const Input = (props: Props) => (
  <InputAbstract
    inputMode="decimal"
    inputClassName="font-mono w-full"
    {...props}
  />
);

export function InputDate(props: Props) {
  console.log('InputDate ➡️ props:', props);

  const handleOnChange = ({ value }: NumberFormatValues) => {
    console.log('value', value);

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
      customInput={Input}
      value={dateToString(props.date)}
      onValueChange={handleOnChange}
    />
  );
}