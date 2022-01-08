import { CloseOutlined } from '@ant-design/icons';
import { CmsApi, ExperiencePost } from '@tastiest-io/tastiest-utils';
import ExperienceOrderPanelInner from 'components/article/widgets/ExperienceOrderPanelInner';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import { Layouts } from 'layouts/LayoutHandler';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { NextSeo, ProductJsonLd } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { generateTitle } from 'utils/metadata';
import { generateStaticURL } from 'utils/routing';

interface IPath {
  params: {
    slug: string;
    city: string;
    cuisine: string;
    restaurant: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cms = new CmsApi(
    undefined,
    undefined,
    process.env.NODE_ENV as 'production' | 'development',
  );

  let posts: ExperiencePost[] = [];
  let page = 1;
  let foundAllPosts = false;

  // Contentful only allows 100 at a time
  while (!foundAllPosts) {
    const { posts: _posts } = await cms.getPosts(100, page);

    if (_posts.length === 0) {
      foundAllPosts = true;
      continue;
    }

    posts = [...posts, ..._posts];
    page++;
  }

  const paths: IPath[] = posts.map(item => ({
    params: {
      slug: item.slug,
      city: item.city.toLowerCase(),
      cuisine: item.cuisine.toLowerCase(),
      restaurant: item.restaurant.uriName.toLowerCase(),
    },
  }));

  // Blocking ensures that if the path isn't cached,
  // we build it before serving.
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
  const cms = new CmsApi(
    undefined,
    undefined,
    process.env.NODE_ENV as 'production' | 'development',
  );

  // Get all deals from this restaurants
  const { posts } = await cms.getPostsOfRestaurant(params.restaurant);
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      props: {
        post: (null as never) as ExperiencePost,
        posts: (null as never) as ExperiencePost[],
      },
      notFound: true,
    };
  }

  return {
    props: {
      post,
      posts,
    },
    revalidate: 360,
  };
};

/** Used as a mobile overlay when they click 'GET IT' */
function Continue(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { post, posts } = props;
  const { title, restaurant } = post;

  const { isDesktop } = useScreenSize();
  const router = useRouter();

  const experienceHref = useMemo(
    () =>
      generateStaticURL({
        city: restaurant.city,
        cuisine: restaurant.cuisine,
        restaurant: restaurant.uriName,
        slug: post.slug,
      }).as,
    [],
  );

  // Preload the experience page
  useEffect(() => {
    router.prefetch('/checkout');
    router.prefetch(experienceHref);
  }, []);

  // If on desktop, this page shouldn't exist.
  useEffect(() => {
    if (isDesktop) {
      router.push(experienceHref);
    }
  }, [isDesktop]);

  return (
    <>
      <Head>
        <title>{generateTitle(title)}</title>
      </Head>

      <ProductJsonLd
        productName={post.deal.name}
        images={[post.deal.image.url]}
        description={post.description}
        slogan={post.deal.tagline}
        offers={[
          {
            price: post.deal.pricePerHeadGBP.toFixed(2),
            priceCurrency: 'GBP',
            seller: { name: post.restaurant.name },
            url: generateStaticURL({
              city: restaurant.city,
              cuisine: restaurant.cuisine,
              restaurant: restaurant.uriName,
            }).as,
          },
        ]}
      />

      <NextSeo
        title={generateTitle(title)}
        description={post.meta.description}
        openGraph={{
          title: generateTitle(title),
          description: post.meta.description,
          images: [
            {
              url: post.meta?.image?.url,
              width: 1200,
              height: 630,
              alt: post.meta.image.description,
            },
          ],
        }}
      />

      <div className="fixed inset-0 flex flex-col justify-between">
        <Contained>
          <div className="flex justify-between items-center h-14">
            <div className="flex-1"></div>

            <div className="flex-1 flex justify-center font-medium text-dark text-2xl">
              Get the offer
            </div>

            <div className="flex-1 flex items-center justify-end">
              <Link href={experienceHref}>
                <a>
                  <CloseOutlined className="text-2xl" />
                </a>
              </Link>
            </div>
          </div>
        </Contained>

        <div className="relative flex-grow overflow-hidden mt-4 mb-4">
          <div className="flex justify-center w-full">
            <div
              style={{ width: '100%', maxWidth: '33rem' }}
              className="relative rounded-lg bg-transparent px-4 overflow-hidden"
            >
              <img
                src={`${post.deal?.image?.url}?w=700`}
                style={{ maxHeight: '15rem' }}
                className="h-full w-full rounded-lg object-cover"
              />

              <h3 className="font-medium text-lg pt-3">{post.title}</h3>
            </div>
          </div>
        </div>

        <div
          className="pt-6"
          style={{ boxShadow: 'inset 0px 15px 15px -15px rgba(0,0,0,0.08)' }}
        >
          <ExperienceOrderPanelInner
            layout="overlay"
            posts={posts}
            deal={post.deal}
            slug={post.slug}
          />
        </div>
      </div>
    </>
  );
}

Continue.layout = Layouts.BLANK;
export default Continue;
