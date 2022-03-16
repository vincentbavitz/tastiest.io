import { HorusBooking, HorusOrder } from '@tastiest-io/tastiest-horus';
import {
  CmsApi,
  dlog,
  FirestoreCollection,
  formatCurrency,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { SectionTitle } from 'components/SectionTitle';
import { useScreenSize } from 'hooks/useScreenSize';
import { DateTime } from 'luxon';
import { InferGetServerSidePropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ThankYouHero } from 'public/assets/page';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsPaymentProcessing } from 'state/checkout';
import Stripe from 'stripe';
import { db } from 'utils/firebaseAdmin';
import { generateTitle } from 'utils/metadata';
import { v4 as uuid } from 'uuid';
import { Contained } from '../components/Contained';

const TASTIEAT_AIR_CALL_NUMBER = '0203-868-2972';

type PaymentCard = {
  brand: string;
  last4: string;
};

export const getServerSideProps = async context => {
  // Verify order is legit; else redirect and wipe order data.
  const token = String(context.query.token ?? '') ?? null;

  console.log('On thankyou page');

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

  let order: HorusOrder;
  orderSnapshot.docs.forEach(doc => (order = doc.data() as HorusOrder));

  // Get the corresponding booking
  const bookingSnapshot = await db(FirestoreCollection.BOOKINGS)
    .doc(order.id)
    .get();

  const booking = bookingSnapshot.data() as HorusBooking;

  dlog('thank-you ➡️ booking:', booking);

  // Redirect if invalid booking or they've already arrived.
  // CORRECT ME
  // if (!booking || booking.hasArrived) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  // Get Live / Test data
  const stripe = new Stripe(
    order.is_test
      ? process.env.STRIPE_TEST_SECRET_KEY
      : process.env.STRIPE_LIVE_SECRET_KEY,
    {
      apiVersion: '2020-08-27',
    },
  );

  // const paymentMethod = await stripe.paymentMethods.retrieve(
  //   order.paymentMethod,
  // );

  // const paymentCard: PaymentCard = {
  //   brand: paymentMethod.card.brand,
  //   last4: paymentMethod.card.last4,
  // };

  // Get post's images
  // Don't worry about speed, this page is pre-fetched on checkout.
  const cmsApi = new CmsApi();

  const post = await cmsApi.getPostBySlug(order.from_slug);
  const assets = {
    restaurantHero: (order as any).restaurant.hero_illustration,
    dish: post.plate_image,
  };

  return {
    props: {
      firstName: 'John',
      order,
      booking,
      // CORRECT ME
      // paymentCard,
      paymentCard: {
        brand: 'VISA',
        last4: '3333',
      },
      assets,
    },
  };
};

function ThankYou(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { firstName, order, booking, paymentCard, assets } = props;

  const dispatch = useDispatch();
  const { isMobile, isDesktop } = useScreenSize();

  const humanBookedForDate = DateTime.fromJSDate(
    new Date(order.booked_for),
  ).toRelativeCalendar();

  useEffect(() => {
    dispatch(setIsPaymentProcessing(false));
  }, []);

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
            </div>

            <h2 className="text-2xl text-center font-secondary text-light leading-8 opacity-75 pt-6">
              Thanks, {firstName ? ` ${firstName}` : ''}!{' '}
              {isDesktop ? null : <br />} Booking complete.
            </h2>
          </Contained>
        </div>

        <Contained>
          <div className="pt-6">
            <SectionTitle>What's next?</SectionTitle>
          </div>

          <div className="flex flex-col space-y-10 pt-6 pb-12 items-center">
            <BookingSection
              title={'Arrival Code'}
              step={1}
              figure={<></>}
              promptText={
                <div className="flex flex-col items-center text-base md:items-start">
                  <div
                    style={{ maxWidth: '225px' }}
                    className="flex w-full mb-4 space-x-2"
                  >
                    {booking.confirmation_code.split('').map(digit => (
                      <div
                        key={uuid()}
                        style={{ minWidth: '2.5rem' }}
                        className="flex items-center justify-center flex-1 h-14 text-2xl rounded font-mono bg-gradient-to-br from-primary to-secondary text-light"
                      >
                        {digit}
                      </div>
                    ))}
                  </div>

                  <p className={isDesktop ? 'pb-2' : 'pb-3'}>
                    Let {(booking as any).restaurant.name} know your arrival
                    code when you arrive.
                  </p>

                  <p className="leading-tight pb-1">
                    <span className="font-medium">Your experience</span> <br />
                    <span className="italic">
                      {(order as any).product.name}
                    </span>
                  </p>

                  <p className="leading-tight pb-1">
                    <span className="font-medium">Date</span> <br />
                    {DateTime.fromJSDate(new Date(order.booked_for)).toFormat(
                      't a, DDD',
                    )}
                  </p>

                  <p className="leading-tight">
                    <span className="font-medium">Number of people</span> <br />
                    {order.heads}
                  </p>
                </div>
              }
            />

            <BookingSection
              title="Enjoy your food"
              step={2}
              promptText={
                <p className="text-base">
                  A discretionary service charge bill will be presented at the
                  end of your meal.
                </p>
              }
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
            ></BookingSection>
          </div>
        </Contained>

        <Contained maxWidth={800}>
          <div className="shadow-md bg-secondary bg-opacity-10 mb-10 py-6 px-8 rounded-lg text-center">
            If you have any questions or suggestions, please reach out to{' '}
            <Link href="/help">
              <a target="_blank" rel="noreferrer" className="text-secondary">
                our support team
              </a>
            </Link>
            .
          </div>

          <div className="w-full h-0 border-b-2"></div>

          <OrderSummary order={order} paymentCard={paymentCard} />

          <div className="pb-10"></div>
        </Contained>

        {/* <div className="flex justify-center py-10 w-full">
          <Link href="/">
            <a className="no-underline">
              <Button size="large">Find more great food!</Button>
            </a>
          </Link>
        </div> */}
      </div>
    </>
  );
}

interface BookingSectionProps {
  title: string;
  step: number;
  figure?: ReactNode;
  children?: ReactNode;
  promptText?: ReactNode;
}

function BookingSection(props: BookingSectionProps) {
  const { step, title, figure, promptText, children } = props;

  const { isDesktop } = useScreenSize();

  return (
    <div className={clsx('relative w-full', isDesktop && 'pl-10')}>
      {/* {isDesktop ? null : (
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-8 h-8 text-xl font-bold text-white rounded-full bg-primary font-mono">
            {step}
          </div>
        </div>
      )} */}

      <div
        className={clsx(
          isDesktop
            ? 'flex justify-center'
            : 'flex flex-col-reverse items-center space-y-4',
        )}
      >
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

interface OrderSummaryProps {
  order: HorusOrder;
  paymentCard: PaymentCard;
}

const OrderSummary = ({ order, paymentCard }: OrderSummaryProps) => {
  const sumeraryDetails = [
    {
      label: 'Experience',
      value: (order as any).product.name,
    },
    {
      label: 'Payment Date',
      value: DateTime.fromJSDate(new Date(order.paid_at)).toFormat('DDD'),
    },
    {
      label: 'Booked For',
      value: DateTime.fromJSDate(new Date(order.booked_for)).toFormat(
        'h:mm a - d MMMM',
      ),
    },
    {
      label: 'Payment method',
      value: `${paymentCard.brand.toUpperCase()} - ${paymentCard.last4}`,
    },
    {
      label: 'Price',
      value: `£${formatCurrency((order as any).product.price)}`,
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
        Booking Summary
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
