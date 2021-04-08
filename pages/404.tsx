import _404 from '@svg/illustrations/404.svg';
import { Button, Input, TextArea } from '@tastiest-io/tastiest-components';
import classNames from 'classnames';
import { useAuth } from 'hooks/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useUserData } from 'hooks/useUserData';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { UI } from '../constants';
import { generateTitle } from '../utils/metadata';

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

  const goBackHomeStyles = {
    width: '9rem',
  };

  const { user, isSignedIn } = useAuth();
  const { userData } = useUserData(user);

  const [email, setEmail] = useState(userData?.details?.email ?? '');
  const [lookingForText, setLookingForText] = useState('');

  const submit = () => {
    null;
  };

  return (
    <div>
      <Head>
        <title>{generateTitle('404')}</title>
      </Head>

      <div style={wrapperStyles} className="flex items-center">
        <div
          className={classNames(
            'flex w-full justify-between',
            !isDesktop && 'flex-col',
          )}
        >
          <div style={absoluteBoxStyles} className="relative flex w-full">
            <_404 style={svgStyles} className="absolute top-0 z-0" />
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

              <Link href="/">
                <div
                  role="button"
                  style={goBackHomeStyles}
                  className={classNames(
                    'bg-secondary',
                    'cursor-pointer',
                    'mt-3',
                    'text-white',
                    'font-somatic',
                    'px-3',
                    'py-1',
                    'w-32',
                    'select-none',
                    'rounded-lg',
                    'text-center',
                    'tracking-tight',
                    !isDesktop ? 'text-lg' : 'text-sm',
                  )}
                >
                  Discover food
                </div>
              </Link>
            </div>
          </div>

          <div
            style={{ minWidth: '250px' }}
            className={classNames(
              'z-10 flex items-start',
              !isDesktop ? '-mt-10' : 'mt-0',
            )}
          >
            <div className="z-50 flex-col flex-grow my-4">
              <h2
                className={classNames(
                  'text-primary leading-tight ml-1 mb-4 font-somatic mt-6 text-2xl whitespace-no-wrap',
                )}
              >
                Something went wrong?
              </h2>

              <div className="flex flex-col space-y-3">
                <TextArea
                  value={lookingForText}
                  onValueChange={setLookingForText}
                  rows={5}
                  maxLength={UI.USER_QUERY_404_MAX_LEN}
                  placeholder="Let us know what you were looking for and we'll get back to you soon."
                />

                {!isSignedIn && (
                  <Input
                    value={email}
                    onValueChange={setEmail}
                    placeholder="Email Address"
                  />
                )}

                <Button onClick={submit}>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tastiest404;
