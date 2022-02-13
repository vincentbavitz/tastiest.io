import { CheckIcon } from '@tastiest-io/tastiest-icons';
import { Button, Input } from '@tastiest-io/tastiest-ui';
import {
  DateObject,
  dlog,
  FavouriteCuisine,
  USER,
  UserDataApi,
  UserDataKey,
  UserDetails,
  UserPreferences,
} from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import CuisineSelect from 'components/inputs/CuisineSelect';
import { InputDate } from 'components/inputs/InputDate';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useUserData } from 'hooks/useUserData';
import { InferGetServerSidePropsType } from 'next';
import nookies from 'nookies';
import React, { ReactNode, useState } from 'react';
import { firebaseAdmin } from 'utils/firebaseAdmin';
import { UI } from '../../constants';

export const getServerSideProps = async context => {
  // Get user ID from cookie.
  const cookieToken = nookies.get(context)?.token;
  const userDataApi = new UserDataApi(firebaseAdmin);
  const { userId } = await userDataApi.initFromCookieToken(cookieToken);

  dlog('preferences ➡️ userId:', userId);

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
  const { details, preferences } = await userDataApi.getUserData();

  return {
    props: { userId, preferences, details },
  };
};

const Preferences = ({
  userId,
  details,
  preferences,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { isMobile, isTablet } = useScreenSize();

  const [streetAddress, setStreetAddress] = useState<string>(
    details?.address?.address ?? null,
  );
  const [postalCode, setPostalCode] = useState<string>(
    details?.postalCode ?? null,
  );
  const [birthday, setBirthday] = useState<DateObject>(
    details?.birthday ?? null,
  );
  const [cuisine_1, setCuisine_1] = useState<FavouriteCuisine | null>(
    preferences?.favouriteCuisines?.[0] ?? null,
  );
  const [cuisine_2, setCuisine_2] = useState<FavouriteCuisine | null>(
    preferences?.favouriteCuisines?.[1] ?? null,
  );
  const [cuisine_3, setCuisine_3] = useState<FavouriteCuisine | null>(
    preferences?.favouriteCuisines?.[2] ?? null,
  );

  // Update user data
  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);

  // Check whether details differ from database
  // Controls the disabled status of the save button
  const [savable, setSavable] = useState(false);
  const [userHasSaved, setUserHasSaved] = useState(false);

  const compareModifiedValues = () => {
    const valuesModified =
      userData?.details?.address?.address !== streetAddress ||
      userData?.details?.postalCode !== postalCode ||
      userData?.details?.birthday !== birthday ||
      userData?.preferences?.favouriteCuisines?.[0] !== cuisine_1 ||
      userData?.preferences?.favouriteCuisines?.[1] !== cuisine_2 ||
      userData?.preferences?.favouriteCuisines?.[2] !== cuisine_3;

    if (valuesModified) {
      setSavable(true);
    }
  };

  const submit = async () => {
    const favouriteCuisines = [
      cuisine_1 ?? null,
      cuisine_2 ?? null,
      cuisine_3 ?? null,
    ].filter(c => Boolean(c)) as [
      FavouriteCuisine?,
      FavouriteCuisine?,
      FavouriteCuisine?,
    ];

    const updatedPreferences: Partial<UserPreferences> = {
      favouriteCuisines,
    };

    const updatedDetails: Partial<UserDetails> = {
      address: {
        lat: 0,
        lon: 0,
        address: streetAddress?.trim() ?? null,
      },
      postalCode: postalCode?.trim() ?? null,
      birthday,
    };

    // TODO; ensure they are actually changing to avoid
    // overwriting anything with null
    const { success: preferencesSuccess } = await setUserData(
      UserDataKey.PREFERENCES,
      updatedPreferences,
    );
    const { success: detailsSuccess } = await setUserData(
      UserDataKey.DETAILS,
      updatedDetails,
    );

    if (detailsSuccess && preferencesSuccess) {
      setUserHasSaved(true);
      setSavable(false);
    }
  };

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
      <div className="relative flex flex-col items-center w-full pb-12 mt-10 space-y-4">
        <h1 className="text-3xl text-center font-primary text-primary">
          Set your preferences
        </h1>

        {/* {isMobile ? (
          <PreferencesHero className="w-10/12" />
        ) : (
          <Contained maxWidth={UI.FORM_WIDTH_PX}>
            <div className="flex justify-center">
              <PreferencesHero className="w-full" />
            </div>
          </Contained>
        )} */}
      </div>

      <Contained maxWidth={UI.FORM_WIDTH_PX}>
        <div className="flex flex-col space-y-8 md:space-y-12">
          <PreferenceBlock
            title="Your favourite Cuisines"
            subtitle="So we know what to recommend."
          >
            <CuisineSelect
              initial={initial_1}
              initialOther={other_1}
              onChange={value => {
                setCuisine_1(value);
                compareModifiedValues();
              }}
            />
            <CuisineSelect
              initial={initial_2}
              initialOther={other_2}
              onChange={value => {
                setCuisine_2(value);
                compareModifiedValues();
              }}
            />
            <CuisineSelect
              initial={initial_3}
              initialOther={other_3}
              onChange={value => {
                setCuisine_3(value);
                compareModifiedValues();
              }}
            />
          </PreferenceBlock>

          <PreferenceBlock
            title="Birthday"
            subtitle="To give you something special."
          >
            <div style={{ width: '8.5rem' }}>
              <InputDate
                initialDate={birthday}
                onDateChange={(_, destructured) => {
                  setBirthday(destructured);
                  compareModifiedValues();
                }}
                maxYear={Number(USER.YOUNGEST_BIRTH_YEAR)}
              />
            </div>
          </PreferenceBlock>

          <PreferenceBlock
            title="Postcode"
            subtitle="So we can find the tastiest food near you."
          >
            {/* <div
              style={{ maxWidth: '70vw', width: '30rem' }}
              className="w-full"
            >
              <Input
                center={isMobile || isTablet}
                placeholder="Street Address"
                value={streetAddress}
                onValueChange={value => {
                  setStreetAddress(value);
                  compareModifiedValues();
                }}
                maxLength={120}
              />
            </div> */}

            <div style={{ width: '8.5rem' }}>
              <Input
                center={isMobile || isTablet}
                placeholder="Postal Code"
                value={postalCode}
                onValueChange={value => {
                  setPostalCode(value);
                  compareModifiedValues();
                }}
                maxLength={20}
              />
            </div>
          </PreferenceBlock>
        </div>

        <div className="flex justify-center w-full pb-16 mt-6 md:mt-10">
          <Button
            size={isMobile || isTablet ? 'large' : 'medium'}
            disabled={!savable}
            onClick={submit}
            suffix={
              userHasSaved && !savable ? (
                <CheckIcon className="h-3 text-white fill-current" />
              ) : null
            }
          >
            {userHasSaved && !savable ? 'Saved' : 'Save'}
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
  const { isMobile, isTablet } = useScreenSize();

  return (
    <div>
      <h2 className="text-3xl text-center md:text-left font-primary text-primary">
        {title}
      </h2>
      <p className="font-normal text-center md:text-left">{subtitle}</p>

      <div
        style={{ maxWidth: isMobile || isTablet ? 'unset' : '25rem' }}
        className="flex flex-col items-center mt-3 space-y-4 md:items-start"
      >
        {children}
      </div>
    </div>
  );
}

export default Preferences;
