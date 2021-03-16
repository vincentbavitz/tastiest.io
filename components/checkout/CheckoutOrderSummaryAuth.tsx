import React from 'react';
import { IOrder } from 'types/checkout';

interface Props {
  order: IOrder;
}

export default function CheckoutOrderSummaryAuth({ order }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm">
          {order.deal.includes.map(item => (
            <p key={item}>{item}</p>
          ))}{' '}
          x{order.heads}
        </p>

        <p className="text-lg font-medium">
          £{Math.floor(order.heads) * order.deal.pricePerHeadGBP}
        </p>
      </div>
    </div>
  );
}
