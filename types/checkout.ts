// TODO CHANGE IDEAL TO IOFFER
import { IDeal } from './cms';

export interface IOrder {
  id: string;
  deal: IDeal;
  userId: string;
  heads: number;
  fromSlug: string;
  totalPrice: number;
  paymentDetails: null | IPaymentDetails;

  // Timestamps
  // Null denotes not paid yet; not done yet.
  paidAt: null | number;
  orderedAt: null | number;
  abandonedAt: null | number;

  refund: null | {
    amountGBP: number;
    timestamp: number;
  };
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
  cardLastFour: string;
  cardPostcode: string;
}

export enum CardBrand {
  VISA = 'VISA',
  MASTERO = 'MASTERO',
  MASTERCARD = 'MASTERCARD',
}
