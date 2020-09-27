import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../state/reducers';
import { SearchItem } from './SearchItem';

export function SearchResultsOverlay() {
  const searchState = useSelector((state: IState) => state.search);

  console.log('searchstate:', searchState);

  const renderSearchTemplate = false; //searchState.searchResultItems.length === 0;

  return (
    <div className="search-items bottom-0 w-full h-full absolute mt-20 bg-red-500">
      {renderSearchTemplate ? (
        <>RENDERED TEMPLATE</>
      ) : (
        <div className="flex w-full">
          {searchState.searchResultItems &&
            searchState.searchResultItems.map(searchItem => (
              <div className="flex w-1/2">
                <SearchItem {...searchItem} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
