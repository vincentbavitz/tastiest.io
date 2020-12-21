import classNames from 'classnames';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLockBodyScroll } from 'react-use';
import { IState } from '../../state/reducers';
import { SearchOverlayInner } from './SearchOverlayInner';

interface Props {
  isShown: boolean;
}

export function SearchDropdown({ isShown }: Props) {
  const { searchOverlayExpanded } = useSelector(
    (state: IState) => state.navigation,
  );
  const { searchBarPinnedToHeader } = useSelector(
    (state: IState) => state.search,
  );

  // Lock body scroll when pinned to header and open
  useLockBodyScroll(searchOverlayExpanded && searchBarPinnedToHeader);

  const overlayContentRef = useRef(null);

  // Desktop overlay styles depend on wether or not the search bar is
  // in the navbar or not
  const desktopOverlayStyles = {
    zIndex: searchOverlayExpanded && isShown ? 20002 : -1,
    display: searchOverlayExpanded && isShown ? 'block' : 'none',
    minHeight: '600px',
  };

  return (
    <>
      <div ref={overlayContentRef} style={desktopOverlayStyles}>
        <div
          className={classNames(
            'relative',
            'flex',
            // Allows shadow to overflow
            'bg-white',
            'border-primary',
            'border-t-none',
            'border-l-2',
            'border-r-2',
            'border-b-2',
            'rounded-b-lg',
            'pb-4',
          )}
        >
          <div
            style={{
              // When pinned to header, limit height to vh and lock body scroll
              maxHeight:
                searchOverlayExpanded && searchBarPinnedToHeader
                  ? '80vh'
                  : 'unset',
            }}
            className="relative overflow-y-auto w-full"
          >
            <SearchOverlayInner />
          </div>
        </div>
      </div>
    </>
  );
}
