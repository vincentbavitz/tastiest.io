import { IPost } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import { CovidAware } from 'public/assets/article';
import React from 'react';
import { Contained } from '../../Contained';
import { RichBody } from '../../RichBody';
import ArticleContained from '../ArticleContained';
import { ArticleWidgetMap } from '../widgets/ArticleWidgetMap';
import ArticleSectionOfferBreakdown from './ArticleSectionOfferBreakdown';

// TODO
// Really want writers to be able to do {{CALL_TO_ACTION}} sorta things like Wordpress shortcodes
// And that will then conditionally render our components
export function ArticleSectionContent(post: IPost) {
  const { isDesktop } = useScreenSize();

  return isDesktop ? <DesktopContent {...post} /> : <MobileContent {...post} />;
}

const MobileContent = (post: IPost) => (
  <Contained>
    <div className="flex flex-col space-y-4">
      <div>
        <h3 className="text-xl font-medium">{post?.restaurant?.name}</h3>
        <CovidAware className="h-12 -mt-1" />
      </div>

      <p className="pb-4 leading-7 font-roboto">{post.description}</p>

      {/* <ArticleSectionFeatureImage featureImage={post?.featureImage} /> */}
      <AuxiliaryDivider url={post?.offerDivider?.url} />
      <ArticleSectionOfferBreakdown {...post.deal} />

      <ArticleWidgetMap
        location={post.displayLocation}
        restaurant={post.restaurant}
      />

      <RichBody body={post.body} />
    </div>
  </Contained>
);

const DesktopContent = (post: IPost) => {
  return (
    <ArticleContained>
      <div className="flex items-center justify-start space-x-4">
        <h3 className="text-xl font-medium">{post?.restaurant?.name}</h3>
        <CovidAware className="h-12" />
      </div>

      <div className="flex flex-col mt-4 space-y-6">
        <div className="">{post?.description}</div>

        {/* <ArticleSectionFeatureImage featureImage={post?.featureImage} /> */}

        <RichBody body={post.body} />
      </div>
    </ArticleContained>
  );
};

const AuxiliaryDivider = ({ url }: { url: string }) => (
  <div className="flex items-center justify-center h-24 pb-10 -mt-20 space-x-10 desktop:h-56 desktop:-mt-32">
    <div className="flex-1 border-b-2 border-secondary"></div>
    <img src={url} className="h-32" />
    <div className="flex-1 border-b-2 border-secondary"></div>
  </div>
);
