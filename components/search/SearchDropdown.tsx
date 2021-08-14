import clsx from 'clsx';
import React, { CSSProperties, useRef } from 'react';
import { useSelector } from 'react-redux';
import { UI } from '../../constants';
import { IState } from '../../state/reducers';
import { SearchOverlayInner } from './SearchOverlayInner';

interface Props {
  isShown: boolean;
  innerOverlayStyle?: CSSProperties;
  theme?: 'primary' | 'secondary';
}

export function SearchDropdown(props: Props) {
  const { theme = 'primary', isShown, innerOverlayStyle } = props;

  const { searchOverlayExpanded } = useSelector(
    (state: IState) => state.navigation,
  );

  const overlayContentRef = useRef(null);

  // Desktop overlay styles depend on wether or not the search bar is
  // in the navbar or not
  const desktopOverlayStyles = {
    zIndex: searchOverlayExpanded && isShown ? UI.Z_INDEX_SEARCH_DROPDOWN : -1,
    display: searchOverlayExpanded && isShown ? 'block' : 'none',
    minHeight: '600px',
  };

  return (
    <>
      <div
        ref={overlayContentRef}
        style={desktopOverlayStyles}
        className="w-auto"
      >
        <div
          className={clsx(
            'relative',
            'flex',
            // Allows shadow to overflow
            'bg-white',
            'border-t-none',
            'border-l-2',
            'border-r-2',
            'border-b-2',
            'rounded-b-lg',
            'pb-4',
            theme === 'primary' ? 'border-primary' : 'border-secondary',
          )}
        >
          <div
            style={innerOverlayStyle}
            className="relative w-full overflow-y-auto"
          >
            <SearchOverlayInner />
          </div>
        </div>
      </div>
    </>
  );
}
