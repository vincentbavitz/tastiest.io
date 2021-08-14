import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

type LoaderContextShape = {
  isPageLoading: boolean;
};

// The Loader provider of Tastiest
export const LoaderContext = React.createContext<LoaderContextShape>({
  isPageLoading: true,
});

export const LoaderProvider = ({ children }) => {
  const router = useRouter();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) setIsPageLoading(true);
    };

    const handleComplete = () => {
      setIsPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <LoaderContext.Provider value={{ isPageLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export function usePageLoader() {
  return useContext(LoaderContext);
}
