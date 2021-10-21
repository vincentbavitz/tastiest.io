import React, { FC } from 'react';

/** To be placed inside `next/head` component only. */
const Fonts: FC = () => {
  return (
    <>
      {/* Add Optimized Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={'true'}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Marmelad&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Marmelad&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export default Fonts;
