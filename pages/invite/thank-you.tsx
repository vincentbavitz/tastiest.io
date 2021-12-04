import { Contained } from 'components/Contained';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
  return {
    props: {},
  };
};

const ThankYou = () => {
  return (
    <>
      <Head>
        {/* Facebook Pixel on Thank-You Submission */}

        <script
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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-347511954"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-347511954');
            `,
          }}
        ></script>
      </Head>

      <div
        style={{ minHeight: '100vh' }}
        className="relative bg-white text-primary pb-12 font-secondary"
      >
        <Contained>
          <div className="flex flex-col space-y-10 mt-12 justify-center">
            <h1 className="text-2xl font-primary">
              Thank You<span className="text-primary">.</span>
            </h1>
          </div>
        </Contained>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          gtag('event', 'conversion', {'send_to': 'AW-347511954/U-F6CNLc4P4CEJK52qUB'});
          `,
        }}
      />
    </>
  );
};

ThankYou.layout = Layouts.BLANK;
export default ThankYou;
