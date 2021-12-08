import { FunctionsResponse } from '@tastiest-io/tastiest-utils';
import Analytics from 'analytics-node';
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { InviteRecommendFormData } from 'pages/recommend';

const analytics = new Analytics(process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY);

export interface SubmitRecommendToZapierParams extends InviteRecommendFormData {
  utm_medium: string;
  utm_source: string;
  utm_campaign: string;
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
  let body: SubmitRecommendToZapierParams;
  try {
    body = JSON.parse(request.body);
  } catch (e) {
    body = request.body;
  }

  const {
    favouriteRestaurantName = null,
    favouriteRestaurantWebsite = null,
    mustTryDish = null,
    userEmail = null,
    utm_medium = null,
    utm_source = null,
    utm_campaign = null,
  } = body;

  // Required
  if (
    !userEmail?.length ||
    !favouriteRestaurantName?.length ||
    !favouriteRestaurantWebsite?.length
  ) {
    response.json({
      success: false,
      data: { order: null },
      error: 'Invalid parameters',
    });
    return;
  }

  try {
    const zapierWebhookEndpoint = `https://hooks.zapier.com/hooks/catch/8960376/bmgcbu1/`;
    await fetch(zapierWebhookEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        userEmail,
        favouriteRestaurantName,
        favouriteRestaurantWebsite,
        mustTryDish,
        utm_medium,
        utm_source,
        utm_campaign,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Send off to Segment for Slack notifications
    await analytics.track({
      event: 'New Restaurant Recommendation',
      anonymousId: userEmail,
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
