import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../state/reducers';
import { SearchOverlayInner } from './SearchOverlayInner';
import classNames from 'classnames';
import { Search } from './Search';

export function SearchOverlayMobile() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  // const renderSearchTemplate = searchState.searchResultItems.length === 0;
  const { searchOverlayExpanded } = navigationState;

  // Pull into the location context of search bar
  const searchBarGeometry = searchState.searchBarGeometry;
  const dispatch = useDispatch();

  const mobileOverlayStyles = {
    zIndex: searchOverlayExpanded ? 20000 : -1,
  };

  return (
    <div
      style={mobileOverlayStyles}
      className={classNames(
        'fixed top-0 bottom-0 left-0 right-0 bg-white',
        searchOverlayExpanded ? 'block' : 'hidden',
      )}
    >
      <div className="flex flex-col h-full flex-grow overflow-y-scroll">
        <Search
          placeholder="Search"
          autofocus={searchOverlayExpanded}
          renderExitButton={true}
        />
        <SearchOverlayInner />
      </div>
    </div>
  );
}
