import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import SearchSVG from '../../assets/svgs/search-icon.svg';
import { Hashtag } from '../../objects';

interface State {
  inputValue: string;
  mobileInputExpanded: boolean;
}

interface IProps {
  isMobile: boolean;
}

export function Search(props: IProps) {
  const mobileInputRef = useRef(null);

  const [state, setState] = useState({
    inputValue: '',
    mobileInputExpanded: false,
  } as State);
  const { inputValue, mobileInputExpanded } = state;
  const { isMobile } = props;

  console.log('Mobile:', isMobile);

  const renderMobileSearchInput = () => null;

  const searchItems = [
    {
      href: '',
      image: '',
      altTag: '',
      title: 'Good london food',
      paragraph: '',
      hashtags: [new Hashtag('qwerkeqwjrqwlkehr')],
    },
    {
      href: '',
      image: '',
      altTag: '',
      title: 'North korean nonfood',
      paragraph: 'Thisis very sad',
      hashtags: [new Hashtag('qwerkeqwjrqwlkehr')],
    },
  ];

  return (
    <div className="absolute w-full h-full">
      <div className="flex h-full items-center justify-end">
        {isMobile ? (
          <>
            {mobileInputExpanded ? (
              <div
                onClick={() => mobileInputRef.current?.focus()}
                className="mobile-search-input contained h-full w-full flex items-center justify-between"
              >
                <CloseOutlined
                  onClick={() =>
                    setState({ ...state, mobileInputExpanded: false })
                  }
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
                />
                <div
                  onClick={() =>
                    setState({ ...state, mobileInputExpanded: false })
                  }
                >
                  <SearchSVG className="fill-secondary h-8" />
                </div>
              </div>
            ) : (
              <div
                className="flex flex-shrink-0 contained"
                onClick={() =>
                  setState({ ...state, mobileInputExpanded: true })
                }
              >
                <SearchSVG className="fill-secondary h-8" />
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
            />
            <div
              className="flex flex-shrink-0"
              onClick={() => alert('Searching')}
            >
              <SearchSVG className="fill-secondary h-6" />
            </div>
          </div>
        )}
      </div>

      <div className="search-items absolute bottom-0 w-full">
        {/* {searchItems } */}
      </div>
    </div>
  );
}
