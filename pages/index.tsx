import { IPost } from '@tastiest-io/tastiest-utils';
import { NextPage } from 'next';
import React from 'react';

interface Props {
  posts: Array<IPost>;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: 'https://offers.tastiest.io',
    },
  };
};

const Index: NextPage<Props> = () => {
  return <></>;
};

export default Index;
