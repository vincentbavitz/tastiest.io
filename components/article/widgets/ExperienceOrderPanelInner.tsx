import {
  LoadingOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Button } from '@tastiest-io/tastiest-ui';
import {
  dlog,
  ExperienceProduct,
  getMinsIntoDay,
  minsIntoHumanTime,
  OrderRequest,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import XScrollSelectItem from 'components/XScrollSelectItem';
import { useAuth } from 'hooks/auth/useAuth';
import usePostFetch from 'hooks/usePostFetch';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';
import {
  CreateNewOrderParams,
  CreateNewOrderReturn,
} from 'pages/api/payments/createNewOrder';
import {
  GetBookingSlotsReturn,
  Slot,
} from 'pages/api/restaurant/getBookingSlots';
import React, { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import { LocalEndpoint } from 'types/api';
import { generateLocalEndpoint, generateStaticURL } from 'utils/routing';
import { ExperienceOrderPanelProps } from './ExperienceOrderPanelDesktop';

const useOrderPanel = (deal: ExperienceProduct, slug: string) => {
  const { user } = useAuth();
  const router = useRouter();

  // Update the selected booking day
  const [selectedDay, setSelectedDay] = useState<Slot>(null);
  const [selectedTime, setSelectedTime] = useState<number>(null);

  // Set valid heads from the first mount
  const allowedHeads = deal.allowedHeads.sort((a, b) => a - b);
  const [heads, setHeads] = useState<number>(allowedHeads[0]);

  const swrURL = generateLocalEndpoint(LocalEndpoint.GET_BOOKING_SLOTS, {
    restaurantId: deal.restaurant.id,
    offerId: deal.id,
    timezone: DateTime.local().zoneName,
  });

  const { data } = useSWR<GetBookingSlotsReturn>(swrURL, {
    refreshInterval: 60000,
  });

  const slots = useMemo(
    () => data?.slots?.sort((a, b) => a.timestamp - b.timestamp) ?? [],
    [data],
  );

  const totalPrice = Number(heads) * deal?.pricePerHeadGBP;

  const { error, execute, success, submitting } = usePostFetch<
    CreateNewOrderParams,
    CreateNewOrderReturn
  >(LocalEndpoint.CREATE_NEW_ORDER, { retries: 1 });

  // Update selected day when when deal changes
  useEffect(() => {
    setSelectedDay(null);
  }, [deal]);

  // Update the selected time when the day Changes
  useEffect(() => {
    setSelectedTime(selectedDay ? selectedDay.times[0] : null);
  }, [deal, selectedDay]);

  const toCheckout = async () => {
    const bookedForTimestamp = DateTime.fromMillis(selectedDay.timestamp)
      .set({ hour: 0, minute: 0 })
      .plus({
        minutes: selectedTime,
      })
      .toMillis();

    const orderRequest: OrderRequest = {
      heads,
      fromSlug: slug,
      bookedForTimestamp,
      userId: user?.uid ?? null,
      dealId: deal.id,
      promoCode: null,
      timestamp: Date.now(),
      anonymousId: window.analytics?.user?.()?.anonymousId?.(),
      userAgent: navigator?.userAgent,
    };

    const {
      data: { token },
      error,
    } = await execute(orderRequest);

    dlog('useArticleOrder ➡️ orderRequest:', orderRequest);
    dlog('useArticleOrder ➡️ token:', token);
    dlog('useArticleOrder ➡️ error:', error);

    if (token) {
      router.push(`/checkout/?token=${token}`);
      return;
    }
  };

  return {
    slots,
    heads,
    setHeads,
    selectedDay,
    setSelectedDay,
    selectedTime,
    setSelectedTime,
    totalPrice,
    toCheckout,
    submitting,
  };
};

interface Props extends ExperienceOrderPanelProps {
  // Where is the inner panel being rendered?
  // In the mobile layout or desktop layout?
  layout: 'overlay' | 'sidebar';
}

export default function ExperienceOrderPanelInner(props: Props) {
  const { deal, posts, slug, layout } = props;

  const {
    slots,
    heads,
    setHeads,
    selectedDay,
    selectedTime,
    setSelectedDay,
    setSelectedTime,
    totalPrice,
    toCheckout,
    submitting,
  } = useOrderPanel(deal, slug);

  const sizes = useMemo(() => {
    const chevronSize = (layout === 'overlay' ? 8 : 6) as 6 | 8;
    const selectItemSize =
      layout === 'overlay'
        ? 'medium'
        : ('small' as 'small' | 'medium' | 'large');

    const experienceSelectSize = (layout === 'overlay' ? 'large' : 'medium') as
      | 'small'
      | 'medium'
      | 'large';

    return {
      chevronSize,
      selectItemSize,
      experienceSelectSize,
    };
  }, []);

  const nextValidHeads = () => {
    const currentIndex = deal.allowedHeads.findIndex(h => h === heads);
    const isLast = currentIndex === deal.allowedHeads.length - 1;
    if (isLast) {
      return;
    }

    setHeads(deal.allowedHeads[currentIndex + 1]);
  };

  const previousValidHeads = () => {
    const currentIndex = deal.allowedHeads.findIndex(h => h === heads);
    const isFirst = currentIndex === 0;
    if (isFirst) {
      return;
    }

    setHeads(deal.allowedHeads[currentIndex - 1]);
  };

  return (
    <div>
      <div className="flex flex-col space-y-3">
        <div className="-mx-2">
          <HorizontalScrollable noPadding chevronSize={sizes.chevronSize}>
            {posts?.map((_post, key) => {
              const selected = deal.id === _post.deal.id;
              const link = generateStaticURL({
                restaurant: _post.restaurant.uriName,
                cuisine: _post.restaurant.cuisine,
                city: _post.restaurant.city,
                slug: _post.slug,
              });

              return (
                <XScrollSelectItem
                  key={key}
                  selected={selected}
                  link={link}
                  size={sizes.selectItemSize}
                >
                  <h4
                    style={{
                      minWidth:
                        sizes.selectItemSize === 'large' ? '7rem' : '6rem',
                      maxWidth: '7rem',
                    }}
                    className={clsx(
                      sizes.selectItemSize === 'large'
                        ? 'text-base leading-4'
                        : 'text-xs leading-3',
                      'whitespace-pre-wrap',
                    )}
                  >
                    {_post.deal.name}
                  </h4>
                </XScrollSelectItem>
              );
            })}
          </HorizontalScrollable>
        </div>

        <div className="-mx-2 pt-3 border-t border-gray-100">
          <HorizontalScrollable noPadding chevronSize={sizes.chevronSize}>
            {slots?.map((slot, key) => {
              const datetime = DateTime.fromMillis(slot.timestamp);

              // Is it too late for all the times in today?
              const isTodayUnavailable =
                slot.daysFromToday === 0 &&
                !selectedDay?.times.some(time => getMinsIntoDay() < time);

              const disabled = !slot.open;

              return isTodayUnavailable ? null : (
                <XScrollSelectItem
                  key={key}
                  selected={selectedDay?.ordinal === slot.ordinal}
                  disabled={disabled}
                  size={sizes.selectItemSize}
                  onClick={disabled ? undefined : () => setSelectedDay(slot)}
                >
                  <p className="leading-none">{datetime.weekdayShort}</p>
                  <p className="text-xs opacity-75">
                    {datetime.toFormat('d MMM')}
                  </p>
                </XScrollSelectItem>
              );
            })}
          </HorizontalScrollable>
        </div>

        <div className="-mx-2 pt-3 border-t border-gray-100">
          <HorizontalScrollable noPadding chevronSize={sizes.chevronSize}>
            {selectedDay
              ? selectedDay.times.map((time, key) => {
                  const disabled =
                    selectedDay.daysFromToday === 0 && getMinsIntoDay() > time;

                  return (
                    <XScrollSelectItem
                      key={key}
                      selected={selectedTime === time}
                      disabled={disabled}
                      size={sizes.selectItemSize}
                      onClick={
                        disabled ? undefined : () => setSelectedTime(time)
                      }
                    >
                      <p className="text-xs">{minsIntoHumanTime(time)}</p>
                    </XScrollSelectItem>
                  );
                })
              : ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'].map(
                  (time, key) => (
                    <XScrollSelectItem
                      key={key}
                      disabled
                      size={sizes.selectItemSize}
                    >
                      <p className="text-xs">{time}</p>
                    </XScrollSelectItem>
                  ),
                )}
          </HorizontalScrollable>
        </div>

        <div className="flex justify-center pt-3 pb-1 border-t border-gray-100">
          <div className="flex justify-center w-full py-2">
            <div className="flex justify-center space-x-3 items-center">
              <Button
                color="light"
                onClick={previousValidHeads}
                disabled={heads === deal.allowedHeads[0]}
              >
                <MinusOutlined className="text-2xl" />
              </Button>

              <span className="text-sm whitespace-nowrap">
                {heads} {heads === 1 ? 'person' : 'people'}
              </span>

              <Button
                color="light"
                onClick={nextValidHeads}
                disabled={
                  heads === deal.allowedHeads[deal.allowedHeads.length - 1]
                }
              >
                <PlusOutlined className="text-2xl" />
              </Button>
            </div>
          </div>
        </div>

        {/* Overlay bottom-button */}
        {layout === 'overlay' ? (
          <button
            disabled={!selectedTime || !selectedDay}
            onClick={toCheckout}
            className={clsx(
              'flex justify-center items-center h-14 w-full',
              'text-lg font-medium tracking-wide text-light',
              'bg-primary duration-300 outline-none',
              !selectedTime || !selectedDay
                ? 'filter brightness-90'
                : 'hover:bg-secondary',
            )}
          >
            {submitting ? (
              <LoadingOutlined className="text-xl" />
            ) : (
              <>BUY NOW</>
            )}
          </button>
        ) : null}

        {/* Sidebar CTA button */}
        {layout === 'sidebar' ? (
          <Button
            wide
            disabled={!selectedTime || !selectedDay}
            loading={submitting}
            onClick={toCheckout}
          >
            BUY NOW
          </Button>
        ) : null}
      </div>
    </div>
  );
}
