export interface ICheckoutFlow {
  step: CheckoutStep;
  signInTabSelected: CheckoutSignInTabSelected;
}

export interface ICheckout {
  flow?: ICheckoutFlow;
  onCheckoutPage: boolean;
  isPaymentProcessing: boolean;
}

export enum CheckoutStep {
  SIGN_IN = 'SIGN_IN',
  PAYMENT = 'PAYMENT',
  COMPLETE = 'COMPLETE',
}

export enum CheckoutSignInTabSelected {
  HAS_ACCOUNT = 'HAS_ACCOUNT',
  NEW_USER = 'NEW_USER',
  NONE = 'NONE',
}

export const initialCheckoutState: ICheckout = {
  flow: {
    step: CheckoutStep.SIGN_IN,
    signInTabSelected: CheckoutSignInTabSelected.NONE,
  },
  onCheckoutPage: false,
  isPaymentProcessing: false,
};

export enum CheckoutActions {
  SET_CHECKOUT_STEP = 'SET_CHECKOUT_STEP',
  SET_SIGN_IN_TAB_SELECTED = 'SET_SIGN_IN_TAB_SELECTED',
  SET_ON_CHECKOUT_PAGE = 'SET_ON_CHECKOUT_PAGE',
  SET_IS_PAYMENT_PROCESSING = 'SET_IS_PAYMENT_PROCESSING',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //

export const setCheckoutStep = (step: CheckoutStep) => ({
  type: CheckoutActions.SET_CHECKOUT_STEP,
  payload: step,
  // TRIGGER ANALYTICS
});

export const setSignInTabSelected = (selected: CheckoutSignInTabSelected) => ({
  type: CheckoutActions.SET_SIGN_IN_TAB_SELECTED,
  payload: selected,
});

export const setOnCheckoutPage = (value: boolean) => ({
  type: CheckoutActions.SET_ON_CHECKOUT_PAGE,
  payload: value,
});

export const setIsPaymentProcessing = (processing: boolean) => ({
  type: CheckoutActions.SET_IS_PAYMENT_PROCESSING,
  payload: processing,
});
