import { useMap } from '@tastiest-io/tastiest-ui';
import { Address } from '@tastiest-io/tastiest-utils';
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';

interface Props {
  location: Address;
}

export function RestaurantMap({ location }: Props) {
  useMap('map', {
    lat: location.lat,
    lng: location.lon,
    pitch: 0,
    zoom: 14,
    markers: [
      {
        lat: location.lat,
        lng: location.lon,
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
