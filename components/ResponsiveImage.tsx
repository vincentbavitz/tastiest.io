import Image, { ImageProps } from 'next/image';
import React from 'react';
import styled from 'styled-components';

type Props = Omit<ImageProps, 'layout' | 'width' | 'height' | 'objectFit'>;

/** A wrapper around next/image which allows an image to
 * dynamically adjust its size to fit its parent.
 */
export default function ResponsiveImage(props: Props) {
  const ResponsiveImageContainer = styled.div`
    width: 100%;
    & > div {
      position: unset !important;
    }

    img {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  `;

  const _props = {
    ...props,
    layout: 'fill',
    objectFit: 'cover',
  } as ImageProps;

  return (
    <ResponsiveImageContainer>
      <Image {..._props} />
    </ResponsiveImageContainer>
  );
}
