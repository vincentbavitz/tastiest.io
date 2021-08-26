// [slug].js
import { CmsApi, dlog, IPost } from '@tastiest-io/tastiest-utils';
import { ArticleSuggestRestaurant } from 'components/article/ArticleSuggestRestaurant';
import RecommendedPosts from 'components/sections/RecommendedPosts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ProductJsonLd } from 'next-seo';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Article } from '../../../../components/article/Article';
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cms = new CmsApi();

  const post = await cms.getPostBySlug(String(params?.slug) ?? '');
  dlog(`Building page: %c${params.slug}`, 'color: purple;');

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      ...post,
    },
    revalidate: 360,
  };
};

const cms = new CmsApi();

function Post(post: IPost) {
  const { title } = post;

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
        productName="Executive Anvil"
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg',
        ]}
        description="Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height."
        brand="ACME"
        color="blue"
        manufacturerName="Gary Meehan"
        manufacturerLogo="https://www.example.com/photos/logo.jpg"
        material="steel"
        slogan="For the business traveller looking for something to drop from a height."
        disambiguatingDescription="Executive Anvil, perfect for the business traveller."
        releaseDate="2014-02-05T08:00:00+08:00"
        productionDate="2015-02-05T08:00:00+08:00"
        purchaseDate="2015-02-06T08:00:00+08:00"
        award="Best Executive Anvil Award."
        reviews={[
          {
            author: {
              type: 'Person',
              name: 'Jim',
            },
            datePublished: '2017-01-06T03:37:40Z',
            reviewBody:
              'This is my favorite product yet! Thanks Nate for the example products and reviews.',
            name: 'So awesome!!!',
            reviewRating: {
              bestRating: '5',
              ratingValue: '5',
              worstRating: '1',
            },
            publisher: {
              type: 'Organization',
              name: 'TwoVit',
            },
          },
        ]}
        aggregateRating={{
          ratingValue: '4.4',
          reviewCount: '89',
        }}
        offers={[
          {
            price: '119.99',
            priceCurrency: 'USD',
            priceValidUntil: '2020-11-05',
            itemCondition: 'https://schema.org/UsedCondition',
            availability: 'https://schema.org/InStock',
            url: 'https://www.example.com/executive-anvil',
            seller: {
              name: 'Executive Objects',
            },
          },
          {
            price: '139.99',
            priceCurrency: 'CAD',
            priceValidUntil: '2020-09-05',
            itemCondition: 'https://schema.org/UsedCondition',
            availability: 'https://schema.org/InStock',
            url: 'https://www.example.ca/executive-anvil',
            seller: {
              name: 'Executive Objects',
            },
          },
        ]}
        mpn="925872"
      />

      <Article {...post} />
      <ArticleSuggestRestaurant {...post} />

      <div className="pb-20">
        <RecommendedPosts
          label="You might also like"
          posts={recommendedPosts}
          rowLimit={1}
        />
      </div>
    </>
  );
}

export default Post;
