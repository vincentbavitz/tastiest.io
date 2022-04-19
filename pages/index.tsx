import { RightOutlined } from '@ant-design/icons';
import {
  CmsApi,
  ContentfulPost,
  ContentfulRestaurant,
  TastiestDish,
} from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import HomeAwardWinningDishesSection from 'components/home/HomeAwardWinningDishesSection';
import HomeFeaturedExperiencesSection from 'components/home/HomeFeaturedExperiencesSection';
import HomeFeaturedRestaurantsSection from 'components/home/HomeFeaturedRestaurantsSection';
import HomeInformationSection from 'components/home/HomeInformationSection';
import HomeWhyTastiestSection from 'components/home/HomeWhyTastiestSection';
import HomeHowItWorksSection from 'components/home/HowHowItWorksSection';
import SuggestRestaurantPrompBox from 'components/SuggestRestaurantPrompBox';
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
  return {
    props: {},
  };
};

const Index = () => {
  const [posts, setPosts] = useState<ContentfulPost[]>([]);
  const [dishes, setDishes] = useState<TastiestDish[]>([]);
  const [restaurants, setRestaurants] = useState<ContentfulRestaurant[]>([]);

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

        <Element name="featured-restaurants-section">
          <HomeFeaturedRestaurantsSection restaurants={restaurants} />
        </Element>

        <Element name="featured-experiences-section">
          <HomeFeaturedExperiencesSection cards={cards} />
        </Element>

        <HomeInformationSection />

        <Element name="featured-dishes-section">
          <HomeAwardWinningDishesSection dishes={sortedDishes} />
        </Element>

        <HomeHowItWorksSection />

        <Contained>
          <div className="flex justify-center w-full py-6">
            <SuggestRestaurantPrompBox />
          </div>
        </Contained>
      </div>
    </>
  );
};

interface InfoRowProps {
  header: string;
  description: string;
  icon: React.ForwardRefExoticComponent<any>;
}

const InfoRow = (props: InfoRowProps) => {
  const { header, description, icon: Icon } = props;

  return (
    <div className="relative w-full">
      <div
        style={{
          filter: 'drop-shadow(9px 9px 15px #3882bb20)',
        }}
        className="relative flex items-center justify-between gap-4 bg-white py-4 pl-6 pr-10 z-10"
      >
        <div className="flex items-center gap-4">
          <Icon
            style={{
              filter: 'drop-shadow(0 0 3px #8dd7f4a0)',
            }}
            className="text-secondary text-3xl"
          />

          <div>
            <h1 className="font-medium text-base leading-7">{header}</h1>
            <span className="">{description}</span>
          </div>
        </div>

        <RightOutlined className="text-xl text-secondary" />
      </div>
    </div>
  );
};

Index.layout = Layouts.HOME;
export default Index;
