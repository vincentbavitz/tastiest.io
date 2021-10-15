import classNames from 'classnames';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
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
  const cols = (
    isHuge ? 4 : 
    isDesktop ? size === 'small' ? 4 : 3 : 
    isTablet ? size === 'small' ? 3 : 2 :
    1) as number;

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
                key={child.key}
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
              `grid`,
              rows === 5
                ? 'grid-rows-5'
                : rows === 4
                ? 'grid-rows-4'
                : rows === 3
                ? 'grid-rows-3'
                : rows === 2
                ? 'grid-rows-2'
                : rows === 1
                ? 'grid-rows-1'
                : '',
              cols === 1 ? 'gap-8' : cols > 3 ? 'gap-6' : 'gap-4',
              cols === 5
                ? 'grid-cols-5'
                : cols === 4
                ? 'grid-cols-4'
                : cols === 3
                ? 'grid-cols-3'
                : cols === 2
                ? 'grid-cols-2'
                : cols === 1
                ? 'grid-cols-1'
                : '',
            )}
          >
            {cards.map(item => (
              <div key={item.key} className="flex justify-center w-full">
                {item}
              </div>
            ))}
          </div>
        </Contained>
      )}
    </>
  );
}
