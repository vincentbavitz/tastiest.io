import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async context => {
  const restaurant = context.params?.restaurant;
  const city = context.params?.city;

  // Redirect if user went to /city/restaurant/cuisine
  // to /city/restaurant
  return {
    props: {},
    redirect: {
      destination: `/${city}/restaurant/${restaurant}`,
      permanent: false,
    },
  };
};

function RestaurantCuisineRedirect() {
  return <>sdfafsfihsdf</>;
}

export default RestaurantCuisineRedirect;
