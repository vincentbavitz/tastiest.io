import clsx from 'clsx';
import { useOrderNow } from 'hooks/checkout/useOrderNow';
import _ from 'lodash';
import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useWindowScroll } from 'react-use';
import {
  ArticleOfferLocation,
  setArticleOfferGeometry,
  setArticleOfferPosition,
} from 'state/navigation';
import { UI } from '../../constants';
import { ScreenContext } from '../../contexts/screen';
import { IPost } from '../../types/cms';
import { ArticleSectionAbstract } from './sections/ArticleSectionAbstract';
import { ArticleSectionContent } from './sections/ArticleSectionContent';
import { ArticleSectionTitle } from './sections/ArticleSectionTitle';
import { ArticleOrderNowDesktop } from './widgets/ArticleOrderNowDesktop';

export function Article(post: IPost) {
  const { isDesktop } = useContext(ScreenContext);
  return isDesktop ? <ArticleDesktop {...post} /> : <ArticleMobile {...post} />;
}

function ArticleMobile(post: IPost) {
  const { title, city } = post;

  return (
    <article>
      <ArticleSectionTitle title={title} city={city} />

      <ArticleSectionAbstract {...post} />
      <ArticleSectionContent {...post} />
    </article>
  );
}

function ArticleDesktop(post: IPost) {
  const { title, city, deal, slug } = post;
  const { offerPosition, offerGeometry } = useOrderNow(deal, slug);

  // Manage scrolling behaviour
  // Whether or not we follow scroll or remain in place
  const ref = useRef(null);
  const refOrderNowSection = useRef(null);
  const refAbstractSection = useRef(null);
  const refContentSection = useRef(null);

  const dispatch = useDispatch();
  const { y: windowScrollY } = useWindowScroll();

  const isFixedTop = offerPosition === ArticleOfferLocation.FIXED_TOP;
  const isFloating = offerPosition === ArticleOfferLocation.FLOATING;
  const isFixedBottom = offerPosition === ArticleOfferLocation.FIXED_BOTTOM;

  const setBottom = _.debounce(pxFromBottom => {
    dispatch(
      setArticleOfferGeometry({
        contentPxFromBottom: pxFromBottom,
      }),
    );
  }, 100);

  const setFixation = () => {
    ///////////////////////////////////////////////////////////
    //        Gettings rects for all our refs       ///////////
    ///////////////////////////////////////////////////////////
    const orderNowRects = refOrderNowSection?.current?.getBoundingClientRect();
    const { top: orderNowTop, bottom: orderNowBottom } = orderNowRects ?? {};

    const abstractRects = refAbstractSection?.current?.getBoundingClientRect();
    const { top: abstractTop } = abstractRects ?? {};

    ///////////////////////////////////////////////////////////
    //            Floating from fixed top           ///////////
    ///////////////////////////////////////////////////////////
    if (
      offerPosition === ArticleOfferLocation.FIXED_TOP &&
      abstractTop < UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX
    ) {
      console.log('Setting to floating');
      dispatch(setArticleOfferPosition(ArticleOfferLocation.FLOATING));
    }

    if (
      offerPosition === ArticleOfferLocation.FLOATING &&
      abstractTop >= UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX
    ) {
      console.log('Setting to fixed top');
      dispatch(setArticleOfferPosition(ArticleOfferLocation.FIXED_TOP));
    }

    ///////////////////////////////////////////////////////////
    //           Floating from fixed bottom         ///////////
    ///////////////////////////////////////////////////////////
    // Gets the location under the condition that it's floating
    const offerPxFromBottom = window?.innerHeight - orderNowBottom;

    if (
      offerPosition !== ArticleOfferLocation.FIXED_BOTTOM &&
      offerPxFromBottom > 0 &&
      offerPxFromBottom <= offerGeometry.contentPxFromBottom
    ) {
      console.log('Setting to fixed bottom');
      dispatch(setArticleOfferPosition(ArticleOfferLocation.FIXED_BOTTOM));
      return;
    }

    // Slip back into floating on scrolling up
    if (
      offerPosition === ArticleOfferLocation.FIXED_BOTTOM &&
      orderNowTop > 0 &&
      orderNowTop > UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX
    ) {
      console.log('Setting back to floating');
      dispatch(setArticleOfferPosition(ArticleOfferLocation.FLOATING));
      return;
    }
  };

  useEffect(() => {
    const rects = ref?.current?.getBoundingClientRect();
    const articlePxFromTop = windowScrollY + (rects?.top ?? 0);

    const abstractRects = refAbstractSection?.current?.getBoundingClientRect();
    const { top: abstractTop = 100 } = abstractRects ?? {};
    const contentPxFromTop = windowScrollY + abstractTop;

    dispatch(
      setArticleOfferGeometry({
        contentPxFromTop,
        articlePxFromTop,
      }),
    );
  }, []);

  useEffect(() => {
    const contentRects = refContentSection?.current?.getBoundingClientRect();
    const { bottom: contentBottom } = contentRects ?? {};

    // Set the pixels-from-bottom value of the article content
    // this is used to determine the fixed-bottom state of the
    // floating article offer item.
    const contentPxFromBottom = window?.innerHeight - contentBottom;
    setBottom(contentPxFromBottom);
    setFixation();
  }, [windowScrollY]);

  const offsetY =
    offerGeometry.contentPxFromTop - offerGeometry.articlePxFromTop;

  // prettier-ignore
  const translateY = 
    isFixedTop ? offsetY :
    isFloating ? UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX :
    0;

  return (
    <div ref={ref} className="relative">
      {/* Floating deal */}
      <div
        ref={refOrderNowSection}
        style={{
          transform: `translateY(${translateY}px)`,
          zIndex: UI.Z_INDEX_HEADER - 1,
          top: isFixedBottom ? 'unset' : '0',
          bottom: isFixedBottom ? '0' : 'unset',
          position: isFloating ? 'fixed' : 'absolute',
        }}
        className={clsx('w-full pointer-events-none duration-150 right-0')}
      >
        <ArticleOrderNowDesktop deal={post.deal} slug={post.slug} />
      </div>

      <article>
        <ArticleSectionTitle title={title} city={city} />\
        <div ref={refAbstractSection}>
          <ArticleSectionAbstract {...post} />
        </div>
        <div ref={refContentSection}>
          <ArticleSectionContent {...post} />
        </div>
      </article>
    </div>
  );
}
