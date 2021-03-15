import { Select } from 'components/inputs/Select';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../state/reducers';
import { CheckoutStep, IOrder } from '../../types/checkout';
import { IDeal, valdHeads, ValidHead } from '../../types/cms';
import { Button } from '../Button';
import { InputAbstract } from '../inputs/InputAbstract';

interface Props {
  order: IOrder;
  onSubmit: () => void;
}

export function CheckoutOrderSummaryPayment(props: Props) {
  const { order, onSubmit } = props;

  const {
    flow: { step },
  } = useSelector((state: IState) => state.checkout);

  const [heads, setHeads] = useState(order.heads);
  const [discountCode, setDiscountCode] = useState('');

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
        {order?.deal.tagline}
      </div>

      <div className="bg-opacity-75 bg-primary aspect-w-16 aspect-h-9">
        <img className="object-cover" src={order?.deal.image?.imageUrl} />
      </div>

      <div className="flex flex-col px-3 pt-3 pb-4 space-y-3">
        <p className="text-sm font-medium">{order?.deal.restaurant.name}</p>

        {step === CheckoutStep.SIGN_IN && (
          <div className="flex items-center justify-between">
            <p className="text-sm">
              {order.deal.includes.map(item => (
                <p key={item}>{item}</p>
              ))}{' '}
              x{heads}
            </p>

            <CheckoutPrice deal={order.deal} heads={heads} />
          </div>
        )}

        {step === CheckoutStep.PAYMENT && (
          <>
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium text-primary">Qty</p>

              <div className="w-12">
                <Select
                  size="small"
                  onChange={value => setHeads(Number(value) as ValidHead)}
                >
                  {valdHeads.map(n => (
                    <option
                      key={n}
                      value={n}
                      selected={n === heads}
                      className="text-center"
                    >
                      {n}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <p>
                Booking for {heads} {heads === 1 ? 'person' : 'people'}
              </p>
              <p className="font-medium">
                £{Math.floor(heads) * order.deal.pricePerHeadGBP}
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
              <p>£{Math.floor(heads) * order.deal.pricePerHeadGBP}</p>
            </div>

            <Button
              className="w-full py-2"
              type="solid"
              size="small"
              onClick={onSubmit}
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
          </>
        )}
      </div>
    </div>
  );
}

const CheckoutPrice = ({ deal, heads }: { deal: IDeal; heads: number }) => (
  <p className="text-lg font-medium">
    £{Math.floor(heads) * deal.pricePerHeadGBP}
  </p>
);
