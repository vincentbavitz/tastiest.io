import Script from 'next/script';
import React from 'react';
import { LayoutProps } from './LayoutHandler';

export default function LayoutInvite({
  router,
  pageProps,
  children: Component,
}: LayoutProps) {
  return (
    <>
      {/* Invite Facebook Pixel */}
      <Script
        id="invite-pixel-snippet"
        strategy="beforeInteractive"
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
            fbq('track', 'PageView');
            `,
        }}
      />

      <Script
        id="invite-gtm-snippet"
        strategy="beforeInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-347511954"
      />

      <Script
        id="invite-gtm-config-snippet"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-347511954');
          `,
        }}
      />

      <div id="modal-root" className="absolute"></div>
      <Component {...pageProps} />
    </>
  );
}
