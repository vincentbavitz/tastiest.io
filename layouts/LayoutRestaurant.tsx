import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/[city]/[cuisine]/[restaurant]';
import React from 'react';

export default function LayoutRestaurant(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  console.log(props);

  return <div></div>;
}
