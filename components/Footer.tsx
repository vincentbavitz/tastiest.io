import {
  BrandIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  LogoIcon,
  TastiestIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@tastiest-io/tastiest-icons';
import { SupportRequestType } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, ReactNode } from 'react';
import { Contained } from './Contained';

export function Footer() {
  const { isDesktop, isHuge } = useScreenSize();
  const router = useRouter();
  const isCheckout = /^\/checkout/.test(router.pathname);

  if (isCheckout) return <CheckoutFooter />;

  return (
    <div className="py-4 font-normal text-center text-white mobile:py-8 bg-primary">
      <Contained>
        {!isDesktop && <MobileFooter />}
        {isDesktop && !isHuge && <DesktopFooter />}
        {isHuge && <HugeFooter />}
      </Contained>
    </div>
  );
}

const MobileFooter = () => {
  const { isTablet } = useScreenSize();

  return (
    <div className="flex flex-col pb-10 space-y-6">
      {!isTablet && <BrandIcon className="h-8 mt-6 fill-current" />}

      <div className="flex flex-col w-full pt-4 mt-6 space-x-0 space-y-4 mobile:space-y-0 mobile:flex-row mobile:space-x-6">
        <div className="flex-1">
          <p className="mb-3 text-lg font-medium uppercase border-b border-white opacity-75 whitespace-nowrap">
            Quick Links
          </p>

          <div className="grid grid-cols-2 pb-4 text-sm leading-none place-items-center gap-y-4 justify-items-stretch">
            <QuickLinksBlock />
          </div>
        </div>

        <div className="flex-1">
          <p className="mb-3 text-lg font-medium uppercase border-b border-white opacity-75 whitespace-nowrap">
            Follow Us
          </p>

          <div className="flex justify-center space-x-6 mobile:justify-between">
            <SocialsBlock />
          </div>
        </div>
      </div>

      {isTablet ? (
        <>
          <div className="flex justify-center w-full pt-6 pb-6 border-b border-white border-opacity-25">
            <ThanksForSupportMessage wide />
          </div>

          <div className="flex flex-col space-y-4 text-sm text-gray-100">
            <ImprovementPrompts />
          </div>

          <div className="flex justify-center pt-2">
            <BrandIcon className="h-8 text-white fill-current" />
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center w-full pt-6">
            <ThanksForSupportMessage />
          </div>

          <div className="flex flex-col space-y-2">
            <ImprovementPrompts />
          </div>
        </>
      )}
    </div>
  );
};

const DesktopFooter = () => (
  <div className="flex flex-col my-6 space-y-10">
    <div className="flex justify-between w-full">
      <FooterColumn title="Quick Links">
        <div className="grid grid-cols-2 text-sm font-normal leading-tight children:pr-4 children:pb-2">
          <QuickLinksBlock flat />
        </div>
      </FooterColumn>

      <FooterColumn title="Follow Us">
        <div className="flex space-x-4">
          <SocialsBlock />
        </div>
      </FooterColumn>
    </div>

    <div className="flex items-center justify-between flex-grow pt-10 space-x-10 border-t border-white border-opacity-25">
      <ThanksForSupportMessage />

      <div className="flex flex-col items-end justify-between h-full space-y-4 text-right">
        <ImprovementPrompts />
      </div>
    </div>

    <BrandIcon className="h-8 mt-4 fill-current" />
  </div>
);

const HugeFooter = () => (
  <div className="flex justify-between mt-6">
    <div className="flex justify-start pr-20 space-x-12">
      <FooterColumn title="Quick Links">
        <div className="space-y-4 text-sm font-normal leading-tight">
          <QuickLinksBlock />
        </div>
      </FooterColumn>

      <FooterColumn title="Follow Us">
        <div className="grid grid-cols-2 grid-rows-2 gap-y-2 justify-items-center">
          <SocialsBlock />
        </div>
      </FooterColumn>
    </div>

    <div className="flex justify-end flex-grow">
      <div className="flex flex-col items-end justify-between h-full pr-4 mr-4 space-y-4 text-right border-r">
        <ImprovementPrompts />

        <LogoIcon className="h-8 mt-6 fill-current" />
      </div>

      <ThanksForSupportMessage withLogo />
    </div>
  </div>
);

