import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input } from '@tastiest-io/tastiest-components';
import { CheckIcon, HotIcon, TrendingIcon } from '@tastiest-io/tastiest-icons';
import { dlog, SVG } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import { ArticleCardSearchResult } from 'components/cards/ArticleCardSearchResult';
import RestaurantCardSearchResult from 'components/cards/RestaurantCardSearchResult';
import TastiestDishCardSearchResult from 'components/cards/TastiestDishCardSearchResult';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { InputGroup } from 'components/inputs/InputGroup';
import { useFeedback } from 'hooks/useFeedback';
import { useScreenSize } from 'hooks/useScreenSize';
import { useRouter } from 'next/router';
import { ThumbsUpIllustration } from 'public/assets/illustrations';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { generateStaticURL } from 'utils/routing';
import { CUISINES } from '../../constants';
import { useSearch } from '../../hooks/useSearch';
import { IState } from '../../state/reducers';
import { OutlineBlock } from '../OutlineBlock';

interface IDynamicOptions {
  name: string;
  href: string;
  svg: SVG;
}

const dynamicCategories: Array<IDynamicOptions> = [
  // { name: 'Nearby', href: '/search?m=nearby', svg: LocationIcon },
  { name: 'Trending', href: '/search?m=trending', svg: TrendingIcon },
  { name: 'New!', href: '/search?m=new', svg: HotIcon },
];

export function SearchOverlayInner() {
  const { results, query, isSearching } = useSearch();

  const hasResults =
    results?.posts?.length ||
    results?.dishes?.length ||
    results?.restaurants?.length;

  // Render conditionals
  const renderSearchResults = Boolean(query.length > 0 && hasResults);
  const renderSearchNoResults =
    query?.length > 0 && !isSearching && !hasResults;
  const renderSearchDefaltTemplate =
    !renderSearchResults && !renderSearchNoResults;

  const { isDesktop } = useScreenSize();

  return (
    <>
      <div className={classNames('w-full', !isDesktop ? 'px-0' : 'px-4')}>
        <div className="border-t-2 border-opacity-50 border-secondary"></div>
      </div>

      {renderSearchResults && <SearchOverlayInnerResults />}
      {renderSearchNoResults && <SearchOverlayInnerNoResults />}
      {renderSearchDefaltTemplate && <SearchOverlayInnerDefault />}
    </>
  );
}

function SearchOverlayInnerDefault() {
  const { searchBarPinnedToHeader } = useSelector(
    (state: IState) => state.search,
  );

  const { isDesktop } = useScreenSize();
  const router = useRouter();

  return (
    <div
      className={classNames(
        'w-full px-4',
        !isDesktop && 'flex flex-col h-full justify-between',
      )}
    >
      {/* FEATURED DYNAMIC CATEGORIES */}
      <div className="flex flex-col mt-4 space-y-1">
        {dynamicCategories.map(category => (
          <div
            key={category.name.toLowerCase()}
            onClick={() => router.push(category.href)}
            className="flex items-center px-2 py-1 text-lg font-medium rounded-lg cursor-pointer text-primary font-secondary hover:bg-secondary-1 hover:bg-opacity-10"
          >
            <category.svg className="w-6 h-6 mr-2 fill-current tablet:h-5 tablet:w-5" />
            <p className="text-xl text-alt-1 mobile:text-base">
              {category.name}
            </p>
          </div>
        ))}
      </div>

      {/* CUISINES */}
      <div className="flex flex-col mt-6">
        <span className="ml-1 font-medium tracking-wide text-alt-1 tablet:text-sm">
          Find your next favourite dish!
        </span>

        <div className="flex flex-wrap">
          {/* Get 5 most popular cuisines */}
          {Object.values(CUISINES)
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 4)
            .map(cuisine => (
              <div key={cuisine.name.toLowerCase()} className="mt-2 mr-2">
                <OutlineBlock
                  href={
                    generateStaticURL({
                      city: 'london',
                      cuisine: cuisine.name,
                    }).as
                  }
                  size={isDesktop && searchBarPinnedToHeader ? 'tiny' : 'small'}
                  className="font-medium"
                  key={cuisine.name}
                >
                  {cuisine.name}
                </OutlineBlock>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function SearchOverlayInnerResults() {
  const { results, query } = useSearch();
  const { isDesktop } = useScreenSize();
  const router = useRouter();

  const numResults =
    results?.posts?.length ??
    0 + results?.dishes?.length ??
    0 + results?.restaurants?.length ??
    0;

  return (
    <>
      <div
        className={clsx(
          'flex flex-col space-y-4 px-4',
          isDesktop ? 'px-4 mt-6' : 'mt-10 px-0',
        )}
      >
        {results?.dishes?.length ? (
          <div>
            <h4 className="pb-2 text-lg font-primary">Dishes</h4>

            <div
              style={{
                filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,0.20))',
              }}
            >
              <HorizontalScrollable noPadding spacing={2} chevronSize={6}>
                {results?.dishes.map(dish => (
                  <div
                    key={dish.id.toLowerCase()}
                    style={{ minWidth: '150px' }}
                    className="h-full"
                  >
                    <TastiestDishCardSearchResult {...dish} />
                  </div>
                ))}
              </HorizontalScrollable>
            </div>
          </div>
        ) : null}

        {results?.posts?.length ? (
          <div>
            <h4 className="pb-2 text-lg font-primary">Offers</h4>

            <div
              style={{
                filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,0.20))',
              }}
            >
              <HorizontalScrollable noPadding spacing={2} chevronSize={6}>
                {results?.posts.map(post => (
                  <div
                    key={post.id.toLowerCase()}
                    style={{ minWidth: '150px' }}
                    className="h-full"
                  >
                    <ArticleCardSearchResult {...post} />
                  </div>
                ))}
              </HorizontalScrollable>
            </div>
          </div>
        ) : null}

        {results?.restaurants?.length ? (
          <div>
            <h4 className="pb-2 text-lg font-primary">Restaurants</h4>

            <div
              style={{
                filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,0.20))',
              }}
            >
              <HorizontalScrollable noPadding spacing={2} chevronSize={6}>
                {results?.restaurants.map(restaurant => (
                  <div
                    key={restaurant.id.toLowerCase()}
                    style={{ minWidth: '150px' }}
                    className="h-full"
                  >
                    <RestaurantCardSearchResult {...restaurant} />
                  </div>
                ))}
              </HorizontalScrollable>
            </div>
          </div>
        ) : null}
      </div>

      {numResults > 0 ? (
        <div
          className={classNames(
            'flex w-full pt-6 justify-center px-6',
            !isDesktop ? 'mb-6' : 'mb-0',
          )}
        >
          <Button
            color="primary"
            size={!isDesktop ? 'medium' : 'small'}
            onClick={() =>
              router.push({
                pathname: '/search',
                query: { s: query },
              })
            }
          >
            See all results
          </Button>
        </div>
      ) : null}
    </>
  );
}

