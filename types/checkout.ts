import { IFigureImage } from './article';
import { CuisineSymbol } from './cuisine';

// TODO CHANGE IDEAL TO IOFFER
export interface IDeal {
  id: string;
  articleId: string;
  restaurantID: string;
  restaurantName: string;
  tagline: string; // Experience the best porterhouse steak in London
  includes: Array<string>; // ['300g Porterhouse', 'Fries', ...]
  pricePerHeadGBP: number; // 25 (25 pounds)s
  image: IFigureImage;

  // name: string; // Grizzly Grumble
  // dealPrefix: string; // Only £25 and you'll get
}

export interface IRestaurant {
  id: string;
  name: string;
  address: {
    streetNumber: string;
    street: string;
    city: string;
    postcode: string;
  };
  website: string;
  phone: string;
  locations: number;
  businessType: 'restaurant' | 'takeaway' | 'cafe';
  cuisine: CuisineSymbol;
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
  };
}

export interface IOrder {
  deal: IDeal;
  userId: string;
  heads: number;
  // Timestamps
  orderedAt: number;
  dealDatedFor: number;
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
