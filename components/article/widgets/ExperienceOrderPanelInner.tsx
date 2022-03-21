import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { AvailableSlot } from '@tastiest-io/tastiest-horus';
import { Button } from '@tastiest-io/tastiest-ui';
import {
  ContentfulProduct,
  getMinsIntoDay,
  minsIntoHumanTime,
  TIME,
  useHorusSWR,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import MobileBottomButton from 'components/MobileBottomButton';
import XScrollSelectItem from 'components/XScrollSelectItem';
import { useAuth } from 'hooks/auth/useAuth';
import lodash from 'lodash';
import { DateTime } from 'luxon';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { generateStaticURL } from 'utils/routing';
import { ExperienceOrderPanelProps } from './ExperienceOrderPanelDesktop';

type HorusOpenSlotsResponse = {
  slots: AvailableSlot[];
  last_synced: number;
};

export const useOrderPanel = (product: ContentfulProduct, slug: string) => {
  const { isSignedIn, token } = useAuth();

  // Update the selected booking day
  const [selectedDay, setSelectedDay] = useState<number>(null);
  const [selectedSlot, setSelectedSlot] = useState<AvailableSlot>(null);

  // Set valid heads from the first mount
  const allowedHeads = product.allowed_heads.sort((a, b) => a - b);
  const [heads, setHeads] = useState<number>(allowedHeads[0]);

  const { data } = useHorusSWR<HorusOpenSlotsResponse>(
    '/reservations/public/open-slots',
    {
      token,
      query: {
        restaurant_id: product.restaurant.id,
        timezone: TIME.LOCALES.LONDON,
      },
    },
    {
      refreshInterval: 60000,
    },
  );

  const slots: AvailableSlot[] = useMemo(
    () =>
      data?.slots?.sort(
        (a: string, b: string) => new Date(a).getTime() - new Date(b).getTime(),
      ) ?? [],
    [data],
  );

  const days = useMemo(() => lodash.groupBy(slots, s => s.ordinal), [slots]);
  const totalPrice = Number(heads) * product?.price;

  // const { error, execute, success, submitting } = usePostFetch<
  //   CreateNewOrderParams,
  //   CreateNewOrderReturn
  // >(LocalEndpoint.CREATE_NEW_ORDER, { retries: 1 });

  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   if (submitting) {
  //     setLoading(true);
  //   }

  //   if (error) {
  //     setLoading(false);
  //   }
  // }, [submitting, error]);

  // Update selected day when when deal changes
  useEffect(() => {
    setSelectedDay(null);
  }, [product]);

  // Update the selected time when the day Changes
  useEffect(() => {
    setSelectedSlot(selectedDay ? days[selectedDay]?.[0] : null);
  }, [product, selectedDay]);

  const toCheckoutLink = useMemo(() => {
    if (!selectedDay || !selectedSlot) {
      return '#';
    }

    const search = `?product_id=${product.id}&heads=${heads}&bookedForTimestamp=${selectedSlot.timestamp}&userAgent=${navigator?.userAgent}`;
    return isSignedIn ? `/checkout${search}` : `/checkout/authorize${search}`;
  }, [isSignedIn, heads, selectedDay, selectedSlot]);

  return {
    days,
    heads,
    setHeads,
    selectedDay,
    setSelectedDay,
    selectedSlot,
    setSelectedSlot,
    totalPrice,
    toCheckoutLink,
    loading,
  };
};

interface Props extends ExperienceOrderPanelProps {
  // Where is the inner panel being rendered?
  // In the mobile layout or desktop layout?
  layout: 'overlay' | 'sidebar';
}

function ExperienceOrderPanelInner(props: Props) {
  const { product, posts, slug, layout } = props;

  const {
    days,
    heads,
    setHeads,
    selectedDay,
    selectedSlot,
    setSelectedDay,
    setSelectedSlot,
    totalPrice,
    toCheckoutLink,
    loading,
  } = useOrderPanel(product, slug);

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
    const currentIndex = product.allowed_heads.findIndex(h => h === heads);
    const isLast = currentIndex === product.allowed_heads.length - 1;
    if (isLast) {
      return;
    }

    setHeads(product.allowed_heads[currentIndex + 1]);
  };

  const previousValidHeads = () => {
    const currentIndex = product.allowed_heads.findIndex(h => h === heads);
    const isFirst = currentIndex === 0;
    if (isFirst) {
      return;
    }

    setHeads(product.allowed_heads[currentIndex - 1]);
  };

  return (
    <div>
      <div className="flex flex-col space-y-3">
        <div className="-mx-2">
          <HorizontalScrollable
            noPadding
            spacing={1}
            forceButtons
            chevronSize={sizes.chevronSize}
          >
            {posts?.map((_post, key) => {
              const selected = product.id === _post.product.id;
              const basicLink = generateStaticURL({
                restaurant: _post.restaurant.uri_name,
                cuisine: _post.restaurant.cuisine,
                city: _post.restaurant.city,
                slug: _post.slug,
              });

              // Overlay is on [slug]/continue
              const link =
                layout === 'overlay'
                  ? {
                      href: `${basicLink.href}/continue`,
                      as: `${basicLink.as}/continue`,
                    }
                  : basicLink;

              return (
                <div key={key}>
                  <XScrollSelectItem
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
                      {_post.product.name}
                    </h4>
                  </XScrollSelectItem>
                </div>
              );
            })}
          </HorizontalScrollable>
        </div>

        <div className="-mx-2 pt-3 border-t border-gray-100">
          <DaySelector
            days={Object.keys(days).map(k => Number(k))}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            chevronSize={sizes.chevronSize}
            selectItemSize={sizes.selectItemSize}
          />
        </div>

        <div className="-mx-1 pt-3 border-t border-gray-100">
          <TimeSelector
            slotsOfDay={days[selectedDay]}
            selectedDay={selectedDay}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
            chevronSize={sizes.chevronSize}
            selectItemSize={sizes.selectItemSize}
          />
        </div>

        <div className="flex justify-center pt-3 pb-1 border-t border-gray-100">
          <div className="flex justify-center w-full py-2">
            <div className="flex justify-center space-x-3 items-center">
              <Button
                color="light"
                onClick={previousValidHeads}
                disabled={heads === product.allowed_heads[0]}
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
                  heads ===
                  product.allowed_heads[product.allowed_heads.length - 1]
                }
              >
                <PlusOutlined className="text-2xl" />
              </Button>
            </div>
          </div>
        </div>
        {/* Overlay bottom-button */}
        {layout === 'overlay' ? (
          <MobileBottomButton
            disabled={!selectedSlot || !selectedDay}
            href={toCheckoutLink}
            loading={loading}
          >
            Book Now
          </MobileBottomButton>
        ) : null}
        {/* Sidebar CTA button */}
        {layout === 'sidebar' ? (
          <Link href={toCheckoutLink}>
            <a className="no-underline">
              <Button
                wide
                disabled={!selectedSlot || !selectedDay}
                loading={loading}
              >
                Book Now
              </Button>{' '}
            </a>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

interface TimeSelectorProps {
  slotsOfDay: AvailableSlot[];
  selectedDay: number;
  selectedSlot: AvailableSlot;
  setSelectedSlot: (value: AvailableSlot) => void;

  // Visual props
  chevronSize: 6 | 8;
  selectItemSize: 'small' | 'medium' | 'large';
}

const TimeSelector = (props: TimeSelectorProps) => {
  const {
    slotsOfDay,
    selectedDay,
    selectedSlot,
    setSelectedSlot,
    chevronSize,
    selectItemSize,
  } = props;

  return (
    <HorizontalScrollable
      noPadding
      spacing={0}
      forceButtons
      chevronSize={chevronSize}
    >
      {selectedDay
        ? slotsOfDay.map((slot, key) => {
            const todayOrdinal = DateTime.now().ordinal;
            const minsIntoToday = getMinsIntoDay(TIME.LOCALES.LONDON);

            // Disabled if it's past the slot's given time, and it's today.
            const disabled =
              slot.ordinal === todayOrdinal &&
              minsIntoToday > slot.minutes_into_day;

            return (
              <div key={key}>
                <XScrollSelectItem
                  selected={
                    selectedSlot?.minutes_into_day === slot.minutes_into_day
                  }
                  disabled={disabled}
                  size={selectItemSize}
                  onClick={disabled ? undefined : () => setSelectedSlot(slot)}
                >
                  <p className="text-xs">
                    {minsIntoHumanTime(slot.minutes_into_day)}
                  </p>
                </XScrollSelectItem>
              </div>
            );
          })
        : ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'].map(
            (time, key) => (
              <XScrollSelectItem key={key} disabled size={selectItemSize}>
                <p className="text-xs">{time}</p>
              </XScrollSelectItem>
            ),
          )}
    </HorizontalScrollable>
  );
};

interface DaySelectorProps {
  days: number[];
  selectedDay: number;
  setSelectedDay: (day: number) => void;

  // Visual props
  chevronSize: 6 | 8;
  selectItemSize: 'small' | 'medium' | 'large';
}

const DaySelector = (props: DaySelectorProps) => {
  const {
    days,
    selectedDay,
    setSelectedDay,
    chevronSize,
    selectItemSize,
  } = props;

  return (
    <HorizontalScrollable
      noPadding
      spacing={1}
      forceButtons
      chevronSize={chevronSize}
    >
      {days?.map((ordinal, key) => {
        // const daysFromToday = ordinal - DateTime.now().ordinal;
        const datetime = DateTime.fromObject({ ordinal });

        // Is it too late for all the times in today?
        const isTodayUnavailable = false;
        //   daysFromToday === 0 &&
        //   !selectedDay?.times.some(time => getMinsIntoDay() < time);

        const disabled = false;

        return isTodayUnavailable ? null : (
          <div key={key}>
            <XScrollSelectItem
              selected={selectedDay === ordinal}
              disabled={disabled}
              size={selectItemSize}
              onClick={disabled ? undefined : () => setSelectedDay(ordinal)}
            >
              <p className="leading-none">{datetime.weekdayShort}</p>
              <p className="text-xs opacity-75 mt-1">
                {datetime.toFormat('d MMM')}
              </p>
            </XScrollSelectItem>
          </div>
        );
      })}
    </HorizontalScrollable>
  );
};

export default ExperienceOrderPanelInner;
ExperienceOrderPanelInner.DaySelector = DaySelector;
ExperienceOrderPanelInner.TimeSelector = TimeSelector;
