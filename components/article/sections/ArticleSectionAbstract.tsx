import { IPost } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import { CharacterEating } from 'public/assets/article';
import React from 'react';
import { UI } from '../../../constants';
import ArticleContained from '../ArticleContained';
import { ArticleFeatureVideoWidget } from '../widgets/ArticleFeatureVideoWidget';
import ArticleOrderNowMobile from '../widgets/ArticleOrderNowMobile';
import { ArticleSaveShareWidget } from '../widgets/ArticleSaveShareWidget';

const EATING_CHARACTER_SIZE_REM = 22;

export function ArticleSectionAbstract(props: IPost) {
  const { id, title, slug, video, deal, abstractDivider } = props;
  const { isDesktop } = useScreenSize();

  return (
    <div className="relative w-full bg-secondary-1">
      {!isDesktop ? <CharacterEatingMobile /> : <CharacterEatingDesktop />}

      <ArticleSaveShareWidget id={id} title={title} slug={slug} />

      {isDesktop ? (
        <ArticleContained>
          <div className="mt-6">
            <ArticleFeatureVideoWidget video={video} />
          </div>

          <div className="flex justify-center w-full h-4 pt-20 mb-12">
            <img
              src={abstractDivider?.imageUrl}
              className="h-32 -mt-20 desktop:h-56 desktop:-mt-32"
            />
          </div>
        </ArticleContained>
      ) : (
        <Contained>
          <div className="pb-10">
            <ArticleFeatureVideoWidget video={video} />
          </div>

          <div className="flex justify-center w-full h-4 pt-20 mb-12">
            <img
              src={abstractDivider?.imageUrl}
              className="h-32 -mt-20 desktop:h-56 desktop:-mt-32"
            />
          </div>
        </Contained>
      )}

      {!isDesktop && <ArticleOrderNowMobile deal={deal} slug={slug} />}
    </div>
  );
}

const CharacterEatingDesktop = () => (
  <div
    className="absolute inset-0 flex justify-center pointer-events-none"
    style={{ height: 'fit-content', transform: 'translateY(-73%)' }}
  >
    <div
      className="relative z-0 flex flex-start"
      style={{
        width: '80vw',
        minWidth: `${
          EATING_CHARACTER_SIZE_REM + 1.5 * UI.ARTICLE.TITLE_MAX_WIDTH_REM
        }rem`,
      }}
    >
      <CharacterEating
        style={{
          width: `${EATING_CHARACTER_SIZE_REM}rem`,
          height: `${EATING_CHARACTER_SIZE_REM}rem`,
        }}
      />
    </div>
  </div>
);

const CharacterEatingMobile = () => (
  <div
    className="z-0 flex justify-center h-0 mb-16"
    style={{
      marginTop: '10.95rem',
    }}
  >
    <CharacterEating
      style={{
        width: '15rem',
        height: '15rem',
        transform: 'translateY(-73%)',
      }}
    />
  </div>
);
