import {
  CmsApi,
  ContentfulPost,
  ContentfulRestaurant,
  TastiestDish,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import HomeAwardWinningDishesSection from 'components/home/HomeAwardWinningDishesSection';
import HomeDiscoverSection from 'components/home/HomeDiscoverSection';
import HomeFeaturedExperiencesSection from 'components/home/HomeFeaturedExperiencesSection';
import HomeFeaturedRestaurantsSection from 'components/home/HomeFeaturedRestaurantsSection';
import HomeHowItWorksSection from 'components/home/HomeHowItWorksSection';
import HomeInformationSection from 'components/home/HomeInformationSection';
import HomeWhyTastiestSection from 'components/home/HomeWhyTastiestSection';
import ImageLinkBlock from 'components/ImageLinkBlock';
import { useScreenSize } from 'hooks/useScreenSize';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Scroll from 'react-scroll';
import { METADATA } from '../constants';

const Element = Scroll.Element;

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export const getServerSideProps: GetServerSideProps = async context => {
  // Testing Zendesk

  // const client = zendesk.createClient({
  //   username: 'developers@tastiest.io',
  //   token: 'ISZFlR3g1TUQpLpvLathoMBuP0vVKiFkPi5QW1tV',
  //   remoteUri: 'https://tastiesttechnologies.zendesk.com/api/v2',
  //   disableGlobalState: true,
  //   debug: true, // if you want to debug in library only mode, you'll have to include this
  // });

  // Tickets are from agents
  // client.tickets.create({
  //   ticket: {
  //     subject: 'My printer is on fire!',
  //     comment: {
  //       body: 'The smoke is very colorful.',
  //     },
  //   },
  // });

  // // Requests are from end-users
  // client.requests.create({
  //   request: {
  //     requester: { name: 'Vince', email: 'vincent@bavitz.org' },
  //     subject: 'Regarding trees',
  //     comment: { body: 'Trees have branches.' },
  //   },
  // });

  // Testing Klaviyo SMS Consent
  // const KLAVIYO_SMS_LIST_ID = 'RVkX6T';
  // const endpoint = `https://a.klaviyo.com/api/v2/list/${KLAVIYO_SMS_LIST_ID}/subscribe`;

  // const consentData = {
  //   api_key: 'pk_9709c4e5fd47f4c60483f956eff6d00ddf',
  //   profiles: [
  //     {
  //       email: 'vincent12@tastiest.io',
  //       $consent: ['sms'],
  //       phone_number: '+44 79 4776 2787',
  //       sms_consent: true,
  //     },
  //   ],
  // };

  // const response = await fetch(endpoint, {
  //   method: 'POST',
  //   body: JSON.stringify(consentData),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // const json = await response.json();
  // dlog('index ➡️ response:', json);

  return {
    props: {},
  };
};

const Index = () => {
  const [posts, setPosts] = useState<ContentfulPost[]>([]);
  const [dishes, setDishes] = useState<TastiestDish[]>([]);
  const [restaurants, setRestaurants] = useState<ContentfulRestaurant[]>([]);

  const { isMobile, isTablet } = useScreenSize();

  useEffect(() => {
    const cms = new CmsApi(
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    );

    const fetchContent = async () => {
      const { posts: _posts = [] } = await cms.getTopPosts(10);
      const { dishes: _dishes } = await cms.getTastiestDishes(15);
      const { restaurants: _restaurants } = await cms.getRestaurants(10, 1);

      const filteredDishes = _dishes.filter(d => !d.restaurant.is_demo);

      return {
        posts: _posts,
        dishes: filteredDishes,
        restaurants: _restaurants,
      };
    };

    fetchContent().then(({ posts, dishes, restaurants }) => {
      setPosts(posts);
      setRestaurants(restaurants);
      setDishes(shuffleArray(dishes));
    });
  }, []);

  const cards = posts.slice(0, 20);

  const sortedDishes = [
    ...dishes.filter(d => !d.restaurant.name.includes('Numa')),
    ...dishes.filter(d => d.restaurant.name.includes('Numa')),
  ];

  return (
    <>
      <Head>
        <title>{METADATA.TITLE_SUFFIX}</title>
      </Head>

      <NextSeo
        title="Tastiest - Home"
        description={METADATA.TITLE_SUFFIX}
        openGraph={{
          title: 'Tastiest - Home',
          description: METADATA.TITLE_SUFFIX,
          images: [
            {
              url: 'https://tastiest.io/assets/seo/page/home-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest Hero',
            },
            {
              url: 'https://tastiest.io//assets/seo/page/home-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest Hero',
            },
          ],
        }}
      />

      <div className="flex flex-col mb-10 space-y-10">
        <HomeWhyTastiestSection />

        <HomeDiscoverSection />

        <HomeHowItWorksSection />

        <Element name="featured-restaurants-section">
          <HomeFeaturedRestaurantsSection restaurants={restaurants} />
        </Element>

        <Element name="featured-experiences-section">
          <HomeFeaturedExperiencesSection cards={cards} />
        </Element>

        <HomeInformationSection />

        <Contained>
          <div
            className={clsx(
              'flex w-full',
              'my-6',
              isMobile ? 'flex-col' : '',
              isTablet ? 'gap-8' : 'gap-12',
            )}
          >
            <ImageLinkBlock
              label={['Recommend a', 'restaurant']}
              image="https://images.ctfassets.net/tq39z0nxr0bv/ObL6xHQLuwK3lCf8eiL10/127b2c088b3b671c468505499b6d35b4/Rectangle_20_2x.png?h=800"
              description="All our restaurant partners are recommended by you, our foodie community. Only the best make it."
              href="/recommend"
            />

            <ImageLinkBlock
              label={['Apply to be a', 'restaurant partner']}
              image="https://images.ctfassets.net/tq39z0nxr0bv/3zIyx3LH9MizAJDHsMCzmn/eb53b953d14444b25f76f49b487de395/Rectangle_20_2x.png?h=800"
              description=""
              href="/restaurateurs"
            />
          </div>
        </Contained>

        <Element name="featured-dishes-section">
          <HomeAwardWinningDishesSection dishes={sortedDishes} />
        </Element>
      </div>
    </>
  );
};

Index.layout = Layouts.HOME;
export default Index;
