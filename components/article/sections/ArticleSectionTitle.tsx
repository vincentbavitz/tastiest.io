import { CityIndictor } from 'components/CityIndictor';
import React from 'react';
import { UI } from '../../../constants';
import { Contained } from '../../Contained';

interface Props {
  title: string;
  city: string;
}

export function ArticleSectionTitle(props: Props) {
  const { title, city } = props;

  return (
    <Contained>
      <div className="flex flex-col items-center mt-6 mb-4 space-y-4 tablet:mt-16">
        <div
          className="flex items-center"
          style={{
            minHeight: '7rem',
            maxWidth: `${UI.ARTICLE.TITLE_MAX_WIDTH_REM}rem`,
          }}
        >
          <h1 className="text-5xl leading-tight text-center mobile:text-4xl font-somatic text-primary desktop:text-5xl">
            {title}
          </h1>
        </div>

        <CityIndictor city={city} />
      </div>
    </Contained>
  );
}
