import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input, TextArea } from '@tastiest-io/tastiest-components';
import { UserQueryType } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import { useAuth } from 'hooks/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useSupport } from 'hooks/useSupport';
import Head from 'next/head';
import Link from 'next/link';
import { Page404Hero } from 'public/assets/page';
import React, { useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { UI } from '../constants';
import { generateTitle } from '../utils/metadata';

type FormData = {
  email: string;
  lookingForMessage: string;
};

function Tastiest404() {
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  const wrapperStyles = {
    width: '100%',
    maxWidth: '760px',
    margin: isDesktop ? '50px auto 100px' : '-10px auto',
    paddingLeft: isHuge ? '0' : '5vw',
    paddingRight: isHuge ? '0' : '5vw',
    paddingBottom: !isDesktop ? '33px' : '0px',
  };

  const svgStyles = {
    top: isDesktop ? '125px' : isTablet ? '20px' : '85px',
    left: isDesktop ? '-50px' : isTablet ? '30vw' : '-65px',
    width: isDesktop ? '810px' : isTablet ? '833px' : '933px',
  };

  const _404SectionStyles = {
    top: isDesktop ? '45px' : isTablet ? '35px' : '25px',
  };

  const _404TitleStyles = {
    lineHeight: '0px',
    paddingTop: '2.3rem',
    paddingBottom: '3.3rem',
  };

  const _404TextStyles = {
    lineHeight: '1.15em',
  };

  const absoluteBoxStyles = {
    marginTop: isTablet ? '20px' : '0px',
    minHeight: isTablet ? '330px' : '450px',
  };

  const { user, isSignedIn } = useAuth();
  const [requestRecieved, setRequestRecieved] = useState(false);
  const { makeGeneralQuery, isSubmitting } = useSupport();

  const submit = async ({
    email = user?.email ?? '',
    lookingForMessage,
  }: FormData) => {
    if (requestRecieved) {
      return;
    }

    const { success } = await makeGeneralQuery(
      email,
      lookingForMessage,
      UserQueryType._404_PAGE,
    );

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
        value: /^[\w]{1,30}@[\w\-_]{1,30}\.[a-zA-Z]{2,10}(\.[a-zA-Z]{2,10})?$/,
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

      <div style={wrapperStyles} className="flex items-center pb-20">
        <div
          className={classNames(
            'flex w-full justify-between',
            !isDesktop && 'flex-col',
          )}
        >
          <div style={absoluteBoxStyles} className="relative flex w-full">
            <Page404Hero style={svgStyles} className="absolute top-0 z-0" />
            <div style={_404SectionStyles} className="absolute left-0 z-50">
              <h1
                style={_404TitleStyles}
                className="-mb-4 text-opacity-25 font-somatic text-primary text-7xl"
              >
                404
              </h1>
              <p
                style={_404TextStyles}
                className="text-4xl tracking-tight font-somatic text-primary"
              >
                Oops, this
                <br />
                page is
                <br />
                <span className="text-secondary">eggstinct!</span>
              </p>

              <Link href="/search">
                <a>
                  <div className="w-full pt-3">
                    <Button wide color="secondary">
                      Discover Food
                    </Button>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div
            style={{
              minWidth: '250px',
              maxWidth: isDesktop ? '280px' : 'unset',
            }}
            className={classNames(
              'z-10 flex items-start w-full',
              !isDesktop ? '-mt-10' : 'mt-0',
            )}
          >
            <div className="z-50 flex-col flex-grow pt-12 my-4 tablet:pt-0">
              <h2
                className={classNames(
                  'text-primary leading-tight ml-1 mb-4 font-somatic mt-6 text-2xl whitespace-no-wrap',
                )}
              >
                Something went wrong?
              </h2>

              {requestRecieved ? (
                <div className="flex flex-col text-justify">
                  <p className="text-xl font-bold">Thanks for your feedback!</p>
                  <p className="pt-0 pl-0 tablet:pt-20 tablet:pl-10">
                    We use your feedback to help make Tastiest easier to use, so
                    you can get back to finding great food.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col space-y-3">
                  <TextArea
                    ref={lookingForRef}
                    {...lookingForFieldProps}
                    rows={5}
                    maxLength={UI.USER_QUERY_404_MAX_LEN}
                    placeholder="Let us know what you were looking for and we'll get back to you soon."
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
                    <Button wide onClick={handleSubmit(submit)}>
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
    </div>
  );
}

export default Tastiest404;
