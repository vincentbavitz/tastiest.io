import { ExperiencePost } from '@tastiest-io/tastiest-utils';
import { CardGrid } from 'components/cards/CardGrid';
import { ExperienceCard } from 'components/cards/ExperienceCard';
import { Contained } from 'components/Contained';
import { SectionTitle } from 'components/SectionTitle';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';

interface RecommendedPostsProps {
  label: string;
  posts: ExperiencePost[];
  rowLimit?: number;
}

export default function RecommendedPosts(props: RecommendedPostsProps) {
  const { label, posts, rowLimit = 2 } = props;
  const { isMobile } = useScreenSize();

  return (
    <div>
      <Contained>
        <SectionTitle>{label}</SectionTitle>
      </Contained>

      <div className="mt-10">
        <CardGrid
          size={!isMobile ? 'small' : 'medium'}
          rowLimit={rowLimit}
          horizontalScroll
        >
          {posts?.map(post => (
            <div key={post.id.toLowerCase()}>
              <ExperienceCard compact {...post} />
            </div>
          ))}
        </CardGrid>
      </div>
    </div>
  );
}
