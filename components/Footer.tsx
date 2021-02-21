import YummySVG from '@svg/logo.svg';
import TastiestSVG from '@svg/tastiest.svg';
import Link from 'next/link';
import React from 'react';
import { Contained } from './Contained';

export function Footer() {
  return (
    <div className="py-6 mt-10 text-center bg-primary">
      <Contained>
        <div className="text-base font-medium text-white font-roboto desktop:text-sm">
          <div className="flex justify-center mt-2 mb-6 cursor-pointer">
            <Link href="/">
              <TastiestSVG className="h-6 fill-white" />
            </Link>
          </div>
          <div className="flex flex-col mt-3">
            <Link href="/">
              <a className="mt-0 mb-1">Home</a>
            </Link>
            <a
              href="https://restaurants.tastiest.io/"
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
              className="mt-0 mb-1"
            >
              Tastiest For Restaurants
            </a>
            <Link href="/about">
              <a className="mt-0 mb-1">About Us</a>
            </Link>
            <Link href="/privacy">
              <a className="mt-0 mb-1">Privacy</a>
            </Link>
          </div>
          <Link href="/">
            <div className="flex justify-center w-full mt-4 cursor-pointer">
              <YummySVG className="h-10 mt-2 fill-white" />
            </div>
          </Link>
        </div>
      </Contained>
    </div>
  );
}
