import { LocationBrandIcon } from '@tastiest-io/tastiest-icons';
import { titleCase } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import React from 'react';

interface Props {
  location: string;
  background?: 'secondary' | 'white';
  size?: 'small' | 'medium' | 'large';
}

export function LocationIndictor(props: Props) {
  const { location, size = 'medium', background = 'primary' } = props;

  return (
    <div className="inline-flex items-center">
      <div className="icon">
        <LocationBrandIcon
          className={clsx(
            size === 'large'
              ? 'w-8 mr-4'
              : size === 'medium'
              ? 'w-5 mr-2'
              : 'w-4 mr-1',
          )}
        />
      </div>
      <div
        className={classNames(
          'flex content-center font-bold rounded',
          background === 'white' && 'bg-white bg-opacity-50 text-primary',
          background === 'primary' && 'bg-secondary text-alt-1',
          size === 'large'
            ? 'h-6 py-4 px-4'
            : size === 'medium'
            ? 'h-4 py-3 px-3'
            : 'h-3 py-2 px-3',
        )}
      >
        <p
          className={clsx(
            'self-center',
            size === 'large'
              ? 'text-lg'
              : size === 'medium'
              ? 'text-base'
              : 'text-xs',
          )}
        >
          {titleCase(location)}
        </p>
      </div>
    </div>
  );
}
