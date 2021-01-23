import React, { useContext } from 'react';
import { ScreenContext } from '../../../contexts/screen';
import { getMapBoxStaticSource } from '../../../lib/mapbox';
import { ILocation } from '../../../types/article';
import { CityIndictor } from '../../CityIndictor';
import { Title } from '../../Title';

interface Props {
  city: string;
  location: ILocation;
  restaurantName: string;
}

export function ArticleWidgetMap({ city, location, restaurantName }: Props) {
  const { isDesktop } = useContext(ScreenContext);

  console.log('ArticleWidgetMap ➡️ location:', location);

  return (
    <div className="flex flex-col w-full desktop:flex-row desktop:justify-center desktop:space-x-8">
      {!isDesktop && <CityIndictor city={city} />}
      <div className="mt-4 h-40 desktop:h-auto desktop:mt-0 desktop:w-1/2 w-full rounded-xl overflow-hidden">
        <img
          className="h-full w-full object-cover border-4 border-primary "
          src={getMapBoxStaticSource(
            location.lat,
            location.lng,
            !isDesktop ? 1200 : 400,
          )}
        />
      </div>

      <div className="flex flex-col justify-end pb-4 space-y-3">
        {isDesktop && <CityIndictor city={city} />}

        <div className="flex flex-col font-medium ml-4 mt-3 desktop:ml-0 desktop:mt-0">
          <Title level={1} bold>
            {restaurantName}
          </Title>

          <span>Address line</span>
          <span>Address line</span>
        </div>
      </div>
    </div>
  );
}
