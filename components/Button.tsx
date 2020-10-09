import classNames from 'classnames';
import React from 'react';

interface Props {
  onClick?(): void;
  children: string | JSX.Element;
}

export function Button(props: Props) {
  const { children, onClick } = props;

  return (
    <div
      role="button"
      className={classNames(
        'bg-primary',
        'text-sm',
        'text-white',
        'font-somantic',
        'px-4',
        'py-2',
        'w-full',
      )}
    >
      {children}
    </div>
  );
}
