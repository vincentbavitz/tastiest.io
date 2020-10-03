import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import ExitSVG from '../../assets/svgs/exit.svg';
import SearchSVG from '../../assets/svgs/search.svg';
import { collapseSearchBar } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { SearchItem } from './SearchItem';

export function SearchResultsOverlay() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchBarExpanded } = navigationState;

  const dispatch = useDispatch();

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia('(max-width: 500px)');
  }

  const [inputValue, setInputValue] = useState();

  const mobileInputRef = useRef(null);
  const renderSearchTemplate = searchState.searchResultItems.length === 0;

  const modalStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      height: '100%',
      width: '100%',
      zIndex: '1000',
      border: isMobile ? 'none' : undefined,
      borderRadius: isMobile ? '0' : undefined,
      padding: isMobile ? '0' : undefined,
    },
  };

  return (
    <Modal style={modalStyles} isOpen={searchBarExpanded}>
      <div
        onClick={() => mobileInputRef.current?.focus()}
        className="mobile-search-input contained h-20 w-full flex items-center justify-between"
      >
        <ExitSVG
          className="search-bar-svg"
          onClick={() => dispatch(collapseSearchBar())}
        />
        <input
          ref={mobileInputRef}
          spellCheck={false}
          className={classNames(
            'px-8',
            'flex-grow',
            'border-none',
            'outline-none',
            'text-xl',
            'bg-transparent',
            'w-0',
          )}
          placeholder={'Search'}
          value={inputValue}
          onChange={event => {
            const value = event.target.value;
            // setInputValue(String(value));
          }}
        />
        <div onClick={() => dispatch(collapseSearchBar())}>
          <SearchSVG className="search-bar-svg" />
        </div>
      </div>

      <div className="search-items bottom-0 w-full h-full absolute mt-20">
        {renderSearchTemplate ? (
          <>RENDERED TEMPLATE</>
        ) : (
          <div className="flex w-full flex-wrap px-2 mt-4">
            {searchState.searchResultItems &&
              searchState.searchResultItems.map(searchItem => (
                <div
                  className="flex w-full"
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
    </Modal>
  );
}
