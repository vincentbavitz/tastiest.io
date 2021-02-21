import {
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStripeError } from '../../state/checkout';
import { IState } from '../../state/reducers';
import { CheckoutStep, IDeal } from '../../types/checkout';
import { Button } from '../Button';
import { InputAbstract } from '../inputs/InputAbstract';

const heads = 33;

interface Props {
  stripeClientSecret: string;
}

export function CheckoutOrderSummary({ stripeClientSecret }: Props) {
  const {
    flow: { step },
    order,
  } = useSelector((state: IState) => state.checkout);

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [discountCode, setDiscountCode] = useState('');

  const handleSubmit = async () => {
    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
      dispatch(setStripeError(error));
      return;
    }

    await stripe.confirmCardPayment(stripeClientSecret, {
      //
    });

    console.log('CheckoutOrderSummary ➡️ error:', error);
    console.log('CheckoutOrderSummary ➡️ paymentMethod:', paymentMethod);
  };

  if (!order) return null;

  return (
    <div
      style={{
        minWidth: '250px',
        height: 'min-content',
      }}
      className="flex-grow overflow-hidden border-2 rounded-xl border-secondary"
    >
      <div
        style={{}}
        className="w-full px-3 py-3 text-center bg-secondary font-somatic"
      >
        {order?.tagline}
      </div>

      <div className="bg-opacity-75 bg-primary aspect-w-16 aspect-h-9">
        <img className="object-cover" src={order?.image?.source} />
      </div>

      <div className="flex flex-col px-3 pt-3 pb-4 space-y-3">
        <p className="text-sm font-medium">{order?.restaurantName}</p>

        {step === CheckoutStep.SIGN_IN && (
          <div className="flex items-center justify-between">
            <p className="text-sm">
              {order.includes.map(item => (
                <p key={item}>{item}</p>
              ))}{' '}
              x{heads}
            </p>

            <CheckoutPrice {...order} />
          </div>
        )}

        {step === CheckoutStep.PAYMENT && (
          <>
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium text-primary">Qty</p>
              <select
                name="zzz"
                defaultValue={Math.floor(heads) ?? 1}
                className="w-12 bg-transparent border-2 rounded-md border-secondary"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(o => (
                  <option key={o} className="text-center" value="1">
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between text-xs">
              <p>Booking for {heads} people</p>
              <p className="font-medium">
                £{Math.floor(heads) * order.pricePerHeadGBP}
              </p>
            </div>

            <div className="flex items-center justify-between h-10 space-x-2 text-xs">
              <InputAbstract
                placeholder="Discount Code"
                className="h-10"
                border="primary"
                inputClassName="w-full"
                value={discountCode}
                onValueChange={setDiscountCode}
                regex={/^[a-zA-Z0-9]{1,10}$/}
              />
              <Button type="solid" size="tiny" className="h-full">
                Apply
              </Button>
            </div>

            <hr className="bg-primary border-primary text-primary" />

            <div className="flex items-center justify-between mb-1 space-x-2 font-medium">
              <p>Total</p>
              <p>£{Math.floor(heads) * order.pricePerHeadGBP}</p>
            </div>

            <Button
              className="w-full py-2"
              type="solid"
              size="small"
              onClick={handleSubmit}
            >
              Place Order
            </Button>

            <div className="text-xs">
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
          </>
        )}
      </div>
    </div>
  );
}

const CheckoutPrice = (order: IDeal) => (
  <p className="text-lg font-medium">
    £{Math.floor(heads) * order.pricePerHeadGBP}
  </p>
);
