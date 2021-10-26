import { IPost } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { ExperienceOrderPanelDesktop } from 'components/article/widgets/ExperienceOrderPanelDesktop';
import React, { useRef } from 'react';
import Sticky from 'react-stickynode';
import { useWindowScroll } from 'react-use';
import { UI } from '../../constants';

const OFFER_WIDGET_FLOAT_GAP_PX = 65;

interface Props {
  post: IPost;
  posts: IPost[];
}

export default function FloatingOrderPanel(props: Props) {
  const { post, posts } = props;

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
    <div>
      <Sticky
        top={OFFER_WIDGET_FLOAT_GAP_PX}
        bottomBoundary={contentPxScrollBottom}
        innerZ={UI.Z_INDEX_HEADER - 1}
      >
        <div className="h-0">
          <div
            ref={refOrderNowSection}
            className={clsx('w-full pointer-events-none duration-150 right-0')}
          >
            <ExperienceOrderPanelDesktop
              deal={post.deal}
              slug={post.slug}
              posts={posts}
            />
          </div>
        </div>
      </Sticky>
    </div>
  );
}
