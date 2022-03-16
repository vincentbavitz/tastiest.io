export const x = 5;

// import {
//   dlog,
//   OpenTimesMetricDay,
//   RestaurantDataApi,
//   TIME,
//   TimeRange,
//   toZeroIndexedDays,
//   WeekOpenTimes,
// } from '@tastiest-io/tastiest-utils';
// import { DateTime } from 'luxon';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { firebaseAdmin } from 'utils/firebaseAdmin';

// const ALLOWED_DAYS_INTO_FUTURE = 28;

// export type Slot = {
//   open: boolean;
//   range: TimeRange | null;
//   times: number[]; // available booking times; in minutes from 00:00
//   timestamp: number; // used only to identify the day. Set to 00:00.
//   ordinal: number; // ordinal day of the year where 1 is January 1st
//   daysFromToday: number;
// };

// export interface GetBookingSlotsReturn {
//   slots: Slot[];
//   openTimes: WeekOpenTimes;
//   seatingDuration: number; // in minutes
//   isRealtime: boolean;
// }

// /**
//  * Requires the following as parameters:
//  *  `restaurantId: string`
//  *  `offerId: string`
//  *  `timezone: string`
//  *
//  * Get timezone from `DateTime.local().zoneName` using Luxon
//  * Intended to be used exclusively with SWR
//  */
// export default async function getBookingSlots(
//   request: NextApiRequest,
//   response: NextApiResponse<GetBookingSlotsReturn>,
// ) {
//   // Only allow GET
//   if (request.method !== 'GET') {
//     response.status(405).end();
//     return;
//   }

//   const offerId = String(request.query.offerId);
//   const restaurantId = String(request.query.restaurantId);
//   const timezone = String(request.query.timezone);

//   // Order restaurantId is required
//   if (!offerId?.length || !restaurantId?.length || !timezone?.length) {
//     response.statusMessage =
//       'Invalid parameters: `restaurantId`, `offerId` and `timezone` are required.';
//     response.status(400).end();
//     return;
//   }

//   try {
//     const now = DateTime.now().setZone(timezone);
//     const ALLOWED_BOOKINGS_PER_SLOT = 2;

//     // Get the restaurant's booking slots
//     const restaurantDataApi = new RestaurantDataApi(
//       firebaseAdmin,
//       restaurantId,
//     );

//     // Days are dictated by open times.
//     const {
//       settings,
//       metrics,
//       realtime,
//     } = await restaurantDataApi.getRestaurantData();

//     dlog('getBookingSlots ➡️ settings:', settings);

//     // const slots: Slot[] = [];
//     const seatingDuration = metrics?.seatingDuration ?? 60;

//     // Rolls over by one each iteration
//     const startingDate = DateTime.now().setZone(timezone);
//     if (!startingDate.isValid) {
//       response.statusMessage =
//         'Invalid timezone. Ensure you are sending an IANA-specified timezone.';
//       response.status(400).end();
//       return;
//     }

//     startingDate.set({ hour: 0, minute: 0, second: 0 });

//     // We use realtime.availableBookingSlots preferentially over metrics.openTimes.
//     // because availableBookingSlots is realtime data from the restaurant's booking system.
//     // prettier-ignore
//     const lastSyncInMins = realtime?.lastBookingSlotsSync
//       ? now.diff(DateTime.fromMillis(realtime?.lastBookingSlotsSync).setZone(timezone)).as('minutes')
//       : Infinity;

//     dlog('getBookingSlots ➡️ lastSyncInMins:', lastSyncInMins);

//     // HOWEVER! We must ensure that this data is recent, and was refreshed less than an hour ago.
//     if (
//       realtime?.availableBookingSlots &&
//       lastSyncInMins < TIME.OLDEST_VIABLE_BOOKING_SYNC_DATA_MINS
//     ) {
//       const slots: Slot[] = transformAvailableSlots(
//         realtime?.availableBookingSlots ?? [],
//         metrics.openTimes,
//         timezone,
//       );

//       response.json({
//         slots,
//         seatingDuration,
//         isRealtime: true,
//         openTimes: metrics.openTimes,
//       });

//       return;
//     }

//     // NO REALTIME INFORMATION AVAILABLE
//     // Should we default to open times?
//     if (settings?.shouldFallbackToOpenTimes === false) {
//       const DAYS_IN_WEEK = 7;

