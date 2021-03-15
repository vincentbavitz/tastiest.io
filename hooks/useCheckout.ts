import {
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import 'firebase/firestore'; // REMEMBER to include this for all useFirestore things
import { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { IOrder } from 'types/checkout';
import { IOrderRequest } from 'types/firebase';
import { useAuth } from './useAuth';

interface IUseCheckout {
  // orders: IOrder[];
  initOrderRequest: (
    dealId: string,
    heads: number,
    fromSlug: string,
  ) => Promise<string>;
  updateOrder: (
    orderId: string,
    orderPartial: Partial<IOrder>,
  ) => Promise<void>;
  pay: (
    stripeClientSecret: string,
  ) => Promise<{ success: null | boolean; error: null | string }>;
}

export function useCheckout(): IUseCheckout {
  // const firebase = useFirebase();
  // console.log('useCheckout ➡️ firebase:', firebase);

  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const firestore = useFirestore();

  const [error, setError] = useState(undefined as Error | undefined);

  const initOrderRequest = async (
    dealId: string,
    heads: number,
    fromSlug: string,
  ) => {
    // Send the order request to Firebase as a token: orderId
    // which can be verified server side with getServerSideProps
    // on the /checkout page.

    // Since we have useFirestoreConnect,
    // order is automatically synced with firebase.

    // Do NOT trust the client. We make an order request client side that is
    // verified server side.
    const orderRequest: IOrderRequest = {
      userId: user.uid,
      dealId,
      heads,
      fromSlug,
      timestamp: Date.now(),
    };

    try {
      // We don't want to use useFirebase -> firebase.push here because
      // we need the order ID back.
      const { id: orderId } = await firestore
        .collection('order-requests')
        .add(orderRequest);

      // Submit user clicked buy now to segment
      window.analytics.track('User clicked Buy Now from Article Page', {
        ...orderRequest,
        orderId,
      });

      return orderId;
    } catch (e) {
      setError(new Error(`setUserData Error: ${e}`));
      return null;
    }
  };

  const updateOrder = async (
    orderId: string,
    orderPartial: Partial<IOrder>,
  ) => {
    try {
      firestore
        .collection('orders')
        .doc(orderId)
        .set(orderPartial, { merge: true });
    } catch (e) {
      setError(new Error(`updateOrder Error: ${e}`));
    }
  };

  const pay = async (stripeClientSecret: string) => {
    if (!stripe || !elements) {
      return { success: null, error: null };
    }

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardNumberElement),
      });

      const {
        error,
        paymentIntent: { status },
      } = await stripe.confirmCardPayment(stripeClientSecret, {
        payment_method: paymentMethod.id,
      });

      if (error) {
        return { success: false, error: error?.message };
      }

      // Payment success
      if (status === 'succeeded') {
        // Remove order request from Firestore

        // Segment: Payment success event

        return { success: true, error: null };
      }
    } catch (error) {
      null;
    }

    // Segment: Payment failure event
    return { success: false, error: error?.message ?? 'Unknown error' };
  };

  return { initOrderRequest, updateOrder, pay };
}
