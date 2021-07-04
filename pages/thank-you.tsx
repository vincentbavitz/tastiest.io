import { Button } from '@tastiest-io/tastiest-components';
import { PhoneIcon } from '@tastiest-io/tastiest-icons';
import {
  FirestoreCollection,
  IBooking,
  IOrder,
  UserData,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetServerSidePropsType } from 'next';
import { ThankYouFood, ThankYouHero, ThankYouPhone } from 'public/assets/page';
import React, { ReactNode } from 'react';
import { firebaseAdmin } from 'utils/firebaseAdmin';
import { v4 as uuid } from 'uuid';
import { Contained } from '../components/Contained';

export const getServerSideProps = async context => {
  // Verify order is legit; else redirect and wipe order data.
  const token = String(context.query.token ?? '') ?? null;

  // If no order or user exists in URI, redirect to home
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Get order, given our order ID.s
  // If the order exists, /api/payments/createNewOrder
  // has already verified that it's valid.
  const orderSnapshot = await firebaseAdmin
    .firestore()
    .collection(FirestoreCollection.ORDERS)
    .where('token', '==', token)
    .limit(1)
    .get();

  let order: IOrder;
  orderSnapshot.docs.forEach(doc => (order = doc.data() as IOrder));

  // Get the corresponding booking
  const bookingSnapshot = await firebaseAdmin
    .firestore()
    .collection(FirestoreCollection.BOOKINGS)
    .doc(order.id)
    .get();

  const booking = bookingSnapshot.data() as IBooking;

  // Redirect if user somehow got to this state of no order request.
  if (!order || !order.paidAt || !booking) {
    return {
      redirect: {
        // TODO -> Destination should be /city/cuisine/slug
        destination: '/',
        permanent: false,
      },
    };
  }

  const userDataApi = new UserDataApi(firebaseAdmin, order.userId);
  const userDetails = await userDataApi.getUserData(UserData.DETAILS);

  return {
    props: { firstName: userDetails?.firstName, order, booking },
  };
};

function ThankYou(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { firstName, order, booking } = props;
  const { isDesktop } = useScreenSize();

  return (
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
            <h1 className="text-6xl font-somatic text-primary">Yay!</h1>
            <h2
              style={{ maxWidth: isDesktop ? '30rem' : '50em' }}
              className="text-2xl font-somatic text-primary"
            >
              Thanks{firstName ? ` ${firstName}` : ''}! You're going to love it
            </h2>
          </div>
        </div>

        <h2 className="w-full pt-6 pb-4 text-4xl text-center border-b-2 border-secondary font-somatic">
          What's next?
        </h2>

        <BookingSection
          title={`Book with ${booking.restaurant.name}`}
          step={1}
          figure={<ThankYouPhone className="w-full h-full" />}
          promptText={
            <p>
              Let them know you bought with <b>Tastiest</b> when you book.
            </p>
          }
        >
          <a href={`tel:${order.deal.restaurant?.publicPhoneNumber}`}>
            <Button
              size="large"
              round
              prefix={<PhoneIcon className="h-8 text-white fill-current" />}
            >
              {order.deal.restaurant?.publicPhoneNumber}
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
                  className="flex items-center justify-center flex-1 h-16 text-3xl rounded-lg font-somatic bg-secondary-2"
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
        </Contained>
        <div className="flex justify-center w-full">
          <a href="https://offers.tastiest.io">
            <Button size="large" className="text-2xl font-somatic" round>
              Find more great food!
            </Button>
          </a>
        </div>
      </div>
    </Contained>
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
          <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 mt-6 -ml-4 text-xl font-bold text-white rounded-full bg-secondary-1">
            {step}
          </div>
        </div>

        <div className={clsx('flex-grow', isDesktop && 'pl-10')}>
          <h2
            style={{ width: !isDesktop ? 'auto' : '11em' }}
            className="pt-4 text-2xl leading-tight text-center tablet:pt-0 font-somatic mobile:text-2xl tablet:text-left"
          >
            {title}
          </h2>

          {(promptText || children) && (
            <div className="flex flex-col items-center tablet:items-start">
              {children ? <div className="pt-4 pb-2">{children}</div> : null}

              <div>
                <p
                  style={{ maxWidth: isDesktop ? '17.5rem' : 'auto' }}
                  className="pt-2 text-center tablet:text-left"
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
