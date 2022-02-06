import {
  FacebookOutlined,
  LinkOutlined,
  MailOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { Button } from '@tastiest-io/tastiest-ui';
import { FirestoreCollection } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { EarlyAccessContext } from 'contexts/invite';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import { Preregister } from 'pages/api/invite/getPreregister';
import { ParsedUrlQuery } from 'querystring';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import { db } from 'utils/firebaseAdmin';
import { generateTitle } from 'utils/metadata';

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
  if (!context.query.ref) {
    return {
      props: {},
      redirect: {
        destination: '/invite',
      },
    };
  }

  const snapshot = await db('preregisters' as FirestoreCollection)
    .doc(String(context.query.ref))
    .get();

  if (!snapshot.exists) {
    return {
      props: {},
      redirect: {
        destination: '/invite',
      },
    };
  }

  const preregister = { hasAccess: false, ...snapshot.data() } as Preregister;

  const numSignUpsSnapshot = await db('preregisters' as FirestoreCollection)
    .where('referredFrom', '==', String(context.query.ref))
    .get();

  const numSignUps = numSignUpsSnapshot.size;

  const updatedPlaceInLine = Math.max(
    1,
    preregister.position - 10000 * numSignUps,
  );

  return {
    props: { preregister, numSignUps, updatedPlaceInLine },
  };
};

