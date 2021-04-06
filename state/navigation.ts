export enum ModalInstance {
  LOGIN = 'LOGIN',
}

export enum ArticleOfferLocation {
  FIXED_TOP = 'FIXED_TOP',
  FIXED_BOTTOM = 'FIXED_BOTTOM',
  FLOATING = 'FLOATING',
}

export interface ArticleOfferGeometry {
  articlePxFromTop: number;
  contentPxFromTop: number;
  contentPxFromBottom: number;
}

export interface INavigation {
  searchOverlayExpanded: boolean;
  isSignInModalOpen: boolean;
  cuisineBarScrollPos: number;
  openedModal: ModalInstance | null;

  // For floating offer on desktop
  articleOfferPosition: ArticleOfferLocation;
  articleOfferGeometry: ArticleOfferGeometry;
}

export const initialNavigationState: INavigation = {
  searchOverlayExpanded: false,
  isSignInModalOpen: false,
  cuisineBarScrollPos: 0,
  openedModal: null,
  articleOfferPosition: ArticleOfferLocation.FIXED_TOP,
  articleOfferGeometry: {
    // Estimations on load
    articlePxFromTop: 100,
    contentPxFromTop: 200,
    contentPxFromBottom: 200,
  },
};

export enum NavigationActions {
  EXPAND_SEARCH_OVERLAY = 'EXPAND_SEARCH_OVERLAY',
  OPEN_SIGN_IN_MODAL = 'OPEN_SIGN_IN_MODAL',
  CLOSE_SIGN_IN_MODAL = 'CLOSE_SIGN_IN_MODAL',
  COLLAPSE_SEARCH_OVERLAY = 'COLLAPSE_SEARCH_OVERLAY',
  TOGGLE_SEARCH_OVERLAY = 'TOGGLE_SEARCH_OVERLAY',
  SAVE_CUISINE_BAR_SCROLL_POS = 'SAVE_CUISINE_BAR_SCROLL_POS',
  SET_MODAL_IS_OPEN = 'SET_MODAL_IS_OPEN',
  SET_ARTICLE_OFFER_POSITION = 'SET_ARTICLE_OFFER_POSITION',
  SET_ARTICLE_OFFER_GEOMETRY = 'SET_ARTICLE_OFFER_GEOMETRY',
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

export const openSignInModal = () => ({
  type: NavigationActions.OPEN_SIGN_IN_MODAL,
});

export const closeSignInModal = () => ({
  type: NavigationActions.CLOSE_SIGN_IN_MODAL,
});

export const setCurrentOpenModal = (isOpen: boolean) => ({
  type: NavigationActions.SET_MODAL_IS_OPEN,
  payload: isOpen,
});

export const setArticleOfferPosition = (position: ArticleOfferLocation) => ({
  type: NavigationActions.SET_ARTICLE_OFFER_POSITION,
  payload: position,
});

export const setArticleOfferGeometry = (
  geometry: Partial<ArticleOfferGeometry>,
) => ({
  type: NavigationActions.SET_ARTICLE_OFFER_GEOMETRY,
  payload: geometry,
});
