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
  searchBarPinnedToHeader: boolean;
  searchResultItems: Array<ISanityArticle>;
  homeSearchBarGeometry: ISearchBarGeometry;
  headerSearchBarGeometry: ISearchBarGeometry;
}

export const initialSearchState: ISearch = {
  searchQuery: '',
  searchResultItems: [],
  searchBarPinnedToHeader: false,
  homeSearchBarGeometry: {
    height: undefined,
    width: undefined,
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  },
  headerSearchBarGeometry: {
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
  SET_HOME_SEARCH_BAR_GEOMETRY = 'SET_HOME_SEARCH_BAR_GEOMETRY',
  SET_HEADER_SEARCH_BAR_GEOMETRY = 'SET_HEADER_SEARCH_BAR_GEOMETRY',
  SET_SEARCH_BAR_PINNED_TO_HEADER = 'SET_SEARCH_BAR_PINNED_TO_HEADER',
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

export const setHomeSearchBarGeometry = (payload: ISearchBarGeometry) => ({
  type: SearchActions.SET_HOME_SEARCH_BAR_GEOMETRY,
  payload,
});

export const setHeaderSearchBarGeometry = (payload: ISearchBarGeometry) => ({
  type: SearchActions.SET_HEADER_SEARCH_BAR_GEOMETRY,
  payload,
});

export const setSearchBarPinnedToHeader = (payload: boolean) => ({
  type: SearchActions.SET_SEARCH_BAR_PINNED_TO_HEADER,
  payload,
});
