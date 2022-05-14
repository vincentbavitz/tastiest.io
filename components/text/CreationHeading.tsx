import clsx from 'clsx';
import React from 'react';

interface CreationHeadingProps {
  children: string;
  float?: 'left' | 'right' | 'center';
  position?: 'left' | 'right' | 'center';
  padVertical?: boolean;
  color?: string;
  backdropOpacity?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
}

export default function CreationHeading(props: CreationHeadingProps) {
  const {
    padVertical = true,
    float = 'center',
    color = 'primary',
    backdropOpacity = 100,
    position = 'center',
    children,
  } = props;

  return (
    <div
      className={clsx(
        'relative flex w-full overflow-x-hidden opaci',
        position === 'left' && 'justify-start',
        position === 'right' && 'justify-end',
        position === 'center' && 'justify-center',
      )}
    >
      <div
        style={{ width: 'fit-content', maxWidth: '100vw' }}
        className="relative z-10"
      >
        <h2
          className={clsx(
            'text-3xl font-primary whitespace-nowrap z-10',
            padVertical ? 'py-10' : '',
            `text-${color}`,
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
          <span
            className={clsx(
              'text-7xl font-tertiary text-gray-200 whitespace-nowrap',
              `opacity-${backdropOpacity}`,
            )}
          >
            {children}
          </span>
        </div>
      </div>
    </div>
  );
}
