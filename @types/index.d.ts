import { SegmentAnalytics } from '@segment/analytics.js-core';

// Common types
export type SVG = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

declare module '*.svg' {
  const ReactComponent: SVG;
  export { ReactComponent };
  export default string;
}

interface IAnalytics extends SegmentAnalytics.AnalyticsJS {
  on: () => void;
  off: () => void;
}
declare global {
  interface Window {
    analytics: IAnalytics;
  }
}
