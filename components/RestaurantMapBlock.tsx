import { EnvironmentOutlined } from '@ant-design/icons';
import { IRestaurant } from '@tastiest-io/tastiest-utils';
import { IAddress } from '@tastiest-io/tastiest-utils/dist/types/geography';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { ReactNode } from 'react';
import { getGoogleMapLink } from 'utils/location';
import { RestaurantMap } from './modals/RestaurantMap';
import OpenTimes from './restaurant/OpenTimes';

interface Props {
  restaurant: IRestaurant;
  children: ReactNode;
  layout?: 'default' | 'stacked';
}

type AddressProps = {
  location: IAddress;
};

const Address = ({ location }: AddressProps) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="opacity-75"
      href={getGoogleMapLink(location.lat, location.lon)}
    >
      <EnvironmentOutlined className="inline align-middle text-secondary text-lg" />{' '}
      <span className="align-bottom text-sm">{location?.address}</span>
    </a>
  );
};

/** Children of this component fill up the little gap. */
export default function RestaurantMapBlock(props: Props) {
  const { restaurant, layout = 'default', children } = props;
  const { isMobile } = useScreenSize();

  return (
    <div>
      <div
        className={clsx(
          'flex pt-4',
          layout === 'default' && 'space-x-6',
          layout === 'stacked' && 'flex-col space-y-4',
        )}
      >
        <section
          className={clsx(
            'flex',
            layout === 'default' ? 'flex-col flex-grow' : 'flex-col-reverse',
          )}
        >
          <div style={{ minHeight: '12rem' }} className="w-full h-56">
            <RestaurantMap restaurant={restaurant} />
          </div>

          <div className="flex justify-end pt-1 pb-2">
            <Address location={restaurant.location} />
          </div>
        </section>

        <div
          className={clsx(
            layout === 'stacked'
              ? 'flex items-stretch gap-4 flex-wrap'
              : 'flex-col space-y-3',
          )}
        >
          <div className={clsx('', layout === 'stacked' && 'flex-1 flex-grow')}>
            <OpenTimes
              restaurantId={restaurant.id}
              wide={layout === 'stacked'}
              buffHeight
              small
            />
          </div>

          <div
            style={{ minHeight: '4rem' }}
            className={clsx(
              'relative',
              layout === 'stacked' ? 'flex-1' : 'flex-grow',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
