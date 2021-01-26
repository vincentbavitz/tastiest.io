import classNames from 'classnames';
import React, { useContext } from 'react';
import SuggestDishDesktopSVG from '../assets/svgs/suggest-dish-desktop.svg';
import { ScreenContext } from '../contexts/screen';
import { Button } from './Button';
import { Contained } from './Contained';

interface Props {
  dish: string;
  city: string;
}

// Use klaviyo for emails

export function RecommendForm(props: Props) {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <Contained>
      {isDesktop ? (
        <div className="flex justify-start items-center space-x-6">
          <div className="w-7/12 flex-1">
            <RecommendFormContent {...props} />
          </div>

          <div className="w-4/12">
            <SuggestDishDesktopSVG
              style={{ height: '16rem', transform: 'rotateY(180deg)' }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-6 mt-10">
          <SuggestDishDesktopSVG style={{ width: '90%', maxHeight: '22rem' }} />

          <div className="pl-3 pb-8">
            <RecommendFormContent {...props} />
          </div>
        </div>
      )}
    </Contained>
  );
}

const RecommendFormContent = ({ dish, city }: Props) => {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <>
      <div className="desktop:w-9/12 mb-4">
        <span className="text-threexl font-somatic text-primary leading-tight">
          Do you know a better {dish} in {city}?
        </span>
      </div>
      <div
        className={classNames(
          'flex',
          'w-full',
          'focus:outline-none',
          'focus:shadow-outline',
          'border-4',
          'border-secondary',
          'rounded-xl',
        )}
      >
        <input
          className={classNames(
            'flex-1',
            'border-none',
            'outline-none',
            'px-4',
            'self-center',
            'block',
            'appearance-none',
            'leading-normal',
            'bg-transparent',
            'h-12',
            'text-xl',
          )}
          type="text"
          maxLength={50}
          placeholder="Name of restaurant"
        ></input>
      </div>

      <Button
        size={isDesktop ? 'small' : 'medium'}
        className="w-32 font-somatic text-xl mt-6"
      >
        Recommend
      </Button>
    </>
  );
};
