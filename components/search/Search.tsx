import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useClickAway, useLockBodyScroll, useMedia } from 'react-use';
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

  const [inputValue, setInputValue] = useState('');
  const { overlay = OverlayCondition.ON_FOCUS, onExit } = props;

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia('(max-width: 500px)');
  }

  const [hasFocus, setHasFocus] = useState(false);
  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(
    overlay === OverlayCondition.ON_RENDER ||
      (overlay === OverlayCondition.ON_FOCUS && hasFocus),
  );

  const shouldWrapInModal = isMobile && shouldRenderOverlay;
  const [isModalOpen, setIsModalOpen] = useState(shouldWrapInModal);
  const renderExitButton = props.renderExitButton ?? shouldWrapInModal;

  // Exit when user clicks out of component
  const searchRef = useRef(null);
  useClickAway(searchRef, () => {
    if (!isMobile) {
      handleExit();
    }
  });

  const inputRef = useRef(null);

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

  // Handler Functions
  const handleFocus = () => {
    setHasFocus(true);

    if (overlay === OverlayCondition.ON_FOCUS) {
      setShouldRenderOverlay(true);
    }

    if (shouldWrapInModal && isMobile) {
      setIsModalOpen(true);
    }
  };

  const handleBlur = () => {
    // Handle blur of non-overlay search bar
    if (!isModalOpen && overlay === OverlayCondition.ON_FOCUS) {
      setShouldRenderOverlay(false);
    }

    setHasFocus(false);
  };

  const handleExit = () => {
    setShouldRenderOverlay(false);
    setIsModalOpen(false);

    if (onExit) {
      onExit();
    }

    console.log('Finito');
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

  useEffect(() => {
    // Set modal element on client load
    Modal.setAppElement('#__next');

    // Set focus on modal element
    setInterval(() => {
      if (shouldWrapInModal && isModalOpen) {
        inputRef.current?.focus();
      }
    }, 10);
  }, []);

  useEffect(() => {
    console.log('isModalOpen', isModalOpen);
    console.log('shouldRenderOverlay', shouldRenderOverlay);
    console.log('Should wrap in a modal: ', shouldWrapInModal);
  });

  // Scroll locking
  useLockBodyScroll(isModalOpen);

  const SearchElement = (
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
          onBlur={handleBlur}
          onChange={event => {
            const value = event.target.value;
            setInputValue(String(value));
          }}
        />
        <div onClick={() => setShouldRenderOverlay(true)}>
          <SearchSVG className="search-bar-svg" />
        </div>
      </div>

      {shouldRenderOverlay && <SearchOverlay />}
    </div>
  );

  return (
    <>
      {shouldWrapInModal ? (
        <Modal style={modalStyles} isOpen={isModalOpen}>
          <>{SearchElement}</>
        </Modal>
      ) : (
        <>
          {/* Now you're either on mobile but not focussed or on desktop */}
          {SearchElement}
        </>
      )}
    </>
  );
}
