import React, { useContext, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { UI } from '../constants';

export interface IScreen {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isHuge: boolean;
}

export const ScreenContext = React.createContext(undefined);

export const ScreenProvider = ({ children }) => {
  const { width } = useWindowSize();

  // Default to mobile view
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHuge, setIsHuge] = useState(false);

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
  }, [width]);

  const screenParams = { isMobile, isTablet, isDesktop, isHuge, width };

  return (
    <ScreenContext.Provider value={screenParams}>
      {children}
    </ScreenContext.Provider>
  );
};

export function useScreenSize() {
  return useContext(ScreenContext);
}
