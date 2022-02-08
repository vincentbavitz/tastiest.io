import { Button, Tooltip } from '@tastiest-io/tastiest-ui';
import {
  dlog,
  formatCurrency,
  Horus,
  HorusOrderEntity,
} from '@tastiest-io/tastiest-utils';
import { CheckoutCard } from 'components/checkout/CheckoutCard';
import { CheckoutStepIndicator } from 'components/checkout/CheckoutStepIndicator';
import { Contained } from 'components/Contained';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { DateTime } from 'luxon';
import { InferGetStaticPropsType } from 'next';
import React, { useEffect, useMemo } from 'react';
import { CheckoutStep } from 'state/checkout';
import { UI } from '../constants';
import { LayoutProps } from './LayoutHandler';
import LayoutWrapper from './LayoutWrapper';

export const order = ({
  token: '6cef2a70-cccc-43ca-a3ce-e6113ad10a93',
  userFacingOrderId: '162994317',
  heads: 45,
  experience: {
    id: 'v5WWg3Sr573AleBLH9LmH',
    name: 'All You Can Eat Rodizio Style',
    restaurant: {
      id: 'zFekbQT8LNaQb5enmzKw5iLe46P2',
      name: 'El Vaquero',
      city: 'london',
      cuisine: 'BRAZILIAN',
      uriName: 'el-vaquero-mill-hill',
      website: 'https://elvaquero.co.uk/',
      location: {
        lat: 51.6140603,
        lon: -0.2506671,
        address: '2B Hale Ln, Mill Hill, London NW7 3NX, UK',
        displayLocation: 'Mill Hill',
      },
      businessType: 'restaurant',
      profilePicture: {
        url:
          'https://images.ctfassets.net/tq39z0nxr0bv/6aU49DWg9wxOr97NXnCFpU/aeb893a758f209a1a6c570cd98e049be/el-vaquery-logo.svg',
        description: '',
        title: 'Restaurant Logos El Vaquero',
      },
      publicPhoneNumber: '0208 906 8504',
      backdropVideo: {
        url:
          'https://videos.ctfassets.net/tq39z0nxr0bv/46eA1wd4vZEHURSeTBM3b2/1f7a9cb775e6497997cf86526b94551a/el-vaquero-mill-hill.mp4',
        description: '',
        title: 'el-vaquero-mill-hill',
      },
      backdropStillFrame: {
        url:
          'https://images.ctfassets.net/tq39z0nxr0bv/1jYDYSVw1LO2nQMuOVP5Rm/2bd7ca54e375ce8976553f9ec5a82bd7/image_2021-10-25_17-47-54.png',
        description: '',
        title: 'el-vaquero-mill-hill-still-frame',
      },
      displayPhotograph: {
        url:
          'https://images.ctfassets.net/tq39z0nxr0bv/5rzYvTx9yRAHEWlJUCvM8H/f8ba59e53f09e325a9353398f84ca6ec/El_Vaquero_copy_2.png',
        description: '',
        title: 'Inside of El Vaquero in Mill Hill',
      },
      bookingSystem: 'e-Res',
      heroIllustration: {
        url:
          'https://images.ctfassets.net/tq39z0nxr0bv/4NHBbe5niKngRwFjL9mfcX/cd36f15ec008cdd53b4b0e7ec180a2c2/ELVaquero_hero.ai_cut.svg',
        description: '',
        title: 'ELVaquero hero.ai cut',
      },
      meta: {
        title: 'El Vaquero',
        description:
          "Endless juicy meats grilled over a live charcoal fire, unlimited salad bar, toasted giant marshmallows and cinnamon-honey pineapple, you'll leave with a full belly and a smile on your face. Oooh, that smell. ",
        image: {
          url:
            'https://images.ctfassets.net/tq39z0nxr0bv/1jDRMnks3q8uYSyyn5yNqM/02be26f230f717bb341c9ff6f4e7d777/Meta_img.png',
          description: '',
          title: 'El Vaquero Meta Img',
        },
      },
    },
    tagline: 'All You Can Eat Rodizio Style',
    pricePerHeadGBP: 29.95,
    allowedHeads: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    image: {
      url:
        'https://images.ctfassets.net/tq39z0nxr0bv/3BE6Qhulyd1TS9PP5GZ16m/0d790d798e7e439af0e7697f1c214e87/El_Vaquero_All_You_Can_Eat_.png',
      description: '',
      title: 'El Vaquero All You Can Eat Rodizio Style',
    },
    dynamicImage: {
      url:
        'https://videos.ctfassets.net/tq39z0nxr0bv/20T0TEbC0D7Ha1vHJtc6tx/c3fffc2bd8cf694e12d95264ab1be893/EV_All_You_Can_Eat_Offer.mp4',
      description: '',
      title: 'EV All You Can Eat Offer',
    },
  },
  price: {
    subtotal: 1347.75,
    fees: 39.38,
    final: 1387.13,
    currency: 'GBP',
  },
  bookedFor: '2022-02-07T22:59:26.748Z',
  fromSlug: 'best-all-you-can-eat-rodizio-style-in-london',
  createdAt: '2022-02-08T00:17:36.690Z',
  isUserFollowing: false,
  isTest: true,
  user: {
    id: 'uEmkrFSIDoZmBadkIKP7upMMjUo2',
    email: 'vincent@bavitz.org',
    firstName: 'Vincent',
    lastName: 'Bavitz',
    isTestAccount: true,
    lastActive: null,
    mobile: '+441231231234',
    birthday: null,
    financial: {
      stripeCustomerId: 'cus_JmtTt8bUiZf5Yi',
      stripeSetupSecret:
        'seti_1J9JgaHZaOt3USRGwnd9yRMf_secret_JmtTQMAmWied9cuc7gNb8aADHMJWWoI',
    },
    location: {
      lat: '0',
      lon: '0',
      address: null,
      postcode: 'LS28DA',
      display: null,
    },
  },
  refund: null,
  paymentMethod: null,
  paymentCard: null,
  discountCode: null,
  paidAt: null,
  abandonedAt: null,
  tastiestPortion: null,
  restaurantPortion: null,
  id: null,
} as any) as HorusOrderEntity;

