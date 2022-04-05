import { LockIcon } from '@tastiest-io/tastiest-icons';
import { Input, InputProps } from '@tastiest-io/tastiest-ui';
import React from 'react';

interface Props extends InputProps {
  show?: boolean;
  toggleShow?: () => void;
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
      autoCapitalize="none"
      autoCorrect="off"
      label={'Password'}
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
      {...props}
    ></Input>
  );
}
