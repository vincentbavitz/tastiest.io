import Favicon from 'components/Favicon';
import Fonts from 'components/Fonts';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class CustomDocument extends Document<any> {
  private renderSegmentSnippet = () => {
    return `
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware", "user"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY}";analytics.SNIPPET_VERSION="4.13.2";
        analytics.load("${process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY}");
        analytics.page();
        }}();
    `;
  };

  private renderGoogleAnalyticsSnippet = () => {
    return `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');    
    `;
  };

  private renderGTMAntiFlickerSnippet = () => {
    return `
      (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
      h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
      (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
      })(window,document.documentElement,'async-hide','dataLayer',4000,
      {'${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}':true});
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
      s1.src='https://embed.tawk.to/60cb997d65b7290ac63685ba/1f8dkv4qa';
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
          <script
            src={`https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID}`}
          ></script>

          {/* Google Tag Manager */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
          ></script>

          {/* Google Tag Manager anti-flicker */}
          <script
            dangerouslySetInnerHTML={{
              __html: this.renderGTMAntiFlickerSnippet(),
            }}
          ></script>

          {/* Google Analytics */}
          <script
            dangerouslySetInnerHTML={{
              __html: this.renderGoogleAnalyticsSnippet(),
            }}
          />

          <Fonts />
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
