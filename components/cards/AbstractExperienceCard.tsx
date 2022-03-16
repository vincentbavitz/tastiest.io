/* eslint-disable jsx-a11y/media-has-caption */
import { TagsOutlined } from '@ant-design/icons';
import { Button } from '@tastiest-io/tastiest-ui';
import {
  ContentfulPost,
  formatCurrency,
  titleCase,
} from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { generateStaticURL } from 'utils/routing';

interface AbstractExperienceCardProps extends ContentfulPost {
  withRestaurantName?: boolean;
  withViewRestaurant?: boolean;
}

export function AbstractExperienceCard(
  props: AbstractExperienceCardProps,
): JSX.Element {
  const {
    slug,
    city,
    cuisine,
    restaurant,
    product,
    withRestaurantName = true,
    withViewRestaurant = false,
  } = props;

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  const { href: experienceHref, as: experienceAs } = useMemo(
    () =>
      generateStaticURL({
        city,
        slug,
        cuisine,
        restaurant: restaurant.uri_name,
      }),
    [],
  );

  const { href: restaurantHref, as: restaurantAs } = useMemo(
    () =>
      generateStaticURL({
        city,
        cuisine,
        restaurant: restaurant.uri_name,
      }),
    [],
  );

  return (
    <div ref={ref} className="w-full shadow-md">
      <div
        className={classNames('relative no-underline cursor-pointer')}
        style={{ maxWidth: '400px' }}
      >
        <Link href={experienceHref} as={experienceAs}>
          <a className="no-underline">
            <div
              style={{ paddingBottom: '100%' }}
              className={clsx('relative w-full h-0 overflow-hidden')}
            >
              <Image
                layout="fill"
                className={clsx(
                  'object-cover w-full h-full transform duration-300',
                  isHovering && 'scale-105',
                )}
                src={`${product.image?.url}?w=400`}
                alt={product.image?.description}
              />

              {/* Restaurant profile */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end pb-2 h-20 z-10 px-2 bg-gradient-to-t from-primary">
                {withRestaurantName ? (
                  <div className="flex items-center space-x-2 mb-2 ml-2">
                    <div
                      style={{
                        filter:
                          'drop-shadow(0 0 3px rgba(255, 255, 255, 0.33))',
                      }}
                      className="relative h-10 w-10"
                    >
                      <Image
                        layout="fill"
                        objectFit="cover"
                        className={clsx('rounded-full transform')}
                        src={restaurant.profile_picture.url}
                      />
                    </div>

                    <div>
                      <h4
                        className={clsx(
                          'text-light font-semibold leading-none',
                        )}
                      >
                        {restaurant.name}
                      </h4>

                      <p className="text-light text-xs">
                        {titleCase(restaurant.cuisine.replace('_', ' '))}
                        {restaurant.cuisine.length ? ' - ' : null}
                        {restaurant.location_display}
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* White border */}
              <div className="absolute inset-1 border-2 border-light z-10"></div>
            </div>
          </a>
        </Link>

        <div className={clsx('bg-white text-dark pt-4 pb-3 px-4')}>
          {/* Title */}
          <h4
            style={{ height: '3.15em' }}
            className="text-base leading-tight font-semibold pb-2"
          >
            {product.name}
          </h4>

          {/* Price */}
          <div className="flex items-center">
            <TagsOutlined className="text-secondary text-lg mr-2" />

            <span className="font-thin">
              <span className="font-medium">
                £{formatCurrency(product.price)}
              </span>{' '}
              / person
            </span>
          </div>
        </div>

        <div className="flex flex-col pb-2 gap-2">
          {withViewRestaurant ? (
            <div className="mx-2 border-2 border-dark">
              <Link href={restaurantHref} as={restaurantAs}>
                <a className="no-underline">
                  <Button wide color="light" size="large">
                    <span className=" text-base font-semibold">
                      View Restaurant
                    </span>
                  </Button>
                </a>
              </Link>
            </div>
          ) : null}

          <div className="mx-2 border-2 border-primary">
            <Link href={experienceHref} as={experienceAs}>
              <a className="no-underline">
                <Button wide color="primary" size="large">
                  <span className="text-base font-semibold">Book</span>
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
