import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { IState } from '../../state/reducers';
import { SearchItem } from './SearchItem';

export function SearchOverlay() {
  const dispatch = useDispatch();

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia('(max-width: 500px)');
  }

  const modalStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      height: '100%',
      width: '100%',
      zIndex: '1000',
      border: 'none',
      borderRadius: '0',
      padding: '0',
    },
  };

  return (
    <>
      {isMobile ? (
        <Modal style={modalStyles} isOpen={true}>
          <OverlayContent />
        </Modal>
      ) : (
        <div className="absolute bottom-0 bg-white">
          <OverlayContent />
        </div>
      )}
    </>
  );
}

function OverlayContent() {
  const searchState = useSelector((state: IState) => state.search);
  const navigationState = useSelector((state: IState) => state.navigation);

  const { searchOverlayShown } = navigationState;
  const renderSearchTemplate = searchState.searchResultItems.length === 0;

  return (
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
  );
}
