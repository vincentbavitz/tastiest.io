import { IFigureImage, IPost } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { generateStaticURL } from '../../utils/routing';

export function ArticleCardRow(post: IPost) {
  const { isDesktop } = useScreenSize();
  const { city, slug, cuisine } = post;

  const { href, as } = useMemo(
    () =>
      generateStaticURL({
        city,
        slug,
        cuisine,
        restaurant: post.restaurant.uriName,
      }),
    [],
  );

  return (
    <>
      {!isDesktop ? (
        <div className="flex flex-col w-full mb-6 space-y-4">
          <div className="flex w-full space-x-6">
            <ArticlePreviewImage
              image={post.deal.image}
              isDesktop={isDesktop}
            />
            <div className="w-2/3">
              <h3 className="text-2xl font-primary text-primary">
                {post.title}
              </h3>
            </div>
          </div>

          <ArticlePreviewContent description={post.description} />
        </div>
      ) : (
        <div className="flex w-full space-x-6">
          <ArticlePreviewImage image={post.deal.image} isDesktop={isDesktop} />
          <div
            style={{ width: 'min-content' }}
            className="flex flex-col flex-grow"
          >
            <Link href={href} as={as}>
              <a className="text-xl font-primary text-primary">{post.title}</a>
            </Link>

            <ArticlePreviewContent description={post.description} />
          </div>
        </div>
      )}
    </>
  );
}

const ArticlePreviewContent = ({ description }: { description: string }) => (
  <p
    style={{
      lineHeight: '1.33em',
      height: '4em',
    }}
    className="overflow-hidden text-base"
  >
    {description}
  </p>
);

const ArticlePreviewImage = ({
  image,
  isDesktop,
}: {
  image: IFigureImage;
  isDesktop: boolean;
}) => (
  <div
    style={{
      width: !isDesktop ? '33%' : '10rem',
      height: !isDesktop ? '66%' : '6rem',
    }}
    className="relative overflow-hidden rounded-lg bg-primary bg-opacity-10"
  >
    {image?.url && (
      <img
        src={image?.url}
        alt={image?.description}
        className="object-cover w-full h-full rounded-lg"
      />
    )}
  </div>
);
