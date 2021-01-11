import { useRouter } from 'next/router';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { useUserData } from '../../hooks/userData';
import { HorizontalScrollable } from '../HorizontalScrollable';
import { OutlineBlock } from '../OutlineBlock';
import { SectionTitle } from '../SectionTitle';

export function HomeRecentSearchesSection() {
  // Get recent searches from session / account data
  const { userData } = useUserData();
  const { recentSearches = [] } = userData ?? {};

  const router = useRouter();

  return (
    <>
      {recentSearches.length ? (
        <div className="flex flex-col space-y-6">
          <SectionTitle>Your recent searches</SectionTitle>
          <HorizontalScrollable>
            <div className="flex space-x-4">
              {recentSearches.slice(0, 10).map(item => (
                <OutlineBlock
                  key={uuid()}
                  onClick={() => router.push(`/search?s=${item.query}`)}
                >
                  {item?.query.slice(0, 15)}
                </OutlineBlock>
              ))}
            </div>
          </HorizontalScrollable>
        </div>
      ) : null}
    </>
  );
}
