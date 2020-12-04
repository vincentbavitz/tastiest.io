import React from 'react';
import CharacterEatingSVG from '../../../assets/svgs/article/character-eating.svg';
import { UI } from '../../../constants';
import { Contained } from '../../Contained';
import { ArticleSaveShareWidget } from '../widgets/ArticleSaveShareWidget';
import { ArticleWidgetMap } from '../widgets/ArticleWidgetMap';
import { ArticleDescriptionSection } from './ArticleDescriptionSection';

interface Props {
  //
}

export function ArticleSectionAbstract(props: Props) {
  return (
    <Contained backgroundColor="secondary-alt">
      <CharacterEating />

      <div className="flex flex-col items-center pt-6 pb-16 space-y-10">
        <ArticleSaveShareWidget articleId="" articleUrl="" />

        <ArticleDescriptionSection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          eligendi, labore tenetur odio veritatis alias nihil provident ad! Hic
          aperiam quaerat nemo vel numquam quibusdam
        </ArticleDescriptionSection>

        <ArticleWidgetMap location={{ lng: 33, lat: 33 }} />
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
