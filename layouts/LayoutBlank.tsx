import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import { LayoutProps } from './LayoutHandler';

export default function LayoutBlank({
  router,
  pageProps,
  children: Component,
}: LayoutProps) {
  const hanldeOnPixelLoad = () => {
    window.fbq('track', 'PageView');

    if (router.pathname.includes('thank-you')) {
      window.fbq('track', 'Lead');
    }
  };

  return (
    <>
      <Head>
        {/* Invite Facebook Pixel */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2772804906283869');
            `,
          }}
          onLoad={hanldeOnPixelLoad}
        />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-347511954"
        />

        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-347511954');
          `,
          }}
        />

        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('event', 'conversion', {'send_to': 'AW-347511954/U-F6CNLc4P4CEJK52qUB'});
          `,
          }}
        />
      </Head>
      <div id="modal-root" className="absolute"></div>
      <Component {...pageProps} />
    </>
  );
}
