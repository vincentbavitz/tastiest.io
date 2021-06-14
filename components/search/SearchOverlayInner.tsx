import { Button } from '@tastiest-io/tastiest-components';
import {
  HotIcon,
  ItalianIcon,
  JapaneseIcon,
  LocationIcon,
  TrendingIcon,
  XiaoIcon,
} from '@tastiest-io/tastiest-icons';
import { dlog, SVG } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import { useScreenSize } from 'hooks/useScreenSize';
import { useRouter } from 'next/router';
import React from 'react';
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
  { name: 'Nearby', href: '/search?key=nearby', svg: LocationIcon },
  { name: 'Trending', href: '/search?key=trending', svg: TrendingIcon },
  { name: 'New!', href: '/search?key=new', svg: HotIcon },
];

const popularDishes: Array<IDynamicOptions> = [
  { name: 'Best Spaghetti', href: '/search?dish=spaghetti', svg: ItalianIcon },
  {
    name: 'Best Xiao Long Bao',
    href: '/search?dish=xiao-long-bao',
    svg: XiaoIcon,
  },
  { name: 'Best Sushi', href: '/search/?dish=sushi', svg: JapaneseIcon },
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
            className="flex items-center text-lg font-medium rounded-lg cursor-pointer text-primary font-roboto hover:bg-primary hover:bg-opacity-10"
          >
            <category.svg className="w-8 h-8 mr-2 tablet:h-5 tablet:w-5" />
            <p className="text-xl mobile:text-base">{category.name}</p>
          </div>
        ))}
      </div>

      {/* CUISINES */}
      <div className="flex flex-col mt-6">
        <span className="ml-1 font-medium tracking-wide text-black tablet:text-sm">
          Find your next favourite dish!
        </span>

        <div className="flex flex-wrap">
          {/* Get 5 most popular cuisines */}
          {Object.values(CUISINES)
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 5)
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
        <span className="ml-1 text-sm font-semibold tracking-wide text-black">
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

  return (
    <div
      className={classNames('flex flex-col mt-4', [
        !isDesktop ? 'px-0' : 'px-4',
      ])}
    >
      No results found. Would you like to suggest a dish?
      <Button>Suggest</Button>
      <div className="w-full h-px mt-2 bg-red-500 bg-opacity-25"></div>
    </div>
  );
}
