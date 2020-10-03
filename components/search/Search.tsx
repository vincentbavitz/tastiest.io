import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useClickAway, useMedia } from 'react-use';
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
  renderExitButton?: boolean;
  onExit?(): void;
}

export function Search(props: Props) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState();
  const { overlay = OverlayCondition.ON_FOCUS, onExit } = props;

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia('(max-width: 500px)');
  }

  const [isModalOpen, setIsModalOpen] = useState(isMobile ? true : false);
  const [overlayShown, setOverlayShown] = useState(
    overlay === OverlayCondition.ON_RENDER ? true : false,
  );

  const renderExitButton = props.renderExitButton ?? isModalOpen;

  // Exit when user clicks out of component
  const searchRef = useRef(null);
  useClickAway(searchRef, () => {
    if (!isMobile) {
      setOverlayShown(false);
      handleExit();
    }
  });

  const mobileInputRef = useRef(null);

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

  // Hanlder Functions
  const handleFocus = () => {
    setIsModalOpen(true);

    if (overlay === OverlayCondition.ON_FOCUS) {
      setOverlayShown(true);
    }

    if (isMobile) {
    }
  };

  const handleExit = () => {
    setIsModalOpen(false);

    if (onExit) {
      onExit();
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

  const SearchElement = (
    <div className="relative" ref={searchRef}>
      <div
        onClick={() => mobileInputRef.current?.focus()}
        className="mobile-search-input contained h-20 w-full flex items-center justify-between"
      >
        {renderExitButton && (
          <ExitSVG className="search-bar-svg" onClick={handleExit} />
        )}
        <input
          ref={mobileInputRef}
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
          onChange={event => {
            const value = event.target.value;
            // setInputValue(String(value));
          }}
        />
        <div onClick={() => setOverlayShown(true)}>
          <SearchSVG className="search-bar-svg" />
        </div>
      </div>

      {overlayShown && <SearchOverlay />}
    </div>
  );

  return (
    <>
      {isMobile && (
        <>
          {isModalOpen ? (
            <Modal style={modalStyles} isOpen={isModalOpen}>
              <>{SearchElement}</>
            </Modal>
          ) : (
            { SearchElement }
          )}
        </>
      )}
    </>
  );
}
