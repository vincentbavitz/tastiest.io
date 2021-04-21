import { IDeal, IOrderRequest, ValidHead } from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LocalEndpoint } from 'types/api';
import { LocalApi } from 'utils/api';

export const useOrderNow = (deal: IDeal, fromSlug: string) => {
  const { user } = useAuth();
  const router = useRouter();

  const [heads, setHeads] = useState<ValidHead>(1);
  const [promoCode, setPromoCode] = useState<string | null>(null);

  const totalPrice = (Number(heads) * deal?.pricePerHeadGBP).toFixed(2);

  const submit = async () => {
    const orderRequest: IOrderRequest = {
      userId: user?.uid ?? null,
      dealId: deal.id,
      heads,
      fromSlug,
      promoCode,
      timestamp: Date.now(),
    };

    const {
      data: { orderId },
    } = await LocalApi.post(LocalEndpoint.GENERATE_ORDER_REQUEST, orderRequest);

    if (orderId) {
      router.push(`/checkout/?orderId=${orderId}`);
      return;
    }

    return;
  };

  return { totalPrice, heads, setHeads, promoCode, setPromoCode, submit };
};
