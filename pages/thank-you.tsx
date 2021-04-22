import { dlog, SVG, UserDataApi } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetServerSidePropsType } from 'next';
import nookies from 'nookies';
import {
  ThankYouHero,
  ThankYouOnline,
  ThankYouOnlineButton,
  ThankYouPhone,
  ThankYouPhoneButton,
} from 'public/assets/page';
import React from 'react';
import { firebaseAdmin } from 'utils/firebaseAdmin';
import { Contained } from '../components/Contained';

export const getServerSideProps = async context => {
  const cookieToken = nookies.get(context)?.token;
  const userDataApi = new UserDataApi(firebaseAdmin);
  const { userId } = await userDataApi.initFromCookieToken(cookieToken);

  // Verify order is legit; else redirect and wipe order data.
  const orderId = String(context.query.orderId ?? '') ?? null;

  dlog('thank-you ➡️ orderId:', orderId);

  // If no order exists in URI, redirect to home
  if (!orderId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // // Verify order exists with Firebase
  // const checkoutApi = new CheckoutApi(context);
  // const order: IOrder = await checkoutApi.getOrderFromOrderRequest(orderId);

  // dlog('thank-you ➡️ order:', order);

  // // If no order exists in Firebase, redirect to home
  // if (!order) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  // // Ensure payment succeeded. Return to checkout if it failed.
  // const paymentIntent = await checkoutApi.getOrCreatePaymentIntent(order);

  // dlog('thank-you ➡️ paymentIntent:', paymentIntent);

  // if (paymentIntent.status !== 'succeeded') {
  //   return {
  //     redirect: {
  //       destination: '/checkout',
  //       permanent: false,
  //     },
  //   };
  // }

  // const { firstName } = await userDataApi.getUserData(UserData.DETAILS);

  // dlog('thank-you ➡️ firstName:', firstName);
  // return {
  //   props: { firstName, order },
  // };
};

function ThankYou(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { firstName, order } = props;

  const { isDesktop } = useScreenSize();

  return (
    <Contained>
      <div className="flex flex-col items-center w-full mt-6 mb-8 space-y-20">
        <div
          style={{
            maxWidth: '50rem',
          }}
          className="flex flex-col items-center w-full tablet:flex-row"
        >
          <div className="flex justify-center order-last w-full tablet:order-first">
            <ThankYouHero
              style={{
                maxWidth: '500px',
              }}
              className="w-full"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="font-somatic text-primary text-7xl">Yay!</h1>
            <h2
              style={{ maxWidth: !isDesktop ? '28rem' : '50rem' }}
              className="text-2xl font-somatic text-primary"
            >
              Thanks {firstName}! You're going to love it
            </h2>
          </div>
        </div>

        <BookingSection
          title="Book via the Restaurant's Phone line"
          buttonSvg={ThankYouPhoneButton}
          bookingSvg={ThankYouPhone}
        />

        <BookingSection
          title="Book via the Restaurant's online booking system"
          buttonSvg={ThankYouOnlineButton}
          bookingSvg={ThankYouOnline}
        />
      </div>
    </Contained>
  );
}

interface BookingSectionProps {
  title: string;
  buttonSvg: SVG;
  bookingSvg: SVG;
}

function BookingSection(props: BookingSectionProps) {
  const { isDesktop } = useScreenSize();
  const promptText = (
    <>
      Please quote <b>"Tastiest"</b> when you book to get this offer!
    </>
  );

  return (
    <div className="flex flex-col space-x-6">
      <div className="flex flex-row items-start justify-center space-x-6 mobile:items-center">
        <div className="flex flex-col items-start">
          <h2
            style={{ maxWidth: !isDesktop ? '16rem' : '13rem' }}
            className="text-3xl leading-tight font-somatic mobile:text-4xl"
          >
            {props.title}
          </h2>

          {!!isDesktop && (
            <>
              <props.buttonSvg
                onClick={() => null}
                className="h-10 my-4 cursor-pointer"
              />
              <span style={{ maxWidth: '15rem' }}>{promptText}</span>
            </>
          )}
        </div>

        <div
          style={{
            maxWidth: '16rem',
          }}
          className="flex items-start w-full -mt-6"
        >
          <props.bookingSvg className="w-full h-full" />
        </div>
      </div>

      {!isDesktop && (
        <div className="flex flex-col items-center space-y-4">
          <props.buttonSvg
            onClick={() => null}
            className="h-10 mt-10 cursor-pointer"
          />

          <span
            style={{ maxWidth: '20rem' }}
            className="mt-6 text-lg text-center"
          >
            {promptText}
          </span>
        </div>
      )}
    </div>
  );
}

export default ThankYou;
