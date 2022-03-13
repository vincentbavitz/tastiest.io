import {
  minsIntoHumanTime,
  OpenTimesMetricDay,
  TIME,
  TimeRange,
  titleCase,
  WeekOpenTimes,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { GetOpenTimesReturn } from 'pages/api/restaurant/getOpenTimes';
import React, { useMemo } from 'react';
import useSWR from 'swr';
import { LocalEndpoint } from 'types/api';
import { generateLocalEndpoint } from 'utils/routing';

interface Props {
  restaurantId: string;
  wide?: boolean;
  small?: boolean;
  buffHeight?: boolean;
}

type OpenTimeRow = {
  open: boolean;
  fromDay: number | null;
  toDay: number | null;
  range: TimeRange;
};

type HumanReadableOpenTimeRow = {
  label: string;
  times: string;
};

export default function OpenTimes(props: Props) {
  const { restaurantId, wide, small, buffHeight } = props;

  // Grab open times from SWR.
  const swrURL = generateLocalEndpoint(LocalEndpoint.GET_OPEN_TIMES, {
    restaurantId: restaurantId,
  });

  const { data: openTimes } = useSWR<GetOpenTimesReturn>(swrURL);

  // If we have successive openTimes that are the same,
  // starting from Monday, list them as (for example)...
  // Monday to Wednesday: 9:00 AM --> 4:30 PM
  const { timeRows, transformRowIntoHumanLanguage } = useOpenTimes(openTimes);

  return (
    <div
      style={{
        width: wide ? '100%' : 'min-content',
        minWidth: small ? '14rem' : '17rem',
        minHeight: buffHeight ? '100%' : 'unset',
      }}
      className="whitespace-nowrap shadow-lg border-2 duration-300 border-opacity-75 hover:border-opacity-100 border-secondary bg-light px-4 py-2"
    >
      <div className="text-primary border-b border-gray-300 w-full text-lg tracking-wide mb-2 pr-6">
        Open Times
      </div>

      {/* Shimmer while it's loading */}

      {timeRows?.map((row, key) => {
        const { label, times } = transformRowIntoHumanLanguage(row);
        const closed = times.toLowerCase() === 'closed';

        return (
          <div
            key={key}
            className={clsx(
              'flex space-x-4 py-1 justify-between',
              closed ? 'opacity-50' : '',
              small ? 'text-sm' : 'text-base',
            )}
          >
            <div className="font-medium">{label}</div>
            <div className="font-light">{times}</div>
          </div>
        );
      })}
    </div>
  );
}

const useOpenTimes = (openTimes: WeekOpenTimes) => {
  const timeRows = useMemo(() => {
    // const rows: OpenTimeRow[] = [
    //   { from: 1, to: 3, range: [135, 1045] },
    //   { from: 4, to: 5, range: [165, 900] },
    //   { from: 4, to: 5, range: [165, 900] },
    //   { from: 6, to: 0, range: [300, 900] },
    // ];

    const rows: OpenTimeRow[] = [];
    if (!openTimes) {
      return null;
    }

    Object.entries(openTimes)
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .forEach(([day, openTimeItem]) => {
        const isSunday = Number(day) === 0;

        // Previous day where the first is Monday and Monday has no previous
        const previousDay = Number(day) === 0 ? 6 : Number(day) - 1;
        const previousMetricDay: OpenTimesMetricDay =
          openTimes[String(previousDay)];

        const lastEntry = rows[rows.length - 1];

        if (isSunday) {
          rows.push({
            open: openTimeItem.open,
            fromDay: 0,
            toDay: 0,
            range: openTimeItem.range,
          } as OpenTimeRow);

          return;
        }

        // Successive days with the same times.
        // prettier-ignore
        const successivelyClosed = openTimeItem.open === false && previousMetricDay.open === false;
        const successivelyOpen =
          openTimeItem.open === true && previousMetricDay.open === true;

        if (
          successivelyClosed ||
          (successivelyOpen &&
            openTimeItem.range[0] === previousMetricDay.range[0] &&
            openTimeItem.range[1] === previousMetricDay.range[1])
        ) {
          rows[rows.length - 1] = {
            open: lastEntry.open,
            fromDay: lastEntry.fromDay,
            toDay: Number(day),
            range: lastEntry.range,
          };

          return;
        }

        rows.push({
          open: openTimeItem.open,
          fromDay: Number(day),
          toDay: Number(day),
          range: openTimeItem.range,
        });
      });

    // Sort so that Sunday is last
    const sortedRows = rows.sort((a, b) =>
      b.fromDay === 0 ? -1 : a.fromDay - b.fromDay,
    );

    // Put Saturday and Sunday together if they're the same.
    // This is so we can call it 'Weekends' on the frontend.
    const sunday = sortedRows.find(r => r.fromDay === 0 && r.toDay === 0);
    const saturday = sortedRows.find(r => r.fromDay === 6 && r.toDay === 6);

    const bothExist = sunday && saturday;
    const bothClosed = sunday?.open === false && saturday?.open === false;
    const bothOpen = sunday?.open === true && saturday?.open === true;
    const sameRange =
      bothOpen &&
      sunday?.range[0] === saturday?.range[0] &&
      sunday?.range[1] === saturday?.range[1];

    // Set from Saturday to Sunday as one row
    if (bothExist && (bothClosed || (bothOpen && sameRange))) {
      const finalRows = sortedRows.slice(0, sortedRows.length - 1);
      finalRows[finalRows.length - 1] = {
        open: bothClosed ? false : true,
        fromDay: 6,
        toDay: 0,
        range: sunday.range,
      };

      return finalRows;
    }

    return sortedRows;
  }, [openTimes]);

  const transformRowIntoHumanLanguage = (
    row: OpenTimeRow,
  ): HumanReadableOpenTimeRow => {
    const startDay = TIME.DAYS_OF_THE_WEEK[row.fromDay];
    const endDay = TIME.DAYS_OF_THE_WEEK[row.toDay];

    const startTime = row.open ? minsIntoHumanTime(row.range[0]) : null;
    const endTime = row.open ? minsIntoHumanTime(row.range[1]) : null;
    const times = row.open ? `${startTime} > ${endTime}` : 'Closed';

    if (startDay === endDay) {
      return { label: titleCase(startDay), times };
    }

    // For `Saturday to Sunday`, we say 'Weekends`.
    if (row.fromDay === 6 && row.toDay === 0) {
      return { label: 'Weekends', times };
    }

    const shorthandDays = {
      0: 'Sun',
      1: 'Mon',
      2: 'Tues',
      3: 'Wed',
      4: 'Thurs',
      5: 'Fri',
      6: 'Sat',
    };

    return {
      label: `${shorthandDays[row.fromDay]} to ${shorthandDays[row.toDay]}`,
      times,
    };
  };

  return { timeRows, transformRowIntoHumanLanguage };
};
