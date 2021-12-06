import { dlog, FirestoreCollection } from '@tastiest-io/tastiest-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'utils/firebaseAdmin';

export type Preregister = {
  email: string;
  position: number;
  variant: string;
  hasAccess: boolean; // switch on from Admin Panel or Firestore.
  ref: string;
  referredFrom: string | null;
};

export type GetPreregisterReturn = {
  preregister: Preregister;
  numSignUps: number;
};

/**
 * Requires `email` as a parameter.
 */
export default async function getPreregister(
  request: NextApiRequest,
  response: NextApiResponse<GetPreregisterReturn>,
) {
  // Only allow GET
  if (request.method !== 'GET') {
    response.status(405).end();
    return;
  }

  dlog('getPreregister ➡️ dsdf:');

  const email = String(request.query.email).replace('%40', '@');

  // Order token is required
  if (!email?.length) {
    response.statusMessage = 'A valid email address is required.';
    response.status(401).end();
    return;
  }

  try {
    const emailPrefix = email.split('@')?.[0];
    const snapshot = await db('preregisters' as FirestoreCollection)
      .doc(emailPrefix)
      .get();

    if (!snapshot.exists) {
      response.json(null);
      return null;
    }

    const preregister = { hasAccess: false, ...snapshot.data() } as Preregister;

    const numSignUpsSnapshot = await db('preregisters' as FirestoreCollection)
      .where('referredFrom', '==', emailPrefix)
      .get();

    const numSignUps = await numSignUpsSnapshot.size;

    if (preregister) {
      response.json({ preregister, numSignUps });
      return;
    }

    response.json(null);
  } catch (error) {
    response.statusMessage = 'Unknown error';
    response.status(401).end();
    return;
  }
}
