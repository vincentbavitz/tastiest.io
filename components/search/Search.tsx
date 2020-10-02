import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import ExitSVG from '../../assets/svgs/exit.svg';
import SearchSVG from '../../assets/svgs/search-icon.svg';
import { collapseSearchBar, expandSearchBar } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { setSearchResultItems } from '../../state/search';
import { search } from '../../utils/search';
import { SearchResultsOverlay } from './SearchResultsOverlay';

interface State {
  inputValue: string;
  mobileInputExpanded: boolean;
}

interface IProps {
  isMobile: boolean;
  // TEMPORAYR --> PUT INTO SEARCH NOT PROPS
  //: Array<ISanityArticle>;
}

// AT THE BOTTOM OFF THE SEARCH;
// CAN YOU RECOMMEND A BETTER RESTAURANT? -> depedning on their search query

export function Search(props: IProps) {
  // document && Modal.setAppElement(document.getElementById('__next'));

  const navigationState = useSelector((state: IState) => state.navigation);

  const dispatch = useDispatch();

  // SUGGESTED SEARCH ITEMS: 4 <-- MOST RECENT
  // SEARCH EXPLICIT: <-- 3X2 = 6 <--- VIEW MORE BUTTON

  const { searchBarExpanded } = navigationState;
  const mobileInputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const { isMobile } = props;
  console.log('Mobile:', isMobile);
  const renderMobileSearchInput = () => null;

  console.log('Props', props);

  useEffect(() => {
    const fetchSearchItems = async () => {
      const query = String(inputValue);
      console.log('value', inputValue);

      dispatch(setSearchResultItems(await search(query)));
    };

    fetchSearchItems();
  }, [inputValue]);

  const modalStyles = isMobile
    ? {
        content: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          height: '100%',
          width: '100%',
          zIndex: '1000',
          border: 'none',
          borderRadius: '0',
          padding: '0',
        },
      }
    : {
        content: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          height: '100%',
          width: '100%',
          zIndex: '1000',
        },
      };

  return (
    <div className="absolute w-full h-full">
      <div className="flex h-full items-center justify-end overflow-x-hidden">
        {isMobile ? (
          <>
            {searchBarExpanded ? (
              <Modal style={modalStyles} isOpen={searchBarExpanded}>
                <div
                  onClick={() => mobileInputRef.current?.focus()}
                  className="mobile-search-input contained h-20 w-full flex items-center justify-between"
                >
                  <ExitSVG
                    className="search-bar-svg"
                    onClick={() => dispatch(collapseSearchBar())}
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
                    onChange={event => {
                      const value = event.target.value;
                      setInputValue(String(value));
                    }}
                  />
                  <div onClick={() => dispatch(collapseSearchBar())}>
                    <SearchSVG className="search-bar-svg" />
                  </div>
                </div>

                <SearchResultsOverlay />
              </Modal>
            ) : (
              <div
                className="flex flex-shrink-0 contained"
                onClick={() => dispatch(expandSearchBar())}
              >
                <SearchSVG className="fill-secondary h-8 cursor-pointer" />
              </div>
            )}
          </>
        ) : (
          <div
            className={classNames(
              'inline-flex',
              'items-center',
              'content-between',
              'border-2',
              'border-primary',
              'focus:shadow-outline',
              'focus:outline-none',
              'rounded-lg',
              'px-2',
              'h-8',
              'mr-page',
            )}
          >
            <input
              className={classNames(
                'pl-1',
                'border-none',
                'outline-none',
                'text-sm',
              )}
              placeholder={'Search'}
              value={inputValue}
              onChange={event => {
                const value = event.target.value;
                setInputValue(String(value));
              }}
            />
            <div
              className="flex flex-shrink-0"
              onClick={() => alert('Searching')}
            >
              <SearchSVG className="fill-secondary h-6 cursor-pointer" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
