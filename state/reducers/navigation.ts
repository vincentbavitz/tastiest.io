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
      return { ...state, isAuthModalOpen: true };
    }
    case NavigationActions.CLOSE_SIGN_IN_MODAL: {
      return { ...state, isAuthModalOpen: false };
    }
    case NavigationActions.SET_MODAL_IS_OPEN: {
      return { ...state, modalIsOpen: action.payload };
    }
    case NavigationActions.TOGGLE_OFFER_MENU_MODAL: {
      return { ...state, isOfferMenuOpen: action.payload };
    }
    case NavigationActions.TOGGLE_ARTICLE_HIW_MODAL: {
      return { ...state, isArticleHiwOpen: action.payload };
    }
    case NavigationActions.SET_IS_PAGE_LOADING: {
      return { ...state, isPageLoading: action.payload };
    }
    case NavigationActions.SET_IS_ROUTE_LOADING: {
      return { ...state, isRouteLoading: action.payload };
    }
    case NavigationActions.SET_IS_CONTENT_LOADING: {
      return { ...state, isContentLoading: action.payload };
    }
    case NavigationActions.SET_IS_INITIAL_LOADING: {
      return { ...state, isInitialLoading: action.payload };
    }
    case NavigationActions.SET_SHOULD_RENDER_LOADER: {
      return { ...state, shouldRenderLoader: action.payload };
    }
    default:
      return state;
  }
};
