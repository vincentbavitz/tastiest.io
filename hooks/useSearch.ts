import {
  CmsApi,
  IPost,
  IRecentSearch,
  UserData,
} from '@tastiest-io/tastiest-utils';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'react-use';
import { IState } from '../state/reducers';
import { setSearchResultItems } from '../state/search';
import { useAuth } from './auth/useAuth';
import { useUserData } from './useUserData';

export function useSearch() {
  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);
  const searchState = useSelector((state: IState) => state.search);
  const dispatch = useDispatch();
  const cms = React.useMemo(() => new CmsApi(), [process]);

  const query = searchState.searchQuery ?? '';
  const results = searchState?.searchResultItems ?? [];

  const [isSearching, setIsSearching] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useDebounce(
    () => {
      setDebouncedQuery(query);
    },
    500,
    [query],
  );

  useEffect(
    () => {
      if (debouncedQuery?.length) {
        setIsSearching(true);
        search(debouncedQuery).then(() => {
          setIsSearching(false);
        });
      }
    },
    [debouncedQuery], // Only call effect if debounced search term changes
  );

  const search = async (query: string): Promise<IPost[]> => {
    const { posts } = await cms.searchPosts(query.trim());
    const results = posts?.filter(post =>
      // Ensure all values are present in each post
      Object.values(post).every(value => Boolean(value)),
    );

    dispatch(setSearchResultItems(results));
    return results;
  };

  const saveUserSearch = (query: string) => {
    // Save to Session

    // Save to user's file if logged in
    if (user?.uid) {
      const recentSearch: IRecentSearch = {
        query,
        timestamp: Date.now(),
      };

      setUserData(UserData.RECENT_SEARCHES, [
        ...(userData?.recentSearches ?? []),
        recentSearch,
      ]);
    }
  };

  return { saveUserSearch, query, results, isSearching };
}
