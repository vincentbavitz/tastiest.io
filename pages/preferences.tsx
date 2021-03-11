import PreferencesSVG from '@svg/page/preferences.svg';
import { Button } from 'components/Button';
import { Contained } from 'components/Contained';
import CuisineSelect from 'components/inputs/CuisineSelect';
import { InputAbstract } from 'components/inputs/InputAbstract';
import { InputDate } from 'components/inputs/InputDate';
import { ScreenContext } from 'contexts/screen';
import { useAuth } from 'hooks/useAuth';
import { useUserData } from 'hooks/useUserData';
import { InferGetServerSidePropsType } from 'next';
import React, { ReactNode, useContext, useState } from 'react';
import { UserDataApi } from 'services/userData';
import {
  IUserDetails,
  IUserPreferences,
  TFavouriteCuisine,
  UserData,
} from 'types/firebase';
import { IDateObject } from 'types/various';
import { USER } from '../constants';

const PAGE_WIDTH = 600;

export const getServerSideProps = async context => {
  // Get user ID from cookie.
  const userDataApi = new UserDataApi();
  const { userId } = await userDataApi.init(context);

  console.log('preferences ➡️ userId:', userId);

  // If no user, redirect to home
  if (!userId) {
    return {
      redirect: {
        destination: '/?login=1',
        permanent: false,
      },
    };
  }

  // Grab user's preferences
  const preferences = await userDataApi.getUserData(UserData.PREFERENCES);
  const details = await userDataApi.getUserData(UserData.DETAILS);

  return {
    props: { userId, preferences, details },
  };
};

