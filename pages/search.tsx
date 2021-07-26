import {
  CMS,
  CmsApi,
  dlog,
  FirestoreCollection,
  IOrder,
  IPost,
} from '@tastiest-io/tastiest-utils';
import { ArticleCardRow } from 'components/cards/ArticleCardRow';
import { Contained } from 'components/Contained';
import RecommendedPosts from 'components/sections/RecommendedPosts';
import { SuggestRestaurant } from 'components/SuggestRestaurant';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { SearchHeroDesktop, SearchHeroMobile } from 'public/assets/page';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { db } from 'utils/firebaseAdmin';
import { METADATA, SEARCH } from '../constants';

type ModifierKey = 'new' | 'nearby' | 'trending';

interface Props {
  posts: IPost[];
  totalCount: number;
  currentPage: number;

  // Display at the bottom; 'You might also like'...
  topPosts: IPost[];
  modifier: ModifierKey | null;
}

// Search client side to keep page load times down.
export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
  const cms = new CmsApi();
  const page = Number(context.query.page ?? 1);
  const modifier = context.query.m as ModifierKey | undefined;

  // ////////////////////////////// //
  //  Keys (new, nearby, trending)  //
  // ////////////////////////////// //
  if (modifier === 'new') {
    const { posts = [], total: totalCount = 0 } = await cms.getPosts(
      CMS.BLOG_RESULTS_PER_PAGE,
      page,
    );

    const { posts: topPosts } = await cms.getTopPosts(6);
    const props: Props = {
      posts,
      topPosts,
      totalCount,
      currentPage: page,
      modifier: 'new',
    };

    return { props };
  }

  if (modifier === 'trending') {
    // Get the most popular posts from last 100 orders
    const ordersSnapshot = await db(FirestoreCollection.ORDERS)
      .limit(100)
      .get();

    const orders = ordersSnapshot.docs?.map(doc => doc.data() as IOrder);

    // Tally orders by most to least popular from dealId
    const sortedDeals: { [dealId: string]: number } = {};
    orders.forEach(o => (sortedDeals[o.deal.id] = 0));
    orders.forEach(o => (sortedDeals[o.deal.id] += 1));

    const unsortedPosts = await Promise.all(
      Object.entries(sortedDeals).map(async ([dealId, popularity]) => {
        const post = await cms.getPostByDealId(dealId);

        return {
          post,
          popularity,
        };
      }),
    );

    const posts = unsortedPosts
      .sort((a, b) => b.popularity - a.popularity)
      .map(item => item.post)
      .filter(p => Boolean(p))
      .slice(0, CMS.BLOG_RESULTS_PER_PAGE);

    const { posts: topPosts } = await cms.getTopPosts(6);
    const props: Props = {
      posts,
      topPosts,
      currentPage: 0,
      totalCount: posts.length,
      modifier: 'trending',
    };

    // Return only BLOG_RESULTS_PER_PAGE to maintain a single page.
    return { props };
  }

  const { s: encodedSearchQuery } = context.query;
  const searchQuery = decodeURI(String(encodedSearchQuery));

  const { posts = [], total: totalCount = 0 } = await cms.searchPosts(
    searchQuery,
    CMS.BLOG_RESULTS_PER_PAGE,
    page,
  );

  const { posts: topPosts } = await cms.getTopPosts(posts.length ? 6 : 12);
  const props: Props = {
    posts,
    topPosts,
    totalCount,
    modifier: null,
    currentPage: page,
  };

  return {
    props,
  };
};

const Search = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { posts, topPosts, totalCount, currentPage, modifier } = props;

  const router = useRouter();
  const { isDesktop } = useScreenSize();

  const paginationHandler = page => {
    const currentPath = router.pathname;

    // Copy current query to avoid its removing
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  //
  // USING QUERY          ?s=
  // OR USING CATEGORY?   ?tags=
  // USING MODIFIER       ?m=
  //

  const pageCount = Math.ceil(totalCount / SEARCH.SEARCH_ITEMS_PER_PAGE);
  const showPagination = posts.length > 0 && pageCount > 1;

  dlog('search ➡️ key:', modifier);

  // prettier-ignore
  const pageLabel = 
    modifier === 'new' ? 'New Offers' :
    modifier === 'nearby' ? 'Nearby Offers' :
    modifier === 'trending' ? 'Trending Offers' :
    posts.length > 0 ? 'Search Results' :
    'Nothing Found';

  return (
    <div>
      <title>{METADATA.TITLE_SUFFIX}</title>

      <div className="relative w-full mt-6 mb-12">
        {!isDesktop ? (
          <>
            <SearchHeroMobile
              style={{
                width: '150%',
                transform: 'translateX(-18%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-2xl text-thin font-somatic text-primary">
                {pageLabel}
              </h1>
            </div>
          </>
        ) : (
          <Contained>
            <SearchHeroDesktop className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-2xl font-somatic text-primary">
                {pageLabel}
              </h1>
            </div>
          </Contained>
        )}
      </div>

      <Contained>
        <div className="flex flex-col space-y-8">
          {posts.map(post => (
            <ArticleCardRow key={post.slug} {...post} />
          ))}
        </div>

        {showPagination && (
          <div className="mt-8 mobile:mt-12">
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              activeClassName={'active'}
              containerClassName={'pagination'}
              subContainerClassName={''}
              initialPage={currentPage - 1}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={paginationHandler}
            />
          </div>
        )}
      </Contained>

      <div className="pt-20 mb-12">
        <RecommendedPosts
          label="Didn't find what you were looking for?"
          posts={topPosts}
          rowLimit={posts.length ? 1 : 2}
        ></RecommendedPosts>
      </div>

      <SuggestRestaurant />
    </div>
  );
};

export default Search;
