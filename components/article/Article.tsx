import React, { useContext } from 'react';
import { ScreenContext } from '../../contexts/screen';
import { IPost } from '../../types/cms';
import { RecommendForm } from '../RecommendForm';
import { ArticleDescriptionSection } from './sections/ArticleDescriptionSection';
import { ArticleSectionAbstract } from './sections/ArticleSectionAbstract';
import { ArticleSectionContent } from './sections/ArticleSectionContent';
import { ArticleSectionTitle } from './sections/ArticleSectionTitle';
import { ArticleSaveShareWidget } from './widgets/ArticleSaveShareWidget';

export function Article(post: IPost) {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <div>
      {!isDesktop ? <ArticleMobile {...post} /> : <ArticleDesktop {...post} />}
      <RecommendForm dish={post?.dishName} city={post?.city} />
    </div>
  );
}

function ArticleMobile(post: IPost) {
  const {
    id,
    title,
    slug,
    description,
    author,
    date,
    city,
    restaurant,
    video,
  } = post;

  return (
    <article>
      <ArticleSectionTitle title={title} author={author} date={date} />
      <ArticleDescriptionSection description={description} />

      <ArticleSaveShareWidget id={id} title={title} slug={slug} />
      <ArticleSectionAbstract
        city={city}
        video={video}
        location={restaurant?.location}
        restaurantName={restaurant?.name}
      ></ArticleSectionAbstract>
      <ArticleSectionContent {...post} />
    </article>
  );
}

function ArticleDesktop(post: IPost) {
  const {
    id,
    title,
    description,
    author,
    date,
    slug,
    city,
    restaurant,
    video,
  } = post;

  console.log('Article ➡️ props:', post);

  return (
    <article>
      <ArticleSectionTitle title={title} author={author} date={date} />
      <ArticleSectionAbstract
        city={city}
        video={video}
        location={restaurant?.location}
        restaurantName={restaurant?.name}
      >
        <ArticleSaveShareWidget id={id} title={title} slug={slug} />
        <ArticleDescriptionSection description={description} />
      </ArticleSectionAbstract>
      <ArticleSectionContent {...post} />
    </article>
  );
}
