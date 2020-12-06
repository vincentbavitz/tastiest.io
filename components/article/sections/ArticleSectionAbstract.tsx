import { useRouter } from 'next/router';
import React, { Children } from 'react';
import CharacterEatingSVG from '../../../assets/svgs/article/character-eating.svg';
import { UI } from '../../../constants';
import { Contained } from '../../Contained';
import { ArticleFeatureVideoWidget } from '../widgets/ArticleFeatureVideoWidget';
import { ArticleSaveShareWidget } from '../widgets/ArticleSaveShareWidget';
import { ArticleWidgetMap } from '../widgets/ArticleWidgetMap';
import { ArticleDescriptionSection } from './ArticleDescriptionSection';
import XiaoDivierSVG from '../../../assets/svgs/article/xiao-divider.svg';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export function ArticleSectionAbstract(props: Props) {
  const { children } = props;

  return (
    <Contained backgroundColor="secondary-alt">
      <CharacterEating />

      <div className="flex flex-col items-center pt-6 mb-16 space-y-10">
        {children}

        <ArticleWidgetMap location={{ lng: 33, lat: 33 }} />
        <ArticleFeatureVideoWidget />
        <div className="flex w-full justify-center h-4">
          <XiaoDivierSVG className="h-56 -mt-32" />
        </div>
      </div>
    </Contained>
  );
}

const CharacterEating = () => (
  <div
    className="flex justify-center absolute inset-0"
    style={{ height: 'fit-content', transform: 'translateY(-73%)' }}
  >
    <div
      className="relative flex flex-start"
      style={{
        width: '80vw',
        minWidth: `${
          UI.ARTICLE.EATING_CHARACTER_SIZE_REM +
          1.5 * UI.ARTICLE.TITLE_MAX_WIDTH_REM
        }rem`,
      }}
    >
      <CharacterEatingSVG
        style={{
          width: `${UI.ARTICLE.EATING_CHARACTER_SIZE_REM}rem`,
          height: `${UI.ARTICLE.EATING_CHARACTER_SIZE_REM}rem`,
        }}
      />
    </div>
  </div>
);
