export enum ModalInstance {
  LOGIN = 'LOGIN',
}

export interface INavigation {
  searchOverlayExpanded: boolean;
  isAuthModalOpen: boolean;
  cuisineBarScrollPos: number;
  openedModal: ModalInstance | null;
}

export const initialNavigationState: INavigation = {
  searchOverlayExpanded: false,
  isAuthModalOpen: false,
  cuisineBarScrollPos: 0,
  openedModal: null,
};

export enum NavigationActions {
  EXPAND_SEARCH_OVERLAY = 'EXPAND_SEARCH_OVERLAY',
  OPEN_SIGN_IN_MODAL = 'OPEN_SIGN_IN_MODAL',
  CLOSE_SIGN_IN_MODAL = 'CLOSE_SIGN_IN_MODAL',
  COLLAPSE_SEARCH_OVERLAY = 'COLLAPSE_SEARCH_OVERLAY',
  TOGGLE_SEARCH_OVERLAY = 'TOGGLE_SEARCH_OVERLAY',
  SAVE_CUISINE_BAR_SCROLL_POS = 'SAVE_CUISINE_BAR_SCROLL_POS',
  SET_MODAL_IS_OPEN = 'SET_MODAL_IS_OPEN',
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
