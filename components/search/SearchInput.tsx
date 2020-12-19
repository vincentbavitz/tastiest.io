import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { ChangeEvent, ReactNode, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useKey, useStartTyping } from 'react-use';
import SearchPrimarySVG from '../../assets/svgs/search-primary.svg';
import SearchSecondarySVG from '../../assets/svgs/search-secondary.svg';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { setSearchQuery, setSearchResultItems } from '../../state/search';
import { search } from '../../utils/search';

interface Props {
  placeholder?: string;
  autofocus?: boolean;
  className?: string;
  inputClassName?: string;

  prefix?: ReactNode;
  searchIcon?: 'primary' | 'secondary';

  // A dummy input is purely visual.
  dummy?: boolean;
  dummyOnClick?(): void;
  onFocus?(): void;
  onChange?(value: string): void;
}

// Pure functionality. This component is not intended to be used as a standalone.
// Its parent should provide styling
export function SearchInput(props: Props) {
  const {
    autofocus = false,
    placeholder,
    className,
    inputClassName,
    searchIcon,
    prefix,
    dummy,
    dummyOnClick,
    onFocus,
    onChange,
  } = props;

  // State
  const nagivationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchOverlayExpanded } = nagivationState;
  const dispatch = useDispatch();

  // References
  const inputRef = useRef(null);

  // Hooks
  const router = useRouter();
  // Force focus when user starts typing
  useStartTyping(() => inputRef?.current?.focus());

  // Search on enter
  useKey('Enter', () => {
    if ((inputRef.current as HTMLInputElement).focus) {
      router.push({
        pathname: '/search',
        query: { s: searchState.searchQuery },
      });
    }
  });

  // Internal functions
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = String(event.target.value);
    dispatch(setSearchQuery(String(value)));

    if (onChange) {
      onChange(value);
    }

    // Bring up overlay when they start typing
    if (String(value).length > 0) {
      dispatch(expandSearchOverlay());
    }
    inputRef?.current?.focus();
  };

  const inputValue = searchState.searchQuery;

  // Handler Functions
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }

    inputRef?.current?.focus();
    if (!searchOverlayExpanded) {
      dispatch(expandSearchOverlay());
    }
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
    }, 50);
  }, []);

  return (
    <div
      className={classNames('flex items-center w-full space-x-3', className)}
    >
      {prefix && <div>{prefix}</div>}

      {dummy ? (
        <div
          onClick={() => dummyOnClick && dummyOnClick()}
          className={classNames(
            'flex',
            'flex-grow',
            'border-none',
            'cursor-text',
            'outline-none',
            'opacity-50',
            'w-0',
            inputClassName,
          )}
        >
          {placeholder}
        </div>
      ) : (
        <input
          ref={inputRef}
          spellCheck={false}
          className={classNames(
            'flex',
            'flex-grow',
            'border-none',
            'outline-none',
            'w-0',
            inputClassName,
          )}
          placeholder={placeholder}
          value={inputValue}
          onKeyDown={() => inputRef?.current?.focus()}
          onFocus={handleFocus}
          onChange={handleOnChange}
        />
      )}

      {searchIcon && (
        // Internal elements
        <div
          className="cursor-pointer"
          onClick={() => dispatch(expandSearchOverlay())}
        >
          {searchIcon === 'primary' && (
            <SearchPrimarySVG className="h-8 fill-current" />
          )}
          {searchIcon === 'secondary' && (
            <SearchSecondarySVG className="h-8 fill-current" />
          )}
        </div>
      )}
    </div>
  );
}
