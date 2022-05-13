import clsx from 'clsx';
import React from 'react';

interface CreationHeadingProps {
  children: string;
  float?: 'left' | 'right' | 'center';
  padVertical?: boolean;
}

export default function CreationHeading(props: CreationHeadingProps) {
  const { children, padVertical = true, float = 'center' } = props;

  return (
    <div style={{ width: 'fit-content' }} className="relative z-1">
      <h2
        className={clsx(
          'text-3xl font-primary text-primary z-10',
          padVertical ? 'py-10' : '',
        )}
      >
        {children}
      </h2>

      <div
        style={{ zIndex: -1 }}
        className={clsx(
          'absolute left-0 right-0 flex items-end',
          padVertical ? 'top-0 bottom-0' : '-top-10 -bottom-10',
          float === 'center' && 'justify-center',
          float === 'left' && 'justify-start',
          float === 'right' && 'justify-end',
        )}
      >
        {/* Backdrop Text */}
        <span className="text-7xl font-tertiary text-gray-200 whitespace-nowrap">
          {children}
        </span>
      </div>
    </div>
  );
}
