import classNames from 'classnames';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { HorizontalScrollable } from '../HorizontalScrollable';

interface Props {
  rowLimit?: number;
  horizontalScroll?: boolean;
  children: JSX.Element[];

  size?: 'small' | 'medium' | 'large';

  // If you are paginating, do not set rowLimit
  paginate?: boolean;
  rowsPerPage?: number;
}

export function CardGrid(props: Props) {
  const {
    rowsPerPage,
    paginate,
    children,
    horizontalScroll,
    rowLimit = 2,
    size = 'medium',
  } = props;

  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  // prettier-ignore
  const cols =
    isHuge ? 5 : 
    isDesktop ? size === 'small' ? 4 : 3 : 
    isTablet ? size === 'small' ? 3 : 2 :
    1;

  // Rows will be as little as possible, but never going over rowLimit
  const rows = Math.min(rowLimit, Math.ceil(children.length / cols));

  // Pagination
  const cards = rowLimit
    ? children.slice(0, isMobile && !horizontalScroll ? 4 : cols * rows)
    : children;

  return (
    <>
      {isMobile && horizontalScroll ? (
        <div className="">
          <HorizontalScrollable>
            {children.map(child => (
              <div
                key={uuid()}
                style={{
                  width: '80vw',
                  minWidth: '250px',
                  maxWidth: '275px',
                }}
                className="py-4"
              >
                {child}
              </div>
            ))}
          </HorizontalScrollable>
        </div>
      ) : (
        <Contained>
          <div
            className={classNames(
              `grid grid-rows-${rows}`,
              `grid-cols-${cols}`,
              isDesktop && (size === 'small' ? 'gap-6' : 'gap-8'),
              isTablet && (size === 'small' ? 'gap-4' : 'gap-6'),
            )}
          >
            {cards.map(item => (
              <div key={uuid()} className="w-full">
                {item}
              </div>
            ))}
          </div>
        </Contained>
      )}
    </>
  );
}
