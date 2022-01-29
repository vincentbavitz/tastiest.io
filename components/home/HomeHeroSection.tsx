import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { METADATA } from '../../constants';
import { IState } from '../../state/reducers';

export function HomeHeroSection(): JSX.Element {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);

  const { isMobile, isDesktop } = useScreenSize();

  const carouselImages = useMemo(
    () => [
      'https://images.ctfassets.net/tq39z0nxr0bv/7zRwJk41nHBVtKns1jvEFe/f7c1cc80520cf13cc3e836858811a4eb/Numa_carousel.png',
      'https://images.ctfassets.net/tq39z0nxr0bv/3mYExawK75BTsvwsJuJ7DD/534b2ca24534faa542ef5a45bccbfcf5/El_Vaquero_Carousel_5.png',
      'https://images.ctfassets.net/tq39z0nxr0bv/t9LBT7P7dVavzwRaECbVn/5d0b7e83c3039a648bd914fb46c0758f/Numa_carousel_2.png',
      'https://images.ctfassets.net/tq39z0nxr0bv/19cJYp4XVyd2egl33KYNcE/ac84feae42941cfc699513a30f8780d6/Numa_carousel_5.png',
      'https://images.ctfassets.net/tq39z0nxr0bv/3MLr8OlH3p3UUy55pbKQxD/c26d6988bf1e9fb965a90d19f183576a/El_Vaquero_Carousel_2.png',
      'https://images.ctfassets.net/tq39z0nxr0bv/JiGui6bDzBAZK5yIXU1OA/7e4e47e0e3e1b943a8a06dbabf874602/Numa_carousel_4.png',
      'https://images.ctfassets.net/tq39z0nxr0bv/XQka1BkBn4kNm7hKIUT07/5fbf514504a2078d803a93d9e9898615/Numa_carousel_3.png',
      'https://images.ctfassets.net/tq39z0nxr0bv/5LxeQlTf89GCYg1dk97gg5/c8033f6d8a7ecffb65b8e1f3e40a2b78/El_Vaquero_Carousel_3.png',
      'https://images.ctfassets.net/tq39z0nxr0bv/77Wfdy9wIFpEOQGnhxQFxG/c76a226e2a74692a0836e2c2e409f55e/El_Vaquero_Carousel_4.png',
      'https://images.ctfassets.net/tq39z0nxr0bv/4Y27rbFUi3zkIKqf5f3UYe/c7eba5701b19157bf14ad03d9d6444a4/El_Vaquero_Carousel.png',
    ],
    [],
  );

  return (
    <div className="relative flex flex-col items-center justify-evenly bg-dark w-full overflow-x-hidden mb-10">
      <div
        style={{
          width: '100%',
        }}
        className="z-10 relative"
      >
        <Carousel
          autoPlay
          interval={5000}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          transitionTime={1500}
          animationHandler={'fade'}
        >
          {carouselImages.map((image, key) => (
            <div
              key={key}
              style={{ minHeight: isMobile ? '400px' : '400px' }}
              className="relative w-full h-full"
            >
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                priority={key === 0}
                className="w-full z-10"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-dark bg-opacity-25 z-10">
        <div style={{ maxWidth: '33rem' }} className="px-10">
          <h1
            style={{ filter: 'drop-shadow(0 0 15px black)' }}
            className="text-center text-4xl text-light font-primary leading-10"
          >
            {METADATA.TAGLINE}
          </h1>
        </div>
      </div>
    </div>
  );
}
