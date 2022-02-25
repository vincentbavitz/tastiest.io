/* eslint-disable jsx-a11y/media-has-caption */
import { ExperiencePost, formatCurrency } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { generateStaticURL } from 'utils/routing';

interface AbstractExperienceCardProps extends ExperiencePost {
  withRestaurantName?: boolean;
}

export function AbstractExperienceCard(
  props: AbstractExperienceCardProps,
): JSX.Element {
  const {
    slug,
    city,
    cuisine,
    restaurant,
    deal,
    withRestaurantName = true,
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

  return (
    <div ref={ref} className="w-full">
      <Link href={experienceHref} as={experienceAs}>
        <a className="no-underline">
          <div
            className={classNames('relative no-underline cursor-pointer')}
            style={{ maxWidth: '350px' }}
          >
            <div
              style={{ paddingBottom: '100%' }}
              className={clsx('relative w-full h-0 shadow-lg overflow-hidden')}
            >
              <Image
                layout="fill"
                className={clsx(
                  'object-cover w-full h-full transform duration-300',
                  isHovering && 'scale-105',
                )}
                src={`${deal.image?.url}?w=400`}
                alt={deal.image?.description}
              />

              {/* Restaurant profile */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end pb-2 h-20 z-50 px-2 bg-gradient-to-t from-primary">
                {withRestaurantName ? (
                  <div className="flex items-center space-x-2 mb-2 ml-2">
                    <div
                      style={{
                        filter:
                          'drop-shadow(0 0 3px rgba(255, 255, 255, 0.33))',
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
                ) : null}
              </div>

              {/* White border */}
              <div className="absolute inset-1 border-4 border-light z-50"></div>
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
