export interface ICheckout {
  onCheckoutPage: boolean;
  isPaymentProcessing: boolean;
}

export enum CheckoutStep {
  SIGN_IN = 'SIGN_IN',
  PAYMENT = 'PAYMENT',
  COMPLETE = 'COMPLETE',
}

export const initialCheckoutState: ICheckout = {
  onCheckoutPage: false,
  isPaymentProcessing: false,
};

export enum CheckoutActions {
  SET_ON_CHECKOUT_PAGE = 'SET_ON_CHECKOUT_PAGE',
  SET_IS_PAYMENT_PROCESSING = 'SET_IS_PAYMENT_PROCESSING',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //

export const setOnCheckoutPage = (value: boolean) => ({
  type: CheckoutActions.SET_ON_CHECKOUT_PAGE,
  payload: value,
});

export const setIsPaymentProcessing = (processing: boolean) => ({
  type: CheckoutActions.SET_IS_PAYMENT_PROCESSING,
  payload: processing,
});
