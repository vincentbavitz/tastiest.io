import { useRouter } from 'next/router';
import React from 'react';
import { useArticle } from '../../../hooks/article';
import { useScreenSize } from '../../../hooks/screen';
import { ILocation } from '../../../types/article';
import { CityIndictor } from '../../CityIndictor';
import { Title } from '../../Title';

export function ArticleWidgetMap() {
  const { location, city } = useArticle();

  const { isDesktop } = useScreenSize();

  return (
    <div className="flex justify-center w-full space-x-8">
      <div
        style={{
          maxWidth: isDesktop ? '500px' : 'unset',
        }}
        className="border-4 border-primary rounded-xl overflow-hidden w-full lg:w-1/2"
      >
        <img src="/map.png" />
      </div>

      <div className="flex flex-col justify-end pb-4 space-y-6">
        <CityIndictor city={city} />

        <div className="flex flex-col">
          <Title level={1} bold>
            Restaurant Name
          </Title>

          <span>Address line</span>
          <span>Address line</span>
          <span>Website / socials</span>
        </div>
      </div>
    </div>
  );
}
