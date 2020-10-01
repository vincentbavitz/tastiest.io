import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../state/reducers';
import { SearchItem } from './SearchItem';

export function SearchResultsOverlay() {
  const searchState = useSelector((state: IState) => state.search);

  const renderSearchTemplate = false; //searchState.searchResultItems.length === 0;

  return (
    <div className="search-items bottom-0 w-full h-full absolute mt-20">
      {renderSearchTemplate ? (
        <>RENDERED TEMPLATE</>
      ) : (
        <div className="flex w-full flex-wrap px-2 mt-4">
          {searchState.searchResultItems &&
            searchState.searchResultItems.map(searchItem => (
              <div
                className="flex w-1/2"
                key={searchItem.title.replace(' ', '-')}
              >
                <SearchItem {...searchItem} />
              </div>
            ))}
        </div>
      )}

      <div className="flex flex-col w-full px-6">
        If we don't have an X, do the following, amazing copy from vince
        <div
          role="button"
          className="w-40 rounded-md py-2 px-4 text-white bg-primary text-center font-bold"
        >
          Click Here!
        </div>
      </div>
    </div>
  );
}
