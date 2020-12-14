import { useMedia } from 'react-use';
import { UI } from '../constants';

export function useScreenSize() {
  // Responsive
  let isMobile;
  let isTablet;
  let isDesktop;
  let isHuge;

  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.TABLET_BREAKPOINT}px)`);
    isTablet = useMedia(
      `(min-width: ${UI.MOBILE_BREAKPOINT}px) and  (max-width: ${UI.TABLET_BREAKPOINT}px)`,
    );
    isDesktop = useMedia(`(min-width: ${UI.TABLET_BREAKPOINT}px)`);
    isHuge = useMedia(`(min-width: ${UI.DESKTOP_BREAKPOINT}px)`);
  }

  return { isMobile, isTablet, isDesktop, isHuge };
}
