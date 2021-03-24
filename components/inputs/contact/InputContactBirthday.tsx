import { Input } from '@tastiest-io/tastiest-components';
import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { IDateObject } from 'types/various';
import { dateFormat, dateToString, stringToDate } from 'utils/text';
import { USER } from '../../../constants';

interface Props {
  date: IDateObject;
  onDateChange: (date: IDateObject) => void;
}

const InputCustom = (props: Props) => (
  <Input
    size="large"
    label="Birthday"
    inputMode="decimal"
    inputClassName="font-mono w-full"
    {...props}
  />
);

export function InputContactBirthday(props: Props) {
  console.log('InputDate ➡️ props:', props);

  const handleOnChange = ({ value }: NumberFormatValues) => {
    console.log('value', value);

    const date = stringToDate(
      value,
      USER.OLDEST_BIRTH_YEAR,
      USER.YOUNGEST_BIRTH_YEAR,
    );

    props.onDateChange(date);
  };

  return (
    <NumberFormat
      placeholder="DD/MM/YYYY"
      mask={['M', 'M', 'D', 'D', 'Y', 'Y', 'Y', 'Y']}
      format={value =>
        dateFormat(value, USER.OLDEST_BIRTH_YEAR, USER.YOUNGEST_BIRTH_YEAR)
      }
      customInput={InputCustom}
      value={dateToString(props.date)}
      onValueChange={handleOnChange}
    />
  );
}
