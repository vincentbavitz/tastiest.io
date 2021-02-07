import { InputAbstract } from '../InputAbstract';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
}

export function InputContactLastName(props: Props) {
  return (
    <InputAbstract
      size="large"
      label="Last Name"
      inputClassName="w-full"
      value={props.value}
      onValueChange={props.onValueChange}
      {...props}
    />
  );
}
