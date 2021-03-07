import { StripeError } from '@stripe/stripe-js';
import {
  CheckoutSignInTabSelected,
  CheckoutStep,
  ICheckoutDetails,
  IOrder,
} from '../types/checkout';

export interface ICheckoutFlow {
  step: CheckoutStep;
  signInTabSelected: CheckoutSignInTabSelected;
  // Details as they have been verified either serverside
  // or from Firebase
  verifiedDetails: ICheckoutDetails;
}

export interface ICheckout {
  order?: IOrder;
  coupon?: string;
  createdAt?: number;
  priceGBP?: number;
  flow?: ICheckoutFlow;
  stripeError?: string;
  onCheckoutPage: boolean;
}

export const initialCheckoutState: ICheckout = {
  flow: {
    step: CheckoutStep.SIGN_IN,
    signInTabSelected: CheckoutSignInTabSelected.HAS_ACCOUNT,
    verifiedDetails: {
      payment: {
        cardHolderName: '',
        cardExpiry: '',
        cardPostCode: '',
      },
      contact: {
        firstName: '',
        lastName: '',
        birthday: { day: '', month: '', year: '' },
        address: '',
      },
    },
  },
  stripeError: undefined,
  order: undefined,
  onCheckoutPage: false,
};

export enum CheckoutActions {
  SET_ORDER = 'SET_ORDER',
  SET_COUPON = 'SET_COUPON',
  SET_STRIPE_ERROR = 'SET_STRIPE_ERROR',
  SET_CHECKOUT_STEP = 'SET_CHECKOUT_STEP',
  SET_SIGN_IN_TAB_SELECTED = 'SET_SIGN_IN_TAB_SELECTED',
  SET_ON_CHECKOUT_PAGE = 'SET_ON_CHECKOUT_PAGE',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //
export const setOrder = (item: IOrder) => ({
  type: CheckoutActions.SET_ORDER,
  payload: item,
  // TRIGGER ANALYTICS
});

export const clearOrder = () => ({
  type: CheckoutActions.SET_ORDER,
  payload: undefined,
  // TRIGGER ANALYTICS
});

export const setCoupon = (coupon: string) => ({
  type: CheckoutActions.SET_COUPON,
  payload: coupon,
}); // TRIGGER ANALYTICS;

export const removeCoupon = () => ({
  type: CheckoutActions.SET_COUPON,
  payload: undefined,
  // TRIGGER ANALYTICS
});

export const setStripeError = (error: StripeError) => ({
  type: CheckoutActions.SET_STRIPE_ERROR,
  payload: error,
});

export const clearPaymentError = () => ({
  type: CheckoutActions.SET_STRIPE_ERROR,
  payload: undefined,
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

export const setOnCheckoutPage = (value: boolean) => ({
  type: CheckoutActions.SET_ON_CHECKOUT_PAGE,
  payload: value,
});

// RETURNED TO CART EVENT

// IF USER TRIGGERS ADD TO CARD BUT NOT COMPLETE CART;
// SEND
//
//
//
