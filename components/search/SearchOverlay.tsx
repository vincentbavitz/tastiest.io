import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useKey, useLocation } from 'react-use';
import { collapseSearchOverlay } from '../../state/navigation';
import { SearchOverlayBackdrop } from './SearchOverlayBackdrop';
import { SearchOverlayMobile } from './SearchOverlayMobile';

// Search overlay includes the backdrop and the mobile overlay.
// Search dropdown is desktop only and is rendered per component
export function SearchOverlay() {
  const { isDesktop } = useScreenSize();
  const dispatch = useDispatch();

  const close = () => dispatch(collapseSearchOverlay());

  // Close on escape
  useKey('Escape', close);

  // Close on page change
  const location = useLocation();
  useEffect(() => {
    close();
  }, [location]);

  return (
    <>{!isDesktop ? <SearchOverlayMobile /> : <SearchOverlayBackdrop />}</>
  );
}
