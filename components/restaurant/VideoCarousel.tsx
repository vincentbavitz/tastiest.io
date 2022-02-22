import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { dlog } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { YouTubeVideo } from 'components/YouTubeVideo';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect, useRef, useState } from 'react';

type CarouselVideo = {
  url: string;
  title: string;
};

const videos: CarouselVideo[] = [
  { title: 'Interview with Tomer', url: 'https://youtu.be/-l9JZKI5WSc' },
  { title: 'Interview with Tomer', url: 'https://youtu.be/-l9JZKI5WSc' },
  { title: 'Interview with Tomer', url: 'https://youtu.be/-l9JZKI5WSc' },
  { title: 'Interview with Tomer', url: 'https://youtu.be/-l9JZKI5WSc' },
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
    if (distance >= 8) {
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
    if (distance >= 8) {
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
    if (scrolling) {
      return;
    }

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
      <div className="absolute inset-0 flex justify-between items-center h-full px-5 z-50">
        <div
          onClick={toPreviousVideo}
          className={clsx(
            'flex items-center justify-center w-10 h-10 rounded-full bg-secondary cursor-pointer filter duration-300 hover:brightness-110 z-50',
            currentVideo === 0
              ? 'pointer-events-none opacity-0'
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
              ? 'pointer-events-none opacity-0'
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
          className="absolute right-0 top-0 bottom-0 h-full bg-gradient-to-l from-gray-800 z-40"
        ></div>
      ) : null}

      <div
        ref={refScrollContainer}
        className={clsx(
          'flex flex-nowrap overflow-x-hidden',
          isMobile && 'px-0',
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
                minWidth: isMobile ? '100vw' : '75%',
                maxWidth: '600px',
              }}
              className=""
            >
              <div
                onClick={isFocused ? null : () => toVideoIndex(key)}
                className={clsx(
                  'flex flex-col w-full duration-300',
                  isFocused ? 'opacity-100' : 'opacity-75 cursor-pointer',
                  isMobile && 'pr-0 my-0',
                  isTablet && 'pr-6 my-4',
                  isDesktop && 'pr-10 my-6',
                )}
              >
                <div
                  className={clsx(
                    !isMobile &&
                      'border-2 rounded-lg border-light duration-300',
                    isFocused
                      ? 'border-opacity-75'
                      : 'border-opacity-0 pointer-events-none',
                  )}
                >
                  <YouTubeVideo url={video.url} />
                </div>

                <h4
                  className={clsx(
                    'text-lg mt-2 opacity-75 font-medium',
                    isMobile ? 'pb-2 px-4 text-dark' : 'text-light',
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
            minWidth: isMobile ? '100vw' : '75%',
            maxWidth: '600px',
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div
      className={clsx('w-full mb-10', isMobile ? 'bg-gray-200' : 'bg-gray-800')}
    >
      <div className="flex justify-center items-center w-full px-10 py-3 bg-primary">
        <h3 className="text-2xl font-primary text-light font-medium">Videos</h3>
      </div>

      {isHuge ? (
        <Contained maxWidth={1000}>{InnerCarousel}</Contained>
      ) : (
        InnerCarousel
      )}
    </div>
  );
}
