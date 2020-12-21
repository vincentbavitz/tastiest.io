import classNames from 'classnames';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useWindowSize } from 'react-use';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { SearchDropdown } from '../search/SearchDropdown';
import { SearchInput } from '../search/SearchInput';

export function HeaderSearch() {
  const nagivationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchOverlayExpanded } = nagivationState;
  const { searchBarPinnedToHeader } = searchState;
  const dispatch = useDispatch();

  const searchRef = useRef(null);
  const location = useLocation();
  const { width: pageWidth } = useWindowSize();

  // We only wnat the searchbar to be invisible on the home page
  // and given that they have not scrolled past the main home search
  const isShown = location.pathname !== '/' || searchBarPinnedToHeader;

  return (
    <div
      style={{
        zIndex: isShown ? (searchOverlayExpanded ? 20001 : 1) : -1,
        maxWidth: '650px',
      }}
      className={classNames(
        'mx-8 flex-grow',
        isShown ? 'opacity-100' : 'opacity-0',
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

      <div className="h-0">
        <SearchDropdown isShown={isShown} />
      </div>
    </div>
  );
}
