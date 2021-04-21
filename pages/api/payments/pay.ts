import { NextApiRequest, NextApiResponse } from 'next';

export default async function pay(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  // Only allow GET
  if (request.method !== 'GET') {
    response.status(405).end();
  }
}
