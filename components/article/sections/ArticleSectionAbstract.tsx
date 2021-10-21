import { dlog, IPost } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import ArticleContained from '../ArticleContained';
import { ArticleFeatureVideoWidget } from '../widgets/ArticleFeatureVideoWidget';
import ArticleOrderNowMobile from '../widgets/ArticleOrderNowMobile';

export function ArticleSectionAbstract(props: IPost) {
  const { slug, video, deal, abstractDivider, titleDivider } = props;
  const { isDesktop } = useScreenSize();

  dlog('ArticleSectionAbstract ➡️ titleDivider:', titleDivider);

  return (
    <div
      style={{
        boxShadow: '-1px 29px 29px -29px rgba(0,0,0,0.15) inset',
      }}
      className="relative w-full mb-12 pt-10 bg-secondary-1"
    >
      {isDesktop ? (
        <ArticleContained>
          <div className="">
            <h4 className="  text-lg">The Experience</h4>
            <p className="pb-20">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              perspiciatis quos nisi magnam minima id inventore laudantium
              consectetur aspernatur vero excepturi dolores ex eligendi ad, ipsa
              dolorem sapiente corrupti, doloribus, in illum! Libero blanditiis,
              iure hic sint omnis velit harum ad reiciendis et aliquid voluptate
              voluptatem, dolore ratione vitae, iusto magnam eligendi quidem
              debitis mollitia. Quas dolore cum alias accusantium minus minima
              quod optio ab veniam. Praesentium, debitis rem voluptatum quo
              veritatis, molestias, enim corrupti magnam odit voluptatibus iste
              totam esse maxime nesciunt minus eveniet.
            </p>
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
