import React from 'react';
import { IArticle } from '../../types/article';
import { ArticleDescriptionSection } from './sections/ArticleDescriptionSection';
import { ArticleSectionAbstract } from './sections/ArticleSectionAbstract';
import { ArticleSectionContent } from './sections/ArticleSectionContent';
import { ArticleSectionTitle } from './sections/ArticleSectionTitle';
import { ArticleSaveShareWidget } from './widgets/ArticleSaveShareWidget';

export function ArticleMobile(props: IArticle) {
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

      <ArticleDescriptionSection>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi,
        labore tenetur odio veritatis alias nihil provident ad! Hic aperiam
        quaerat nemo vel numquam quibusdam
      </ArticleDescriptionSection>

      <ArticleSaveShareWidget />
      <ArticleSectionAbstract />
      <ArticleSectionContent />
    </article>
  );
}

export function ArticleDesktop(props: IArticle) {
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
      <ArticleSectionAbstract>
        <ArticleSaveShareWidget />
        <ArticleDescriptionSection>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          eligendi, labore tenetur odio veritatis alias nihil provident ad! Hic
          aperiam quaerat nemo vel numquam quibusdam
        </ArticleDescriptionSection>
      </ArticleSectionAbstract>
      <ArticleSectionContent />
    </article>
  );
}
