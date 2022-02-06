import { SegmentAnalytics } from '@segment/analytics.js-core';

interface IAnalytics extends SegmentAnalytics.AnalyticsJS {
  on: () => void;
  off: () => void;
  user: () => {
    anonymousId: () => string;
  };
}

declare global {
  interface Window {
    analytics: IAnalytics;
    firebase: ExtendedFirebaseInstance;
    dataLayer: any;
    fbq: any;
    gtag: any;
  }
}
