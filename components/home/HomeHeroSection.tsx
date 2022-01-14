import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { METADATA, UI } from '../../constants';
import { IState } from '../../state/reducers';
import HomeHero from '/public/assets/page/home.svg';

export function HomeHeroSection(): JSX.Element {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchBarPinnedToHeader } = searchState;
  const { searchOverlayExpanded } = navigationState;
  const dispatch = useDispatch();

  const { isMobile, isDesktop } = useScreenSize();

  const stars = useMemo(() => {
    const generateRandomLocation = () => ({
      x: Math.random() * 100,
      y: Math.random() * 33,
      brightness: Math.random() * 40 + 40,
    });

    return Array(20)
      .fill(null)
      .map(() => generateRandomLocation());
  }, []);

  return (
    <div
      style={{
        height: '30rem',
        paddingTop: `${
          isMobile ? UI.HEADER_HEIGHT_MOBILE_REM : UI.HEADER_HEIGHT_DESKTOP_REM
        }rem`,
      }}
      className="relative flex flex-col items-center justify-evenly bg-gradient-to-b from-primary to-blue-400"
    >
      <div className="z-10">
        <Contained>
          <h1
            style={{ maxWidth: '33rem' }}
            className="mb-1 text-4xl text-center text-light filter drop-shadow-lg font-primary"
          >
            {METADATA.TAGLINE}
          </h1>
        </Contained>
      </div>

      {isDesktop ? (
        <Contained>
          <div
            style={{
              filter: 'drop-shadow(2px 2px 20px rgba(255, 255, 255, 0.15))',
              width: '100%',
              height: '0px',
              paddingBottom: '12%',
            }}
            className="z-10 relative"
          >
            <Image
              src={HomeHero}
              layout="fill"
              objectFit="contain"
              className="w-full h-full z-10"
            />
          </div>
        </Contained>
      ) : (
        <div
          style={{
            filter: 'drop-shadow(2px 2px 20px rgba(255, 255, 255, 0.15))',
            width: isMobile ? '100rem' : '100rem',
            height: isMobile ? '7rem' : '8rem',
          }}
          className="z-10 relative"
        >
          <Image
            src={HomeHero}
            layout="fill"
            objectFit="fill"
            className="w-full h-full z-10"
          />
        </div>
      )}

      <div className="absolute inset-0 opacity-50 bg-gradient-to-bl from-secondary via-primary to-primary"></div>
    </div>
  );
}
