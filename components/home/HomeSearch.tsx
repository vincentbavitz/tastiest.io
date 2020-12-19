import classNames from 'classnames';
import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLockBodyScroll, useMeasure } from 'react-use';
import { ScreenContext } from '../../contexts/screen';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import {
  ISearchBarGeometry,
  setHomeSearchBarGeometry,
  setSearchBarPinnedToHeader,
} from '../../state/search';
import { SearchInput } from '../search/SearchInput';

export function HomeSearch() {
  const nagivationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchBarPinnedToHeader, homeSearchBarGeometry } = searchState;
  const { searchOverlayExpanded } = nagivationState;
  const dispatch = useDispatch();

  // Contexts
  const { isMobile } = useContext(ScreenContext);

  // References
  const searchRef = useRef(null);
  const [searchMeasureRef] = useMeasure();

  // Hooks
  useLockBodyScroll(searchOverlayExpanded && isMobile);

  // Set coordinates of search element
  useEffect(() => {
    const setGeometry = () => {
      if (!isMobile) {
        const geometry: ISearchBarGeometry = (searchRef.current as HTMLDivElement)?.getBoundingClientRect();

        if (geometry) {
          dispatch(setHomeSearchBarGeometry(geometry));

          const HEADER_FIXED_OFFSET = 35;
          if (geometry.top < HEADER_FIXED_OFFSET) {
            dispatch(setSearchBarPinnedToHeader(true));
          } else {
            dispatch(setSearchBarPinnedToHeader(false));
          }
        }
      }
    };

    window.addEventListener('scroll', setGeometry);
    window.addEventListener('resize', setGeometry);

    return function cleanup() {
      window.removeEventListener('scroll', setGeometry);
      window.removeEventListener('resize', setGeometry);
    };
  }, [isMobile, searchBarPinnedToHeader]);

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
          searchOverlayExpanded && !isMobile ? 'rounded-t-lg' : 'rounded-lg',
          searchOverlayExpanded && !isMobile ? 'border-b-0' : 'border-b-2',
          isMobile && 'border-b border-gray-300',
        )}
      >
        <SearchInput
          searchIcon="primary"
          autofocus={!isMobile}
          placeholder="Search..."
          dummy={isMobile}
          dummyOnClick={() => dispatch(expandSearchOverlay())}
          onFocus={() => dispatch(expandSearchOverlay())}
          inputClassName={classNames(['pl-2 pr-4', isMobile && 'text-xl'])}
        />
      </div>
    </div>
  );
}
