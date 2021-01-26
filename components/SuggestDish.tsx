import classNames from 'classnames';
import React, { useContext, useEffect } from 'react';
import { useMeasure } from 'react-use';
import SuggestDishDesktopSVG from '../assets/svgs/suggest-dish-desktop.svg';
import SuggestDishMobileSVG from '../assets/svgs/suggest-dish-mobile.svg';
import { ScreenContext } from '../contexts/screen';
import { Button } from './Button';
import { Input } from './Input';
import { Title } from './Title';

export function SuggestDish() {
  const { isDesktop, isHuge } = useContext(ScreenContext);

  const [ref, { width }] = useMeasure();

  useEffect(() => {
    console.log('width', width);
  }, [width]);

  return (
    <div
      ref={ref}
      className={classNames(
        'relative flex w-full justify-end -mb-10',
        isDesktop && !isHuge && 'space-x-10',
      )}
    >
      {isDesktop && (
        <div
          className="relative"
          style={{
            width: '30rem',
            marginLeft: isHuge ? '0' : '-12vw',
          }}
        >
          <SuggestDishDesktopSVG
            style={{
              height: '22rem',
              marginTop: '2.5rem',
              marginLeft: isHuge ? '0' : '6rem',
            }}
          />
        </div>
      )}

      <div
        style={{ minWidth: '20rem', marginTop: '3vw' }}
        className={classNames(
          'relative flex flex-col flex-1 ',
          isDesktop && 'mb-1',
        )}
      >
        {isDesktop ? (
          <div
            style={{ width: '8.1rem', marginLeft: 'calc(-9rem - 3vw)' }}
            className={classNames(
              'flex justify-end absolute left-0 leading-tight text-primary font-somatic text-4xl',
            )}
          >
            <div>Suggest a dish</div>
          </div>
        ) : (
          <div className="mb-2 flex justify-center text-4xl text-primary font-somatic">
            Suggest a dish
          </div>
        )}

        <div className="mt-1">
          <Title level={3} className="text-primary">
            Location of restaurant
          </Title>
          <Input size="large"></Input>
        </div>

        <div className="flex space-x-4 mt-4">
          <div className="flex-1">
            <Title level={3} className="text-primary">
              Dish name
            </Title>
            <Input size="large"></Input>
          </div>

          <div className="flex-1">
            <Title level={3} className="text-primary">
              Cuisine
            </Title>
            <Input size="large"></Input>
          </div>
        </div>

        <div className="mb-2 mt-4">
          <Title level={3} className="text-primary">
            Email address
          </Title>
          <Input size="large"></Input>
        </div>

        {isDesktop ? (
          <div className="flex">
            <Button size="small" className="mt-6 tracking-widest">
              Send
            </Button>
          </div>
        ) : (
          <Button className="mt-6">Submit</Button>
        )}

        {!isDesktop && (
          <div className="mt-6 flex-grow justify-center flex">
            <SuggestDishMobileSVG className="md:w-full h-full w-3/4" />
          </div>
        )}
      </div>
    </div>
  );
}
