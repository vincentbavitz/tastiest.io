import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import { Button, Input } from '@tastiest-io/tastiest-components';
import { LockIcon, SupportIcon } from '@tastiest-io/tastiest-icons';
import {
  dlog,
  IOrder,
  PAYMENTS,
  TastiestPaymentError,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Modal } from 'components/Modal';
import { useOrder } from 'hooks/checkout/useOrder';
import { useScreenSize } from 'hooks/useScreenSize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UI } from '../../constants';
import { IState } from '../../state/reducers';
import { CheckoutCard } from './CheckoutCard';

interface Props {
  order: IOrder;
  submit: () => void;
  error: TastiestPaymentError | null;
}

export function CheckoutPaymentPanel(props: Props) {
  const { submit, error } = props;

  const router = useRouter();
  const { order } = useOrder(props.order?.token, props.order);
  const { isDesktop } = useScreenSize();

  const { isPaymentProcessing } = useSelector(
    (state: IState) => state.checkout,
  );

  const totalPrice = (
    Math.floor(order.heads) * order.deal.pricePerHeadGBP
  ).toFixed(2);

  useEffect(() => {
    dlog('CheckoutPaymentPanel ➡️ isPaymentProcessing:', isPaymentProcessing);
  }, [isPaymentProcessing]);

  if (!props.order) {
    // Return home if order is somehow invalid
    router.push('/');
    return null;
  }

  dlog('CheckoutPaymentPanel ➡️ error:', error);

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

        <div className="flex items-center justify-between text-sm">
          <p>
            Booking for {order.heads} {order.heads === 1 ? 'person' : 'people'}
          </p>
          <p className="font-medium">£{totalPrice}</p>
        </div>

        {isDesktop && (
          <>
            <PromoCodeInput initialOrder={order} />

            <hr className="bg-primary border-primary text-primary" />

            <div className="flex items-center justify-between mb-1 space-x-2 font-medium">
              <p>Total</p>
              <p>£{order.price.final.toFixed(2)}</p>
            </div>

            <Button
              wide
              type="solid"
              onClick={() => submit()}
              disabled={isPaymentProcessing}
            >
              {isPaymentProcessing ? (
                <LoadingOutlined className="text-2xl" />
              ) : (
                'Place Order'
              )}
            </Button>

            <TermsAndConditions />
          </>
        )}
      </CheckoutCard>

      {/* Payment error display */}
      {error?.code === 'general_payment_error' && (
        <PaymentErrorMessage order={order} />
      )}

      {!isDesktop && (
        <div className="flex flex-col pt-4 mb-10 space-y-3">
          <PromoCodeInput initialOrder={order} />
          <div className="w-full h-px border-b border-gray-300"></div>
          <div className="flex justify-between text-xl font-medium">
            <p>Total</p>
            <p>£{order.price.final.toFixed(2)}</p>
          </div>
        </div>
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
            onClick={() => submit()}
            disabled={isPaymentProcessing}
          >
            {isPaymentProcessing ? (
              <LoadingOutlined className="text-2xl" />
            ) : (
              'Place Order'
            )}
          </Button>
        </div>
      )}
    </div>
  );
}

const SecureTransactionText = () => (
  <div className="absolute top-0 flex justify-center w-full -mt-6 text-gray-300">
    <LockIcon className="h-4 mr-2 fill-current" />
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
  initialOrder: IOrder;
}

const PromoCodeInput = ({ initialOrder }: PromoCodeInputProps) => {
  const { order, updateOrder } = useOrder(initialOrder?.token, initialOrder);
  const [promoCode, setPromoCode] = useState('');
  const [error, setError] = useState('');

  // Disabled if we already added a discount code
  const disabled = Boolean(order?.promoCode);

  const applyPromoCode = async () => {
    const { success } = await updateOrder({ promoCode });
    setError(success ? null : 'Promo code is invalid or expired.');
  };

  return (
    <div className="">
      {order?.promoCode ? (
        <div className="flex items-center justify-between text-lg tablet:text-sm">
          <p>
            Promo code:{' '}
            <span className="font-medium text-primary">{order.promoCode}</span>
          </p>

          <p className="font-medium">
            — £{order.price.gross - order.price.final}
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between space-x-2 text-xs">
          <Input
            disabled={disabled}
            placeholder="Promo Code"
            value={promoCode}
            onValueChange={setPromoCode}
            regex={PAYMENTS.PROMO_CODE_REGEX}
            formatter={value => value.toUpperCase()}
          />
          <Button
            disabled={disabled}
            type="solid"
            className="h-10"
            onClick={applyPromoCode}
          >
            Apply
          </Button>
        </div>
      )}

      {error && (
        <div className="flex items-center mt-2 space-x-1 text-xs text-danger">
          <CloseOutlined />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

interface PaymentErrorMessageProps {
  order: IOrder;
}

const PaymentErrorMessage = ({ order }: PaymentErrorMessageProps) => {
  const { isDesktop } = useScreenSize();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const StillHavingTrouble = ({ center }: { center?: boolean }) => (
    <div
      className={clsx(
        'flex flex-wrap items-center pt-3 space-x-1',
        center && 'justify-center',
      )}
    >
      <p>
        <SupportIcon className="inline h-5 pr-1 fill-current stroke-current text-danger" />
        Still having trouble?{' '}
        <Link
          href={`https://offers.tastiest.io/help?type=ORDER&userFacingOrderId=${order.userFacingOrderId}`}
        >
          <a className="font-medium hover:underline">Contact support</a>
        </Link>
        .
      </p>
    </div>
  );

  const errorTitle = 'Payment Failed';
  const errorMessage =
    "We're havong trouble processing your payment. Please try using another card.";

  return isDesktop ? (
    <div
      className={clsx(
        'px-4 py-3 mt-4 text-sm bg-opacity-5 bg-danger',
        'border-danger rounded-xl border-2',
      )}
    >
      <h4 className="mb-1 text-lg">{errorTitle}</h4>
      <p>{errorMessage}</p>

      <StillHavingTrouble />
    </div>
  ) : (
    <Modal modalId="" isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
      <div className="relative flex flex-col items-center text-center">
        <h4 className="mb-1 -mt-8 text-xl font-medium text-danger">
          {errorTitle}
        </h4>

        <div className="w-8/12 py-3">
          <p className="">{errorMessage}</p>

          <div className="w-full h-0 px-6 pt-6 border-b border-secondary"></div>
          <StillHavingTrouble center />
        </div>
      </div>
    </Modal>
  );
};
