import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { UI } from '../constants';

interface MobileBottomButtonProps {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  loading?: boolean;
  onClick?: () => void;
}

export default function MobileBottomButton(props: MobileBottomButtonProps) {
  const { href } = props;

  return (
    <div
      style={{ zIndex: UI.Z_INDEX_FLOATING_COMPONENTS }}
      className="fixed bottom-0 left-0 right-0"
    >
      {href ? (
        <Link href={href}>
          <a className="no-underline">
            <MobileBottomButtonInner {...props} />
          </a>
        </Link>
      ) : (
        <MobileBottomButtonInner {...props} />
      )}
    </div>
  );
}

function MobileBottomButtonInner(props: MobileBottomButtonProps) {
  const { onClick, disabled = false, loading = false, children } = props;

  return (
    <button
      disabled={disabled}
      onClick={loading || disabled ? null : onClick}
      className={clsx(
        'fixed bottom-0 left-0 right-0 w-full h-14 flex items-center justify-center',
        'bg-primary duration-300',
        'text-light text-lg outline-none font-medium tracking-wide',
        disabled ? 'filter brightness-75' : '',
        loading || disabled ? 'cursor-not-allowed' : 'hover:bg-secondary',
      )}
    >
      {loading ? <LoadingOutlined className="text-4xl" /> : <>{children}</>}
    </button>
  );
}
