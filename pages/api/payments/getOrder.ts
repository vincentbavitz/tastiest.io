import { FirestoreCollection, IOrder } from '@tastiest-io/tastiest-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { firebaseAdmin } from 'utils/firebaseAdmin';

/**
 * Requires `token` as a parameter.
 * This can only be obtained client side on article page.
 * Use with SWR
 */
export default async function getOrder(
  request: NextApiRequest,
  response: NextApiResponse<IOrder | string>,
) {
  // Only allow GET
  if (request.method !== 'GET') {
    response.status(405).end();
    return;
  }

  const token = request.query.token;

  // Order token is required
  if (!token || !token.length) {
    response.status(401).json('Order token is required');
    return;
  }

  try {
    // Fetch the order from Firestore using orderToken
    const snapshot = await firebaseAdmin
      .firestore()
      .collection(FirestoreCollection.ORDERS)
      .where('token', '==', token)
      .limit(1)
      .get();

    let order: IOrder;
    snapshot.docs.forEach(doc => (order = doc.data() as IOrder));

    response.json(order);
  } catch (error) {
    response.status(401).json('Unknown error');
    return;
  }
}
