export enum PaymentDetailsError {
  INVALID_CARD_NUMBER = 'INVALID_CARD_NUMBER',
  INVALID_CARD_HOLDER_NAME = 'INVALID_CARD_HOLDER_NAME',
  INVALID_CARD_CVV = 'INVALID_CARD_CVV',
  INVALID_CARD_EXPIRY = 'INVALID_CARD_EXPIRY',
  INVLID_CARD_POSTCODE = 'INVLID_CARD_POSTCODE',
}

export function verifyPaymentDetails(
  cardHolderName: string,
  cardNumber: string,
  cvv: string,
  expiry: string,
  postcode: string,
): { valid: boolean; errors: PaymentDetailsError[] } {
  const errors: PaymentDetailsError[] = [];

  // Constants
  const MAX_CARD_HOLDER_NAME_LENGTH = 50;
  const MAX_POSTCODE_LENGTH = 20;
  const CARD_NUMBER_REGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  const CARD_CVV_REGEX = /^[0-9]{3}$/;
  // Accepts MM/YYYY, MM-YYYY or MM/YY, MM-YY format from years 2021 to 2099
  const CARD_EXPIRY_REGEX = /^(1[0-2]|[1-9])[/|-]((20)?[2-9][0-9])$/;

  // Verify card number
  if (!CARD_NUMBER_REGEX.test(cardNumber)) {
    errors.push(PaymentDetailsError.INVALID_CARD_NUMBER);
  }

  // Verify cardholder name
  if (cardHolderName.length < MAX_CARD_HOLDER_NAME_LENGTH) {
    errors.push(PaymentDetailsError.INVALID_CARD_HOLDER_NAME);
  }

  // Verify CVV
  if (!CARD_CVV_REGEX.test(cvv)) {
    errors.push(PaymentDetailsError.INVALID_CARD_CVV);
  }

  // Verify expiry
  if (!CARD_EXPIRY_REGEX.test(expiry)) {
    errors.push(PaymentDetailsError.INVALID_CARD_EXPIRY);
  }

  // Verify postcode
  if (postcode?.length > MAX_POSTCODE_LENGTH) {
    errors.push(PaymentDetailsError.INVLID_CARD_POSTCODE);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
