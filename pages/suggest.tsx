import { Contained } from 'components/Contained';
import { SectionTitle } from 'components/SectionTitle';
import { SuggestRestaurant } from 'components/SuggestRestaurant';
import { InferGetServerSidePropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React, { useState } from 'react';
import { generateTitle } from 'utils/metadata';

export const getServerSideProps = async context => {
  return {
    props: {},
  };
};

const Suggest = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  props;

  const [sent, setHasSent] = useState(false);
  const pageTitle = 'Reccomend a restaurant & dish';

  return (
    <>
      <NextSeo
        title={pageTitle}
        description=""
        openGraph={{
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: '/assets/seo/page/help-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest Help Hero',
            },
            {
              url: '/assets/seo/page/help-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest Help Hero',
            },
          ],
        }}
      />
      <Head>
        <title>{generateTitle(pageTitle)}</title>
      </Head>

      <Contained>
        <div className="py-16">
          <SectionTitle>Suggest A Dish</SectionTitle>

          <div className="pt-10">
            <SuggestRestaurant />
          </div>
        </div>
      </Contained>
    </>
  );
};

export default Suggest;
