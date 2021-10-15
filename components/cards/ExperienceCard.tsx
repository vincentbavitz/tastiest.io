/* eslint-disable jsx-a11y/media-has-caption */
import { Button } from '@tastiest-io/tastiest-components';
import { dlog, IPost, titleCase } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import LineLimit from 'components/text/LineLimit';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef } from 'react';
import { useHoverDirty, useMeasure, useVideo } from 'react-use';
import { generateStaticURL } from 'utils/routing';

interface Props extends IPost {
  // Compact omits description
  compact?: boolean;
}

export function ExperienceCard(props: Props): JSX.Element {
  const {
    compact,
    title,
    description,
    tags,
    slug,
    city,
    cuisine,
    restaurant,
    deal,
  } = props;

  const ref = useRef(null);
  const [contentRef, { width }] = useMeasure();
  const isSmall = width < 240;

  dlog('ArticleCard ➡️ width:', width);

  const { href: experienceHref, as: experienceAs } = useMemo(
    () =>
      generateStaticURL({
        city,
        slug,
        cuisine,
        restaurant: restaurant.uriName,
      }),
    [],
  );

  const { href: restaurantHref, as: restaurantAs } = useMemo(
    () =>
      generateStaticURL({
        city,
        cuisine,
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

  const [video, , controls] = useVideo(
    <video
      loop
      src={deal.dynamicImage.url}
      className="object-cover w-full h-full"
    />,
  );

  return (
    <div
      ref={ref}
      className={classNames(
        'relative overflow-hidden bg-gray-100 filter drop-shadow-xl no-underline',
        isSmall || compact ? 'rounded-md' : 'rounded-xl',
      )}
      style={{ maxWidth: '350px' }}
    >
      <div
        style={{ paddingBottom: '60%' }}
        className="relative w-full h-0 overflow-hidden bg-white bg-opacity-25"
      >
        {deal.dynamicImage.url && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            {video}
          </div>
        )}

        {deal.image.url && (
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src={`${deal.image?.url}?w=400`}
              alt={deal.image?.description}
            />
          </div>
        )}

        {/* Text overlay */}
        <Link href={restaurantHref} as={restaurantAs}>
          <a className="no-underline cursor-pointer">
            <div className="absolute inset-0 z-10 bg-dark bg-opacity-50">
              <div
                className={clsx(
                  isSmall || compact ? 'text-lg' : 'text-xl',
                  'w-full h-full flex justify-center items-center',
                )}
              >
                <LineLimit lines={2} fit="tight">
                  <h4 className="px-4 font-medium text-light text-center">
                    {title}
                  </h4>
                </LineLimit>
              </div>
            </div>
          </a>
        </Link>
      </div>

      <div
        ref={contentRef}
        className={clsx(
          'flex flex-col text-dark pt-2 pb-3',
          isSmall || compact ? 'px-3 space-y-2 ' : 'space-y-4 px-4',
        )}
      >
        {/* Restaurant profile */}
        <div className="flex items-center justify-between">
          <Link href={restaurantHref} as={restaurantAs}>
            <a className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <img
                  className={clsx(
                    'rounded-full object-cover',
                    isSmall ? 'h-8 w-8' : 'h-10 w-10',
                  )}
                  src={restaurant.profilePicture.url}
                />

                <h4
                  className={clsx(
                    'font-medium',
                    isSmall ? 'text-base' : 'text-lg',
                  )}
                >
                  {restaurant.name}
                </h4>
              </div>
            </a>
          </Link>

          {isSmall ? null : (
            <div className="px-2 py-1 leading-none text-sm bg-gray-200 rounded-full">
              {titleCase(cuisine)}
            </div>
          )}
        </div>

        {/* Description */}
        <LineLimit lines={3} fit="compact">
          <p className="text-sm opacity-75">{description}</p>
        </LineLimit>

        {/* Call to action */}
        <Link href={experienceHref} as={experienceAs}>
          <a className="no-underline">
            <Button wide size={compact ? 'small' : 'medium'}>
              Learn more
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
