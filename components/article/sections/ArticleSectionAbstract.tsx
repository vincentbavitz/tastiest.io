import { dlog, IPost } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import ArticleContained from '../ArticleContained';
import { ArticleFeatureVideoWidget } from '../widgets/ArticleFeatureVideoWidget';
import ArticleOrderNowMobile from '../widgets/ArticleOrderNowMobile';
import { ArticleSaveShareWidget } from '../widgets/ArticleSaveShareWidget';

export function ArticleSectionAbstract(props: IPost) {
  const { id, title, slug, video, deal, abstractDivider, titleDivider } = props;
  const { isDesktop } = useScreenSize();

  dlog('ArticleSectionAbstract ➡️ titleDivider:', titleDivider);

  return (
    <div className="relative w-full mb-12 bg-secondary-1">
      {isDesktop ? (
        <ArticleSaveShareWidget {...props} />
      ) : (
        <div className="pt-20"></div>
      )}

      {isDesktop ? (
        <ArticleContained>
          <div className="mt-2">
            <ArticleFeatureVideoWidget video={video} />
          </div>

          <div className="relative pt-16">
            <div className="flex justify-center w-full h-px">
              <img
                src={abstractDivider?.url}
                className="h-20 -mt-2 transform -translate-y-1/2"
              />
            </div>
          </div>
        </ArticleContained>
      ) : (
        <Contained>
          <ArticleFeatureVideoWidget video={video} />

          <div className="flex justify-center w-full h-4 pt-20 mb-12">
            <img src={abstractDivider?.url} className="h-20 -mt-12" />
          </div>
        </Contained>
      )}

      {!isDesktop && <ArticleOrderNowMobile deal={deal} slug={slug} />}
    </div>
  );
}
