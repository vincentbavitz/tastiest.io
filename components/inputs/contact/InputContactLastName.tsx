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
      onValueChange={props.onValueChange}
      {...props}
    />
  );
}
