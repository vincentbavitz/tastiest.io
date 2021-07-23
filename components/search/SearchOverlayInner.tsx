import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input } from '@tastiest-io/tastiest-components';
import { CheckIcon, HotIcon, TrendingIcon } from '@tastiest-io/tastiest-icons';
import { dlog, SVG } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import { InputGroup } from 'components/inputs/InputGroup';
import { useFeedback } from 'hooks/useFeedback';
import { useScreenSize } from 'hooks/useScreenSize';
import { useRouter } from 'next/router';
import { ThumbsUpIllustration } from 'public/assets/illustrations';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CUISINES } from '../../constants';
import { useSearch } from '../../hooks/useSearch';
import { IState } from '../../state/reducers';
import { ArticleCard } from '../cards/ArticleCard';
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
  const searchState = useSelector((state: IState) => state.search);

  const renderSearchResults =
    searchState.searchQuery.length > 0 &&
    searchState.searchResultItems?.length > 0;

  const renderSearchDefaltTemplate =
    searchState?.searchQuery?.length === 0 ||
    (searchState?.searchQuery?.length > 0 &&
      searchState.searchResultItems?.length === 0);

  const renderSearchNoResults =
    searchState.searchQuery.length > 0 &&
    searchState?.searchResultItems?.length === 0;

  const { isDesktop } = useScreenSize();
  const router = useRouter();

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
            className="flex items-center px-2 py-1 text-lg font-medium rounded-lg cursor-pointer text-primary font-roboto hover:bg-secondary-1 hover:bg-opacity-10"
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
                  href={cuisine.href}
                  size={
                    !!isDesktop && searchBarPinnedToHeader ? 'tiny' : 'small'
                  }
                  className="font-medium"
                  key={cuisine.name}
                >
                  {cuisine.name}
                </OutlineBlock>
              </div>
            ))}
        </div>
      </div>

      {/* POPULAR DISHES
      <div className="flex flex-col mt-6">
        <span className="ml-1 text-sm font-semibold tracking-wide text-alt-1">
          Popular dishes
        </span>

        <div className="flex flex-col space-y-2 children:last:border-b-0">
          {popularDishes.map(dish => (
            <div
              key={dish.name.toLowerCase()}
              className="flex items-center w-full py-2 space-x-2 border-b border-secondary"
            >
              <dish.svg className="w-12 h-10" />
              <Link href={dish.href}>
                <a className="text-primary hover:underline">{dish.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

function SearchOverlayInnerResults() {
  const { results: allResults, query: searchQuery } = useSearch();
  const { isDesktop } = useScreenSize();
  const router = useRouter();

  // Sort results by popularity and filter down to four results
  dlog('Results', allResults);
  const results = allResults?.slice(0, 4);

  return (
    <>
      <div
        className={classNames('flex flex-wrap', [
          !isDesktop ? 'mt-10 px-0' : 'mt-6 px-4',
          `children:odd:${!isDesktop ? 'pr-4' : 'pr-2'}`,
          `children:even:${!isDesktop ? 'pl-4' : 'pl-2'}`,
        ])}
      >
        {results?.map(card => (
          <div key={card.id.toLowerCase()} className={classNames('w-1/2 mb-8')}>
            <ArticleCard compact {...card} />
          </div>
        ))}
      </div>
      <div
        className={classNames(
          'flex w-full justify-center px-6',
          !isDesktop ? 'mb-6' : 'mb-0',
        )}
      >
        <Button
          color="primary"
          size={!isDesktop ? 'medium' : 'small'}
          onClick={() =>
            router.push({
              pathname: '/search',
              query: { s: searchQuery },
            })
          }
        >
          See all results
        </Button>
      </div>
    </>
  );
}

function SearchOverlayInnerNoResults() {
  const { isDesktop } = useScreenSize();
  const searchState = useSelector((state: IState) => state.search);
  const { searchOverlayExpanded } = useSelector(
    (state: IState) => state.navigation,
  );

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [suggestionInputOpen, setSuggestionInputOpen] = useState(false);
  const [suggestionQuery, setSuggestionQuery] = useState(
    searchState.searchQuery,
  );

  const { makeRecommendation, isSubmitting } = useFeedback();

  // Suggestion query should autofill with search query data.
  useEffect(() => {
    setSuggestionQuery(searchState.searchQuery);
  }, [searchState.searchQuery]);

  // Reset state when modal opens or closes.
  useEffect(() => {
    setHasSubmitted(false);
    setSuggestionInputOpen(false);
    setSuggestionQuery(searchState.searchQuery);
  }, [searchOverlayExpanded, searchState.searchQuery]);

  const sendSuggestion = async () => {
    if (isSubmitting) {
      return;
    }

    const { success: hasSubmitted } = await makeRecommendation(false, {
      userGivenDish: suggestionQuery,
    });

    setHasSubmitted(hasSubmitted);
  };

  return (
    <div
      className={clsx(
        'flex flex-col items-center',
        !isDesktop ? 'px-0' : 'px-4',
        hasSubmitted ? 'mt-3' : 'mt-6',
      )}
    >
      {hasSubmitted ? (
        <div className="flex items-center">
          <ThumbsUpIllustration className="h-24 -ml-10" />

          <h4 className="pl-4 text-xl font-somatic text-primary">Thanks!</h4>
        </div>
      ) : (
        <>
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
        </>
      )}

      <div
        className={clsx(
          'w-full h-px bg-red-500 bg-opacity-25',
          hasSubmitted ? 'mt-3' : 'mt-6',
        )}
      ></div>
    </div>
  );
}
