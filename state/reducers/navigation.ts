import {
  INavigation,
  initialNavigationState,
  NavigationActions,
} from '../navigation';

export interface NavigationAction {
  type: NavigationActions;
  payload: any;
}

export const navigationReducer = (
  state: INavigation = initialNavigationState,
  action: NavigationAction,
) => {
  switch (action.type) {
    case NavigationActions.EXPAND_SEARCH_BAR: {
      return { ...state, searchBarExpanded: true };
    }

    case NavigationActions.COLLAPSE_SEARCH_BAR: {
      return { ...state, searchBarExpanded: false };
    }

    case NavigationActions.TOGGLE_SEARCH_BAR: {
      return { ...state, searchBarExpanded: !state.searchBarExpanded };
    }

    default:
      return state;
  }
};
