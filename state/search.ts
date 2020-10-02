import { ISanityArticle } from '../types/article';

export interface ISearch {
  searchResultItems: Array<ISanityArticle>;
}

export const initialSearchState: ISearch = {
  searchResultItems: [],
};

export enum SearchActions {
  SET_SEARCH_RESULT_ITEMS = 'SET_SEARCH_RESULT_ITEMS',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //

export const setSearchResultItems = (payload: Array<ISanityArticle>) => ({
  type: SearchActions.SET_SEARCH_RESULT_ITEMS,
  payload,
});
