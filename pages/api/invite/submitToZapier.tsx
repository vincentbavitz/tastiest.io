import { FunctionsResponse } from '@tastiest-io/tastiest-utils';
import Analytics from 'analytics-node';
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const analytics = new Analytics(process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY);

export interface SubmitToZapierParams {
  email: string;
  utm_medium: string;
  utm_source: string;
  utm_campaign: string;
  page_variant: string;
  referrer: string;
  ip: string;
}

/**
 */
export default async function submitToZapier(
  request: NextApiRequest,
  response: NextApiResponse<FunctionsResponse>,
) {
  // Only allow POST
  if (request.method !== 'POST') {
    response.status(405).end();
    return;
  }

  // Get body as JSON or raw
  let body;
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
    const zapierWebhookEndpoint = `https://hooks.zapier.com/hooks/catch/8960376/bmy7cmt`;
    await fetch(zapierWebhookEndpoint, {
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

    // Send off to Segment for Slack notifications
    analytics.track({
      event: 'New Waitlist Submission',
      anonymousId: email,
      properties: body,
    });

    response.json({ success: true, data: null, error: null });
  } catch (error) {
    response.json({
      success: false,
      data: { order: null },
      error,
    });
  }
}