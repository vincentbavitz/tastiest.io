import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import clsx from 'clsx';
import { CheckoutStepIndicator } from 'components/checkout/CheckoutStepIndicator';
import { Contained } from 'components/Contained';
import { CheckoutProvider } from 'contexts/checkout';
import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetStaticPropsType } from 'next';
import React, { FC } from 'react';
import { UI } from '../constants';
import { getServerSideProps } from '../pages/checkout/[token]';
import { LayoutProps } from './LayoutHandler';
import LayoutWrapper from './LayoutWrapper';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NODE_ENV !== 'production'
    ? process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY
    : process.env.NEXT_PUBLIC_STRIPE_LIVE_PUBLISHABLE_KEY,
);

function LayoutCheckout({
  pageProps,
  router,
  children: Component,
}: // }: LayoutProps<InferGetStaticPropsType<typeof getServerSideProps>>) {
LayoutProps<InferGetStaticPropsType<typeof getServerSideProps>>) {
  const { isMobile, isDesktop } = useScreenSize();
  const pagePropsWithProduct = { ...pageProps };

  return (
    <LayoutWrapper
      router={router}
      pageProps={pageProps}
      headerProps={{ blank: true }}
    >
      <Elements stripe={stripePromise}>
        <CheckoutProvider>
          <Contained maxWidth={UI.CHECKOUT_WIDTH_PX}>
            <div
              className={clsx(
                'relative flex flex-col w-full space-y-10',
                isMobile ? 'mt-14' : 'mt-28',
              )}
            >
              <CheckoutStepIndicator />

              <div
                className={clsx(
                  'flex  w-full',
                  isDesktop
                    ? 'justify-between'
                    : 'flex-col-reverse items-center',
                )}
              >
                <Component {...(pagePropsWithProduct as any)} />
              </div>
            </div>
          </Contained>
        </CheckoutProvider>
      </Elements>
    </LayoutWrapper>
  );
}

const LayoutCheckoutLeft: FC = ({ children }) => {
  const { isDesktop } = useScreenSize();

  return (
    <div
      style={{
        minWidth: `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
      }}
      className={clsx(
        'flex flex-col pb-24 space-y-4',
        isDesktop ? 'w-7/12' : 'w-full',
      )}
    >
      {children}
    </div>
  );
};

const LayoutCheckoutRight: FC = ({ children }) => {
  const { isDesktop } = useScreenSize();

  return (
    <div
      className={clsx(
        'flex-grow',
        isDesktop ? 'w-5/12 pt-6 pl-10' : 'w-full pt-0',
      )}
    >
      {children}
    </div>
  );
};

LayoutCheckout.Left = LayoutCheckoutLeft;
LayoutCheckout.Right = LayoutCheckoutRight;
export default LayoutCheckout;
