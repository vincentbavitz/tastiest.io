import { dlog, IRestaurant } from '@tastiest-io/tastiest-utils';
import { LocationIndictor } from 'components/LocationIndictor';
import { useMap } from 'hooks/useMap';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';

interface Props {
  location: string;
  restaurant: IRestaurant;
}

export function ArticleWidgetMap({ location, restaurant }: Props) {
  const { isDesktop } = useScreenSize();

  dlog('ArticleWidgetMap ➡️ fsadasd:');
  dlog('ArticleWidgetMap ➡️ isDesktop:', isDesktop);

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
    <div className="flex flex-col w-full desktop:flex-row desktop:justify-center desktop:space-x-8">
      <div
        style={{ height: '300px' }}
        className="relative w-full overflow-hidden rounded desktop:h-auto desktop:mt-0 desktop:w-1/2"
      >
        <div id="map" className="w-full h-full"></div>
      </div>

      <div className="flex flex-col justify-end pb-4 space-y-3">
        {isDesktop && (
          <div className="flex justify-between mt-2">
            <h4 className="text-lg font-medium">{restaurant?.name}</h4>
            <LocationIndictor location={location} />
          </div>
        )}

        <div className="text-sm opacity-50">
          <p>{restaurant?.location?.address}</p>
          <a
            href={restaurant?.website}
            target="_blank"
            rel="noreferrer"
            className="font-normal"
          >
            {restaurant?.website
              .replace(/^(https?:\/\/)?(www\.)?/g, '')
              .replace(/\/$/, '')}
          </a>
        </div>
      </div>
    </div>
  );
}
