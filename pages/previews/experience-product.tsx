import {
  CmsApi,
  ExperiencePost,
  ExperienceProduct,
  Order,
} from '@tastiest-io/tastiest-utils';
import { ExperienceOrderPanelDesktop } from 'components/article/widgets/ExperienceOrderPanelDesktop';
import { CheckoutPaymentPanel } from 'components/checkout/CheckoutPaymentPanel';
import { Contained } from 'components/Contained';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { generateStaticURL } from 'utils/routing';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const environment = context.query.env as 'master' | 'development';
  const mappedEnvironment =
    environment === 'master' ? 'production' : environment;

  const id = context.query.id as string;

  if (!environment || !id) {
    return {
      props: {
        experienceProduct: null as ExperienceProduct,
        posts: [] as ExperiencePost[],
        slug: '',
      },
      redirect: {
        destination: '/',
      },
    };
  }

  const cms = new CmsApi(undefined, undefined, mappedEnvironment);

  const experienceProduct = await cms.getDeal(id);
  const post = await cms.getPostByDealId(id);

  if (!experienceProduct) {
    return {
      props: {
        experienceProduct: null as ExperienceProduct,
        posts: [] as ExperiencePost[],
        slug: '',
      },
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      experienceProduct,
      posts: [post],
      slug: post.slug,
    },
  };
};

const ExperienceProductPreview = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { experienceProduct, posts, slug } = props;

  const order: Order = {
    restaurantCut: null,
    createdAt: 1643141044816,
    fromSlug: slug,
    price: {
      fees: 2.04,
      final: 61.94,
      currency: 'GBP',
      subtotal: 59.9,
    },
    paidAt: null,
    paymentMethod: null,
    id: 'a69c2763-d2ba-444f-8d07-2dba0261d134',
    isUserFollowing: null,
    tastiestCut: null,
    userId: 'uEmkrFSIDoZmBadkIKP7upMMjUo2',
    promoCode: null,
    heads: 2,
    deal: experienceProduct,
    token: '4079f438-a337-449f-bf23-f805373a2922',
    abandonedAt: null,
    isTest: true,
    bookedForTimestamp: 1643425200000,
    paymentCard: null,
    refund: null,
    userFacingOrderId: '227069388',
  };

  return (
    <Contained>
      <div className="flex flex-wrap justify-evenly gap-20 py-16">
        <div>
          <h2 className="text-center text-2xl font-medium font-primary pb-10">
            Experience Page Sidebar
          </h2>

          <ExperienceOrderPanelDesktop
            deal={experienceProduct}
            posts={posts}
            slug={slug}
          />
        </div>

        <div>
          <h2 className="text-center text-2xl font-medium font-primary pb-10">
            Mobile Continue Page
          </h2>
          <div
            style={{ width: '20rem', height: '40rem' }}
            className="relative flex justify-center h-auto"
          >
            <Image
              layout="fill"
              objectFit="fill"
              src={'/assets/iphone-frame.png'}
              className="z-50"
            />

            <iframe
              title="Mobile continue page"
              src={
                generateStaticURL({
                  city: posts[0].restaurant.city,
                  cuisine: posts[0].restaurant.cuisine,
                  restaurant: posts[0].restaurant.uriName,
                  slug: posts[0].slug,
                }).as + '/continue'
              }
              className="absolute top-10 left-0 right-0 bottom-0 origin-top-left z-0 pointer-events-none"
              style={{
                WebkitTransform: 'scale(0.85) translateX(1.6rem)',
                width: '20.75rem',
                height: '42.75rem',
                marginLeft: '-0.1rem',
              }}
            />
          </div>
        </div>
      </div>

      <div className="border-4 border-b"></div>

      <div className="flex flex-wrap justify-evenly gap-20 py-16">
        <div>
          <h2 className="text-center text-2xl font-medium font-primary pb-10">
            Desktop Checkout Sidebar
          </h2>

          <div style={{ width: '18rem' }} className="pt-6">
            <CheckoutPaymentPanel
              order={order}
              submit={() => null}
              error={null}
            />
          </div>
        </div>

        <div>
          <h2 className="text-center text-2xl font-medium font-primary pb-10">
            Mobile Checkout Page
          </h2>
          <div
            style={{ width: '20rem', height: '40rem' }}
            className="relative flex justify-center h-auto"
          >
            <Image
              layout="fill"
              objectFit="fill"
              src={'/assets/iphone-frame.png'}
              className="z-50"
            />

            <iframe
              title="Mobile checkout page"
              src={`/checkout?token=${order.token}`}
              className="absolute top-10 left-0 right-0 bottom-0 origin-top-left z-0"
              style={{
                WebkitTransform: 'scale(0.75) translateX(1.6rem)',
                width: '23.5rem',
                height: '48.25rem',
                marginLeft: '-0.1rem',
              }}
            />
          </div>
        </div>
      </div>
    </Contained>
  );
};

ExperienceProductPreview.layout = Layouts.BLANK;
export default ExperienceProductPreview;
