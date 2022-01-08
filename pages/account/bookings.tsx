import {
  EnvironmentOutlined,
  QuestionOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button } from '@tastiest-io/tastiest-ui';
import {
  Booking,
  dlog,
  FirestoreCollection,
  formatCurrency,
  Order,
  SupportRequestType,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import { DateTime } from 'luxon';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import nookies from 'nookies';
import React, { FC, useMemo } from 'react';
import { db, firebaseAdmin } from 'utils/firebaseAdmin';
import { generateStaticURL } from 'utils/routing';

const RESTULTS_PER_PAGE = 5;
type MappedOrder = Order & { booking: Booking };

export const getServerSideProps = async context => {
  // Get user ID from cookie.
  const cookieToken = nookies.get(context)?.token;
  const userDataApi = new UserDataApi(firebaseAdmin);
  const { userId } = await userDataApi.initFromCookieToken(cookieToken);

  // If no user, redirect to home
  if (!userId) {
    return {
      redirect: {
        destination: '/?login=1',
        permanent: false,
      },
    };
  }

  // Grab user's details
  const { details } = await userDataApi.getUserData();

  // Get orders of user
  const page = context?.query?.page ?? 1;

  if (isNaN(page)) {
    return {
      redirect: {
        destination: '?page=1',
        permanent: false,
      },
    };
  }

  const bookingsSnapshot = await db(FirestoreCollection.BOOKINGS)
    .where('userId', '==', userId)
    .orderBy('bookedForTimestamp', 'desc')
    // .limit(RESTULTS_PER_PAGE)
    // .offset((page - 1) * RESTULTS_PER_PAGE)
    .get();

  const ordersSnapshot = await db(FirestoreCollection.ORDERS)
    .where('userId', '==', userId)
    .orderBy('bookedForTimestamp', 'desc')
    .get();

  const orders: Order[] = [];
  const bookings: Booking[] = [];
  ordersSnapshot.forEach(order => orders.push(order.data() as Order));
  bookingsSnapshot.forEach(booking => bookings.push(booking.data() as Booking));

  // Map each booking to its order and filter out bad mappings.
  const mappedOrders: MappedOrder[] = orders
    .map(order => {
      const booking =
        bookings.find(booking => booking.orderId === order.id) ?? null;

      dlog('bookings ➡️ booking:', booking);

      (order as MappedOrder).booking = booking;

      return order as MappedOrder;
    })
    .filter(order => Boolean(order.booking));

  return {
    props: { orders: mappedOrders, details },
  };
};

const Bookings = ({
  details,
  orders,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { isMobile, isTablet } = useScreenSize();

  const quantity = orders.length;

  dlog('bookings ➡️ orders:', orders);

  return (
    <div className="pb-20">
      <div className="relative flex flex-col items-center w-full pb-12 mt-10 space-y-4">
        <h1 className="text-3xl text-center font-primary text-primary">
          {details?.firstName ? `${details?.firstName}'s` : 'My'} Bookings
        </h1>
      </div>

      <Contained>
        {orders.length > 0 ? (
          <div className="flex flex-col space-y-8">
            {orders.map((order, key) => (
              <BookingRow key={key} order={order} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4 text-lg bg-white shadow-lg rounded-lg py-6 px-8">
            <h4>You don't have any bookings yet.</h4>
            <Link href="/">
              <a className="no-underline">
                <Button>Take me back</Button>{' '}
              </a>
            </Link>
          </div>
        )}
      </Contained>
    </div>
  );
};

interface BookingRowProps {
  order: MappedOrder;
}

const BookingRow: FC<BookingRowProps> = ({ order }) => {
  const restaurantPageUrl = useMemo(
    () =>
      generateStaticURL({
        city: order.deal.restaurant.city,
        cuisine: order.deal.restaurant.cuisine,
        restaurant: order.deal.restaurant.uriName,
      }).as,
    [],
  );

  return (
    <div className="bg-white filter drop-shadow-md pt-4 rounded-lg">
      <div className="flex justify-between px-6 pb-4">
        <div className="flex space-x-6">
          <div className="w-20 h-20">
            <Image
              src={order.deal.image.url}
              width="100"
              height="100"
              className="rounded"
            />
          </div>

          <div className="flex flex-col justify-between">
            <h4 className="font-medium">{order.deal.name}</h4>

            <p className="text-sm opacity-75">
              Booked for{' '}
              {DateTime.fromMillis(order.bookedForTimestamp).toFormat(
                'hh:mm a, DDD',
              )}{' '}
              —{' '}
              <Link href={restaurantPageUrl}>
                <a className="no-underline font-medium text-secondary">
                  {order.deal.restaurant.name}
                </a>
              </Link>
            </p>

            <div className="flex items-center text-sm">
              <span>Confirmation Code:</span>
              <span className="bg-green-300 ml-2 rounded bg-opacity-50 px-2 font-medium">
                {order.booking.confirmationCode}
              </span>
            </div>
          </div>
        </div>

        <div>
          <span className="font-medium">
            £{formatCurrency(order.price.final)}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <Link href={restaurantPageUrl}>
          <a className="no-underline">
            <div className="flex items-center justify-between py-3 px-6 border-t text-primary duration-300 hover:bg-secondary hover:text-white">
              <div className="flex items-center space-x-2">
                <EnvironmentOutlined className="text-lg" />{' '}
                <span>View restaurant</span>
              </div>

              <RightOutlined />
            </div>
          </a>
        </Link>

        <Link
          href={`/help?type=${SupportRequestType.ORDER}&userFacingOrderId=${order.userFacingOrderId}`}
        >
          <a className="no-underline">
            <div className="flex items-center justify-between py-3 px-6 border-t text-primary duration-300 hover:bg-secondary hover:text-white rounded-b-lg">
              <div className="flex items-center space-x-2">
                <QuestionOutlined className="text-lg" /> <span>Get help</span>
              </div>

              <RightOutlined />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Bookings;
