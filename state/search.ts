import { ISanityArticle } from '../types/article';

export interface ISearch {
  searchQuery: string;
  searchResultItems: Array<ISanityArticle>;
}

export const initialSearchState: ISearch = {
  searchQuery: '',
  searchResultItems: [],
};

export enum SearchActions {
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  SET_SEARCH_RESULT_ITEMS = 'SET_SEARCH_RESULT_ITEMS',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //

export const setSearchResultItems = (payload: Array<ISanityArticle>) => ({
  type: SearchActions.SET_SEARCH_RESULT_ITEMS,
  payload,
});

export const setSearchQuery = (payload: string) => ({
  type: SearchActions.SET_SEARCH_QUERY,
  payload,
});
