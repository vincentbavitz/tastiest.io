import { ArrowUpOutlined } from '@ant-design/icons';
import { IRestaurant } from '@tastiest-io/tastiest-utils';
import { LocationIndictor } from 'components/LocationIndictor';
import { useMap } from 'hooks/useMap';
import React from 'react';
import { getGoogleMapLink } from 'utils/location';

interface Props {
  location: string;
  restaurant: IRestaurant;
}

export function ArticleWidgetMap({ location, restaurant }: Props) {
  useMap('map', {
    lat: restaurant.location.lat,
    lng: restaurant.location.lon,
    zoom: 16,
    pitch: 0,
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
        style={{
          height: '250px',
          filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.10))',
        }}
        className="relative w-full overflow-hidden bg-opacity-25 rounded-sm bg-secondary-2"
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
          <a
            target="_blank"
            rel="noreferrer"
            href={getGoogleMapLink(
              restaurant.location.lat,
              restaurant.location.lon,
            )}
          >
            {restaurant?.location?.address}
          </a>
        </div>
      </div>
    </div>
  );
}
