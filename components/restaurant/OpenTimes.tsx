import {
  minsIntoHumanTime,
  TIME,
  TimeRange,
  titleCase,
  WeekOpenTimes,
} from '@tastiest-io/tastiest-utils';
import React from 'react';

interface Props {
  openTimes: WeekOpenTimes;
}

type OpenTimeRow = {
  from: number;
  to: number;
  range: TimeRange;
};

type HumanReadableOpenTimeRow = {
  label: string;
  times: string;
};

export default function OpenTimes(props: Props) {
  const { openTimes } = props;

  // If we have successive openTimes that are the same,
  // starting from Monday, list them as (for example)...
  // Monday to Wednesday: 9:00 AM --> 4:30 PM

  const rows: OpenTimeRow[] = [
    { from: 1, to: 3, range: [135, 1045] },
    { from: 4, to: 5, range: [165, 900] },
    { from: 4, to: 5, range: [165, 900] },
    { from: 6, to: 0, range: [300, 900] },
  ];

  const transformRowIntoHumanLanguage = (
    row: OpenTimeRow,
  ): HumanReadableOpenTimeRow => {
    const startDay = TIME.DAYS_OF_THE_WEEK[row.from];
    const endDay = TIME.DAYS_OF_THE_WEEK[row.to];

    const startTime = minsIntoHumanTime(row.range[0]);
    const endTime = minsIntoHumanTime(row.range[1]);
    const times = `${startTime} 🠒 ${endTime}`;

    if (startDay === endDay) {
      return { label: titleCase(startDay), times };
    }

    // For `Saturday to Sunday`, we say 'Weekends`.
    if (row.from === 6 && row.to === 0) {
      return { label: 'Weekends', times };
    }

    return { label: `${titleCase(startDay)} to ${titleCase(endDay)}`, times };
  };

  return (
    <div
      style={{ width: 'min-content', minWidth: '17rem' }}
      className="whitespace-nowrap"
    >
      <div className="border-b border-gray-300 w-full text-lg mb-2 pr-6">
        Open Times
      </div>

      {rows.map((row, key) => {
        const { label, times } = transformRowIntoHumanLanguage(row);

        return (
          <div key={key} className="flex space-x-4 justify-between">
            <div>{label}</div>
            <div>{times}</div>
          </div>
        );
      })}
    </div>
  );
}
