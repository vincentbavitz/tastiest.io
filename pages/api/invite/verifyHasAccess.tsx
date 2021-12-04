import { FirestoreCollection } from '@tastiest-io/tastiest-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'utils/firebaseAdmin';

export type Preregister = {
  email: string;
  position: number;
  ref: string;
  referredFrom: string | null;
  variant: string;
  hasAccess: boolean; // switch on from Admin Panel or Firestore.
};

/**
 * Requires `email` as a parameter.
 */
export default async function verifyHasAccess(
  request: NextApiRequest,
  response: NextApiResponse<Preregister | string>,
) {
  // Only allow GET
  if (request.method !== 'GET') {
    response.status(405).end();
    return;
  }

  const email = String(request.query.email).replace('%40', '@');

  // Order token is required
  if (!email?.length) {
    response.status(401).json('A valid email address is required.');
    return;
  }

  try {
    const emailPrefix = email.split('@')?.[0];
    const snapshot = await db('preregisters' as FirestoreCollection)
      .doc(emailPrefix)
      .get();

    const preregister = { hasAccess: false, ...snapshot.data() } as Preregister;

    if (preregister) {
      response.json(preregister);
      return;
    }

    response.json(null);
  } catch (error) {
    response.status(401).json('Unknown error');
    return;
  }
}
