import Analytics from 'analytics-node';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import Stripe from 'stripe';

admin.initializeApp();

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'development'
    ? functions.config().stripe.secret_test
    : functions.config().stripe.secret_live;

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

const analytics = new Analytics(functions.config().segment.write_key);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// Payment endpoint for Tastiest
// Takes the following parameters
//    orderId: string;
//    userId: string
//    heads: number;
//    promoCode: string
//    setupIntent: string
export const pay = functions.https.onRequest(async (req, res) => {
  const { orderId, userId, heads, promoCode, setupIntent } = req.query;

  // Ensure setupIntent is valid with Stripe

  // Find order in Firestore with orderId

  // Find promo code in Contentful
  // Validate promo code exists, and is valid given the number of heads, date, etc

  // Get deal from Contentful
  // Ensure deal exists and is valid

  // Ensure number of heads is valid for deal

  const order = {
    id: orderId,
    deal,
    userId,
    heads,
    fromSlug,
    totalPrice: deal.pricePerHeadGBP * orderRequest.heads,
    discount: null,
    // TODO - paidAt should be updated with Firebase functions
    paidAt: null,
    orderedAt: Date.now(),
    abandonedAt: null,
    paymentDetails: null,
    refund: null,
  };

  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin
    .firestore()
    .collection('messages')
    .add({ original: original });
  // Send back a message that we've successfully written the message
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

const getPriceFromPromo = (
  pricePerHeadGBP: number,
  heads: number,
  promoCode?: string,
): number => {
  return 0;
};

/**
 * When a user is created, create a Stripe customer object for them.
 *
 * @see https://stripe.com/docs/payments/save-and-reuse#web-create-customer
 */
export const createStripeCustomer = functions.auth
  .user()
  .onCreate(async user => {
    const customer = await stripe.customers.create({ email: user.email });
    const intent = await stripe.setupIntents.create({
      customer: customer.id,
    });
    await admin.firestore().collection('stripe_customers').doc(user.uid).set({
      customer_id: customer.id,
      setup_secret: intent.client_secret,
    });
    return;
  });

/**
 * When adding the payment method ID on the client,
 * this function is triggered to retrieve the payment method details.
 */
export const addPaymentMethodDetails = functions.firestore
  .document('/stripe_customers/{userId}/payment_methods/{pushId}')
  .onCreate(async (snap, context) => {
    try {
      const paymentMethodId = snap.data().id;
      const paymentMethod = await stripe.paymentMethods.retrieve(
        paymentMethodId,
      );

      await snap.ref.set(paymentMethod);
      // Create a new SetupIntent so the customer can add a new method next time.
      const intent = await stripe.setupIntents.create({
        customer: `${paymentMethod.customer}`,
      });

      await snap?.ref?.parent?.parent?.set(
        {
          setup_secret: intent.client_secret,
        },
        { merge: true },
      );

      return;
    } catch (error) {
      await snap.ref.set({ error: userFacingMessage(error) }, { merge: true });
      await reportError(error, context.params.userId);
    }
  });

/**
 * When a payment document is written on the client,
 * this function is triggered to create the payment in Stripe.
 *
 * @see https://stripe.com/docs/payments/save-and-reuse#web-create-payment-intent-off-session
 */

// [START chargecustomer]

export const createStripePayment = functions.firestore
  .document('stripe_customers/{userId}/payments/{pushId}')
  .onCreate(async (snap, context) => {
    const { amount, currency, payment_method } = snap.data();
    try {
      // Look up the Stripe customer id.
      const customerData = (await snap?.ref?.parent?.parent?.get?.())?.data();
      const customer = customerData?.customer_id;

      if (!customer) {
        return;
      }

      // Create a charge using the pushId as the idempotency key
      // to protect against double charges.
      const idempotencyKey = context.params.pushId;
      const payment = await stripe.paymentIntents.create(
        {
          amount,
          currency,
          customer,
          payment_method,
          off_session: false,
          confirm: true,
          confirmation_method: 'manual',
        },
        { idempotencyKey },
      );

      // If the result is successful, write it back to the database.
      await snap.ref.set(payment);
    } catch (error) {
      // We want to capture errors and render them in a user-friendly way, while
      // still logging an exception with StackDriver
      functions.logger.log(error);
      await snap.ref.set({ error: userFacingMessage(error) }, { merge: true });
      await reportError(error, context.params.userId);
    }
  });

// [END chargecustomer]

/**
 * When 3D Secure is performed, we need to reconfirm the payment
 * after authentication has been performed.
 *
 * @see https://stripe.com/docs/payments/accept-a-payment-synchronously#web-confirm-payment
 */
export const confirmStripePayment = functions.firestore
  .document('stripe_customers/{userId}/payments/{pushId}')
  .onUpdate(async (change, context) => {
    if (change.after.data().status === 'requires_confirmation') {
      const payment = await stripe.paymentIntents.confirm(
        change.after.data().id,
      );

      change.after.ref.set(payment);
    }
  });

/**
 * When a user deletes their account, clean up after them
 */
export const cleanupUser = functions.auth.user().onDelete(async user => {
  const dbRef = admin.firestore().collection('stripe_customers');
  const customer = (await dbRef.doc(user.uid).get()).data();

  if (customer) {
    await stripe.customers.del(customer.customer_id);
  }

  // Delete the customers payments & payment methods in firestore.
  const batch = admin.firestore().batch();
  const paymetsMethodsSnapshot = await dbRef
    .doc(user.uid)
    .collection('payment_methods')
    .get();
  paymetsMethodsSnapshot.forEach(snap => batch.delete(snap.ref));
  const paymentsSnapshot = await dbRef
    .doc(user.uid)
    .collection('payments')
    .get();
  paymentsSnapshot.forEach(snap => batch.delete(snap.ref));

  await batch.commit();

  await dbRef.doc(user.uid).delete();
  return;
});

/**
 * To keep on top of errors, we should raise a verbose error report with Stackdriver rather
 * than simply relying on functions.logger.error. This will calculate users affected + send you email
 * alerts, if you've opted into receiving them.
 */

// [START reporterror]

function reportError(error: any, userId: string) {
  // This is the name of the StackDriver log stream that will receive the log
  // entry. This name can be any valid log stream name, but must contain "err"
  // in order for the error to be picked up by StackDriver Error Reporting.

  analytics.track({
    userId: userId ?? null,
    event: `Payment Error for user ${userId}`,
    properties: {
      userId,
      message: error?.stack,
    },
  });
}

// [END reporterror]

/**
 * Sanitize the error message for the user.
 */
function userFacingMessage(error: any) {
  return error?.type
    ? error?.message
    : 'An error occurred, developers have been alerted';
}
