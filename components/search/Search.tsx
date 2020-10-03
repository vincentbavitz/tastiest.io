import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useMedia } from 'react-use';
import ExitSVG from '../../assets/svgs/exit.svg';
import SearchSVG from '../../assets/svgs/search.svg';
import { setSearchResultItems } from '../../state/search';
import { search } from '../../utils/search';
import { SearchOverlay } from './SearchOverlay';

export enum OverlayCondition {
  ON_RENDER = 'ON_RENDER',
  ON_FOCUS = 'ON_FOCUS',
}
interface Props {
  overlay: OverlayCondition;
}

export function Search(props: Props) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState();
  const { overlay = OverlayCondition.ON_FOCUS } = props;

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia('(max-width: 500px)');
  }

  const mobileInputRef = useRef(null);

  // Functions
  const handleFocus = () => {
    if (overlay === OverlayCondition.ON_FOCUS) {
      dispatch(showSearchOverlay());
    }
  };

  // Effects
  useEffect(() => {
    const fetchSearchItems = async () => {
      const query = String(inputValue);
      console.log('value', inputValue);

      dispatch(setSearchResultItems(await search(query)));
    };

    fetchSearchItems();
  }, [inputValue]);

  // Set modal element on client load
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return (
    <div className="relative">
      <div
        onClick={() => mobileInputRef.current?.focus()}
        className="mobile-search-input contained h-20 w-full flex items-center justify-between"
      >
        <ExitSVG
          className="search-bar-svg"
          onClick={() => dispatch(hideSearchOverlay())}
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
          onFocus={handleFocus}
          onChange={event => {
            const value = event.target.value;
            // setInputValue(String(value));
          }}
        />
        <div onClick={() => dispatch(hideSearchOverlay())}>
          <SearchSVG className="search-bar-svg" />
        </div>
      </div>

      <SearchOverlay />
    </div>
  );
}
