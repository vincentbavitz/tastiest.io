import { IPost } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import Link from 'next/link';
import React from 'react';
import { generateSlugURL } from '../../utils/routing';

export function ArticleCardRow(post: IPost) {
  const { isDesktop } = useScreenSize();
  const { city, slug, cuisine } = post;
  const { href, as } = generateSlugURL({
    city,
    slug,
    cuisine,
    restaurant: post.restaurant.uriName,
  });

  const ArticlePreviewContent = () => (
    <p
      style={{
        lineHeight: '1.33em',
        height: '4em',
      }}
      className="overflow-hidden text-base"
    >
      {post.description}
    </p>
  );

  const ArticlePreviewImage = () => (
    <div
      style={{
        width: !isDesktop ? '33%' : '10rem',
        height: !isDesktop ? '66%' : '6rem',
      }}
      className="relative overflow-hidden rounded-lg bg-primary bg-opacity-10"
    >
      {post?.featureImage?.url && (
        <img
          src={post.featureImage.url}
          alt={post.featureImage?.description}
          className="object-cover w-full h-full rounded-lg"
        />
      )}
    </div>
  );

  return (
    <>
      {!isDesktop ? (
        <div className="flex flex-col w-full mb-6 space-y-4">
          <div className="flex w-full space-x-6">
            <ArticlePreviewImage />
            <div className="w-2/3">
              <h3 className="text-2xl font-somatic text-primary">
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
              <a className="text-xl font-somatic text-primary">{post.title}</a>
            </Link>

            <ArticlePreviewContent />
          </div>
        </div>
      )}
    </>
  );
}
