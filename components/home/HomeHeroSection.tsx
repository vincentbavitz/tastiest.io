import clsx from 'clsx';
import StyledUppercase from 'components/text/StyledUppercase';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Scroll from 'react-scroll';
import { METADATA } from '../../constants';

const scroller = Scroll.scroller;

export function HomeHeroSection(): JSX.Element {
  const { isMobile, isDesktop } = useScreenSize();

  return (
    <div
      style={{ width: isDesktop ? '450px' : '80vw', maxWidth: '80vw' }}
      className="relative w-1/2 bg-white glass glass-white z-50 ring-2 ring-primary ring-offset-2 ring-offset-white px-6 py-6"
    >
      <div className="leading-tight">
        <StyledUppercase size="2xl">{METADATA.TAGLINE}</StyledUppercase>

        <h3 className="text-lg leading-tight mt-4 font-light opacity-75">
          We partner with the best restaurants so you have the best experiences.
        </h3>
      </div>

      <CallToActionSelector />
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

  return (
    <div className="mt-8 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 border border-white">
        <CallToActionItem
          isSelected={selected === 'restaurants'}
          onSelect={() => setSelected('restaurants')}
        >
          Restaurants
        </CallToActionItem>

        <CallToActionItem
          isSelected={selected === 'experiences'}
          onSelect={() => setSelected('experiences')}
        >
          Experiences
        </CallToActionItem>

        <CallToActionItem
          isSelected={selected === 'dishes'}
          onSelect={() => setSelected('dishes')}
        >
          Dishes
        </CallToActionItem>
      </div>

      <div
        onClick={scrollToSelected}
        className="flex items-center justify-center w-full bg-primary h-10 px-4 py-1 text-white text-lg font-medium cursor-pointer"
      >
        Browse
      </div>
    </div>
  );
};

interface CallToActionItemProps {
  children: string;
  isSelected: boolean;
  onSelect: () => void;
}

const CallToActionItem = (props: CallToActionItemProps) => {
  const { isSelected, onSelect, children: label } = props;

  return (
    <div
      onClick={onSelect}
      className={clsx(
        'flex items-center justify-center cursor-pointer duration-300 py-1 px-2',
        'text-gray-700 border-secondary text-base select-none',
        isSelected
          ? 'text-dark bg-white border-2'
          : 'bg-white hover:bg-gray-100',
      )}
    >
      {label}
    </div>
  );
};
