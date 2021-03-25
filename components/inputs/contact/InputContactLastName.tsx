import { Input } from '@tastiest-io/tastiest-components';
import React from 'react';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
}

export function InputContactLastName(props: Props) {
  return (
    <Input
      size="large"
      label="Last Name"
      inputClassName="w-full"
      value={props.value}
      onValueChange={props.onValueChange}
      {...props}
    />
  );
}
