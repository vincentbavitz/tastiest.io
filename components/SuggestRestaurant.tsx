import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input } from '@tastiest-io/tastiest-components';
import clsx from 'clsx';
import { useAuth } from 'hooks/useAuth';
import { useFeedback } from 'hooks/useFeedback';
import { useScreenSize } from 'hooks/useScreenSize';
import { useUserData } from 'hooks/useUserData';
import {
  SuggestRestaurantIllustration,
  ThumbsUpIllustration,
} from 'public/assets/illustrations';
import React, { useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { Contained } from './Contained';

type FormData = {
  email: string;
  userGivenRestaurantName: string;
  userGivenCuisine: string;
  userGivenDish: string;
};

export function SuggestRestaurant() {
  const { user, isSignedIn } = useAuth();
  const { userData } = useUserData(user);
  const { isMobile, isDesktop, isHuge } = useScreenSize();

  // Form values
  const [requestRecieved, setRequestRecieved] = useState(false);

  const { suggestRestaurant, isSubmitting } = useFeedback();

  // prettier-ignore
  const svgDesktopMarginLeft = isHuge ?
    isSignedIn ? '0rem' : '-4rem' :
    isSignedIn ? '2rem' : '-2rem';

  const submit = async ({
    email,
    userGivenDish,
    userGivenCuisine,
    userGivenRestaurantName,
  }: FormData) => {
    if (requestRecieved) {
      return;
    }

    const { success } = await suggestRestaurant(
      false,
      {
        userGivenDish,
        userGivenCuisine,
        userGivenRestaurantName,
      },
      email,
    );

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
    field: { ref: emailRef, ...emailFieldProps },
  } = useController({
    name: 'email',
    defaultValue: user?.email ?? '',
    control,
    rules: {
      required: {
        value: Boolean(user?.email),
        message: 'Please enter your email',
      },
      pattern: {
        value: /^[\w]{1,30}@[\w\-_]{1,30}\.[a-zA-Z]{2,10}(\.[a-zA-Z]{2,10})?$/,
        message: 'Please enter a valid email',
      },
    },
  });

  const {
    field: { ref: dishRef, ...dishFieldProps },
  } = useController({
    name: 'userGivenDish',
    defaultValue: '',
    control,
    rules: {
      required: {
        value: true,
        message: 'Enter your favourite dish',
      },
      minLength: {
        value: 3,
        message: 'Must be greater than three characters',
      },
      maxLength: { value: 60, message: 'Dish name too long' },
      pattern: {
        value: /^([a-zA-Z'"-\s]{0,15}[ ]?){1,4}$/,
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
        value: /^([a-zA-Z'"-\s]{0,15}[ ]?){1,4}$/,
        message: 'Must be alphabetic only',
      },
    },
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
        value: /^([a-zA-Z-'"\s]{0,15}[ ]?){1,4}$/,
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
        {requestRecieved ? (
          <ThumbsUpIllustration
            style={{
              height: isSignedIn ? '16rem' : '20rem',
              minWidth: '12rem',
              marginTop: isDesktop ? (isSignedIn ? '0' : '2.5rem') : '3rem',
              marginLeft: svgDesktopMarginLeft,
            }}
          />
        ) : (
          <SuggestRestaurantIllustration
            style={{
              height: isSignedIn ? '16rem' : '20rem',
              minWidth: '12rem',
              marginTop: isDesktop ? (isSignedIn ? '0' : '2.5rem') : '3rem',
              marginLeft: svgDesktopMarginLeft,
            }}
          />
        )}

        <div
          style={{
            minWidth: '20rem',
            maxWidth: isDesktop ? '30rem' : 'unset',
            marginTop: isSignedIn ? '0' : '1rem',
          }}
          className={clsx(
            'relative flex-1 tablet:mb-1 flex flex-col justify-center',
          )}
        >
          <h3 className="pb-4 text-3xl text-center text-primary tablet:text-left font-somatic">
            Suggest a restaurant
          </h3>

          {requestRecieved ? (
            <div className="">
              <p className="text-lg font-bold">Thanks for your suggestion!</p>
              <p>
                We really value your input and will check out <br />
                your suggestion shortly.
              </p>
            </div>
          ) : (
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
                    ref={dishRef}
                    {...dishFieldProps}
                    error={errors?.userGivenDish?.message}
                    label="Your Favourite Dish"
                    labelTheme="primary"
                  />
                </div>
              </div>

              {!isSignedIn && (
                <Input
                  ref={emailRef}
                  {...emailFieldProps}
                  error={errors?.email?.message}
                  label="Your Email Address"
                  labelTheme="primary"
                />
              )}

              <div className="w-full tablet:w-24">
                <Button
                  wide
                  className="tracking-wide"
                  onClick={handleSubmit(submit)}
                >
                  {isSubmitting ? (
                    <LoadingOutlined className="text-2xl" />
                  ) : (
                    'Send'
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Contained>
  );
}
