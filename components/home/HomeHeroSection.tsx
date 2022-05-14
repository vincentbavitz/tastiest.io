import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Scroll from 'react-scroll';

const scroller = Scroll.scroller;

export function HomeHeroSection(): JSX.Element {
  const { isMobile, isDesktop } = useScreenSize();

  return (
    <div className="relative">
      <div
        style={{ minHeight: '700px', maxHeight: '100vh' }}
        className="relative flex items-center bg-primary"
      >
        <div className="z-50 w-full">
          <Contained>
            <div className="leading-tight">
              <h1
                className={clsx(
                  'text-white font-primary',
                  isMobile ? 'text-4xl' : 'text-5xl',
                )}
              >
                Discover premium
                <br /> dining experiences.
              </h1>

              <h4 className="text-white text-xl mt-4">
                We partner with the best restaurants so you have the best
                experiences.
              </h4>
            </div>
          </Contained>
        </div>
      </div>

      {/* Blue underlay on mobile */}
      <div className="absolute inset-0 bg-primary opacity-25 z-10"></div>

      <div
        className={clsx(
          'absolute top-0 right-0',
          isMobile ? 'w-full bottom-0' : 'w-2/3 bottom-20',
        )}
      >
        <Image
          layout="fill"
          objectFit="cover"
          src="https://images.ctfassets.net/tq39z0nxr0bv/72wfIiMlOgPoJr4QOXBhK2/4d91421b86e344ae0847c1ef193d34e7/Rectangle_14_2x.png?w=900"
        />
      </div>
    </div>
  );
}

const CallToActionSelector = () => {
  const [selected, setSelected] = useState<
    'restaurants' | 'experiences' | 'dishes'
  >('restaurants');

  const scrollToSelected = () => {
    scroller.scrollTo(`featured-${selected}-section`, {
      duration: 250,
      smooth: true,
      offset: -75,
    });
  };

  return null;
};
