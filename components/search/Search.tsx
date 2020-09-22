import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import SearchSVG from '../../assets/svgs/search-icon.svg';
import { UI } from '../../constants';

interface State {
  inputValue: string;
  isMobile: boolean;
  mobileInputExpanded: boolean;
}

export function Search() {
  const searchContainerRef = useRef(null);
  const mobileInputRef = useRef(null);

  const [state, setState] = useState({
    isMobile: false,
    inputValue: '',
    mobileInputExpanded: false,
  } as State);
  const { isMobile, inputValue, mobileInputExpanded } = state;

  const setIsMobileIfNeeded = () => {
    const width = searchContainerRef?.current?.getBoundingClientRect()?.width;

    if (!width) {
      return;
    }

    if (!isMobile && width < UI.MOBILE_BREAKPOINT) {
      setState({ ...state, isMobile: true });
    }

    if (isMobile && width >= UI.MOBILE_BREAKPOINT) {
      setState({ ...state, isMobile: false, mobileInputExpanded: false });
    }

    console.log('State:', state);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileIfNeeded();
    };

    setIsMobileIfNeeded();
    window.addEventListener('resize', handleResize);
  }, []);

  const renderMobileSearchInput = () => null;

  return (
    <div
      className="tastiest-logo absolute w-full h-full"
      ref={searchContainerRef}
    >
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
    </div>
  );
}
