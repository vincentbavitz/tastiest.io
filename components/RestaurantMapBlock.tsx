import { EnvironmentOutlined } from '@ant-design/icons';
import { ContentfulRestaurant } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { getGoogleMapLink } from 'utils/location';
import { RestaurantMap } from './modals/RestaurantMap';

interface Props {
  restaurant: ContentfulRestaurant;
}

type AddressProps = {
  lat: number;
  lon: number;
  address: string;
};

const AddressBlock = (props: AddressProps) => {
  const { lat, lon, address } = props;

  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="opacity-75"
      href={getGoogleMapLink(lat, lon)}
    >
      <EnvironmentOutlined className="inline align-middle text-secondary text-lg" />{' '}
      <span className="align-bottom text-sm">{address}</span>
    </a>
  );
};

/** Children of this component fill up the little gap. */
export default function RestaurantMapBlock(props: Props) {
  const { restaurant } = props;
  const { isMobile } = useScreenSize();

  return (
    <div>
      <section className={clsx('flex flex-col flex-grow')}>
        <div style={{ minHeight: '12rem' }} className="w-full h-56">
          <RestaurantMap
            lat={restaurant.location_lat}
            lon={restaurant.location_lon}
          />
        </div>

        <div className="flex justify-end pt-1 pb-2">
          <AddressBlock
            address={restaurant.location_address}
            lat={restaurant.location_lat}
            lon={restaurant.location_lon}
          />
        </div>
      </section>
    </div>
  );
}
