import {
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { PaymentMethod } from '@stripe/stripe-js';
import { DateObject } from '@tastiest-io/tastiest-horus';
import {
  CmsApi,
  ContentfulProduct,
  Horus,
  TastiestPaymentError,
  TastiestPaymentErrorCode,
} from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/auth/useAuth';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { CheckoutStep } from 'state/checkout';

type AddPaymentCardFn = (
  cardHolderName: string,
  postalCode: string,
) => Promise<{
  paymentMethod: PaymentMethod | null;
  error: TastiestPaymentError | null;
}>;

type PayFnParams = {
  firstName: string;
  lastName: string;
  mobile: string;
  birthday: DateObject;
  cardPostcode: string;
  cardHolderName: string;
};

type PayFn = (orderToken: string, params: PayFnParams) => void;

type CheckoutContextShape = {
  step: CheckoutStep | null;
  product: ContentfulProduct | null;

  isPaymentProcessing: boolean;
  paymentError: TastiestPaymentError | null;
  clearPaymentError: () => void;
  setIsPaymentProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  pay: PayFn;
};

export const CheckoutContext = React.createContext<CheckoutContextShape>({
  step: null,
  product: null,
  isPaymentProcessing: false,
  clearPaymentError: null,
  setIsPaymentProcessing: null,
  paymentError: null,
  pay: null,
});

export const CheckoutProvider = ({ children }: any) => {
  const { isSignedIn, token, userData, user } = useAuth();

  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [product, setProduct] = useState<ContentfulProduct>(null);

  const step: CheckoutStep = useMemo(
    () =>
      router.pathname.startsWith('/checkout/authorize')
        ? CheckoutStep.SIGN_IN
        : CheckoutStep.PAYMENT,
    [router.pathname],
  );

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<TastiestPaymentError>(null);

  /** Does this allow return customers to use the same card? */
  const addPaymentMethod: AddPaymentCardFn = async (
    cardHolderName,
    postalCode,
  ) => {
    if (!cardHolderName?.length) {
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
        name: cardHolderName,
        email: userData.email,
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
      userData.stripe_setup_secret,
    );

    // Customer only has one card each at the moment
    if (savedSetupIntent?.status !== 'succeeded') {
      const { setupIntent, error } = await stripe.confirmCardSetup(
        userData.stripe_setup_secret,
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

  const pay: PayFn = async (orderToken, params) => {
    const {
      firstName,
      lastName,
      mobile,
      birthday,
      cardPostcode,
      cardHolderName,
    } = params;

    // Start isLoading
    setIsPaymentProcessing(true);
    setPaymentError(null);

    const { paymentMethod, error: paymentMethodError } = await addPaymentMethod(
      cardHolderName,
      cardPostcode,
    );

    // Error adding card. Either card already exists or validation error
    if (paymentMethodError) {
      setIsPaymentProcessing(false);

      if (
        paymentMethodError.code ===
        ('card_declined' as TastiestPaymentErrorCode)
      ) {
        setPaymentError({
          code: 'card_error',
          type: 'tastiest-payment-error',
          message: 'Your card was declined. Please try using a different card.',
        });

        return;
      }

      // FIX ME -> Allow users to re-use cards.
      setPaymentError({
        code: 'card_error',
        type: 'tastiest-payment-error',
        message: 'This card is already in use. Please contact support.',
      });

      return;
    }

    console.log('checkout ➡️ paymentMethod:', paymentMethod);

    const horus = new Horus(token);

    const { error } = await horus.post('/payments/pay', {
      token: orderToken,
      payment_method: paymentMethod.id,
      given_first_name: firstName,
      given_last_name: lastName,
      postcode: cardPostcode,
      birthday: DateTime.fromObject(birthday).toISO(),
      mobile,
      user_agent: navigator.userAgent,
    });

    // Uh-oh - a general payment error!
    // This usually means the card declined.
    if (error) {
      setPaymentError({
        code: 'general_payment_error',
        type: 'card_error',
        message: `There was an error processing your payment. Please try using another card.`,
      });

      setIsPaymentProcessing(false);
      return;
    }

    // Woo! Payment success.
    router.push(`/thank-you?token=${orderToken}`);
  };

  // If productId is in the URL, fetch the product.
  useEffect(() => {
    if (router.query['productId']) {
      const cms = new CmsApi();
      cms.getProduct(String(router.query['productId'])).then(setProduct);
    }
  }, [router.query]);

  const value: CheckoutContextShape = {
    step,
    product,
    isPaymentProcessing,
    paymentError,
    setIsPaymentProcessing,
    clearPaymentError: () => setPaymentError(null),
    pay,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
