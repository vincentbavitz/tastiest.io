import { Button, Input, Modal, TastiestBrand } from '@tastiest-io/tastiest-ui';
import { SVG } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { EarlyAccessContext } from 'contexts/invite';
import { useScreenSize } from 'hooks/useScreenSize';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import nookies from 'nookies';
import {
  HomeInformationBook,
  HomeInformationLove,
  HomeInformationPage,
  HomeInformationShare,
} from 'public/assets/page/home';
import { ParsedUrlQuery } from 'querystring';
import React, { FC, useContext, useState } from 'react';
import { LocalEndpoint } from 'types/api';
import HomeHero from '/public/assets/page/home.svg';

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
  // Get user ID from cookie.
  const token = nookies.get(context)?.token;

  // If they're logged in, redirect them to the main site
  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Get the reference email from the URL.
  const positionInLine = 1337;

  return {
    props: {
      positionInLine,
    },
  };
};

const Invite = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const [email, setEmail] = useState<string>(null);
  const [showAccessModal, setShowAccessModal] = useState(false);

  const { submitPreregister } = useContext(EarlyAccessContext);

  return (
    <>
      <Head>
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
          fbq('init', '2772804906283869');
          fbq('track', 'PageView');
          `,
          }}
        />
      </Head>

      <GetAccessModal
        show={showAccessModal}
        close={() => setShowAccessModal(false)}
      />

      <div
        style={{ minHeight: '100vh' }}
        className="relative bg-white text-primary pb-12 font-secondary"
      >
        <div className="absolute top-6 z-50 right-6">
          <Button onClick={() => setShowAccessModal(true)} color="light">
            I have access - let me in
          </Button>
        </div>

        <Contained>
          <div className="flex flex-col space-y-10 items-center text-center pt-20">
            <div>
              <TastiestBrand type="full" size={10} />
              <h2 className="text-xl tracking-wide mt-4 leading-none">
                Exceptional food experiences in London.
              </h2>
              <h4 className="text-base mt-2">
                Partnering only with the best restaurants.
              </h4>
            </div>

            <div style={{ minHeight: '12rem' }} className="relative w-full">
              <Image
                src={HomeHero}
                layout="fill"
                objectFit="contain"
                objectPosition="bottom"
                className="w-full h-full z-10"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <div style={{ minWidth: '16rem' }} className="">
                <Input
                  value={email}
                  onValueChange={setEmail}
                  placeholder="Your best email"
                />
              </div>

              <Button
                onClick={() => submitPreregister(email)}
                color="primary"
                size="medium"
              >
                Get Early Access
              </Button>
            </div>

            <h4>Stop having disappointing experiences.</h4>

            <div
              className={clsx(
                'grid gap-6 grid-rows-1',
                isMobile && 'grid-cols-1',
                isTablet && 'grid-cols-2',
                isDesktop && 'grid-cols-4',
              )}
            >
              <InformationBlock
                label="Know what to expect"
                description="We go to every restaurant on our platform and capture video that represents what they are truly proud of."
                illustration={HomeInformationPage}
              ></InformationBlock>
              <InformationBlock
                label="News from the kitchen"
                description="Follow restaurants where Chefs update you on new dishes, menus and more."
                illustration={HomeInformationShare}
              ></InformationBlock>
              <InformationBlock
                label="Last minute tables"
                description="Grab last-minute tables at the best restaurants in London."
                illustration={HomeInformationLove}
              ></InformationBlock>
              <InformationBlock
                label="Book directly"
                description="Book directly on Tastiest and earn rewards."
                illustration={HomeInformationBook}
              ></InformationBlock>
            </div>
          </div>
        </Contained>
      </div>
    </>
  );
};

interface InformationBlockProps {
  label: string;
  illustration: SVG;
  description: string;
}

const InformationBlock: FC<InformationBlockProps> = props => {
  const { illustration: Illustration, label, description } = props;

  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div
        style={{ maxWidth: '10rem', height: '2.25em' }}
        className="pt-2 text-center leading-none font-medium flex justify-center"
      >
        {label}
      </div>

      <div className="flex justify-center items-center relative w-full h-20">
        <Illustration className="h-full w-full object-contain" />
      </div>

      <div style={{ maxWidth: '10rem' }} className="pt-2 text-sm leading-4">
        {description}
      </div>
    </div>
  );
};

interface GetAccessModalProps {
  show: boolean;
  close: () => void;
}

const GetAccessModal = (props: GetAccessModalProps) => {
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { hasAccess, setHasAccess } = useContext(EarlyAccessContext);

  const getAccess = async () => {
    setError(null);
    setLoading(true);

    const response = await fetch(
      `${LocalEndpoint.VERIFY_HAS_ACCESS}?email=${email}`,
    );

    const body = await response.json();
    setLoading(false);

    if (body.hasAccess && body.email === email) {
      setHasAccess(true);
    } else {
      setError(`You haven't been granted access just yet.`);
    }
  };

  return (
    <Modal {...props}>
      <div
        style={{ minWidth: '300px', maxWidth: '90vw' }}
        className="flex flex-col space-y-3 items-center"
      >
        <h2 className="text-lg font-medium">Enter your early-access email</h2>

        <Input value={email} onValueChange={setEmail} placeholder="Email" />

        <Button loading={loading} onClick={getAccess}>
          Enter
        </Button>

        {error ? (
          <div className="bg-red-200 w-full h-10 text-sm rounded-md flex items-center justify-center">
            {error}
          </div>
        ) : null}
      </div>
    </Modal>
  );
};

Invite.layout = Layouts.BLANK;
export default Invite;
