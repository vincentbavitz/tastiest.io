import {
  ExperiencePost,
  RestaurantContentful,
  TastiestDish,
} from '@tastiest-io/tastiest-utils';

export type SearchResult = {
  posts: ExperiencePost[];
  dishes: TastiestDish[];
  restaurants: RestaurantContentful[];
};

export interface ISearch {
  searchQuery: string;
  searchBarPinnedToHeader: boolean;
  searchResult: SearchResult | null;
}

export const initialSearchState: ISearch = {
  searchQuery: '',
  searchResult: null,
  searchBarPinnedToHeader: false,
};

export enum SearchActions {
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  SET_SEARCH_RESULT = 'SET_SEARCH_RESULT',
  SET_SEARCH_BAR_PINNED_TO_HEADER = 'SET_SEARCH_BAR_PINNED_TO_HEADER',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //
export const setSearchResult = (payload: SearchResult) => ({
  type: SearchActions.SET_SEARCH_RESULT,
  payload,
});

export const setSearchQuery = (payload: string) => ({
  type: SearchActions.SET_SEARCH_QUERY,
  payload,
});

export const setSearchBarPinnedToHeader = (payload: boolean) => ({
  type: SearchActions.SET_SEARCH_BAR_PINNED_TO_HEADER,
  payload,
});
