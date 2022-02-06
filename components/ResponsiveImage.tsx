import styled from '@emotion/styled';
import Image, { ImageProps } from 'next/image';
import React from 'react';

type Props = Omit<ImageProps, 'layout' | 'width' | 'height'> & {
  fillHeight?: boolean;
};

const ResponsiveImageContainer = styled.div`
  width: 100%;
  & > div {
    position: unset !important;
  }

  span {
    height: max-content !important;
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

/**
 * A wrapper around next/image which allows an image to
 * dynamically adjust its size to fit its parent.
 */
export default function ResponsiveImage(props: Props) {
  const { fillHeight } = props;

  const _props = {
    layout: 'fill',
    objectFit: 'cover',
    ...props,
  } as ImageProps;

  return (
    <ResponsiveImageContainer
      style={{ height: fillHeight ? 'inherit' : 'unset' }}
    >
      <Image {..._props} />
    </ResponsiveImageContainer>
  );
}
