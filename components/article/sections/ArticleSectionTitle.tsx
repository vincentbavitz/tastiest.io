import { IFigureImage } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { Contained } from '../../Contained';

interface Props {
  title: string;
  location: string;
  svg: IFigureImage;
}

const TITLE_MAX_WIDTH_MOBILE_REM = 20;
const TITLE_MAX_WIDTH_TABLET_REM = 28;
const TITLE_MAX_WIDTH_DESKTOP_REM = 20;
const TITLE_MAX_WIDTH_HUGE_REM = 26;

export function ArticleSectionTitle(props: Props) {
  const { title, location, svg } = props;
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
        <div className="relative w-full z-0 h-0 aspect-w-10 sm:aspect-w-12 md:aspect-w-16 aspect-h-9">
          {/* <Image src={'/test.png'} loading={'eager'} layout="fill" priority /> */}
          <video
            loop
            muted
            autoPlay
            src={'/test.mp4'}
            className="object-cover w-full h-full bg-gray-400"
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
          {/* Restaurant Name */}
          <h1 className="text-3xl font-medium sm:text-4xl text-primary font-primary">
            {/* {titleCase(restaurant.name)} -{' '} */}
            {/* {titleCase(restaurant.location.displayLocation)} */}
          </h1>

          {/* Follow and Notifications */}
          {/* <FollowButton restaurant={restaurant} /> */}
        </div>
      </div>

      <Contained>
        <div className={clsx('flex justify-center space-y-4')}>
          {isDesktop && <LeftIllustrationDesktop svg={svg} />}

          <div
            className={clsx(
              'flex flex-col items-center justify-center space-y-6 mt-6 pb-0 md:pb-4 pt-6',
            )}
          >
            <div
              style={{
                maxWidth: `${MAX_TITLE_WIDTH}rem`,
                minHeight: isDesktop ? '7rem' : 'auto',
              }}
              className="flex items-end"
            >
              <h1 className="text-3xl leading-none text-center sm:text-4xl font-primary text-primary xl:text-4xl">
                {title}
              </h1>
            </div>

            {(isMobile || isTablet) && <LeftIllustrationMobile svg={svg} />}
          </div>

          {/* To make spacing even on desktop */}
          {isDesktop ? <div className="flex-1 inline-block"></div> : null}
        </div>
      </Contained>
    </div>
  );
}

interface LeftIllustrationProps {
  svg: IFigureImage;
}

const LeftIllustrationDesktop = ({ svg }: LeftIllustrationProps) => {
  return (
    <div className="relative flex-1">
      <div className="z-30 flex justify-end">
        <img
          src={svg?.url}
          className="object-contain"
          style={{
            transform: `translateY(4.5rem)`,
          }}
        />
      </div>
    </div>
  );
};

const LeftIllustrationMobile = ({ svg }: LeftIllustrationProps) => {
  return (
    <div className="relative w-full flex justify-center items-end pb-6">
      <img
        src={svg?.url}
        style={{ maxWidth: '20rem', width: '40vw' }}
        className="object-contain "
      />
    </div>
  );
};
