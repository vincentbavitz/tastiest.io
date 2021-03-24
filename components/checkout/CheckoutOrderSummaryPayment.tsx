import PoundSVG from '@svg/icons/pound.svg';
import LockSVG from '@svg/lock.svg';
import { Button } from '@tastiest-io/tastiest-components';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../state/reducers';
import { IOrder } from '../../types/checkout';
import { InputAbstract } from '../inputs/InputAbstract';

interface Props {
  order: IOrder;
  onSubmit: (discountCode: string | null) => void;
}

export function CheckoutOrderSummaryPayment(props: Props) {
  const { order, onSubmit } = props;

  const {
    flow: { step },
  } = useSelector((state: IState) => state.checkout);

  const [discount, setDiscount] = useState(null);
  const [discountCode, setDiscountCode] = useState(null);
  const [typedDiscountCode, setTypedDiscountCode] = useState('');

  if (!order) return null;

  const applyDiscountCode = () => {
    if (typedDiscountCode.length === 0) {
      return;
    }

    // Lookup discount on Contentful

    // If discount is valid for this order, apply client side.

    if (order) {
      setDiscountCode(null);
    }
  };

  return (
    <div
      style={{
        minWidth: '250px',
        height: 'min-content',
      }}
      className="relative"
    >
      <SecureTransactionText />

      <div className="overflow-hidden border-2 rounded-xl border-secondary">
        <div
          style={{}}
          className="w-full px-3 py-3 font-medium text-center font-roboto bg-secondary"
        >
          Order Summary
        </div>

        <div className="bg-opacity-75 bg-primary aspect-w-16 aspect-h-9">
          <img className="object-cover" src={order?.deal.image?.imageUrl} />
        </div>

        <div className="flex flex-col px-3 pt-3 pb-4 space-y-3">
          <div>
            <div className="flex justify-between text-sm">
              <p className="font-medium">{order?.deal.restaurant.name}</p>
              <p className="font-medium">
                <PoundSVG className="h-4" />
                {order?.deal?.pricePerHeadGBP}
              </p>
            </div>
            <p className="text-sm">{order?.deal?.tagline}</p>
          </div>

          <div className="flex items-center justify-between text-xs">
            <p>
              Booking for {order.heads}{' '}
              {order.heads === 1 ? 'person' : 'people'}
            </p>
            <p className="font-medium">
              <PoundSVG className="h-4" />
              {Math.floor(order.heads) * order.deal.pricePerHeadGBP}
            </p>
          </div>

          <div className="flex items-center justify-between h-10 space-x-2 text-xs">
            <InputAbstract
              placeholder="Discount Code"
              className="h-10"
              border="primary"
              inputClassName="w-full"
              value={typedDiscountCode}
              onValueChange={setTypedDiscountCode}
              regex={/^[a-zA-Z0-9]{1,10}$/}
            />
            <Button
              type="solid"
              size="tiny"
              className="h-full"
              onClick={applyDiscountCode}
            >
              Apply
            </Button>
          </div>

          <hr className="bg-primary border-primary text-primary" />

          <div className="flex items-center justify-between mb-1 space-x-2 font-medium">
            <p>Total</p>
            <p>
              <PoundSVG className="h-4" />
              {Math.floor(order.heads) * order.deal.pricePerHeadGBP}
            </p>
          </div>

          <Button
            className="w-full py-2"
            type="solid"
            size="small"
            onClick={() => onSubmit(discountCode ?? null)}
          >
            Place Order
          </Button>

          <div className="text-2xs">
            By placing this order, I agree to the{' '}
            <a
              href="/privacy"
              className="font-semibold underline cursor-pointer"
            >
              Terms of Use
            </a>
            {', '}
            <a
              href="/privacy"
              className="font-semibold underline cursor-pointer"
            >
              Terms of Sale
            </a>{' '}
            and have read the{' '}
            <a
              href="/privacy"
              className="font-semibold underline cursor-pointer"
            >
              Privacy Statement.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const SecureTransactionText = () => (
  <div className="absolute top-0 flex justify-center w-full -mt-6 text-gray-300">
    <LockSVG className="h-4 mr-2 fill-current" />
    <span className="text-sm">Secure transaction</span>
  </div>
);
