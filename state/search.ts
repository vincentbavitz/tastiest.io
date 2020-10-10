import { ISanityArticle } from '../types/article';

export interface ISearchBarGeometry {
  height?: number;
  width?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface ISearch {
  searchQuery: string;
  searchResultItems: Array<ISanityArticle>;
  searchBarGeometry: ISearchBarGeometry;
}

export const initialSearchState: ISearch = {
  searchQuery: '',
  searchResultItems: [],
  searchBarGeometry: {
    height: undefined,
    width: undefined,
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  },
};

export enum SearchActions {
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  SET_SEARCH_RESULT_ITEMS = 'SET_SEARCH_RESULT_ITEMS',
  SET_SEARCH_BAR_GEOMETRY = 'SET_SEARCH_BAR_GEOMETRY',
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

export const setSearchBarGeometry = (payload: ISearchBarGeometry) => ({
  type: SearchActions.SET_SEARCH_BAR_GEOMETRY,
  payload,
});
