import {
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import {
  PaymentMethod,
  StripeCardNumberElementChangeEvent,
} from '@stripe/stripe-js';
import {
  CardBrand,
  TastiestPaymentError,
  TastiestPaymentErrorCode,
} from '@tastiest-io/tastiest-utils';
import 'firebase/firestore'; // REMEMBER to include this for all useFirestore things
import { useState } from 'react';
import { useAuth } from '../auth/useAuth';
import { useUserData } from '../useUserData';

// DELETE MEEEE
export function useCheckout() {
  // const firebase = useFirebase();
  // dlog('useCheckout ➡️ firebase:', firebase);

  const { user } = useAuth();
  const { setUserData, userData } = useUserData(user);

  const stripe = useStripe();
  const elements = useElements();

  // Payment input values
  const [cardBrand, setCardBrand] = useState<CardBrand | undefined>(undefined);

  const addCard = async (
    _cardHolderName: string,
    postalCode: string,
  ): Promise<{
    paymentMethod: PaymentMethod | null;
    error: TastiestPaymentError | null;
  }> => {
    if (!_cardHolderName?.length) {
      return {
        paymentMethod: null,
        error: {
          code: 'incomplete_cardholder_name',
          type: 'validation_error',
          message: 'Cardholder name must not be empty',
        },
      };
    }

    const {
      paymentMethod,
      error: paymentMethodError,
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
      billing_details: {
        name: _cardHolderName,
        email: userData?.details.email,
        address: {
          country: 'GB',
          city: 'London',
          postal_code: postalCode,
        },
      },
    });

    if (paymentMethodError) {
      return {
        paymentMethod,
        error: {
          code: paymentMethodError.code as TastiestPaymentErrorCode,
          type: paymentMethodError.type,
          message: paymentMethodError.message,
        },
      };
    }

    const { setupIntent: savedSetupIntent } = await stripe.retrieveSetupIntent(
      userData?.paymentDetails?.stripeSetupSecret,
    );

    // Customer only has one card each at the moment
    if (savedSetupIntent?.status !== 'succeeded') {
      const { setupIntent, error } = await stripe.confirmCardSetup(
        userData?.paymentDetails?.stripeSetupSecret,
        {
          payment_method: paymentMethod?.id,
        },
      );

      if (error && !setupIntent) {
        return {
          paymentMethod,
          error: {
            code: error.code as TastiestPaymentErrorCode,
            type: error.type,
            message: error.message,
          },
        };
      }
    }

    return { paymentMethod, error: null };
  };

  const onCardNumberChange = (event: StripeCardNumberElementChangeEvent) => {
    // prettier-ignore
    const brand = 
      event.brand === 'visa' ? CardBrand.VISA :
      event.brand === 'mastercard' ? CardBrand.MASTERCARD :
      undefined;

    setCardBrand(brand);
  };

  return {
    addCard,
    cardBrand,
    setCardBrand,
    onCardNumberChange,
  };
}
