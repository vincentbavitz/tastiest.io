import { EmailIcon } from '@tastiest-io/tastiest-icons';
import { Input } from '@tastiest-io/tastiest-ui';
import React from 'react';

interface Props {
  value: string;
  onValueChange?(value: string): any;
}
export function InputEmail(props: Props) {
  const { value, onValueChange } = props;

  return (
    <Input
      size="large"
      type="email"
      placeholder="Email address"
      prefix={<EmailIcon className="w-8 h-6 fill-current text-primary" />}
      maxLength={50}
      value={value}
      onValueChange={onValueChange}
    ></Input>
  );
}
