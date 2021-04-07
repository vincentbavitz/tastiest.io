import clsx from 'clsx';
import { useOrderNow } from 'hooks/checkout/useOrderNow';
import React, { useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Sticky from 'react-stickynode';
import { useWindowScroll } from 'react-use';
import { ArticleOfferLocation } from 'state/navigation';
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
  const { offerGeometry } = useOrderNow(deal, slug);

  // Manage scrolling behaviour
  // Whether or not we follow scroll or remain in place
  const ref = useRef(null);
  const refOrderNowSection = useRef(null);
  const refAbstractSection = useRef(null);
  const refContentSection = useRef(null);

  const dispatch = useDispatch();
  const { y: windowScrollY } = useWindowScroll();

  const [offerPosition, setOfferPosition] = useState(
    ArticleOfferLocation.FIXED_TOP,
  );

  const isFixedTop = offerPosition === ArticleOfferLocation.FIXED_TOP;
  const isFloating = offerPosition === ArticleOfferLocation.FLOATING;
  const isFixedBottom = offerPosition === ArticleOfferLocation.FIXED_BOTTOM;

  // const setBottom = _.debounce(pxFromBottom => {
  //   dispatch(
  //     setArticleOfferGeometry({
  //       contentPxFromBottom: pxFromBottom,
  //     }),
  //   );
  // }, 100);

  // const setFixation = () => {
  //   ///////////////////////////////////////////////////////////
  //   //        Gettings rects for all our refs       ///////////
  //   ///////////////////////////////////////////////////////////
  //   const orderNowRects = refOrderNowSection?.current?.getBoundingClientRect();
  //   const { top: orderNowTop, bottom: orderNowBottom } = orderNowRects ?? {};

  //   const abstractRects = refAbstractSection?.current?.getBoundingClientRect();
  //   const { top: abstractTop } = abstractRects ?? {};

  //   ///////////////////////////////////////////////////////////
  //   //            Floating from fixed top           ///////////
  //   ///////////////////////////////////////////////////////////
  //   if (
  //     offerPosition === ArticleOfferLocation.FIXED_TOP &&
  //     abstractTop < UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX
  //   ) {
  //     console.log('Setting to floating');
  //     setOfferPosition(ArticleOfferLocation.FLOATING);
  //     return;
  //   }

  //   if (
  //     offerPosition === ArticleOfferLocation.FLOATING &&
  //     abstractTop >= UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX
  //   ) {
  //     console.log('Setting to fixed top');
  //     setOfferPosition(ArticleOfferLocation.FIXED_TOP);
  //     return;
  //   }

  //   ///////////////////////////////////////////////////////////
  //   //           Floating from fixed bottom         ///////////
  //   ///////////////////////////////////////////////////////////
  //   // Gets the location under the condition that it's floating
  //   const offerPxFromBottom = window?.innerHeight - orderNowBottom;

  //   if (
  //     offerPosition !== ArticleOfferLocation.FIXED_BOTTOM &&
  //     offerPosition !== ArticleOfferLocation.FIXED_TOP &&
  //     offerPxFromBottom > 0 &&
  //     offerPxFromBottom <= offerGeometry.contentPxFromBottom
  //   ) {
  //     console.log('Setting to fixed bottom');
  //     setOfferPosition(ArticleOfferLocation.FIXED_BOTTOM);
  //     return;
  //   }

  //   // Slip back into floating on scrolling up
  //   if (
  //     offerPosition === ArticleOfferLocation.FIXED_BOTTOM &&
  //     orderNowTop > 0 &&
  //     orderNowTop > UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX
  //   ) {
  //     console.log('Setting back to floating');
  //     setOfferPosition(ArticleOfferLocation.FLOATING);
  //     return;
  //   }
  // };

  // useEffect(() => {
  //   const rects = ref?.current?.getBoundingClientRect();
  //   const articlePxFromTop = windowScrollY + (rects?.top ?? 0);

  //   const abstractRects = refAbstractSection?.current?.getBoundingClientRect();
  //   const { top: abstractTop = 100 } = abstractRects ?? {};
  //   const contentPxFromTop = windowScrollY + abstractTop;

  //   dispatch(
  //     setArticleOfferGeometry({
  //       contentPxFromTop,
  //       articlePxFromTop,
  //     }),
  //   );
  // }, []);

  // useEffect(() => {
  //   const contentRects = refContentSection?.current?.getBoundingClientRect();
  //   const { bottom: contentBottom } = contentRects ?? {};

  //   // Set the pixels-from-bottom value of the article content
  //   // this is used to determine the fixed-bottom state of the
  //   // floating article offer item.
  //   const contentPxFromBottom = window?.innerHeight - contentBottom;
  //   setBottom(contentPxFromBottom);
  //   setFixation();
  // }, [windowScrollY]);

  // const offsetY =
  //   offerGeometry.contentPxFromTop - offerGeometry.articlePxFromTop;

  // // prettier-ignore
  // const translateY =
  //   isFixedTop ? offsetY :
  //   isFloating ? UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX :
  //   0;

  const contentRects = refContentSection?.current?.getBoundingClientRect();
  const { bottom: contentBottom = 100 } = contentRects ?? {};

  const contentPxFromBottom =
    document?.documentElement?.scrollHeight - (contentBottom + windowScrollY);

  const contentPxScrollBottom =
    document?.documentElement?.scrollHeight -
    contentPxFromBottom -
    refOrderNowSection?.current?.getBoundingClientRect().height;

  return (
    <div className="relative">
      <article>
        <ArticleSectionTitle title={title} city={city} />

        {/* Floating deal */}
        <Sticky
          // top="#article-abstract"
          top={UI.ARTICLE.OFFER_WIDGET_FLOAT_GAP_PX}
          bottomBoundary={contentPxScrollBottom}
          innerZ={UI.Z_INDEX_HEADER - 1}
        >
          <div className="h-0">
            <div
              ref={refOrderNowSection}
              className={clsx(
                'w-full pointer-events-none duration-150 right-0',
              )}
            >
              <ArticleOrderNowDesktop deal={post.deal} slug={post.slug} />
            </div>
          </div>
        </Sticky>

        <div id="article-abstract" ref={refAbstractSection}>
          <ArticleSectionAbstract {...post} />
        </div>

        <div ref={refContentSection}>
          <ArticleSectionContent {...post} />
        </div>
      </article>
    </div>
  );
}
