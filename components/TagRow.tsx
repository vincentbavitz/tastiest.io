import React from 'react';
import { TagBlock } from './TagBlock';

interface Props {
  limit?: number;
  tags: string[];
  size?: 'small' | 'medium' | 'large';
}

export function TagRow({ tags, limit, size }: Props) {
  // Get the smallest tags so that we can fit as any as possible in
  const smallestTags = tags
    .sort((a, b) => a.length - b.length)
    .filter(tag => Boolean(tag))
    .slice(0, limit ?? 10);

  return (
    <div
      style={{
        height: `calc(${
          size === 'large' ? '1.5' : size === 'medium' ? '1.25' : '1.25'
        }rem + ${size === 'large' ? '7' : size === 'medium' ? '5' : '2'}px)`,
      }}
      className="flex flex-wrap space-x-2 overflow-hidden"
    >
      {smallestTags.map(tag => (
        <div key={tag} className="mb-2">
          <TagBlock tag={tag} size={'small'} />
        </div>
      ))}
    </div>
  );
}
