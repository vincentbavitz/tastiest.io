import clsx from 'clsx';
import React from 'react';

type Size = 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
const SIZES: Size[] = ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];

interface StyledUppercaseProps {
  size: Size;
  children: string;
}

// prettier-ignore
const UPPERCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function StyledUppercase(props: StyledUppercaseProps) {
  const { size = 'base', children } = props;
  const bigLetterSize = size === '5xl' ? '6xl' : SIZES[SIZES.indexOf(size) + 1];

  return (
    <div className={clsx('font-primary font-medium uppercase', `text-${size}`)}>
      {children.split('').map(letter =>
        UPPERCASE.includes(letter) ? (
          <span
            key={letter}
            className={clsx('font-normal', `text-${bigLetterSize}`)}
          >
            {letter}
          </span>
        ) : (
          letter
        ),
      )}
    </div>
  );
}
