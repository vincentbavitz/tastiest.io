import { LeftOutlined } from '@ant-design/icons';
import { Button, Input } from '@tastiest-io/tastiest-components';
import { dlog, SupportRequestType } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useSupport } from 'hooks/useSupport';
import { useUserData } from 'hooks/useUserData';
import { InferGetServerSidePropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SuggestRestaurantIllustration } from 'public/assets/illustrations';
import { HelpHeroSuccess } from 'public/assets/page';
import React, { useState } from 'react';
import { generateTitle } from 'utils/metadata';
import { UI } from '../constants';

export const getServerSideProps = async context => {
  // Setting a default subject from query parameters
  const initialSubject =
    context?.query?.type ===
    (SupportRequestType.ORDER && context?.query?.userFacingOrderId)
      ? `Order Issue (Order #${String(
          context?.query?.userFacingOrderId ?? '',
        )})`
      : '';

  return {
    props: {
      initialSubject,
    },
  };
};

interface IHelpOption {
  key: SupportRequestType;
  label: string;
}

const helpOptions: IHelpOption[] = [
  { key: SupportRequestType.GENERAL, label: 'General request' },
  { key: SupportRequestType.ORDER, label: 'Help with an order' },
  { key: SupportRequestType.FEATURE_REQUEST, label: 'Suggest a feature' },
  { key: SupportRequestType.BUG, label: 'Report a bug' },
  { key: SupportRequestType.OTHER, label: 'Something else' },
];

const Suggest = ({
  initialSubject,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [sent, setHasSent] = useState(false);
  const pageTitle = 'Reccomend a restaurant & dish';

  return (
    <>
      {' '}
      <NextSeo
        title={pageTitle}
        description=""
        openGraph={{
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: '/assets/seo/page/help-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest Help Hero',
            },
            {
              url: '/assets/seo/page/help-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest Help Hero',
            },
          ],
        }}
      />{' '}
      <Head>
        <title>{generateTitle(pageTitle)}</title>{' '}
      </Head>{' '}
      {sent ? (
        <HelpSuccess setHasSent={setHasSent} />
      ) : (
        <HelpForm initialSubject={initialSubject} setHasSent={setHasSent} />
      )}{' '}
    </>
  );
};

interface HelpSubProps {
  setHasSent: (value: boolean) => void;
  initialSubject?: string;
}

const HelpForm = ({ setHasSent, initialSubject }: HelpSubProps) => {
  const router = useRouter();
  const { isMobile, isTablet } = useScreenSize();

  dlog('help ➡️ initialSubject:', initialSubject); // Update user data

  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);

  const _email = userData?.details?.email;
  const _name = [userData?.details?.firstName, userData?.details?.lastName]
    .join(' ')
    .trim();

  const [name, setName] = useState<string>(_name ?? '');
  const [email, setEmail] = useState<string>(_email ?? '');

  const initialSupportType =
    SupportRequestType[String(router.query?.type)] ??
    SupportRequestType.GENERAL;

  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');
  const [supportType, setSupportType] = useState<SupportRequestType>(
    initialSupportType,
  );

  const { supportRequests, makeSupportRequest } = useSupport();

  const handleOnSelect = (value: SupportRequestType) => {
    setSubject('');
    setSupportType(value);
  };

  const submit = async () => {
    const { success, errors } = await makeSupportRequest(
      name,
      email,
      supportType,
      subject,
      message,
      user?.uid,
    );

    if (success) {
      setSubject('');
      setMessage('');
      setHasSent(true);
    }

    dlog('help ➡️ success:', success);
    dlog('help ➡️ errors:', errors);
  };

  const textareaPlaceholder =
    supportType === SupportRequestType.GENERAL
      ? 'How can we help you?'
      : supportType === SupportRequestType.ORDER
      ? 'Please explain what went wrong with your order'
      : supportType === SupportRequestType.FEATURE_REQUEST
      ? "Describe the feature you'd like to see"
      : supportType === SupportRequestType.BUG
      ? 'Please describe the bug you encountered'
      : supportType === SupportRequestType.OTHER
      ? 'Please describe your issue'
      : '';

  return (
    <div>
      <Contained>
        <div className="relative flex justify-center w-full mt-4">
          <SuggestRestaurantIllustration
            style={{ width: '11rem', marginLeft: '3.5rem' }}
            className=""
          />
          <div
            style={{ marginLeft: '-11.5rem' }}
            className="absolute inset-0 flex items-end justify-center mb-2"
          >
            <h1 className="text-3xl text-center font-primary text-primary">
              Suggest A Dish
            </h1>
          </div>
        </div>
      </Contained>
      <div className="relative flex flex-col items-center w-full mt-4 mb-6 space-y-4"></div>
      <Contained maxWidth={UI.FORM_WIDTH_PX}>
        <div className="flex flex-col mb-10 space-y-4 md:space-y-8">
          {/* Only request name if the user isn't logged in or hasn't given it yet */}
          {!_name?.length && (
            <Input
              label="Your favourite restaurant"
              labelTheme="primary"
              value={name}
              onValueChange={setName}
              maxLength={120}
            />
          )}
          {!_email?.length && (
            <Input
              label="Best dish"
              labelTheme="primary"
              value={email}
              onValueChange={setEmail}
              maxLength={120}
            />
          )}
          <div className="flex items-center space-x-4">
            <Button
              color="primary"
              wide={isMobile || isTablet}
              onClick={submit}
            >
              Submit
            </Button>
            <p className="italic font-light">
              - Get 5% off from. Thank you for improving the platform
            </p>
          </div>
          <div>
            <h2 className="space-x-2 text-3xl text-center font-primary">
              Why?
            </h2>
            <p className="text-center">
              We believe there is a better way to search for food.
            </p>
          </div>
        </div>
      </Contained>
    </div>
  );
};

const HelpSuccess = ({ setHasSent }: HelpSubProps) => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  const heroTranslateX = isMobile ? '3rem' : isTablet ? '8rem' : '0';

  return (
    <div className="w-full pt-6 pb-10 sm:pb-24 sm:pt-16">
      <Contained maxWidth={UI.FORM_WIDTH_PX}>
        <div className="relative flex flex-col-reverse w-full sm:flex-row sm:justify-end">
          <HelpHeroSuccess
            style={{
              width: isMobile ? '20rem' : '33rem',
              transform: `translateX(${heroTranslateX})`,
            }}
          />
          <div // style={{ marginLeft: '-15.5rem' }}
            className="flex flex-col items-center justify-center w-full mb-10 space-y-4 sm:mb-10 sm:absolute sm:inset-0 sm:w-7/12 md:w-5/12"
          >
            <h2 className="text-3xl text-center font-primary text-primary">
              Thank you for <br />
              your suggestion... <br />
              use code "5OFF" <br />
              for 5% off your first order at checkout.
            </h2>
            <div>
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <a>
                    <Button
                      color="primary"
                      onClick={() => null}
                      prefix={
                        <LeftOutlined className="text-white fill-current" />
                      }
                    >
                      Back
                    </Button>
                  </a>
                </Link>
                <Button color="secondary" onClick={() => setHasSent(false)}>
                  New suggestion
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Contained>
      <div className="relative flex flex-col items-center w-full mt-6 mb-12 space-y-4"></div>
    </div>
  );
};

export default Suggest;
