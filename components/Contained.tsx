import React from 'react';
import { UI } from '../constants';

interface Props {
  backgroundColor?: string;
  children: JSX.Element | JSX.Element[];
}

export function Contained(props: Props) {
  const { backgroundColor, children } = props;

  const containerStyle = {
    paddingLeft: '5vw',
    paddingRight: '5vw',
    width: '100%',
    maxWidth: `${UI.MAX_CONTENT_WIDTH}px`,
    margin: '0 auto',
    backgroundColor,
  };

  return <div style={containerStyle}>{children}</div>;
}
