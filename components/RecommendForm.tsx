import classNames from 'classnames';
import React from 'react';
import { Button } from './Button';

interface ICity {
  name: string;
  lat: number;
  lng: number;
}

interface Props {
  dish: string;
  city: ICity;
}

// Use klaviyo for emails
// https://www.klaviyo.com/docs

export function RecommendForm(props: Props) {
  const { dish, city } = props;

  return (
    <div className="w-8/12">
      <div className="w-9/12">
        <span className="text-threexl font-somantic text-primary leading-tight">
          Do you know a better {dish} in {city.name}?
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
            'h-16',
            'text-xl',
          )}
          type="text"
          maxLength={50}
          placeholder="Name of restaurant"
        ></input>
      </div>

      <Button size="small" className="w-32 font-somatic text-xl mt-6">
        Recommend
      </Button>
    </div>
  );
}
