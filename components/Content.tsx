import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Content(props: Props) {
  const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
  `;

  return <Content>{props.children}</Content>;
}
