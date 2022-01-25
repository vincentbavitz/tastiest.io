import { CloseOutlined } from '@ant-design/icons';
import { CmsApi, ExperiencePost } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import ExperienceOrderPanelInner from 'components/article/widgets/ExperienceOrderPanelInner';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import { DESKTOP_LAYOUT_BREAKPOINT_PX } from 'layouts/LayoutExperience';
import { Layouts } from 'layouts/LayoutHandler';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { NextSeo, ProductJsonLd } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
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
  const cms = new CmsApi();

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
  const cms = new CmsApi();

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

  const { width: screenWidth, isMobile } = useScreenSize();
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
    if (screenWidth > DESKTOP_LAYOUT_BREAKPOINT_PX) {
      router.push(experienceHref);
    }
  }, [screenWidth]);

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

            <div className="flex-1 flex justify-center font-medium text-dark text-2xl whitespace-nowrap">
              Book experience
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

        <div
          className={clsx(
            'relative flex justify-center flex-grow overflow-hidden mb-4',
            !isMobile && 'mt-4',
          )}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '33rem',
              minHeight: isMobile ? '100%' : 'unset',
              height: isMobile ? 'unset' : '15rem',
            }}
            className={clsx(
              'relative bg-transparent px-4 overflow-hidden',
              isMobile ? '-mx-1' : 'rounded-lg',
            )}
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={`${post.deal?.image?.url}?w=700`}
            />
          </div>
        </div>

        <Contained>
          <h3 className="text-center font-medium text-lg mb-2 leading-7">
            {post.title}
          </h3>
        </Contained>

        <div
          className="pt-6 pb-16"
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
