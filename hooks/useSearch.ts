import {
  CmsApi,
  ExperiencePost,
  RecentSearch,
  RestaurantContentful,
  TastiestDish,
  UserDataKey,
} from '@tastiest-io/tastiest-utils';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'react-use';
import { IState } from '../state/reducers';
import { SearchResult, setSearchResult } from '../state/search';
import { useAuth } from './auth/useAuth';
import { useUserData } from './useUserData';

export function useSearch() {
  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);
  const searchState = useSelector((state: IState) => state.search);
  const dispatch = useDispatch();
  const cms = React.useMemo(
    () =>
      new CmsApi(
        undefined,
        undefined,
        process.env.NODE_ENV as 'production' | 'development',
      ),
    [process],
  );

  const query = searchState.searchQuery ?? '';
  const results = searchState?.searchResult ?? null;

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

  const search = async (query: string): Promise<SearchResult> => {
    const postsPromise = cms.searchPosts(query.trim());
    const dishesPromise = cms.searchTastiestDishes(query.trim());
    const restaurantsPromise = cms.searchRestaurants(query.trim());

    // Search all content
    const results = await Promise.all([
      postsPromise,
      dishesPromise,
      restaurantsPromise,
    ]);

    const posts = results[0].posts ?? ([] as ExperiencePost[]);
    const dishes = results[1].dishes ?? ([] as TastiestDish[]);
    const restaurants =
      results[2].restaurants ?? ([] as RestaurantContentful[]);

    const result = {
      posts,
      dishes,
      restaurants,
    };

    dispatch(setSearchResult(result));
    return result;
  };

  const saveUserSearch = (query: string) => {
    // Save to Session

    // Save to user's file if logged in
    if (user?.uid) {
      const recentSearch: RecentSearch = {
        query,
        timestamp: Date.now(),
      };

      setUserData(UserDataKey.METRICS, {
        recentSearches: [
          ...(userData?.metrics?.recentSearches ?? []),
          recentSearch,
        ],
      });
    }
  };

  return { saveUserSearch, query, results, isSearching };
}
