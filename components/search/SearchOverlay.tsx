import classNames from 'classnames';
import Link from 'next/link';
import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useKey, useLocation, useMedia } from 'react-use';

import { CUISINES, UI } from '../../constants';
import { ScreenContext } from '../../contexts/screen';
import { useScreenSize } from '../../hooks/screen';
import { collapseSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { OutlineBlock } from '../OutlineBlock';
import { Search } from './Search';
import { SearchOverlayDesktop } from './SearchOverlayDesktop';
import { SearchOverlayMobile } from './SearchOverlayMobile';

// TODO - FIX:
// Warning: Did not expect server HTML to contain a <div> in <div>.
export function SearchOverlay() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  // const renderSearchTemplate = searchState.searchResultItems.length === 0;
  const { searchOverlayExpanded } = navigationState;

  // Pull into the location context of search bar
  const searchBarGeometry = searchState.searchBarGeometry;
  const dispatch = useDispatch();

  const { isMobile } = useContext(ScreenContext);

  // Close on escape
  useKey('Escape', () => dispatch(collapseSearchOverlay()));

  // Close search overlay on page changed
  const location = useLocation();
  useEffect(() => {
    dispatch(collapseSearchOverlay());
  }, [location]);

  return (
    <div>{isMobile ? <SearchOverlayMobile /> : <SearchOverlayDesktop />}</div>
  );
}
