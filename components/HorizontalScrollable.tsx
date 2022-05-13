import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useScroll } from 'react-use';
import { useDevice } from '../hooks/useDevice';
import { Contained } from './Contained';

type ArrowSize = 6 | 8 | 10 | 12;

interface Props {
  onScroll?: (x: number) => void;
  children: JSX.Element[];

  // Force buttons even on touch devices.
  // Essentially covers the case where iOS Safari screws it up.
  forceButtons?: boolean;
  buttonsOffset?: number;
  buttonsLocation?: 'middle' | 'top';

  // The vertical buffer. Used to prevent shadows clipping etc.
  // Uses Tailwind sizes; eg 4 = 1rem.
  verticalBuffer?: 2 | 4 | 6 | 8 | 10;

  // Number of items to fit in the available width
  // when not on touch device
  fit?: number;
  spacing?: 0 | 1 | 2 | 3 | 4 | 6 | 8;
  arrowSize?: ArrowSize;

  noPadding?: boolean;
}

export function HorizontalScrollable(props: Props) {
  const { noPadding } = props;
  const { isDesktop } = useScreenSize();

  return (
    <>
      {!isDesktop || noPadding ? (
        <HorizontalScrollableInner {...props} />
      ) : (
        <Contained>
          <HorizontalScrollableInner {...props} />
        </Contained>
      )}
    </>
  );
}

/*
 * Intended for full width situations only
 */
function HorizontalScrollableInner(props: Props) {
  const {
    forceButtons = false,
    buttonsLocation = 'middle',
    spacing = 3,
    arrowSize = 8,
    buttonsOffset = 0,
    verticalBuffer,
    children,
  } = props;

  const {
    isDesktop,
    width: screenWidth,
    isLoading: screenSizeLoading,
  } = useScreenSize();

  const { isTouchDevice } = useDevice();

  const scrollRef = useRef<HTMLDivElement>(null);
  const innerContentRef = useRef(null);
  const { x } = useScroll(scrollRef);

  const scrollElementWidth = useMemo(() => {
    const rect = scrollRef.current?.getBoundingClientRect();
    return rect?.width ?? 200;
  }, [scrollRef, screenWidth]);

  const scrollDistance = scrollElementWidth / 3;
  const [rightScrollHidden, setRightScrollHidden] = useState(false);

  const handleLeftScroll = () => {
    scrollRef.current.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth',
    });
  };

  const handleRightScroll = () => {
    scrollRef.current.scrollBy({
      left: scrollDistance,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const isFullRight =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth ===
      scrollRef.current.scrollLeft;

    const tooSmallToScroll =
      innerContentRef.current.clientWidth < scrollRef.current.clientWidth;

    setRightScrollHidden(tooSmallToScroll || isFullRight);
  }, [scrollRef, x, scrollElementWidth, screenSizeLoading, children]);

  return (
    <div>
      {buttonsLocation === 'top' && (
        <Contained>
          <div className="flex w-full justify-end gap-4">
            <ScrollNavigationButton
              direction="left"
              size={arrowSize}
              onClick={handleLeftScroll}
            />

            <ScrollNavigationButton
              direction="right"
              size={arrowSize}
              onClick={handleRightScroll}
            />
          </div>
        </Contained>
      )}

      {buttonsLocation === 'middle' && (
        <div
          className={clsx(
            'absolute left-0 right-0 flex items-center justify-between h-full w-full',
            forceButtons ? 'flex' : isTouchDevice && 'hidden',
          )}
        >
          <div
            style={{
              transform: `translateX(${
                isDesktop ? '50%' : '50%'
              }) translateY(${buttonsOffset}px)`,
            }}
            className={clsx(
              'flex flex-col justify-center h-full z-50 duration-300',
              x <= 1 && 'opacity-0 pointer-events-none',
            )}
          >
            <ScrollNavigationButton
              direction="left"
              size={arrowSize}
              onClick={handleLeftScroll}
            />
          </div>

          <div
            style={{
              transform: `translateX(${
                isDesktop ? '-50%' : '-50%'
              }) translateY(${buttonsOffset}px)`,
            }}
            className={clsx(
              'flex flex-col justify-center h-full z-50 duration-300',
              rightScrollHidden && 'opacity-0 pointer-events-none',
            )}
          >
            <ScrollNavigationButton
              onClick={handleRightScroll}
              size={arrowSize}
              direction="right"
            />
          </div>
        </div>
      )}

      <div className="relative flex w-full">
        <div
          ref={scrollRef}
          className={clsx(
            'w-full',
            'relative',
            'hide_scroll',
            'scrolling-touch',
            'overflow-x-scroll',
            `py-${verticalBuffer ?? 0}`,
          )}
        >
          <div
            ref={innerContentRef}
            className={clsx(`flex overflow-y-visible gap-${spacing}`)}
            style={{
              width: 'fit-content',
            }}
          >
            {/* Padding on either side of children */}
            <div className="h-full w-2"></div>

            {/* Try to fit into a clean integer number across */}
            {children}

            {/* Padding on either side of children */}
            <div className="h-full w-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ScrollNavigationButtonProps {
  direction: 'left' | 'right';
  size: ArrowSize;
  onClick: () => void;
}

const ScrollNavigationButton = (props: ScrollNavigationButtonProps) => {
  const { direction, size, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center rounded-full duration-300 border border-gray-400 text-gray-400 hover:border-secondary hover:text-secondary bg-white pointer-cursor',
        `h-${size}`,
        `w-${size}`,
      )}
    >
      {direction === 'left' && <ArrowLeftOutlined className="text-lg" />}
      {direction === 'right' && <ArrowRightOutlined className="text-lg" />}
    </div>
  );
};
