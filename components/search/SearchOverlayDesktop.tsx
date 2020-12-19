import classNames from 'classnames';
import React, { CSSProperties, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowScroll } from 'react-use';
import { collapseSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { SearchOverlayInner } from './SearchOverlayInner';

export function SearchOverlayDesktop() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const dispatch = useDispatch();

  // const renderSearchTemplate = searchState.searchResultItems.length === 0;
  const { y: scrollY } = useWindowScroll();
  const { searchOverlayExpanded } = navigationState;
  const {
    homeSearchBarGeometry,
    headerSearchBarGeometry,
    searchBarPinnedToHeader,
  } = searchState;

  const overlayContentRef = useRef(null);
  const onClickAway = () => {
    if (searchOverlayExpanded) {
      dispatch(collapseSearchOverlay());
    }
  };

  // Snap to home search location
  const homeSearchCoords: CSSProperties = {
    position: 'absolute',
    top: `${
      homeSearchBarGeometry.top + homeSearchBarGeometry.height + scrollY - 1
    }px`,
    bottom: `${homeSearchBarGeometry.bottom}px`,
    left: `${homeSearchBarGeometry.left}px`,
    right: `${homeSearchBarGeometry.right}px`,
    width: `${homeSearchBarGeometry.width}px`,
  };

  // Snap to header search location
  const headerSearchCoords: CSSProperties = {
    position: 'fixed',
    top: `${headerSearchBarGeometry.top + headerSearchBarGeometry.height}px`,
    // bottom: `${headerSearchBarGeometry.bottom}px`,
    left: `${headerSearchBarGeometry.left}px`,
    right: `${headerSearchBarGeometry.right}px`,
    width: `${headerSearchBarGeometry.width}px`,
  };

  const shouldSnapToHomeCoords =
    location.pathname === '/' && !searchBarPinnedToHeader;
  const overlayCoords = shouldSnapToHomeCoords
    ? homeSearchCoords
    : headerSearchCoords;

  // Desktop overlay styles depend on wether or not the search bar is
  // in the navbar or not
  const desktopOverlayStyles = {
    zIndex: searchOverlayExpanded ? 20002 : -1,
    display: searchOverlayExpanded ? 'block' : 'none',
    minHeight: '600px',
    ...overlayCoords,
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
      <div ref={overlayContentRef} style={desktopOverlayStyles}>
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
          <div className="relative overflow-y-auto w-full">
            <SearchOverlayInner />
          </div>
        </div>
      </div>
    </>
  );
}
