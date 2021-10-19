import { RightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface SeeExperiencesButtonProps {
  href: string;
  as: string;
  autoHeight?: boolean;
}

const SeeExperiencesButton = ({
  href,
  as,
  autoHeight,
}: SeeExperiencesButtonProps) => {
  return (
    <Link href={href} as={as}>
      <a className="no-underline">
        <div
          className={clsx(
            'bg-gradient-to-tr from-blue-300 via-secondary to-primary w-full rounded-lg duration-300 hover:brightness-110 filter text-light tracking-wide',
            'flex justify-center items-center whitespace-nowrap leading-none px-4 text-lg shadow-lg',
            autoHeight ? 'h-full' : 'h-16',
          )}
        >
          <span>See experiences</span>
          <RightOutlined className="pl-2" />
        </div>
      </a>
    </Link>
  );
};

export default SeeExperiencesButton;