function SearchOverlayInnerNoResults() {
  const { isDesktop } = useScreenSize();
  const { searchOverlayExpanded } = useSelector(
    (state: IState) => state.navigation,
  );

  const { query, isSearching, results } = useSearch();

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [suggestionInputOpen, setSuggestionInputOpen] = useState(false);
  const [suggestionQuery, setSuggestionQuery] = useState(query);

  const { makeRecommendation, isSubmitting } = useFeedback();

  // Suggestion query should autofill with search query data.
  useEffect(() => {
    setSuggestionQuery(query);
  }, [query]);

  // Reset state when modal opens or closes.
  useEffect(() => {
    setHasSubmitted(false);
    setSuggestionInputOpen(false);
    setSuggestionQuery(query);
  }, [searchOverlayExpanded, query]);

  const sendSuggestion = async () => {
    if (isSubmitting) {
      return;
    }

    const { success: hasSubmitted } = await makeRecommendation(false, {
      userGivenDish: suggestionQuery,
    });

    setHasSubmitted(hasSubmitted);
  };

  const hasResults =
    results?.posts?.length ||
    results?.dishes?.length ||
    results?.restaurants?.length;

  const renderSubmitted = hasSubmitted;
  const renderDefault = !hasSubmitted && !isSearching && !hasResults;
  const renderLoading = isSearching && !hasResults;

  dlog('SearchOverlayInner ➡️ results:', results);

  return (
    <div
      className={clsx(
        'flex flex-col items-center',
        !isDesktop ? 'px-0' : 'px-4',
        hasSubmitted ? 'mt-3' : 'mt-6',
      )}
    >
      {renderSubmitted && (
        <div className="flex items-center">
          <ThumbsUpIllustration className="h-24 -ml-10" />

          <h4 className="pl-4 text-xl font-primary text-primary">Thanks!</h4>
        </div>
      )}

      {renderLoading && (
        <div className="flex justify-center w-full py-6">
          <LoadingOutlined className="text-2xl text-primary" />
        </div>
      )}

      {renderDefault && (
        <div className="pb-2">
          <p className="pb-2">No results found. Suggest a dish?</p>

          <div className="flex justify-center w-full px-1">
            {suggestionInputOpen ? (
              <div className="flex-grow">
                <InputGroup>
                  <Input
                    value={suggestionQuery}
                    onValueChange={setSuggestionQuery}
                  />
                  <Button onClick={sendSuggestion}>
                    {isSubmitting ? (
                      <LoadingOutlined className="w-5 text-xl text-white" />
                    ) : (
                      <CheckIcon className="w-5 h-3 text-white fill-current" />
                    )}
                  </Button>
                </InputGroup>
              </div>
            ) : (
              <Button onClick={() => setSuggestionInputOpen(true)}>
                Suggest
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
