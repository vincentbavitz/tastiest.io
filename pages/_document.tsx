import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { Favicon } from '../components/Favicon';

export default class CustomDocument extends Document<any> {
  private renderSegmentSnippet = () => {
    return `
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware", "user"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY}";analytics.SNIPPET_VERSION="4.13.2";
        analytics.load("${process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY}");
        analytics.page();
        }}();
    `;
  };

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

  private renderTawkToSnippet = () => `
    <!--Start of Tawk.to Script-->
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/60cb997d65b7290ac63685ba/1f9t2cevc';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    <!--End of Tawk.to Script-->
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

          {/* Inject TawkTo */}
          <script
            dangerouslySetInnerHTML={{ __html: this.renderTawkToSnippet() }}
          />

          {/* Inject Google Optimize */}
          <script src="https://www.googleoptimize.com/optimize.js?id=OPT-MNCSH5K"></script>

          {/* Add Optimized Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Marmelad&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
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
