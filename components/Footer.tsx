import {
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@tastiest-io/tastiest-icons';
import { TastiestBrand } from '@tastiest-io/tastiest-ui';
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
    <div className="py-4 font-normal text-center text-white sm:py-8 bg-dark">
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
      {!isTablet && (
        <div className="flex w-full pt-4 justify-center">
          <TastiestBrand size={10} type="initial-ring" />
        </div>
      )}

      <div className="flex flex-col w-full pt-4 mt-6 space-x-0 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">
        <div className="flex-1">
          <p className="mb-3 text-lg font-medium uppercase border-b border-white opacity-75 text-secondary whitespace-nowrap">
            Quick Links
          </p>

          <div className="grid grid-cols-2 pb-4 text-sm leading-none place-items-center gap-y-4 justify-items-stretch">
            <QuickLinksBlock />
          </div>
        </div>

        <div className="flex-1">
          <p className="mb-3 text-lg font-medium uppercase border-b border-white opacity-75 text-secondary whitespace-nowrap">
            Follow Us
          </p>

          <div className="flex justify-center space-x-6 sm:justify-between">
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

          <div className="flex justify-center pt-4">
            <TastiestBrand size={10} type="initial-ring" />
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
        <div className="grid grid-cols-2 gap-3 text-sm font-normal leading-tight">
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

    <TastiestBrand type="full" theme="dark" size={10} />
  </div>
);

const HugeFooter = () => (
  <div className="flex justify-between mt-6">
    <div className="flex justify-start pr-20 space-x-12">
      <FooterColumn title="Quick Links">
        <div className="grid grid-cols-2 pb-4 text-sm leading-none place-items-center gap-y-4 gap-x-6 justify-items-stretch">
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

        <TastiestBrand type="initial-ring" />
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
  <div className="flex flex-col text-left text-light">
    <p className="mb-3 text-lg font-medium uppercase text-secondary whitespace-nowrap">
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
      'flex flex-col items-center space-y-2 md:space-y-4 md:justify-between md:items-start md:border-white',
      wide ? 'w-full' : 'w-64',
    )}
  >
    <p className="text-xl leading-none tracking-wide text-center text-secondary md:text-left">
      THANK YOU FOR
      {!wide && <br />}
      YOUR SUPPORT!
    </p>

    <p className="text-sm tracking-tight text-center md:text-left">
      We are a small team with big plans. We really appreciate your patience as
      we roll out new restaurants, features, bug fixes, etc.—and would love to
      hear from you. <HeartIcon className="hidden h-4 fill-current md:inline" />
    </p>

    <HeartIcon className="block h-6 fill-current md:hidden" />

    {withLogo && (
      <div className="pb-1">
        <TastiestBrand theme="dark" type="full" />
      </div>
    )}
  </div>
);

const SocialsBlock = () => (
  <>
    <a href="https://instagram.com/tastiestio" target="_blank" rel="noreferrer">
      <InstagramIcon className="w-10 h-10 duration-300 cursor-pointer fill-current hover:brightness-125 filter text-secondary" />
    </a>
    <a href="https://facebook.com/tastiestio" target="_blank" rel="noreferrer">
      <FacebookIcon className="w-10 h-10 duration-300 cursor-pointer fill-current text-secondary hover:brightness-125 filter" />
    </a>
    <a href="https://twitter.com/tastiestio" target="_blank" rel="noreferrer">
      <TwitterIcon className="w-10 h-10 duration-300 cursor-pointer fill-current text-secondary hover:brightness-125 filter" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCSK_WmrVPgwxRBrqKbNxLkg"
      target="_blank"
      rel="noreferrer"
    >
      <YoutubeIcon className="w-10 h-10 duration-300 cursor-pointer fill-current text-secondary hover:brightness-125 filter" />
    </a>
  </>
);

const QuickLinksBlock = ({ flat }: { flat?: boolean }) => (
  <>
    <span>
      <a href="https://restaurants.tastiest.io">
        Tastiest For {!flat && <br />} Restaurants
      </a>
    </span>
    {/* <p>
      <Link href="/how-it-works">
        <a>How It Works</a>
      </Link>
    </p> */}
    <span>
      <Link href="/privacy">
        <a>Privacy & Cookies</a>
      </Link>
    </span>
    <span>
      <Link href="/terms-of-use">
        <a>Terms of Use</a>
      </Link>
    </span>
    <span>
      <Link href="/terms-of-sale">
        <a>Terms of Sale</a>
      </Link>
    </span>
    <span>
      <Link href="https://affiliate-program.tastiest.io/influencers">
        <a>Influencers Program</a>
      </Link>
    </span>
    <span>
      <Link href="https://affiliate-program.tastiest.io/">
        <a>Affiliate Program</a>
      </Link>
    </span>
  </>
);

const ImprovementPrompts = () => (
  <>
    <div className="leading-tight whitespace-nowrap">
      <p className="text-secondary font-medium">
        Don't See Your Favourite Restaurant?
      </p>
      <Link href={`/help?type=${SupportRequestType.GENERAL}`}>
        <a className="text-sm opacity-75 hover:underline">
          Help our sales team sign them
        </a>
      </Link>
    </div>

    <div className="leading-tight">
      <p className="text-secondary font-medium">Don't See A Key Feature?</p>
      <Link href={`/help?type=${SupportRequestType.FEATURE_REQUEST}`}>
        <a className="text-sm opacity-75 hover:underline">
          Help our product team add it
        </a>
      </Link>
    </div>

    <div className="leading-tight">
      <p className="text-secondary font-medium">Found a bug?</p>
      <Link href={`/help?type=${SupportRequestType.BUG}`}>
        <a className="text-sm opacity-75 hover:underline">
          Help our engineering team fix it
        </a>
      </Link>
    </div>
  </>
);
