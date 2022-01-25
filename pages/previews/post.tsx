import { CmsApi, ExperiencePost } from '@tastiest-io/tastiest-utils';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Experience from 'pages/[city]/[cuisine]/[restaurant]/[slug]';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const environment = context.query.env as 'master' | 'development';
  const mappedEnvironment =
    environment === 'master' ? 'production' : environment;

  const slug = context.query.slug as string;

  if (!environment || !slug) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  const cms = new CmsApi(undefined, undefined, mappedEnvironment);
  const post = await cms.getPostBySlug(slug);

  if (!post) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      post,
    },
  };
};

const PostPreview = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { post } = props;

  return <Experience post={post} posts={[{}] as ExperiencePost[]} />;
};

PostPreview.layout = Layouts.EXPERIENCE;
export default PostPreview;
