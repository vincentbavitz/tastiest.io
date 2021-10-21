/* eslint-disable jsx-a11y/media-has-caption */
import { ITastiestDish } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useMemo, useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { generateStaticURL } from 'utils/routing';

export default function TastiestDishRow(props: ITastiestDish) {
  const { name, image, dynamicImage, restaurant } = props;

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
    // <Link href={href} as={as}>
    //   <a className="no-underline w-full">
    <div ref={ref} className="relative w-full">
      <div
        className={clsx(
          'relative transform duration-300 aspect-h-6 aspect-w-4 w-full rounded-lg overflow-hidden',
        )}
      >
        {/* Image underlay */}
        <Image
          src={image.url}
          layout="fill"
          objectFit="cover"
          className={clsx(
            'transform duration-500',
            isHovering ? 'scale-105' : '',
          )}
        />
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="h-32 w-full rounded-b-lg bg-gradient-to-t inline-block from-dark"></div>
      </div>

      {/* Title & Description */}
      <div className="absolute inset-0 pb-6 px-4 flex items-end justify-center">
        <h4
          style={{
            letterSpacing: '0.20em',
            fontSize: '1.0rem',
            lineHeight: '1em',
          }}
          className="transform scale-y-125 font-bold text-center text-2xl text-light"
        >
          {name.toUpperCase()}
        </h4>
      </div>
    </div>
    //   </a>
    // </Link>
  );
}
