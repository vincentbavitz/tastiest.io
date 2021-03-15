import { IDateObject, TDay, TMonth, TYear } from 'types/various';

export function titleCase(str: string) {
  return str?.length
    ? str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
          return word.replace(word[0], word[0].toUpperCase());
        })
        .join(' ')
    : '';
}

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

  console.log('InputDate ➡️ minYear:', minYear);
  console.log('InputDate ➡️ maxYear:', maxYear);

  const yearSlice = year.slice(0, year.length);
  const maxSlice = maxYear.slice(0, year.length);
  const minSlice = minYear.slice(0, year.length);

  console.log('InputDate ➡️ yearSlice:', yearSlice);
  console.log('InputDate ➡️ maxSlice:', maxSlice);
  console.log('InputDate ➡️ minSlice:', minSlice);

  if (Number(yearSlice) > Number(maxSlice)) return maxSlice;
  if (Number(yearSlice) < Number(minSlice)) return minSlice;
  return year;
}

export const dateToString = (date: IDateObject) =>
  date ? `${date.day}${date.month}${date.year}` : null;

export const stringToDate = (
  value: string,
  minYear: string,
  maxYear: string,
): IDateObject => {
  const day = limit(value.substring(0, 2), '31') as TDay;
  const month = limit(value.substring(2, 4), '12') as TMonth;
  const year = limitYear(
    value.substring(4, 8),
    minYear ?? '1900',
    maxYear ?? '2099',
  ) as TYear;

  console.log('InputDate ➡️ minYear:', minYear);
  console.log('InputDate ➡️ year:', year);

  return { day, month, year };
};

export function dateFormat(value: string, minYear?: string, maxYear?: string) {
  const { day, month, year } = stringToDate(
    value,
    minYear ?? '1900',
    maxYear ?? '2099',
  );

  return (
    day + (month.length ? '/' + month : '') + (year.length ? '/' + year : '')
  );
}
