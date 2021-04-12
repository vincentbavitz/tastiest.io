import { Button, Input } from '@tastiest-io/tastiest-components';
import clsx from 'clsx';
import { useAuth } from 'hooks/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useUserData } from 'hooks/useUserData';
import { SuggestRestaurantIllustration } from 'public/assets/illustrations';
import React, { useState } from 'react';
import { Contained } from './Contained';

export function SuggestRestaurant() {
  const { user, isSignedIn } = useAuth();
  const { userData } = useUserData(user);
  const { isMobile, isDesktop, isHuge } = useScreenSize();

  // Form values
  const [email, setEmail] = useState(userData?.details?.email ?? '');
  const [restaurantLocation, setRestaurantLocation] = useState('');
  const [dishName, setDishName] = useState('');
  const [cuisine, setCuisine] = useState('');

  // prettier-ignore
  const svgDesktopMarginLeft = isHuge ?
    isSignedIn ? '0rem' : '-4rem' :
    isSignedIn ? '2rem' : '-2rem';

  return (
    <Contained>
      <div
        className={clsx(
          'relative flex w-full pb-10 justify-center',
          'tablet:flex-row flex-col-reverse',
          isDesktop && 'space-x-10',
        )}
      >
        <SuggestRestaurantIllustration
          style={{
            height: isSignedIn ? '16rem' : '20rem',
            minWidth: '12rem',
            marginTop: isDesktop ? (isSignedIn ? '0' : '2.5rem') : '3rem',
            marginLeft: svgDesktopMarginLeft,
          }}
        />

        <div
          style={{
            minWidth: '20rem',
            maxWidth: isDesktop ? '30rem' : 'unset',
            marginTop: isSignedIn ? '0' : '1rem',
          }}
          className={clsx('relative flex-1 tablet:mb-1')}
        >
          <h3 className="mb-2 text-3xl text-center text-primary tablet:text-left font-somatic">
            Suggest a restaurant
          </h3>

          <div className="flex flex-col mt-0 space-y-4 tablet:mt-6">
            <Input
              value={restaurantLocation}
              onValueChange={setRestaurantLocation}
              label="Location of restaurant"
              labelTheme="primary"
              maxLength={120}
            />

            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  value={cuisine}
                  onValueChange={setCuisine}
                  label="Cuisine"
                  labelTheme="primary"
                  maxLength={20}
                />
              </div>

              <div className="flex-1">
                <Input
                  value={dishName}
                  onValueChange={setDishName}
                  label="Your Favourite Dish"
                  labelTheme="primary"
                  maxLength={50}
                />
              </div>
            </div>

            {!isSignedIn && (
              <Input
                value={email}
                onValueChange={setEmail}
                label="Your Email Address"
                labelTheme="primary"
                maxLength={50}
              />
            )}

            <Button wide={isMobile} className="tracking-widest">
              Send
            </Button>
          </div>
        </div>
      </div>
    </Contained>
  );
}