const CheckoutFooter = () => (
  <Contained>
    <></>
  </Contained>
);

interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

const FooterColumn: FC<FooterColumnProps> = ({ title, children }) => (
  <div className="flex flex-col text-left">
    <p className="mb-3 text-lg font-medium uppercase whitespace-nowrap">
      {title}
    </p>
    {children}
  </div>
);

const ThanksForSupportMessage = ({
  withLogo,
  wide,
}: {
  withLogo?: boolean;
  wide?: boolean;
}) => (
  <div
    className={clsx(
      'flex flex-col items-center space-y-2 tablet:space-y-4 tablet:justify-between tablet:items-start tablet:border-white',
      wide ? 'w-full' : 'w-64',
    )}
  >
    <p className="text-xl leading-tight tracking-wide text-center tablet:text-left">
      THANK YOU FOR
      {!wide && <br />}
      YOUR SUPPORT!
    </p>

    <p className="text-sm tracking-tight text-center tablet:text-left">
      We are a small team with big plans. We really appreciate your patience as
      we roll out new restaurants, features, bug fixes, etc.—and would love to
      hear from you.{' '}
      <HeartIcon className="hidden h-4 fill-current tablet:inline" />
    </p>

    <HeartIcon className="block h-6 fill-current tablet:hidden" />

    {withLogo && <TastiestIcon className="h-8 fill-current" />}
  </div>
);

const SocialsBlock = () => (
  <>
    <a href="https://instagram.com/tastiestio" target="_blank" rel="noreferrer">
      <InstagramIcon className="w-10 h-10 cursor-pointer" />
    </a>
    <a href="https://facebook.com/tastiestio" target="_blank" rel="noreferrer">
      <FacebookIcon className="w-10 h-10 cursor-pointer" />
    </a>
    <a href="https://twitter.com/tastiestio" target="_blank" rel="noreferrer">
      <TwitterIcon className="w-10 h-10 cursor-pointer" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCSK_WmrVPgwxRBrqKbNxLkg"
      target="_blank"
      rel="noreferrer"
    >
      <YoutubeIcon className="w-10 h-10 cursor-pointer" />
    </a>
  </>
);

const QuickLinksBlock = ({ flat }: { flat?: boolean }) => (
  <>
    <p>
      <a href="restaurants.tastiest.io">
        Tastiest For {!flat && <br />} Restaurants
      </a>
    </p>
    <p>
      <Link href="/how-it-works">
        <a>How It Works</a>
      </Link>
    </p>
    {/* <p><a className="">Our Mission</a></p> */}
    {/* <p><a className="">Press Kit</a></p> */}
    <p>
      <Link href="/privacy">
        <a>Privacy & Cookies</a>
      </Link>
    </p>
    <p>
      <Link href="/terms-of-use">
        <a>Terms of Use</a>
      </Link>
    </p>
    <p>
      <Link href="/terms-of-sale">
        <a>Terms of Sale</a>
      </Link>
    </p>
  </>
);

const ImprovementPrompts = () => (
  <>
    <div className="leading-tight whitespace-nowrap">
      <p className="">Don't See Your Favourite Restaurant?</p>
      <Link href={`/help?type=${SupportRequestType.GENERAL}`}>
        <a className="text-xs underline">Help our sales team sign them</a>
      </Link>
    </div>

    <div className="leading-tight">
      <p className="">Don't See A Key Feature?</p>
      <Link href={`/help?type=${SupportRequestType.FEATURE_REQUEST}`}>
        <a className="text-xs underline">Help our product team add it</a>
      </Link>
    </div>

    <div className="leading-tight">
      <p className="">Found a bug?</p>
      <Link href={`/help?type=${SupportRequestType.BUG}`}>
        <a className="text-xs underline">Help our engineering team fix it</a>
      </Link>
    </div>
  </>
);
