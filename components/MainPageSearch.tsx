import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeHeroSVG from '../assets/svgs/home-hero.svg';
import { IState } from '../state/reducers';
import { OverlayCondition, Search } from './search/Search';

function MainPageSearch(): JSX.Element {
  const navigationState = useSelector((state: IState) => state.navigation);
  const { searchOverlayShown } = navigationState;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('searchOverlayShown', searchOverlayShown);
  });

  return (
    <div className="bg-orange-200 overflow-x-hidden md:mx-8 md:rounded-lg">
      <div className="mx-6">
        <div className="pt-8 md:pt-0 xl:pt-8">
          <div className="">
            <h1 className="text-center text-2xl font-robotolight mb-5 sm:my-2  md:p-5">
              Dishes we'd recommend to family
            </h1>
            <div className="flex justify-center">
              <div className="w-full md:w-7/12 xl:w-5/12">
                <Search overlay={OverlayCondition.ON_FOCUS} />
                <div>
                  <button
                    className="bg-primary hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 w-full rounded-b-md shadow-lg text-lg md:pl-6"
                    type="button"
                  >
                    Search a dish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-hero">
            <HomeHeroSVG />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageSearch;
