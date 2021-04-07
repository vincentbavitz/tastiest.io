import MapPinSVG from '@svg/icons/location-brand.svg';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { IRestaurant } from 'types/cms';
import { dlog } from 'utils/development';
import { getMapBoxStaticSource } from 'utils/location';
import { CityIndictor } from '../../CityIndictor';
import { Title } from '../../Title';

interface Props {
  city: string;
  restaurant: IRestaurant;
}

export function ArticleWidgetMap({ city, restaurant }: Props) {
  const { isDesktop } = useScreenSize();

  dlog('ArticleWidgetMap ➡️ fsadasd:');
  dlog('ArticleWidgetMap ➡️ isDesktop:', isDesktop);

  return (
    <div className="flex flex-col w-full desktop:flex-row desktop:justify-center desktop:space-x-8">
      <div className="relative w-full h-40 overflow-hidden rounded desktop:h-auto desktop:mt-0 desktop:w-1/2">
        <div className="absolute flex items-center justify-center w-full h-full">
          <MapPinSVG className="h-10" />
        </div>

        <img
          className="object-cover w-full h-full"
          src={getMapBoxStaticSource(
            restaurant?.location?.lat,
            restaurant?.location?.lon,
            isDesktop ? 1100 : 900,
            isDesktop ? 300 : 500,
            isDesktop ? 10 : 15,
          )}
        />
      </div>

      <div className="flex flex-col justify-end pb-4 space-y-3">
        {isDesktop && <CityIndictor city={city} />}

        <div className="flex flex-col mt-3 font-medium desktop:ml-0 desktop:mt-0">
          <Title level={1} bold margin={false}>
            {restaurant?.name}
          </Title>

          <span>{restaurant?.location?.address}</span>
          <a
            href={restaurant?.website}
            target="_blank"
            rel="noreferrer"
            className="font-normal hover:underline"
          >
            {restaurant?.website.replace(/^(https?:\/\/)?(www\.)?/g, '')}
          </a>
        </div>
      </div>
    </div>
  );
}
