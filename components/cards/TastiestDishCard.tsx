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

export default function TastiestDishCard(props: Props) {
  const { compact, name, image, dynamicImage, restaurant } = props;

  const ref = useRef(null);
  const width = 300;
  const isSmall = width < 170;

  const { href, as } = useMemo(
    () =>
      generateStaticURL({
        city: restaurant.city,
        cuisine: restaurant.cuisines[0],
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
      <a>
        <div
          ref={ref}
          className={clsx(
            'overflow-hidden w-full bg-secondary bg-opacity-75 no-underline',
            'border-4 border-secondary border-opacity-75',
            isSmall || compact ? 'rounded-lg' : 'rounded-xl',
            isSmall ? 'pb-2' : 'pb-1',
          )}
        >
          <div className={clsx('h-12 bg-white')}>
            <img
              className="object-contain w-full h-full"
              src={`${restaurant.profilePicture.url}?w=300`}
              alt={restaurant.profilePicture.description}
            />
          </div>

          <div
            style={{ paddingBottom: '100%' }}
            className="relative w-full h-0 overflow-hidden bg-white bg-opacity-25"
          >
            {image.url && (
              <>
                <div className="absolute inset-0 z-10 pointer-events-none">
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
          </div>

          <div className={isSmall || compact ? 'px-3' : 'px-4'}>
            <div className={isSmall ? 'py-2' : 'py-3'}>
              <div
                style={{
                  lineHeight: '1.1em',
                  height: '0',
                  paddingBottom: '2.2em',
                }}
                className={clsx(
                  isSmall || compact ? 'text-base' : 'text-lg',
                  'font-somatic overflow-hidden cursor-pointer hover:underline',
                )}
              >
                {name}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
