import React from 'react';
import { LayoutProps } from './LayoutHandler';

export default function LayoutBlank({
  pageProps,
  children: Component,
}: LayoutProps) {
  return <Component {...pageProps} />;
}
