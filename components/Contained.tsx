import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { UI } from '../constants';

interface Props {
  backgroundColor?: 'primary' | 'secondary' | 'secondary-1';
  children: ReactNode;
  maxWidth?: number;
}

export function Contained(props: Props) {
  const { backgroundColor, children } = props;

  const containerStyle = {
    paddingLeft: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
    paddingRight: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
    width: '100%',
    maxWidth: `calc(${2 * UI.PAGE_CONTAINED_PADDING_VW}vw + ${
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
