import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode, useRef } from 'react';
import { useHoverDirty } from 'react-use';

interface XScrollSelectItemProps {
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  link?: { href: string; as?: string };
}

const XScrollSelectItem = (props: XScrollSelectItemProps) => {
  const { selected, disabled, size = 'small', link, onClick } = props;

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  const disabledStyles =
    'bg-gray-200 opacity-50 pointer-events-none border-transparent cursor-default';

  const activeStyles = [
    'cursor-pointer',
    isHovering || selected ? 'border-opacity-100' : 'border-opacity-25',
    selected ? 'border-blue-600' : 'border-blue-200',
  ];

  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{ minHeight: '1.75rem' }}
      className={clsx(
        'relative border-2 space-y-1 leading-none select-none',
        'text-center duration-300 whitespace-nowrap',
        disabled ? disabledStyles : activeStyles,
        size === 'small' && 'mx-1 rounded',
        size === 'medium' && 'mx-2 rounded',
        size === 'large' && 'mx-3  rounded-md',
      )}
    >
      {link ? (
        <Link href={link.href} as={link.as}>
          <a className="no-underline">
            <XScrollSelectItemInner {...props} />
          </a>
        </Link>
      ) : (
        <XScrollSelectItemInner {...props} />
      )}
    </div>
  );
};

const XScrollSelectItemInner = (props: XScrollSelectItemProps) => {
  const { children, size = 'small' } = props;

  return (
    <div
      className={clsx(
        'flex justify-center items-center flex-col h-full',
        size === 'small' && 'py-1 px-2 text-sm',
        size === 'medium' && 'py-2 px-3 text-base',
        size === 'large' && 'py-3 px-4 text-lg',
      )}
    >
      {children}
    </div>
  );
};

export default XScrollSelectItem;
