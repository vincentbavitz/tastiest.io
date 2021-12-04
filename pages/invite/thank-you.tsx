import { Contained } from 'components/Contained';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
  return {
    props: {},
  };
};

const ThankYou = () => {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className="relative bg-white text-primary pb-12 font-secondary"
    >
      <Contained>
        <div className="flex flex-col space-y-10 mt-12 justify-center">
          <h1 className="text-2xl font-primary">
            Thank You<span className="text-primary">.</span>
          </h1>
        </div>
      </Contained>
    </div>
  );
};

ThankYou.layout = Layouts.BLANK;
export default ThankYou;
