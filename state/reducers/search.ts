import { initialSearchState, ISearch, SearchActions } from '../search';

export interface SearchAction {
  type: SearchActions;
  payload: any;
}

export const searchReducer = (
  state: ISearch = initialSearchState,
  action: SearchAction,
) => {
  switch (action.type) {
    case SearchActions.SET_SEARCH_RESULT_ITEMS: {
      return { ...state, searchResultItems: action.payload };
    }
    case SearchActions.SET_SEARCH_QUERY: {
      return { ...state, searchQuery: action.payload };
    }
    default:
      return state;
  }
};
