import classNames from 'classnames';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useKey, useMedia } from 'react-use';
import ElfSVG from '../../assets/svgs/elf.svg';
import { SEARCH, UI } from '../../constants';
import { collapseSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { Search } from './Search';
import { SearchItem } from './SearchItem';

export function SearchOverlay() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const renderSearchTemplate = searchState.searchResultItems.length === 0;
  const { searchOverlayExpanded } = navigationState;

  // Pull into the location context of search bar
  const searchBarGeometry = searchState.searchBarGeometry;
  const dispatch = useDispatch();

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  }

  const overlayContentRef = useRef(null);
  const onClickAway = () => {
    if (!isMobile && searchOverlayExpanded) {
      dispatch(collapseSearchOverlay());
    }
  };

  // Close on escape
  useKey('Escape', () => dispatch(collapseSearchOverlay()));

  const mobileOverlayStyles = {
    zIndex: searchOverlayExpanded ? 20000 : -1,
  };

  const desktopOverlayStyles = {
    zIndex: searchOverlayExpanded ? 20001 : -1,
    display: searchOverlayExpanded ? 'block' : 'hidden',
    minHeight: '600px',

    top: `${searchBarGeometry.top + searchBarGeometry.height}px`,
    bottom: `${searchBarGeometry.bottom}px`,
    left: `${searchBarGeometry.left}px`,
    right: `${searchBarGeometry.right}px`,
    width: `${searchBarGeometry.width}px`,
  };

  return (
    <>
      {isMobile ? (
        <div
          style={mobileOverlayStyles}
          className={classNames(
            'fixed top-0 bottom-0 left-0 right-0 bg-white',
            searchOverlayExpanded ? 'block' : 'hidden',
          )}
        >
          <div className="flex flex-col h-full flex-grow overflow-y-scroll">
            <Search autofocus={searchOverlayExpanded} renderExitButton={true} />
            <OverlayElement />
          </div>
        </div>
      ) : (
        <>
          <div
            onClick={onClickAway}
            style={{ zIndex: searchOverlayExpanded ? 20000 : -1 }}
            className={classNames(
              'fixed',
              'bottom-0',
              'left-0',
              'right-0',
              'h-full',
              'w-full',
              'bg-gray-800',
              'bg-opacity-50',
              'transition-opacity',
              'duration-300',
              searchOverlayExpanded ? 'opacity-100' : 'opacity-0',
            )}
          ></div>

          <div
            className="absolute"
            ref={overlayContentRef}
            style={desktopOverlayStyles}
          >
            <div
              className={classNames(
                'relative',
                'flex',
                // Allows shadow to overflow
                'bg-white',
                'border-t',
                'rounded-b-lg',
                'pb-4',
              )}
            >
              <div className="relative overflow-y-scroll w-full">
                <OverlayElement />
              </div>
            </div>
          </div>
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

  // const { searchOverlayExpanded } = navigationState;
  // const dispatch = useDispatch();

  const shouldDisplaySeeAll =
    searchState.searchResultItems.length >=
    SEARCH.SOFT_LIMIT_SEARCH_RESULTS_OVERLAY;

  return (
    <>
      <div
        className={classNames(
          'search-items w-full pb-6',
          isMobile && 'flex flex-col h-full justify-between mt-3',
        )}
      >
        {renderSearchTemplate ? (
          <div className="flex justify-between items-center px-6 my-10">
            <h3 className="text-threexl">No results found.</h3>
            <ElfSVG className="h-24" />
          </div>
        ) : (
          <div className="flex w-full flex-wrap px-2 my-4">
            {searchState.searchResultItems.length &&
              searchState.searchResultItems.slice(0, 4).map(searchItem => (
                <div
                  className={classNames('flex', isMobile ? ' w-full' : 'w-1/2')}
                  key={searchItem.title.replace(' ', '-')}
                >
                  <SearchItem {...searchItem} />
                </div>
              ))}
          </div>
        )}

        {shouldDisplaySeeAll && (
          <div className="flex w-full px-6 my-4 text-lg ">
            <Link href="" as="">
              See all
            </Link>
          </div>
        )}

        <div className="flex flex-col w-full px-6">
          <h3 className="text-xl text-center mt-4 mb-4">
            Didn't find what you're looking for?
          </h3>
          <div
            role="button"
            className="rounded-md py-2 px-4 text-white bg-primary text-center font-bold w-full"
          >
            Click Here!
          </div>
        </div>
      </div>
    </>
  );
}
