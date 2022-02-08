import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  dlog,
  Horus,
  HorusOrderEntity,
  reportInternalError,
  TastiestInternalErrorCode,
  TDay,
  titleCase,
  TMonth,
  TYear,
} from '@tastiest-io/tastiest-utils';
import { CheckoutInputCard } from 'components/checkout/CheckoutInputCard';
import CheckoutInputName from 'components/checkout/CheckoutInputName';
import { InputContactBirthday } from 'components/inputs/contact/InputContactBirthday';
import { InputMobile } from 'components/inputs/contact/InputMobile';
import { InputName } from 'components/inputs/contact/InputName';
import InputPostcode from 'components/inputs/contact/InputPostcode';
import { Layouts } from 'layouts/LayoutHandler';
import { DateTime } from 'luxon';
import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import React from 'react';
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
  const { order, userId } = props;
  dlog('[token] ➡️ order:', order);

  const router = useRouter();

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

  // FIX ME
  const isPaymentProcessing = false;

  const birthdayDateTime = DateTime.fromJSDate(order.user.birthday);

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

      <div>
        <Elements stripe={stripePromise}>
          <div>
            <div className="pt-4 mb-6 text-2xl font-medium text-dark font-primary border-b-2 border-gray-200">
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

              <InputMobile
                name="mobile"
                size="large"
                control={control}
                disabled={isPaymentProcessing}
                defaultValue={order.user.mobile ?? null}
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
      </div>
    </>
  );
}

CheckoutPayment.layout = Layouts.CHECKOUT;
export default CheckoutPayment;
