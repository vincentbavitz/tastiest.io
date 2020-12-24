import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import SpaghettiSVG from '../../assets/svgs/cuisines/italian.svg';
import SushiSVG from '../../assets/svgs/cuisines/japanese.svg';
import XiaoSVG from '../../assets/svgs/cuisines/xiao.svg';
import NewSVG from '../../assets/svgs/hot.svg';
import NearbySVG from '../../assets/svgs/location.svg';
import TrendingSVG from '../../assets/svgs/trending.svg';
import { CUISINES } from '../../constants';
import { ScreenContext } from '../../contexts/screen';
import { IState } from '../../state/reducers';
import { SVG } from '../../types';
import { Button } from '../Button';
import { ArticleCard } from '../cards/ArticleCard';
import { OutlineBlock } from '../OutlineBlock';

interface IDynamicOptions {
  name: string;
  href: string;
  svg: SVG;
}

const dynamicCategories: Array<IDynamicOptions> = [
  { name: 'Nearby', href: '/search/nearby', svg: NearbySVG },
  { name: 'Trending', href: '/search/trending', svg: TrendingSVG },
  { name: 'New!', href: '/search/new', svg: NewSVG },
];

const popularDishes: Array<IDynamicOptions> = [
  { name: 'Best Spaghetti', href: '/search/best-spaghetti', svg: SpaghettiSVG },
  { name: 'Best Xiao Long Bao', href: '/search/best-xiao', svg: XiaoSVG },
  { name: 'Best Sushi', href: '/search/best-sushi', svg: SushiSVG },
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

  const { isMobile } = useContext(ScreenContext);
  const router = useRouter();

  return (
    <>
      <div className={classNames('w-full', isMobile ? 'px-0' : 'px-4')}>
        <div className="border-secondary border-opacity-50 border-t-2"></div>
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

  const { isMobile } = useContext(ScreenContext);
  const router = useRouter();

  return (
    <div
      className={classNames(
        'w-full px-4',
        isMobile && 'flex flex-col h-full justify-between',
      )}
    >
      {/* FEATURED DYNAMIC CATEGORIES */}
      <div className="flex flex-col space-y-1 mt-4">
        {dynamicCategories.map(category => (
          <div
            key={category.name.toLowerCase()}
            onClick={() => router.push(category.href)}
            className="flex items-center text-lg cursor-pointer text-primary font-roboto font-medium rounded-lg hover:bg-primary hover:bg-opacity-10"
          >
            <category.svg className="h-8 mr-2" />
            {category.name}
          </div>
        ))}
      </div>

      {/* CUISINES */}
      <div className="flex flex-col mt-6">
        <span className="text-black text-sm font-semibold tracking-wide ml-1">
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
                  onClick={() =>
                    router.push(`/search/?cuisine=${cuisine.href}`)
                  }
                  size={!isMobile && searchBarPinnedToHeader ? 'tiny' : 'small'}
                  className="font-medium"
                  key={cuisine.name}
                >
                  {cuisine.name}
                </OutlineBlock>
              </div>
            ))}
        </div>
      </div>

      {/* POPULAR DISHES */}
      <div className="flex flex-col mt-6">
        <span className="text-black text-sm font-semibold tracking-wide ml-1">
          Popular dishes
        </span>

        <div className="flex flex-col space-y-2 children:last:border-b-0">
          {popularDishes.map(dish => (
            <div
              key={dish.name.toLowerCase()}
              className="flex space-x-2 items-center w-full border-b border-secondary py-2"
            >
              <dish.svg className="h-10 w-12" />
              <span className="text-primary">{dish.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SearchOverlayInnerResults() {
  const searchState = useSelector((state: IState) => state.search);
  const allResults = searchState?.searchResultItems;

  const { isMobile } = useContext(ScreenContext);
  const router = useRouter();

  // Sort results by popularity and filter down to four results
  const results = allResults?.slice(0, 4);

  return (
    <>
      <div
        className={classNames('flex flex-wrap', [
          isMobile ? 'mt-10 px-0' : 'mt-6 px-4',
          `children:odd:${isMobile ? 'pr-4' : 'pr-2'}`,
          `children:even:${isMobile ? 'pl-4' : 'pl-2'}`,
        ])}
      >
        {results?.map(card => (
          <div key={card.id.toLowerCase()} className={classNames('w-1/2 mb-8')}>
            <ArticleCard {...card} />
          </div>
        ))}
      </div>
      <div
        className={classNames(
          'flex w-full justify-center px-6',
          isMobile ? 'mb-6' : 'mb-0',
        )}
      >
        <Button
          color="primary"
          size={isMobile ? 'medium' : 'small'}
          onClick={() =>
            router.push({
              pathname: '/search',
              query: { s: searchState.searchQuery },
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
  const { isMobile } = useContext(ScreenContext);

  return (
    <div
      className={classNames('flex flex-col mt-4', [isMobile ? 'px-0' : 'px-4'])}
    >
      No results found.
      <div className="w-full h-px bg-red-500 bg-opacity-25 mt-2"></div>
    </div>
  );
}
