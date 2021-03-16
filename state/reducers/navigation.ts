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
    case NavigationActions.EXPAND_SEARCH_OVERLAY: {
      return { ...state, searchOverlayExpanded: true };
    }
    case NavigationActions.COLLAPSE_SEARCH_OVERLAY: {
      return { ...state, searchOverlayExpanded: false };
    }
    case NavigationActions.TOGGLE_SEARCH_OVERLAY: {
      return { ...state, searchOverlayExpanded: !state.searchOverlayExpanded };
    }
    case NavigationActions.OPEN_SIGN_IN_MODAL: {
      return { ...state, isSignInModalOpen: true };
    }
    case NavigationActions.CLOSE_SIGN_IN_MODAL: {
      return { ...state, isSignInModalOpen: false };
    }
    case NavigationActions.SET_MODAL_IS_OPEN: {
      return { ...state, modalIsOpen: action.payload };
    }
    case NavigationActions.SET_ARTICLE_OFFER_IS_FLOATING: {
      return { ...state, articleOfferIsFloating: action.payload };
    }
    default:
      return state;
  }
};
