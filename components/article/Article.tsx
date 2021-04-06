import clsx from 'clsx';
import { useOrderNow } from 'hooks/checkout/useOrderNow';
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
  const refContentSection = useRef(null);

  const dispatch = useDispatch();
  const { isDesktop } = useContext(ScreenContext);
  const { y: windowScrollY } = useWindowScroll();

  const isFixedTop = offerPosition === ArticleOfferLocation.FIXED_TOP;
  const isFloating = offerPosition === ArticleOfferLocation.FLOATING;
  const isFixedBottom = offerPosition === ArticleOfferLocation.FIXED_BOTTOM;

  useEffect(() => {
    const rects = ref?.current?.getBoundingClientRect();
    const articlePxFromTop = windowScrollY + (rects?.top ?? 0);

    dispatch(
      setArticleOfferGeometry({
        articlePxFromTop,
      }),
    );
  }, []);

  useEffect(() => {
    const { top = 0, height = 0 } = ref?.current?.getBoundingClientRect();
    const {
      top: orderNowTop = 0,
    } = refOrderNowSection?.current?.getBoundingClientRect();

    // Gets the location under the condition that it's floating
    const offerPxFromBottom = window?.innerHeight - top - height;

    if (
      offerPxFromBottom <= offerGeometry.contentPxFromBottom &&
      offerPosition !== ArticleOfferLocation.FIXED_BOTTOM
    ) {
      dispatch(setArticleOfferPosition(ArticleOfferLocation.FIXED_BOTTOM));
    }

    // Slip back into floating on scrolling up
    if (
      offerPosition === ArticleOfferLocation.FIXED_BOTTOM &&
      (offerPxFromBottom > offerGeometry.contentPxFromBottom ||
        orderNowTop > UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX)
    ) {
      dispatch(setArticleOfferPosition(ArticleOfferLocation.FLOATING));
    }

    console.log('Article ➡️ orderNowTop:', orderNowTop);

    // Set the pixels-from-bottom value of the article content
    // this is used to determine the fixed-bottom state of the
    // floating article offer item.
    const {
      bottom: contentBottom = 0,
    } = refContentSection?.current?.getBoundingClientRect();
    const contentPxFromBottom = window?.innerHeight - contentBottom;

    console.log('Article ➡️ contentPxFromBottom:', contentPxFromBottom);

    dispatch(
      setArticleOfferGeometry({
        contentPxFromBottom,
      }),
    );
  }, [windowScrollY]);

  const offsetY =
    offerGeometry.contentPxFromTop - offerGeometry.articlePxFromTop;

  return (
    <div ref={ref} className="relative">
      {/* Floating deal */}
      <div
        ref={refOrderNowSection}
        style={{
          marginTop: isFixedTop
            ? `${offsetY}px`
            : `${UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX}px`,
          zIndex: UI.Z_INDEX_HEADER - 1,
        }}
        className={clsx(
          'w-full pointer-events-none',
          isFloating && 'fixed top-0 right-0',
          isFixedTop && 'absolute top-0 right-0',
          isFixedBottom && 'absolute bottom-0 right-0',
        )}
      >
        <ArticleOrderNowDesktop deal={post.deal} slug={post.slug} />
      </div>

      <article>
        <ArticleSectionTitle title={title} city={city} />
        <ArticleSectionAbstract {...post} />

        <div ref={refContentSection}>
          <ArticleSectionContent {...post} />
        </div>
      </article>
    </div>
  );
}
