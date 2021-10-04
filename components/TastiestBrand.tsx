import clsx from 'clsx';
import React from 'react';

interface Props {
  size?: 6 | 8 | 10;
  fill?: boolean;
  type?: 'initial' | 'full';
}

export default function TastiestBrand({
  type = 'initial',
  size = 8,
  fill = false,
}: Props) {
  return (
    <div>
      {type === 'initial' ? (
        <div
          className={clsx(
            'flex items-center justify-center  font-primary font-medium no-underline rounded-full text-primary ring-2 ring-primary',
            fill ? 'bg-primary text-white' : 'text-primary',
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
            'font-primary text-black leading-none',
            size === 6 && 'text-2xl',
            size === 8 && 'text-3xl',
            size === 10 && 'text-4xl',
          )}
        >
          Tastiest
          <span className="no-underline text-primary">.</span>
        </div>
      )}
    </div>
  );
}
