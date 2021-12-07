/* eslint-disable jsx-a11y/iframe-has-title */
import Favicon from 'components/Favicon';
import Fonts from 'components/Fonts';
import { GTM_ID } from 'lib/gtm';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class CustomDocument extends Document<any> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Fonts />
          <Favicon />
          {this.props?.styleTags}
        </Head>

        <body>
          {/* Google Tag Manager NoScript*/}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
