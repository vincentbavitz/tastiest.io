import HelpSVG from '@svg/page/help.svg';
import { Button, Input } from '@tastiest-io/tastiest-components';
import { Contained } from 'components/Contained';
import { Select } from 'components/inputs/Select';
import { ScreenContext } from 'contexts/screen';
import { useAuth } from 'hooks/useAuth';
import { useUserData } from 'hooks/useUserData';
import { InferGetServerSidePropsType } from 'next';
import React, { useContext, useState } from 'react';
import { UI } from '../constants';

export const getServerSideProps = async context => {
  return { props: {} };
};

const Help = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { isMobile, isTablet } = useContext(ScreenContext);

  // Update user data
  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);

  const _email = userData?.details?.email;
  const _name = [userData?.details?.firstName, userData?.details?.lastName]
    .join(' ')
    .trim();

  const [name, setName] = useState<string>(_name);
  const [email, setEmail] = useState<string>(_email ?? '');

  return (
    <div>
      <Contained>
        <div className="relative flex justify-center w-full mt-10">
          <HelpSVG style={{ width: '20rem' }} className="" />

          <div
            style={{ marginLeft: '-15.5rem' }}
            className="absolute inset-0 flex items-end justify-center mb-10"
          >
            <h1 className="text-3xl text-center font-somatic text-primary">
              Help
            </h1>
          </div>
        </div>
      </Contained>

      <div className="relative flex flex-col items-center w-full mt-6 mb-12 space-y-4"></div>

      <Contained maxWidth={UI.FORM_WIDTH_PX}>
        <div className="flex flex-col space-y-8 tablet:space-y-12">
          <Input
            placeholder="Name"
            value={name}
            onValueChange={setName}
            maxLength={120}
          />

          <Input
            placeholder="Email"
            value={email}
            onValueChange={setEmail}
            maxLength={120}
          />

          <Select label="Subject">
            <option>sdf</option>
          </Select>
        </div>

        <div className="flex justify-center w-full mt-10">
          <Button
            color="primary"
            className="w-32 font-somatic tablet:w-auto"
            size={isMobile || isTablet ? 'large' : 'medium'}
          >
            Send
          </Button>
        </div>
      </Contained>
    </div>
  );
};

export default Help;
