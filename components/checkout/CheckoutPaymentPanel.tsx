import { LockOutlined } from '@ant-design/icons';
import { SupportIcon } from '@tastiest-io/tastiest-icons';
import { Button, Modal, Tooltip } from '@tastiest-io/tastiest-ui';
import {
  formatCurrency,
  HorusOrderEntity,
  TastiestPaymentError,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import MobileBottomButton from 'components/MobileBottomButton';
import { useScreenSize } from 'hooks/useScreenSize';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../state/reducers';
import { CheckoutCard } from './CheckoutCard';

interface Props {
  order: HorusOrderEntity;
  submit: () => void;
  error: TastiestPaymentError | null;
}

export function CheckoutPaymentPanel(props: Props) {
  const { submit, order, error } = props;

  const router = useRouter();
  const { isMobile, isDesktop } = useScreenSize();

  const { isPaymentProcessing } = useSelector(
    (state: IState) => state.checkout,
  );

  const totalPrice = formatCurrency(
    Math.floor(order.heads) * order.experience.pricePerHeadGBP,
  );

  if (!props.order) {
    // Return home if order is somehow invalid
    router.push('/');
    return null;
  }

  return (
    <div
      style={{
        minWidth: '250px',
        maxWidth: isMobile ? '300px' : 'unset',
      }}
      className="relative"
    >
      {isDesktop ? (
        <div className="absolute top-0 flex justify-center w-full -mt-6 ">
          <SecureTransactionText />
        </div>
      ) : (
        <div className="flex justify-center filter drop-shadow-md mt-3 mb-3">
          <SecureTransactionText />
        </div>
      )}

      <CheckoutCard order={order}>
        <div className="">
          <div className="flex justify-between text-sm">
            <div>
              <div className="text-base font-medium">
                {order?.experience?.restaurant?.name}
                <br />
                <p className="text-sm font-normal leading-tight text-gray-700">
                  {order?.experience?.tagline}
                </p>
              </div>
            </div>

            <p className="font-medium">£{order?.experience?.pricePerHeadGBP}</p>
          </div>
        </div>

        <div className="flex items-center justify-between leading-none text-sm text-gray-600">
          <p className="">Date</p>
          <p className="font-medium">
            {DateTime.fromJSDate(order.bookedFor).toFormat('h:mm a, DD')}
          </p>
        </div>

        <div className="flex items-center justify-between leading-none text-sm text-gray-600">
          <p>
            Book for {order.heads} {order.heads === 1 ? 'person' : 'people'}
          </p>
          <p className="font-medium">£{totalPrice}</p>
        </div>

        <div className="flex items-center justify-between leading-none text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <p>Fees</p>
            <Tooltip content="Card processing fees are 2.9% + 30p.">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 font-primary cursor-pointer">
                i
              </div>
            </Tooltip>
          </div>
          <p className="font-medium">£{formatCurrency(order.price.fees)}</p>
        </div>

        {isDesktop && (
          <>
            {/* Promocodes are causing payment issues when our profit is <0.00. Disable for now. */}
            {/* <PromoCodeInput initialOrder={order} /> */}

            <hr className="bg-primary border-primary text-primary" />

            <div className="flex items-center justify-between mb-1 space-x-2 font-medium">
              <p>Total</p>
              <p>£{formatCurrency(order.price.final)}</p>
            </div>

            <Button
              wide
              type="solid"
              onClick={submit}
              disabled={isPaymentProcessing}
              loading={isPaymentProcessing}
            >
              Book Now
            </Button>
          </>
        )}
      </CheckoutCard>

      <TermsAndConditions />

      {/* Payment error display */}
      {error?.code === 'general_payment_error' && (
        <PaymentErrorMessage order={order} />
      )}

      {!isDesktop && (
        <div className="flex flex-col pt-4 mb-10 space-y-3">
          {/* Promocodes are causing payment issues when our profit is <0.00. Disable for now. */}
          {/* <PromoCodeInput initialOrder={order} /> */}
          <div className="w-full h-px border-b border-gray-300"></div>
          <div className="flex justify-between text-xl font-medium">
            <p>Total</p>
            <p>£{formatCurrency(order.price.final)}</p>
          </div>
        </div>
      )}

      {!isDesktop && (
        <MobileBottomButton
          onClick={submit}
          loading={isPaymentProcessing}
          disabled={isPaymentProcessing}
        >
          Book Now
        </MobileBottomButton>
      )}
    </div>
  );
}

const SecureTransactionText = () => (
  <div className="flex space-x-1 text-gray-600 leading-none">
    <LockOutlined
      style={{ marginTop: '-0.08rem' }}
      className="text-green-500 text-base"
    />
    <p className="text-sm">Secure transaction</p>
  </div>
);

const TermsAndConditions = () => (
  <div className="text-2xs pt-4 opacity-25 text-center">
    By placing this order, I agree to the{' '}
    <Link href="/terms-of-use">
      <a
        target="_blank"
        rel="noreferrer"
        className="font-semibold underline cursor-pointer"
      >
        Terms of Use
      </a>
    </Link>
    {', '}
    <Link href="/terms-of-sale">
      <a
        target="_blank"
        rel="noreferrer"
        className="font-semibold underline cursor-pointer"
      >
        Terms of Sale
      </a>
    </Link>{' '}
    and have read the{' '}
    <Link href="/privacy">
      <a
        target="_blank"
        rel="noreferrer"
        className="font-semibold underline cursor-pointer"
      >
        Privacy Statement.
      </a>
    </Link>
  </div>
);

// interface PromoCodeInputProps {
//   initialOrder: Order;
// }

// const PromoCodeInput = ({ initialOrder }: PromoCodeInputProps) => {
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<{ promoCode: string }>({
//     mode: 'onBlur',
//     reValidateMode: 'onBlur',
//     criteriaMode: 'firstError',
//     shouldFocusError: true,
//   });

//   const {
//     field: { ref: promoCodeRef, ...promoCodeProps },
//   } = useController({
//     name: 'promoCode',
//     defaultValue: '',
//     control,
//     rules: {
//       pattern: {
//         value: PAYMENTS.PROMO_CODE_REGEX,
//         message: 'Please enter a valid email',
//       },
//     },
//   });

//   const [promoCode, setPromoCode] = useState('');
//   const [error, setError] = useState('');

//   // Realtime order information
//   // const { order, updateOrder, isOrderUpdating } = useOrder(
//   //   initialOrder?.token,
//   //   initialOrder,
//   // );

//   // Disabled if we already added a discount code
//   const disabled = Boolean(order?.promoCode);

//   const [promoCodeLoading, setPromoCodeLoading] = useState(false);

//   const applyPromoCode = async () => {
//     setPromoCodeLoading(true);
//     const { success } = await updateOrder({ promoCode });
//     setPromoCodeLoading(false);
//     setError(success ? null : 'Promo code is invalid or expired.');
//   };

//   return (
//     <div className="leading-none">
//       {order?.promoCode ? (
//         <div className="flex items-center justify-between text-lg md:text-sm">
//           <p>
//             Promo code:{' '}
//             <span className="font-medium text-primary">{order.promoCode}</span>
//           </p>

//           <p className="font-medium">
//             {promoCodeLoading ? (
//               '— £--.--'
//             ) : (
//               <>— £{formatCurrency(order.price.subtotal - order.price.final)}</>
//             )}
//           </p>
//         </div>
//       ) : (
//         <div className="flex items-center justify-between space-x-2 text-xs">
//           <Input
//             ref={promoCodeRef}
//             size="small"
//             label="Promo Code"
//             disabled={disabled}
//             formatter={value => value.toUpperCase()}
//             {...promoCodeProps}
//           />
//           <Button disabled={disabled} onClick={applyPromoCode} size="small">
//             <CheckOutlined className="text-lg" />
//           </Button>
//         </div>
//       )}

//       {error && (
//         <div className="flex items-center mt-2 space-x-1 text-xs text-danger">
//           <CloseOutlined />
//           <p>{error}</p>
//         </div>
//       )}
//     </div>
//   );
// };

interface PaymentErrorMessageProps {
  order: HorusOrderEntity;
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
          href={`https://tastiest.io/help?type=ORDER&userFacingOrderId=${order.userFacingOrderId}`}
        >
          <a className="font-medium hover:underline">Contact support</a>
        </Link>
        .
      </p>
    </div>
  );

  const errorTitle = 'Payment Failed';
  const errorMessage =
    "We're having trouble processing your payment. Please try using another card.";

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
    <Modal show={isModalOpen} close={() => setIsModalOpen(false)}>
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
