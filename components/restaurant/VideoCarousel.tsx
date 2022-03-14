import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { dlog } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { SectionTitle } from 'components/SectionTitle';
import { YouTubeVideo } from 'components/YouTubeVideo';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect, useRef, useState } from 'react';

type CarouselVideo = {
  url: string;
  title: string;
};

const videos: CarouselVideo[] = [
  {
    title: 'A glimpse of Numa',
    url: 'https://www.youtu.be/YZRWpjeB4DQ',
  },
  { title: `Numa's Story: Emil Pekarsky`, url: 'https://youtu.be/-l9JZKI5WSc' },
];

export default function VideoCarousel() {
  // Index of the video currently visible.
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const [previousVideo, setPreviousVideo] = useState<number>(0);
  const [scrolling, setScrolling] = useState(false);

  const {
    width: screenWidth,
    isMobile,
    isTablet,
    isDesktop,
    isHuge,
  } = useScreenSize();

  const refSpacerVideo = useRef(null);
  const refScrollContainer = useRef(null);

  const scrollLengthPx = refSpacerVideo.current?.getBoundingClientRect().width;
  // const scrollLengthPx = useMemo(() => {
  //   return refSpacerVideo.current?.getBoundingClientRect().width;
  // }, [refSpacerVideo, screenWidth, isMobile, isTablet, isDesktop]);

  dlog('VideoCarousel ➡️ scrollLengthPx:', scrollLengthPx);

  const scrollToRight = () => {
    const currentScrollPosition = refScrollContainer.current?.scrollLeft;

    // prettier-ignore
    const finalScrollPosition = currentVideo * scrollLengthPx;
    const distance = Math.abs(finalScrollPosition - currentScrollPosition);

    setScrolling(true);

    // Going right
    if (distance >= 16) {
      window.requestAnimationFrame(scrollToRight);
      refScrollContainer.current?.scrollTo(
        currentScrollPosition + distance / 8,
        0,
      );
    } else {
      refScrollContainer.current?.scrollTo(finalScrollPosition, 0);
      setScrolling(false);
    }
  };

  const scrollToLeft = () => {
    const currentScrollPosition = refScrollContainer.current?.scrollLeft;

    // prettier-ignore
    const finalScrollPosition = currentVideo * scrollLengthPx;
    const distance = Math.abs(finalScrollPosition - currentScrollPosition);

    setScrolling(true);

    // Going left
    if (distance >= 16) {
      window.requestAnimationFrame(scrollToLeft);
      refScrollContainer.current?.scrollTo(
        currentScrollPosition - distance / 8,
        0,
      );
    } else {
      refScrollContainer.current?.scrollTo(finalScrollPosition, 0);
      setScrolling(false);
    }
  };

  // Update scroll position when they click
  useEffect(() => {
    dlog('VideoCarousel ➡️ scrolling:', scrolling);

    if (scrolling) {
      return;
    }

    dlog('VideoCarousel ➡️ currentVideo:', currentVideo);
    dlog('VideoCarousel ➡️ previousVideo:', previousVideo);

    if (currentVideo > previousVideo) {
      scrollToRight();
    }

    if (currentVideo < previousVideo) {
      scrollToLeft();
    }
  }, [currentVideo, previousVideo, scrolling]);

  const toVideoIndex = (index: number) => {
    if (index > videos.length - 1 || index < 0) {
      return;
    }

    setPreviousVideo(currentVideo);
    setCurrentVideo(index);
  };

  const toNextVideo = () => {
    // End of the list; nothing is next.
    if (currentVideo === videos.length - 1) return;

    setPreviousVideo(currentVideo);
    setCurrentVideo(currentVideo + 1);
  };

  const toPreviousVideo = () => {
    if (currentVideo === 0) return;
    setPreviousVideo(currentVideo);
    setCurrentVideo(currentVideo - 1);
  };

  const InnerCarousel = (
    <div className="relative">
      {/* Controls */}
      <div className="absolute left-0 right-0 -bottom-8 flex justify-center items-end h-full px-5 gap-6">
        <div
          onClick={toPreviousVideo}
          className={clsx(
            'flex items-center justify-center w-10 h-10 rounded-full bg-secondary cursor-pointer filter duration-300 hover:brightness-110 z-50',
            currentVideo === 0
              ? 'pointer-events-none opacity-50'
              : 'pointer-events-auto opacity-100',
          )}
        >
          <LeftOutlined className="text-2xl text-light" />
        </div>

        <div
          onClick={toNextVideo}
          className={clsx(
            'flex items-center justify-center w-10 h-10 rounded-full bg-secondary cursor-pointer filter duration-300 hover:brightness-110 z-50',
            currentVideo === videos.length - 1
              ? 'pointer-events-none opacity-50'
              : 'pointer-events-auto opacity-100',
          )}
        >
          <RightOutlined className="text-2xl text-light" />
        </div>
      </div>

      {/* Overlay fade on huge screens */}
      {isHuge ? (
        <div
          style={{ width: `${scrollLengthPx / 2}px` }}
          className="absolute right-0 top-0 bottom-0 h-full bg-gradient-to-l from-primary z-40"
        ></div>
      ) : null}

      <div
        ref={refScrollContainer}
        className={clsx(
          'flex flex-nowrap overflow-x-hidden',
          isMobile && 'px-3',
          isTablet && 'px-6 pt-3',
          isDesktop && 'px-10 pt-3',
        )}
      >
        {videos.map((video, key) => {
          const isFocused = key === currentVideo;

          return (
            <div
              key={key}
              style={{
                minWidth: isMobile ? '80vw' : '75%',
                maxWidth: '600px',
              }}
              className=""
            >
              <div
                onClick={isFocused ? null : () => toVideoIndex(key)}
                className={clsx(
                  'flex flex-col w-full duration-300',
                  isFocused ? 'opacity-100' : 'opacity-75 cursor-pointer',
                  isMobile && 'pr-3 my-3',
                  isTablet && 'pr-6 my-4',
                  isDesktop && 'pr-10 my-6',
                )}
              >
                <div
                  className={clsx(
                    'border-2 border-light duration-300',
                    isFocused
                      ? 'border-opacity-75'
                      : 'border-opacity-0 pointer-events-none',
                  )}
                >
                  <YouTubeVideo url={video.url} />
                </div>

                <h4
                  className={clsx(
                    'text-lg mt-2 font-medium',
                    isMobile ? 'pb-2 text-light' : 'text-light',
                  )}
                >
                  {video.title}
                </h4>
              </div>
            </div>
          );
        })}
        {/* Only used for spacing */}
        <div
          ref={refSpacerVideo}
          style={{
            minWidth: isMobile ? '80vw' : '75%',
            maxWidth: '600px',
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="w-full mb-10">
      <div className="mb-10">
        <SectionTitle>Videos</SectionTitle>
      </div>

      <div
        className={clsx(
          'w-full pb-12 mb-10',
          isMobile ? 'bg-primary' : 'bg-primary',
        )}
      >
        {isHuge ? (
          <Contained maxWidth={1000}>{InnerCarousel}</Contained>
        ) : (
          InnerCarousel
        )}
      </div>
    </div>
  );
}
