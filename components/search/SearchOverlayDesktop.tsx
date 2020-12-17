import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../state/reducers';
import classNames from 'classnames';
import { collapseSearchOverlay } from '../../state/navigation';
import { SearchOverlayInner } from './SearchOverlayInner';

export function SearchOverlayDesktop() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const dispatch = useDispatch();

  // const renderSearchTemplate = searchState.searchResultItems.length === 0;
  const { searchOverlayExpanded } = navigationState;

  // Pull into the location context of search bar
  const searchBarGeometry = searchState.searchBarGeometry;

  const overlayContentRef = useRef(null);
  const onClickAway = () => {
    if (searchOverlayExpanded) {
      dispatch(collapseSearchOverlay());
    }
  };

  // Desktop overlay styles depend on wether or not the search bar is
  // in the navbar or not
  const desktopOverlayStyles = {
    zIndex: searchOverlayExpanded ? 20001 : -1,
    display: searchOverlayExpanded ? 'block' : 'none',
    minHeight: '600px',

    top: `${searchBarGeometry.top + searchBarGeometry.height}px`,
    bottom: `${searchBarGeometry.bottom}px`,
    left: `${searchBarGeometry.left}px`,
    right: `${searchBarGeometry.right}px`,
    width: `${searchBarGeometry.width}px`,
  };

  return (
    <>
      <div
        onClick={onClickAway}
        style={{ zIndex: searchOverlayExpanded ? 20000 : -1 }}
        className={classNames(
          'fixed',
          'bottom-0',
          'left-0',
          'right-0',
          'h-full',
          'w-full',
          'bg-white',
          'bg-opacity-75',
          'transition-opacity',
          'duration-300',
          searchOverlayExpanded ? 'opacity-100' : 'opacity-0',
        )}
      ></div>
      <div
        className="absolute"
        ref={overlayContentRef}
        style={desktopOverlayStyles}
      >
        <div
          className={classNames(
            'relative',
            'flex',
            // Allows shadow to overflow
            'bg-white',
            'border-primary',
            'border-t-none',
            'border-l-2',
            'border-r-2',
            'border-b-2',
            'rounded-b-lg',
            'pb-4',
          )}
        >
          <div className="relative overflow-y-scroll w-full">
            <SearchOverlayInner />
          </div>
        </div>
      </div>
    </>
  );
}
