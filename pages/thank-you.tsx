import { PhoneIcon } from '@tastiest-io/tastiest-icons';
import { Button } from '@tastiest-io/tastiest-ui';
import {
  Booking,
  CmsApi,
  dlog,
  FirestoreCollection,
  formatCurrency,
  Order,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import { DateTime } from 'luxon';
import { InferGetServerSidePropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ThankYouHero } from 'public/assets/page';
import React, { ReactNode } from 'react';
import Stripe from 'stripe';
import { db, firebaseAdmin } from 'utils/firebaseAdmin';
import { generateTitle } from 'utils/metadata';
import { v4 as uuid } from 'uuid';
import { Contained } from '../components/Contained';

type PaymentCard = {
  brand: string;
  last4: string;
};

export const getServerSideProps = async context => {
  // Verify order is legit; else redirect and wipe order data.
  const token = String(context.query.token ?? '') ?? null;

  // If no order or user exists in URI, redirect to home
  if (!token) {
    dlog('No token!');

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Get order, given our order IDs
  // If the order exists, /api/payments/createNewOrder
  // has already verified that it's valid.
  const orderSnapshot = await db(FirestoreCollection.ORDERS)
    .where('token', '==', token)
    .limit(1)
    .get();

  let order: Order;
  orderSnapshot.docs.forEach(doc => (order = doc.data() as Order));

  // Redirect if user somehow got to this state of no order request.
  if (!order || !order.paidAt) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Get the corresponding booking
  const bookingSnapshot = await db(FirestoreCollection.BOOKINGS)
    .doc(order.id)
    .get();

  const booking = bookingSnapshot.data() as Booking;

  // Redirect if invalid booking.
  if (!booking) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const userDataApi = new UserDataApi(firebaseAdmin, order.userId);
  const { details: userDetails } = await userDataApi.getUserData();

  // Get Live / Test data
  const stripe = new Stripe(
    order.isTest
      ? process.env.STRIPE_TEST_SECRET_KEY
      : process.env.STRIPE_LIVE_SECRET_KEY,
    {
      apiVersion: '2020-08-27',
    },
  );

  const paymentMethod = await stripe.paymentMethods.retrieve(
    order.paymentMethod,
  );

  const paymentCard: PaymentCard = {
    brand: paymentMethod.card.brand,
    last4: paymentMethod.card.last4,
  };

  // Get post's images
  // Don't worry about speed, this page is pre-fetched on checkout.
  const cmsApi = new CmsApi(
    undefined,
    undefined,
    process.env.NODE_ENV as 'production' | 'development',
  );

  const post = await cmsApi.getPostBySlug(order.fromSlug);
  const assets = {
    restaurantHero: post.restaurant.heroIllustration,
    dish: post.plate,
  };

  return {
    props: {
      firstName: userDetails?.firstName,
      order,
      booking,
      paymentCard,
      assets,
    },
  };
};

function ThankYou(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { firstName, order, booking, paymentCard, assets } = props;
  const { isMobile, isDesktop } = useScreenSize();

  dlog('thank-you ➡️ order:', order);

  const humanBookedForDate = DateTime.fromMillis(
    order.bookedForTimestamp,
  ).toRelativeCalendar();

  return (
    <>
      <Head>
        <title>{generateTitle('Thank You!')}</title>
      </Head>

      <NextSeo
        title="Tastiest - Thank You!"
        description="Tastiest Payment Complete & Receipt"
        openGraph={{
          title: 'Tastiest - Thank You!',
          description: 'Tastiest Payment Complete & Receipt',
          images: [
            {
              url: 'https://tastiest.io/assets/seo/page/thank-you-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest Thank-You Hero',
            },
            {
              url: 'https://tastiest.io//assets/seo/page/thank-you-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest Thank-You Hero',
            },
          ],
        }}
      />

      <div className="flex flex-col items-center w-full">
        <div className="bg-gradient-to-br from-primary to-secondary w-full pb-10 pt-10">
          <Contained>
            <div className="flex flex-wrap items-center justify-center w-full">
              <ThankYouHero
                style={{
                  maxWidth: isDesktop ? '200px' : '125px',
                }}
                className="w-full"
              />

              <h1 className="text-5xl md:text-6xl font-primary text-light px-4">
                Yay!
              </h1>
            </div>

            <h2 className="text-2xl text-center font-primary text-light opacity-75 pt-3">
              Thanks{firstName ? ` ${firstName}` : ''}!{' '}
              {isDesktop ? null : <br />} You're going to love it
            </h2>
          </Contained>
        </div>

        <Contained>
          <h2 className="w-full pt-12 mb-10 pb-2 text-2xl text-center border-b-2 border-secondary font-primary">
            What's next?
          </h2>

          <div className="flex flex-col space-y-10 pb-16 items-center">
            <BookingSection
              title={`${booking.restaurant.name} is expecting you ${humanBookedForDate}.`}
              step={1}
              figure={
                <div className="relative h-24 w-64">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    objectPosition="bottom"
                    src={assets.restaurantHero.url}
                  />
                </div>
              }
              promptText={
                <div className="flex flex-col items-center md:items-start">
                  <p className={isDesktop ? 'pb-2' : 'pb-3'}>
                    Call them up and mention{' '}
                    <span className="font-normal">Tastiest</span> if you have
                    any questions.
                  </p>

                  <a
                    href={`tel:${order.deal.restaurant?.publicPhoneNumber.replace(
                      /[\s]/g,
                      '-',
                    )}`}
                    className="no-underline"
                  >
                    <Button
                      color="light"
                      prefix={
                        <PhoneIcon className="h-6 text-primary fill-current" />
                      }
                    >
                      <p className="font-normal tracking-wide">
                        {order.deal.restaurant?.publicPhoneNumber}
                      </p>
                    </Button>
                  </a>
                </div>
              }
            />

            <BookingSection
              title="Redeem with your booking code"
              step={2}
              promptText={
                <p>
                  Simply let {booking.restaurant.name} know your 4 digit booking
                  code when you arrive.
                </p>
              }
              figure={
                <div className="flex w-full space-x-2">
                  {booking.confirmationCode.split('').map(digit => (
                    <div
                      key={uuid()}
                      style={{ minWidth: '2.5rem' }}
                      className="flex items-center justify-center flex-1 h-14 text-2xl rounded-md font-mono bg-gradient-to-br from-tertiary to-secondary text-light"
                    >
                      {digit}
                    </div>
                  ))}
                </div>
              }
            ></BookingSection>

            <BookingSection
              title={`Enjoy your food!`}
              step={3}
              promptText={
                <p>Enjoy your meal, and don't forget to leave a review!</p>
              }
              figure={
                <div
                  style={{ maxWidth: '150px' }}
                  className="relative mt-4 h-32 w-full"
                >
                  <Image layout="fill" src={assets.dish.url} />
                </div>
              }
            />
          </div>
        </Contained>

        <Contained maxWidth={800}>
          <div className="shadow-md bg-secondary bg-opacity-10 mb-10 py-6 px-8 rounded-lg text-center">
            If you have any questions or suggestions, please reach out to{' '}
            <Link href="/help">
              <a className="text-secondary">our support team</a>
            </Link>
            .
          </div>

          <div className="w-full h-0 border-b-2"></div>

          <OrderSummary order={order} paymentCard={paymentCard} />

          <div className="w-full pt-10 border-b-2 border-dashed border-primary"></div>
        </Contained>

        <div className="flex justify-center py-10 w-full">
          <Link href="/">
            <a className="no-underline">
              <Button size="large">Find more great food!</Button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

interface BookingSectionProps {
  title: string;
  step: number;
  figure: ReactNode;
  children?: ReactNode;
  promptText?: ReactNode;
}

function BookingSection(props: BookingSectionProps) {
  const { step, title, figure, promptText, children } = props;

  const { isDesktop } = useScreenSize();

  return (
    <div className={clsx('relative w-full', isDesktop && 'pl-10')}>
      {isDesktop ? null : (
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-8 h-8 text-xl font-bold text-white rounded-full bg-primary font-mono">
            {step}
          </div>
        </div>
      )}

      <div
        className={clsx(
          isDesktop
            ? 'flex justify-center'
            : 'flex flex-col items-center space-y-4',
        )}
      >
        <BookingSectionImage {...props} isDesktop={isDesktop} />

        <div
          style={{ width: '350px' }}
          className={clsx('flex flex-col justify-center h-auto')}
        >
          <h2 className="text-xl leading-none text-center font-primary md:text-left">
            {title}
          </h2>

          {(promptText || children) && (
            <div
              className={clsx(
                'flex flex-col items-center md:items-start mt-2',
                isDesktop && 'border-t',
              )}
            >
              {children ? <div className="pt-4 pb-2">{children}</div> : null}

              <div>
                <p
                  style={{ maxWidth: isDesktop ? '17.5rem' : '17.5rem' }}
                  className="pt-2 text-center font-light leading-tight opacity-75 md:text-left"
                >
                  {promptText}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface BookingSectionImageProps extends BookingSectionProps {
  isDesktop: boolean;
}

const BookingSectionImage = (props: BookingSectionImageProps) => {
  const { figure, step, isDesktop } = props;

  return (
    <div className="relative px-8">
      <div
        style={{
          width: isDesktop ? '14rem' : '13rem',
          minHeight: '5rem',
        }}
        className="relative h-full flex items-end justify-center w-full md:items-center"
      >
        {figure}

        {isDesktop ? (
          <div className="absolute top-0 -left-12 flex items-center justify-center w-8 h-8 mt-2 text-xl font-bold text-white rounded-full bg-primary font-mono">
            {step}
          </div>
        ) : null}
      </div>
    </div>
  );
};

interface OrderSummaryProps {
  order: Order;
  paymentCard: PaymentCard;
}

const OrderSummary = ({ order, paymentCard }: OrderSummaryProps) => {
  const sumeraryDetails = [
    {
      label: 'Experience',
      value: order.deal.name,
    },
    {
      label: 'Payment Date',
      value: DateTime.fromMillis(order.paidAt).toFormat('DDD'),
    },
    {
      label: 'Booked For',
      value: DateTime.fromMillis(order.bookedForTimestamp).toFormat(
        'h:mm a - d MMMM',
      ),
    },
    {
      label: 'Payment method',
      value: `${paymentCard.brand.toUpperCase()} - ${paymentCard.last4}`,
    },
    {
      label: 'Price',
      value: `£${formatCurrency(order.deal.pricePerHeadGBP)}`,
    },
    {
      label: 'Heads',
      value: order.heads,
    },
  ];

  const sumeraryPayment = [
    {
      label: 'Subtotal',
      value: `£${formatCurrency(order.price.subtotal)}`,
    },
    {
      label: 'Discount',
      value: `— £${formatCurrency(
        Math.abs(order.price.final - order.price.subtotal),
      )}`,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full text-sm sm:text-base">
      <h4 className="pt-6 pb-8 text-2xl text-center font-primary text-primary">
        Order Summary
      </h4>

      <div
        style={{ width: '500px', maxWidth: '100%' }}
        className="px-4 py-6 bg-white shadow-lg rounded"
      >
        <div className="flex flex-col pb-5 border-b mb-3 space-y-7">
          {sumeraryDetails.map((item, key) => (
            <div key={key} className="flex justify-between leading-none">
              <span className="font-light opacity-75">{item.label}</span>
              <span className="text-right">{item.value}</span>
            </div>
          ))}
        </div>

        <div>
          {sumeraryPayment.map((item, key) => (
            <div key={key} className="flex justify-between">
              <span className="font-light">{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 rounded mt-3 p-4 font-medium flex justify-between">
          <span>Payment Amount</span>
          <span className="tracking-wide">
            £{formatCurrency(order.price.final)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
