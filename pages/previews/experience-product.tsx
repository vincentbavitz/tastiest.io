import { CmsApi, ExperienceProduct } from '@tastiest-io/tastiest-utils';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const environment = context.query.env as 'master' | 'development';
  const mappedEnvironment =
    environment === 'master' ? 'production' : environment;

  const id = context.query.id as string;

  if (!environment || !id) {
    return {
      props: { experienceProduct: null as ExperienceProduct },
      redirect: {
        destination: '/',
      },
    };
  }

  const cms = new CmsApi(undefined, undefined, mappedEnvironment);
  const experienceProduct = await cms.getDeal(id);

  if (!experienceProduct) {
    return {
      props: { experienceProduct: null as ExperienceProduct },
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      experienceProduct,
    },
  };
};

const ExperienceProductPreview = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { experienceProduct } = props;

  return <div>{experienceProduct}</div>;
};

export default ExperienceProductPreview;
