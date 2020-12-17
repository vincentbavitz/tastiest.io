import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CUISINES } from '../../constants';
import { useScreenSize } from '../../hooks/screen';
import { IState } from '../../state/reducers';
import SpaghettiSVG from '../../assets/svgs/cuisines/italian.svg';
import XiaoSVG from '../../assets/svgs/cuisines/xiao.svg';
import NewSVG from '../../assets/svgs/hot.svg';
import NearbySVG from '../../assets/svgs/location.svg';
import TrendingSVG from '../../assets/svgs/trending.svg';
import classNames from 'classnames';
import Link from 'next/link';
import { OutlineBlock } from '../OutlineBlock';
import { ScreenContext } from '../../contexts/screen';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface IDynamicCategories {
  name: string;
  href: string;
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const dynamicCategories: Array<IDynamicCategories> = [
  { name: 'Nearby', href: '/search/nearby', svg: NearbySVG },
  { name: 'Trending', href: '/search/trending', svg: TrendingSVG },
  { name: 'New', href: '/search/new', svg: NewSVG },
];

export function SearchOverlayInner() {
  const searchState = useSelector((state: IState) => state.search);
  const renderSearchTemplate =
    searchState?.searchResultItems?.length === 0 ?? true;

  const { isMobile } = useContext(ScreenContext);
  const router = useRouter();

  return (
    <div>
      <div
        className={classNames(
          'w-full px-4 pb-6',
          isMobile && 'flex flex-col h-full justify-between',
        )}
      >
        <div className="w-full border-secondary border-opacity-50 border-t-2"></div>

        {/* FEATURED DYNAMIC CATEGORIES */}
        <div className="flex flex-col space-y-1 mt-4">
          {dynamicCategories.map(category => (
            <span
              onClick={() => router.push(category.href)}
              className="flex items-center text-lg text-primary font-roboto"
            >
              <category.svg className="h-8 mr-2" />
              {category.name}
            </span>
          ))}
        </div>

        {/* CUISINES */}
        <div className="flex flex-col mt-6">
          <span className="text-black text-sm font-semibold tracking-wide ml-1">
            Find your next favourite dish!
          </span>

          <div className="flex flex-wrap space-x-2 ml-1 mt-2">
            {/* Get 5 most popular cuisines */}
            {Object.values(CUISINES)
              .sort((a, b) => b.popularity - a.popularity)
              .slice(0, 5)
              .map(cuisine => (
                <OutlineBlock size="small" key={cuisine.name}>
                  {cuisine.name}
                </OutlineBlock>
              ))}
          </div>
        </div>

        {/* POPULAR DISHES */}
        <div className="flex flex-col mt-6">
          <span className="text-black text-sm font-semibold tracking-wide ml-1">
            Popular dishes
          </span>

          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 items-center w-full border-b border-secondary py-2">
              <SpaghettiSVG className="h-10" />
              <span className="text-primary">Best Spaghetti</span>
            </div>

            <div className="flex space-x-2 items-center w-full border-b border-secondary py-2">
              <XiaoSVG className="h-10" />
              <span className="text-primary">Best Xiao Long Bao</span>
            </div>

            <div className="flex space-x-2 items-center w-full border-b border-secondary py-2">
              <SpaghettiSVG className="h-10" />
              <span className="text-primary">Best Sushi</span>
            </div>
          </div>
        </div>

        {renderSearchTemplate ? (
          <div className="flex justify-between items-center px-6 my-10">
            <h3 className="text-threexl">
              See more <Link href="">results</Link>
            </h3>
          </div>
        ) : (
          // <div className="flex w-full flex-wrap px-2 my-4">
          //   {searchState.searchResultItems.length &&
          //     searchState.searchResultItems.slice(0, 4).map(searchItem => (
          //       <div
          //         className={classNames('flex', isMobile ? ' w-full' : 'w-1/2')}
          //         key={searchItem.title.replace(' ', '-')}
          //       >
          //         <SearchItem {...searchItem} />
          //       </div>
          //     ))}
          // </div>
          <>fdsf</>
        )}

        <div className="flex flex-col w-full px-6">
          <Link
            href={{
              pathname: '/search',
              query: { s: searchState.searchQuery },
            }}
          >
            <h3 className="text-xl cursor-pointer text-center mt-4 mb-4">
              See all results
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
