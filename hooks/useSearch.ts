import {
  CmsApi,
  IPost,
  IRecentSearch,
  IRestaurant,
  ITastiestDish,
  UserData,
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
  const cms = React.useMemo(() => new CmsApi(), [process]);

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

    const posts = results[0].posts ?? ([] as IPost[]);
    const dishes = results[1].dishes ?? ([] as ITastiestDish[]);
    const restaurants = results[2].restaurants ?? ([] as IRestaurant[]);

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
