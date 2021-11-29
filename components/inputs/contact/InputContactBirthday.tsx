import { Input } from '@tastiest-io/tastiest-ui';
import { DateObject, dlog } from '@tastiest-io/tastiest-utils';
import React, { useState } from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { dateFormat, dateToString, stringToDate } from 'utils/text';

interface Props {
  onDateChange: (date: DateObject) => void;
  date: DateObject;
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
      // USER.OLDEST_BIRTH_YEAR,
      // USER.YOUNGEST_BIRTH_YEAR,
    );

    props.onDateChange(date);
  };

  return (
    <NumberFormat
      placeholder="DD/MM/YYYY"
      mask={['M', 'M', 'D', 'D', 'Y', 'Y', 'Y', 'Y']}
      format={
        value => dateFormat(value) // USER.OLDEST_BIRTH_YEAR, USER.YOUNGEST_BIRTH_YEAR)
      }
      customInput={InputCustom}
      value={dateToString(props.date)}
      onValueChange={handleOnChange}
    />
  );
}

// const DatePickerWrapper = styled.div`
//   --rs-text-primary: ${tailwindConfig.theme.extend.colors.dark};
//   --rs-picker-value: ${tailwindConfig.theme.extend.colors.secondary};
//   --rs-border-primary: ${tailwindConfig.theme.extend.colors.secondary};
//   --rs-input-focus-border: ${tailwindConfig.theme.extend.colors.secondary};
//   --rs-bg-active: ${tailwindConfig.theme.extend.colors.secondary};

//   position: relative;
//   width: 100%;

//   div[role='combobox'] {
//     border-radius: 0.25rem;
//   }
// `;

// export function InputContactBirthday(props: Props) {
//   const { date } = props;

//   const defaultValue = DateTime.now()
//     .set({
//       year: Number(date?.year ?? 2000),
//       month: Number(date?.month ?? 1),
//       day: Number(date?.day ?? 1),
//     })
//     .toJSDate();

//   const disabledFn = (date: Date) => {
//     const earliestDate = DateTime.now()
//       .minus({
//         years: 90,
//       })
//       .toJSDate();

//     const latestDate = DateTime.now()
//       .minus({
//         years: 10,
//       })
//       .toJSDate();

//     return isBefore(date, earliestDate) || isAfter(date, latestDate);
//   };

//   return (
//     <DatePickerWrapper>
//       <DatePicker
//         oneTap
//         defaultValue={defaultValue}
//         calendarDefaultDate={defaultValue}
//         defaultOpen={true}
//         disabledDate={disabledFn}
//         format="dd MMM yyyy"
//         placeholder="DD MMM YYYY"
//         ranges={[]}
//       />
//     </DatePickerWrapper>
//   );
// }
