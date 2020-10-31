import React from 'react';
import SuggestDishSVG from '../assets/svgs/suggest-dish.svg';
import { Button } from './Button';
import { Input } from './Input';
import { Title } from './Title';

export function SuggestDish() {
  const formStyles = {
    width: '100%',
    minWidth: '300px',
  };

  return (
    <div className="flex w-full">
      <div style={formStyles} className="flex flex-col">
        <div className="mb-2 flex justify-center text-fourxl text-primary font-somantic">
          Suggest a dish
        </div>

        <div className="my-1">
          <Title level={3} className="text-primary">
            Location of restaurant
          </Title>
          <Input size="large"></Input>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1 my-1">
            <Title level={3} className="text-primary">
              Dish name
            </Title>
            <Input size="large"></Input>
          </div>

          <div className="flex-1 my-1">
            <Title level={3} className="text-primary">
              Cuisine
            </Title>
            <Input size="large"></Input>
          </div>
        </div>

        <div className="my-2">
          <Title level={3} className="text-primary">
            Email address
          </Title>
          <Input size="large"></Input>
        </div>
        <Button className="mt-4">Submit</Button>
        <div className="mt-6 flex-grow justify-center flex -mb-12">
          <SuggestDishSVG className="md:w-full h-full w-3/4" />
        </div>
      </div>
    </div>
  );
}
