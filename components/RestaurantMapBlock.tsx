import { EnvironmentOutlined } from '@ant-design/icons';
import { Address, RestaurantContentful } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { getGoogleMapLink } from 'utils/location';
import { RestaurantMap } from './modals/RestaurantMap';

interface Props {
  restaurant: RestaurantContentful;
  layout?: 'default' | 'stacked';
}

type AddressProps = {
  location: Address;
};

const AddressBlock = ({ location }: AddressProps) => {
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
  const { restaurant, layout = 'default' } = props;
  const { isMobile } = useScreenSize();

  return (
    <div>
      <div
        className={clsx(
          'flex',
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
            <RestaurantMap location={restaurant.location} />
          </div>

          <div className="flex justify-end pt-1 pb-2">
            <AddressBlock location={restaurant.location} />
          </div>
        </section>
      </div>
    </div>
  );
}
