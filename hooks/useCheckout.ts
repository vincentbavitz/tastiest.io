import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { IOrder } from 'types/checkout';
import { IOrderRequest } from 'types/firebase';
import { IState } from '../state/reducers';
import { useAuth } from './useAuth';

interface IUseCheckout {
  orders: IOrder[];
  initOrderRequest: (
    dealId: string,
    heads: number,
    fromSlug: string,
  ) => Promise<string>;
  updateOrder: (
    orderId: string,
    orderPartial: Partial<IOrder>,
  ) => Promise<void>;
}

export function useCheckout(): IUseCheckout {
  const { user } = useAuth();

  const firestore = useFirestore();
  useFirestoreConnect(['orders']);

  const [error, setError] = useState(undefined as Error | undefined);

  const orders: IOrder[] = useSelector(
    ({ firestore: { data } }: IState) => data.orders,
  );

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

      console.log('useCheckout ➡️ orderId:', orderId);

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

  return { orders, initOrderRequest, updateOrder };
}
