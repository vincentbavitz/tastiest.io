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
      <ArticleSectionTitle title={title} city={city} />
      <ArticleDescriptionSection description={description} />

      <ArticleSaveShareWidget id={id} title={title} slug={slug} />
      <ArticleSectionAbstract {...post} />
      <ArticleSectionContent {...post} />
    </article>
  );
}

function ArticleDesktop(post: IPost) {
  const { id, title, description, slug, city, restaurant, video } = post;

  console.log('Article ➡️ props:', post);

  return (
    <article>
      <ArticleSectionTitle title={title} city={city} />
      <ArticleSectionAbstract {...post} />

      <ArticleSectionContent {...post} />
    </article>
  );
}
