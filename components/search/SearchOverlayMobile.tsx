import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../state/reducers';
import { SearchOverlayInner } from './SearchOverlayInner';
import classNames from 'classnames';
import { SearchInput } from './SearchInput';
import { collapseSearchOverlay } from '../../state/navigation';
import BackSVG from '../../assets/svgs/back.svg';
import { Contained } from '../Contained';

export function SearchOverlayMobile() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  // const renderSearchTemplate = searchState.searchResultItems.length === 0;
  const { searchOverlayExpanded } = navigationState;

  // Pull into the location context of search bar
  const searchBarGeometry = searchState.searchBarGeometry;
  const dispatch = useDispatch();

  // Internal functions
  const handleExit = () => {
    dispatch(collapseSearchOverlay());
  };

  // Internal elements
  const searchInputPrefix = (
    <span className="text-secondary">
      <BackSVG
        className={classNames('h-8 w-8 fill-current')}
        onClick={handleExit}
      />
    </span>
  );

  return (
    <div
      style={{
        zIndex: searchOverlayExpanded ? 20000 : -1,
      }}
      className={classNames(
        'fixed top-0 bottom-0 left-0 right-0 bg-white',
        searchOverlayExpanded ? 'block' : 'hidden',
      )}
    >
      <div className="flex flex-col h-full flex-grow overflow-y-scroll">
        <Contained>
          <SearchInput
            className=""
            inputClassName="h-24 pl-2 text-xl"
            placeholder="Search"
            autofocus={searchOverlayExpanded}
            prefix={searchInputPrefix}
          />
        </Contained>

        <SearchOverlayInner />
      </div>
    </div>
  );
}
