import { dlog, IDeal, IPromo } from '@tastiest-io/tastiest-utils';

/**
 * Calculate price after applying promocode.
 */
export const calculatePromoPrice = (price: number, promo: IPromo): number => {
  if (!promo || !promo.discount?.value) {
    return price;
  }

  const isPercentage = promo?.discount?.unit === '%';

  if (isPercentage) {
    const discountGbp = price * (1 - Math.min(promo.discount.value, 100) / 100);
    dlog('createNewOrder ➡️ price:', price);
    dlog('createNewOrder ➡️ discountGbp:', discountGbp);
    return price - discountGbp;
  }

  return Math.max(0, price - promo?.discount?.value ?? 0);
};

/**
 * Validate promo after you've pulled it from CMS
 */
export const validatePromo = async (
  deal: IDeal,
  userId: string,
  promo: IPromo,
) => {
  // Validate user is allowed to use this.
  // Validate maxiumum uses etc
  deal;
  userId;
  promo;
  return true;
};

export const transformPriceForStripe = (price: number) => price * 100;

/**
 * Confirmation code required for user to show restaurant
 */
export const generateConfirmationCode = () => {
  // Random number between 1 and 9
  const randomDigit = () => Math.floor(Math.random() * 10);

  return Array(4)
    .fill(null)
    .map(_ => String(randomDigit()))
    .join('');
};