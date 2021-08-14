/* eslint-disable jsx-a11y/media-has-caption */
import { ITastiestDish } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef } from 'react';
import { useHoverDirty, useVideo } from 'react-use';
import { generateStaticURL } from 'utils/routing';

interface Props extends ITastiestDish {
  compact?: boolean;
}

export default function TastiestDishCardSearchResult(props: Props) {
  const { compact, name, image, dynamicImage, restaurant } = props;

  const ref = useRef(null);
  const width = 300;
  const isSmall = width < 170;

  const { href, as } = useMemo(
    () =>
      generateStaticURL({
        city: restaurant.city,
        cuisine: restaurant.cuisine,
        restaurant: restaurant.uriName,
      }),
    [],
  );

  const isHovering = useHoverDirty(ref);
  useEffect(() => {
    if (isHovering) {
      controls.play();
    } else {
      controls.pause();
    }
  }, [isHovering]);

  const [video, state, controls] = useVideo(
    <video
      loop
      src={dynamicImage.url}
      className="object-cover w-full h-full"
    />,
  );

  return (
    <Link href={href} as={as}>
      <a className="no-underline">
        <div
          ref={ref}
          className={clsx('overflow-hidden w-full no-underline', 'rounded-md')}
        >
          <div
            style={{ paddingBottom: '80%' }}
            className="relative w-full h-0 overflow-hidden bg-white"
          >
            {image.url && (
              <>
                <div className="absolute inset-0 z-10 pointer-events-none ">
                  {video}
                </div>
                <div className="absolute inset-0">
                  <img
                    className="object-cover w-full h-full"
                    src={`${image?.url}?w=700`}
                    alt={image?.description}
                  />
                </div>
              </>
            )}

            <div
              style={{
                // filter: 'drop-shadow(0px 0px 2px rgba(0,0,0, 1))',
                boxShadow: '0px 8px 14px 11px rgba(0,0,0,0.75)',
              }}
              className="absolute inset-0 z-10 flex items-center justify-center w-full leading-4 text-center text-white bg-black bg-opacity-50 pointer-events-none font-somatic"
            >
              <div className="px-2 py-3">{name}</div>
            </div>

            {/* White overlay on hover */}
            <div className="absolute inset-0 z-10 duration-300 bg-white bg-opacity-0 hover:bg-opacity-25"></div>
          </div>
        </div>
      </a>
    </Link>
  );
}
