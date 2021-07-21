import { CmsApi } from '@tastiest-io/tastiest-utils';
import { GetServerSideProps } from 'next';
import { BASE_URL } from 'utils/redirects';

export const getServerSideProps: GetServerSideProps = async context => {
  const restaurantId = context.params?.restaurant;

  const cmsApi = new CmsApi();
  const restaurant = await cmsApi.getRestaurantById(String(restaurantId));

  if (!restaurant) {
    return {
      props: {},
      redirect: BASE_URL,
    };
  }

  return {
    props: { restaurant },
  };
};

function RestaurantPage() {
  return <>sdfafsfihsdf</>;
}

export default RestaurantPage;
