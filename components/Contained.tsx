import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { UI } from '../constants';

interface Props {
  backgroundColor?: 'primary' | 'secondary' | 'secondary-1';
  children: ReactNode;
  maxWidth?: number;
  tight?: boolean; // sets padding to half
}

export function Contained(props: Props) {
  const { backgroundColor, tight, children } = props;

  const padding = UI.PAGE_CONTAINED_PADDING_VW / (tight ? 2 : 1);

  const containerStyle = {
    paddingLeft: `${padding}vw`,
    paddingRight: `${padding}vw`,
    width: '100%',
    maxWidth: `calc(${2 * padding}vw + ${
      props.maxWidth ?? UI.MAX_CONTENT_WIDTH
    }px)`,
    margin: '0 auto',
  };

  return (
    <div
      className={classNames(
        'w-full',
        backgroundColor && `bg-${backgroundColor}`,
      )}
    >
      <div className="relative" style={containerStyle}>
        {children}
      </div>
    </div>
  );
}
