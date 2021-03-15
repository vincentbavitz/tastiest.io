import React, { useContext } from 'react';
import { ScreenContext } from '../../../contexts/screen';
import { IPost } from '../../../types/cms';
import { Contained } from '../../Contained';
import { RichBody } from '../../RichBody';
import { ArticleWidgetOrderNow } from '../widgets/ArticleWidgetOrderNow';
import { ArticleSectionFeatureImage } from './ArticleSectionFeatureImage';

// TODO
// Really want writers to be able to do {{CALL_TO_ACTION}} sorta things like Wordpress shortcodes
// And that will then conditionally render our components
export function ArticleSectionContent(post: IPost) {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <Contained>
      {isDesktop ? <DesktopContent {...post} /> : <MobileContent {...post} />}
    </Contained>
  );
}

const MobileContent = (post: IPost) => (
  <div className="flex flex-col space-y-4">
    <div>{post.description}</div>
    <ArticleWidgetOrderNow deal={post?.deal} slug={post.slug} />
    <RichBody body={post.body} />
    <ArticleSectionFeatureImage featureImage={post?.featureImage} />
  </div>
);

const DesktopContent = (post: IPost) => (
  <div className="flex flex-col">
    <div className="flex space-x-10">
      <div className="w-8/12 mt-16">
        <RichBody body={post.body} />
      </div>

      <div className="w-4/12 mt-12">
        <ArticleWidgetOrderNow deal={post?.deal} slug={post?.slug} />
      </div>
    </div>
    <ArticleSectionFeatureImage featureImage={post?.featureImage} />
  </div>
);
