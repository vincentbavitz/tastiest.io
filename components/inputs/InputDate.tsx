import { Select } from '@tastiest-io/tastiest-ui';
import { DateObject } from '@tastiest-io/tastiest-utils';
import { DateTime } from 'luxon';
import React, { useEffect, useMemo, useState } from 'react';

interface Props {
  onDateChange: (date: Date, destructured: DateObject) => void;

  maxYear?: number;
  numYears?: number;
  initialDate?: DateObject;

  // Styling
  size?: 'large' | 'medium' | 'small';
  label?: string;
  subLabel?: string;
}

export function InputDate(props: Props) {
  const { maxYear, numYears, onDateChange, initialDate } = props;

  const initialYear = 2000;
  const [day, setDay] = useState<number>(initialDate?.day ?? 1);
  const [month, setMonth] = useState<number>(initialDate?.month ?? 1);
  const [year, setYear] = useState<number>(initialDate?.year ?? initialYear);

  const daysOfMonth = useMemo(() => {
    // February is weird.
    if (month === 2) {
      const isLeapYear = year % 4 === 0;
      return isLeapYear ? 29 : 28;
    }

    // Alternating 31 and 30
    return month % 2 === 0 ? 30 : 31;
  }, [month, year]);

  // Call onDateChange
  useEffect(() => {
    const destructured: DateObject = {
      day,
      month,
      year,
    };

    const date = DateTime.fromObject(destructured).toJSDate();
    onDateChange(date, destructured);
  }, [day, month, year]);

  return (
    <div className="flex space-x-2">
      <Select
        color="secondary"
        minSelectWidth={70}
        minOptionWidth={70}
        onSelect={id => setDay(Number(id))}
      >
        {Array(daysOfMonth)
          .fill(null)
          .map((_, n) => (
            <Select.Option key={n} id={String(n + 1)} value={String(n + 1)} />
          ))}
      </Select>

      <Select
        color="secondary"
        minSelectWidth={150}
        onSelect={id => setMonth(Number(id))}
      >
        <Select.Option id="1" value="January" />
        <Select.Option id="2" value="February" />
        <Select.Option id="3" value="March" />
        <Select.Option id="4" value="April" />
        <Select.Option id="5" value="May" />
        <Select.Option id="6" value="June" />
        <Select.Option id="7" value="July" />
        <Select.Option id="8" value="August" />
        <Select.Option id="9" value="September" />
        <Select.Option id="10" value="October" />
        <Select.Option id="11" value="November" />
        <Select.Option id="12" value="December" />
      </Select>

      <Select
        color="secondary"
        minSelectWidth={90}
        minOptionWidth={90}
        onSelect={id => setYear(Number(id))}
        initialSelected={String(initialYear)}
      >
        {Array(numYears ?? 70)
          .fill(null)
          .map((_, n) => {
            const currentYear = new Date().getFullYear();

            return (
              <Select.Option
                key={n}
                id={String(maxYear ? maxYear - n : currentYear - n)}
                value={String(maxYear ? maxYear - n : currentYear - n)}
              />
            );
          })}
      </Select>
    </div>
  );
}
