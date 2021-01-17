import React, { useContext } from 'react';
import { ScreenContext } from '../../contexts/screen';
import { IArticle } from '../../types/article';
import { RecommendForm } from '../RecommendForm';
import { ArticleSectionAbstract } from './sections/ArticleSectionAbstract';
import { ArticleSectionContent } from './sections/ArticleSectionContent';
import { ArticleSectionTitle } from './sections/ArticleSectionTitle';
import { ArticleSubtitleSection } from './sections/ArticleSubtitleSection';
import { ArticleSaveShareWidget } from './widgets/ArticleSaveShareWidget';

export function Article(props: IArticle) {
  const { isMobile } = useContext(ScreenContext);
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

function ArticleDesktop(props: IArticle) {
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
