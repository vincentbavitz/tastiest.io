import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from '@tastiest-io/tastiest-ui';
import {
  ContentfulProduct,
  getMinsIntoDay,
  minsIntoHumanTime,
  TIME,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import MobileBottomButton from 'components/MobileBottomButton';
import XScrollSelectItem from 'components/XScrollSelectItem';
import { useAuth } from 'hooks/auth/useAuth';
import { DateTime } from 'luxon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import { LocalEndpoint } from 'types/api';
import { generateLocalEndpoint, generateStaticURL } from 'utils/routing';
import { ExperienceOrderPanelProps } from './ExperienceOrderPanelDesktop';

export const useOrderPanel = (product: ContentfulProduct, slug: string) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  // Update the selected booking day
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<number>(null);

  // Set valid heads from the first mount
  const allowedHeads = product.allowed_heads.sort((a, b) => a - b);
  const [heads, setHeads] = useState<number>(allowedHeads[0]);

  const swrURL = generateLocalEndpoint(LocalEndpoint.GET_BOOKING_SLOTS, {
    restaurantId: product.restaurant.id,
    offerId: product.id,
    // timezone: DateTime.local().zoneName,
    timezone: TIME.LOCALES.LONDON,
  });

  const { data } = useSWR<any>(swrURL, {
    refreshInterval: 60000,
  });

  const slots = useMemo(
    () => data?.slots?.sort((a, b) => a.timestamp - b.timestamp) ?? [],
    [data],
  );

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
    setSelectedTime(selectedDay ? selectedDay.times[0] : null);
  }, [product, selectedDay]);

  const toCheckoutLink = useMemo(() => {
    if (!selectedDay || !selectedTime) {
      return '#';
    }

    const bookedForTimestamp = DateTime.fromMillis(selectedDay.timestamp)
      .set({ hour: 0, minute: 0 })
      .plus({
        minutes: selectedTime,
      })
      .toMillis();

    const search = `?experienceId=${product.id}&heads=${heads}&bookedForTimestamp=${bookedForTimestamp}&userAgent=${navigator?.userAgent}`;
    return isSignedIn ? `/checkout${search}` : `/checkout/authorize${search}`;
  }, [isSignedIn, heads, selectedDay, selectedTime]);

  return {
    slots,
    heads,
    setHeads,
    selectedDay,
    setSelectedDay,
    selectedTime,
    setSelectedTime,
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
    slots,
    heads,
    setHeads,
    selectedDay,
    selectedTime,
    setSelectedDay,
    setSelectedTime,
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
            slots={slots}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            chevronSize={sizes.chevronSize}
            selectItemSize={sizes.selectItemSize}
          />
        </div>

        <div className="-mx-1 pt-3 border-t border-gray-100">
          <TimeSelector
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
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
            disabled={!selectedTime || !selectedDay}
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
                disabled={!selectedTime || !selectedDay}
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
  // selectedDay: Slot;
  selectedDay: any;
  selectedTime: number;
  setSelectedTime: (value: number) => void;
  chevronSize: 6 | 8;
  selectItemSize: 'small' | 'medium' | 'large';
}

const TimeSelector = (props: TimeSelectorProps) => {
  const {
    selectedTime,
    setSelectedTime,
    selectedDay,
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
        ? selectedDay.times.map((time, key) => {
            const disabled =
              selectedDay.daysFromToday === 0 &&
              getMinsIntoDay(TIME.LOCALES.LONDON) > time;

            return (
              <div key={key}>
                <XScrollSelectItem
                  selected={selectedTime === time}
                  disabled={disabled}
                  size={selectItemSize}
                  onClick={disabled ? undefined : () => setSelectedTime(time)}
                >
                  <p className="text-xs">{minsIntoHumanTime(time)}</p>
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
  // slots: Slot[];
  slots: any[];
  selectedDay: any;
  setSelectedDay: (slot: any) => void;
  chevronSize: 6 | 8;
  selectItemSize: 'small' | 'medium' | 'large';
}

const DaySelector = (props: DaySelectorProps) => {
  const {
    slots,
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
      {slots?.map((slot, key) => {
        const datetime = DateTime.fromMillis(slot.timestamp).setZone(
          TIME.LOCALES.LONDON,
        );

        // Is it too late for all the times in today?
        const isTodayUnavailable =
          slot.daysFromToday === 0 &&
          !selectedDay?.times.some(time => getMinsIntoDay() < time);

        const disabled = !slot.open;

        return isTodayUnavailable ? null : (
          <div key={key}>
            <XScrollSelectItem
              selected={selectedDay?.ordinal === slot.ordinal}
              disabled={disabled}
              size={selectItemSize}
              onClick={disabled ? undefined : () => setSelectedDay(slot)}
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
