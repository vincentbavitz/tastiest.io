import {
  FunctionsResponse,
  UserData,
  UserDataApi,
  UserRole,
} from '@tastiest-io/tastiest-utils';
import * as Analytics from 'analytics-node';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { firebaseAdmin } from 'utils/firebaseAdmin';

export type RegisterReturn = FunctionsResponse<{
  user: firebaseAdmin.auth.UserRecord;
  token: string;
}>;

export default async function register(
  request: NextApiRequest,
  response: NextApiResponse<RegisterReturn>,
) {
  // Only allow POST
  if (request.method !== 'POST') {
    response.status(405).end();
  }

  const analytics = new Analytics(process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY);
  const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY, {
    apiVersion: '2020-08-27',
  });

  const role = UserRole.EATER;

  // Doesn't matter if JSON encoded or not
  let body;
  try {
    body = JSON.parse(request.body);
  } catch {
    body = request.body;
  }

  const { email, password, userAgent } = body;

  if (!email?.length || !password?.length) {
    response.json({
      data: { user: null, token: null },
      error: 'No email or no password given',
      success: false,
    });
    return;
  }

  try {
    const userRecord = await firebaseAdmin.auth().createUser({
      email,
      emailVerified: false,
      password,
      disabled: false,
    });

    const userDataApi = new UserDataApi(firebaseAdmin, userRecord.uid);

    const setDetails = () => {
      userDataApi.setUserData(UserData.ROLE, role);

      // Set firstName if it was given
      const firstName = request.body?.firstName?.split(' ')[0];
      userDataApi.setUserData(UserData.DETAILS, {
        firstName: firstName ?? null,
        email,
      });
    };

    const trackPromise = async () => {
      // Track sign up.
      await analytics.identify({
        userId: userRecord?.uid,
        traits: {
          email,
          context: { userAgent },
        },
      });

      // No need to await tracking after we've identified them
      return analytics.track({
        userId: userRecord?.uid,
        event: 'User Signed Up',
        properties: {
          traits: {
            role,
            email: userRecord.email,
          },
        },
      });
    };

    const createStripeCustomerPromise = async () => {
      //  When a user is created, create a Stripe customer object for them.
      // https://stripe.com/docs/payments/save-and-reuse#web-create-customer
      const customer = await stripe.customers.create({ email });
      const intent = await stripe.setupIntents.create({
        customer: customer.id,
      });

      // Set setup secret etc
      userDataApi.setUserData(UserData.PAYMENT_DETAILS, {
        stripeCustomerId: customer.id,
        stripeSetupSecret: intent.client_secret,
      });
    };

    // Split into separate sub-functions to run in parallel
    // avoiding awaits.
    Promise.all([trackPromise(), createStripeCustomerPromise()]);
    setDetails();

    // Custom token used for signing in.
    // We can then sign in with signInWithCustomToken in useAuth
    // Ref. https://blog.usejournal.com/firesbase-authentication-through-node-js-using-rest-api-and-async-await-f3cf8875ed91
    const token = await firebaseAdmin.auth().createCustomToken(userRecord.uid);

    response
      .status(202)
      .json({ data: { user: userRecord, token }, error: null, success: false });
  } catch (error) {
    response.json({ data: null, error, success: false });
    return;
  }
}
