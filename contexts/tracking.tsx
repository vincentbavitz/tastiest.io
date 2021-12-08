import { renderGoogleAnalyticsSnippet } from 'lib/ganalytics';
import { renderGTMAntiFlickerSnippet, renderGTMSnippet } from 'lib/gtm';
import { renderHotJarSnippet } from 'lib/hotjar';
import { renderSegmentSnippet } from 'lib/segment';
import { renderTawkToSnippet } from 'lib/tawkto';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect } from 'react';

export enum LocalStorageItem {
  HAS_ACCEPTED_COOKIES = 'HAS_ACCEPTED_COOKIES',
}

export const TrackingContext = React.createContext(undefined);

interface TrackingContextParams {
  children: any;
}

// Tracking context for Segment
const TrackingProvider = ({ children }: TrackingContextParams) => {
  const router = useRouter();

  // Manange location changes with Segment
  const handleLocationChange = (url: string) => {
    window?.analytics?.page();
    url;
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleLocationChange);
    return () => router.events.off('routeChangeComplete', handleLocationChange);
  }, [router.events]);

  return (
    <TrackingContext.Provider value={''}>
      {/* Inject Segment */}
      <Script
        id="segment-snippet"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: renderSegmentSnippet() }}
        onLoad={() => {
          // Analytics is automatically opted in. They can leave otherwise.
          window.analytics?.on();
          handleLocationChange(router.route);
        }}
      />

      {/* Inject Google Tag Manager */}
      <Script
        id="gtm-loader-snippet"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
      />
      <Script
        id="gtm-snippet"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: renderGTMSnippet(),
        }}
      />

      {/* Inject Google Tag Manager Anti-Flicker */}
      <Script
        id="gtm-anti-flicker-snippet"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: renderGTMAntiFlickerSnippet(),
        }}
      />

      {/* Inject Google Analytics */}
      <Script
        id="ganalytics-snippet"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: renderGoogleAnalyticsSnippet(),
        }}
      />

      {/* Inject HotJar */}
      <Script
        id="hotjar-snippet"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: renderHotJarSnippet() }}
      />

      {/* Inject TawkTo */}
      {router.pathname.includes('invite') ? null : (
        <Script
          id="tawkto-snippet"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: renderTawkToSnippet() }}
        />
      )}

      {/* Inject Google Optimize */}
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID}`}
      /> */}

      {children}
    </TrackingContext.Provider>
  );
};

export default TrackingProvider;
