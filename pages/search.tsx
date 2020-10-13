import React from 'react';
import client from '../client';
import { SEARCH } from '../constants';
import { ISanityArticle } from '../types/article';
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
  // Show these options if the user is on this page without entering a query
  const recommendedOptions = <></>;

  console.log('qw', props);

  console.log(`query`);

  return <> </>;
}

Search.getInitialProps = async ({ query }): Promise<Props> => {
  const page = query.page ?? 1;
  const { s: searchQuery } = query;

  let posts: ISanityArticle[] = [];
  let totalCount = 0;

  const resultsStart = SEARCH.SEARCH_ITEMS_PER_PAGE * (page - 1);
  const resultsEnd = resultsStart + SEARCH.SEARCH_ITEMS_PER_PAGE;

  const specifier = `*[_type == "post" && (title match "${searchQuery}*" || description match "${searchQuery}*" || restaurantName match "${searchQuery}*" || location match "${searchQuery}*" || dishName match "${searchQuery}*" || cuisine match "${searchQuery}*")]`;
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
