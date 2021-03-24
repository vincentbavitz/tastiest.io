import SuggestDishDesktopSVG from '@svg/suggest-dish-desktop.svg';
import SuggestDishMobileSVG from '@svg/suggest-dish-mobile.svg';
import { Button } from '@tastiest-io/tastiest-components';
import classNames from 'classnames';
import React, { useContext, useEffect } from 'react';
import { useMeasure } from 'react-use';
import { ScreenContext } from '../contexts/screen';
import { InputAbstract } from './inputs/InputAbstract';
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
        'relative flex w-full justify-end',
        isDesktop && !isHuge && 'space-x-10',
      )}
    >
      {isDesktop && (
        <div
          className="relative"
          style={{
            width: '30rem',
            marginLeft: isHuge ? '0' : '-22vw',
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
          <div className="flex justify-center mb-2 text-4xl text-primary font-somatic">
            Suggest a dish
          </div>
        )}

        <div className="mt-1">
          <Title level={3} className="font-medium text-primary">
            Location of restaurant
          </Title>
          <InputAbstract></InputAbstract>
        </div>

        <div className="flex mt-4 space-x-4">
          <div className="flex-1">
            <Title level={3} className="font-medium text-primary">
              Dish name
            </Title>
            <InputAbstract></InputAbstract>
          </div>

          <div className="flex-1">
            <Title level={3} className="font-medium text-primary">
              Cuisine
            </Title>
            <InputAbstract></InputAbstract>
          </div>
        </div>

        <div className="mt-4 mb-2">
          <Title level={3} className="font-medium text-primary">
            Email address
          </Title>
          <InputAbstract></InputAbstract>
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
          <div className="flex justify-center flex-grow mt-6">
            <SuggestDishMobileSVG className="w-3/4 h-full md:w-full" />
          </div>
        )}
      </div>
    </div>
  );
}
