export interface ICheckout {
  cart?: string;
  coupon?: string;
  createdAt?: number;
  priceGBP?: number;
}

export const initialCheckoutState: ICheckout = {};

export enum CheckoutActions {
  ADD_TO_CART = 'ADD_TO_CART',
  CLEAR_CART = 'CLEAR_CART',
  SET_COUPON = 'SET_COUPON',
  REMOVE_COUPON = 'REMOVE_COUPON',
}

// ////////////////////////////// //
//         Action Creators        //
// ////////////////////////////// //
export const addToCard = (item: string) => ({
  type: CheckoutActions.ADD_TO_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CheckoutActions.CLEAR_CART,
});

export const setCoupon = (coupon: string) => ({
  type: CheckoutActions.SET_COUPON,
  payload: coupon,
});

export const removeCoupon = (coupon: string) => ({
  type: CheckoutActions.REMOVE_COUPON,
  payload: coupon,
});
