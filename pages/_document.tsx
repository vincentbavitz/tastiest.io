import * as snippet from '@segment/snippet';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { Favicon } from '../components/Favicon';

export default class CustomDocument extends Document<any> {
  private renderSegmentSnippet() {
    const opts = {
      apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true,
    };

    if (process.env.NODE_ENV === 'development') {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  }

  private renderHotJarSnippet = () => `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:2332749,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Inject Segment */}
          <script
            dangerouslySetInnerHTML={{ __html: this.renderSegmentSnippet() }}
          />

          {/* Inject HotJar */}
          <script
            dangerouslySetInnerHTML={{ __html: this.renderHotJarSnippet() }}
          />

          <Favicon />
          {this.props?.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
