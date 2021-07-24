import { ArrowUpOutlined } from '@ant-design/icons';
import { IRestaurant } from '@tastiest-io/tastiest-utils';
import { LocationIndictor } from 'components/LocationIndictor';
import { useMap } from 'hooks/useMap';
import React from 'react';

interface Props {
  location: string;
  restaurant: IRestaurant;
}

export function ArticleWidgetMap({ location, restaurant }: Props) {
  useMap('map', {
    lat: restaurant.location.lat,
    lng: restaurant.location.lon,
    zoom: 12,
    markers: [
      {
        lat: restaurant.location.lat,
        lng: restaurant.location.lon,
      },
    ],
  });

  return (
    <div className="flex flex-col w-full">
      <div
        id="map"
        style={{ height: '250px' }}
        className="relative w-full overflow-hidden bg-opacity-25 rounded-md bg-secondary-2"
      ></div>

      <div className="flex flex-col justify-end pb-4">
        <div className="flex items-center justify-between pb-1 mt-2">
          <a
            href={restaurant?.website}
            target="_blank"
            rel="noreferrer"
            className="flex items-end text-lg font-medium leading-4"
          >
            {restaurant?.name}{' '}
            <ArrowUpOutlined className="pl-1 transform rotate-45 opacity-75" />
          </a>
          <LocationIndictor location={location} />
        </div>

        <div className="text-sm opacity-50">
          <p>{restaurant?.location?.address}</p>
        </div>
      </div>
    </div>
  );
}
