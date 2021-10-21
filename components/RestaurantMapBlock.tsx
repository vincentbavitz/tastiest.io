import { EnvironmentOutlined } from '@ant-design/icons';
import { IRestaurant } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { ReactNode } from 'react';
import { getGoogleMapLink } from 'utils/location';
import { RestaurantMap } from './modals/RestaurantMap';
import OpenTimes from './restaurant/OpenTimes';

interface Props {
  restaurant: IRestaurant;
  children: ReactNode;
  layout?: 'titleFirst' | 'mapFirst';
}

/** Children of this component fill up the little gap. */
export default function RestaurantMapBlock(props: Props) {
  const { restaurant, children } = props;
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <div>
      <div
        className={clsx(
          isDesktop ? 'flex mt-6 items-end justify-between' : 'flex flex-col',
        )}
      >
        <h4 className="text-2xl font-primary text-primary">
          {restaurant.name}
        </h4>

        <a
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-1 opacity-75"
          href={getGoogleMapLink(
            restaurant.location.lat,
            restaurant.location.lon,
          )}
        >
          <EnvironmentOutlined className="text-secondary text-lg" />{' '}
          <p>{restaurant?.location?.address}</p>
        </a>
      </div>

      {isMobile || isTablet ? (
        <>
          <div className="flex flex-col mt-6 w-full">
            <div
              style={{ minHeight: '12rem' }}
              className="w-full h-64 flex-grow mb-6"
            >
              <RestaurantMap restaurant={restaurant} />
            </div>

            <div
              className={clsx(
                'flex ',
                isMobile ? 'flex-col space-y-4' : 'flex-row space-x-4',
              )}
            >
              <OpenTimes restaurantId={restaurant.id} wide small={isTablet} />

              <div className="">{children}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex pt-4 space-x-6">
            <div
              style={{ minHeight: '12rem' }}
              className="w-full h-auto flex-grow"
            >
              <RestaurantMap restaurant={restaurant} />
            </div>

            <div className="flex-grow">
              <OpenTimes restaurantId={restaurant.id} small buffHeight />

              <div className="pt-4">{children}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
