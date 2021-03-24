import SuggestDishDesktopSVG from '@svg/suggest-dish-desktop.svg';
import { Button } from '@tastiest-io/tastiest-components';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { ScreenContext } from '../contexts/screen';
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
        <div className="flex items-center justify-start mt-10 space-x-6">
          <div className="flex-1 w-7/12">
            <RecommendFormContent {...props} />
          </div>

          <div className="w-4/12">
            <SuggestDishDesktopSVG
              style={{ height: '16rem', transform: 'rotateY(180deg)' }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10 space-y-6">
          <SuggestDishDesktopSVG style={{ width: '90%', maxHeight: '22rem' }} />

          <div className="pb-8 pl-3">
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
      <div className="mb-4 desktop:w-9/12">
        <span className="text-3xl leading-tight font-somatic text-primary">
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
        className="w-32 mt-6 text-xl font-somatic"
      >
        Recommend
      </Button>
    </>
  );
};
