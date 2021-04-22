import { IOrder } from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import { LocalEndpoint } from 'types/api';
import { LocalApiPost } from 'utils/api';

interface UpdateOrderParams {
  userId?: string;
  promoCode?: string;
  heads?: number;
  paymentMethodId?: string;
}

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
  }: UpdateOrderParams) => {
    const { success, error } = await LocalApiPost.post(
      LocalEndpoint.UPDATE_ORDER,
      {
        token,
        userId: user?.uid ?? null,
        promoCode,
        heads,
        paymentMethodId,
      },
    );

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

  const pay = async () => {
    const {
      data: { order: _order },
      success,
      error,
    } = await LocalApiPost.post(LocalEndpoint.PAY, {
      token,
    });

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
