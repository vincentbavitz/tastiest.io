import { IPost } from '@tastiest-io/tastiest-utils';
import { GetServerSideProps, NextPage } from 'next';

interface Props {
  posts: Array<IPost>;
}

export const getServerSideProps: GetServerSideProps = async request => {
  const search = new URLSearchParams();

  // Add UTMs and such to final URL
  Object.entries(request.query).forEach(([param, value]) => {
    search.set(param, String(value));
  });

  return {
    redirect: {
      destination: `https://offers.tastiest.io?${search.toString()}`,
    },
    props: {},
  };
};

const Index: NextPage<Props> = () => {
  return <></>;
};

export default Index;
