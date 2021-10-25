import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { METADATA } from '../../constants';
import { IState } from '../../state/reducers';
import HomeHero from '/public/assets/page/home.svg';

export function HomeHeroSection(): JSX.Element {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const { searchBarPinnedToHeader } = searchState;
  const { searchOverlayExpanded } = navigationState;
  const dispatch = useDispatch();

  const { isDesktop } = useScreenSize();

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
    <div className="relative flex flex-col items-center bg-white">
      <div className="z-10">
        <Contained>
          <h1
            style={{ maxWidth: '33rem' }}
            className="pt-24 mb-1 text-4xl text-center text-light filter drop-shadow-lg font-primary"
          >
            {METADATA.TAGLINE}
          </h1>
        </Contained>
      </div>

      <div
        style={{
          maxWidth: '95rem',
          minHeight: '25vh',
          height: isDesktop ? '20rem' : 'unset',
        }}
        className="z-10 relative w-full"
      >
        <Image
          src={HomeHero}
          layout="fill"
          objectFit="contain"
          objectPosition="bottom"
          className="w-full h-full z-10 filter brightness-90"
        />

        {/* Sun glow */}
        <div className="absolute overflow-hidden left-0 right-0 bottom-0 h-64 flex justify-center items-end">
          <div
            className={clsx(
              'transform translate-y-1/2 rounded-full filter',
              isDesktop
                ? 'h-64 w-64 blur-3xl bg-yellow-200'
                : 'h-32 w-32 blur-2xl bg-yellow-200',
            )}
          ></div>
        </div>

        {/* Sun reflection on the water */}
        <div className="absolute right-0 left-0 -bottom-32 overflow-hidden z-10 flex items-bottom justify-center">
          <div className="h-32 w-32 transform -translate-y-1/2 bg-yellow-200 rounded-full filter blur-2xl"></div>
        </div>
      </div>

      {/* Sky backdrop */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-blue-400 via-blue-600 to-indigo-900"></div>
      <div className="absolute left-0 right-0 bottom-0 top-1/2 z-0 bg-gradient-to-t from-pink-300 opacity-75"></div>

      {/* Water */}
      <div
        style={{
          boxShadow: 'inset 0px 35px 50px -30px #0d0f7c99',
        }}
        className="absolute right-0 left-0 -bottom-32 h-32 opacity-75 bg-gradient-to-b from-blue-600 via-blue-300"
      ></div>

      {/* Stars? */}
      <div className="absolute inset-0">
        {stars.map(star => (
          <div
            key={star.x}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: `${star.brightness}%`,
            }}
            className="w-px h-px absolute bg-white"
          ></div>
        ))}
      </div>
    </div>
  );
}
