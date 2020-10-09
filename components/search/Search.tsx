import classNames from 'classnames';
import React, { ChangeEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway, useLockBodyScroll, useMedia } from 'react-use';
import BackSVG from '../../assets/svgs/back.svg';
import SearchSVG from '../../assets/svgs/search.svg';
import { UI } from '../../constants';
import {
  collapseSearchOverlay,
  expandSearchOverlay,
} from '../../state/navigation';
import { IState } from '../../state/reducers';
import { setSearchQuery, setSearchResultItems } from '../../state/search';
import { search } from '../../utils/search';

interface Props {
  renderExitButton?: boolean;
  autofocus?: boolean;
  onFocus?(): void;
}

export function Search(props: Props) {
  const nagivationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const dispatch = useDispatch();

  const { searchOverlayExpanded } = nagivationState;
  const { onFocus, autofocus = false } = props;

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  }

  const inputValue = searchState.searchQuery;
  const renderExitButton = props.renderExitButton ?? isMobile;

  // Scroll locking
  useLockBodyScroll(searchOverlayExpanded && isMobile);

  // Exit when user clicks out of component
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  useClickAway(searchRef, () => {
    if (!isMobile) {
      handleExit();
    }
  });

  // Handler Functions
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }

    if (!searchOverlayExpanded) {
      alert('HANDLING FOCUS');
      dispatch(expandSearchOverlay());
    }
  };

  const handleExit = () => {
    dispatch(collapseSearchOverlay());
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setSearchQuery(String(value)));
  };

  // Effects
  useEffect(() => {
    const fetchSearchItems = async () => {
      const query = String(inputValue);
      dispatch(setSearchResultItems(await search(query)));
    };

    fetchSearchItems();
  }, [inputValue]);

  useEffect(() => {
    console.log('Search expanded: ', searchOverlayExpanded);
  }, [searchOverlayExpanded]);

  // Autofocus
  useEffect(() => {
    setTimeout(() => {
      if (autofocus) {
        inputRef?.current?.focus();
      }
    }, 0);
  }, []);

  return (
    <div
      style={{ zIndex: searchOverlayExpanded && !isMobile ? 20001 : 'auto' }}
      className="relative"
      ref={searchRef}
    >
      <div
        className={classNames(
          'flex items-center w-full justify-between bg-white px-6 rounded-t-lg',
          searchOverlayExpanded && 'rounded-t-lg',
          isMobile && 'border-b border-gray-300',
          isMobile && searchOverlayExpanded ? 'h-20' : 'h-16',
        )}
      >
        <span className="text-secondary">
          <BackSVG
            className={classNames(
              'h-8 w-8 fill-current',
              renderExitButton ? 'block' : 'hidden',
            )}
            onClick={handleExit}
          />
        </span>

        <input
          ref={inputRef}
          spellCheck={false}
          className={classNames(
            renderExitButton ? 'px-6' : 'pl-2 pr-4',
            'flex',
            'flex-grow',
            'border-none',
            'outline-none',
            'text-xl',
            'bg-transparent',
            'w-0',
          )}
          placeholder={'Search'}
          value={inputValue}
          onKeyDown={() => inputRef?.current?.focus()}
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
