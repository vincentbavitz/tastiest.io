import { useMap } from '@tastiest-io/tastiest-ui';
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';

interface Props {
  lat: number;
  lon: number;
}

export function RestaurantMap({ lat, lon }: Props) {
  useMap('map', {
    lat: lat,
    lng: lon,
    pitch: 0,
    zoom: 14,
    markers: [
      {
        lat: lat,
        lng: lon,
      },
    ],
  });

  return (
    <div
      id="map"
      style={{
        filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.10))',
      }}
      className="relative w-full h-full overflow-hidden bg-opacity-25 bg-secondary"
    ></div>
  );
}
