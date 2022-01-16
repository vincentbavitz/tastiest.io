/* eslint-disable jsx-a11y/media-has-caption */
import {
  dlog,
  ExperiencePost,
  formatCurrency,
} from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { generateStaticURL } from 'utils/routing';

interface Props extends ExperiencePost {
  // Compact omits description
  compact?: boolean;
}

export function AbstractExperienceCard(props: Props): JSX.Element {
  const {
    compact,
    title,
    description,
    slug,
    city,
    cuisine,
    restaurant,
    deal,
  } = props;

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

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

  dlog('AbstractExperienceCard ➡️ isHovering:', isHovering);

  return (
    <div ref={ref} className="w-full">
      <Link href={restaurantHref} as={restaurantAs}>
        <a className="no-underline">
          <div
            className={classNames(
              'relative no-underline rounded-lg cursor-pointer',
            )}
            style={{ maxWidth: '350px' }}
          >
            <div
              style={{ paddingBottom: '100%' }}
              className={clsx(
                'relative w-full h-0 shadow-lg rounded-lg overflow-hidden',
              )}
            >
              <Image
                layout="fill"
                className={clsx(
                  'object-cover w-full h-full rounded-lg transform duration-300',
                  isHovering && 'scale-105',
                )}
                src={`${deal.image?.url}?w=400`}
                alt={deal.image?.description}
              />

              {/* Restaurant profile */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end pb-2 h-20 z-50 px-2 bg-gradient-to-t from-primary rounded-lg">
                <div className="flex items-center space-x-2">
                  <div
                    style={{
                      filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.33))',
                    }}
                    className="relative h-8 w-8"
                  >
                    <Image
                      layout="fill"
                      objectFit="cover"
                      className={clsx('rounded-full transform')}
                      src={restaurant.profilePicture.url}
                    />
                  </div>

                  <h4 className={clsx('text-light font-medium')}>
                    {restaurant.name}
                  </h4>
                </div>
              </div>
            </div>

            <div className={clsx('text-dark pt-2 pb-3')}>
              {/* Title */}
              <h4 className="text-base leading-tight font-medium pb-2">
                {deal.name}
              </h4>

              {/* Description */}
              {/* <LineLimit lines={4} fit="tight">
                <p className="text-sm opacity-75">{description}</p>
              </LineLimit> */}

              {/* Price */}
              <span className="font-thin">
                <span className="font-medium">
                  £{formatCurrency(deal.pricePerHeadGBP)}
                </span>{' '}
                / person
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
