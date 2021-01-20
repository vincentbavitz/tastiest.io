import Link from 'next/link';
import React, { useContext } from 'react';
import { ScreenContext } from '../../contexts/screen';
import { IArticle } from '../../types/article';
import { generateURL } from '../../utils/routing';

export function ArticleCardRow(post: IArticle) {
  const { isDesktop } = useContext(ScreenContext);
  const { city, slug, cuisine } = post;
  const { href, as } = generateURL({ city, slug, cuisine });

  const ArticlePreviewContent = () => (
    <p
      style={{
        lineHeight: '1.33em',
        height: '4em',
      }}
      className="text-base overflow-hidden"
    >
      {post.subtitle}
    </p>
  );

  const ArticlePreviewImage = () => (
    <div
      style={{
        width: !isDesktop ? '33%' : '10rem',
        height: !isDesktop ? '66%' : '6rem',
      }}
      className="relative rounded-lg bg-primary bg-opacity-10 overflow-hidden"
    >
      {post?.featureImage?.source && (
        <img
          src={post.featureImage.source}
          alt={post.featureImage.altText}
          className="w-full h-full rounded-lg object-cover"
        />
      )}
    </div>
  );

  return (
    <>
      {!isDesktop ? (
        <div className="flex flex-col w-full space-y-4 mb-6">
          <div className="flex w-full space-x-6">
            <ArticlePreviewImage />
            <div className="w-2/3">
              <h3 className="font-somatic text-twoxl text-primary">
                {post.title}
              </h3>
            </div>
          </div>

          <ArticlePreviewContent />
        </div>
      ) : (
        <div className="flex w-full space-x-6">
          <ArticlePreviewImage />
          <div
            style={{ width: 'min-content' }}
            className="flex flex-col flex-grow"
          >
            <Link href={href} as={as}>
              <a className="font-somatic text-xl text-primary">{post.title}</a>
            </Link>

            <ArticlePreviewContent />
          </div>
        </div>
      )}
    </>
  );
}
