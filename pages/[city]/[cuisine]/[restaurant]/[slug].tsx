import { CmsApi, dlog, ExperiencePost } from '@tastiest-io/tastiest-utils';
import { ArticleSectionContent } from 'components/article/sections/ArticleSectionContent';
import { useTrack } from 'hooks/useTrack';
import { Layouts } from 'layouts/LayoutHandler';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { NextSeo, ProductJsonLd } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { generateStaticURL } from 'utils/routing';
import { generateTitle } from '../../../../utils/metadata';

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

function Experience(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const cms = useMemo(
    () =>
      new CmsApi(
        undefined,
        undefined,
        process.env.NODE_ENV as 'production' | 'development',
      ),
    [],
  );

  const { post, posts } = props;
  const { title, restaurant } = post;

  const router = useRouter();
  const { track } = useTrack();

  // Get recommended posts
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  useEffect(() => {
    dlog('[slug] ➡️ recommendedPosts:', recommendedPosts);
    cms.getTopPosts(8).then(result => setRecommendedPosts(result?.posts));
  }, []);

  // Preload the checkout page
  useEffect(() => {
    router.prefetch('/checkout');
  }, []);

  useEffect(() => {
    track('Product Viewed', {
      ...post,
    });
  }, []);

  // const segmentYouTubeSnippet = `
  //     var player;
  //   function onYouTubeIframeAPIReady() {
  //     player = new YT.Player('player', {
  //       videoId: '${post.video}'
  //     });
  //     var ytAnalytics = new window.analyticsPlugins.YT(player, 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX0365');
  //     ytAnalytics.initialize();
  //   }
  // `;

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

      <ArticleSectionContent {...post} />
    </>
  );
}

Experience.layout = Layouts.EXPERIENCE;
export default Experience;
