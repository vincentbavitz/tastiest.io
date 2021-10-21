import { GetServerSideProps } from 'next';
import { getOfferDestination, getRestaurantDestination } from 'utils/redirects';

/** Redirection takes two possible GET parameters
 * 1. ?offer=<offerId>
 * 2. ?restaurant=<restaurantURIName>
 */
export const getServerSideProps: GetServerSideProps = async context => {
  // No redirection given -- return to home.
  if (!context.query?.offer?.length && !context.query?.restaurant?.length) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  const requestUTMs = {
    utm_source: context.query.utm_source ?? null,
    utm_medium: context.query.utm_medium ?? null,
    utm_campaign: context.query.utm_campaign ?? null,
    utm_term: context.query.utm_term ?? null,
    utm_content: context.query.utm_content ?? null,
  };

  let url: URL;
  if (context.query?.offer?.length) {
    url = await getOfferDestination(String(context.query.offer));
  }

  if (context.query?.restaurant?.length) {
    url = await getRestaurantDestination(String(context.query.restaurant));
  }

  // No valid redirectsd found
  if (!url) {
    return { props: {}, redirect: '/' };
  }

  // Fill final URL with our incoming UTMS
  Object.entries(requestUTMs).map(([utm, value]) => {
    url.searchParams.set(utm, String(value));
  });

  return {
    props: {},
    redirect: {
      destination: url.href,
    },
  };
};

const Redirect = () => <></>;
export default Redirect;
