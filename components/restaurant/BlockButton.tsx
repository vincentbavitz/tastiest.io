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
            'bg-gradient-to-tr from-blue-300 via-secondary to-primary w-full duration-300 hover:brightness-110 filter text-light tracking-wide',
            'flex justify-center items-center whitespace-nowrap leading-none px-4 text-lg shadow-lg',
            autoHeight ? 'h-full' : 'h-16',
          )}
        >
          {children}
        </div>
      </a>
    </Link>
  );
};

export default BlockButton;
