import CharacterEatingSVG from '@svg/article/character-eating.svg';
import { Contained } from 'components/Contained';
import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowScroll } from 'react-use';
import {
  ArticleOfferLocation,
  setArticleOfferPosition,
} from 'state/navigation';
import { IState } from 'state/reducers';
import { IPost } from 'types/cms';
import { UI } from '../../../constants';
import { ScreenContext } from '../../../contexts/screen';
import ArticleContained from '../ArticleContained';
import { ArticleFeatureVideoWidget } from '../widgets/ArticleFeatureVideoWidget';
import { ArticleOrderNowDesktop } from '../widgets/ArticleOrderNowDesktop';
import ArticleOrderNowMobile from '../widgets/ArticleOrderNowMobile';
import { ArticleSaveShareWidget } from '../widgets/ArticleSaveShareWidget';

const EATING_CHARACTER_SIZE_REM = 22;

export function ArticleSectionAbstract(props: IPost) {
  const { id, title, slug, video, deal, abstractDivider } = props;
  const { isDesktop } = useContext(ScreenContext);

  const dispatch = useDispatch();

  // Desktop - Manage scrolling behaviour
  // Whether or not we follow scroll or remain in place
  const desktopScrollRef = useRef(null);
  const { y: windowScrollY } = useWindowScroll();
  const { articleOfferPosition: offerPosition } = useSelector(
    (state: IState) => state.navigation,
  );

  useEffect(() => {
    const locationY = desktopScrollRef.current?.getBoundingClientRect()?.top;

    // console.log('ArticleOrderNowDesktop ➡️ locationY:', locationY);
    // console.log('ArticleOrderNowDesktop ➡️ isFloating:', isFloating);

    console.log('ArticleSectionAbstract ➡️ offerPosition:', offerPosition);

    if (
      locationY < UI.ARTICLE.OFFER_WIDGET_FLOAT_TOP_PX &&
      offerPosition.location !== ArticleOfferLocation.FLOATING
    ) {
      dispatch(
        setArticleOfferPosition({
          ...offerPosition,
          location: ArticleOfferLocation.FLOATING,
        }),
      );
    }

    if (
      offerPosition.location === ArticleOfferLocation.FLOATING &&
      locationY >= UI.ARTICLE.OFFER_WIDGET_FLOAT_TOP_PX
    ) {
      dispatch(
        setArticleOfferPosition({
          ...offerPosition,
          location: ArticleOfferLocation.FIXED_TOP,
        }),
      );
    }
  }, [windowScrollY]);

  return (
    <div className="relative w-full bg-secondary-1">
      {!isDesktop ? <CharacterEatingMobile /> : <CharacterEatingDesktop />}

      <ArticleSaveShareWidget id={id} title={title} slug={slug} />

      {isDesktop ? (
        <ArticleContained>
          <div className="mt-6">
            <div ref={desktopScrollRef}>
              <ArticleFeatureVideoWidget video={video} />
            </div>
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

      {isDesktop ? (
        <ArticleOrderNowDesktop deal={deal} slug={slug} />
      ) : (
        <ArticleOrderNowMobile deal={deal} slug={slug} />
      )}
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
      <CharacterEatingSVG
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
    <CharacterEatingSVG
      style={{
        width: '15rem',
        height: '15rem',
        transform: 'translateY(-73%)',
      }}
    />
  </div>
);
