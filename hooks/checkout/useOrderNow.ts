import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'state/reducers';
import { IDeal, ValidHead } from 'types/cms';
import { useCheckout } from './useCheckout';

export const useOrderNow = (deal: IDeal, fromSlug: string) => {
  const router = useRouter();
  const { initOrderRequest } = useCheckout();

  // Whether or not we follow scroll or remain in place
  const { articleOfferIsFloating: isFloating } = useSelector(
    (state: IState) => state.navigation,
  );

  const [heads, setHeads] = useState<ValidHead>(1);
  const totalPrice = (Number(heads) * deal?.pricePerHeadGBP).toFixed(2);

  const submit = async () => {
    const orderId = await initOrderRequest(deal.id, heads, fromSlug);
    console.log('ArticleOrderNowDesktop ➡️ orderId:', orderId);

    if (orderId) {
      router.push(`/checkout/?orderId=${orderId}`);
    }
  };

  return { totalPrice, isFloating, heads, setHeads, submit };
};
