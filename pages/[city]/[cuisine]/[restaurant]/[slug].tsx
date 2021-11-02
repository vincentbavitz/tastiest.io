// [slug].js
import { CmsApi, dlog, IPost } from '@tastiest-io/tastiest-utils';
import { ArticleSectionContent } from 'components/article/sections/ArticleSectionContent';
import { YouTubeVideo } from 'components/YouTubeVideo';
import { Layouts } from 'layouts/LayoutHandler';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { NextSeo, ProductJsonLd } from 'next-seo';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
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
  const cms = new CmsApi();
  let posts: IPost[] = [];
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
  const { posts } = await cms.getPostsOfRestaurant(params.restaurant.uriName);
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      props: {
        post: (null as never) as IPost,
        posts: (null as never) as IPost[],
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

const cms = new CmsApi();

function Experience(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { post, posts } = props;
  const { title, restaurant } = post;

  // Get recommended posts
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  useEffect(() => {
    dlog('[slug] ➡️ recommendedPosts:', recommendedPosts);
    cms.getTopPosts(8).then(result => setRecommendedPosts(result?.posts));
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
        description={post.description}
        openGraph={{
          title: generateTitle(title),
          description: post.description,
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

      <div className="relative w-full">
        <div className="pb-10">
          <h4 className="pb-2 text-2xl">The Experience</h4>
          <p className="">{post.description}</p>
        </div>

        <YouTubeVideo url={post.video} />
      </div>

      <ArticleSectionContent {...post} />
    </>
  );
}

Experience.layout = Layouts.EXPERIENCE;
export default Experience;
