import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway, useLockBodyScroll, useMedia } from 'react-use';
import ExitSVG from '../../assets/svgs/exit.svg';
import SearchSVG from '../../assets/svgs/search.svg';
import { UI } from '../../constants';
import {
  collapseSearchOverlay,
  expandSearchOverlay,
} from '../../state/navigation';
import { IState } from '../../state/reducers';
import { setSearchResultItems } from '../../state/search';
import { search } from '../../utils/search';

interface Props {
  onFocus?(): void;
  onExit?(): void;
}

export function Search(props: Props) {
  const nagivationState = useSelector((state: IState) => state.navigation);
  const dispatch = useDispatch();

  const { searchOverlayExpanded } = nagivationState;

  const [inputValue, setInputValue] = useState('');
  const { onFocus, onExit } = props;

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  }

  // Scroll locking
  useLockBodyScroll(searchOverlayExpanded && isMobile);

  // const renderExitButton = props.renderExitButton ?? shouldWrapInModal;
  const renderExitButton = isMobile;
  const shouldWrapInModal = isMobile;
  const [hasFocus, setHasFocus] = useState(false);

  // Exit when user clicks out of component
  const searchRef = useRef(null);
  useClickAway(searchRef, () => {
    if (!isMobile) {
      handleExit();
    }
  });

  const inputRef = useRef(null);

  // Handler Functions
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }

    setHasFocus(true);

    if (!searchOverlayExpanded) {
      dispatch(expandSearchOverlay());
    }
  };

  const handleBlur = () => {
    // Handle blur of non-overlay search bar
    if (searchOverlayExpanded) {
      dispatch(collapseSearchOverlay());
    }

    setHasFocus(false);
  };

  const handleExit = () => {
    dispatch(collapseSearchOverlay());

    if (onExit) {
      onExit();
    }
  };

  // Effects
  useEffect(() => {
    const fetchSearchItems = async () => {
      const query = String(inputValue);
      dispatch(setSearchResultItems(await search(query)));
    };

    fetchSearchItems();
  }, [inputValue]);

  return (
    <div className="relative" ref={searchRef}>
      <div
        onClick={() => inputRef.current?.focus()}
        className="mobile-search-input contained h-20 w-full flex items-center justify-between"
      >
        {renderExitButton && (
          <ExitSVG className="search-bar-svg" onClick={handleExit} />
        )}
        <input
          ref={inputRef}
          spellCheck={false}
          className={classNames(
            renderExitButton ? 'px-6' : 'pl-2 pr-4',
            'flex-grow',
            'border-none',
            'outline-none',
            'text-xl',
            'bg-transparent',
            'w-0',
          )}
          placeholder={'Search'}
          value={inputValue}
          onFocus={handleFocus}
          // onBlur={handleBlur}
          onChange={event => {
            const value = event.target.value;
            setInputValue(String(value));
          }}
        />

        <div onClick={() => dispatch(expandSearchOverlay())}>
          <SearchSVG className="search-bar-svg" />
        </div>
      </div>
    </div>
  );
}
