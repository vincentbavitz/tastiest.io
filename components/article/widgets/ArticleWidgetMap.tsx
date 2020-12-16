import React from 'react';
import { useScreenSize } from '../../../hooks/screen';
import { ILocation } from '../../../types/article';
import { CityIndictor } from '../../CityIndictor';
import { Title } from '../../Title';

interface Props {
  city: string;
  location: ILocation;
  restaurantName: string;
}

export function ArticleWidgetMap({ city, location }: Props) {
  const { isMobile, isDesktop } = useScreenSize();

  return (
    <div className="flex flex-col w-full desktop:flex-row desktop:justify-center desktop:space-x-8">
      {isMobile && <CityIndictor city={city} />}
      <div className="border-4 border-primary mt-4 h-40 desktop:h-auto desktop:mt-0 desktop:w-1/2 w-full rounded-xl overflow-hidden">
        <img className="h-full w-full object-cover" src="/map.png" />
      </div>

      <div className="flex flex-col justify-end pb-4 space-y-3">
        {isDesktop && <CityIndictor city={city} />}

        <div className="flex flex-col font-medium ml-4 mt-3 desktop:ml-0 desktop:mt-0">
          <Title level={1} bold>
            Restaurant Name
          </Title>

          <span>Address line</span>
          <span>Address line</span>
        </div>
      </div>
    </div>
  );
}
