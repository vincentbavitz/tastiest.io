export enum ModalInstance {
  LOGIN = 'LOGIN',
  HOW_IT_WORKS = 'HOW_IT_WORKS',
  ARTICLE_MENU = 'ARTICLE_MENU',
  RESTAURANT_MAP = 'RESTAURANT_MAP',
  CHECKOUT_PAYMENT_ISSUE = 'CHECKOUT_PAYMENT_ISSUE',
}

export interface INavigation {
  searchOverlayExpanded: boolean;
  isAuthModalOpen: boolean;
  isArticleHiwOpen: boolean;
  isOfferMenuOpen: boolean;
  cuisineBarScrollPos: number;
  openedModal: ModalInstance | null;

  // Loading Stuff
  isPageLoading: boolean;
  isRouteLoading: boolean;
  isInitialLoading: boolean;
  isContentLoading: boolean;
  shouldRenderLoader: boolean | null;
}

export const initialNavigationState: INavigation = {
  searchOverlayExpanded: false,
  cuisineBarScrollPos: 0,
  openedModal: null,
  isOfferMenuOpen: false,
  isAuthModalOpen: false,
  isArticleHiwOpen: false,

  // Loader properties
  isPageLoading: true,
  isRouteLoading: false,
  isInitialLoading: true,
  isContentLoading: true,
  shouldRenderLoader: true,
};

export enum NavigationActions {
  EXPAND_SEARCH_OVERLAY = 'EXPAND_SEARCH_OVERLAY',
  OPEN_SIGN_IN_MODAL = 'OPEN_SIGN_IN_MODAL',
  CLOSE_SIGN_IN_MODAL = 'CLOSE_SIGN_IN_MODAL',
  COLLAPSE_SEARCH_OVERLAY = 'COLLAPSE_SEARCH_OVERLAY',
  TOGGLE_SEARCH_OVERLAY = 'TOGGLE_SEARCH_OVERLAY',
  SAVE_CUISINE_BAR_SCROLL_POS = 'SAVE_CUISINE_BAR_SCROLL_POS',
  SET_MODAL_IS_OPEN = 'SET_MODAL_IS_OPEN',
  TOGGLE_OFFER_MENU_MODAL = 'TOGGLE_OFFER_MENU_MODAL', // menu on article page
  TOGGLE_ARTICLE_HIW_MODAL = 'TOGGLE_ARTICLE_HIW_MODAL', // how it works modal on article page

  SET_IS_PAGE_LOADING = 'SET_IS_PAGE_LOADING',
  SET_IS_ROUTE_LOADING = 'SET_IS_ROUTE_LOADING',
  SET_IS_CONTENT_LOADING = 'SET_IS_CONTENT_LOADING',
  SET_IS_INITIAL_LOADING = 'SET_IS_INITIAL_LOADING',
  SET_SHOULD_RENDER_LOADER = 'SET_SHOULD_RENDER_LOADER',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //

export const saveCuisineBarScrollPos = (scrollPosition: number) => ({
  type: NavigationActions.SAVE_CUISINE_BAR_SCROLL_POS,
  payload: scrollPosition,
});

export const expandSearchOverlay = () => ({
  type: NavigationActions.EXPAND_SEARCH_OVERLAY,
});

export const collapseSearchOverlay = () => ({
  type: NavigationActions.COLLAPSE_SEARCH_OVERLAY,
});

export const toggleSearchOverlay = () => ({
  type: NavigationActions.TOGGLE_SEARCH_OVERLAY,
});

export const openAuthModal = () => ({
  type: NavigationActions.OPEN_SIGN_IN_MODAL,
});

export const closeAuthModal = () => ({
  type: NavigationActions.CLOSE_SIGN_IN_MODAL,
});

export const setCurrentOpenModal = (isOpen: boolean) => ({
  type: NavigationActions.SET_MODAL_IS_OPEN,
  payload: isOpen,
});

export const toggleOfferMenu = (isOpen: boolean) => ({
  type: NavigationActions.TOGGLE_OFFER_MENU_MODAL,
  payload: isOpen,
});

export const toggleHiwModal = (isOpen: boolean) => ({
  type: NavigationActions.TOGGLE_ARTICLE_HIW_MODAL,
  payload: isOpen,
});

// Loader action creaters
export const setIsPageLoading = (value: boolean) => ({
  type: NavigationActions.SET_IS_PAGE_LOADING,
  payload: value,
});

export const setIsRouteLoading = (value: boolean) => ({
  type: NavigationActions.SET_IS_ROUTE_LOADING,
  payload: value,
});

export const setIsInitialLoading = (value: boolean) => ({
  type: NavigationActions.SET_IS_INITIAL_LOADING,
  payload: value,
});

export const setIsContentLoading = (value: boolean) => ({
  type: NavigationActions.SET_IS_CONTENT_LOADING,
  payload: value,
});

export const setShouldRenderLoader = (value: boolean) => ({
  type: NavigationActions.SET_SHOULD_RENDER_LOADER,
  payload: value,
});
