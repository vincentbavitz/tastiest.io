import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import SearchBackdropDesktopSVG from '../assets/svgs/page/search_desktop.svg';
import SearchBackdropMobileSVG from '../assets/svgs/page/search_mobile.svg';
import client from '../client';
import { ArticlePreviewRow } from '../components/ArticlePreviewRow';
import { Contained } from '../components/Contained';
import { SectionTitle } from '../components/SectionTitle';
import { Title } from '../components/Title';
import { METADATA, SEARCH } from '../constants';
import { ScreenContext } from '../contexts/screen';
import { ISanityArticle } from '../types/article';
import { buildArticleInfo } from '../utils/article';
import { sanityPostQuery } from '../utils/search';

interface Props {
  sanityQuery: string;
  posts: ISanityArticle[];
  totalCount: number;
  currentPage: number;
}

interface ISanityPageResults {
  posts: ISanityArticle[];
  count: number;
}

function Search(props: Props) {
  const posts = props.posts.map(p => buildArticleInfo(p));

  // Show these options if the user is on this page without entering a query
  const recommendedOptions = <></>;

  const { isMobile } = useContext(ScreenContext);

  const router = useRouter();
  const [isLoading, setLoading] = useState(false); //State for loading indicator
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  // Since requests happens after chaning routes url ?page={n} we need to bind loading events
  // on the router change event.
  useEffect(() => {
    //Setting router event handlers after component is located
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);

  const paginationHandler = page => {
    const currentPath = router.pathname;

    //Copy current query to avoid its removing
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <div>
      <title>{METADATA.TITLE_SUFFIX}</title>

      <div className="relative w-full mt-6 mb-12">
        {isMobile ? (
          <>
            <SearchBackdropMobileSVG
              style={{
                width: '150%',
                transform: 'translateX(-18%)',
              }}
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <Title level={1} className="font-somatic text-primary">
                Search Results
              </Title>
            </div>
          </>
        ) : (
          <Contained>
            <SearchBackdropDesktopSVG className="w-full" />
            <div className="absolute inset-0 flex justify-center items-center">
              <Title level={1} className="font-somatic text-primary">
                Search Results
              </Title>
            </div>
          </Contained>
        )}
      </div>

      <Contained>
        <div className="flex flex-col space-y-8">
          {posts.map(post => (
            <ArticlePreviewRow {...post} />
          ))}
        </div>

        <div className="mobile:my-12 my-8">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            activeClassName={'active'}
            containerClassName={'pagination'}
            subContainerClassName={'bg-red-300'}
            initialPage={props.currentPage - 1}
            pageCount={props.totalCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={paginationHandler}
          />
        </div>

        <div>
          <SectionTitle>Didn't find what you were looking for?</SectionTitle>

          {/*  */}
        </div>
      </Contained>
    </div>
  );
}

Search.getInitialProps = async ({ query }): Promise<Props> => {
  const page = query.page ?? 1;
  const { s: encodedSearchQuery } = query;
  const searchQuery = decodeURI(encodedSearchQuery);

  let posts: ISanityArticle[] = [];
  let totalCount = 0;

  const resultsStart = SEARCH.SEARCH_ITEMS_PER_PAGE * (page - 1);
  const resultsEnd = resultsStart + SEARCH.SEARCH_ITEMS_PER_PAGE;

  const specifier = `*[_type == "post" && (title match "*${searchQuery}*" || description match "${searchQuery}*" || restaurantName match "${searchQuery}*" || location match "${searchQuery}*" || dishName match "${searchQuery}*" || cuisine match "${searchQuery}*")]`;
  const sanityQuery = `
    *[][0]{
      "posts": ${specifier}[${resultsStart}..${resultsEnd}]{
        ${sanityPostQuery}
      },
      "count": count(${specifier})
    }
  `;

  if (searchQuery) {
    try {
      const results: ISanityPageResults = await client.fetch(sanityQuery);

      if (results?.posts?.length) {
        posts = results.posts;
        totalCount = results.count;
      }
    } catch (error) {
      console.warn('Error: ', error);
    }
  }

  return {
    posts,
    sanityQuery,
    totalCount,
    currentPage: page,
  };
};

export default Search;
