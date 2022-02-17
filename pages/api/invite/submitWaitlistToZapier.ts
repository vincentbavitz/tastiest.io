import { FunctionsResponse } from '@tastiest-io/tastiest-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const Analytics = require('analytics-node');
const analytics = new Analytics(process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY, {
  flushInterval: 0,
});

export interface SubmitWaitlistToZapierParams {
  email: string;
  utm_medium: string;
  utm_source: string;
  utm_campaign: string;
  page_variant: string;
  referrer: string;
  ip: string;
}

function wait(milliseconds: number) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/**
 */
export default async function submitWaitlistToZapier(
  request: NextApiRequest,
  response: NextApiResponse<FunctionsResponse>,
) {
  // Only allow POST
  if (request.method !== 'POST') {
    response.status(405).end();
    return;
  }

  // Get body as JSON or raw
  let body: SubmitWaitlistToZapierParams;
  try {
    body = JSON.parse(request.body);
  } catch (e) {
    body = request.body;
  }

  const {
    email = null,
    utm_medium = null,
    utm_source = null,
    utm_campaign = null,
    page_variant = null,
    referrer = null,
    ip = null,
  } = body;

  // Order token is required
  if (!email?.length) {
    response.json({
      success: false,
      data: { order: null },
      error: 'No email provided',
    });
    return;
  }

  try {
    // Send off to Segment for Slack notifications
    const segmentPromise = analytics.track({
      event: 'New Waitlist Submission',
      anonymousId: email,
      properties: body,
    });

    const zapierWebhookEndpoint = `https://hooks.zapier.com/hooks/catch/8960376/bmy7cmt`;
    const zapierPromise = fetch(zapierWebhookEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        email,
        utm_medium,
        utm_source,
        utm_campaign,
        page_variant,
        referrer,
        ip,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Wait to ensure Segment actually fires
    const waitPromise = wait(500);

    // Wait for everything to finish so our events register.
    await Promise.all([zapierPromise, segmentPromise, waitPromise]);

    response.json({ success: true, data: null, error: null });
  } catch (error) {
    response.json({
      success: false,
      data: { order: null },
      error,
    });
  }
}
