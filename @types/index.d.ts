import { SegmentAnalytics } from '@segment/analytics.js-core';

declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
