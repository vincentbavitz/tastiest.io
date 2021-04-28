import { Input } from '@tastiest-io/tastiest-components';
import { dlog, IDateObject, USER } from '@tastiest-io/tastiest-utils';
import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { dateFormat, dateToString, stringToDate } from 'utils/text';

interface Props {
  date: IDateObject;
  onDateChange: (date: IDateObject) => void;
  disabled?: boolean;
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
  const handleOnChange = ({ value }: NumberFormatValues) => {
    dlog('value', value);

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
