import { IRestaurant } from '@tastiest-io/tastiest-utils';
import { useMap } from 'hooks/useMap';
import React from 'react';

interface Props {
  restaurant: IRestaurant;
}

export function RestaurantMap({ restaurant }: Props) {
  useMap('map', {
    lat: restaurant.location.lat,
    lng: restaurant.location.lon,
    pitch: 0,
    zoom: 16,
    markers: [
      {
        lat: restaurant.location.lat,
        lng: restaurant.location.lon,
      },
    ],
  });

  return (
    <div
      id="map"
      style={{
        filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.10))',
      }}
      className="relative w-full h-full overflow-hidden bg-opacity-25 rounded-md bg-secondary"
    ></div>
  );
}