export default function LayoutCheckout({
  pageProps,
  router,
  children: Component,
}: // }: LayoutProps<InferGetStaticPropsType<typeof getServerSideProps>>) {
LayoutProps<InferGetStaticPropsType<any>>) {
  //   const {  } = pageProps;

  const { isSignedIn, token, user } = useAuth();
  const { isDesktop } = useScreenSize();

  const toCheckoutWithToken = async () => {
    const currentUrl = new URL(window.location.href);

    const heads = Number(currentUrl.searchParams.get('heads') ?? 0);
    const experienceId = currentUrl.searchParams.get('experienceId');
    const userAgent = currentUrl.searchParams.get('userAgent');
    const bookedForTimestamp = Number(
      currentUrl.searchParams.get('bookedForTimestamp') ?? 0,
    );

    // Horus will tell us whether or not the order was valid.
    const horus = new Horus(token);
    const { data: order, error } = await horus.post<any, HorusOrderEntity>(
      '/orders/new',
      {
        experienceId,
        heads,
        userAgent,
        bookedForTimestamp,
        isTest: process.env.NODE_ENV !== 'production',
      },
    );

    dlog('LayoutCheckout ➡️ order:', order);

    if (order && !error) {
      router.push(`/checkout/${order.token}`);
    }
  };

  // Router change when they sign in.
  useEffect(() => {
    // Account for exact values because isSignedIn being null is falsy.
    if (token && step === CheckoutStep.SIGN_IN) {
      // Create a new order and direct them straight to /checkout/[token]
      toCheckoutWithToken();
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

  const isPaymentProcessing = false;
  const submit = () => null;

  return (
    <LayoutWrapper
      router={router}
      pageProps={pageProps}
      headerProps={{ blank: true }}
    >
      <Contained maxWidth={UI.CHECKOUT_WIDTH_PX}>
        <div className="relative flex flex-col w-full mt-28 space-y-10">
          <CheckoutStepIndicator step={step} />

          <div className="flex justify-between w-full">
            <div
              style={{
                minWidth: `${UI.CHECKOUT_SPLIT_WIDTH_PX}px`,
              }}
              className="flex flex-col w-7/12 pb-24 space-y-4"
            >
              <Component {...pageProps} />
            </div>

            <div className="flex-grow w-5/12 pl-10">
              <CheckoutCard order={order}>
                <div className="">
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-base font-medium">
                        {order.experience.restaurant.name}
                        <br />
                        <p className="text-sm font-normal leading-tight text-gray-700">
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
                      <p className="font-medium">
                        £{order?.experience?.pricePerHeadGBP}
                      </p>
                    ) : null}
                  </div>
                </div>

                {step === CheckoutStep.PAYMENT ? (
                  <>
                    <div className="flex items-center justify-between leading-none text-sm text-gray-600">
                      <p className="">Date</p>
                      <p className="font-medium">
                        {DateTime.fromJSDate(order.bookedFor).toFormat(
                          'h:mm a, DD',
                        )}
                      </p>
                    </div>

                    <div className="flex items-center justify-between leading-none text-sm text-gray-600">
                      <p>
                        Book for {order.heads}{' '}
                        {order.heads === 1 ? 'person' : 'people'}
                      </p>
                      <p className="font-medium">£{'totalPrice'}</p>
                    </div>

                    <div className="flex items-center justify-between leading-none text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <p>Fees</p>
                        <Tooltip content="Card processing fees are 2.9% + 30p.">
                          <div className="flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 font-primary cursor-pointer">
                            i
                          </div>
                        </Tooltip>
                      </div>
                      <p className="font-medium">
                        £{formatCurrency(order.price.fees)}
                      </p>
                    </div>

                    {isDesktop && (
                      <>
                        {/* Promocodes are causing payment issues when our profit is <0.00. Disable for now. */}
                        {/* <PromoCodeInput initialOrder={order} /> */}

                        <hr className="bg-primary border-primary text-primary" />

                        <div className="flex items-center justify-between mb-1 space-x-2 font-medium">
                          <p>Total</p>
                          <p>£{formatCurrency(order.price.final)}</p>
                        </div>

                        <Button
                          wide
                          type="solid"
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
            </div>
          </div>
        </div>
      </Contained>
    </LayoutWrapper>
  );
}
