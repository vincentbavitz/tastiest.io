export enum CheckoutStep {
  SIGN_IN = 'SIGN_IN',
  PAYMENT = 'PAYMENT',
  COMPLETE = 'COMPLETE',
}

export enum CheckoutSignInTabSelected {
  HAS_ACCOUNT = 'HAS_ACCOUNT',
  NEW_USER = 'NEW_USER',
}

// prettier-ignore
type ExpirationMonth =
  | '1' | '2' | '3' | '4' | '5' | '6'
  | '7'  | '8'   | '9'  | '10'  | '11'  | '12';

// prettier-ignore
type ExpirationYear =
  | '2021' | '2022' | '2023' | '2024' | '2025' | '2026' | '2027'
  | '2028' | '2029' | '2030' | '2031' | '2032' | '2033' | '2034'
  | '2035' | '2036' | '2037' | '2038' | '2039' | '2040' | '2041'
  | '2042' | '2043' | '2044' | '2045' | '2046' | '2047' | '2048'
  | '2049' | '2050' | '2051' | '2052' | '2053' | '2054' | '2055'

type TExpirationDate = [ExpirationMonth, ExpirationYear];

export interface IPaymentDetails {
  cardHolderName: string;
  cardNumber: string;
  expirationDate: TExpirationDate;
}

export interface CheckoutDetails {
  payment: IPaymentDetails;
  contact: IContactDetails;
}

const paymetnd: TExpirationDate = ['12', '2021'];
