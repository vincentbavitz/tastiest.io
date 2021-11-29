import { ExperiencePost, titleCase } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import React from 'react';
import { ArticleSaveShareWidget } from '../widgets/ArticleSaveShareWidget';

const TITLE_MAX_WIDTH_MOBILE_REM = 20;
const TITLE_MAX_WIDTH_TABLET_REM = 28;
const TITLE_MAX_WIDTH_DESKTOP_REM = 20;
const TITLE_MAX_WIDTH_HUGE_REM = 26;

export function ArticleSectionTitle(props: ExperiencePost) {
  const { title, restaurant } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  const MAX_TITLE_WIDTH = React.useMemo(
    () =>
      isDesktop
        ? isHuge
          ? TITLE_MAX_WIDTH_HUGE_REM
          : TITLE_MAX_WIDTH_DESKTOP_REM
        : isTablet
        ? TITLE_MAX_WIDTH_TABLET_REM
        : TITLE_MAX_WIDTH_MOBILE_REM,
    [isDesktop, isTablet],
  );

  return (
    <div className="relative">
      {/* Restaurant's Feature Video */}
      <div
        style={{
          maxHeight: '28rem',
        }}
        className="relative flex items-center overflow-hidden"
      >
        <div className="relative -mt-20 w-full z-0 h-0 aspect-w-10 sm:aspect-w-12 md:aspect-w-16 aspect-h-9">
          <Image
            src={restaurant.backdropStillFrame.url}
            loading={'eager'}
            layout="fill"
            priority
          />
          <video
            loop
            muted
            autoPlay
            playsInline // prevent fullscreen on iOS
            src={restaurant.backdropVideo.url}
            className="object-cover w-full h-full"
          />
        </div>

        {/* White overlays */}
        <div className="absolute inset-0 z-20 opacity-10 bg-light"></div>
        <div className="absolute inset-0 flex items-end z-20">
          <div className="inline-block w-full h-64 bg-gradient-to-t from-light"></div>
        </div>
        <div className="absolute inset-0 flex items-end z-20">
          <div className="inline-block w-full h-64 opacity-50 bg-gradient-to-t from-light"></div>
        </div>

        <div className="absolute inset-0 z-20 bottom-2 flex flex-col items-center justify-end space-y-4">
          <h1 className="text-3xl font-medium sm:text-4xl text-primary font-primary">
            {titleCase(title)}
          </h1>

          <ArticleSaveShareWidget {...props} />
        </div>
      </div>
    </div>
  );
}
