import { dlog, postFetch } from '@tastiest-io/tastiest-utils';
import { useRouter } from 'next/router';
import { SubmitToZapierParams } from 'pages/api/invite/submitToZapier';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
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

  totalMembers: number;
  submitPreregister: (email: string) => void;
}

export const EarlyAccessContext = React.createContext(undefined);

interface EarlyAccessProviderParams {
  children: any;
}

export const EarlyAccessProvider = ({
  children,
}: EarlyAccessProviderParams) => {
  const router = useRouter();
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

  const calculatePosition = () => {
    const daysSinceLaunch = (Date.now() - STARTING_DATE_TIMESTAMP) / MS_IN_DAY;
    const position = continuousCompound(
      WAITING_LIST_INITIAL_SIZE,
      WAITING_LIST_DAY_MULTIPLER,
      daysSinceLaunch,
    );

    return Math.ceil(position);
  };

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

  const totalMembers = useMemo(calculatePosition, []);

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

    router.push(`/invite/thank-you?ref=${emailPrefix}`);
  };

  const value: EarlyAccessParams = {
    email,
    setEmail,
    referrer,
    hasAccess,
    setHasAccess,
    totalMembers,
    submitPreregister,
  };

  const onInvitePage = router.pathname.includes('invite');

  useEffect(() => {
    dlog('invite ➡️ hasAccess:', hasAccess);
    dlog('invite ➡️ onInvitePage:', onInvitePage);

    if (!hasAccess && !onInvitePage) {
      router.push('/invite');
    }
  }, [router, hasAccess, onInvitePage]);

  if (!hasAccess && !onInvitePage) {
    return null;
  }

  return (
    <EarlyAccessContext.Provider value={value}>
      {children}
    </EarlyAccessContext.Provider>
  );
};
