
export function verifyPaymentDetails(
  cardHolderName: string,
  cardNumber: string,
  cvv: string,
  expiry: string,
  postcode: string,
): { valid: boolean; errors: PaymentDetailsError[] } {
  const errors: PaymentDetailsError[] = [];

 
  // Verify card number
  if (!) {
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


}
