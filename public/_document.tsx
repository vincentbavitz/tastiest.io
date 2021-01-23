import * as snippet from '@segment/snippet';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { Favicon } from '../components/Favicon';

export default class CustomDocument extends Document<any> {
  private renderSnippet() {
    const opts = {
      apiKey: process.env.ANALYTICS_WRITE_KEY,
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true,
    };

    if (process.env.NODE_ENV === 'development') {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Inject the Segment snippet into the <head> of the document  */}
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />

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
