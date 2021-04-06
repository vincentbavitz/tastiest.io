import CovidAwareSVG from '@svg/article/covid-aware.svg';
import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowScroll } from 'react-use';
import { setArticleOfferPosition } from 'state/navigation';
import { IState } from 'state/reducers';
import { ScreenContext } from '../../../contexts/screen';
import { IPost } from '../../../types/cms';
import { Contained } from '../../Contained';
import { RichBody } from '../../RichBody';
import ArticleContained from '../ArticleContained';
import { ArticleWidgetMap } from '../widgets/ArticleWidgetMap';
import { ArticleSectionFeatureImage } from './ArticleSectionFeatureImage';
import ArticleSectionOfferBreakdown from './ArticleSectionOfferBreakdown';

// TODO
// Really want writers to be able to do {{CALL_TO_ACTION}} sorta things like Wordpress shortcodes
// And that will then conditionally render our components
export function ArticleSectionContent(post: IPost) {
  const { isDesktop } = useContext(ScreenContext);

  return isDesktop ? <DesktopContent {...post} /> : <MobileContent {...post} />;
}

const MobileContent = (post: IPost) => (
  <Contained>
    <div className="flex flex-col space-y-4">
      <div>
        <h3 className="text-xl font-medium">{post?.restaurant?.name}</h3>
        <CovidAwareSVG className="h-12 -mt-1" />
      </div>

      <p className="pb-4 leading-7 font-roboto">{post.description}</p>

      <ArticleSectionFeatureImage featureImage={post?.featureImage} />
      <AuxiliaryDivider url={post?.offerDivider?.imageUrl} />
      <ArticleSectionOfferBreakdown {...post.deal} />

      <ArticleWidgetMap city={post.city} restaurant={post.restaurant} />

      <RichBody body={post.body} />
    </div>
  </Contained>
);

const DesktopContent = (post: IPost) => {
  const dispatch = useDispatch();

  // Desktop - Manage scrolling behaviour
  // Whether or not we follow scroll or remain in place
  const ref = useRef(null);
  const { y: windowScrollY } = useWindowScroll();

  const { width } = useContext(ScreenContext);
  const { articleOfferPosition: offerPosition } = useSelector(
    (state: IState) => state.navigation,
  );

  // Set the pixels-from-bottom value of the article content
  // this is used to determine the fixed-bottom state of the
  // floating article offer item.
  useEffect(() => {
    const { height = 0, top = 0 } = ref.current?.getBoundingClientRect();

    const bottom = windowScrollY + top + height;
    const pxFromBottom =
      (document?.body?.parentNode as any)?.offsetHeight - bottom;

    dispatch(
      setArticleOfferPosition({
        ...offerPosition,
        pxFromBottom,
      }),
    );
  }, [width]);

  return (
    <div ref={ref}>
      <ArticleContained>
        <div className="flex items-center justify-start space-x-4">
          <h3 className="text-xl font-medium">{post?.restaurant?.name}</h3>
          <CovidAwareSVG className="h-12" />
        </div>

        <div className="flex flex-col mt-4 space-y-6">
          <div className="">{post?.description}</div>

          <ArticleSectionFeatureImage featureImage={post?.featureImage} />

          <RichBody body={post.body} />
        </div>
      </ArticleContained>
    </div>
  );
};

const AuxiliaryDivider = ({ url }: { url: string }) => (
  <div className="flex items-center justify-center h-24 pb-10 -mt-20 space-x-10 desktop:h-56 desktop:-mt-32">
    <div className="flex-1 border-b-2 border-secondary"></div>
    <img src={url} className="h-32" />
    <div className="flex-1 border-b-2 border-secondary"></div>
  </div>
);
