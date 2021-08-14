import { Input } from '@tastiest-io/tastiest-components';
import { dlog, IDateObject } from '@tastiest-io/tastiest-utils';
import React, { useState } from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { useThrottle } from 'react-use';
import { dateFormat, dateToString, stringToDate } from 'utils/text';

interface Props {
  onDateChange: (date: IDateObject) => void;
  date: IDateObject;
  disabled?: boolean;
  error?: string;
  value?: string;
  label?: string;
  size?: 'large' | 'medium' | 'small';
}

const InputCustom = (props: Props) => {
  const { size = 'large', label } = props;
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
      size={size}
      label={label}
      inputMode="decimal"
      color="secondary"
      inputClassName="font-mono w-full"
      onBlur={validate}
      error={error}
      {...props}
    />
  );
};

export function InputContactBirthday(props: Props) {
  const handleOnChange = ({ value }: NumberFormatValues) => {
    const date = stringToDate(
      value,
      // USER.OLDEST_BIRTH_YEAR,
      // USER.YOUNGEST_BIRTH_YEAR,
    );

    props.onDateChange(date);
  };

  // Prevents input cursor from being set behind last position
  // when inputting numbers very quickly
  const throttledDate = useThrottle(props.date, 30);
  const setCursor: React.ChangeEventHandler<HTMLInputElement> = event => {
    setTimeout(() => {
      const element = event.target;
      window.requestAnimationFrame(() => {
        element.selectionStart = element.value.length;
        element.selectionEnd = element.value.length;
      });
    }, 50);
  };

  return (
    <NumberFormat
      placeholder="DD/MM/YYYY"
      mask={['M', 'M', 'D', 'D', 'Y', 'Y', 'Y', 'Y']}
      format={
        value => dateFormat(value) // USER.OLDEST_BIRTH_YEAR, USER.YOUNGEST_BIRTH_YEAR)
      }
      customInput={InputCustom}
      value={dateToString(throttledDate)}
      onChange={setCursor}
      onValueChange={handleOnChange}
    />
  );
}
