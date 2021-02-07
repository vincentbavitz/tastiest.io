import { IFigureImage } from './article';

export interface IOrderDeal {
  restaurantID: string;
  restaurantName: string;
  dealName: string; // Grizzly Grumble
  dealImage: IFigureImage;
  dealDescription: string; // Experience the best porterhouse steak in London
  dealPrefix: string; // Only £25 and you'll get
  dealItems: Array<string>; // ['300g Porterhouse', 'Fries', ...]
  pricePerHeadGBP: number; // 25 (25 pounds)s
  heads: number;
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
