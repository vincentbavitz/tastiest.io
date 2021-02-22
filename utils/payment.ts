import { CardBrand, IDeal } from '../types/checkout';

export enum PaymentEngineError {
  INVALID_CARD_NUMBER = 'INVALID_CARD_NUMBER',
  INVALID_CARD_CVV = 'INVALID_CARD_CVV',
  INVALID_CARD_EXPIRY = 'INVALID_CARD_EXPIRY',
  INVALID_CARD_HOLDER_NAME = 'INVALID_CARD_HOLDER_NAME',
  INVLID_CARD_POSTCODE = 'INVLID_CARD_POSTCODE',
}

// TODO WRITE TESTSSTSTSTS
export class PaymentEngine {
  private cardNumber: string;
  private cardCvv: string;
  private cardExpiry: string;
  private cardHolderName: string;
  private cardPostcode: string;

  constructor(
    cardNumber: string,
    cardCvv: string,
    cardExpiry: string,
    cardHolderName: string,
    cardPostcode: string,
  ) {
    const { isValid, errors } = PaymentEngine.verify(
      cardNumber,
      cardCvv,
      cardExpiry,
      cardHolderName,
      cardPostcode,
    );

    // Ensure the payment details are valid
    if (!isValid) {
      throw new Error(errors[0]);
    }

    this.cardNumber = cardNumber;
    this.cardCvv = cardCvv;
    this.cardExpiry = cardExpiry;
    this.cardHolderName = cardHolderName;
    this.cardPostcode = cardPostcode;
  }

  public makePaymentWithStripe(item: IDeal, coupon: string) {
    return null;
  }

  public static verify(
    cardNumber: string,
    cardCvv: string,
    cardExpiry: string,
    cardHolderName: string,
    cardPostcode: string,
  ) {
    const errors: PaymentEngineError[] = [];

    if (!PaymentEngine.verifyCardNumber(cardNumber)) {
      errors.push(PaymentEngineError.INVALID_CARD_NUMBER);
    }
    if (!PaymentEngine.verifyCardCvv(cardCvv)) {
      errors.push(PaymentEngineError.INVALID_CARD_CVV);
    }
    if (!PaymentEngine.verifyCardExpiry(cardExpiry)) {
      errors.push(PaymentEngineError.INVALID_CARD_EXPIRY);
    }
    if (!PaymentEngine.verifyCardHolderName(cardHolderName)) {
      errors.push(PaymentEngineError.INVALID_CARD_HOLDER_NAME);
    }
    if (!PaymentEngine.verifyCardPostcode(cardPostcode)) {
      errors.push(PaymentEngineError.INVLID_CARD_POSTCODE);
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  public static verifyCardNumber = (cardNumber: string) => {
    const CARD_NUMBER_REGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return CARD_NUMBER_REGEX.test(cardNumber);
  };

  public static verifyCardCvv = (cvv: string) => {
    const CARD_CVV_REGEX = /^[0-9]{3}$/;
    return CARD_CVV_REGEX.test(cvv);
  };

  public static verifyCardExpiry = (expiry: string) => {
    // Accepts MM/YYYY, MM-YYYY or MM/YY, MM-YY format from years 2021 to 2099
    const CARD_EXPIRY_REGEX = /^(1[0-2]|[1-9])[/|-]((20)?[2-9][0-9])$/;
    return CARD_EXPIRY_REGEX.test(expiry);
  };

  public static verifyCardHolderName = (name: string) => {
    const CARD_HOLDER_NAME_REGEX = /^([a-zA-Z]{3,20}[\s]?[a-zA-Z]{3,20})$/;
    return CARD_HOLDER_NAME_REGEX.test(name);
  };

  public static verifyCardPostcode = (postcode: string) => {
    const CARD_POSTCODE_REGEX = /^\w{3,15}/;
    return CARD_POSTCODE_REGEX.test(postcode);
  };

  public static getCardBrand = (cardNumber: string) => {
    const CARD_REGEX_VISA = /^4\d{15}$/;
    const CARD_REGEX_MASTERO = /^xxxxxxxxxxxxxxxx$/;
    const CARD_REGEX_MASTERCARD = /^5[1-5]\d{14}$/;

    if (CARD_REGEX_VISA.test(cardNumber)) return CardBrand.VISA;
    if (CARD_REGEX_MASTERCARD.test(cardNumber)) return CardBrand.MASTERCARD;
    if (CARD_REGEX_MASTERO.test(cardNumber)) return CardBrand.MASTERO;
    return;
  };

  // // Convert to JSON compatible string format for encryption
  // // and saving to user's file.
  // public serialise() {
  //   //
  // }

  // public static deserialise(details: string): PaymentEngine {
  //   return new PaymentEngine();
  // }

  // public saveUserPaymentEngine = () => {
  //   // Serialize and encrypt with Tastiest DB Public Key.
  // };

  // public static fetchUserPaymentEngine = () => {};
}
