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
    label="Expiry"
    inputClassName="w-full"
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

function cardExpiry(val) {
  const month = limit(val.substring(0, 2), '12');
  const year = val.substring(2, 4);

  return month + (year.length ? '/' + year : '');
}

export function InputCardExpiry(props: Props) {
  const handleOnChange = ({ value }: NumberFormatValues) => {
    props.onValueChange(String(value));
  };

  return (
    <NumberFormat
      placeholder="MM/YY"
      mask={['M', 'M', 'Y', 'Y']}
      format={cardExpiry}
      customInput={Input}
      value={props.value}
      onValueChange={handleOnChange}
    />
  );
}
