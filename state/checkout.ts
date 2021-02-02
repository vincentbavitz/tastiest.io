export enum CheckoutStep {
  SIGN_IN = 'SIGN_IN',
  PAYMENT = 'PAYMENT',
  COMPLETE = 'COMPLETE',
}

export enum CheckoutSignInTabSelected {
  HAS_ACCOUNT = 'HAS_ACCOUNT',
  NEW_USER = 'NEW_USER',
}

export interface ICheckoutFlow {
  step: CheckoutStep;
  signInTabSelected: CheckoutSignInTabSelected;
}

export interface ICheckout {
  cart?: string;
  coupon?: string;
  createdAt?: number;
  priceGBP?: number;
  flow?: ICheckoutFlow;
}

export const initialCheckoutState: ICheckout = {
  flow: {
    step: CheckoutStep.SIGN_IN,
    signInTabSelected: CheckoutSignInTabSelected.HAS_ACCOUNT,
  },
};

export enum CheckoutActions {
  ADD_TO_CART = 'ADD_TO_CART',
  CLEAR_CART = 'CLEAR_CART',
  SET_COUPON = 'SET_COUPON',
  REMOVE_COUPON = 'REMOVE_COUPON',
  SET_CHECKOUT_STEP = 'SET_CHECKOUT_STEP',
  SET_SIGN_IN_TAB_SELECTED = 'SET_SIGN_IN_TAB_SELECTED',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //
export const addToCard = (item: string) => ({
  type: CheckoutActions.ADD_TO_CART,
  payload: item,
  // TRIGGER ANALYTICS
});

export const clearCart = () => ({
  type: CheckoutActions.CLEAR_CART,
  // TRIGGER ANALYTICS
});

export const setCoupon = (coupon: string) => ({
  type: CheckoutActions.SET_COUPON,
  payload: coupon,
}); // TRIGGER ANALYTICS;

export const removeCoupon = (coupon: string) => ({
  type: CheckoutActions.REMOVE_COUPON,
  payload: coupon,
  // TRIGGER ANALYTICS
});

export const setCheckoutStep = (step: CheckoutStep) => ({
  type: CheckoutActions.SET_CHECKOUT_STEP,
  payload: step,
  // TRIGGER ANALYTICS
});

export const setSignInTabSelected = (selected: CheckoutSignInTabSelected) => ({
  type: CheckoutActions.SET_SIGN_IN_TAB_SELECTED,
  payload: selected,
});

// RETURNED TO CART EVENT

// IF USER TRIGGERS ADD TO CARD BUT NOT COMPLETE CART;
// SEND
//
//
//
