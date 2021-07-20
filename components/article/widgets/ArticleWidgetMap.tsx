import { LocationBrandIcon } from '@tastiest-io/tastiest-icons';
import { dlog, IRestaurant } from '@tastiest-io/tastiest-utils';
import { LocationIndictor } from 'components/LocationIndictor';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { getMapBoxStaticSource } from 'utils/location';

interface Props {
  location: string;
  restaurant: IRestaurant;
}

export function ArticleWidgetMap({ location, restaurant }: Props) {
  const { isDesktop } = useScreenSize();

  dlog('ArticleWidgetMap ➡️ fsadasd:');
  dlog('ArticleWidgetMap ➡️ isDesktop:', isDesktop);

  return (
    <div className="flex flex-col w-full desktop:flex-row desktop:justify-center desktop:space-x-8">
      <div className="relative w-full h-40 overflow-hidden rounded desktop:h-auto desktop:mt-0 desktop:w-1/2">
        <div className="absolute flex items-center justify-center w-full h-full">
          <LocationBrandIcon className="h-10" />
        </div>

        <img
          className="object-cover w-full h-full"
          src={getMapBoxStaticSource(
            restaurant?.location?.lat,
            restaurant?.location?.lon,
            isDesktop ? 1100 : 900,
            isDesktop ? 300 : 500,
            isDesktop ? 13 : 15,
          )}
        />
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
