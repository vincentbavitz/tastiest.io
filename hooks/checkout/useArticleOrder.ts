import {
  dlog,
  formatCurrency,
  IDeal,
  IOrderRequest,
  postFetch,
} from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/auth/useAuth';
import { useRouter } from 'next/router';
import {
  CreateNewOrderParams,
  CreateNewOrderReturn,
} from 'pages/api/payments/createNewOrder';
import { useState } from 'react';
import { LocalEndpoint } from 'types/api';
import { BASE_URL } from 'utils/redirects';

export const useArticleOrder = (deal: IDeal, fromSlug: string) => {
  const { user } = useAuth();
  const router = useRouter();

  const [heads, setHeads] = useState<number>(1);
  const totalPrice = formatCurrency(Number(heads) * deal?.pricePerHeadGBP);

  const submit = async () => {
    const orderRequest: IOrderRequest = {
      userId: user?.uid ?? null,
      dealId: deal.id,
      heads,
      fromSlug,
      promoCode: null,
      timestamp: Date.now(),
      anonymousId: window.analytics?.user()?.anonymousId(),
      userAgent: navigator?.userAgent,
    };

    const {
      data: { token },
      error,
    } = await postFetch<CreateNewOrderParams, CreateNewOrderReturn>(
      BASE_URL + LocalEndpoint.CREATE_NEW_ORDER,
      orderRequest,
    );

    dlog('useArticleOrder ➡️ orderRequest:', orderRequest);
    dlog('useArticleOrder ➡️ token:', token);

    if (token) {
      router.push(`/checkout/?token=${token}`);
      return;
    }

    return;
  };

  return { totalPrice, heads, setHeads, submit };
};
