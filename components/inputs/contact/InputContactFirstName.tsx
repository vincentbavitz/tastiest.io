import React from 'react';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
}

export function InputContactFirstName(props: Props) {
  return (
    <Input
      size="large"
      label="First Name"
      inputClassName="w-full"
      onValueChange={props.onValueChange}
      {...props}
    />
  );
}
