import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import HomeHeroSVG from '../../assets/svgs/home-hero.svg';
import { UI } from '../../constants';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { Search } from '../search/Search';

export function HomeSearchSection(): JSX.Element {
  const navigationState = useSelector((state: IState) => state.navigation);
  const { searchOverlayExpanded } = navigationState;
  const dispatch = useDispatch();

  // Responsive
  let isMobile;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.TABLET_BREAKPOINT}px)`);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-primary text-center text-threexl font-somatic mt-12 mb-5">
        Discover. Eat. Smile.
      </h1>

      <div className="relative w-full">
        {isMobile ? (
          <div style={{ width: '150%', marginLeft: '-25%' }}>
            <HomeHeroSVG />
          </div>
        ) : (
          <>
            <HomeHeroSVG />

            <div className="flex items-center justify-center w-full absolute top-0 right-0 bottom-0 left-0">
              <div
                className="w-7/12"
                style={{
                  marginTop: '18.5%',
                  filter: searchOverlayExpanded
                    ? 'unset'
                    : 'drop-shadow(0px 6px 0px rgba(219, 68,0,0.5))',
                }}
              >
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
