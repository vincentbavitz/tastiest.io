import { Contained } from 'components/Contained';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import { generateTitle } from 'utils/metadata';

function HowItWorks() {
  return (
    <>
      <Head>
        <title>{generateTitle('How It Works!')}</title>
      </Head>

      <NextSeo
        title="Tastiest - How It Works!"
        description="Find out how Tastiest works."
        openGraph={{
          title: 'Tastiest - How It Works!',
          description: 'Find out how Tastiest works.',
          images: [
            {
              url:
                'https://tastiest.io/assets/seo/page/how-it-works-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest How-It-Works Hero',
            },
            {
              url:
                'https://tastiest.io//assets/seo/page/how-it-works-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest How-It-Works Hero',
            },
          ],
        }}
      />

      <div>
        <Contained>
          <div className="flex justify-center ">
            <img
              src="/assets/illustrations/how-it-works-illustration.png"
              style={{ maxWidth: '450px' }}
              className="w-7/12 py-20"
            />
          </div>
        </Contained>
      </div>
    </>
  );
}

export default HowItWorks;
