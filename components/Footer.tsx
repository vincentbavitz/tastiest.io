import Link from 'next/link';
import React from 'react';
import YummySVG from '../assets/svgs/logo.svg';
import TastiestSVG from '../assets/svgs/tastiest.svg';
import { Contained } from './Contained';

export function Footer() {
  return (
    <div className="bg-primary-subtle py-6 text-center">
      <Contained>
        <div className="font-roboto text-base text-white font-medium desktop:text-sm">
          <div className="flex justify-center mt-2 mb-6 cursor-pointer">
            <Link href="/">
              <TastiestSVG className="h-6 fill-white" />
            </Link>
          </div>
          <div className="flex flex-col mt-3">
            <Link href="/">
              <a className="mb-1 mt-0">Home</a>
            </Link>
            <Link href="/tastiest-for-restaurants">
              <a className="mb-1 mt-0">Tastiest For Restaurants</a>
            </Link>
            <Link href="/about">
              <a className="mb-1 mt-0">About Us</a>
            </Link>
            <Link href="/privacy">
              <a className="mb-1 mt-0">Privacy</a>
            </Link>
          </div>
          <Link href="/">
            <div className="flex justify-center w-full mt-4 cursor-pointer">
              <YummySVG className="h-10 fill-white mt-2" />
            </div>
          </Link>
        </div>
      </Contained>
    </div>
  );
}
