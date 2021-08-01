import {
  dlog,
  formatCurrency,
  IDeal,
  IOrderRequest,
} from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/auth/useAuth';
import usePostFetch from 'hooks/usePostFetch';
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

  const [heads, setHeads] = useState<number>(1);
  const totalPrice = formatCurrency(Number(heads) * deal?.pricePerHeadGBP);

  const { error, execute, success, submitting } = usePostFetch<
    CreateNewOrderParams,
    CreateNewOrderReturn
  >(LocalEndpoint.CREATE_NEW_ORDER, { retries: 1 });

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
    } = await execute(orderRequest);

    dlog('useArticleOrder ➡️ orderRequest:', orderRequest);
    dlog('useArticleOrder ➡️ token:', token);
    dlog('useArticleOrder ➡️ error:', error);

    if (token) {
      router.push(`/checkout/?token=${token}`);
      return;
    }

    return;
  };

  return { totalPrice, heads, setHeads, submit, submitting, success, error };
};
