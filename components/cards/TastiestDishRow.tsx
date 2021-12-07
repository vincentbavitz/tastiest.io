/* eslint-disable jsx-a11y/media-has-caption */
import { TastiestDish } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useMemo, useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { generateStaticURL } from 'utils/routing';

export default function TastiestDishRow(props: TastiestDish) {
  const { name, description, image, dynamicImage, restaurant } = props;

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  const { href, as } = useMemo(
    () =>
      generateStaticURL({
        city: restaurant.city,
        cuisine: restaurant.cuisine,
        restaurant: restaurant.uriName,
      }),
    [],
  );

  return (
    <div ref={ref} style={{ minWidth: '200px' }} className="relative w-full">
      <div className="relative w-full">
        <div
          style={{ height: '20rem' }}
          className={clsx(
            'relative transform duration-300 rounded-t-lg h-full w-full overflow-hidden',
          )}
        >
          {/* Image underlay */}
          <Image
            src={image.url}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className={clsx(
              'transform duration-500 rounded-lg',
              isHovering ? 'scale-105' : '',
            )}
          />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="h-32 w-full bg-gradient-to-t inline-block from-dark"></div>
        </div>

        {/* Title & Description */}
        <div className="absolute inset-0 pb-6 px-4 flex flex-col items-center justify-end">
          <h4
            style={{
              letterSpacing: '0.20em',
              fontSize: '1.0rem',
              lineHeight: '1em',
            }}
            className="transform scale-y-125 font-bold text-center text-2xl text-light select-none"
          >
            {name.toUpperCase()}
          </h4>

          <div
            style={{ height: '3px' }}
            className="w-16 rounded-full bg-light opacity-50 block mt-2"
          ></div>
        </div>
      </div>

      <div className="relative pb-4 px-4 w-full bg-gradient-to-tr from-primary via-dark to-dark rounded-b-lg">
        <p className="leading-4 opacity-75 text-light text-center text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
