import classNames from 'classnames';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { CSSProperties, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-use';
import { UI } from '../../constants';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { SearchDropdown } from '../search/SearchDropdown';
import { SearchInput } from '../search/SearchInput';

interface Props {
  isShown: boolean;
  innerOverlayStyle: CSSProperties;
}

export function HeaderSearch({ isShown, innerOverlayStyle = {} }: Props) {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchOverlayExpanded } = navigationState;
  const { searchBarPinnedToHeader } = searchState;
  const dispatch = useDispatch();

  const searchRef = useRef(null);
  const location = useLocation();

  const { isHuge } = useScreenSize();

  return (
    <div
      style={{
        zIndex: isShown
          ? searchOverlayExpanded
            ? UI.Z_INDEX_HEADER_SEARCH
            : 1
          : -1,
        width: '55vw',
        maxWidth: '500px',
      }}
      className={classNames(
        'relative mx-8',
        isShown ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div
        ref={searchRef}
        className={classNames(
          'flex items-center w-full justify-between h-10 pl-3 px-2',
          'bg-white',
          // 'border-secondary border-t-2 border-l-2 border-r-2',
          searchOverlayExpanded ? 'rounded-t-lg' : 'rounded-md',
          // searchOverlayExpanded ? 'border-b-0' : 'border-b-2',
          searchOverlayExpanded ? 'bg-opacity-100' : 'bg-opacity-50',
        )}
      >
        <SearchInput
          searchIcon="secondary"
          placeholder="Search..."
          onFocus={() => dispatch(expandSearchOverlay())}
        />
      </div>

      <div className="h-0">
        <SearchDropdown
          theme="secondary"
          isShown={isShown}
          innerOverlayStyle={innerOverlayStyle}
        />
      </div>
    </div>
  );
}
