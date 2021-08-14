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
      prefix={<LockIcon className="w-8 h-6 fill-current text-primary" />}
      suffix={
        toggleShow ? (
          <a
            onClick={() => toggleShow()}
            className="text-gray-500 cursor-pointer"
          >
            {show ? 'Hide' : 'Show'}
          </a>
        ) : null
      }
      value={value}
      onValueChange={onValueChange}
    ></Input>
  );
}
