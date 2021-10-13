import { Button } from '@tastiest-io/tastiest-components';
import { PhoneIcon } from '@tastiest-io/tastiest-icons';
import {
  dlog,
  FirestoreCollection,
  formatCurrency,
  IBooking,
  IOrder,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import { DateTime } from 'luxon';
import moment from 'moment';
import { InferGetServerSidePropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { ThankYouFood, ThankYouHero, ThankYouPhone } from 'public/assets/page';
import React, { ReactNode } from 'react';
import Stripe from 'stripe';
import { db, firebaseAdmin } from 'utils/firebaseAdmin';
import { generateTitle } from 'utils/metadata';
import { v4 as uuid } from 'uuid';
import { Contained } from '../components/Contained';

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

  let order: IOrder;
  orderSnapshot.docs.forEach(doc => (order = doc.data() as IOrder));

  // Get the corresponding booking
  const bookingSnapshot = await db(FirestoreCollection.BOOKINGS)
    .doc(order.id)
    .get();

  const booking = bookingSnapshot.data() as IBooking;

  // Redirect if user somehow got to this state of no order request.
  if (!order || !order.paidAt || !booking) {
    if (!booking) {
      dlog('No booking!');
    }

    if (!order) {
      dlog('No order!');
    }

    if (!order.paidAt) {
      dlog('Order not paid!');
    }

    return {
      redirect: {
        // TODO -> Destination should be /city/cuisine/slug
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

  const paymentCard = {
    brand: paymentMethod.card.brand,
    last4: paymentMethod.card.last4,
  };

  return {
    props: { firstName: userDetails?.firstName, order, booking, paymentCard },
  };
};

function ThankYou(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { firstName, order, booking, paymentCard } = props;
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

      <Contained>
        <div className="flex flex-col items-center w-full mt-6 mb-20 space-y-16">
          <div
            style={{
              maxWidth: '40rem',
            }}
            className="flex flex-col items-center w-full tablet:flex-row"
          >
            <div className="flex justify-center order-last w-full tablet:justify-start tablet:order-first">
              <ThankYouHero
                style={{
                  maxWidth: '300px',
                }}
                className="w-full"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-6xl font-primary text-primary">Yay!</h1>
              <h2
                style={{ maxWidth: isDesktop ? '30rem' : '50em' }}
                className="text-2xl font-primary text-primary"
              >
                Thanks{firstName ? ` ${firstName}` : ''}! You're going to love
                it
              </h2>
            </div>
          </div>

          <h2 className="w-full pt-6 pb-4 text-4xl text-center border-b-2 border-secondary font-primary">
            What's next?
          </h2>

          <BookingSection
            title={`${booking.restaurant.name} is expecting you ${humanBookedForDate}.`}
            step={1}
            figure={<ThankYouPhone className="w-full h-full" />}
            promptText={
              <p>
                Call them up and mention{' '}
                <span className="font-bold">Tastiest</span> if you have any
                questions.
              </p>
            }
          >
            <a href={`tel:${order.deal.restaurant?.publicPhoneNumber}`}>
              <Button
                prefix={<PhoneIcon className="h-6 text-white fill-current" />}
              >
                <p className="font-normal tracking-wide">
                  {order.deal.restaurant?.publicPhoneNumber}
                </p>
              </Button>
            </a>
          </BookingSection>

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
              <div className="flex space-x-2">
                {booking.confirmationCode.split('').map(digit => (
                  <div
                    key={uuid()}
                    style={{ minWidth: '3rem' }}
                    className="flex items-center justify-center flex-1 h-16 text-3xl rounded-md font-primary bg-tertiary text-light"
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
            figure={<ThankYouFood className="w-full h-full" />}
          />

          <Contained maxWidth={800}>
            <div className="w-full h-0 border-b-4 border-secondary"></div>

            <div className="w-full">
              <h4 className="pt-6 pb-8 text-xl text-center font-primary text-primary">
                Your Order
              </h4>

              <table className="w-full text-sm mobile:text-base">
                <thead className="font-semibold text-gray-500">
                  <td>AMOUNT</td>
                  <td>DATE</td>
                  <td className="text-right">PAYMENT</td>
                </thead>

                <tbody>
                  <tr className="border-t border-gray-500">
                    <td className="pt-1">
                      £{formatCurrency(order.price.final)}
                    </td>
                    <td className="pt-1">
                      {moment(order.paidAt).format('Do MMMM YYYY')}
                    </td>
                    <td className="pt-1 text-right uppercase ">
                      {paymentCard.brand} - {paymentCard.last4}
                    </td>
                  </tr>
                </tbody>
              </table>

              <h4 className="pt-6 mb-2 text-base font-semibold text-gray-500 border-b border-gray-300 mobile:text-lg">
                ORDER SUMMARY
              </h4>

              {!isMobile && (
                <table className="w-full">
                  <thead className="text-sm font-semibold text-gray-500 mobile:text-base">
                    <td>Description</td>
                    <td>Qty.</td>
                    <td className="text-right">Price</td>
                  </thead>

                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="pt-2 pl-2">
                        <img
                          src={`${order.deal.image.url}?w=300`}
                          style={{ maxWidth: '33vw' }}
                          className="w-56 pb-1"
                        />
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr className="bg-gray-100 border-b border-gray-500">
                      <td className="pl-2">
                        <div className="pb-2">
                          <p className="text-gray-800 text-bold">
                            {order.deal.restaurant.name}
                          </p>
                          <p className="-mt-1 text-sm opacity-75">
                            {order.deal.name}
                          </p>
                        </div>
                      </td>
                      <td className="align-top">{order.heads}</td>
                      <td className="pr-2 text-right align-top">
                        £{formatCurrency(order.deal.pricePerHeadGBP)}
                      </td>
                    </tr>

                    <tr className="font-bold text-gray-600 bg-gray-100">
                      <td className="pt-1 pl-2 align-bottom">Subtotal</td>
                      <td></td>
                      <td className="pt-1 pr-2 text-right align-bottom">
                        £{formatCurrency(order.price.gross)}
                      </td>
                    </tr>

                    {order.promoCode && (
                      <tr className="font-bold text-gray-600 bg-gray-100">
                        <td className="pt-1 pl-2 align-bottom">
                          Discount{' '}
                          <span className="text-primary">
                            {order.promoCode}
                          </span>
                        </td>
                        <td></td>
                        <td className="pt-1 pr-2 text-right align-bottom">
                          -£
                          {formatCurrency(
                            order.price.gross - order.price.final,
                          )}
                        </td>
                      </tr>
                    )}

                    <tr className="text-lg font-bold text-gray-600 bg-gray-100">
                      <td className="pt-1 pl-2 align-top">Amount Charged</td>
                      <td></td>
                      <td className="pt-1 pb-1 pr-2 text-right align-top">
                        £{formatCurrency(order.price.final)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              {isMobile && (
                <div className="flex flex-col p-2 space-y-1 bg-gray-100">
                  <div className="flex justify-between">
                    <img
                      src={`${order.deal.image.url}?w=300`}
                      style={{ maxWidth: '60%' }}
                      className="w-56 pb-1"
                    />
                  </div>

                  <div className="">
                    <p className="font-bold text-gray-600">
                      {order.deal.restaurant.name}
                    </p>
                    <p className="text-sm leading-tight opacity-75">
                      {order.deal.name}
                    </p>
                  </div>

                  <div className="flex justify-between pt-2 text-sm">
                    <p className="font-bold text-gray-600">Quantity</p>
                    <p className="text-sm leading-tight opacity-75">
                      {order.heads}
                    </p>
                  </div>

                  <div className="flex justify-between pt-2 text-sm border-t border-gray-600">
                    <p className="font-bold text-gray-600">Subtotal</p>
                    <p className="leading-tight opacity-75">
                      £{formatCurrency(order.price.gross)}
                    </p>
                  </div>

                  {order.promoCode && (
                    <div className="flex justify-between pt-2 text-sm">
                      <p className="font-bold text-gray-600">
                        Discount:{' '}
                        <span className="text-primary">{order.promoCode}</span>
                      </p>
                      <p className="leading-tight opacity-75">
                        -£
                        {formatCurrency(order.price.gross - order.price.final)}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <p className="font-bold text-gray-600">Total</p>
                    <p className="leading-tight opacity-75">
                      £{formatCurrency(order.price.final)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="w-full pt-10 border-b-2 border-dashed border-primary"></div>
          </Contained>

          <div className="flex justify-center w-full">
            <a href="/" className="no-underline">
              <Button size="large" className="text-2xl font-primary" round>
                Find more great food!
              </Button>
            </a>
          </div>
        </div>
      </Contained>
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
    <div className="">
      <div className="flex flex-col items-center justify-center tablet:flex-row">
        <div
          style={{
            width: isDesktop ? '16rem' : '13rem',
            minHeight: '8rem',
          }}
          className="relative flex items-end justify-center w-full tablet:items-center"
        >
          {figure}

          <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 mt-6 -ml-4 text-xl font-bold text-white rounded-full bg-primary">
            {step}
          </div>
        </div>

        <div className={clsx('flex-grow', isDesktop && 'pl-10')}>
          <h2
            style={{ width: !isDesktop ? 'auto' : '11em' }}
            className="pt-4 text-2xl leading-tight text-center tablet:pt-0 font-primary mobile:text-2xl tablet:text-left"
          >
            {title}
          </h2>

          {(promptText || children) && (
            <div className="flex flex-col items-center tablet:items-start">
              {children ? <div className="pt-4 pb-2">{children}</div> : null}

              <div>
                <p
                  style={{ maxWidth: isDesktop ? '17.5rem' : 'auto' }}
                  className="pt-2 text-center opacity-75 tablet:text-left"
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

export default ThankYou;
