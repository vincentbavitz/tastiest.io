import { DateObject } from '@tastiest-io/tastiest-horus';

function limit(val: string, max: string) {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';

      //this can happen when user paste number
    } else if (val > max) {
      val = max;
    }
  }

  return val;
}

export function limitYear(year: string, minYear: string, maxYear: string) {
  // Limits year of format YYYY as the user types
  // Eg. 9999 -> 2099 for maxYear of 2099
  // Eg. 1111 -> 1933 for minYear of 1933

  if (Number(minYear) > Number(maxYear)) {
    minYear = maxYear;
  }

  const yearSlice = year.slice(0, year.length);
  const maxSlice = maxYear.slice(0, year.length);
  const minSlice = minYear.slice(0, year.length);

  if (Number(yearSlice) > Number(maxSlice)) return maxSlice;
  if (Number(yearSlice) < Number(minSlice)) return minSlice;
  return year;
}

export const dateToString = (date: DateObject) =>
  date ? `${date.day}${date.month}${date.year}` : null;

export const stringToDate = (value: string): DateObject => {
  const day = Number(String(value).substring(0, 2));
  const month = Number(String(value).substring(2, 4));
  const year = Number(String(value).substring(4, 8));
  return { day, month, year };
};

export function dateFormat(value: string) {
  const { day, month, year } = stringToDate(value);

  return (
    day +
    (String(month).length ? '/' + month : '') +
    (String(year).length ? '/' + year : '')
  );
}

export const cleanupInputValue = (
  value: string | number,
  lowercase = false,
) => {
  if (lowercase) {
    return String(value).toLowerCase().trim();
  }

  return String(value).trim();
};
