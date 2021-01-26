import groq from 'groq';
import { useDispatch, useSelector } from 'react-redux';
import client from '../client';
import { IState } from '../state/reducers';
import { setSearchResultItems } from '../state/search';
import { ISanityArticle } from '../types/article';
import { IRecentSearch, UserData } from '../types/firebase';
import { useAuth } from './useAuth';
import { useUserData } from './useUserData';

export const sanityPostQuery = `
"id": _id,
"updatedAt": _updatedAt,
title,
subtitle,
body,
publishedAt,
restaurantName,
dishName,
"backdropSVG": backdropSVG.asset->url,
"video": {"link": video.link, "description": video.description},
"location": {"lat": location.lat, "lng": location.lng},
"author": {"name": author->name, "imageSrc": author->image.asset->url },
"featureImage": {"source": featureImage.image.asset->url, "altText": featureImage.altText, "description": featureImage.description },
"cuisine": cuisine->title,
"city": city->title,
"tags": tags[]->title,
"slug": slug.current,
`;

export function useSearch() {
  const { user } = useAuth();
  const { userData, setUserData } = useUserData();
  const searchState = useSelector<IState>(state => state.search);
  const results = searchState?.searchResultItems ?? [];
  const query = searchState.searchQuery ?? '';
  const dispatch = useDispatch();

  // const throttledSetSearchResultItems = _.debounce(
  //   (items: ISanityArticle[]) => dispatch(setSearchResultItems(items)),
  //   100,
  // );

  const search = async (query: string): Promise<Array<ISanityArticle>> => {
    const sanityQuery = groq`*[_type == "post" && title match "${query}*"][0..5] {
      ${sanityPostQuery}
    }`;

    let posts: ISanityArticle[];
    try {
      posts = await client.fetch(sanityQuery);
    } catch (error) {
      console.warn('Error: ', error);
    }

    const results = posts?.filter(post =>
      // Ensure all values are present in each post
      Object.values(post).every(value => Boolean(value)),
    );
    // .map(post => ({
    //   ...post,
    // }));

    console.log('search ➡️ results:', results);

    // throttledSetSearchResultItems(results);
    dispatch(setSearchResultItems(results));
    return results;
  };

  const saveUserSearch = (query: string) => {
    // Save to Session

    // Save to user's file if logged in
    if (user?.uid) {
      const recentSearch: IRecentSearch = {
        query,
        timestamp: Date.now(),
      };

      setUserData(UserData.RECENT_SEARCHES, [
        ...(userData?.recentSearches ?? []),
        recentSearch,
      ]);
    }
  };

  return { search, saveUserSearch, query, results };
}
