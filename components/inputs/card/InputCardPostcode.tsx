import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { InputAbstract } from '../InputAbstract';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
}

const Input = (props: Props) => (
  <InputAbstract
    size="large"
    label="Postcode"
    inputClassName="font-mono w-full"
    {...props}
  />
);

function postcodeFormat(val) {
  // From UK GOVT: https://stackoverflow.com/questions/164979/regex-for-matching-uk-postcodes
  // Not currently working as format while typing. Need partial match.
  // const UK_POSTCODE_REGEX = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;
  const UK_POSTCODE_REGEX = /^([a-zA-Z0-8]*){3,10}$/;
  return UK_POSTCODE_REGEX.test(val) ? val : '';
}

export function InputCardPostcode(props: Props) {
  const handleOnChange = ({ value }: NumberFormatValues) => {
    props.onValueChange(String(value));
  };

  return (
    <NumberFormat
      format={postcodeFormat}
      customInput={Input}
      value={props.value}
      onValueChange={handleOnChange}
    />
  );
}
