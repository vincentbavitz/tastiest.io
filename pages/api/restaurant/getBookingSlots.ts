import {
  dlog,
  RestaurantDataApi,
  TimeRange,
  toZeroIndexedDays,
  WeekOpenTimes,
} from '@tastiest-io/tastiest-utils';
import { DateTime } from 'luxon';
import { NextApiRequest, NextApiResponse } from 'next';
import { firebaseAdmin } from 'utils/firebaseAdmin';

export type Slot = {
  open: boolean;
  range: TimeRange | null;
  times: number[]; // available booking times; in minutes from 00:00
  timestamp: number; // used only to identify the day. Set to 00:00.
  ordinal: number; // ordinal day of the year where 1 is January 1st
  daysFromToday: number;
};

export interface GetBookingSlotsReturn {
  slots: Slot[];
  openTimes: WeekOpenTimes;
  seatingDuration: number; // in minutes
  availableBookingSlots: string[];
  lastBookingSlotsSync: number;
}

/**
 * Requires the following as parameters:
 *  `restaurantId: string`
 *  `offerId: string`
 *  `timezone: string`
 *
 * Get timezone from `DateTime.local().zoneName` using Luxon
 * Intended to be used exclusively with SWR
 */
export default async function getBookingSlots(
  request: NextApiRequest,
  response: NextApiResponse<GetBookingSlotsReturn>,
) {
  // Only allow GET
  if (request.method !== 'GET') {
    response.status(405).end();
    return;
  }

  const offerId = String(request.query.offerId);
  const restaurantId = String(request.query.restaurantId);
  const timezone = String(request.query.timezone);

  dlog('getBookingSlots ➡️ timezone:', timezone);

  // Order restaurantId is required
  if (!offerId?.length || !restaurantId?.length || !timezone?.length) {
    response.statusMessage =
      'Invalid parameters: `restaurantId`, `offerId` and `timezone` are required.';
    response.status(400).end();
    return;
  }

  try {
    const ALLOWED_DAYS_INTO_FUTURE = 14;
    const ALLOWED_BOOKINGS_PER_SLOT = 2;

    // Get the restaurant's booking slots
    const restaurantDataApi = new RestaurantDataApi(
      firebaseAdmin,
      restaurantId,
    );

    // Days are dictated by open times.
    const { metrics, realtime } = await restaurantDataApi.getRestaurantData();

    const slots: Slot[] = [];
    const seatingDuration = metrics?.seatingDuration ?? 60;

    // Rolls over by one each iteration
    const startingDate = DateTime.now().setZone(timezone);
    if (!startingDate.isValid) {
      response.statusMessage =
        'Invalid timezone. Ensure you are sending an IANA-specified timezone.';
      response.status(400).end();
      return;
    }

    startingDate.set({ hour: 0, minute: 0, second: 0 });

    dlog('getBookingSlots ➡️ startingDate:', startingDate.toString());
    dlog('getBookingSlots ➡️ metrics:', metrics);

    // Account for locale!
    for (let i = 0; i < ALLOWED_DAYS_INTO_FUTURE; i++) {
      // Advance the days by `i` and
      // match the current day of the week with open days.
      const rollingDate = startingDate.plus({ days: i });
      const currentDayZeroed = toZeroIndexedDays(rollingDate.weekday);

      // prettier-ignore
      const range = metrics?.openTimes[String(currentDayZeroed)]?.range ?? [0, 1440];
      const open = metrics?.openTimes[String(currentDayZeroed)]?.open ?? false;

      // Set a minimum of 30 minutes between each selectable time slot
      const minimumTimesInterval = 30;
      const interval = Math.max(
        seatingDuration / ALLOWED_BOOKINGS_PER_SLOT,
        minimumTimesInterval,
      );

      // Times are defined such that ALLOWED_BOOKINGS_PER_SLOT bookings can
      // be made per one seatingDuration.
      const numTimeSlots = (range[1] - range[0]) / interval;
      const times = [];

      // Fill up times; as such: [33, 66, 99, ...], etc.
      for (let j = 0; j < numTimeSlots; j++) {
        times.push(range[0] + j * interval);
      }

      // Build up slot from this day.
      const slot: Slot = {
        open,
        range,
        times,
        ordinal: rollingDate.ordinal,
        timestamp: rollingDate.toMillis(),
        daysFromToday: i,
      };

      slots.push(slot);
    }

    response.json({
      slots,
      seatingDuration,
      openTimes: metrics.openTimes,
      availableBookingSlots: realtime.availableBookingSlots,
      lastBookingSlotsSync: realtime.lastBookingSlotsSync,
    });
  } catch (error) {
    response.statusMessage = 'Unknown error';
    response.status(401);
    return;
  }
}
