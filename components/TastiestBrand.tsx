import clsx from 'clsx';
import React from 'react';

interface Props {
  size?: 6 | 8 | 10;
  fill?: boolean;
  type?: 'initial' | 'initial-ring' | 'full';
  theme?: 'light' | 'dark';
}

export default function TastiestBrand({
  type = 'initial-ring',
  size = 8,
  fill = false,
  theme = 'light',
}: Props) {
  return (
    <div>
      {type === 'initial' || type === 'initial-ring' ? (
        <div
          className={clsx(
            'flex items-center justify-center  font-primary font-medium no-underline rounded-full text-primary',
            type === 'initial-ring' && 'ring-2 ring-primary',
            fill ? 'bg-primary text-light' : 'text-primary',
            size === 6 && 'w-6 h-6 text-xl',
            size === 8 && 'w-8 h-8 text-2xl',
            size === 10 && 'w-10 h-10 text-3xl',
          )}
        >
          T
        </div>
      ) : (
        <div
          className={clsx(
            'font-primary leading-none',
            size === 6 && 'text-2xl',
            size === 8 && 'text-3xl',
            size === 10 && 'text-4xl',
            theme === 'dark' ? 'text-light' : 'text-dark',
          )}
        >
          Tastiest
          <span
            className={clsx(
              'no-underline',
              theme === 'dark' ? 'text-primary' : 'text-primary',
            )}
          >
            .
          </span>
        </div>
      )}
    </div>
  );
}
