import { Button } from '@tastiest-io/tastiest-components';
import { MouseIcon, PhoneIcon } from '@tastiest-io/tastiest-icons';
import {
  dlog,
  FirestoreCollection,
  IOrder,
  SVG,
  UserData,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import { useDevice } from 'hooks/useDevice';
import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetServerSidePropsType } from 'next';
import nookies from 'nookies';
import {
  ThankYouHero,
  ThankYouOnline,
  ThankYouPhone,
} from 'public/assets/page';
import React, { ReactNode } from 'react';
import { firebaseAdmin } from 'utils/firebaseAdmin';
import { Contained } from '../components/Contained';

export const getServerSideProps = async context => {
  const cookieToken = nookies.get(context)?.token;
  const userDataApi = new UserDataApi(firebaseAdmin);
  const { userId } = await userDataApi.initFromCookieToken(cookieToken);

  dlog('thank-you ➡️ userId:', userId);

  // Verify order is legit; else redirect and wipe order data.
  const token = String(context.query.token ?? '') ?? null;

  // If no order or user exists in URI, redirect to home
  if (!token || !userId) {
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
  const snapshot = await firebaseAdmin
    .firestore()
    .collection(FirestoreCollection.ORDERS)
    .where('token', '==', token)
    .limit(1)
    .get();

  let order: IOrder;
  snapshot.docs.forEach(doc => (order = doc.data() as IOrder));

  // Redirect if user somehow got to this state of no order request.
  if (!order || !order.paidAt) {
    return {
      redirect: {
        // TODO -> Destination should be /city/cuisine/slug
        destination: '/',
        permanent: false,
      },
    };
  }

  // Order already booked?
  //
  //

  const { firstName } = await userDataApi.getUserData(UserData.DETAILS);

  return {
    props: { firstName, order },
  };
};

function ThankYou(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { firstName, order } = props;
  const { isDesktop } = useScreenSize();

  const { isTouchDevice } = useDevice();

  return (
    <Contained>
      <div className="flex flex-col items-center w-full mt-6 mb-20 space-y-20">
        <div
          style={{
            maxWidth: '40rem',
          }}
          className="flex flex-col items-center w-full tablet:flex-row"
        >
          <div className="flex justify-start order-last w-full tablet:order-first">
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
              Thanks {firstName}! You're going to love it
            </h2>
          </div>
        </div>

        <BookingSection
          title="Book via the Restaurant's Phone line"
          button={
            <a href={`tel:${order.deal.restaurant?.publicPhoneNumber}`}>
              <Button size="large" round prefix={<PhoneIcon className="h-8" />}>
                {isTouchDevice
                  ? 'Phone Booking'
                  : order.deal.restaurant?.publicPhoneNumber ?? 'Phone Booking'}
              </Button>
            </a>
          }
          bookingSvg={ThankYouPhone}
          promptText={
            <p>
              Call{' '}
              {order.deal.restaurant?.publicPhoneNumber ?? 'the restaurant'} and
              quote <b>"Tastiest"</b> when you book to get this offer!
            </p>
          }
        />

        {order.deal.restaurant.bookingSystemSite && (
          <BookingSection
            title="Book via the Restaurant's online booking system"
            button={
              <a
                href={
                  order.deal.restaurant?.bookingSystemSite ??
                  order.deal.restaurant.website
                }
              >
                <Button
                  size="large"
                  round
                  prefix={<MouseIcon className="h-8" />}
                >
                  Book Online
                </Button>
              </a>
            }
            bookingSvg={ThankYouOnline}
            promptText={
              <p>
                Book online and mention
                <b>"Tastiest"</b> in your order notes to get this offer!
              </p>
            }
          />
        )}
      </div>
    </Contained>
  );
}

interface BookingSectionProps {
  title: string;
  button: JSX.Element;
  promptText: ReactNode;
  bookingSvg: SVG;
}

function BookingSection(props: BookingSectionProps) {
  const { title, promptText, button } = props;

  const { isDesktop } = useScreenSize();

  return (
    <div className="flex flex-col space-x-6">
      <div className="flex flex-row items-start justify-center space-x-6 mobile:items-center">
        <div className="flex flex-col items-start">
          <h2
            style={{ maxWidth: !isDesktop ? '16rem' : '13rem' }}
            className="text-2xl leading-tight font-somatic mobile:text-3xl"
          >
            {title}
          </h2>

          {!!isDesktop && (
            <div className="pt-4">
              {button}

              <p style={{ maxWidth: '15rem' }} className="pt-4">
                {promptText}
              </p>
            </div>
          )}
        </div>

        <div
          style={{
            maxWidth: '16rem',
          }}
          className="flex items-start w-full -mt-6"
        >
          <props.bookingSvg className="w-full h-full" />
        </div>
      </div>

      {!isDesktop && (
        <div className="flex flex-col items-center pt-8 space-y-4">
          {button}

          <span
            style={{ maxWidth: '20rem' }}
            className="mt-6 text-lg text-center"
          >
            {promptText}
          </span>
        </div>
      )}
    </div>
  );
}

export default ThankYou;
