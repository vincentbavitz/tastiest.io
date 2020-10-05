import classNames from 'classnames';
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { UI } from '../../constants';
import { collapseSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { Search } from './Search';
import { SearchItem } from './SearchItem';

export function SearchOverlay() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const renderSearchTemplate = searchState.searchResultItems.length === 0;
  const { searchOverlayExpanded } = navigationState;

  const dispatch = useDispatch();

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  }

  console.log('Media query', `(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  console.log('isMobile', isMobile);

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

  useEffect(() => {
    // Set modal element on client load
    Modal.setAppElement('#__next');
  }, []);

  return (
    <>
      {searchOverlayExpanded && (
        // {true && (
        <>
          {isMobile ? (
            <Modal style={modalStyles} isOpen={true}>
              <Search onExit={() => dispatch(collapseSearchOverlay())} />
              <OverlayElement />
            </Modal>
          ) : (
            <div className="relative w-full h-0 z-50">
              <div
                style={{ height: '600px', zIndex: 20000 }}
                className={classNames(
                  'flex',
                  'absolute',
                  'top-0',
                  // Allows shadow to overflow
                  '-left-4',
                  '-right-4',
                  'px-4',
                  'pb-4',
                  'overflow-y-scroll',
                  'bg-white',
                )}
              >
                <OverlayElement />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

function OverlayElement() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const renderSearchTemplate = searchState.searchResultItems.length === 0;

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  }

  const { searchOverlayExpanded } = navigationState;
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={classNames(
          'search-items bottom-0 w-full h-full',
          isMobile && 'mt-6',
        )}
      >
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
}
