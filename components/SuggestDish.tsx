import classNames from 'classnames';
import React from 'react';
import { useMedia } from 'react-use';
import SuggestDishDesktopSVG from '../assets/svgs/suggest-dish-desktop.svg';
import SuggestDishMobileSVG from '../assets/svgs/suggest-dish-mobile.svg';
import { UI } from '../constants';
import { Button } from './Button';
import { Input } from './Input';
import { Title } from './Title';

export function SuggestDish() {
  // Responsive
  let isMobile = true;
  let isTablet = false;
  let isDesktop = false;
  let isHuge = false;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
    isTablet = useMedia(
      `(min-width: ${UI.MOBILE_BREAKPOINT}px) and  (max-width: ${UI.TABLET_BREAKPOINT}px)`,
    );
    isDesktop = useMedia(`(min-width: ${UI.TABLET_BREAKPOINT}px)`);
    isHuge = useMedia(`(min-width: ${UI.DESKTOP_BREAKPOINT}px)`);
  }

  return (
    <div
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
            marginLeft: isHuge ? '0' : 'calc(1/0.1vw)',
          }}
        >
          <SuggestDishDesktopSVG
            style={{
              height: '28.5rem',
              marginLeft: isHuge ? '0' : '2rem',
            }}
          />
        </div>
      )}

      <div
        style={{ width: '', marginTop: '3vw' }}
        className={classNames(
          'relative flex flex-col flex-1 ',
          isDesktop && 'mb-12',
        )}
      >
        {isDesktop ? (
          <div
            style={{ width: '8.1rem', marginLeft: 'calc(-9rem - 2vw)' }}
            className={classNames(
              'flex justify-end absolute left-0 leading-tight text-primary font-somantic text-fourxl',
            )}
          >
            <div>Suggest a dish</div>
          </div>
        ) : (
          <div className="mb-2 flex justify-center text-fourxl text-primary font-somantic">
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
