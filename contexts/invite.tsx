import { dlog, postFetch } from '@tastiest-io/tastiest-utils';
import { NextRouter } from 'next/router';
import { SubmitToZapierParams } from 'pages/api/invite/submitToZapier';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useLocalStorage } from 'react-use';
import { LocalEndpoint } from 'types/api';

const WAITING_LIST_INITIAL_SIZE = 108730;
const WAITING_LIST_DAY_MULTIPLER = 0.01;
const STARTING_DATE_TIMESTAMP = 1634918428516;
const MS_IN_DAY = 1000 * 60 * 60 * 24;

// Continuous compounding interest calcualtion
const continuousCompound = function (P, r, t) {
  return P * Math.exp(r * t);
};

export interface EarlyAccessParams {
  email: string | null;
  hasAccess: boolean;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setHasAccess: Dispatch<SetStateAction<boolean>>;
  referrer: string | null;

  submitPreregister: (email: string) => void;

  // utmMedium: string | null;
  // utmSource: string | null;
  // utmCampaign: string | null;
  // pageVariant: string | null;
  // ip: string | null;
}

// {
//   "email": "tester33@bavitz.org",
//   "ref": "tester",
//   "utm_medium": "test_medium",
//   "utm_source": "test_source",
//   "page_variant": "test_variant",
//   "utm_campaign": "test_campaign",
//   "ip": "test-ip"
//  }

export const EarlyAccessContext = React.createContext(undefined);

interface EarlyAccessProviderParams {
  router: NextRouter;
  children: any;
}

export const EarlyAccessProvider = (params: EarlyAccessProviderParams) => {
  const { router, children } = params;
  const firebase = useFirebase();

  const getIP = async () => {
    const _ip = await fetch('https://www.cloudflare.com/cdn-cgi/trace').then(
      response =>
        response.text().then(data => {
          const ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
          return data.match(ipRegex)[0];
        }),
    );

    setIp(_ip);
  };

  // Set IP on first initialization
  useEffect(() => {
    getIP();
  }, []);

  const [email, setEmail] = useState<string | null>(null);
  const [hasAccess, setHasAccess] = useLocalStorage('hasAccessLocal', false);

  const [referrer, setReferrer] = useLocalStorage(
    'referrer',
    router.query.ref ? String(router.query.ref) : null,
  );

  const [utmMedium, setUtmMedium] = useLocalStorage(
    'utmMedium',
    router.query.utm_medium ? String(router.query.utm_medium) : null,
  );

  const [utmSource, setUtmSource] = useLocalStorage(
    'utmSource',
    router.query.utm_source ? String(router.query.utm_source) : null,
  );

  const [utmCampaign, setUtmCampaign] = useLocalStorage(
    'utmCampaign',
    router.query.utm_campaign ? String(router.query.utm_campaign) : null,
  );

  const [pageVariant, setPageVariant] = useLocalStorage('pageVariant', 'a');
  const [ip, setIp] = useLocalStorage<string>('ip');

  // When query params update, sync
  useEffect(() => {
    setUtmMedium(
      router.query.utm_medium ? String(router.query.utm_medium) : null,
    );
    setUtmSource(
      router.query.utm_source ? String(router.query.utm_source) : null,
    );
    setUtmCampaign(
      router.query.utm_campaign ? String(router.query.utm_campaign) : null,
    );
    setReferrer(router.query.ref ? String(router.query.ref) : null);
  }, [router.query]);

  // Redirect if they're not verified
  useEffect(() => {
    if (hasAccess) {
      router.push('/');
    }

    const newEndpoint = router.pathname.includes('invite/thank-you')
      ? `/invite/thank-you${window.location.search}`
      : `/invite${window.location.search}`;

    if (!hasAccess) {
      router.push(newEndpoint);
    }
  }, [hasAccess]);

  const calculatePosition = () => {
    const daysSinceLaunch = (Date.now() - STARTING_DATE_TIMESTAMP) / MS_IN_DAY;
    const position = continuousCompound(
      WAITING_LIST_INITIAL_SIZE,
      WAITING_LIST_DAY_MULTIPLER,
      daysSinceLaunch,
    );

    return Math.ceil(position);
  };

  const submitPreregister = async (_email: string) => {
    dlog('submitPreregister ➡️ started');

    const emailPrefix = _email?.split('@')?.[0];

    // Do we already exist in Firestore?
    const existing = await firebase
      .firestore()
      .collection('preregisters')
      .doc(emailPrefix)
      .get();

    // Take to thank-you page if already exists.
    if (existing.exists) {
      router.push('/invite/thank-you');
      return;
    }

    // Add pre-register to Firestore
    if (emailPrefix?.length) {
      dlog('submitPreregister ➡️ Adding to Firestore');

      firebase.firestore().collection('preregisters').doc(emailPrefix).set({
        email: _email,
        position: calculatePosition(),
        ref: emailPrefix,
        referredFrom: referrer,
      });
    }

    // Send event to Zapier.
    await postFetch<SubmitToZapierParams>(LocalEndpoint.SUBMIT_TO_ZAPIER, {
      email: _email,
      utm_medium: utmMedium,
      utm_source: utmSource,
      utm_campaign: utmCampaign,
      page_variant: pageVariant,
      referrer,
      ip,
    });
  };

  const value: EarlyAccessParams = {
    email,
    setEmail,
    referrer,
    hasAccess,
    setHasAccess,
    submitPreregister,
  };

  const onInvitePage = router.pathname.includes('invite');

  dlog('invite ➡️ router.query:', router.query);
  dlog('invite ➡️ onInvitePage:', onInvitePage);
  dlog('invite ➡️ hasAccess:', hasAccess);

  if (!hasAccess && !onInvitePage) {
    return null;
  }

  return (
    <EarlyAccessContext.Provider value={value}>
      {children}

      {/* <!-- Global site tag (gtag.js) - Google Ads: 347511954 --> */}
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
      />

      {/* <!-- Facebook Pixel Code --> */}
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
          fbq('init', '648520482471491');
          fbq('track', 'PageView');
          `,
        }}
      />

      {/* Klaviyo */}
      <script
        async
        type="text/javascript"
        src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=VRnHJC"
      ></script>
    </EarlyAccessContext.Provider>
  );
};
