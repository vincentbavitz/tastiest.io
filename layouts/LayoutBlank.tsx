import React from 'react';
import { LayoutProps } from './LayoutHandler';

export default function LayoutBlank({
  router,
  pageProps,
  children: Component,
}: LayoutProps) {
  return (
    <>
      <div id="modal-root" className="absolute"></div>
      <Component {...pageProps} />
    </>
  );
}
