import React from 'react';
import CharacterEatingSVG from '../../assets/svgs/article/character-eating.svg';
import { UI } from '../../constants';
import { Contained } from '../Contained';

interface Props {
  //
}

export function ArticleAbstractArea(props: Props) {
  return (
    <Contained backgroundColor="secondary">
      <div
        className="flex flex-col items-center"
        style={{ minHeight: '50rem' }}
      >
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
      </div>
    </Contained>
  );
}