const Preferences = ({
  userId,
  details,
  preferences,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { isMobile, isTablet } = useContext(ScreenContext);

  const [streetAddress, setStreetAddress] = useState<string>(
    details?.address?.address ?? null,
  );
  const [postalCode, setPostalCode] = useState<string>(
    details?.address?.postalCode ?? null,
  );
  const [birthday, setBirthday] = useState<IDateObject>(
    details?.birthday ?? null,
  );
  const [cuisine_1, setCuisine_1] = useState<TFavouriteCuisine | null>(
    preferences?.favouriteCuisines?.[0] ?? null,
  );
  const [cuisine_2, setCuisine_2] = useState<TFavouriteCuisine | null>(
    preferences?.favouriteCuisines?.[1] ?? null,
  );
  const [cuisine_3, setCuisine_3] = useState<TFavouriteCuisine | null>(
    preferences?.favouriteCuisines?.[2] ?? null,
  );

  // Update user data
  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);

  const submit = async () => {
    const favouriteCuisines = [
      cuisine_1 ?? null,
      cuisine_2 ?? null,
      cuisine_3 ?? null,
    ].filter(c => Boolean(c)) as [
      TFavouriteCuisine?,
      TFavouriteCuisine?,
      TFavouriteCuisine?,
    ];

    const updatedPreferences: Partial<IUserPreferences> = {
      favouriteCuisines,
    };

    const updatedDetails: Partial<IUserDetails> = {
      address: {
        lat: 0,
        lon: 0,
        address: streetAddress?.trim() ?? null,
        postalCode: postalCode?.trim() ?? null,
      },
      birthday,
    };

    // TODO; ensure they are actually changing to avoid
    // overwriting anything with null
    await setUserData(UserData.PREFERENCES, updatedPreferences);
    await setUserData(UserData.DETAILS, updatedDetails);
  };

  console.log(
    'preferences ➡️ preferences?.favouriteCuisines?.[0]?.existing:',
    preferences?.favouriteCuisines?.[0]?.existing,
  );

  console.log(
    'preferences ➡️ preferences?.favouriteCuisines?.[0]?.other:',
    preferences?.favouriteCuisines?.[0]?.other,
  );

  console.log(
    'preferences ➡️ preferences?.favouriteCuisines:',
    preferences?.favouriteCuisines,
  );

  const initial_1 =
    preferences?.favouriteCuisines?.[0]?.existing ??
    (preferences?.favouriteCuisines?.[0]?.other ? 'OTHER' : null);
  const initial_2 =
    preferences?.favouriteCuisines?.[1]?.existing ??
    (preferences?.favouriteCuisines?.[1]?.other ? 'OTHER' : null);
  const initial_3 =
    preferences?.favouriteCuisines?.[2]?.existing ??
    (preferences?.favouriteCuisines?.[2]?.other ? 'OTHER' : null);

  const other_1 = preferences?.favouriteCuisines?.[0]?.other ?? null;
  const other_2 = preferences?.favouriteCuisines?.[1]?.other ?? null;
  const other_3 = preferences?.favouriteCuisines?.[2]?.other ?? null;

  return (
    <div>
      <div className="relative flex flex-col items-center w-full mt-6 mb-12 space-y-4">
        <h1 className="text-3xl text-center font-somatic text-primary">
          Set your preferences
        </h1>

        {isMobile ? (
          <PreferencesSVG className="w-10/12" />
        ) : (
          <Contained maxWidth={PAGE_WIDTH}>
            <div className="flex justify-center">
              <PreferencesSVG className="w-full" />
            </div>
          </Contained>
        )}
      </div>

      <Contained maxWidth={PAGE_WIDTH}>
        <div className="flex flex-col space-y-8 tablet:space-y-12">
          FIRST NAME
          <PreferenceBlock
            title="Your favourite Cuisines"
            subtitle="So we know what to recommend to you."
          >
            <CuisineSelect
              initial={initial_1}
              initialOther={other_1}
              onChange={setCuisine_1}
            />
            <CuisineSelect
              initial={initial_2}
              initialOther={other_2}
              onChange={setCuisine_2}
            />
            <CuisineSelect
              initial={initial_3}
              initialOther={other_3}
              onChange={setCuisine_3}
            />
          </PreferenceBlock>
          <PreferenceBlock
            title="Birthday"
            subtitle="So we can give you something special."
          >
            <div style={{ width: '8.5rem' }}>
              <InputDate
                date={birthday}
                onDateChange={setBirthday}
                minYear={USER.OLDEST_BIRTH_YEAR}
                maxYear={USER.YOUNGEST_BIRTH_YEAR}
              />
            </div>
          </PreferenceBlock>
          <PreferenceBlock
            title="Address"
            subtitle="So we can find the tastiest food near you."
          >
            <div
              style={{ maxWidth: '70vw', width: '30rem' }}
              className="w-full"
            >
              <InputAbstract
                center={isMobile || isTablet}
                placeholder="Street Address"
                value={streetAddress}
                onValueChange={setStreetAddress}
                maxLength={120}
              />
            </div>

            <div style={{ width: '8.5rem' }}>
              <InputAbstract
                center={isMobile || isTablet}
                placeholder="Postal Code"
                value={postalCode}
                onValueChange={setPostalCode}
                maxLength={20}
              />
            </div>
          </PreferenceBlock>
        </div>

        <div className="flex justify-center w-full mt-10">
          <Button
            color="primary"
            className="w-32 font-somatic tablet:w-auto"
            size={isMobile || isTablet ? 'large' : 'medium'}
            onClick={submit}
          >
            Save
          </Button>
        </div>
      </Contained>
    </div>
  );
};

interface PreferenceBlockProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

function PreferenceBlock({ title, subtitle, children }: PreferenceBlockProps) {
  const { isMobile, isTablet } = useContext(ScreenContext);

  return (
    <div>
      <h2 className="text-3xl text-center tablet:text-left font-somatic text-primary">
        {title}
      </h2>
      <p className="font-normal text-center tablet:text-left">{subtitle}</p>

      <div
        style={{ maxWidth: isMobile || isTablet ? 'unset' : '25rem' }}
        className="flex flex-col items-center mt-3 space-y-4 tablet:items-start"
      >
        {children}
      </div>
    </div>
  );
}

export default Preferences;
