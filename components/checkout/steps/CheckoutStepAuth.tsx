import { HorusOrder } from '@tastiest-io/tastiest-horus';
import { ContentfulProduct, formatCurrency } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { UI } from '../../../constants';
import { CheckoutAuthTabs } from '../CheckoutAuthTabs';
import { CheckoutCard } from '../CheckoutCard';

interface Props {
  order: HorusOrder;
}

// CORRECT ME FIX ME
export function CheckoutStepAuth(props: Props) {
  const { isDesktop } = useScreenSize();

  return isDesktop ? (
    <CheckoutStepAuthDesktop {...props} />
  ) : (
    <CheckoutStepAuthMobile {...props} />
  );
}

const CheckoutStepAuthDesktop = ({ order }: Props) => {
  const totalPrice = (order?.heads ?? 1) * (order as any)?.product?.price;

  return (
    <div className="flex justify-between w-full">
      <div
        style={{
          minWidth: `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
        }}
        className="flex flex-col w-7/12 pb-24 space-y-4"
      >
        <CheckoutAuthTabs />
      </div>

      <div className="flex-grow w-5/12 pl-10">
        <CheckoutCard experienceImage={(order as any).product.image}>
          <p className="font-medium">
            {(order as any)?.product?.restaurant?.name}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-sm">
              {(order as any)?.product?.tagline} x{order?.heads}
            </p>

            <p className="pl-4 text-xl font-medium">£{totalPrice}</p>
          </div>
        </CheckoutCard>
      </div>
    </div>
  );
};

const CheckoutStepAuthMobile = ({ order }: Props) => {
  const totalPrice = formatCurrency(
    order.heads * (order as any)?.product?.pricePerHeadGBP,
  );

  return (
    <div className="flex flex-col w-full space-y-6">
      <CheckoutCard experienceImage={(order as any).product.image}>
        <div>
          <p className="text-xl font-medium">
            {(order as any)?.product?.restaurant?.name}
          </p>
          <p className="text-sm sm:text-base">
            {((order as any)?.product as ContentfulProduct)?.name}
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p>
              <span className="font-medium">Qty:</span> {order.heads}
            </p>

            <p className="pl-4 text-xl font-medium">£{totalPrice}</p>
          </div>
        </div>
      </CheckoutCard>

      <div
        style={{
          minWidth: `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
        }}
        className="flex flex-col pb-24 space-y-4"
      >
        <CheckoutAuthTabs />
      </div>
    </div>
  );
};
