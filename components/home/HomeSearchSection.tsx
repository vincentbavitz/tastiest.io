import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeHeroSVG from '../../assets/svgs/home-hero.svg';
import { METADATA } from '../../constants';
import { ScreenContext } from '../../contexts/screen';
import { IState } from '../../state/reducers';
import { HomeSearch } from './HomeSearch';

export function HomeSearchSection(): JSX.Element {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchBarPinnedToHeader } = searchState;
  const { searchOverlayExpanded } = navigationState;
  const dispatch = useDispatch();

  const { isMobile } = useContext(ScreenContext);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-primary text-center text-threexl font-somatic mt-12 mb-5">
        {METADATA.TAGLINE}
      </h1>
      <div className="relative w-full">
        <div
          style={{
            width: isMobile ? '180%' : '100%',
            marginLeft: isMobile ? '-40%' : 'unset',
          }}
        >
          <HomeHeroSVG />
          <div className="flex items-center justify-center w-full absolute top-0 right-0 bottom-0 left-0">
            <div
              className={isMobile ? 'w-full' : 'w-7/12'}
              style={{
                marginTop: isMobile ? '33%' : '16.5%',
                zIndex:
                  !isMobile && searchOverlayExpanded && !searchBarPinnedToHeader
                    ? 20001
                    : 1,
              }}
            >
              <HomeSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
