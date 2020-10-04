export interface INavigation {
  cuisineBarScrollPos: number;
}

export const initialNavigationState: INavigation = {
  cuisineBarScrollPos: 0,
};

export enum NavigationActions {
  SAVE_CUISINE_BAR_SCROLL_POS = 'SAVE_CUISINE_BAR_SCROLL_POS',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //

export const saveCuisineBarScrollPos = (scrollPosition: number) => ({
  type: NavigationActions.SAVE_CUISINE_BAR_SCROLL_POS,
  payload: scrollPosition,
});
