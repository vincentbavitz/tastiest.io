// TODO CHANGE IDEAL TO IOFFER
import { IDeal } from './cms';

export interface IOrder {
  id: string;
  deal: IDeal;
  userId: string;
  heads: number;
  fromSlug: string;
  totalPrice: number;

  // Timestamps
  // Null denotes not paid yet; not done yet.
  paidAt: null | number;
  orderedAt: null | number;
  abandonedAt: null | number;
}

export enum CheckoutStep {
  SIGN_IN = 'SIGN_IN',
  PAYMENT = 'PAYMENT',
  COMPLETE = 'COMPLETE',
}

export enum CheckoutSignInTabSelected {
  HAS_ACCOUNT = 'HAS_ACCOUNT',
  NEW_USER = 'NEW_USER',
}

export interface IPaymentDetails {
  cardHolderName: string;
  cardExpiry: string;
  cardPostCode: string;
}

export interface IContactDetails {
  firstName: string;
  lastName: string;
  birthday: { day: string; month: string; year: string };
  address: string;
  mobile: string;
}

export interface ICheckoutDetails {
  payment: IPaymentDetails;
  contact: IContactDetails;
}

export enum CardBrand {
  VISA = 'VISA',
  MASTERO = 'MASTERO',
  MASTERCARD = 'MASTERCARD',
}
