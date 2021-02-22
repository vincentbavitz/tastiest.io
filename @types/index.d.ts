declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

interface IAnalytics extends SegmentAnalytics.AnalyticsJS {
  on: () => void;
  off: () => void;
}

declare global {
  interface Window {
    analytics: IAnalytics;
  }
}
