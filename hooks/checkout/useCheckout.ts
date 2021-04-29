import {
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { StripeCardNumberElementChangeEvent } from '@stripe/stripe-js';
import { CardBrand, UserData } from '@tastiest-io/tastiest-utils';
import 'firebase/firestore'; // REMEMBER to include this for all useFirestore things
import { useState } from 'react';
import { useAuth } from '../useAuth';
import { useUserData } from '../useUserData';

export function useCheckout() {
  // const firebase = useFirebase();
  // dlog('useCheckout ➡️ firebase:', firebase);

  const { user } = useAuth();
  const { setUserData, userData } = useUserData(user);

  const stripe = useStripe();
  const elements = useElements();

  // Payment input values
  const [cardBrand, setCardBrand] = useState<CardBrand | undefined>(undefined);

  const addCard = async (_cardHolderName: string, postalCode: string) => {
    if (!_cardHolderName?.length) {
      return {
        paymentMethod: null,
        error: 'Cardholder name must not be empty',
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
        error: paymentMethodError,
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
        return { paymentMethod, error };
      }

      setUserData(UserData.PAYMENT_METHODS, {
        pm_1IiqgGHZaOt3USRGunMzIEs5: paymentMethod,
      });

      if (error && setupIntent) {
        return { paymentMethod, error: 'Card already saved' };
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