const ThankYou = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { preregister, numSignUps, updatedPlaceInLine } = props;
  const { totalMembers } = useContext(EarlyAccessContext);

  const [copied, setCopied] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();

  const url = useMemo(() => {
    const _url = new URL('https://tastiest.io');
    _url.searchParams.set('ref', preregister.ref);

    return _url;
  }, []);

  const handleCopyToClipboard = () => {
    copyToClipboard(url.toString());
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  // Track as a lead
  useEffect(() => {
    console.log('thank-you ➡️ useEffect tracking lead!');
    try {
      window.fbq('track', 'Lead');
      window.gtag('event', 'conversion', {
        send_to: 'AW-347511954/U-F6CNLc4P4CEJK52qUB',
      });
    } catch {
      null;
    }
  }, []);

  const shareTitle = `Help me get early access to Tastiest, the new platform where you can book exceptional food experiences in London by signing up through my link:`;

  const shareToFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url.toString()}`;
    window?.open(shareUrl, '_blank');
  };

  const shareToWhatsApp = () => {
    const shareUrl = `https://api.whatsapp.com/send?text=${shareTitle} ${url.toString()}`;
    window?.open(shareUrl, '_blank');
  };

  const shareToTwitter = () => {
    const shareUrl = `https://twitter.com/share?url=${url.toString()}&text=${shareTitle}`;
    window?.open(shareUrl, '_blank');
  };

  const shareToEmail = () => {
    const mailToUrl = `mailto:?subject=Referral!%20Tastiest%20-%20Exceptional%20food%20experiences%20in%20London.&body=Use%20my%20referral%20link%20to%20skip%20the%20queue!%0A%0Ahttps%3A%2F%2Fwww.tastiest.io%3Fref%3D${encodeURIComponent(
      preregister.ref,
    )}`;

    window.open(mailToUrl, '_blank');
  };

  return (
    <>
      <Head>
        <title>{generateTitle('Thank-You')}</title>
      </Head>

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tastiest.io/" />
      <meta
        property="og:title"
        content="Tastiest | Exceptional food experiences in London"
      />
      <meta
        property="og:description"
        content="Get early access. Partnering only with the best restaurants. Stop having disappointing experiences."
      />
      <meta
        property="og:image"
        content="https://images.ctfassets.net/tq39z0nxr0bv/5XtpoY1r5sEKItsF04V1oE/72ddac8e61018e2aad21fd094f56d4a2/Meta_img.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tastiest.io/" />
      <meta
        property="twitter:title"
        content="Tastiest | Exceptional food experiences in London"
      />
      <meta
        property="twitter:description"
        content="Get early access. Partnering only with the best restaurants. Stop having disappointing experiences."
      />
      <meta
        property="twitter:image"
        content="https://images.ctfassets.net/tq39z0nxr0bv/5XtpoY1r5sEKItsF04V1oE/72ddac8e61018e2aad21fd094f56d4a2/Meta_img.png"
      />

      <NextSeo
        title="Thank-You | Tastiest | Exceptional food experiences"
        description="Get early access. Partnering only with the best restaurants. Stop having disappointing experiences."
        openGraph={{
          title: 'Thank-You | Tastiest | Exceptional food experiences',
          description:
            'Get early access. Partnering only with the best restaurants. Stop having disappointing experiences.',
          images: [
            {
              url:
                'https://images.ctfassets.net/tq39z0nxr0bv/5XtpoY1r5sEKItsF04V1oE/72ddac8e61018e2aad21fd094f56d4a2/Meta_img.png',
            },
          ],
        }}
      />

      <div
        style={{ minHeight: '100vh' }}
        className="relative bg-light text-primary pt-12 font-secondary flex flex-col justify-between"
      >
        <Contained>
          <div
            style={{ minHeight: '410px' }}
            className="flex flex-col space-y-6 items-center"
          >
            <h1 className="text-4xl font-primary text-dark">
              Thank You<span className="text-primary">.</span>
            </h1>

            <div>
              <h4 className="mb-4 text-lg text-center font-medium">
                Share your link to people you love.
              </h4>

              <p className="text-center">
                You'll jump{' '}
                <span className="font-bold">10,000 places closer</span> for
                <br /> every person that joins.
              </p>
            </div>

            <div className="flex gap-4 text-secondary text-2xl">
              <TwitterOutlined
                onClick={shareToTwitter}
                className="p-1 rounded-full duration-300 hover:ring-2 ring-blue-200"
              />
              <FacebookOutlined
                onClick={shareToFacebook}
                className="p-1 rounded-full duration-300 hover:ring-2 ring-blue-200"
              />
              <WhatsAppOutlined
                onClick={shareToWhatsApp}
                className="p-1 rounded-full duration-300 hover:ring-2 ring-blue-200"
              />
              <MailOutlined
                onClick={shareToEmail}
                className="p-1 rounded-full duration-300 hover:ring-2 ring-blue-200"
              />
            </div>

            <div
              style={{ maxWidth: '80vw', width: '400px' }}
              className="flex flex-wrap border-secondary p-1 border-2 rounded-lg justify-center items-center gap-3"
            >
              <div className="flex-grow items-center pl-2 gap-3 flex justify-center">
                <LinkOutlined className="text-lg" />
                <span className="text-dark text-sm flex-grow font-medium text-center">
                  <span className="font-normal opacity-50">
                    {url.origin}?ref=
                  </span>
                  {url.search.replace('?ref=', '')}
                </span>
              </div>

              <div style={{ minWidth: '6rem' }} className="flex-grow">
                <Button
                  wide
                  color={copied ? 'success' : 'secondary'}
                  onClick={handleCopyToClipboard}
                >
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-10 pt-6 text-dark">
              <section className="text-center">
                <h4 className="text-4xl font-primary">
                  {Intl.NumberFormat().format(
                    updatedPlaceInLine > 200000
                      ? updatedPlaceInLine - 140000
                      : updatedPlaceInLine,
                  )}
                </h4>
                <p>your place in line</p>
              </section>

              {/* <section className="text-center">
                <h4 className="text-4xl font-primary">
                  {Intl.NumberFormat().format(totalMembers + 5)}
                </h4>
                <p>total waitlist members</p>
              </section> */}

              <section className="text-center">
                <h4 className="text-4xl font-primary">{numSignUps}</h4>
                <p>sign-ups from your link</p>
              </section>
            </div>
          </div>
        </Contained>

        <div className="relative mt-12 h-48 z-0">
          <Image
            src={'/assets/illustrations/bridge.svg'}
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

ThankYou.layout = Layouts.INVITE;
export default ThankYou;
