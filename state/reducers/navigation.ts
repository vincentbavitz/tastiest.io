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
    case NavigationActions.SAVE_CUISINE_BAR_SCROLL_POS: {
      return { ...state, cuisineBarScrollPos: action.payload };
    }
    default:
      return state;
  }
};
