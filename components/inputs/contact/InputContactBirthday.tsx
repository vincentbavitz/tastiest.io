import { Input } from '@tastiest-io/tastiest-components';
import { dlog, IDateObject, USER } from '@tastiest-io/tastiest-utils';
import React, { useState } from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { dateFormat, dateToString, stringToDate } from 'utils/text';

interface Props {
  onDateChange: (date: IDateObject) => void;
  date: IDateObject;
  disabled?: boolean;
  error?: string;
  value?: string;
}

const InputCustom = (props: Props) => {
  const [error, setError] = useState<string>();

  const validate = () => {
    dlog('InputContactBirthday ➡️ props:', props.value);
    if (/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(props.value)) {
      setError(undefined);
      return;
    }

    setError('Please enter your full birthday.');
  };

  return (
    <Input
      size="large"
      label="Birthday"
      inputMode="decimal"
      inputClassName="font-mono w-full"
      {...props}
      onBlur={validate}
      error={error}
    />
  );
};

export function InputContactBirthday(props: Props) {
  const handleOnChange = ({ value }: NumberFormatValues) => {
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
