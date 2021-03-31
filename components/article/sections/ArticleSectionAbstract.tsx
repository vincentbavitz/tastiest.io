import CharacterEatingSVG from '@svg/article/character-eating.svg';
import { Contained } from 'components/Contained';
import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowScroll } from 'react-use';
import { setArticleOfferIsFloating } from 'state/navigation';
import { IState } from 'state/reducers';
import { IPost } from 'types/cms';
import { UI } from '../../../constants';
import { ScreenContext } from '../../../contexts/screen';
import ArticleContained from '../ArticleContained';
import { ArticleFeatureVideoWidget } from '../widgets/ArticleFeatureVideoWidget';
import { ArticleOrderNowDesktop } from '../widgets/ArticleOrderNowDesktop';
import { ArticleSaveShareStatic } from '../widgets/ArticleSaveShareStatic';

const EATING_CHARACTER_SIZE_REM = 22;

export function ArticleSectionAbstract(props: IPost) {
  const { id, title, slug, video, deal, abstractDivider } = props;
  const { isDesktop } = useContext(ScreenContext);

  const dispatch = useDispatch();

  const ref = useRef(null);
  const { y: windowScrollY } = useWindowScroll();

  // Whether or not we follow scroll or remain in place
  const { articleOfferIsFloating: isFloating } = useSelector(
    (state: IState) => state.navigation,
  );

  useEffect(() => {
    const locationY = ref.current?.getBoundingClientRect()?.top;

    console.log('ArticleOrderNowDesktop ➡️ locationY:', locationY);
    console.log('ArticleOrderNowDesktop ➡️ isFloating:', isFloating);

    if (locationY < UI.ARTICLE.OFFER_WIDGET_FLOAT_TOP_PX && !isFloating) {
      dispatch(setArticleOfferIsFloating(true));
    }

    if (isFloating && locationY >= UI.ARTICLE.OFFER_WIDGET_FLOAT_TOP_PX) {
      dispatch(setArticleOfferIsFloating(false));
    }
  }, [windowScrollY]);

  return (
    <div className="relative w-full bg-secondary-1">
      {!isDesktop ? <CharacterEatingMobile /> : <CharacterEatingDesktop />}

      <ArticleSaveShareStatic id={id} title={title} slug={slug} />

      {isDesktop ? (
        <ArticleContained>
          <div className="mt-6">
            <div ref={ref}>
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

      {isDesktop && <ArticleOrderNowDesktop deal={deal} slug={slug} />}
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
