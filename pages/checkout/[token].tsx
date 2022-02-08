import { LockOutlined } from '@ant-design/icons';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button, Tooltip } from '@tastiest-io/tastiest-ui';
import {
  dlog,
  formatCurrency,
  Horus,
  HorusOrderEntity,
  reportInternalError,
  TastiestInternalErrorCode,
  TastiestPaymentError,
  TDay,
  titleCase,
  TMonth,
  TYear,
  useHorusSWR,
} from '@tastiest-io/tastiest-utils';
import { CheckoutCard } from 'components/checkout/CheckoutCard';
import { CheckoutInputCard } from 'components/checkout/CheckoutInputCard';
import CheckoutInputName from 'components/checkout/CheckoutInputName';
import { InputContactBirthday } from 'components/inputs/contact/InputContactBirthday';
import { InputMobile } from 'components/inputs/contact/InputMobile';
import { InputName } from 'components/inputs/contact/InputName';
import InputPostcode from 'components/inputs/contact/InputPostcode';
import MobileBottomButton from 'components/MobileBottomButton';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import LayoutCheckout from 'layouts/LayoutCheckout';
import { Layouts } from 'layouts/LayoutHandler';
import { DateTime } from 'luxon';
import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { generateStaticURL } from 'utils/routing';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY
    : process.env.NEXT_PUBLIC_STRIPE_LIVE_PUBLISHABLE_KEY,
);

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { params } = context;
  const orderToken = params.token;
  const cookieToken = nookies.get(context)?.token;

  const horus = new Horus(cookieToken);

  // This will automatically fail if the user doesn't own this order.
  const { data: order, error } = await horus.get<any, HorusOrderEntity>(
    `orders/${orderToken}`,
  );

  // Serious checkout error. Report internal error.
  if (!order || error) {
    await reportInternalError({
      code: TastiestInternalErrorCode.PAGE_PREFETCH_ERROR,
      message:
        'Checkout creation of order from Horus.post failed in getServerSideProps.',
      timestamp: Date.now(),
      shouldAlert: false,
      originFile: '/pages/checkout/index.tsx',
      severity: 'HIGH',
      properties: { error },
      raw: error,
    });

    dlog('[token] ➡️ error:', error);

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Have they already paid? Redriect back to the experience page.
  if (order.paidAt || order.abandonedAt) {
    return {
      redirect: {
        destination: generateStaticURL({
          restaurant: order.experience.restaurant.uriName,
          cuisine: order.experience.restaurant.cuisine,
          city: order.experience.restaurant.city,
          slug: order.fromSlug,
        }).as,
        permanent: false,
      },
    };
  }

  return {
    props: {
      order,
      userToken: cookieToken,
      userId: order.user.id,
    },
  };
};

type FormData = {
  firstName: string;
  lastName: string;
  mobile: string;
  cardPostcode: string;
  cardHolderName: string;
};

