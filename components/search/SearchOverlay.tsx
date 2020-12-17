import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useKey, useLocation } from 'react-use';
import { ScreenContext } from '../../contexts/screen';
import { collapseSearchOverlay } from '../../state/navigation';
import { SearchOverlayDesktop } from './SearchOverlayDesktop';
import { SearchOverlayMobile } from './SearchOverlayMobile';

export function SearchOverlay() {
  const { isMobile } = useContext(ScreenContext);
  const dispatch = useDispatch();

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
