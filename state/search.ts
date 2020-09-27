import { IArticle } from '../types/article';

export interface ISearch {
  searchResultItems: Array<IArticle>;
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

export const setSearchResultItems = (payload: Array<IArticle>) => ({
  type: SearchActions.SET_SEARCH_RESULT_ITEMS,
  payload,
});
