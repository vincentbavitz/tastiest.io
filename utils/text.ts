import { IDateObject, TDay, TMonth, TYear } from '@tastiest-io/tastiest-utils';

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

export const dateToString = (date: IDateObject) =>
  date ? `${date.day}${date.month}${date.year}` : null;

export const stringToDate = (value: string): IDateObject => {
  const day = value.substring(0, 2) as TDay;
  const month = value.substring(2, 4) as TMonth;
  const year = value.substring(4, 8) as TYear;
  return { day, month, year };
};

export function dateFormat(value: string) {
  const { day, month, year } = stringToDate(value);

  return (
    day + (month.length ? '/' + month : '') + (year.length ? '/' + year : '')
  );
}

export const cleanupInputValue = (value: string | number) =>
  String(value).toLowerCase().trim();
