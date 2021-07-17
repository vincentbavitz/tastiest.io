import { dlog, IOrder, postFetch } from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { PayParams, PayReturn } from 'pages/api/payments/pay';
import {
  UpdateOrderParams,
  UpdateOrderReturn,
} from 'pages/api/payments/updateOrder';
import { useEffect } from 'react';
import useSWR from 'swr';
import { LocalEndpoint } from 'types/api';

export function useOrder(token: string, initialOrder?: IOrder) {
  const { user } = useAuth();
  const router = useRouter();

  const { data: order, isValidating: isOrderUpdating, mutate } = useSWR<IOrder>(
    `${LocalEndpoint.GET_ORDER}/?token=${token}`,
    {
      initialData: initialOrder,
      refreshInterval: 5000,
    },
  );

  // Set userId as soon as they signs in
  useEffect(() => {
    if (!order?.userId && user?.uid) {
      updateOrder({ userId: user.uid });
    }
  }, [user]);

  const updateOrder = async ({
    heads = null,
    promoCode = null,
    paymentMethodId = null,
  }: Omit<UpdateOrderParams, 'token'>) => {
    const { success, error } = await postFetch<
      UpdateOrderParams,
      UpdateOrderReturn
    >(LocalEndpoint.UPDATE_ORDER, {
      token,
      userId: user?.uid ?? null,
      promoCode,
      heads,
      paymentMethodId,
    });

    if (success) {
      // Set order mutation to make changes appear instant
      mutate({
        ...order,
        promoCode,
        heads,
        paymentMethod: paymentMethodId,
      });
    }

    return { success, error };
  };

  const pay = async (
    shopifyProductId: string,
    anonymousId: string,
    cartToken: string,
    userAgent: string,
  ) => {
    dlog('useOrder ➡️ paying:');
    dlog('useOrder ➡️ shopifyProductId:', shopifyProductId);
    dlog('useOrder ➡️ anonymousId:', anonymousId);

    const {
      data: { order: _order },
      success,
      error,
    } = await postFetch<PayParams, PayReturn>(LocalEndpoint.PAY, {
      token,
      shopifyProductId,
      anonymousId,
      cartToken,
      userAgent,
    });

    console.log('useOrder ➡️ error:', error);
    console.log('useOrder ➡️ order:', _order);

    // Payment success
    if (success) {
      // Immediately update order
      mutate(_order);

      // Move to thank-you page
      if (success) {
        router.push(`/thank-you/?token=${order.token}`);
      }

      return { success: true, error: null };
    }

    // Payment failure
    return { success, error };
  };

  return { order, updateOrder, isOrderUpdating, pay };
}
