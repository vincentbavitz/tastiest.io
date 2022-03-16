import { CmsApi, ContentfulPost } from '@tastiest-io/tastiest-utils';
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

  return (
    <div className="relative">
      <Experience post={post} posts={[{}] as ContentfulPost[]} />

      {/* Overlay to prevent mouse events. */}
      <div style={{ zIndex: 100000 }} className="fixed inset-0"></div>

      {/* Preview overlay */}
      <div
        style={{ zIndex: 100000 }}
        className="fixed bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="bg-primary rounded-lg shadow-lg px-6 py-2 text-3xl text-light font-medium font-primary tracking-widest opacity-75">
          PREVIEW
        </div>
      </div>
    </div>
  );
};

PostPreview.layout = Layouts.EXPERIENCE;
export default PostPreview;
