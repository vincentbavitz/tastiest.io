import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { UI } from '../constants';

interface Props {
  backgroundColor?: 'primary' | 'secondary';
  children: ReactNode;
}

export function Contained(props: Props) {
  const { backgroundColor, children } = props;

  const containerStyle = {
    paddingLeft: '5vw',
    paddingRight: '5vw',
    width: '100%',
    maxWidth: `${UI.MAX_CONTENT_WIDTH}px`,
    margin: '0 auto',
  };

  return (
    <div className={classNames(backgroundColor && `bg-${backgroundColor}`)}>
      <div className="relative" style={containerStyle}>
        {children}
      </div>
    </div>
  );
}
