import { CheckoutActions, ICheckout, initialCheckoutState } from '../checkout';

// DELETE ME ENTRIE FILE

export interface CheckoutAction {
  type: CheckoutActions;
  payload: any;
}

export const checkoutReducer = (
  state: ICheckout = initialCheckoutState,
  action: CheckoutAction,
): ICheckout => {
  switch (action.type) {
    case CheckoutActions.SET_IS_PAYMENT_PROCESSING: {
      return { ...state, isPaymentProcessing: action.payload };
    }
    default:
      return state;
  }
};
