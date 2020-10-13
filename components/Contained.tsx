import React from 'react';
import styled from 'styled-components';
import { UI } from '../constants';

interface Props {
  children: JSX.Element | JSX.Element[];
  allowRight?: boolean;
}

export function Contained(props: Props) {
  const Contained = styled.div`
    padding-left: 5vw;
    padding-right: ${props.allowRight ? '0vw' : '5vw'};
    max-width: ${UI.MAX_CONTENT_WIDTH}px;
    margin: 0 auto;
  `;

  return <Contained>{props.children}</Contained>;
}
