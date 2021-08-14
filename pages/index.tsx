import { CmsApi, ITastiestDish } from '@tastiest-io/tastiest-utils';
import { HomeTastiestDishes } from 'components/home/HomeTastiestDishes';
import { SuggestRestaurant } from 'components/SuggestRestaurant';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import React from 'react';
import { Contained } from '../components/Contained';
import { HomeMapSection } from '../components/home/HomeMapSection';
import { HomeRecentSearchesSection } from '../components/home/HomeRecentSearchesSection';
import { HomeSearchSection } from '../components/home/HomeSearchSection';
import { useAuth } from '../hooks/auth/useAuth';
import { useUserData } from '../hooks/useUserData';

interface Props {
  dishes: Array<ITastiestDish>;
}

export const getStaticProps: GetStaticProps = async () => {
  const cms = new CmsApi();
  const { dishes = [] } = await cms.getTastiestDishes(20);

  return {
    props: {
      dishes,
    },
    revalidate: 360,
  };
};

const Index: NextPage<Props> = ({ dishes = [] }) => {
  const cards = dishes ? dishes.slice?.(0, 20) : [];

  const { user } = useAuth();
  const { isDesktop } = useScreenSize();
  const { userData } = useUserData(user);

  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          url: 'https://www.tastiest.io',
          title: 'Tastiest: Exceptional food experiences in London',
          description: 'Exceptional food experiences in London',
          images: [
            {
              url:
                'https://images.ctfassets.net/tq39z0nxr0bv/7cb3zWnqhKUWcrtqH1xbMn/ffce4d16a02b489381ff86d9bd21d4b1/tastiest-metatag-image.png',
              width: 1280,
              height: 628,
              alt:
                'Exceptional food experiences in London Tastiest Meta Tag Image',
            },
          ],
        }}
      />

      <SocialProfileJsonLd
        type="Organization"
        name="Tastiest"
        url="https://www.tastiest.io"
        sameAs={[
          'https://www.facebook.com/tastiestio',
          'https://www.instagram.com/tastiestio/',
          'https://twitter.com/tastiestio',
          'https://www.youtube.com/channel/UCSK_WmrVPgwxRBrqKbNxLkg',
          'https://www.pinterest.co.uk/tastiestio/',
        ]}
      />

      <div className="flex flex-col mb-16 space-y-16">
        <Contained>
          <HomeSearchSection />
        </Contained>

        <HomeRecentSearchesSection />
      </div>

      <div className="flex flex-col space-y-16">
        <Contained>
          <HomeMapSection />
        </Contained>

        <HomeTastiestDishes cards={cards} />

        <SuggestRestaurant />
      </div>
    </>
  );
};

export default Index;
