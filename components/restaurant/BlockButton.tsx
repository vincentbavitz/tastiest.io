import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface SeeExperiencesButtonProps {
  href: string;
  as: string;
  autoHeight?: boolean;
  children: ReactNode;
}

const BlockButton = (props: SeeExperiencesButtonProps) => {
  const { href, as, autoHeight, children } = props;

  return (
    <Link href={href} as={as}>
      <a className="no-underline">
        <div
          className={clsx(
            'relative bg-secondary w-full duration-300 hover:brightness-110 filter text-light tracking-wide',
            'flex justify-center items-center whitespace-nowrap leading-none px-4 text-lg shadow-lg',
            autoHeight ? 'h-full' : 'h-16',
          )}
        >
          {children}

          <div className="absolute inset-1 border-2 border-light"></div>
        </div>
      </a>
    </Link>
  );
};

export default BlockButton;
