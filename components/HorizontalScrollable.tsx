import { ChevronLeftIcon, ChevronRightIcon } from '@tastiest-io/tastiest-icons';
import { convertRemToPixels } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useWindowSize } from 'react-use';
import { UI } from '../constants';
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
  const { onItemClick, spacing = 3, chevronSize = 8, children } = props;

  const scrollRef = useRef(null);
  const innerContentRef = useRef(null);

  const { x } = useScroll(scrollRef);
  const pageWidth = useWindowSize().width;
  const scrollDistance = pageWidth > 1400 ? 450 : pageWidth / 2;

  const [itemWidth, setItemWidth] = useState<number>();
  const [rightScrollHidden, setRightScrollHidden] = useState(false);

  const { isTouchDevice } = useDevice();
  const { isDesktop, isMobile } = useScreenSize();

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
  }, [x, children]);

  return (
    <div className="relative flex w-full">
      <div
        className={clsx(
          'absolute left-0 flex items-center justify-between h-full w-full',
          isTouchDevice && 'hidden',
        )}
      >
        <div
          style={{
            transform: `translateX(${isDesktop ? '-50%' : '50%'})`,
          }}
          className={clsx(
            'flex flex-col justify-center h-full z-50 duration-300',
            x <= 1 && 'opacity-0 pointer-events-none',
          )}
        >
          <ChevronLeftIcon
            onClick={handleLeftScroll}
            className={clsx(
              'text-secondary-2 fill-current cursor-pointer',
              `h-${chevronSize}`,
            )}
          />
        </div>

        <div
          style={{
            transform: `translateX(${isDesktop ? '50%' : '-50%'})`,
          }}
          className={clsx(
            'flex flex-col justify-center h-full z-50 duration-300',
            rightScrollHidden && 'opacity-0 pointer-events-none',
          )}
        >
          <ChevronRightIcon
            onClick={handleRightScroll}
            className={clsx(
              'cursor-pointer fill-current text-secondary-2',
              `h-${chevronSize}`,
            )}
          />
        </div>
      </div>
      <div
        ref={scrollRef}
        style={{ width: `calc(100% + ${spacing / 4}rem)` }}
        className={clsx(
          'relative',
          'hide_scroll',
          'scrolling-touch',
          'overflow-x-scroll',
          isDesktop ? `-ml-${spacing} ` : `-ml-${spacing}`,
        )}
      >
        <div
          ref={innerContentRef}
          className={clsx('flex overflow-y-visible', `children:px-${spacing}`)}
          style={{
            width: 'min-content',
            marginLeft: `${!isDesktop ? UI.PAGE_CONTAINED_PADDING_VW : 0}vw`,
          }}
        >
          {/* Try to fit into a clean integer number across */}
          {props.fit ? (
            <>
              {children?.map?.(child => (
                <div
                  key={child.key}
                  style={{ width: props.fit ? `${itemWidth}px` : 'auto' }}
                  className=""
                >
                  {child}
                </div>
              ))}
            </>
          ) : (
            <>{children}</>
          )}
        </div>
      </div>
    </div>
  );
}
