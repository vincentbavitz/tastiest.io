import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useKey } from 'react-use';
import { ScreenContext } from '../../contexts/screen';
import { useLocationChange } from '../../hooks/useLocationChange';
import { collapseSearchOverlay } from '../../state/navigation';
import { SearchOverlayBackdrop } from './SearchOverlayBackdrop';
import { SearchOverlayMobile } from './SearchOverlayMobile';

// Search overlay includes the backdrop and the mobile overlay.
// Search dropdown is desktop only and is rendered per component
export function SearchOverlay() {
  const { isDesktop } = useContext(ScreenContext);
  const dispatch = useDispatch();

  const close = () => dispatch(collapseSearchOverlay());

  // Close on escape or page change
  useKey('Escape', close);
  useLocationChange(close);

  return (
    <>{!isDesktop ? <SearchOverlayMobile /> : <SearchOverlayBackdrop />}</>
  );
}
