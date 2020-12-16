import React from 'react';
import { useScreenSize } from '../../hooks/screen';
import { IArticle } from '../../types/article';
import { RecommendForm } from '../RecommendForm';
import { ArticleSubtitleSection } from './sections/ArticleSubtitleSection';
import { ArticleSectionAbstract } from './sections/ArticleSectionAbstract';
import { ArticleSectionContent } from './sections/ArticleSectionContent';
import { ArticleSectionTitle } from './sections/ArticleSectionTitle';
import { ArticleSaveShareWidget } from './widgets/ArticleSaveShareWidget';

export function Article(props: IArticle) {
  const { isMobile } = useScreenSize();
  const article = props;

  return (
    <div>
      {isMobile ? <ArticleMobile {...props} /> : <ArticleDesktop {...props} />}
      <RecommendForm dish={article.dishName} city={article.city} />
    </div>
  );
}

function ArticleMobile(props: IArticle) {
  const {
    body,
    title,
    subtitle,
    author,
    date,
    city,
    tags,
    location,
    restaurantName,
    dishName,
    video,
    featureImage,
  } = props;

  return (
    <article>
      <ArticleSectionTitle title={title} author={author} date={date} />
      <ArticleSubtitleSection subtitle={subtitle} />

      <ArticleSaveShareWidget />
      <ArticleSectionAbstract
        city={city}
        video={video}
        location={location}
        restaurantName={restaurantName}
      ></ArticleSectionAbstract>
      <ArticleSectionContent featureImage={featureImage} body={body} />
    </article>
  );
}

function ArticleDesktop(props: IArticle) {
  const {
    body,
    title,
    subtitle,
    author,
    date,
    city,
    tags,
    location,
    restaurantName,
    dishName,
    video,
    featureImage,
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
        <ArticleSaveShareWidget />
        <ArticleSubtitleSection subtitle={subtitle} />
      </ArticleSectionAbstract>
      <ArticleSectionContent featureImage={featureImage} body={body} />
    </article>
  );
}
