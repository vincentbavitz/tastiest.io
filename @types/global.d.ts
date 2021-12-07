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
    dataLayer: any;
  }
}
