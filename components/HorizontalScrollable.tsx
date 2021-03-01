import ChevronLeftSecondarySVG from '@svg/chevron-left-secondary.svg';
import ChevronRightSecondarySVG from '@svg/chevron-right-secondary.svg';
import classNames from 'classnames';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useScroll, useWindowSize } from 'react-use';
import { UI } from '../constants';
import { ScreenContext } from '../contexts/screen';
import { Contained } from './Contained';

interface Props {
  onScroll?: (x: number) => void;
  onItemClick?: () => void;
  children: JSX.Element[];

  // Number of items to fit in the available width
  // when not on touch device
  fit?: number;
}

export function HorizontalScrollable(props: Props) {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <>
      {!isDesktop ? (
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
  const { onItemClick, children } = props;

  const scrollRef = useRef(null);
  const innerContentRef = useRef(null);

  const { x } = useScroll(scrollRef);
  const pageWidth = useWindowSize().width;
  const scrollDistance = pageWidth > 1400 ? 450 : pageWidth / 3;

  const [itemWidth, setItemWidth] = useState<number>();
  const [rightScrollHidden, setRightScrollHidden] = useState(false);

  const { isDesktop, isMobile } = useContext(ScreenContext);

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

    const _itemWidth = props.fit
      ? Math.floor(scrollRef.current.clientWidth / props.fit)
      : undefined;

    setItemWidth(_itemWidth);
    setRightScrollHidden(tooSmallToScroll || isFullRight);
  }, [x, children]);

  return (
    <div className="relative flex w-full">
      <div
        className={classNames(
          'absolute left-0 flex items-center justify-between h-full w-full',
          !isDesktop && 'hidden',
        )}
      >
        <div
          className={classNames(
            'flex flex-col justify-center h-full z-50 duration-300 -ml-8',
            x <= 1 && 'opacity-0',
          )}
        >
          <ChevronLeftSecondarySVG
            onClick={handleLeftScroll}
            className={classNames('h-20 mt-1 cursor-pointer')}
          />
        </div>

        <div
          className={classNames(
            'flex flex-col justify-center h-full z-50 duration-300 -mr-8',
            rightScrollHidden && 'opacity-0',
          )}
        >
          <ChevronRightSecondarySVG
            onClick={handleRightScroll}
            className="h-20 mt-1 cursor-pointer"
          />
        </div>
      </div>
      <div
        ref={scrollRef}
        className={classNames(
          'relative',
          'w-full',
          'hide_scroll',
          'scrolling-touch',
          'overflow-x-scroll',
          isDesktop ? '-ml-3 mr-3' : '-ml-3',
        )}
      >
        <div
          ref={innerContentRef}
          className={classNames('flex overflow-y-visible children:px-3')}
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
