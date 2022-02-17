import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input, TextArea } from '@tastiest-io/tastiest-ui';
import { dlog, UserQueryType } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import { Contained } from 'components/Contained';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useSupport } from 'hooks/useSupport';
import Head from 'next/head';
import Link from 'next/link';
import { Page404Hero } from 'public/assets/page';
import React, { useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { REGEX, UI } from '../constants';
import { generateTitle } from '../utils/metadata';

type FormData = {
  email: string;
  lookingForMessage: string;
};

function Tastiest404() {
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  // const wrapperStyles = {
  //   width: '100%',
  //   maxWidth: '760px',
  //   margin: isDesktop ? '50px auto 100px' : '-10px auto',
  //   paddingLeft: isHuge ? '0' : '5vw',
  //   paddingRight: isHuge ? '0' : '5vw',
  //   paddingBottom: !isDesktop ? '33px' : '0px',
  // };

  // const svgStyles = {
  //   top: isDesktop ? '125px' : isTablet ? '20px' : '85px',
  //   left: isDesktop ? '-50px' : isTablet ? '30vw' : '-65px',
  //   width: isDesktop ? '810px' : isTablet ? '833px' : '933px',
  // };

  // const _404SectionStyles = {
  //   top: isDesktop ? '45px' : isTablet ? '35px' : '25px',
  // };

  const _404TitleStyles = {
    lineHeight: '0px',
    paddingTop: '2.3rem',
    paddingBottom: '3.3rem',
  };

  // const absoluteBoxStyles = {
  //   marginTop: isTablet ? '20px' : '0px',
  //   minHeight: isTablet ? '330px' : '450px',
  // };

  const { user, isSignedIn } = useAuth();
  const [requestRecieved, setRequestRecieved] = useState(false);
  const { makeGeneralQuery, isSubmitting } = useSupport();

  const [sending, setSending] = useState(false);

  const submit = async ({
    email = user?.email ?? '',
    lookingForMessage,
  }: FormData) => {
    if (requestRecieved) {
      return;
    }

    setSending(true);

    const { success, errors } = await makeGeneralQuery(
      email,
      lookingForMessage,
      UserQueryType._404_PAGE,
    );

    setSending(false);
    dlog('404 ➡️ error:', errors);

    setRequestRecieved(success);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  const {
    field: { ref: emailRef, ...emailFieldProps },
  } = useController({
    name: 'email',
    defaultValue: user?.email ?? '',
    control,
    rules: {
      required: {
        value: Boolean(user?.email),
        message: 'Please enter your email',
      },
      pattern: {
        value: REGEX.EMAIL,
        message: 'Please enter a valid email',
      },
    },
  });

  const {
    field: { ref: lookingForRef, ...lookingForFieldProps },
  } = useController({
    name: 'lookingForMessage',
    defaultValue: '',
    control,
    rules: {
      required: {
        value: true,
        message: 'What were you looking for?',
      },
      minLength: {
        value: 10,
        message: 'Must be greater than ten characters',
      },
      maxLength: { value: 1000, message: 'Message too long' },
    },
  });

  return (
    <div>
      <Head>
        <title>{generateTitle('Nothing Found')}</title>
      </Head>

      <Contained maxWidth={800}>
        <div className="py-20">
          <div
            className={classNames(
              'flex w-full gap-16 justify-between',
              !isDesktop && 'flex-col',
            )}
          >
            <div className="relative">
              <div style={{ width: '300px' }} className="z-50">
                <h1
                  style={_404TitleStyles}
                  className="-mb-4 text-opacity-25 font-primary text-primary text-7xl"
                >
                  404
                </h1>
                <p className="text-4xl tracking-tight font-primary text-primary">
                  Oops, this page is
                  <br />
                  <span className="text-secondary">eggstinct!</span>
                </p>

                <Link href="/">
                  <a className="no-underline">
                    <div className="w-full pt-3">
                      <Button wide color="secondary">
                        Discover Food
                      </Button>
                    </div>
                  </a>
                </Link>

                <Page404Hero className="w-full py-6" />
              </div>
            </div>

            <div className={classNames('flex items-start w-full')}>
              <div className="mt-14 flex-grow">
                <h2
                  className={classNames(
                    'text-primary leading-tight ml-1 mb-4 font-primary mt-6 text-2xl whitespace-no-wrap',
                  )}
                >
                  {requestRecieved
                    ? 'Thanks for your feedback!'
                    : 'Something went wrong?'}
                </h2>

                {requestRecieved ? (
                  <p className="pt-0 pl-0 md:pt-20 md:pl-10">
                    We use your feedback to help make Tastiest easier to use, so
                    you can get back to finding great food.
                  </p>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <TextArea
                      ref={lookingForRef}
                      rows={5}
                      maxLength={UI.USER_QUERY_404_MAX_LEN}
                      placeholder="Let us know what you were looking for and we'll get back to you soon."
                      {...lookingForFieldProps}
                    />

                    {!isSignedIn && (
                      <Input
                        ref={emailRef}
                        {...emailFieldProps}
                        error={errors?.email?.message}
                        placeholder="Your email address"
                      />
                    )}

                    <div className="w-20">
                      <Button
                        wide
                        loading={sending}
                        onClick={handleSubmit(submit)}
                      >
                        {isSubmitting ? (
                          <LoadingOutlined className="text-2xl" />
                        ) : (
                          'Send'
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Contained>
    </div>
  );
}

export default Tastiest404;
