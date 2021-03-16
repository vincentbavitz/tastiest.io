import { CityIndictor } from 'components/CityIndictor';
import React from 'react';
import { UI } from '../../../constants';
import { IAuthor } from '../../../types/cms';
import { Contained } from '../../Contained';

interface Props {
  title: string;
  author: IAuthor;
  date: string;
}

export function ArticleSectionTitle(props: Props) {
  const { title, author, date } = props;

  return (
    <Contained>
      <div className="flex flex-col items-center mt-16 mb-4 space-y-4">
        <div
          className="flex items-center"
          style={{
            minHeight: '7rem',
            maxWidth: `${UI.ARTICLE.TITLE_MAX_WIDTH_REM}rem`,
          }}
        >
          <h1 className="text-4xl leading-none text-center font-somatic text-primary desktop:text-5xl tablet:text-fixexl">
            {title}
          </h1>
        </div>

        <CityIndictor />
      </div>
    </Contained>
  );
}
