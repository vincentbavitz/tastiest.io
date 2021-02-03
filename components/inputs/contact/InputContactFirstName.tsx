import { InputAbstract } from '../InputAbstract';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
}

export function InputContactFirstName(props: Props) {
  return (
    <InputAbstract
      size="large"
      label="First Name"
      inputClassName="w-full"
      onValueChange={props.onValueChange}
      {...props}
    />
  );
}
