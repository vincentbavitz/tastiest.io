import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { IDateObject, TDay, TMonth, TYear } from 'types/various';
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

function limit(val: string, max: string) {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';

      //this can happen when user paste number
    } else if (val > max) {
      val = max;
    }
  }

  return val;
}

function limitYear(year: string, minYear: string, maxYear: string) {
  // Limits year of format YYYY as the user types
  // Eg. 9999 -> 2099 for maxYear of 2099
  // Eg. 1111 -> 1933 for minYear of 1933

  if (Number(minYear) > Number(maxYear)) {
    minYear = maxYear;
  }

  console.log('InputDate ➡️ minYear:', minYear);
  console.log('InputDate ➡️ maxYear:', maxYear);

  const yearSlice = year.slice(0, year.length);
  const maxSlice = maxYear.slice(0, year.length);
  const minSlice = minYear.slice(0, year.length);

  console.log('InputDate ➡️ yearSlice:', yearSlice);
  console.log('InputDate ➡️ maxSlice:', maxSlice);
  console.log('InputDate ➡️ minSlice:', minSlice);

  if (Number(yearSlice) > Number(maxSlice)) return maxSlice;
  if (Number(yearSlice) < Number(minSlice)) return minSlice;
  return year;
}

const dateToString = (date: IDateObject) =>
  date ? `${date.day}${date.month}${date.year}` : null;

const stringToDate = (
  value: string,
  minYear: string,
  maxYear: string,
): IDateObject => {
  const day = limit(value.substring(0, 2), '31') as TDay;
  const month = limit(value.substring(2, 4), '12') as TMonth;
  const year = limitYear(
    value.substring(4, 8),
    minYear ?? '1900',
    maxYear ?? '2099',
  ) as TYear;

  console.log('InputDate ➡️ minYear:', minYear);
  console.log('InputDate ➡️ year:', year);

  return { day, month, year };
};

const Input = (props: Props) => (
  <InputAbstract
    size={props.size}
    label={props.label}
    subLabel={props.subLabel}
    inputMode="decimal"
    inputClassName="font-mono w-full"
    {...props}
  />
);

function dateFormat(value: string, minYear?: string, maxYear?: string) {
  const { day, month, year } = stringToDate(
    value,
    minYear ?? '1900',
    maxYear ?? '2099',
  );

  return (
    day + (month.length ? '/' + month : '') + (year.length ? '/' + year : '')
  );
}

export function InputDate(props: Props) {
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
