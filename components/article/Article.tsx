import React, { useContext } from 'react';
import { IPost } from 'types/cms';
import { ScreenContext } from '../../contexts/screen';
import { RecommendForm } from '../RecommendForm';
import { ArticleDescriptionSection } from './sections/ArticleDescriptionSection';
import { ArticleSectionAbstract } from './sections/ArticleSectionAbstract';
import { ArticleSectionContent } from './sections/ArticleSectionContent';
import { ArticleSectionTitle } from './sections/ArticleSectionTitle';
import { ArticleSaveShareWidget } from './widgets/ArticleSaveShareWidget';

export function Article(props: IPost) {
  const { isDesktop } = useContext(ScreenContext);
  const article = props;

  return (
    <div>
      {!isDesktop ? (
        <ArticleMobile {...props} />
      ) : (
        <ArticleDesktop {...props} />
      )}
      <RecommendForm dish={article.dishName} city={article.city} />
    </div>
  );
}

function ArticleMobile(props: IPost) {
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
  } = props;

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
      <ArticleSectionContent {...props} />
    </article>
  );
}

function ArticleDesktop(props: IPost) {
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
  } = props;

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
      <ArticleSectionContent {...props} />
    </article>
  );
}
