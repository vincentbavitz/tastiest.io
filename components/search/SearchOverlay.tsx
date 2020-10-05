import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { UI } from '../../constants';
import { IState } from '../../state/reducers';
import { Search } from './Search';
import { SearchItem } from './SearchItem';

export function SearchOverlay() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const renderSearchTemplate = searchState.searchResultItems.length === 0;
  const { searchOverlayExpanded } = navigationState;

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  }

  // Styling
  const modalStyles = {
    overlay: {
      zIndex: '10000',
    },
    content: {
      top: 'unset',
      bottom: 'unset',
      left: 'unset',
      right: 'unset',
      width: '100%',
      minHeight: '100%',
      padding: '0',
    },
  };

  const Overlay = (
    <>
      <div className="search-items bottom-0 w-full h-full absolute mt-20">
        {renderSearchTemplate ? (
          <>SUGGESTIONS FOR YOU</>
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
    </>
  );

  return (
    <>
      {searchOverlayExpanded && (
        <>
          {isMobile ? (
            <Modal style={modalStyles} isOpen={searchOverlayExpanded}>
              <Search />
              {Overlay}
            </Modal>
          ) : (
            <>
              {/* Now you're either on mobile but not focussed or on desktop */}
              {Overlay}
            </>
          )}
        </>
      )}
    </>
  );
}
