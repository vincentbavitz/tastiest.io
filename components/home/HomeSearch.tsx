import classNames from 'classnames';
import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLockBodyScroll, useMeasure } from 'react-use';
import { ScreenContext } from '../../contexts/screen';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { setSearchBarPinnedToHeader } from '../../state/search';
import { SearchDropdown } from '../search/SearchDropdown';
import { SearchInput } from '../search/SearchInput';

export interface ISearchBarGeometry {
  height?: number;
  width?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export function HomeSearch() {
  const nagivationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchOverlayExpanded } = nagivationState;
  const { searchBarPinnedToHeader } = searchState;
  const dispatch = useDispatch();

  // Contexts
  const { isMobile } = useContext(ScreenContext);

  // References
  const searchRef = useRef(null);
  const [searchMeasureRef] = useMeasure();

  // Hooks
  useLockBodyScroll(searchOverlayExpanded && isMobile);

  const HEADER_FIXED_OFFSET = 70;
  const handleShouldHide = () => {
    const geometry: ISearchBarGeometry = (searchRef.current as HTMLDivElement)?.getBoundingClientRect();

    if (geometry && geometry.top < HEADER_FIXED_OFFSET) {
      dispatch(setSearchBarPinnedToHeader(true));
    } else {
      dispatch(setSearchBarPinnedToHeader(false));
    }
  };

  // Handle whether or not to hide overlay of home
  useEffect(() => {
    window.addEventListener('scroll', handleShouldHide);
    window.addEventListener('resize', handleShouldHide);

    return function cleanup() {
      window.removeEventListener('scroll', handleShouldHide);
      window.removeEventListener('resize', handleShouldHide);
    };
  }, []);

  return (
    <div ref={searchMeasureRef} className="relative">
      <div
        ref={searchRef}
        style={{
          filter: searchOverlayExpanded
            ? 'unset'
            : 'drop-shadow(0px 6px 0px rgba(219, 68,0,0.5))',
        }}
        className={classNames(
          'flex items-center w-full justify-between h-10 bg-white px-2',
          'border-primary border-t-2 border-l-2 border-r-2',
          searchOverlayExpanded && !searchBarPinnedToHeader && !isMobile
            ? 'rounded-t-lg'
            : 'rounded-lg',
          searchOverlayExpanded && !searchBarPinnedToHeader && !isMobile
            ? 'border-b-0'
            : 'border-b-2',
          isMobile && 'border-b border-gray-300',
        )}
      >
        <SearchInput
          searchIcon="primary"
          placeholder="Search..."
          dummy={isMobile}
          dummyOnClick={() => dispatch(expandSearchOverlay())}
          onFocus={() => dispatch(expandSearchOverlay())}
          inputClassName={classNames(['pl-2 pr-4', isMobile && 'text-xl'])}
        />
      </div>

      <div className="h-0">
        <SearchDropdown isShown={!searchBarPinnedToHeader} />
      </div>
    </div>
  );
}
