import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  lines: number;
  fit?: 'tight' | 'compact' | 'normal' | 'relaxed' | 'loose';
}

/**
 * Use this component to set a static number of lines your text can display.
 * Good for titles, cards, etc.
 */
export default function LineLimit(props: Props) {
  const { children, lines, fit = 'normal' } = props;

  // prettier-ignore
  const lineHeight = 
    fit === 'tight' ? 1.1 :
    fit === 'compact' ? 1.2 :
    fit === 'normal' ? 1.33 :
    fit === 'relaxed' ? 1.45 :
    fit === 'loose' ? 1.55 :
    1;

  return (
    <div
      style={{
        lineHeight: `${lineHeight}em`,
        height: '0',
        paddingBottom: `${lineHeight * lines}em`,
      }}
      className={clsx('overflow-hidden')}
    >
      {children}
    </div>
  );
}
