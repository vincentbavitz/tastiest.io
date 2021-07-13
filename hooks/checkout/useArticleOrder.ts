import {
  dlog,
  formatCurrency,
  IDeal,
  IOrderRequest,
  postFetch,
  ValidHead,
} from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/auth/useAuth';
import { useRouter } from 'next/router';
import {
  CreateNewOrderParams,
  CreateNewOrderReturn,
} from 'pages/api/payments/createNewOrder';
import { useState } from 'react';
import { LocalEndpoint } from 'types/api';

export const useArticleOrder = (deal: IDeal, fromSlug: string) => {
  const { user } = useAuth();
  const router = useRouter();

  const [heads, setHeads] = useState<ValidHead>(1);
  const totalPrice = formatCurrency(Number(heads) * deal?.pricePerHeadGBP);

  const submit = async () => {
    const orderRequest: IOrderRequest = {
      userId: user?.uid ?? null,
      dealId: deal.id,
      heads,
      fromSlug,
      promoCode: null,
      timestamp: Date.now(),
    };

    dlog('useArticleOrder ➡️ orderRequest:', orderRequest);

    const {
      data: { token },
    } = await postFetch<CreateNewOrderParams, CreateNewOrderReturn>(
      LocalEndpoint.CREATE_NEW_ORDER,
      orderRequest,
    );

    dlog('useArticleOrder ➡️ token:', token);

    if (token) {
      router.push(`/checkout/?token=${token}`);
      return;
    }

    return;
  };

  return { totalPrice, heads, setHeads, submit };
};
