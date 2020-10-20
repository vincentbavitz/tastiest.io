import React from 'react';
import SuggestDishSVG from '../assets/svgs/suggest-dish.svg';
import { Input } from './Input';
import { Title } from './Title';

export function SuggestDish() {
  const formStyles = {
    width: '60%',
    minWidth: '300px',
  };

  return (
    <div className="flex w-full">
      <div className="flex-grow">
        <SuggestDishSVG className="w-full h-full" />
      </div>

      <div style={formStyles} className="flex flex-col">
        <div className="my-2">
          <Title level={3} bold className="text-primary">
            Location of restaurant
          </Title>
          <Input size="large"></Input>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1 my-2">
            <Title level={3} bold className="text-primary">
              Dish name
            </Title>
            <Input size="large"></Input>
          </div>

          <div className="flex-1 my-2">
            <Title level={3} bold className="text-primary">
              Cuisine
            </Title>
            <Input size="large"></Input>
          </div>
        </div>

        <div className="my-2">
          <Title level={3} bold className="text-primary">
            Email address
          </Title>
          <Input size="large"></Input>
        </div>
      </div>
    </div>
  );
}
