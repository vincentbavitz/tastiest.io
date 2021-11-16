import { LeftOutlined } from '@ant-design/icons';
import { Button, Input, Select } from '@tastiest-io/tastiest-ui';
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
import { HelpHero, HelpHeroSuccess } from 'public/assets/page';
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

const Help = ({
  initialSubject,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [sent, setHasSent] = useState(false);

  return (
    <>
      <Head>
        <title>{generateTitle('Get Help')}</title>
      </Head>

      <NextSeo
        title={generateTitle('Get Help')}
        description="Tastiest Help and Support"
        openGraph={{
          title: 'Tastiest - Help',
          description: 'Help and Support',
          images: [
            {
              url: 'https://tastiest.io/assets/seo/page/help-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest Help Hero',
            },
            {
              url: 'https://tastiest.io//assets/seo/page/help-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest Help Hero',
            },
          ],
        }}
      />

      {sent ? (
        <HelpSuccess setHasSent={setHasSent} />
      ) : (
        <HelpForm initialSubject={initialSubject} setHasSent={setHasSent} />
      )}
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

  dlog('help ➡️ initialSubject:', initialSubject);

  // Update user data
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

  // prettier-ignore
  const textareaPlaceholder = 
    supportType === SupportRequestType.GENERAL ? 'How can we help you?' : 
    supportType === SupportRequestType.ORDER ? 'Please explain what went wrong with your order' : 
    supportType === SupportRequestType.FEATURE_REQUEST ? "Describe the feature you'd like to see" : 
    supportType === SupportRequestType.BUG ? 'Please describe the bug you encountered' : 
    supportType === SupportRequestType.OTHER ? 'Please describe your issue' : 
    ''

  return (
    <div>
      <Contained>
        <div className="relative flex justify-center w-full mt-10">
          <HelpHero style={{ width: '20rem' }} className="" />

          <div
            style={{ marginLeft: '-15.5rem' }}
            className="absolute inset-0 flex items-end justify-center mb-10"
          >
            <h1 className="text-3xl text-center font-primary text-primary">
              Help
            </h1>
          </div>
        </div>
      </Contained>

      <div className="relative flex flex-col items-center w-full mt-6 mb-12 space-y-4"></div>

      <Contained maxWidth={UI.FORM_WIDTH_PX}>
        <div className="flex flex-col mb-20 space-y-8 md:space-y-4">
          {/* Only request name if the user isn't logged in or hasn't given it yet */}
          {!_name?.length && (
            <Input
              label="Name"
              value={name}
              onValueChange={setName}
              maxLength={120}
            />
          )}

          {!_email?.length && (
            <Input
              label="Email"
              value={email}
              onValueChange={setEmail}
              maxLength={120}
            />
          )}

          <div className="flex flex-col w-full space-y-2 sm:space-y-0 sm:flex-row sm:items-end sm:space-x-4">
            <div className="w-full sm:w-1/2 md:w-4/12">
              <Select onSelect={handleOnSelect}>
                {helpOptions.map(option => (
                  <Select.Option
                    key={option.key}
                    id={option.key}
                    value={option.label}
                  />
                ))}
              </Select>
            </div>
            <div className="flex-grow">
              {supportType === SupportRequestType.GENERAL && (
                <Input
                  label="What's your request?"
                  value={subject}
                  onValueChange={setSubject}
                  maxLength={80}
                />
              )}

              {supportType === SupportRequestType.ORDER && (
                <Input
                  label="Order #"
                  value={subject}
                  onValueChange={setSubject}
                  maxLength={80}
                />
              )}

              {supportType === SupportRequestType.FEATURE_REQUEST && (
                <Input
                  label="What would you like to see?"
                  value={subject}
                  onValueChange={setSubject}
                  maxLength={80}
                />
              )}

              {supportType === SupportRequestType.BUG && (
                <Input
                  label="What was the bug?"
                  value={subject}
                  onValueChange={setSubject}
                  maxLength={80}
                />
              )}

              {supportType === SupportRequestType.OTHER && (
                <Input
                  label="Please explain your issue"
                  value={subject}
                  onValueChange={setSubject}
                />
              )}
            </div>
          </div>

          <textarea
            className="h-32 px-4 py-2 duration-300 border-2 rounded-md outline-none border-secondary hover:border-primary"
            placeholder={textareaPlaceholder}
            maxLength={500}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />

          <div className="flex items-center space-x-4">
            <Button
              disabled={!subject?.length || !message?.length}
              wide={isMobile || isTablet}
              onClick={submit}
            >
              Send
            </Button>
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

          <div
            // style={{ marginLeft: '-15.5rem' }}
            className="flex flex-col items-center justify-center w-full mb-10 space-y-4 sm:mb-10 sm:absolute sm:inset-0 sm:w-7/12 md:w-5/12"
          >
            <h2 className="text-3xl text-center font-primary text-primary">
              Thank you for
              <br /> your request...
              <br />
              we'll get back
              <br /> to you shortly.
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
                  New Request
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

export default Help;
