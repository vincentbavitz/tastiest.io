import Link from 'next/link';
import React from 'react';
import YummySVG from '../assets/svgs/logo.svg';
import TastiestSVG from '../assets/svgs/tastiest.svg';

export function Footer() {
  return (
    <div className="bg-secondary text-white py-6">
      <div className="contained font-roboto font-medium text-sm">
        <TastiestSVG className="h-6 fill-white" />

        <div className="flex flex-col items-start mt-3">
          <Link href="/">
            <a className="mb-1 mt-0">HOME</a>
          </Link>
          <Link href="/tastiest-for-restaurants">
            <a className="mb-1 mt-0">TASTIEST FOR RESTAURANTS</a>
          </Link>
          <Link href="/about">
            <a className="mb-1 mt-0">ABOUT US</a>
          </Link>
        </div>

        <div className="flex justify-center w-full mt-3">
          <YummySVG className="h-10 fill-white" />
        </div>
      </div>
    </div>
  );
}
