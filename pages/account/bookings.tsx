import {
  CalendarOutlined,
  EnvironmentOutlined,
  QuestionOutlined,
  RightOutlined,
} from '@ant-design/icons';
import {
  HorusBooking,
  HorusOrder,
  HorusRestaurant,
  HorusUser,
} from '@tastiest-io/tastiest-horus';
import { Button, Modal } from '@tastiest-io/tastiest-ui';
import {
  CmsApi,
  ContentfulProduct,
  dlog,
  formatCurrency,
  generateStaticURL,
  Horus,
  TIME,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import ExperienceOrderPanelInner, {
  useOrderPanel,
} from 'components/article/widgets/ExperienceOrderPanelInner';
import { Contained } from 'components/Contained';
import { AuthContext } from 'contexts/auth';
import { useScreenSize } from 'hooks/useScreenSize';
import { DateTime } from 'luxon';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import nookies from 'nookies';
import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { useLockBodyScroll } from 'react-use';
import { getGoogleMapLink } from 'utils/location';

const RESTULTS_PER_PAGE = 5;

type BookingEnchanted = HorusBooking & {
  restaurant: HorusRestaurant;
  order: HorusOrder;
  user: HorusUser;
};

export const getServerSideProps = async context => {
  // Get user ID from cookie.
  const token = nookies.get(context)?.token;

  const horus = new Horus(token);
  const { data: user } = await horus.get<any, HorusUser>('/users/me');

  // If no user, redirect to home
  if (!user) {
    return {
      redirect: {
        destination: '/?login=1',
        permanent: false,
      },
    };
  }

  const { data } = await horus.get<any, BookingEnchanted[]>('/bookings/', {
    query: { user_id: user.id },
  });

  const bookings = data ?? [];

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

  return {
    props: { user, bookings },
  };
};

const Bookings = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { user, bookings } = props;
  const { isMobile, isTablet } = useScreenSize();

  const quantity = bookings.length;

  dlog('bookings ➡️ bookings:', bookings);

  return (
    <div className="pb-20">
      <div className="relative flex flex-col items-center w-full pb-12 mt-10 space-y-4">
        <h1 className="text-3xl text-center font-primary text-primary">
          {user.first_name ? `${user.first_name}'s` : 'My'} Bookings
        </h1>
      </div>

      <Contained>
        {bookings.length > 0 ? (
          <div className="flex flex-col space-y-8">
            {bookings.map((booking, key) => (
              <BookingRow key={key} booking={booking} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4 text-lg bg-white shadow-lg rounded-lg py-6 px-8">
            <h4 className="text-center">You don't have any bookings yet.</h4>
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
  booking: BookingEnchanted;
}

const BookingRow: FC<BookingRowProps> = ({ booking }) => {
  const { isMobile } = useScreenSize();

  const [showModifyModal, setShowModifyModal] = useState(false);

  const restaurantPageUrl = useMemo(
    () =>
      generateStaticURL({
        city: booking.restaurant.city,
        cuisine: booking.restaurant.cuisine,
        restaurant: booking.restaurant.uri_name,
      }).as,
    [],
  );

  return (
    <div className="relative bg-white filter drop-shadow-md pt-4 rounded-lg">
      {isMobile ? (
        <div className="relative h-40 mx-4">
          <Image
            src={booking.order.product_image.url}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      ) : null}

      <div className="flex justify-between px-6 pb-4">
        <div className="flex space-x-4 w-full">
          {!isMobile ? (
            <div style={{ minWidth: '6rem' }} className="relative h-24">
              <Image
                src={booking.order.product_image.url}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          ) : null}

          <div
            className={clsx(
              'flex flex-col justify-between flex-grow',
              isMobile ? 'space-y-2' : 'space-y-2',
            )}
          >
            <div
              className={clsx(
                'font-medium leading-5 w-full',
                isMobile ? 'mt-4 pb-3' : 'pb-1',
              )}
            >
              <Link href={restaurantPageUrl}>
                <a
                  className={clsx(
                    'no-underline font-medium text-primary text-base',
                  )}
                >
                  {booking.order.product_name}
                </a>
              </Link>

              <div
                className={clsx('flex justify-between', isMobile ? 'pt-2' : '')}
              >
                <Link href={restaurantPageUrl}>
                  <a className="no-underline font-medium text-secondary">
                    {booking.restaurant.name}
                  </a>
                </Link>

                <div className="text-base font-light text-gray-800">
                  £{formatCurrency(booking.order.price.final)}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm opacity-75">
              <CalendarOutlined className="text-secondary text-base" />

              <p className="leading-none">
                {DateTime.fromJSDate(
                  new Date(booking.order.booked_for),
                ).toFormat('hh:mm a, DDD')}
              </p>

              {!(booking.has_arrived || booking.has_cancelled) ? (
                <>
                  <span className="text-gray-400">|</span>

                  <span
                    onClick={() => setShowModifyModal(true)}
                    className="cursor-pointer ont-medium text-secondary"
                  >
                    Modify
                  </span>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation code and heads rows */}
      <div className="w-full px-6 pb-2">
        <div className="flex items-center justify-between text-sm border-gray-100 border-t border-b h-12">
          <div className="font-medium pb-1">Confirmation Code</div>
          <span className="bg-green-300 rounded bg-opacity-50 px-2 text-base tracking-widest font-mono font-medium">
            {booking.confirmation_code}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm h-10">
          <div className="font-medium pb-1">Heads</div>
          <span className="text-base">{booking.order.heads}</span>
        </div>
      </div>

      <div className="flex flex-col">
        <BookingOptionRow
          label="Get directions"
          icon={EnvironmentOutlined}
          href={getGoogleMapLink(
            booking.restaurant.location_lat,
            booking.restaurant.location_lon,
          )}
          newTab
        />

        <BookingOptionRow
          label="Get help"
          icon={QuestionOutlined}
          href={`/help?type=${'order'}&userFacingOrderId=${
            booking.order.user_facing_id
          }`}
          isLast
        />
      </div>

      <ModifyBookingModal
        booking={booking}
        show={showModifyModal}
        close={() => setShowModifyModal(false)}
      />
    </div>
  );
};

interface BookingOptionRowProps {
  label: string;
  icon: React.ForwardRefExoticComponent<any>;
  href?: string;
  newTab?: boolean;
  onClick?: () => void;

  // Is last in the row.
  isLast?: boolean;
}

const BookingOptionRow = (props: BookingOptionRowProps) => {
  return props.href ? (
    <Link href={props.href}>
      <a target={props.newTab ? '_blank' : undefined} className="no-underline">
        <BookingOptionRowInner {...props} />
      </a>
    </Link>
  ) : (
    <BookingOptionRowInner {...props} />
  );
};

const BookingOptionRowInner = (props: BookingOptionRowProps) => {
  const { label, icon: Icon, isLast, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex items-center justify-between py-3 px-6 border-t text-primary duration-300 hover:bg-secondary hover:text-white',
        isLast && 'rounded-b-lg',
      )}
    >
      <div className="flex items-center space-x-2">
        <Icon className="text-lg" /> <span>{label}</span>
      </div>

      <RightOutlined />
    </div>
  );
};

interface ModifyBookingModalProps {
  booking: BookingEnchanted;
  show: boolean;
  close: () => void;
}

const ModifyBookingModal = (props: ModifyBookingModalProps) => {
  const { booking, show, close } = props;
  const { token } = useContext(AuthContext);

  const { isMobile } = useScreenSize();
  useLockBodyScroll(isMobile && show);

  const [product, setProduct] = useState<ContentfulProduct>(null);

  dlog('bookings ➡️ product:', product);

  // Fetch the product from Contentful
  useEffect(() => {
    const cms = new CmsApi();
    cms.getProduct(booking.order.product_id).then(setProduct);
  }, []);

  const {
    days,
    // heads,
    // setHeads,
    selectedDay,
    selectedSlot,
    setSelectedDay,
    setSelectedSlot,
  } = useOrderPanel(product, booking.order.from_slug);

  const [submitting, setSubmitting] = useState(false);

  const selectedDateTime = useMemo<DateTime | null>(() => {
    if (!selectedSlot || !selectedDay) {
      return null;
    }

    return DateTime.fromMillis(selectedSlot.timestamp).setZone(
      TIME.LOCALES.LONDON,
    );
  }, [selectedSlot, selectedDay]);

  const setNewBookingDate = async () => {
    if (!token || !selectedDateTime) {
      return;
    }

    setSubmitting(true);

    const horus = new Horus(token);
    const { data, error } = await horus.post('/bookings/update', {
      bookingId: booking.id,
      bookedForTimestamp: selectedDateTime.toMillis(),
    });

    setSubmitting(false);

    if (error) {
      return;
    }

    close();
  };

  return (
    <Modal
      title="Update booking date"
      fullscreen={isMobile}
      close={close}
      show={show}
    >
      <div
        className={clsx(isMobile ? 'flex flex-col h-full justify-between' : '')}
      >
        <div>
          <div
            style={{ minWidth: isMobile ? 'unset' : '400px' }}
            className={clsx(
              'text-base border-b pb-2 mb-2',
              isMobile ? 'mt-4' : '',
            )}
          >
            <div
              className={clsx(
                'flex text-base',
                isMobile
                  ? 'flex-col mb-3 border-b'
                  : 'items-center justify-between space-x-2',
              )}
            >
              <h4
                className={clsx(
                  'font-medium text-primary text-lg',
                  isMobile ? 'leading-5' : '',
                )}
              >
                Restaurant
              </h4>
              <span>{booking.restaurant.name}</span>
            </div>

            <div
              className={clsx(
                'flex text-base',
                isMobile
                  ? 'flex-col mb-3 border-b'
                  : 'items-center justify-between space-x-2',
              )}
            >
              <h4
                className={clsx(
                  'font-medium text-primary text-lg',
                  isMobile ? 'leading-5' : '',
                )}
              >
                Experience
              </h4>

              <span>{booking.order.product_name}</span>
            </div>

            <div
              className={clsx(
                'flex text-base',
                isMobile
                  ? 'flex-col mb-3'
                  : 'items-center justify-between space-x-2',
              )}
            >
              <h4
                className={clsx(
                  'font-medium text-primary text-lg',
                  isMobile ? 'leading-5' : '',
                )}
              >
                Current Booking Date
              </h4>

              <span>
                {DateTime.fromJSDate(new Date(booking.booked_for)).toFormat(
                  'h:mm a dd LLL yyyy',
                )}
              </span>
            </div>
          </div>
          <div className="border-b pb-6">
            <p className="pt-4 mb-2 text-base">
              Please enter a new time and date for your booking.
            </p>

            <div className="flex flex-col space-y-4 mt-4">
              <div className={clsx(isMobile ? '-mx-6' : '-mx-2')}>
                <ExperienceOrderPanelInner.DaySelector
                  days={Object.keys(days).map(k => Number(k))}
                  selectedDay={selectedDay}
                  setSelectedDay={setSelectedDay}
                  selectItemSize={'medium'}
                  arrowSize={6}
                />
              </div>

              <div className={clsx(isMobile ? '-mx-5' : '-mx-1')}>
                <ExperienceOrderPanelInner.TimeSelector
                  slotsOfDay={days[selectedDay]}
                  selectedDay={selectedDay}
                  selectedSlot={selectedSlot}
                  setSelectedSlot={setSelectedSlot}
                  selectItemSize={'medium'}
                  arrowSize={6}
                />
              </div>
            </div>
          </div>
          <div
            style={{ minWidth: '400px' }}
            className={clsx(
              'flex items-center justify-between space-x-2 text-base mt-4',
              selectedDateTime ? 'opacity-100' : 'opacity-50',
            )}
          >
            <h4 className="">
              New booking date set for <br />
              {selectedDay && selectedSlot ? (
                <span className="font-medium">
                  {selectedDateTime.toFormat('h:mm a - DDDD')}
                </span>
              ) : (
                <div className="w-64 h-7 bg-gray-100"></div>
              )}
            </h4>
          </div>
        </div>

        <div
          className={clsx(
            'flex justify-end space-x-2 mt-6',
            isMobile &&
              'bg-gray-100 py-4 px-4 absolute -bottom-6 -left-6 -right-6',
          )}
        >
          <Button
            loading={submitting}
            disabled={!selectedDay || !selectedSlot}
            size={isMobile ? 'large' : 'medium'}
            onClick={setNewBookingDate}
          >
            Confirm
          </Button>
          <Button
            color="light"
            size={isMobile ? 'large' : 'medium'}
            onClick={close}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Bookings;
