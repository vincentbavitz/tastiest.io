import Link from 'next/link';
import React from 'react';
import TastiestLogo from '../assets/svgs/brand.svg';
import { Search } from './Search';

function NavBar() {
  return (
    <div className="relative h-20">
      <div className="absolute w-full h-full flex items-center justify-start">
        <div className="antialiased contained flex justify-between">
          <div className="flex mb-2">
            <Link href="/">
              <a className="flex flex-shrink-0 text-primary">
                <TastiestLogo className="fill-current h-8" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Search />
    </div>
  );
}

export default NavBar;
