import React, { useContext } from 'react';
import { ScreenContext } from '../../contexts/screen';
import { IArticle } from '../../types/article';
import { Title } from '../Title';

export function ArticleCardRow(post: IArticle) {
  const { isMobile } = useContext(ScreenContext);

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
        width: isMobile ? '33%' : '10rem',
        height: isMobile ? '0' : '6rem',
        paddingBottom: isMobile ? '20%' : 'unset',
      }}
      className="rounded-lg bg-primary bg-opacity-10"
    ></div>
  );

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col w-full space-y-4 mb-6">
          <div className="flex w-full space-x-6">
            <ArticlePreviewImage />
            <div className="w-2/3">
              <Title
                level={1}
                margin={false}
                className="font-somatic text-twoxl text-primary"
              >
                {post.title}
              </Title>
            </div>
          </div>

          <ArticlePreviewContent />
        </div>
      ) : (
        <div className="flex w-full space-x-6">
          <ArticlePreviewImage />
          <div
            style={{ width: 'fit-content' }}
            className="flex flex-col flex-grow"
          >
            <Title
              level={3}
              margin={false}
              className="font-somatic text-primary"
            >
              {post.title}
            </Title>

            <ArticlePreviewContent />
          </div>
        </div>
      )}
    </>
  );
}
