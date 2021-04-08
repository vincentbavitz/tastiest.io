import { IDeal, ValidHead } from '@tastiest-io/tastiest-utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { dlog } from 'utils/development';
import { useCheckout } from './useCheckout';

export const useOrderNow = (deal: IDeal, fromSlug: string) => {
  const router = useRouter();
  const { initOrderRequest } = useCheckout();

  const [heads, setHeads] = useState<ValidHead>(1);
  const totalPrice = (Number(heads) * deal?.pricePerHeadGBP).toFixed(2);

  const submit = async () => {
    const orderId = await initOrderRequest(deal.id, heads, fromSlug);
    dlog('useOrderNow ➡️ orderId:', orderId);

    if (orderId) {
      router.push(`/checkout/?orderId=${orderId}`);
    }
  };

  return { totalPrice, heads, setHeads, submit };
};
