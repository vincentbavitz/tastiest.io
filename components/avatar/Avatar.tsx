import { TastiestBrand } from '@tastiest-io/tastiest-components';
import classNames from 'classnames';
import React from 'react';

export interface AvatarProps {
  // Size is in the same units as Tailwind units
  size?: 8 | 10 | 12 | 16 | 20;
  initial?: string;
  imageSrc?: string;
  onClick?(): void;
}

export function Avatar(props: AvatarProps) {
  const { size = '8', imageSrc, initial, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={classNames(
        'relative flex justify-center items-center rounded-full cursor-pointer duration-300 bg-opacity-75 hover:bg-opacity-100',
        !imageSrc && 'bg-primary',
        `h-${size} w-${size}`,
      )}
    >
      {imageSrc ? (
        // Custom Avatar Image
        <img
          className="w-full h-full rounded-full"
          src={imageSrc}
          alt={'Author profile picture'}
        />
      ) : initial?.length ? (
        <div className="flex items-center justify-center w-full h-full text-xl text-white font-primary">
          {initial[0]}
        </div>
      ) : (
        // Default Tastiest Avatar
        <TastiestBrand fill type="initial" />
      )}
    </div>
  );
}
