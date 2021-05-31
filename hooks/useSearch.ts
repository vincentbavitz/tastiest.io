import {
  CmsApi,
  dlog,
  IPost,
  IRecentSearch,
  UserData,
} from '@tastiest-io/tastiest-utils';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../state/reducers';
import { setSearchResultItems } from '../state/search';
import { useAuth } from './useAuth';
import { useUserData } from './useUserData';

export function useSearch() {
  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);
  const searchState = useSelector((state: IState) => state.search);
  const results = searchState?.searchResultItems ?? [];
  const query = searchState.searchQuery ?? '';
  const dispatch = useDispatch();

  const cms = React.useMemo(
    () =>
      new CmsApi(
        process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        'production',
      ),
    [process],
  );

  const search = async (query: string): Promise<IPost[]> => {
    const { posts } = await cms.searchPosts(query.trim());

    const results = posts?.filter(post =>
      // Ensure all values are present in each post
      Object.values(post).every(value => Boolean(value)),
    );

    dlog('search ➡️ results:', results);

    // throttledSetSearchResultItems(results);
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

  return { search, saveUserSearch, query, results };
}
