import { LocationBrandIcon } from '@tastiest-io/tastiest-icons';
import { titleCase } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import React from 'react';

interface Props {
  location: string;
  background?: 'secondary' | 'white';
}

export function LocationIndictor(props: Props) {
  const { location, background = 'primary' } = props;

  return (
    <div className="inline-flex items-center">
      <div className="icon">
        <LocationBrandIcon className="w-5 mr-2" />
      </div>
      <div
        className={classNames(
          'flex content-center h-4 px-4 py-3 font-bold rounded',
          background === 'white' && 'bg-white bg-opacity-50 text-primary',
          background === 'primary' && 'bg-secondary text-alt-1',
        )}
      >
        <p className="self-center text-xs">{titleCase(location)}</p>
      </div>
    </div>
  );
}
