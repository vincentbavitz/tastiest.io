import { CardNumberElement, useStripe } from '@stripe/react-stripe-js';
import { StripeCardNumberElementChangeEvent } from '@stripe/stripe-js';
import { CardBrand } from '@tastiest-io/tastiest-utils';
import 'firebase/firestore'; // REMEMBER to include this for all useFirestore things
import { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useAuth } from '../useAuth';
import { useUserData } from '../useUserData';

export function useCheckout() {
  // const firebase = useFirebase();
  // dlog('useCheckout ➡️ firebase:', firebase);

  const { user } = useAuth();
  const { setUserData, userData } = useUserData(user);

  const stripe = useStripe();
  const elements = stripe.elements();
  const firestore = useFirestore();

  // Payment input values
  const [cardHolderName, setCardholderName] = useState('');
  const [cardPostcode, setCardPostcode] = useState('');
  const [cardBrand, setCardBrand] = useState<CardBrand | undefined>(undefined);

  const addCard = async (cardholderName: string) => {
    const { setupIntent, error } = await stripe.confirmCardSetup(
      userData?.paymentDetails?.stripeSetupSecret,
      {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: cardholderName,
            email: userData?.details.email,
          },
        },
      },
    );
  };

  // const updateOrder = async (
  //   orderId: string,
  //   orderPartial: Partial<IOrder>,
  // ) => {
  //   try {
  //     firestore
  //       .collection(FirestoreCollection.ORDERS)
  //       .doc(orderId)
  //       .set(orderPartial, { merge: true });

  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // };

  // const markOrderSuccess = async (
  //   order: IOrder,
  //   userDetails: IUserDetails,
  //   paymentDetails: IPaymentDetails,
  // ) => {
  //   const updatedOrder = updateOrder(order.id, {
  //     paymentDetails,
  //     paidAt: Date.now(),
  //   });

  //   if (!updatedOrder) {
  //     return { success: false, error: 'Failed to update order' };
  //   }

  //   // Update user details if changed
  //   setUserData(UserData.DETAILS, userDetails);
  //   setUserData(UserData.PAYMENT_DETAILS, paymentDetails);

  //   // Segment: Payment success event
  //   window.analytics.track('Payment Success', {
  //     ...userDetails,
  //     ...paymentDetails,
  //   });

  //   // Delete order request
  //   try {
  //     firestore
  //       .collection(FirestoreCollection.ORDER_REQUESTS)
  //       .doc(order.id)
  //       .delete();
  //   } catch (error) {
  //     return { success: false, error: error?.message };
  //   }

  //   return { success: true, error: null };
  // };

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
    cardHolderName,
    setCardholderName,
    cardPostcode,
    setCardPostcode,
    cardBrand,
    setCardBrand,
    onCardNumberChange,
  };
}
