import CovidAwareSVG from '@svg/article/covid-aware.svg';
import React, { useContext } from 'react';
import { ScreenContext } from '../../../contexts/screen';
import { IPost } from '../../../types/cms';
import { Contained } from '../../Contained';
import { RichBody } from '../../RichBody';
import ArticleContained from '../ArticleContained';
import { ArticleOrderNowDesktop } from '../widgets/ArticleOrderNowDesktop';
import { ArticleSectionFeatureImage } from './ArticleSectionFeatureImage';

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
      <div>{post.description}</div>
      <ArticleOrderNowDesktop deal={post?.deal} slug={post.slug} />
      <RichBody body={post.body} />
      <ArticleSectionFeatureImage featureImage={post?.featureImage} />
    </div>
  </Contained>
);

const DesktopContent = (post: IPost) => (
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
);
