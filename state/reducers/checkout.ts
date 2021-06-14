import { CheckoutActions, ICheckout, initialCheckoutState } from '../checkout';

export interface CheckoutAction {
  type: CheckoutActions;
  payload: any;
}

export const checkoutReducer = (
  state: ICheckout = initialCheckoutState,
  action: CheckoutAction,
): ICheckout => {
  switch (action.type) {
    case CheckoutActions.SET_SIGN_IN_TAB_SELECTED: {
      return {
        ...state,
        signInTabSelected: action.payload,
      };
    }
    case CheckoutActions.SET_ON_CHECKOUT_PAGE: {
      return { ...state, onCheckoutPage: action.payload };
    }
    case CheckoutActions.SET_IS_PAYMENT_PROCESSING: {
      return { ...state, isPaymentProcessing: action.payload };
    }
    default:
      return state;
  }
};
