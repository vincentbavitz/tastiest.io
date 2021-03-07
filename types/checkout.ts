// TODO CHANGE IDEAL TO IOFFER
import { IDeal } from './cms';

export interface IOrder {
  deal: IDeal;
  restaurantName: string;
  restaurantId: string;
  userId: string;
  heads: number;
  // Timestamps
  orderedAt: number;
  dealDatedFor: number;
  fromSlug: string;
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
