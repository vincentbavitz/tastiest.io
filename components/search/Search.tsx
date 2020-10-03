import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useMedia } from 'react-use';
import SearchSVG from '../../assets/svgs/search.svg';
import { expandSearchBar } from '../../state/navigation';
import { setSearchResultItems } from '../../state/search';
import { search } from '../../utils/search';
import { SearchResultsOverlay } from './SearchResultsOverlay';

export function Search() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia('(max-width: 500px)');
  }

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
    <>
      <SearchResultsOverlay />

      <div className="absolute w-full h-full">
        <div className="flex h-full items-center justify-end overflow-x-hidden">
          {isMobile ? (
            <div
              className="flex flex-shrink-0 contained"
              onClick={() => dispatch(expandSearchBar())}
            >
              <SearchSVG className="fill-secondary h-8 cursor-pointer" />
            </div>
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
                onFocus={() => dispatch(expandSearchBar())}
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
    </>
  );
}
