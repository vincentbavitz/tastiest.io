import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import React, {
  ChangeEvent,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway, useLockBodyScroll, useMeasure } from 'react-use';
import SearchPrimarySVG from '../../assets/svgs/search-primary.svg';
import SearchSecondarySVG from '../../assets/svgs/search-secondary.svg';
import { UI } from '../../constants';
import { ScreenContext } from '../../contexts/screen';
import { useScreenSize } from '../../hooks/screen';
import Search from '../../pages/search';
import {
  collapseSearchOverlay,
  expandSearchOverlay,
} from '../../state/navigation';
import { IState } from '../../state/reducers';
import {
  ISearchBarGeometry,
  setSearchBarGeometry,
  setSearchQuery,
  setSearchResultItems,
} from '../../state/search';
import { search } from '../../utils/search';
import { SearchInput } from './SearchInput';

interface Props {
  theme?: 'primary' | 'secondary';
}

export function SearchHome(props: Props) {
  const { theme = 'primary' } = props;

  const nagivationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchOverlayExpanded } = nagivationState;
  const dispatch = useDispatch();

  // Contexts
  const { isMobile } = useContext(ScreenContext);

  // References
  const searchRef = useRef(null);
  const [searchMeasureRef, { width }] = useMeasure();

  // Hooks
  const router = useRouter();
  useLockBodyScroll(searchOverlayExpanded && isMobile);

  // Set coordinates of search element
  useEffect(
    () => {
      const geometry: ISearchBarGeometry = searchRef.current.getBoundingClientRect();
      dispatch(setSearchBarGeometry(geometry));
    },
    // We only need to update rects when width changes
    [width],
  );

  // Internal elements
  const searchSuffix = (
    <div
      className="text-primary"
      onClick={() => dispatch(expandSearchOverlay())}
    >
      {theme === 'primary' && <SearchPrimarySVG className="h-8 fill-current" />}
      {theme === 'secondary' && (
        <SearchSecondarySVG className="h-8 fill-current" />
      )}
    </div>
  );

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
          dummy={isMobile}
          autofocus={!isMobile}
          placeholder="Search..."
          suffix={searchSuffix}
          onFocus={() => dispatch(expandSearchOverlay())}
          inputClassName={classNames(['pl-2 pr-4', isMobile && 'text-xl'])}
        />
      </div>
    </div>
  );
}
