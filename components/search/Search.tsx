import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import SearchSVG from '../../assets/svgs/search-icon.svg';
import { UI } from '../../constants';

export function Search() {
  const searchContainerRef = useRef(null);
  const mobileInputRef = useRef(null);

  const [inputValue, setInputValue] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [mobileInputExpanded, setMobileInputExpanded] = useState(false);

  const setIsMobileIfNeeded = () => {
    const width = searchContainerRef?.current?.getBoundingClientRect()?.width;

    if (!width) {
      return;
    }

    if (!isMobile && width < UI.MOBILE_BREAKPOINT) {
      setIsMobile(true);
    }

    if (isMobile && width >= UI.MOBILE_BREAKPOINT) {
      setIsMobile(false);
      if (mobileInputExpanded) {
        setMobileInputExpanded(false);
      }
    }
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
    <div className="absolute w-full h-full" ref={searchContainerRef}>
      <div className="flex h-full items-center justify-end">
        {isMobile ? (
          <>
            {mobileInputExpanded ? (
              <div
                onClick={() => mobileInputRef.current?.focus()}
                className="mobile-search-input contained h-full w-full flex items-center justify-between"
              >
                <CloseOutlined onClick={() => setMobileInputExpanded(false)} />
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
                <div onClick={() => setMobileInputExpanded(true)}>
                  <SearchSVG className="fill-secondary h-8" />
                </div>
              </div>
            ) : (
              <div
                className="flex flex-shrink-0 contained"
                onClick={() => setMobileInputExpanded(true)}
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
