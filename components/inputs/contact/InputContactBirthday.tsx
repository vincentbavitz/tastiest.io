import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { InputAbstract } from '../InputAbstract';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
}

const Input = (props: Props) => (
  <InputAbstract
    inputMode="decimal"
    size="large"
    label="Birthday"
    subLabel="So we can give you a gift :)"
    inputClassName="font-mono w-full"
    {...props}
  />
);

function limit(val, max) {
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

function birthdayFormat(value: string) {
  const day = limit(value.substring(0, 2), '31');
  const month = limit(value.substring(2, 4), '12');
  const year = value.substring(4, 8);

  return (
    day + (month.length ? '/' + month : '') + (year.length ? '/' + year : '')
  );
}

export function InputContactBirthday(props: Props) {
  const handleOnChange = ({ value }: NumberFormatValues) => {
    props.onValueChange(String(value));
  };

  return (
    <NumberFormat
      placeholder="DD/MM/YY"
      mask={['M', 'M', 'D', 'D', 'Y', 'Y', 'Y', 'Y']}
      format={birthdayFormat}
      customInput={Input}
      value={props.value}
      onValueChange={handleOnChange}
    />
  );
}
