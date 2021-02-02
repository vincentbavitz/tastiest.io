import React from 'react';
import PasswordSVG from '../../assets/svgs/lock.svg';
import { InputAbstract } from './InputAbstract';

interface Props {
  value: string;
  placeholder?: string;
  onValueChange?(value: string): any;
}
export function InputPassword(props: Props) {
  const { value, placeholder = 'Password', onValueChange } = props;
  return (
    <InputAbstract
      size="large"
      type="password"
      placeholder={placeholder}
      prefix={<PasswordSVG className="ml-2 mr-2 h-8" />}
      value={value}
      onValueChange={onValueChange}
    ></InputAbstract>
  );
}
