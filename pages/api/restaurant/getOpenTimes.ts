import { RestaurantDataApi, WeekOpenTimes } from '@tastiest-io/tastiest-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { firebaseAdmin } from 'utils/firebaseAdmin';

export type GetOpenTimesReturn = WeekOpenTimes;

/**
 * Requires the following as parameters:
 *  `restaurantId: string`
 *
 * Intended to be used exclusively with SWR
 */
export default async function getOpenTimes(
  request: NextApiRequest,
  response: NextApiResponse<GetOpenTimesReturn>,
) {
  // Only allow GET
  if (request.method !== 'GET') {
    response.status(405).end();
    return;
  }

  const restaurantId = String(request.query.restaurantId);

  // Restaurant ID is required
  if (!restaurantId?.length) {
    response.statusMessage = 'Invalid parameters: `restaurantId` is required.';
    response.status(400).end();
    return;
  }

  try {
    // Get the restaurant's open times
    const restaurantDataApi = new RestaurantDataApi(
      firebaseAdmin,
      restaurantId,
    );

    // Days are dictated by open times.
    const { metrics } = await restaurantDataApi.getRestaurantData();

    const openTimes: WeekOpenTimes = metrics?.openTimes ?? {
      0: { open: false, range: [0, 1440] },
      1: { open: false, range: [0, 1440] },
      2: { open: false, range: [0, 1440] },
      3: { open: false, range: [0, 1440] },
      4: { open: false, range: [0, 1440] },
      5: { open: false, range: [0, 1440] },
      6: { open: false, range: [0, 1440] },
    };

    response.json(openTimes);
  } catch (error) {
    response.statusMessage = 'Unknown error';
    response.status(401);
    return;
  }
}
