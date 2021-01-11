import React from 'react';
import { v4 as uuid } from 'uuid';
import { IRecentSearch } from '../../types/firebase';
import { OutlineBlock } from '../OutlineBlock';
import { SectionTitle } from '../SectionTitle';

export function HomeRecentSearchesSection() {
  // Get recent searches from session / account data

  const recentSearches: Array<IRecentSearch> = [
    { query: 'Spanish', timestamp: Date.now() },
    { value: 'Best Pasta', timestamp: Date.now() },
    { value: 'Best Xiao Long Bao in London', timestamp: Date.now() },
  ] as Array<RecentSearchItem>;

  return (
    <div>
      <SectionTitle>Your recent searches</SectionTitle>
      <div className="flex mt-8 space-x-4">
        {recentSearches.map(search => (
          <OutlineBlock key={uuid()}>{search.value}</OutlineBlock>
        ))}
      </div>
    </div>
  );
}
