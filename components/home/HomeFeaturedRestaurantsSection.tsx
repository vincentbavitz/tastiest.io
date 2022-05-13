import {
  ContentfulRestaurant,
  generateStaticURL,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import FeaturedRestaurantCard from 'components/cards/FeaturedRestaurantCard';
import { Contained } from 'components/Contained';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import CreationHeading from 'components/text/CreationHeading';
import { useScreenSize } from 'hooks/useScreenSize';
import Link from 'next/link';
import React from 'react';

interface Props {
  restaurants: ContentfulRestaurant[];
}

export default function HomeFeaturedRestaurantsSection(props: Props) {
  const { restaurants } = props;
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <div className="relative">
      <Contained>
        <div className={clsx(!isDesktop && 'flex justify-center')}>
          <CreationHeading float={isDesktop ? 'right' : 'center'}>
            Featured Restaurants
          </CreationHeading>
        </div>
      </Contained>

      <div className={clsx(isDesktop ? '-mt-20' : '')}>
        <HorizontalScrollable
          noPadding
          forceButtons
          buttonsLocation="top"
          verticalBuffer={6}
          spacing={6}
        >
          {restaurants.map((restaurant, key) => {
            const link = generateStaticURL({
              city: restaurant.city,
              cuisine: restaurant.cuisine,
              restaurant: restaurant.uri_name,
            });

            return (
              <Link key={key} href={link.href} as={link.as}>
                <a className="no-underline">
                  <div className="mt-4">
                    <FeaturedRestaurantCard
                      restaurant={restaurant}
                      compact={isMobile || isTablet}
                    />
                  </div>
                </a>
              </Link>
            );
          })}
        </HorizontalScrollable>
      </div>
    </div>
  );
}
