import { dlog, IOrder } from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/useAuth';
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

  const { data: order, isValidating: orderIsValidating, mutate } = useSWR<
    IOrder
  >(`${LocalEndpoint.GET_ORDER}/?token=${token}`, {
    initialData: initialOrder,
    refreshInterval: 5000,
  });

  // Set userId as soon as user signs in
  useEffect(() => {
    if (!order.userId && user.uid) {
      updateOrder({ userId: user.uid });
    }
  }, [user]);

  const updateOrder = async ({
    promoCode = null,
    heads = null,
  }: UpdateOrderParams) => {
    const { success, error } = await LocalApiPost.post(
      LocalEndpoint.UPDATE_ORDER,
      {
        token,
        userId: user?.uid ?? null,
        promoCode,
        heads,
      },
    );

    if (success) {
      // Set order mutation to make changes appear instant
      mutate({
        ...order,
        promoCode,
        heads,
      });
    }

    return { success, error };
  };

  const pay = async () => {
    const { success, error } = await LocalApiPost.post(LocalEndpoint.PAY, {
      token,
    });

    if (success) {
      alert('SUCCESS');
    }

    dlog('useOrder ➡️ error:', error);

    return { success, error };
  };

  return { order, updateOrder, orderIsValidating, pay };
}
