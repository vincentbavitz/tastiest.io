import { ChevronLeftIcon, ChevronRightIcon } from '@tastiest-io/tastiest-icons';
import { convertRemToPixels } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from 'react-use';
import { useDevice } from '../hooks/useDevice';
import { Contained } from './Contained';

interface Props {
  onScroll?: (x: number) => void;
  onItemClick?: () => void;
  children: JSX.Element[];

  // Number of items to fit in the available width
  // when not on touch device
  fit?: number;
  spacing?: 0 | 1 | 2 | 3 | 4 | 6 | 8;
  chevronSize?: 6 | 8 | 10 | 12;
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
  const { onItemClick, fit, spacing = 3, chevronSize = 8, children } = props;

  const {
    isDesktop,
    width: pageWidth,
    isLoading: screenSizeLoading,
  } = useScreenSize();

  const scrollRef = useRef(null);
  const innerContentRef = useRef(null);
  const { x } = useScroll(scrollRef);

  const scrollDistance = pageWidth > 1400 ? 450 : pageWidth / 2;

  const [itemWidth, setItemWidth] = useState<number>();
  const [rightScrollHidden, setRightScrollHidden] = useState(false);

  const { isTouchDevice } = useDevice();

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

  function handleItemClick() {
    if (onItemClick) {
      onItemClick();
    }
  }

  useEffect(() => {
    const isFullRight =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth ===
      scrollRef.current.scrollLeft;

    const tooSmallToScroll =
      innerContentRef.current.clientWidth < scrollRef.current.clientWidth;

    const spacingPx = convertRemToPixels(spacing / 4) / props.fit;
    const _itemWidth = props.fit
      ? Math.floor(scrollRef.current.clientWidth / props.fit + spacingPx)
      : undefined;

    setItemWidth(_itemWidth);
    setRightScrollHidden(tooSmallToScroll || isFullRight);
  }, [scrollRef, x, pageWidth, screenSizeLoading, children]);

  return (
    <div className="relative flex w-full">
      <div
        className={clsx(
          'absolute left-0 right-0 flex items-center justify-between h-full w-full',
          isTouchDevice && 'hidden',
        )}
      >
        <div
          style={{
            transform: `translateX(${isDesktop ? '50%' : '50%'})`,
          }}
          className={clsx(
            'flex flex-col justify-center h-full z-50 duration-300',
            x <= 1 && 'opacity-0 pointer-events-none',
          )}
        >
          <ChevronLeftIcon
            onClick={handleLeftScroll}
            className={clsx(
              'text-secondary fill-current cursor-pointer shadow-lg',
              `h-${chevronSize}`,
            )}
          />
        </div>

        <div
          style={{
            transform: `translateX(${isDesktop ? '-50%' : '-50%'})`,
          }}
          className={clsx(
            'flex flex-col justify-center h-full z-50 duration-300',
            rightScrollHidden && 'opacity-0 pointer-events-none',
          )}
        >
          <ChevronRightIcon
            onClick={handleRightScroll}
            className={clsx(
              'cursor-pointer fill-current text-secondary shadow-lg',
              `h-${chevronSize}`,
            )}
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className={clsx(
          'w-full',
          'relative',
          'hide_scroll',
          'scrolling-touch',
          'overflow-x-scroll',
        )}
      >
        <div
          ref={innerContentRef}
          className={clsx(
            // fit
            // ? `grid grid-rows-1 grid-cols-${fit} gap-${spacing}` :
            `flex overflow-y-visible gap-${spacing}`,
          )}
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
  );
}
