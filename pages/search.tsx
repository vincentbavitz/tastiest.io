import groq from 'groq';
import React from 'react';
import client from '../client';
import { SEARCH } from '../constants';
import { ISanityArticle } from '../types/article';
import { sanityPostQuery } from '../utils/search';

interface Props {
  posts: ISanityArticle[];
  totalCount: number;
  currentPage: number;
}

function Search(props: Props) {
  // Show these options if the user is on this page without entering a query
  const recommendedOptions = <></>;

  console.log('qw', props);

  return <></>;
}

Search.getInitialProps = async ({ query }): Promise<Props> => {
  const page = query.page ?? 1;
  const { s: searchQuery } = query;

  let posts: ISanityArticle[];
  let results: ISanityArticle[];

  const resultsStart = SEARCH.SEARCH_ITEMS_PER_PAGE * (page - 1);
  const resultsEnd = resultsStart + SEARCH.SEARCH_ITEMS_PER_PAGE;

  const sanityQuery = groq`*[_type == "post" && (title match "${searchQuery}*" || description match "${searchQuery}*" || restaurantName match "${searchQuery}*" || location match "${searchQuery}*" || dishName match "${searchQuery}*" || cuisine match "${searchQuery}*")][${resultsStart}..${resultsEnd}] {
    ${sanityPostQuery}
  }`;

  if (!searchQuery) {
    posts = [];
  } else {
    try {
      results = await client.fetch(sanityQuery);
      if (results.length) {
        posts = results;
      }
    } catch (error) {
      console.warn('Error: ', error);
    }
  }

  return {
    posts,
    totalCount: posts?.length ?? 0,
    currentPage: page,
  };
};

export default Search;
