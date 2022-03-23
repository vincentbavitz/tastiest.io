import {
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { PaymentMethod } from '@stripe/stripe-js';
import {
  CmsApi,
  ContentfulProduct,
  TastiestPaymentError,
  TastiestPaymentErrorCode,
} from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/auth/useAuth';
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
  cardPostcode: string;
  cardHolderName: string;
};

type PayFn = (params: PayFnParams) => void;

type CheckoutContextShape = {
  step: CheckoutStep | null;
  product: ContentfulProduct | null;

  isPaymentProcessing: boolean;
  paymentError: TastiestPaymentError | null;

  setIsPaymentProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  pay: PayFn;
};

export const CheckoutContext = React.createContext<CheckoutContextShape>({
  step: null,
  product: null,
  isPaymentProcessing: false,
  setIsPaymentProcessing: null,
  paymentError: null,
  pay: null,
});

export const CheckoutProvider = ({ children }: any) => {
  const { isSignedIn, token, userData } = useAuth();

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

    console.log('checkout ➡️ paymentMethod:', paymentMethod);

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

      // Now save it to the orders
    }

    return { paymentMethod, error: null };
  };

  const pay: PayFn = async params => {
    const {
      firstName,
      lastName,
      mobile,
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
      console.log(
        'CheckoutStepPayment ➡️ paymentMethodError:',
        paymentMethodError,
      );

      setIsPaymentProcessing(false);

      // FIX ME -> Allow users to re-use cards.
      setPaymentError({
        code: 'card_error',
        type: 'tastiest-payment-error',
        message: 'This card is already in use. Please contact support.',
      });

      return;
    }

    console.log('checkout ➡️ paymentMethod:', paymentMethod);

    // // const { error: updateOrderError } = await updateOrder({
    // //   paymentMethodId: paymentMethod.id,
    // // });

    // // if (updateOrderError) {
    // //   dlog('CheckoutStepPayment ➡️ updateOrderError:', updateOrderError);
    // //   dispatch(setIsPaymentProcessing(false));
    // //   setError({
    // //     code: 'update_order_error',
    // //     type: 'api_error',
    // //     message: 'There was an error updating your order.',
    // //   });

    // //   return { success: false, error: updateOrderError };
    // // }

    // // const { success, error } = await pay();

    // // Uh-oh - a general payment error!
    // // This usually means the card declined.
    // if (error) {
    //   setError({
    //     code: 'general_payment_error',
    //     type: 'card_error',
    //     message:
    //       'There was an error processing your payment. Please try using another card.',
    //   });

    //   alert(error);

    //   setIsPaymentProcessing(false);
    //   return;
    // }

    // if (
    //   firstName?.length > 0 ||
    //   lastName?.length > 0 ||
    //   mobile?.length > 0 ||
    //   cardPostcode?.length > 0 // ||
    //   // CORRECT ME
    //   // JSON.stringify(birthday) !== JSON.stringify(order.user.birthday)
    // ) {
    //   const horus = new Horus(token);

    //   // Update user information
    //   horus.post('/users/update', {
    //     uid: userId,
    //     firstName,
    //     lastName,
    //     mobile,
    //     birthday: DateTime.fromObject(birthday).toJSDate(),
    //     location: { postcode: cardPostcode },
    //   });
    // }
  };

  // If productId is in the URL, fetch the product.
  useEffect(() => {
    if (router.query['productId']) {
      const cms = new CmsApi();
      cms.getProduct(String(router.query['productId'])).then(setProduct);
    }
  }, [router.query]);

  // Router change when they sign in.
  useEffect(() => {
    // Account for exact values because isSignedIn being null is falsy.
    if (token && step === CheckoutStep.SIGN_IN) {
      // Take them to the payment step
      router.replace(router.pathname.replace('authorize', ''));
    }

    if (!token && step === CheckoutStep.PAYMENT) {
      router.push('/checkout/authorize' + window.location.search);
    }
  }, [token]);

  const value: CheckoutContextShape = {
    step,
    product,
    isPaymentProcessing,
    setIsPaymentProcessing,
    paymentError,
    pay,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
