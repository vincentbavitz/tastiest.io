import React from 'react';
import { UI } from '../constants';

interface Props {
  children: JSX.Element | JSX.Element[];
  allowRight?: boolean;
}

export function Contained(props: Props) {
  const containerStyle = {
    paddingLeft: '5vw',
    paddingRight: `${props.allowRight ? '0' : '5'}vw`,
    maxWidth: `${UI.MAX_CONTENT_WIDTH}px`,
    margin: '0 auto',
  };

  return <div style={containerStyle}>{props.children}</div>;
}
