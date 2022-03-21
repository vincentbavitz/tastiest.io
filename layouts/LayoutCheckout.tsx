import { dlog } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { CheckoutStepIndicator } from 'components/checkout/CheckoutStepIndicator';
import { Contained } from 'components/Contained';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetStaticPropsType } from 'next';
import React, { FC, useMemo } from 'react';
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

  const { isSignedIn, token, user } = useAuth();
  const { isMobile, isDesktop } = useScreenSize();

  // Router change when they sign in.
  // CORRECT ME
  // useEffect(() => {
  //   // Account for exact values because isSignedIn being null is falsy.
  //   if (token && step === CheckoutStep.SIGN_IN) {
  //     // Create a new order and direct them straight to /checkout/[token]
  //     toCheckoutWithToken();
  //   }

  //   if (!token && step === CheckoutStep.PAYMENT) {
  //     router.push('/checkout/authorize' + window.location.search);
  //   }
  // }, [token]);

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
            <Component {...(pageProps as any)} />

            {/* <div
              style={{
                minWidth: `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
              }}
              className={clsx(
                'flex flex-col pb-24 space-y-4',
                isDesktop ? 'w-7/12' : 'w-full',
              )}
            >
              <Component {...(pageProps as any)} />
            </div> */}

            {/* <div
              className={clsx(
                'flex-grow',
                isDesktop ? 'w-5/12 pl-10' : 'w-full',
              )}
            >
              {step === CheckoutStep.PAYMENT ? (
                <div
                  style={{ filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.15)' }}
                  className="flex justify-center mt-4 mb-3 w-full"
                >
                  <SecureTransactionText />
                </div>
              ) : null}

              <CheckoutCard order={order}>
                <div className="">
                  <div className="text-base font-medium">
                    <div className="flex justify-between">
                      <span>{order.experience.restaurant.name}</span>

                      {step === CheckoutStep.PAYMENT ? (
                        <span className="font-light">
                          £{order?.experience?.pricePerHeadGBP}
                        </span>
                      ) : null}
                    </div>

                    <p className="text-sm mt-2 font-normal leading-tight text-gray-700">
                      {order.experience.name}
                    </p>

                    {step === CheckoutStep.SIGN_IN ? (
                      <p className="text-sm font-normal leading-tight">
                        <p>
                          Booking for {order.heads}{' '}
                          {order.heads === 1 ? 'person' : 'people'}
                        </p>
                      </p>
                    ) : null}
                  </div>
                </div>

                {step === CheckoutStep.PAYMENT ? (
                  <>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="leading-none">Date</span>
                      <span className="font-medium leading-none">
                        {DateTime.fromISO(order.bookedFor).toFormat(
                          'h:mm a, DD',
                        )}
                      </span>
                    </div>

                    <div className="flex items-center justify-between leading-none text-sm text-gray-600">
                      <span>
                        Book for {order.heads}{' '}
                        {order.heads === 1 ? 'person' : 'people'}
                      </span>
                      <span className="font-medium">£{order.price.final}</span>
                    </div>

                    <div className="flex items-center justify-between leading-none text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <span>Fees</span>
                        <Tooltip content="Card processing fees are 2.9% + 30p.">
                          <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 font-primary cursor-pointer">
                            i
                          </div>
                        </Tooltip>
                      </div>
                      <span className="font-medium">
                        £{formatCurrency(order.price.fees)}
                      </span>
                    </div>

                    {isDesktop && (
                      <>
                        <div>
                          <div className="flex items-center justify-between space-x-2 font-medium border-t border-primary border-opacity-20 pt-3 text-base">
                            <span className="font-normal">Total</span>
                            <span className="font-normal">
                              £{formatCurrency(order.price.final)}
                            </span>
                          </div>
                        </div>

                        <Button
                          wide
                          type="solid"
                          size="large"
                          onClick={submit}
                          disabled={isPaymentProcessing}
                          loading={isPaymentProcessing}
                        >
                          Book Now
                        </Button>
                      </>
                    )}
                  </>
                ) : null}
              </CheckoutCard>

              {step === CheckoutStep.PAYMENT ? (
                <div><TermsAndConditions />}</div>
              ) : null}
            </div> */}
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
