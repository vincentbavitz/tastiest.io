import { CmsApi, ContentfulPost, dlog } from '@tastiest-io/tastiest-utils';
import { ArticleSectionContent } from 'components/article/sections/ArticleSectionContent';
import { useTrack } from 'hooks/useTrack';
import { Layouts } from 'layouts/LayoutHandler';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { NextSeo, ProductJsonLd } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleOfferMenu } from 'state/navigation';
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

  let posts: ContentfulPost[] = [];
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
      restaurant: item.restaurant.uri_name.toLowerCase(),
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
        post: (null as never) as ContentfulPost,
        posts: (null as never) as ContentfulPost[],
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
  const dispatch = useDispatch();

  const { post } = props;
  const { title, restaurant } = post;

  const router = useRouter();
  const { track } = useTrack();

  // Get recommended posts
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  useEffect(() => {
    dlog('[slug] ➡️ recommendedPosts:', recommendedPosts);
    const cms = new CmsApi();
    cms.getTopPosts(8).then(result => setRecommendedPosts(result?.posts));
  }, []);

  // Close menu from native back button presses on mobile
  useEffect(() => {
    dispatch(toggleOfferMenu(false));
  }, []);

  // Preload the checkout and continue page
  useEffect(() => {
    router.prefetch('/checkout');
    router.prefetch(
      `${
        generateStaticURL({
          city: restaurant.city,
          cuisine: restaurant.cuisine,
          restaurant: restaurant.uri_name,
          slug: post.slug,
        }).as
      }/continue`,
    );
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
        productName={post.product.name}
        images={[post.product.image.url]}
        description={post.description}
        offers={[
          {
            price: post.product.price.toFixed(2),
            priceCurrency: 'GBP',
            seller: { name: post.restaurant.name },
            url: generateStaticURL({
              city: restaurant.city,
              cuisine: restaurant.cuisine,
              restaurant: restaurant.uri_name,
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
