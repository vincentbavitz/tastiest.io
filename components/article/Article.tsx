import { IPost } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useRef } from 'react';
import Sticky from 'react-stickynode';
import { useWindowScroll } from 'react-use';
import { UI } from '../../constants';
import { ArticleSectionAbstract } from './sections/ArticleSectionAbstract';
import { ArticleSectionContent } from './sections/ArticleSectionContent';
import { ArticleSectionTitle } from './sections/ArticleSectionTitle';
import { ArticleOrderNowDesktop } from './widgets/ArticleOrderNowDesktop';

export function Article(post: IPost) {
  const { isDesktop } = useScreenSize();
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
  const { title, city } = post;

  // Manage scrolling behaviour
  // Whether or not we follow scroll or remain in place
  const refOrderNowSection = useRef(null);
  const refContentSection = useRef(null);

  const { y: windowScrollY } = useWindowScroll();

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

        <ArticleSectionAbstract {...post} />

        <div ref={refContentSection}>
          <ArticleSectionContent {...post} />
        </div>
      </article>
    </div>
  );
}
