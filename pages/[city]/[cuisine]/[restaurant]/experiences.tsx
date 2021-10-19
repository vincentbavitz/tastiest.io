import { ArticleCard } from 'components/cards/ArticleCard';
import { CardGrid } from 'components/cards/CardGrid';
import { useScreenSize } from 'hooks/useScreenSize';
import { Layouts } from 'layouts/LayoutHandler';
import {} from 'layouts/LayoutRestaurant';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import {
  getStaticPaths as getRestaurantStaticPaths,
  getStaticProps as getRestaurantStaticProps,
} from '.';

export const getStaticPaths = getRestaurantStaticPaths;
export const getStaticProps = getRestaurantStaticProps;

const RestaurantExperiencesPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const { restaurant, tastiestDishes, posts } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  return (
    <div className="flex flex-col items-center pt-4 pb-10 space-y-4">
      {isMobile ? (
        posts.map(post => (
          <div key={post.id} style={{ maxWidth: '300px' }} className="">
            <ArticleCard {...post} />
          </div>
        ))
      ) : (
        <CardGrid>
          {posts.map(post => (
            <ArticleCard key={post.id} {...post} />
          ))}
        </CardGrid>
      )}
    </div>
  );
};

RestaurantExperiencesPage.layout = Layouts.RESTAURANT;
export default RestaurantExperiencesPage;
