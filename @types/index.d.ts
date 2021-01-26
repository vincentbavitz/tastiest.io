import { SegmentAnalytics } from '@segment/analytics.js-core';

declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  export default string;
}

declare global {
  interface Window {
    analytics: SegmentAnalytics.AnalyticsJS;
  }
}
