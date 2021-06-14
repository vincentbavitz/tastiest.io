import { SegmentAnalytics } from '@segment/analytics.js-core';

interface IAnalytics extends SegmentAnalytics.AnalyticsJS {
  on: () => void;
  off: () => void;
}

declare global {
  interface Window {
    analytics: IAnalytics;
  }
}
