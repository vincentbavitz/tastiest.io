export interface IDateObject {
  day: TDay;
  month: TMonth;
  year: TYear;
}

// eslint-disable-next-line prettier/prettier
export type TDay = `${1|2|3|4|5|6|7|8|9}` | `${1 | 2}${0|1|2|3|4|5|6|7|8|9}` | `3${0|1}`;
export type TMonth = `${1|2|3|4|5|6|7|8|9|10|11|12}`;
export type TYear = `${19}${3|4|5|6|7|8|9}${0|1|2|3|4|5|6|7|8|9}` | `${20}${0|1|2|3|4|5|6|7|8|9}${0|1|2|3|4|5|6|7|8|9}`
