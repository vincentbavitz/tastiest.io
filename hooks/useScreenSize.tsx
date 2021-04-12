import React, { useContext, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { UI } from '../constants';

export interface IScreen {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isHuge: boolean;
  isLoaded: boolean;
}

export const ScreenContext = React.createContext(undefined);

export const ScreenProvider = ({ children }) => {
  const { width } = useWindowSize(-1);

  // Default to mobile view
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHuge, setIsHuge] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const _isMobile = width <= UI.MOBILE_BREAKPOINT;
    const _isTablet =
      width > UI.MOBILE_BREAKPOINT && width <= UI.TABLET_BREAKPOINT;
    const _isDesktop = width > UI.TABLET_BREAKPOINT;
    const _isHuge = width > UI.DESKTOP_BREAKPOINT;

    if (isMobile !== _isMobile) setIsMobile(_isMobile);
    if (isTablet !== _isTablet) setIsTablet(_isTablet);
    if (isDesktop !== _isDesktop) setIsDesktop(_isDesktop);
    if (isHuge !== _isHuge) setIsHuge(_isHuge);

    // Set loaded status
    if (width !== -1) {
      setIsLoaded(true);
    }
  }, [width]);

  const screenParams = {
    isMobile,
    isTablet,
    isDesktop,
    isHuge,
    isLoaded,
    width,
  };

  return (
    <ScreenContext.Provider value={screenParams}>
      {children}
    </ScreenContext.Provider>
  );
};

export function useScreenSize() {
  return useContext(ScreenContext);
}
