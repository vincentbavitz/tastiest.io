import LockSVG from '@svg/icons/lock.svg';
import { Button, Input } from '@tastiest-io/tastiest-components';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CmsApi } from 'services/cms';
import { CHECKOUT, UI } from '../../constants';
import { IState } from '../../state/reducers';
import { IDiscount, IOrder } from '../../types/checkout';
import { CheckoutCard } from './CheckoutCard';

interface Props {
  order: IOrder;
  onSubmit: (promoCode: string | null) => void;
}

const usePromoCode = (order: IOrder) => {
  // const [discount, setDiscount] = useState(null);
  const [discount, setDiscount] = useState<IDiscount>(null);

  const applyPromoCode = async (_code: string) => {
    if (_code.length === 0) {
      return;
    }

    const code = _code.toLowerCase();

    // Lookup discount on Contentful
    const cmsApi = new CmsApi();
    const promo = await cmsApi.getPromo(code);

    // If discount is valid for this order, apply client side.
    if (order) {
      setDiscount(null);
    }

    setDiscount(discount);
  };

  return { discount, applyPromoCode };
};

export function CheckoutCardPayment(props: Props) {
  const { order, onSubmit } = props;
  const { isDesktop } = useScreenSize();

  const {
    flow: { step },
  } = useSelector((state: IState) => state.checkout);

  const { discount, applyPromoCode } = usePromoCode(order);

  if (!order) return null;

  return (
    <div
      style={{
        minWidth: '250px',
      }}
      className="relative"
    >
      {isDesktop && <SecureTransactionText />}

      <CheckoutCard title="Order Summary" order={order}>
        <div>
          <div className="flex justify-between text-sm">
            <p className="font-medium">{order?.deal.restaurant.name}</p>
            <p className="font-medium">£{order?.deal?.pricePerHeadGBP}</p>
          </div>
          <p className="text-sm">{order?.deal?.tagline}</p>
        </div>

        <div className="flex items-center justify-between text-xs">
          <p>
            Booking for {order.heads} {order.heads === 1 ? 'person' : 'people'}
          </p>
          <p className="font-medium">
            £{Math.floor(order.heads) * order.deal.pricePerHeadGBP}
          </p>
        </div>

        {isDesktop && (
          <>
            <PromoCodeInput applyPromoCode={applyPromoCode} />

            <hr className="bg-primary border-primary text-primary" />

            <div className="flex items-center justify-between mb-1 space-x-2 font-medium">
              <p>Total</p>
              <p>£{Math.floor(order.heads) * order.deal.pricePerHeadGBP}</p>
            </div>

            <Button
              wide
              type="solid"
              onClick={() => onSubmit(discount.promoCode ?? null)}
            >
              Place Order
            </Button>

            <TermsAndConditions />
          </>
        )}
      </CheckoutCard>

      {!isDesktop && (
        <PromoCodeInput
          disabled={Boolean(discount)}
          applyPromoCode={applyPromoCode}
        />
      )}

      {!isDesktop && (
        <div
          style={{
            filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.33))',
            zIndex: UI.Z_INDEX_FLOATING_COMPONENTS,
          }}
          className="fixed bottom-0 left-0 right-0 flex flex-col items-center px-6 py-6 space-y-2 bg-white"
        >
          <TermsAndConditions />

          <Button
            wide
            type="solid"
            size="large"
            onClick={() => onSubmit(discount.promoCode ?? null)}
          >
            Place Order
          </Button>
        </div>
      )}
    </div>
  );
}

const SecureTransactionText = () => (
  <div className="absolute top-0 flex justify-center w-full -mt-6 text-gray-300">
    <LockSVG className="h-4 mr-2 fill-current" />
    <span className="text-sm">Secure transaction</span>
  </div>
);

const TermsAndConditions = () => (
  <div className="text-2xs">
    By placing this order, I agree to the{' '}
    <a href="/privacy" className="font-semibold underline cursor-pointer">
      Terms of Use
    </a>
    {', '}
    <a href="/privacy" className="font-semibold underline cursor-pointer">
      Terms of Sale
    </a>{' '}
    and have read the{' '}
    <a href="/privacy" className="font-semibold underline cursor-pointer">
      Privacy Statement.
    </a>
  </div>
);

interface PromoCodeInputProps {
  disabled?: boolean;
  applyPromoCode: (promoCode: string) => void;
}

const PromoCodeInput = ({ disabled, applyPromoCode }: PromoCodeInputProps) => {
  const [promoCode, setPromoCode] = useState('');

  return (
    <div className="flex items-center justify-between space-x-2 text-xs">
      <Input
        disabled={disabled}
        placeholder="Promo Code"
        value={promoCode}
        onValueChange={setPromoCode}
        regex={CHECKOUT.PROMO_CODE_REGEX}
        formatter={value => value.toLowerCase()}
      />
      <Button
        disabled={disabled}
        type="solid"
        className="h-10"
        onClick={() => applyPromoCode(promoCode)}
      >
        Apply
      </Button>
    </div>
  );
};
