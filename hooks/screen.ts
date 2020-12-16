import { useEffect } from 'react';
import { useMedia } from 'react-use';
import { UI } from '../constants';

export function useScreenSize() {
  // Default to mobile view
  const isMobile = useMedia(`(max-width: ${UI.TABLET_BREAKPOINT}px)`, true);
  const isTablet = useMedia(
    `(min-width: ${UI.MOBILE_BREAKPOINT}px) and  (max-width: ${UI.TABLET_BREAKPOINT}px)`,
    false,
  );
  const isDesktop = useMedia(`(min-width: ${UI.TABLET_BREAKPOINT}px)`, false);
  const isHuge = useMedia(`(min-width: ${UI.DESKTOP_BREAKPOINT}px)`, false);

  // console.log('screen ➡️ isMobile:', isMobile);
  // console.log('screen ➡️ isTablet:', isTablet);
  // console.log('screen ➡️ isDesktop:', isDesktop);
  // console.log('screen ➡️ isHuge:', isHuge);

  return { isMobile, isTablet, isDesktop, isHuge };
}
