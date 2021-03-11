// TODO CHANGE IDEAL TO IOFFER
import { IDeal } from './cms';

export interface IOrder {
  id: string;
  deal: IDeal;
  userId: string;
  heads: number;
  orderedAt: number;
  fromSlug: string;
  isPaid: boolean;
  totalPrice: number;
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
