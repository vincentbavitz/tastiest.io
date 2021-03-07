import React, { useContext } from 'react';
import { ILocation } from 'types/cms';
import { ScreenContext } from '../../../contexts/screen';
import { getMapBoxStaticSource } from '../../../services/mapbox';
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
      <div className="w-full h-40 mt-4 overflow-hidden desktop:h-auto desktop:mt-0 desktop:w-1/2 rounded-xl">
        <img
          className="object-cover w-full h-full border-4 border-primary "
          src={getMapBoxStaticSource(
            location?.lat,
            location?.lon,
            !isDesktop ? 1200 : 400,
          )}
        />
      </div>

      <div className="flex flex-col justify-end pb-4 space-y-3">
        {isDesktop && <CityIndictor city={city} />}

        <div className="flex flex-col mt-3 ml-4 font-medium desktop:ml-0 desktop:mt-0">
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
