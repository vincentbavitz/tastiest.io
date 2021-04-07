import BrandSVG from '@svg/brand.svg';
import HeartSVG from '@svg/icons/heart.svg';
import YummySVG from '@svg/logo.svg';
import FacebookSVG from '@svg/socials/facebook.svg';
import InstagramSVG from '@svg/socials/instagram.svg';
import TwitterSVG from '@svg/socials/twitter.svg';
import YouTubeSVG from '@svg/socials/youtube.svg';
import TastiestSVG from '@svg/tastiest.svg';
import { SupportRequestType } from '@tastiest-io/tastiest-utils';
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
      <BrandSVG className="h-8 mt-6 fill-current" />

      <div className="flex flex-col w-full pt-4 mt-6 space-x-0 space-y-4 mobile:space-y-0 mobile:flex-row mobile:space-x-6">
        <div className="flex-1">
          <p className="mb-3 text-lg font-medium uppercase border-b border-white opacity-75 whitespace-nowrap">
            Quick Links
          </p>

          <div className="grid grid-cols-2 pb-4 gap-y-4 justify-items-stretch">
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

      <div className="flex justify-center w-full pt-6">
        <ThanksForSupportMessage withLogo={isTablet} />
      </div>

      <div className="flex flex-col space-y-2">
        <ImprovementPrompts />
      </div>
    </div>
  );
};

const DesktopFooter = () => (
  <Contained>
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

      <BrandSVG className="h-8 mt-4 fill-current" />
    </div>
  </Contained>
);

const HugeFooter = () => (
  <Contained>
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

          <YummySVG className="h-8 mt-6 fill-current" />
        </div>

        <ThanksForSupportMessage withLogo />
      </div>
    </div>
  </Contained>
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

const ThanksForSupportMessage = ({ withLogo }: { withLogo?: boolean }) => (
  <div className="flex flex-col items-center w-64 space-y-2 tablet:space-y-4 tablet:justify-between tablet:items-start tablet:pl-4 tablet:ml-4 tablet:border-l tablet:border-white">
    <p className="text-xl leading-tight tracking-wide text-center tablet:text-left">
      THANK YOU FOR
      <br />
      YOUR SUPPORT!
    </p>

    <p className="text-sm tracking-tight text-center tablet:text-left">
      We are a small team with big plans. We really appreciate your patience as
      we roll out new restaurants, features, bug fixes, etc.—and would love to
      hear from you.{' '}
      <HeartSVG className="hidden h-4 fill-current tablet:inline" />
    </p>

    <HeartSVG className="block h-6 fill-current tablet:hidden" />

    {withLogo && <TastiestSVG className="h-8 fill-current" />}
  </div>
);

const SocialsBlock = () => (
  <>
    <InstagramSVG className="w-10 h-10 cursor-pointer" />
    <FacebookSVG className="w-10 h-10 cursor-pointer" />
    <TwitterSVG className="w-10 h-10 cursor-pointer" />
    <YouTubeSVG className="w-10 h-10 cursor-pointer" />
  </>
);

const QuickLinksBlock = ({ flat }: { flat?: boolean }) => (
  <>
    <p>
      <a className="cursor-pointer hover:underline">How It Works</a>
    </p>
    <p>
      <a className="cursor-pointer hover:underline">Our Mission</a>
    </p>
    <p>
      <a className="cursor-pointer hover:underline">Press Kit</a>
    </p>
    <p>
      <a
        href="restaurants.tastiest.io"
        className="cursor-pointer hover:underline"
      >
        Tastiest For {!flat && <br />} Restaurants
      </a>
    </p>
  </>
);

const ImprovementPrompts = () => (
  <>
    <div className="leading-tight whitespace-nowrap">
      <p className="font-bold">Don't See Your Favourite Restaurant?</p>
      <Link href={`/help?type=${SupportRequestType.GENERAL}`}>
        <a className="text-sm underline">Help our sales team sign them</a>
      </Link>
    </div>

    <div className="leading-tight">
      <p className="font-bold">Don't See A Key Feature?</p>
      <Link href={`/help?type=${SupportRequestType.FEATURE_REQUEST}`}>
        <a className="text-sm underline">Help our product team add it</a>
      </Link>
    </div>

    <div className="leading-tight">
      <p className="font-bold">Found a bug?</p>
      <Link href={`/help?type=${SupportRequestType.BUG}`}>
        <a className="text-sm underline">Help our engineering team fix it</a>
      </Link>
    </div>
  </>
);
