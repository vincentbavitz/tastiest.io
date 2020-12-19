import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useWindowSize } from 'react-use';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import {
  ISearchBarGeometry,
  setHeaderSearchBarGeometry,
} from '../../state/search';
import { SearchInput } from '../search/SearchInput';

export function HeaderSearch() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const dispatch = useDispatch();

  const searchRef = useRef(null);
  const location = useLocation();
  const { width: pageWidth } = useWindowSize();

  // Pull into the location context of search bar
  const { searchBarPinnedToHeader } = searchState;
  const { searchOverlayExpanded } = navigationState;

  // We only wnat the searchbar to be invisible on the home page
  // and given that they have not scrolled past the main home search
  const isHidden = location.pathname === '/' && !searchBarPinnedToHeader;

  console.log('HeaderSearch ➡️ location:', location);

  // Set coordinates of search element
  useEffect(() => {
    const geometry: ISearchBarGeometry = (searchRef.current as HTMLDivElement)?.getBoundingClientRect();

    if (geometry) {
      dispatch(setHeaderSearchBarGeometry(geometry));
    }
  }, [pageWidth, searchBarPinnedToHeader]);

  return (
    <div
      style={{
        zIndex: isHidden ? -1 : searchOverlayExpanded ? 20001 : 1,
        maxWidth: '650px',
      }}
      className={classNames(
        'mx-8 flex-grow duration-300',
        isHidden ? 'opacity-0' : 'opacity-100',
      )}
    >
      <div
        ref={searchRef}
        className={classNames(
          'flex items-center w-full justify-between h-10 pl-3 bg-white px-2',
          'border-primary border-t-2 border-l-2 border-r-2',
          searchOverlayExpanded ? 'rounded-t-lg' : 'rounded-lg',
          searchOverlayExpanded ? 'border-b-0' : 'border-b-2',
        )}
      >
        <SearchInput
          searchIcon="primary"
          placeholder="Search..."
          onFocus={() => dispatch(expandSearchOverlay())}
        />
      </div>
    </div>
  );
}