function CheckoutPayment(
  props: InferGetStaticPropsType<typeof getServerSideProps>,
) {
  const { userId, userToken } = props;
  const { token = userToken } = useAuth();

  const { isDesktop } = useScreenSize();
  const router = useRouter();

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [error, setError] = useState<TastiestPaymentError | null>(null);

  const { data: order } = useHorusSWR(`/orders/${props.order.token}`, token, {
    initialData: props.order,
    refreshInterval: 5000,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  const submit = handleSubmit(
    async ({ firstName, lastName, mobile, cardPostcode, cardHolderName }) => {
      if (
        firstName?.length > 0 ||
        lastName?.length > 0 ||
        mobile?.length > 0 ||
        cardPostcode?.length > 0
        // JSON.stringify(birthday) !== JSON.stringify(userData.details?.birthday)
      ) {
        const horus = new Horus(token);

        // Update user information
        horus.post('/users/update', {
          uid: userId,
          firstName,
          lastName,
          mobile,
          // birthday?: Date;
          location: { postcode: cardPostcode },
        });
      }

      // Start isLoading
      setIsPaymentProcessing(true);
      setError(null);

      // const { paymentMethod, error: paymentMethodError } = await addCard(
      //   cardHolderName,
      //   cardPostcode,
      // );

      // Error adding card. Either card already exists or validation error
      // if (paymentMethodError) {
      //   dlog('CheckoutStepPayment ➡️ paymentMethodError:', paymentMethodError);

      //   setIsPaymentProcessing(false);
      //   setError({
      //     code: 'card_error',
      //     type: 'tastiest-payment-error',
      //     message: 'This card is already in use. Please contact support.',
      //   });
      //   return;
      // }

      // const { error: updateOrderError } = await updateOrder({
      //   paymentMethodId: paymentMethod.id,
      // });

      // if (updateOrderError) {
      //   dlog('CheckoutStepPayment ➡️ updateOrderError:', updateOrderError);
      //   dispatch(setIsPaymentProcessing(false));
      //   setError({
      //     code: 'update_order_error',
      //     type: 'api_error',
      //     message: 'There was an error updating your order.',
      //   });

      //   return { success: false, error: updateOrderError };
      // }

      // const { success, error } = await pay();

      // Uh-oh - a general payment error!
      // This usually means the card declined.
      if (error) {
        setError({
          code: 'general_payment_error',
          type: 'card_error',
          message:
            'There was an error processing your payment. Please try using another card.',
        });

        alert(error);

        setIsPaymentProcessing(false);
        return;
      }
    },
  );

  const birthdayDateTime = DateTime.fromJSDate(order?.user.birthday);

  return (
    <>
      <Head>
        <title>Checkout - Tastiest</title>
      </Head>
      <NextSeo
        title="Tastiest - Checkout"
        description="Tastiest Payment & Checkout"
        openGraph={{
          title: 'Tastiest - Checkout',
          description: 'Tastiest - Payment & Checkout',
          images: [
            {
              url: 'https://tastiest.io/assets/seo/page/checkout-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest Checkout Hero',
            },
            {
              url: 'https://tastiest.io//assets/seo/page/checkout-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest Checkout Hero',
            },
          ],
        }}
      />

      <LayoutCheckout.Left>
        <Elements stripe={stripePromise}>
          <div>
            <div className="pt-8 mb-6 text-2xl font-medium text-dark font-primary border-b-2 border-gray-200">
              Contact details
            </div>

            <div className="flex flex-col space-y-4">
              <InputName
                name="firstName"
                size="large"
                label="First Name"
                defaultValue={titleCase(order.user.firstName)}
                control={control}
                disabled={isPaymentProcessing}
              />

              <InputName
                name="lastName"
                size="large"
                label="Last Name"
                defaultValue={order.user.lastName ?? null}
                control={control}
                disabled={isPaymentProcessing}
              />

              <InputMobile
                name="mobile"
                size="large"
                control={control}
                disabled={isPaymentProcessing}
                defaultValue={order.user.mobile ?? null}
              />

              <InputContactBirthday
                label="Birthday"
                date={{
                  day: String(birthdayDateTime.day) as TDay,
                  month: String(birthdayDateTime.month) as TMonth,
                  year: String(birthdayDateTime.year) as TYear,
                }}
                disabled={isPaymentProcessing}
                // onDateChange={value => setBirthday(value)}
                onDateChange={() => null}
              />
            </div>
          </div>

          <div>
            <div className="pt-10 mb-6 text-2xl font-medium text-dark font-primary border-b-2 border-gray-200">
              Payment details
            </div>

            <div className="flex flex-col space-y-4">
              <CheckoutInputName
                control={control}
                disabled={isPaymentProcessing}
              />

              <CheckoutInputCard disabled={isPaymentProcessing} />

              <InputPostcode
                size="large"
                label="Postcode"
                name="cardPostcode"
                placeholder="WC2H 7LT"
                control={control}
                disabled={isPaymentProcessing}
              />
            </div>
          </div>
        </Elements>
      </LayoutCheckout.Left>

      <LayoutCheckout.Right>
        <div
          style={{ filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.15)' }}
          className="flex justify-center mt-4 mb-3 w-full"
        >
          <SecureTransactionText />
        </div>

        <CheckoutCard experienceImage={order.experience.image}>
          <div className="">
            <div className="text-base font-medium">
              <div className="flex justify-between">
                <span>{order.experience.restaurant.name}</span>

                <span className="font-light">
                  £{order?.experience?.pricePerHeadGBP}
                </span>
              </div>

              <p className="text-sm mt-2 font-normal leading-tight text-gray-700">
                {order.experience.name}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="leading-none">Date</span>
            <span className="font-medium leading-none">
              {DateTime.fromISO(order.bookedFor).toFormat('h:mm a, DD')}
            </span>
          </div>

          <div className="flex items-center justify-between leading-none text-sm text-gray-600">
            <span>
              Book for {order.heads} {order.heads === 1 ? 'person' : 'people'}
            </span>
            <span className="font-medium">£{order.price.final}</span>
          </div>

          <div className="flex items-center justify-between leading-none text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span>Fees</span>
              <Tooltip content="Card processing fees are 2.9% + 30p.">
                <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 font-primary cursor-pointer">
                  i
                </div>
              </Tooltip>
            </div>
            <span className="font-medium">
              £{formatCurrency(order.price.fees)}
            </span>
          </div>

          {isDesktop && (
            <>
              {/* Promocodes are causing payment issues when our profit is <0.00. Disable for now. */}
              {/* <PromoCodeInput initialOrder={order} /> */}

              <div>
                <div className="flex items-center justify-between space-x-2 font-medium border-t border-primary border-opacity-20 pt-3 text-base">
                  <span className="font-normal">Total</span>
                  <span className="font-normal">
                    £{formatCurrency(order.price.final)}
                  </span>
                </div>
              </div>

              <Button
                wide
                type="solid"
                size="large"
                onClick={submit}
                disabled={isPaymentProcessing}
                loading={isPaymentProcessing}
              >
                Book Now
              </Button>
            </>
          )}
        </CheckoutCard>

        <div>
          <TermsAndConditions />
        </div>
      </LayoutCheckout.Right>

      {!isDesktop && (
        <MobileBottomButton
          loading={isPaymentProcessing}
          disabled={isPaymentProcessing}
          onClick={submit}
        >
          Book Now
        </MobileBottomButton>
      )}
    </>
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

CheckoutPayment.layout = Layouts.CHECKOUT;
export default CheckoutPayment;
