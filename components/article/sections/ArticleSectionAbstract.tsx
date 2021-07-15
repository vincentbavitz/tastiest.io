import { dlog, IFigureImage, IPost } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { UI } from '../../../constants';
import ArticleContained from '../ArticleContained';
import { ArticleFeatureVideoWidget } from '../widgets/ArticleFeatureVideoWidget';
import ArticleOrderNowMobile from '../widgets/ArticleOrderNowMobile';
import { ArticleSaveShareWidget } from '../widgets/ArticleSaveShareWidget';

const EATING_CHARACTER_SIZE_REM = 22;

export function ArticleSectionAbstract(props: IPost) {
  const { id, title, slug, video, deal, abstractDivider, titleDivider } = props;
  const { isDesktop } = useScreenSize();

  dlog('ArticleSectionAbstract ➡️ titleDivider:', titleDivider);

  return (
    <div className="relative w-full bg-secondary-1">
      {!isDesktop ? (
        <CharacterEatingMobile titleDivider={titleDivider} />
      ) : (
        <CharacterEatingDesktop titleDivider={titleDivider} />
      )}

      <ArticleSaveShareWidget {...props} />

      {isDesktop ? (
        <ArticleContained>
          <div className="mt-6">
            <ArticleFeatureVideoWidget video={video} />
          </div>

          <div className="flex justify-center w-full h-4 pt-20 mb-12">
            <img
              src={abstractDivider?.url}
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
              src={abstractDivider?.url}
              className="h-32 -mt-20 desktop:h-56 desktop:-mt-32"
            />
          </div>
        </Contained>
      )}

      {!isDesktop && <ArticleOrderNowMobile deal={deal} slug={slug} />}
    </div>
  );
}

interface ITitleDividerProps {
  titleDivider: IFigureImage;
}

const CharacterEatingDesktop = ({ titleDivider }: ITitleDividerProps) => (
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
      <img
        src={titleDivider?.url}
        style={{
          width: `${EATING_CHARACTER_SIZE_REM}rem`,
          height: `${EATING_CHARACTER_SIZE_REM}rem`,
        }}
      />
    </div>
  </div>
);

const CharacterEatingMobile = ({ titleDivider }: ITitleDividerProps) => (
  <div
    className="z-0 flex justify-center h-0 mb-16"
    style={{
      marginTop: '10.95rem',
    }}
  >
    <img
      src={titleDivider?.url}
      style={{
        width: '15rem',
        height: '15rem',
        transform: 'translateY(-73%)',
      }}
    />
  </div>
);
