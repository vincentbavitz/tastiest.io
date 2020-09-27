export interface INavigation {
  searchBarExpanded: boolean;
  profile?: undefined;
}

export const initialNavigationState: INavigation = {
  searchBarExpanded: true,
};

export enum NavigationActions {
  EXPAND_SEARCH_BAR = 'EXPAND_SEARCH_BAR',
  COLLAPSE_SEARCH_BAR = 'COLLAPSE_SEARCH_BAR',
  TOGGLE_SEARCH_BAR = 'TOGGLE_SEARCH_BAR',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //

export const toggleExpandSearchBar = () => ({
  type: NavigationActions.TOGGLE_SEARCH_BAR,
});

export const expandSearchBar = () => ({
  type: NavigationActions.EXPAND_SEARCH_BAR,
});

export const collapseSearchBar = () => ({
  type: NavigationActions.COLLAPSE_SEARCH_BAR,
});
