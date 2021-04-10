import { Input } from '@tastiest-io/tastiest-components';
import { LockIcon } from '@tastiest-io/tastiest-icons';
import React from 'react';

interface Props {
  value: string;
  placeholder?: string;
  show?: boolean;
  toggleShow?: () => void;
  onValueChange?(value: string): any;
}
export function InputPassword(props: Props) {
  const {
    value,
    show = false,
    toggleShow,
    placeholder = 'Password',
    onValueChange,
  } = props;

  return (
    <Input
      size="large"
      type={show ? 'text' : 'password'}
      placeholder={placeholder}
      prefix={<LockIcon className="h-6 ml-2 mr-2" />}
      suffix={
        toggleShow ? (
          <a onClick={() => toggleShow()} className="text-gray-500">
            {show ? 'Hide' : 'Show'}
          </a>
        ) : null
      }
      value={value}
      onValueChange={onValueChange}
    ></Input>
  );
}
