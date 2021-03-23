import BrandSVG from '@svg/brand.svg';
import HeartSVG from '@svg/heart.svg';
import YummySVG from '@svg/logo.svg';
import FacebookSVG from '@svg/socials/facebook.svg';
import InstagramSVG from '@svg/socials/instagram.svg';
import TwitterSVG from '@svg/socials/twitter.svg';
import YouTubeSVG from '@svg/socials/youtube.svg';
import TastiestSVG from '@svg/tastiest.svg';
import { ScreenContext } from 'contexts/screen';
import React, { FC, ReactNode, useContext } from 'react';
import { Contained } from './Contained';

export function Footer() {
  const { isDesktop, isHuge } = useContext(ScreenContext);

  return (
    <div className="py-8 font-normal text-center text-white bg-primary">
      <Contained>
        {isDesktop ? <DesktopFooter isHuge={isHuge} /> : <MobileFooter />}
      </Contained>
    </div>
  );
}

const MobileFooter = () => (
  <div className="flex justify-between">
    <div className="hidden mobile:inline-block">
      <FooterColumn title="Quick Links">
        <div className="space-y-4 text-sm font-normal leading-tight whitespace-nowrap">
          <a className="hover:underline">How It Works</a>
          <a className="hover:underline">Our Mission</a>
          <a href="restaurants.tastiest.io" className="hover:underline">
            Tastiest For Restaurants
          </a>
          <a className="hover:underline">Press Kit</a>
        </div>
      </FooterColumn>
    </div>

    <FooterColumn title="Follow Us">
      <div className="grid grid-cols-2 grid-rows-2 gap-y-2 justify-items-center">
        <SocialsBlock />
      </div>
    </FooterColumn>
  </div>
);

const DesktopFooter = ({ isHuge }: { isHuge: boolean }) => (
  <Contained>
    <div className="flex justify-between">
      <div className="flex justify-start pr-20 space-x-12">
        <FooterColumn title="Quick Links">
          <div className="space-y-4 text-sm font-normal leading-tight">
            <p>
              <a className="cursor-pointer hover:underline">How It Works</a>
            </p>
            <p>
              <a className="cursor-pointer hover:underline">Our Mission</a>
            </p>
            <p>
              <a
                href="restaurants.tastiest.io"
                className="cursor-pointer hover:underline"
              >
                Tastiest For <br />
                Restaurants
              </a>
            </p>
            <p>
              <a className="cursor-pointer hover:underline">Press Kit</a>
            </p>
          </div>
        </FooterColumn>

        <FooterColumn title="Follow Us">
          <div className="grid grid-cols-2 grid-rows-2 gap-y-2 justify-items-center">
            <SocialsBlock />
          </div>
        </FooterColumn>
      </div>

      <div className="flex justify-end flex-grow">
        <div className="flex flex-col items-end justify-between h-full space-y-2 text-right">
          <div className="leading-tight whitespace-nowrap">
            <p className="font-bold">Don't See Your Favourite Restaurant?</p>
            <a href="/" className="text-sm underline">
              Help our sales team sign them
            </a>
          </div>

          <div className="leading-tight">
            <p className="font-bold">Don't See A Key Feature?</p>
            <a href="/" className="text-sm underline">
              Help our product team add it
            </a>
          </div>

          <div className="leading-tight">
            <p className="font-bold">Found a bug?</p>
            <a href="/" className="text-sm underline">
              Help our engineering team fix it
            </a>
          </div>

          {isHuge ? (
            <YummySVG className="h-8 mt-6 fill-current" />
          ) : (
            <BrandSVG className="h-8 mt-6 fill-current" />
          )}
        </div>

        {isHuge && <ThanksForSupportMessage />}
      </div>
    </div>
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

const ThanksForSupportMessage = () => (
  <div className="flex flex-col items-start justify-between w-64 pl-4 ml-4 space-y-4 border-l border-white">
    <p className="text-xl leading-tight text-left">
      THANK YOU FOR
      <br />
      YOUR SUPPORT!
    </p>

    <p className="text-sm tracking-tight text-left">
      We are a small team with big plans. We really appreciate your patience as
      we roll out new restaurants, features, bug fixes, etc.—and would love to
      hear from you. <HeartSVG className="inline h-4 fill-current " />
    </p>

    <TastiestSVG className="h-8 fill-current" />
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
