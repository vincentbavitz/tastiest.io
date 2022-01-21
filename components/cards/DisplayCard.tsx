/* eslint-disable jsx-a11y/media-has-caption */
import { Media } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useRef } from 'react';
import { useHoverDirty } from 'react-use';

interface DisplayCardProps {
  header: string;
  headerFont?: 'primary' | 'secondary';

  description: string;
  image: Media;

  // The underlay card at the bottom.
  children?: ReactNode;

  // For next/link
  href?: string;
  as?: string;
}

// const { href, as } = useMemo(
//   () =>
//     generateStaticURL({
//       city: restaurant.city,
//       cuisine: restaurant.cuisine,
//       restaurant: restaurant.uriName,
//     }),
//   [],
// );

export default function DisplayCard(props: DisplayCardProps) {
  return props.href ? (
    <Link href={props.href} as={props.as}>
      <a className="no-underline">
        <DisplayCardInner {...props} />
      </a>
    </Link>
  ) : (
    <DisplayCardInner {...props} />
  );
}

function DisplayCardInner(props: DisplayCardProps) {
  const {
    header,
    headerFont = 'secondary',
    description,
    image,
    children,
  } = props;

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  return (
    <div
      ref={ref}
      style={{ minWidth: '200px' }}
      className="flex flex-col relative h-full w-full select-none rounded-b-lg shadow-lg"
    >
      <div className="relative flex-grow w-full">
        <div
          style={{ minHeight: '20rem' }}
          className={clsx(
            'relative transform duration-300 rounded-t-lg h-full w-full overflow-hidden',
          )}
        >
          {/* Image underlay */}
          <Image
            src={image.url}
            alt={image.description}
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
              fontSize: '1.25rem',
              lineHeight: '1em',
            }}
            className={clsx(
              'transform scale-y-125 font-bold text-center text-light select-none',
              `font-${headerFont}`,
            )}
          >
            {header.toUpperCase()}
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

      {children ? (
        <div className="pt-4 pb-2 px-2 bg-white rounded-b-lg w-full -mt-2 duration-300">
          {children}
        </div>
      ) : null}
    </div>
  );
}