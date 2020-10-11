import React from 'react';
import { useDispatch } from 'react-redux';
import HomeHeroSVG from '../assets/svgs/home-hero.svg';
import { expandSearchOverlay } from '../state/navigation';
import { Button } from './Button';
import { Search } from './search/Search';

function MainPageSearch(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="bg-orange-200 md:mx-8 md:rounded-lg">
      <div className="mx-6">
        <div className="pt-8 md:pt-0 xl:pt-8">
          <div className="">
            <h1 className="text-center text-twoxl font-somatic mb-5 sm:my-2  md:p-5">
              Discover. Eat. Smile.
            </h1>
            <div className="flex justify-center">
              <div className="w-full md:w-10/12 xl:w-7/12 max-w-3xl">
                <div className="w-full">
                  {/* FIX ME FIX ME FIX ME */}
                  {/* FIX ME FIX ME FIX ME */}
                  {/* FORWARD REF TO OVERLAY AND RENDER OVERLAY THUSLY */}
                  {/* WORKS ON HOME PAGE ONLY, AS NAVBAR IS GRABBING THE OVERLAY FROM HERE */}
                  <Search
                    renderExitButton={false}
                    onFocus={() => dispatch(expandSearchOverlay())}
                  />
                </div>

                <div>
                  <Button
                    onClick={() => dispatch(expandSearchOverlay())}
                    className="rounded-t-none"
                  >
                    Search a dish
                  </Button>
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
