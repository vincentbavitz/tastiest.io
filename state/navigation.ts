import { AuthFlowStep } from 'components/modals/auth/AuthModal';

export interface INavigation {
  isAuthModalOpen: boolean;
  authModalStep: AuthFlowStep;

  searchOverlayExpanded: boolean;
  isArticleHiwOpen: boolean;
  isOfferMenuOpen: boolean;
  cuisineBarScrollPos: number;

  // Loading Stuff
  isPageLoading: boolean;
  isRouteLoading: boolean;
  isInitialLoading: boolean;
  isContentLoading: boolean;
  shouldRenderLoader: boolean | null;
}

export const initialNavigationState: INavigation = {
  isAuthModalOpen: false,
  authModalStep: AuthFlowStep.SIGN_IN,

  searchOverlayExpanded: false,
  cuisineBarScrollPos: 0,
  isOfferMenuOpen: false,
  isArticleHiwOpen: false,

  // Loader properties
  isPageLoading: true,
  isRouteLoading: false,
  isInitialLoading: true,
  isContentLoading: true,
  shouldRenderLoader: true,
};

export enum NavigationActions {
  OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL',
  CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL',
  SET_AUTH_MODAL_STEP = 'SET_AUTH_MODAL_STEP',

  EXPAND_SEARCH_OVERLAY = 'EXPAND_SEARCH_OVERLAY',
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
  type: NavigationActions.OPEN_AUTH_MODAL,
});

export const closeAuthModal = () => ({
  type: NavigationActions.CLOSE_AUTH_MODAL,
});

export const setAuthModalStep = (step: AuthFlowStep) => ({
  type: NavigationActions.SET_AUTH_MODAL_STEP,
  payload: step,
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
