import { IPost } from '@tastiest-io/tastiest-utils';
import { ArticleCard } from 'components/cards/ArticleCard';
import { CardGrid } from 'components/cards/CardGrid';
import { Contained } from 'components/Contained';
import { SectionTitle } from 'components/SectionTitle';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';

interface RecommendedPostsProps {
  label: string;
  posts: IPost[];
  rowLimit?: number;
}

export default function RecommendedPosts(props: RecommendedPostsProps) {
  const { label, posts, rowLimit = 2 } = props;
  const { isDesktop } = useScreenSize();

  return (
    <div>
      <Contained>
        <SectionTitle>{label}</SectionTitle>
      </Contained>

      <div className="mt-10">
        <CardGrid
          size={isDesktop ? 'small' : 'medium'}
          rowLimit={rowLimit}
          horizontalScroll
        >
          {posts?.map(post => (
            <div key={post.id.toLowerCase()}>
              <ArticleCard compact {...post} />
            </div>
          ))}
        </CardGrid>
      </div>
    </div>
  );
}
