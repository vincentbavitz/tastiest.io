import classNames from 'classnames';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
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
  renderExitButton?: boolean;
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

  const renderExitButton = props.renderExitButton ?? isMobile;
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

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(String(value));

    // Set overlay when user starts typing
    if (value.length > 0 && !searchOverlayExpanded) {
      dispatch(expandSearchOverlay());
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
    <div
      style={{ zIndex: searchOverlayExpanded && !isMobile ? 20001 : 'auto' }}
      className="relative"
      ref={searchRef}
    >
      <div
        onClick={() => inputRef.current?.focus()}
        className={classNames(
          'h-16 w-full flex items-center justify-between bg-white px-6 rounded-t-lg',
          searchOverlayExpanded && 'rounded-t-lg',
        )}
      >
        {renderExitButton && <ExitSVG className="h-8" onClick={handleExit} />}
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
          onChange={handleOnChange}
        />

        <div onClick={() => dispatch(expandSearchOverlay())}>
          <SearchSVG className="h-10" />
        </div>
      </div>
    </div>
  );
}
