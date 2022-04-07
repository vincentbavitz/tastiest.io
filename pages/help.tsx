import { LeftOutlined, LoadingOutlined } from '@ant-design/icons';
import { Button, Input, Select } from '@tastiest-io/tastiest-ui';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useSupport } from 'hooks/useSupport';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import React, { useState } from 'react';
import { generateTitle } from 'utils/metadata';
import { UI } from '../constants';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  // Setting a default subject from query parameters
  const initialSubject =
    context?.query?.type === SupportRequestType.ORDER &&
    context?.query?.userFacingOrderId
      ? `Order Issue (Order #${String(
          context?.query?.userFacingOrderId ?? '',
        )})`
      : '';

  const referringUrl = context.req.headers?.referer ?? null;

  // Get user ID from cookie.
  const cookieToken = nookies.get(context)?.token;

  // if (cookieToken) {
  //   const userDataApi = new UserDataApi(firebaseAdmin);
  //   const { userId } = await userDataApi.initFromCookieToken(cookieToken);

  //   if (userId) {
  //     const { details } = await userDataApi.getUserData();

  //     return {
  //       props: {
  //         initialSubject,
  //         userName: details.firstName,
  //         userEmail: details.email,
  //         referringUrl,
  //       },
  //     };
  //   }
  // }

  return {
    props: {
      initialSubject,
      userName: null,
      userEmail: null,
      referringUrl,
    },
  };
};

enum SupportRequestType {
  FEATURE_REQUEST = 'FEATURE_REQUEST',
  GENERAL = 'GENERAL',
  ORDER = 'ORDER',
  BUG = 'BUG',
  OTHER = 'OTHER',
}

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

const Help = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { userName, userEmail, initialSubject, referringUrl } = props;
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

      <Contained maxWidth={900}>
        <div className="w-full bg-white shadow-lg flex justify-center py-10 px-12 my-32 rounded-sm text-lg">
          <span>
            If you need help or you've spotted a bug, please contact us at{' '}
            <a
              href="mailto:support@tastiest.io"
              className="text-secondary hover:underline ml-1"
            >
              support@tastiest.io
            </a>
          </span>
        </div>
      </Contained>

      {/* {sent ? (
        <HelpSuccess
          userName={userName}
          userEmail={userEmail}
          setHasSent={setHasSent}
          referringUrl={referringUrl}
        />
      ) : (
        <HelpForm
          userName={userName}
          userEmail={userEmail}
          initialSubject={initialSubject}
          setHasSent={setHasSent}
        />
      )} */}
    </>
  );
};

interface HelpSubProps {
  userName: string | null;
  userEmail: string | null;
  setHasSent: (value: boolean) => void;
  initialSubject?: string;
  referringUrl?: string;
}

const HelpForm = (props: HelpSubProps) => {
  const { userName, userEmail, setHasSent, initialSubject } = props;

  const router = useRouter();
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  // Update user data
  const { user, isSignedIn } = useAuth();

  const [name, setName] = useState<string>(userName ?? '');
  const [email, setEmail] = useState<string>(userEmail ?? '');

  const initialSupportType =
    SupportRequestType[String(router.query?.type)] ??
    SupportRequestType.GENERAL;

  const [submitting, setSubmitting] = useState(false);

  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');
  const [supportType, setSupportType] = useState<SupportRequestType>(
    initialSupportType,
  );

  const { supportRequests, makeSupportRequest } = useSupport();

  const handleOnSelect = (value: string) => {
    setSubject('');
    setSupportType((value as never) as SupportRequestType);
  };

  const submit = async () => {
    setSubmitting(true);

    const { success, errors } = await makeSupportRequest(
      name,
      email,
      supportType,
      subject,
      message,
      user?.uid,
    );

    setSubmitting(false);

    if (success) {
      setSubject('');
      setMessage('');
      setHasSent(true);
    }
  };

  // prettier-ignore
  const textareaPlaceholder =
    supportType === SupportRequestType.GENERAL         ? 'How can we help you?' :
    supportType === SupportRequestType.ORDER           ? 'Please explain what went wrong with your order' :
    supportType === SupportRequestType.FEATURE_REQUEST ? "Describe the feature you'd like to see" :
    supportType === SupportRequestType.BUG             ? 'Please describe the bug you encountered' :
    supportType === SupportRequestType.OTHER           ? 'Please describe your issue' :
    ''

  return (
    <div>
      <Contained>
        <div className="relative flex justify-center w-full py-20">
          <div>
            <h1 className="text-3xl text-center font-primary text-primary">
              We're here to help.
            </h1>
          </div>
        </div>
      </Contained>

      {isSignedIn === null ? (
        <div className="flex items-center justify-center h-64 pb-24 w-full">
          <LoadingOutlined className="text-6xl text-primary" />
        </div>
      ) : (
        <Contained maxWidth={UI.FORM_WIDTH_PX}>
          <div className="flex flex-col mb-20 space-y-4 md:space-y-4">
            {/* Only request name if the user isn't logged in or hasn't given it yet */}
            {!userName?.length && (
              <Input
                label="Name"
                value={name}
                onValueChange={setName}
                maxLength={120}
              />
            )}

            {!userEmail?.length && (
              <Input
                label="Email"
                value={email}
                onValueChange={setEmail}
                maxLength={120}
              />
            )}

            <div
              className={clsx(
                'flex',
                isDesktop
                  ? 'items-center space-x-4'
                  : 'flex-col items-end space-y-4',
              )}
            >
              <div className="w-64">
                <Select
                  initialSelected={(supportType as never) as string}
                  onSelect={handleOnSelect}
                >
                  {helpOptions.map(option => (
                    <Select.Option
                      id={option.key}
                      key={option.key}
                      value={option.label}
                    />
                  ))}
                </Select>
              </div>

              <div className="w-full">
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
                size={isDesktop ? 'medium' : 'large'}
                wide={isMobile || isTablet}
                loading={submitting}
                disabled={submitting || !subject?.length || !message?.length}
                onClick={submit}
              >
                Send
              </Button>
            </div>
          </div>
        </Contained>
      )}
    </div>
  );
};

const HelpSuccess = ({
  setHasSent,
  userName,
  referringUrl = '/',
}: HelpSubProps) => {
  return (
    <div className="w-full py-32">
      <Contained maxWidth={UI.FORM_WIDTH_PX}>
        <h2 className="text-3xl text-center font-primary text-primary leading-tight">
          Thanks for your request{userName ? `, ${userName}` : null}.
          <br />
        </h2>

        <h3 className="text-lg text-center mt-2">
          We'll get back to you shortly.
        </h3>

        <div className="flex justify-center space-x-4 pt-10">
          <Link href={referringUrl}>
            <a className="no-underline">
              <Button
                size="large"
                color="light"
                onClick={() => null}
                prefix={<LeftOutlined className="" />}
              >
                Back
              </Button>
            </a>
          </Link>

          <Button
            size="large"
            color="secondary"
            onClick={() => setHasSent(false)}
          >
            New Request
          </Button>
        </div>
      </Contained>

      <div className="relative flex flex-col items-center w-full mt-6 mb-12 space-y-4"></div>
    </div>
  );
};

export default Help;
