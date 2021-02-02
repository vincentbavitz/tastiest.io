import React from 'react';
import EmailSVG from '../../assets/svgs/email.svg';
import { InputAbstract } from './InputAbstract';

interface Props {
  value: string;
  onValueChange?(value: string): any;
}
export function InputEmail(props: Props) {
  const { value, onValueChange } = props;

  return (
    <InputAbstract
      size="large"
      type="email"
      placeholder="Email address"
      prefix={<EmailSVG className="h-6" />}
      maxLength={50}
      value={value}
      onValueChange={onValueChange}
    ></InputAbstract>
  );
}
