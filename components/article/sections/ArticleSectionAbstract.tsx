import { dlog, IPost } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import ArticleContained from '../ArticleContained';
import { ArticleFeatureVideoWidget } from '../widgets/ArticleFeatureVideoWidget';
import ArticleOrderNowMobile from '../widgets/ArticleOrderNowMobile';

export function ArticleSectionAbstract(props: IPost) {
  const {
    slug,
    description,
    video,
    deal,
    abstractDivider,
    titleDivider,
  } = props;
  const { isDesktop } = useScreenSize();

  dlog('ArticleSectionAbstract ➡️ titleDivider:', titleDivider);

  return (
    <div className="relative w-full mb-12 pt-10 bg-secondary-1">
      {isDesktop ? (
        <ArticleContained>
          <div className="pb-10">
            <h4 className="pb-2 text-2xl">The Experience</h4>
            <p className="">{description}</p>
          </div>

          <ArticleFeatureVideoWidget video={video} />
        </ArticleContained>
      ) : (
        <Contained>
          <ArticleFeatureVideoWidget video={video} />
        </Contained>
      )}

      {!isDesktop && <ArticleOrderNowMobile deal={deal} slug={slug} />}
    </div>
  );
}
