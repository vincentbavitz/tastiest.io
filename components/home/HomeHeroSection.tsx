import { useScreenSize } from 'hooks/useScreenSize';
import { Home as HomeHero } from 'public/assets/page';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { METADATA } from '../../constants';
import { IState } from '../../state/reducers';

export function HomeHeroSection(): JSX.Element {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchBarPinnedToHeader } = searchState;
  const { searchOverlayExpanded } = navigationState;
  const dispatch = useDispatch();

  const { isDesktop } = useScreenSize();

  return (
    <div className="flex flex-col items-center">
      <h1
        style={{ maxWidth: '33rem' }}
        className="mt-12 mb-1 text-4xl text-center text-primary font-primary"
      >
        {METADATA.TAGLINE}
      </h1>

      <div className="relative w-full">
        <div
          style={{
            width: '100%',
          }}
        >
          <HomeHero />
        </div>
      </div>
    </div>
  );
}
