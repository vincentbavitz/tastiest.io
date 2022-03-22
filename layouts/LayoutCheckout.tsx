import { CmsApi, ContentfulProduct, dlog } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { CheckoutStepIndicator } from 'components/checkout/CheckoutStepIndicator';
import { Contained } from 'components/Contained';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { CheckoutStep } from 'state/checkout';
import { UI } from '../constants';
import { getServerSideProps } from '../pages/checkout/[token]';
import { LayoutProps } from './LayoutHandler';
import LayoutWrapper from './LayoutWrapper';

function LayoutCheckout({
  pageProps,
  router,
  children: Component,
}: // }: LayoutProps<InferGetStaticPropsType<typeof getServerSideProps>>) {
LayoutProps<InferGetStaticPropsType<typeof getServerSideProps>>) {
  //   const {  } = pageProps;
  const clientRouter = useRouter();

  const { isSignedIn, token, user } = useAuth();
  const { isMobile, isDesktop } = useScreenSize();

  const [product, setProduct] = useState<ContentfulProduct>(null);

  const setProductForCheckout = async () => {
    if (router.query['productId']) {
      const cms = new CmsApi();
      const _product = await cms.getProduct(String(router.query['productId']));
      setProduct(_product);
    }
  };

  // If productId is in the URL, fetch the product.
  useEffect(() => {
    setProductForCheckout();
  }, [router.query]);

  // Router change when they sign in.
  useEffect(() => {
    // Account for exact values because isSignedIn being null is falsy.
    if (token && step === CheckoutStep.SIGN_IN) {
      // Take them to the payment step
      clientRouter.replace(router.pathname.replace('authorize', ''));
    }

    if (!token && step === CheckoutStep.PAYMENT) {
      router.push('/checkout/authorize' + window.location.search);
    }
  }, [token]);

  const step: CheckoutStep = useMemo(
    () =>
      router.pathname.startsWith('/checkout/authorize')
        ? CheckoutStep.SIGN_IN
        : CheckoutStep.PAYMENT,
    [router.pathname],
  );

  dlog('LayoutCheckout ➡️ pageProps:', pageProps);

  const isPaymentProcessing = false;
  const submit = () => null;

  const pagePropsWithProduct = { ...pageProps, product };

  return (
    <LayoutWrapper
      router={router}
      pageProps={pageProps}
      headerProps={{ blank: true }}
    >
      <Contained maxWidth={UI.CHECKOUT_WIDTH_PX}>
        <div
          className={clsx(
            'relative flex flex-col w-full space-y-10',
            isMobile ? 'mt-14' : 'mt-28',
          )}
        >
          <CheckoutStepIndicator step={step} />

          <div
            className={clsx(
              'flex  w-full',
              isDesktop ? 'justify-between' : 'flex-col-reverse items-center',
            )}
          >
            <Component {...(pagePropsWithProduct as any)} />
          </div>
        </div>
      </Contained>
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
