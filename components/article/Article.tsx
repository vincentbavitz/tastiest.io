import React, { useContext } from 'react';
import { ScreenContext } from '../../contexts/screen';
import { IPost } from '../../types/article';
import { RecommendForm } from '../RecommendForm';
import { ArticleSectionAbstract } from './sections/ArticleSectionAbstract';
import { ArticleSectionContent } from './sections/ArticleSectionContent';
import { ArticleSectionTitle } from './sections/ArticleSectionTitle';
import { ArticleSubtitleSection } from './sections/ArticleSubtitleSection';
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
    subtitle,
    author,
    date,
    city,
    location,
    restaurantName,
    video,
  } = props;

  return (
    <article>
      <ArticleSectionTitle title={title} author={author} date={date} />
      <ArticleSubtitleSection subtitle={subtitle} />

      <ArticleSaveShareWidget id={id} title={title} slug={slug} />
      <ArticleSectionAbstract
        city={city}
        video={video}
        location={location}
        restaurantName={restaurantName}
      ></ArticleSectionAbstract>
      <ArticleSectionContent {...props} />
    </article>
  );
}

function ArticleDesktop(props: IPost) {
  const {
    id,
    title,
    subtitle,
    author,
    date,
    slug,
    city,
    location,
    restaurantName,
    video,
  } = props;

  return (
    <article>
      <ArticleSectionTitle title={title} author={author} date={date} />
      <ArticleSectionAbstract
        city={city}
        video={video}
        location={location}
        restaurantName={restaurantName}
      >
        <ArticleSaveShareWidget id={id} title={title} slug={slug} />
        <ArticleSubtitleSection subtitle={subtitle} />
      </ArticleSectionAbstract>
      <ArticleSectionContent {...props} />
    </article>
  );
}
