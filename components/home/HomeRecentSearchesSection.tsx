import React from 'react';
import { OutlineBlock } from '../OutlineBlock';
import { SectionTitle } from '../SectionTitle';

interface RecentSearchItem {
  value: string;
  timestamp: number;
}

export function HomeRecentSearchesSection() {
  // Get recent searches from session / account data

  const recentSearches = [
    { value: 'Spanish', timestamp: Date.now() },
    { value: 'Best Pasta', timestamp: Date.now() },
    { value: 'Best Xiao Long Bao in London', timestamp: Date.now() },
  ] as Array<RecentSearchItem>;

  return (
    <div>
      <SectionTitle>Your recent searches</SectionTitle>
      <div className="flex mt-8 space-x-4">
        {recentSearches.map(search => (
          <OutlineBlock key={search.timestamp}>{search.value}</OutlineBlock>
        ))}
      </div>
    </div>
  );
}
