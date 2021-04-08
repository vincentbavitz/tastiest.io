import classNames from 'classnames';
import React from 'react';

interface Props {
  tag: string;
  size?: 'small' | 'medium' | 'large';
}

export function TagBlock(props: Props) {
  const { tag, size = 'small' } = props;
  const href = `/search?tag=${tag.toLowerCase()}`;

  return (
    <a
      href={href}
      style={{ width: 'min-content' }}
      className={classNames(
        'flex items-center cursor-pointer rounded whitespace-nowrap border border-white bg-opacity-25 text-primary tracking-wide',
        size === 'small' && 'h-5 text-xs',
        size === 'medium' && 'h-5 text-sm',
        size === 'medium' && 'h-6 text-base',
      )}
    >
      <span className="px-2 font-roboto">{tag.toLowerCase()}</span>
    </a>
  );
}