//       const slots: Slot[] = [];
//       for (let i = 0; i < DAYS_IN_WEEK; i++) {
//         const rollingDate = startingDate.plus({ days: i });

//         const slot: Slot = {
//           open: false,
//           range: [0, 0],
//           times: [],
//           ordinal: rollingDate.ordinal,
//           timestamp: rollingDate.toMillis(),
//           daysFromToday: i,
//         };

//         slots.push(slot);
//       }

//       response.json({
//         slots,
//         seatingDuration,
//         isRealtime: true,
//         openTimes: metrics.openTimes,
//       });
//       return;
//     }

//     // Falling back to open times.
//     const slots: Slot[] = [];
//     for (let i = 0; i < ALLOWED_DAYS_INTO_FUTURE; i++) {
//       // Advance the days by `i` and
//       // match the current day of the week with open days.
//       const rollingDate = startingDate.plus({ days: i });
//       const currentDayZeroed = toZeroIndexedDays(rollingDate.weekday);

//       // prettier-ignore
//       const range = metrics?.openTimes[String(currentDayZeroed)]?.range ?? [0, 1440];
//       const open = metrics?.openTimes[String(currentDayZeroed)]?.open ?? false;

//       // Set a minimum of 30 minutes between each selectable time slot
//       const minimumTimesInterval = 30;
//       const interval = Math.max(
//         seatingDuration / ALLOWED_BOOKINGS_PER_SLOT,
//         minimumTimesInterval,
//       );

//       // Times are defined such that ALLOWED_BOOKINGS_PER_SLOT bookings can
//       // be made per one seatingDuration.
//       const numTimeSlots = (range[1] - range[0]) / interval;
//       const times = [];

//       // Fill up times; as such: [33, 66, 99, ...], etc.
//       for (let j = 0; j < numTimeSlots; j++) {
//         times.push(range[0] + j * interval);
//       }

//       // Build up slot from this day.
//       const slot: Slot = {
//         open,
//         range,
//         times,
//         ordinal: rollingDate.ordinal,
//         timestamp: rollingDate.toMillis(),
//         daysFromToday: i,
//       };

//       slots.push(slot);
//     }

//     response.json({
//       slots,
//       seatingDuration,
//       isRealtime: false,
//       openTimes: metrics.openTimes,
//     });
//   } catch (error) {
//     response.statusMessage = 'Unknown error';
//     response.status(401);
//     response.end();
//     return;
//   }
// }

// /** Transforms slots coming from `realtime` into an Array<Slot> */
// const transformAvailableSlots = (
//   isoSlots: string[],
//   openTimes: WeekOpenTimes,
//   timezone: string,
// ): Slot[] => {
//   // Fill up slots by the day of the year.
//   const ordinalSlots: { [key: number]: Slot } = {};

//   // Split isoSlots into days.
//   isoSlots.forEach(iso => {
//     const datetime = DateTime.fromISO(iso).setZone(timezone);
//     const ordinal = datetime.ordinal;

//     const currentDayZeroed = toZeroIndexedDays(datetime.weekday);
//     const todayOpenTimes: OpenTimesMetricDay =
//       openTimes[String(currentDayZeroed)];

//     const range = todayOpenTimes?.range ?? [0, 1440];
//     const times: number[] = ordinalSlots[ordinal]?.times ?? [];

//     // Add this particular time to the day.
//     const timeOfThisSlot = datetime.hour * 60 + datetime.minute;
//     times.push(timeOfThisSlot);

//     // Ensure we ignore everything from the past.
//     const minsFromNow = datetime.diffNow().as('minutes');
//     if (minsFromNow <= 0) {
//       return;
//     }

//     const daysFromToday = ordinal - DateTime.now().setZone(timezone).ordinal;

//     // Prevent getting too many days into the future.
//     if (daysFromToday > ALLOWED_DAYS_INTO_FUTURE) {
//       return;
//     }

//     const slot: Slot = {
//       open: true,
//       range,
//       times,
//       ordinal,
//       daysFromToday,
//       timestamp: datetime.set({ hour: 0, minute: 0, second: 0 }).toMillis(),
//     };

//     // Add to ordinal slots to slice them into days.
//     ordinalSlots[ordinal] = slot;
//   });

//   return Object.values(ordinalSlots);
// };
