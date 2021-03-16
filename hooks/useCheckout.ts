import 'firebase/firestore'; // REMEMBER to include this for all useFirestore things
import { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { IOrder, IPaymentDetails } from 'types/checkout';
import { IOrderRequest, IUserDetails, UserData } from 'types/firebase';
import { useAuth } from './useAuth';
import { useUserData } from './useUserData';

export function useCheckout() {
  // const firebase = useFirebase();
  // console.log('useCheckout ➡️ firebase:', firebase);

  const { user } = useAuth();
  const { setUserData } = useUserData(user);

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
      userId: user?.uid ?? null,
      dealId,
      heads,
      fromSlug,
      timestamp: Date.now(),
    };

    try {
      // We don't want to use useFirebase -> firebase.push here because
      // we need the order ID back.
      // Tracking is done server side for this event
      const { id: orderId } = await firestore
        .collection('order-requests')
        .add(orderRequest);

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

      return true;
    } catch (e) {
      setError(new Error(`updateOrder Error: ${e}`));
      return false;
    }
  };

  const markOrderSuccess = async (
    order: IOrder,
    userDetails: IUserDetails,
    paymentDetails: IPaymentDetails,
  ) => {
    const updatedOrder = updateOrder(order.id, {
      paymentDetails,
      paidAt: Date.now(),
    });

    if (!updatedOrder) {
      return { success: false, error: 'Failed to update order' };
    }

    // Update user details if changed
    setUserData(UserData.DETAILS, userDetails);
    setUserData(UserData.PAYMENT_DETAILS, paymentDetails);

    // Segment: Payment success event
    window.analytics.track(
      `Payment Success from ${userDetails.firstName}${
        userDetails?.lastName ? ' ' + userDetails.lastName : ''
      } `,
      {
        ...userDetails,
        ...paymentDetails,
      },
    );

    // Delete order request
    try {
      firestore.collection('order-requests').doc(order.id).delete();
    } catch (error) {
      return { success: false, error: error?.message };
    }

    return { success: true, error: null };
  };

  return { initOrderRequest, updateOrder, markOrderSuccess };
}
