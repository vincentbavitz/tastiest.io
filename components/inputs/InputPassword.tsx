import { LockIcon } from '@tastiest-io/tastiest-icons';
import { Input } from '@tastiest-io/tastiest-ui';
import React from 'react';

interface Props {
  value: string;
  label?: string;
  show?: boolean;
  toggleShow?: () => void;
  onValueChange?(value: string): any;
}
export function InputPassword(props: Props) {
  const {
    value,
    show = false,
    toggleShow,
    label = 'Password',
    onValueChange,
  } = props;

  return (
    <Input
      type={show ? 'text' : 'password'}
      label={label}
      prefix={<LockIcon className="w-8 h-6 fill-current text-primary" />}
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
