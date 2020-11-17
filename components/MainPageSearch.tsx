import React from 'react';
import { useDispatch } from 'react-redux';
import { useMedia } from 'react-use';
import HomeHeroSVG from '../assets/svgs/home-hero.svg';
import { UI } from '../constants';
import { expandSearchOverlay } from '../state/navigation';
import { Search } from './search/Search';

function MainPageSearch(): JSX.Element {
  const dispatch = useDispatch();

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.TABLET_BREAKPOINT}px)`);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-primary text-center text-twoxl font-somatic mb-5 sm:my-2 md:p-5">
        Discover. Eat. Smile.
      </h1>

      <div className="relative w-full">
        {isMobile ? (
          <div>
            <HomeHeroSVG />
          </div>
        ) : (
          <>
            <HomeHeroSVG />

            <div className="flex items-center justify-center w-full absolute top-0 right-0 bottom-0 left-0">
              <div className="w-7/12">
                <Search
                  trackGeometry
                  placeholder="Search"
                  renderExitButton={false}
                  onFocus={() => dispatch(expandSearchOverlay())}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MainPageSearch;
