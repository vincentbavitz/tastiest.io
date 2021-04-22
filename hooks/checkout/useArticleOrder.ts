import { IDeal, IOrderRequest, ValidHead } from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LocalEndpoint } from 'types/api';
import { LocalApiPost } from 'utils/api';

export const useArticleOrder = (deal: IDeal, fromSlug: string) => {
  const { user } = useAuth();
  const router = useRouter();

  const [heads, setHeads] = useState<ValidHead>(1);
  const totalPrice = (Number(heads) * deal?.pricePerHeadGBP).toFixed(2);

  const submit = async () => {
    const orderRequest: IOrderRequest = {
      userId: user?.uid ?? null,
      dealId: deal.id,
      heads,
      fromSlug,
      promoCode: null,
      timestamp: Date.now(),
    };

    const {
      data: { token },
    } = await LocalApiPost.post(LocalEndpoint.CREATE_NEW_ORDER, orderRequest);

    if (token) {
      router.push(`/checkout/?token=${token}`);
      return;
    }

    return;
  };

  return { totalPrice, heads, setHeads, submit };
};
