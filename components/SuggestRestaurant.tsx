import { Button, Input } from '@tastiest-io/tastiest-components';
import clsx from 'clsx';
import { useAuth } from 'hooks/useAuth';
import { useFeedback } from 'hooks/useFeedback';
import { useScreenSize } from 'hooks/useScreenSize';
import { useUserData } from 'hooks/useUserData';
import { SuggestRestaurantIllustration } from 'public/assets/illustrations';
import React, { useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { Contained } from './Contained';

type FormData = {
  userGivenRestaurantName: string;
  userGivenCuisine: string;
  userGivenDish: string;
};

export function SuggestRestaurant() {
  const { user, isSignedIn } = useAuth();
  const { userData } = useUserData(user);
  const { isMobile, isDesktop, isHuge } = useScreenSize();

  // Form values
  const [email, setEmail] = useState(userData?.details?.email ?? '');
  const [dishName, setDishName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [restaurantLocation, setRestaurantLocation] = useState('');
  const [requestRecieved, setRequestRecieved] = useState(false);

  const { suggestRestaurant, isSubmitting } = useFeedback();

  // prettier-ignore
  const svgDesktopMarginLeft = isHuge ?
    isSignedIn ? '0rem' : '-4rem' :
    isSignedIn ? '2rem' : '-2rem';

  const submit = async () => {
    if (requestRecieved) return;

    const { success } = await suggestRestaurant(true, {
      dish: dishName,
      cuisine,
    });

    setRequestRecieved(success);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  const {
    field: { ref: restaurantNameRef, ...restaurantNameFieldProps },
  } = useController({
    name: 'userGivenRestaurantName',
    defaultValue: '',
    control,
    rules: {
      required: {
        value: true,
        message: "Please enter the restaurant's name",
      },
      minLength: {
        value: 6,
        message: 'Must be greater than six characters',
      },
      maxLength: { value: 60, message: 'Name too long' },
      pattern: {
        value: /^([a-zA-Z-\s]{0,15}[ ]?){1,4}$/,
        message: 'Must be alphabetic only',
      },
    },
  });

  const {
    field: { ref: cuisineRef, ...cuisineFieldProps },
  } = useController({
    name: 'userGivenCuisine',
    defaultValue: '',
    control,
    rules: {
      required: {
        value: true,
        message: 'Please enter the cuisine',
      },
      minLength: {
        value: 6,
        message: 'Must be greater than six characters',
      },
      maxLength: { value: 30, message: 'Cuisine too long' },
      pattern: {
        value: /^([a-zA-Z-\s]{0,15}[ ]?){1,4}$/,
        message: 'Must be alphabetic only',
      },
    },
  });

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
          <h3 className="pb-4 text-3xl text-center text-primary tablet:text-left font-somatic">
            Suggest a restaurant
          </h3>

          <div className="flex flex-col mt-0 space-y-4 tablet:mt-6">
            <Input
              ref={restaurantNameRef}
              {...restaurantNameFieldProps}
              error={errors?.userGivenRestaurantName?.message}
              label="Name of Restaurant"
              labelTheme="primary"
            />

            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  ref={cuisineRef}
                  {...cuisineFieldProps}
                  error={errors?.userGivenCuisine?.message}
                  label="Cuisine"
                  labelTheme="primary"
                />
              </div>

              <div className="flex-1">
                <Input
                  value={dishName}
                  onValueChange={setDishName}
                  label="Your Favourite Dish"
                  labelTheme="primary"
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
