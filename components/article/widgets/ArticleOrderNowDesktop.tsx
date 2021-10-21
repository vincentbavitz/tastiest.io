import { Button, Select } from '@tastiest-io/tastiest-components';
import { PoundIcon } from '@tastiest-io/tastiest-icons';
import {
  getMinsIntoDay,
  IDeal,
  minsIntoHumanTime,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { useArticleOrder } from 'hooks/checkout/useArticleOrder';
import { useScreenSize } from 'hooks/useScreenSize';
import { DateTime } from 'luxon';
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { useHoverDirty } from 'react-use';
import useSWR from 'swr';
import { LocalEndpoint } from 'types/api';
import { generateLocalEndpoint } from 'utils/routing';
import { UI } from '../../../constants';
import {
  GetBookingSlotsReturn,
  Slot,
} from '../../../pages/api/restaurant/getBookingSlots';

interface XScrollSelectItemProps {
  children: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const XScrollSelectItem = (props: XScrollSelectItemProps) => {
  const { selected, disabled, children, onClick } = props;

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  const disabledStyles =
    'bg-gray-200 opacity-50 pointer-events-none border-transparent cursor-default';

  const activeStyles = [
    'cursor-pointer',
    isHovering || selected ? 'border-opacity-100' : 'border-opacity-25',
    selected ? 'border-blue-600' : 'border-blue-200',
  ];

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={clsx(
        'flex justify-center items-center flex-col border-2 space-y-1 leading-none',
        'mx-1 py-1 px-2 text-sm text-center duration-300 rounded-sm whitespace-nowrap',
        disabled ? disabledStyles : activeStyles,
      )}
    >
      {children}
    </div>
  );
};

interface Props {
  deal: IDeal;
  slug: string;
}

export function ArticleOrderNowDesktop(props: Props) {
  const { deal, slug: fromSlug } = props;
  const {
    totalPrice,
    heads,
    setHeads,
    submit,
    submitting,
    error,
  } = useArticleOrder(deal, fromSlug);

  const { isDesktop } = useScreenSize();
  const allowedHeads = deal.allowedHeads.sort((a, b) => a - b);

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

  // Update the selected booking day
  const [selectedDay, setSelectedDay] = useState<Slot>(null);
  const [selectedTime, setSelectedTime] = useState<number>(null);

  // Set valid heads from the first mount
  useEffect(() => {
    setHeads(allowedHeads[0]);
  }, []);

  // Update the selected time when the day Changes
  useEffect(() => {
    setSelectedTime(selectedDay ? selectedDay.times[0] : null);
  }, [selectedDay]);

  const onClickBuyNow = async () => {
    const bookedForTimestamp = DateTime.fromMillis(selectedDay.timestamp)
      .set({ hour: 0, minute: 0 })
      .plus({
        minutes: selectedTime,
      })
      .toMillis();

    return submit(bookedForTimestamp);
  };

  return (
    <Contained maxWidth={900}>
      <div className="flex justify-end w-full">
        <div
          style={{
            width: isDesktop
              ? `calc(${UI.ARTICLE.DESKTOP_OFFER_WIDGET_WIDTH_PX}px - 2rem)`
              : '300px',
            maxWidth: isDesktop ? 'unset' : '75vw',
          }}
          className="relative z-30 mt-12 bg-white border-4 pointer-events-auto last:pb-4 border-secondary-1 rounded-lg"
        >
          {/* <h3 className="mb-2 text-xl text-center font-primary text-primary">
            Get the offer!
          </h3> */}

          <div className="pb-4 mx-2 overflow-hidden bg-secondary-1 rounded-xl">
            {/* <div className="aspect-w-16 aspect-h-9">
              <img src={`${deal?.image?.url}?w=700`} className="object-cover" />
            </div> */}

            <div className="flex flex-col justify-center px-2 pt-3 space-y-3">
              <p className="text-base leading-none text-center font-primary">
                {deal?.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col pt-4 mx-4 space-y-3">
            <div className="px-2">
              <HorizontalScrollable noPadding chevronSize={6}>
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
                      disabled={disabled}
                      selected={selectedDay?.ordinal === slot.ordinal}
                      onClick={
                        disabled ? undefined : () => setSelectedDay(slot)
                      }
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

            <div className="px-2 pt-3 border-t border-gray-100">
              <HorizontalScrollable noPadding chevronSize={6}>
                {selectedDay
                  ? selectedDay.times.map((time, key) => {
                      const disabled =
                        selectedDay.daysFromToday === 0 &&
                        getMinsIntoDay() > time;

                      return (
                        <XScrollSelectItem
                          key={key}
                          selected={selectedTime === time}
                          disabled={disabled}
                          onClick={
                            disabled ? undefined : () => setSelectedTime(time)
                          }
                        >
                          <p className="text-xs">{minsIntoHumanTime(time)}</p>
                        </XScrollSelectItem>
                      );
                    })
                  : [
                      '10:00 AM',
                      '11:00 AM',
                      '12:00 PM',
                      '1:00 PM',
                      '2:00 PM',
                    ].map((time, key) => (
                      <XScrollSelectItem key={key} disabled>
                        <p className="text-xs">{time}</p>
                      </XScrollSelectItem>
                    ))}
              </HorizontalScrollable>
            </div>

            <div className="flex items-center justify-between pt-3 pb-1 border-t border-gray-100">
              <div className="font-medium font-secondary bold text-primary">
                Book for
              </div>

              <div className="w-12">
                <Select
                  size="small"
                  onChange={value => setHeads(Number(value))}
                >
                  {allowedHeads.map(n => (
                    <option
                      selected={allowedHeads[0] === n}
                      key={n}
                      className="text-center"
                      value={n}
                    >
                      {n}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="font-medium font-secondary bold text-primary">
                {heads === 1 ? 'person' : 'people'}
              </div>
            </div>

            <Button
              wide
              type="solid"
              onClick={onClickBuyNow}
              loading={submitting}
            >
              <div className="flex items-center justify-center">
                <PoundIcon
                  style={{
                    height: '0.78rem',
                    marginTop: '-0.125rem',
                    marginRight: '0.15rem',
                  }}
                  className="inline fill-current"
                />
                <p>{totalPrice} — Buy Now</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Contained>
  );
}
