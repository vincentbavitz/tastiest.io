import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeHeroSVG from '../../assets/svgs/home-hero.svg';
import { ScreenContext } from '../../contexts/screen';
import { useScreenSize } from '../../hooks/screen';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { SearchHome } from '../search/SearchHome';
import { Search } from '../search/SearchInput';

export function HomeSearchSection(): JSX.Element {
  const navigationState = useSelector((state: IState) => state.navigation);
  const { searchOverlayExpanded } = navigationState;
  const dispatch = useDispatch();

  const { isMobile } = useContext(ScreenContext);

  console.log('HomeSearchSection ➡️ isMobile:', isMobile);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-primary text-center text-threexl font-somatic mt-12 mb-5">
        Discover. Eat. Smile.
      </h1>
      <div className="relative w-full">
        {isMobile ? (
          <div style={{ width: '150%', marginLeft: '-25%' }}>
            <HomeHeroSVG />
            <div className="flex items-center justify-center w-full absolute top-0 right-0 bottom-0 left-0">
              <div
                className="w-full"
                style={{
                  marginTop: '27%',
                  filter: searchOverlayExpanded
                    ? 'unset'
                    : 'drop-shadow(0px 6px 0px rgba(219, 68,0,0.5))',
                }}
              >
                <SearchHome />
              </div>
            </div>
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
                <SearchHome />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
