import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchSVG from '../../assets/svgs/search-icon.svg';
import { collapseSearchBar, expandSearchBar } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { setSearchResultItems } from '../../state/search';
import { search } from '../../utils/search';
import { SearchItem } from './SearchItem';

import ExitSVG from '../../assets/svgs/exit.svg';

interface State {
  inputValue: string;
  mobileInputExpanded: boolean;
}

interface IProps {
  // isMobile: boolean;
  // TEMPORAYR --> PUT INTO SEARCH NOT PROPS
  //: Array<IArticle>;
}

// AT THE BOTTOM OFF THE SEARCH;
// CAN YOU RECOMMEND A BETTER RESTAURANT? -> depedning on their search query

export function Search(props: IProps) {
  const navigationState = useSelector((state: IState) => state.navigation);

  const dispatch = useDispatch();

  // SUGGESTED SEARCH ITEMS: 4 <-- MOST RECENT
  // SEARCH EXPLICIT: <-- 3X2 = 6 <--- VIEW MORE BUTTON

  const { searchBarExpanded } = navigationState;

  const mobileInputRef = useRef(null);

  const [inputValue, setInputValue] = useState('');

  // const { isMobile } = props;
  const isMobile = true;

  console.log('Mobile:', isMobile);

  const renderMobileSearchInput = () => null;

  console.log('Props', props);

  useEffect(() => {
    const fetchSearchItems = async () => {
      const query = String(inputValue);
      dispatch(setSearchResultItems(await search(query)));
    };

    fetchSearchItems();
  }, [inputValue]);

  return (
    <div className="absolute w-full h-full">
      <div className="flex h-full items-center justify-end overflow-x-hidden">
        {isMobile ? (
          <>
            {searchBarExpanded ? (
              <div
                onClick={() => mobileInputRef.current?.focus()}
                className="mobile-search-input contained h-full w-full flex items-center justify-between"
              >
                <ExitSVG
                  className="h-8"
                  onClick={() => dispatch(collapseSearchBar())}
                />
                <input
                  ref={mobileInputRef}
                  className={classNames(
                    'px-6',
                    'flex-grow',
                    'border-none',
                    'outline-none',
                    'text-xl',
                    'bg-transparent',
                  )}
                  placeholder={'Search'}
                  value={inputValue}
                  onChange={event => {
                    const value = event.target.value;
                    setInputValue(String(value));
                  }}
                />
                <div onClick={() => dispatch(collapseSearchBar())}>
                  <SearchSVG className="fill-secondary h-8 cursor-pointer" />
                </div>
              </div>
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
              onChange={value => setInputValue(String(value))}
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
