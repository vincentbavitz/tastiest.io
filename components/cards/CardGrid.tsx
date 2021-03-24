import classNames from 'classnames';
import { Contained } from 'components/Contained';
import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { ScreenContext } from '../../contexts/screen';
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

  const { isMobile, isTablet, isDesktop, isHuge } = useContext(ScreenContext);

  // prettier-ignore
  const cols =
    isHuge ? 4 : 
    isDesktop ? size === 'small' ? 4 : 3 : 
    isTablet ? size === 'small' ? 3 : 2 :
    1;

  // Pagination
  const cards = rowLimit
    ? children.slice(0, isMobile && !horizontalScroll ? 4 : cols * rowLimit)
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
              `grid grid-rows-${Math.ceil(rowLimit)} gap-8`,
              `grid-cols-${cols}`,
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
