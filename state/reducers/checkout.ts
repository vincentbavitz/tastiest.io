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
    case CheckoutActions.ADD_TO_CART: {
      return { ...state, cart: action.payload };
    }
    case CheckoutActions.CLEAR_CART: {
      return { ...state, cart: undefined };
    }
    case CheckoutActions.SET_COUPON: {
      return { ...state, coupon: action.payload };
    }
    case CheckoutActions.REMOVE_COUPON: {
      return { ...state, coupon: undefined };
    }
    case CheckoutActions.SET_CHECKOUT_STEP: {
      return { ...state, flow: { ...state.flow, step: action.payload } };
    }
    case CheckoutActions.SET_SIGN_IN_TAB_SELECTED: {
      return {
        ...state,
        flow: { ...state.flow, signInTabSelected: action.payload },
      };
    }
    default:
      return state;
  }
};
