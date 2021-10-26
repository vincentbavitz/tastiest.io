import { dlog, IPost } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { YouTubeVideo } from '../../YouTubeVideo';

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
    <div className="relative w-full">
      <div className="pb-10">
        <h4 className="pb-2 text-2xl">The Experience</h4>
        <p className="">{description}</p>
      </div>

      <YouTubeVideo url={video} />
    </div>
  );
}
