import HelpSVG from '@svg/page/help.svg';
import { Button, Input, Select } from '@tastiest-io/tastiest-components';
import { SupportRequestType } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { useAuth } from 'hooks/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import { useSupport } from 'hooks/useSupport';
import { useUserData } from 'hooks/useUserData';
import { InferGetServerSidePropsType } from 'next';
import React, { useState } from 'react';
import { dlog } from 'utils/development';
import { UI } from '../constants';

export const getServerSideProps = async context => {
  return { props: {} };
};

interface IHelpOption {
  key: SupportRequestType;
  label: string;
}

const helpOptions: IHelpOption[] = [
  { key: SupportRequestType.GENERAL, label: 'General request' },
  { key: SupportRequestType.ORDER, label: 'Help with an order' },
  { key: SupportRequestType.FEATURE_REQUEST, label: 'Suggest a feature' },
  { key: SupportRequestType.BUG, label: 'Report a bug' },
  { key: SupportRequestType.OTHER, label: 'Something else' },
];

const Help = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  const { isMobile, isTablet } = useScreenSize();

  // Update user data
  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);

  const _email = userData?.details?.email;
  const _name = [userData?.details?.firstName, userData?.details?.lastName]
    .join(' ')
    .trim();

  const [name, setName] = useState<string>(_name ?? '');
  const [email, setEmail] = useState<string>(_email ?? '');

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [supportType, setSupportType] = useState<SupportRequestType>(
    SupportRequestType.GENERAL,
  );

  const [sent, setSent] = useState(false);

  const { supportRequests, makeSupportRequest } = useSupport();

  const handleOnSelect = (value: SupportRequestType) => {
    setSubject('');
    setSupportType(value);

    dlog('help ➡️     value:', value);
  };

  dlog('help ➡️ supportRequests:', supportRequests);

  dlog('help ➡️ name;:', name);
  dlog('help ➡️ email:', email);

  const submit = async () => {
    const { success, errors } = await makeSupportRequest(
      name,
      email,
      supportType,
      subject,
      message,
      user?.uid,
    );

    if (success) {
      setSubject('');
      setMessage('');
      setSent(true);
    }

    dlog('help ➡️ success:', success);
    dlog('help ➡️ errors:', errors);
  };

  // prettier-ignore
  const textareaPlaceholder = 
    supportType === SupportRequestType.GENERAL ? 'How can we help you?' : 
    supportType === SupportRequestType.ORDER ? 'Please explain what went wrong with your order' : 
    supportType === SupportRequestType.FEATURE_REQUEST ? "Describe the feature you'd like to see" : 
    supportType === SupportRequestType.BUG ? 'Please describe the bug you encountered' : 
    supportType === SupportRequestType.OTHER ? 'Please describe your issue' : 
    ''

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
        <div className="flex flex-col mb-20 space-y-8 tablet:space-y-8">
          {/* Only request name if the user isn't logged in or hasn't given it yet */}
          {!_name?.length && (
            <Input
              label="Name"
              labelTheme="primary"
              value={name}
              onValueChange={setName}
              maxLength={120}
            />
          )}

          {!_email?.length && (
            <Input
              label="Email"
              labelTheme="primary"
              value={email}
              onValueChange={setEmail}
              maxLength={120}
            />
          )}

          <div className="flex flex-col w-full space-y-4 mobile:space-y-0 mobile:flex-row mobile:items-end mobile:space-x-4">
            <div className="w-full mobile:w-1/2 tablet:w-4/12">
              <Select
                label="Subject"
                labelTheme="primary"
                onChange={handleOnSelect}
              >
                {helpOptions.map(option => (
                  <option
                    key={option.key}
                    value={option.key}
                    // selected={ === option.key}
                  >
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex-grow">
              {supportType === SupportRequestType.GENERAL && (
                <Input
                  placeholder="What's your request?"
                  value={subject}
                  onValueChange={setSubject}
                  maxLength={80}
                />
              )}

              {supportType === SupportRequestType.ORDER && (
                <Input
                  placeholder="Order #"
                  value={subject}
                  onValueChange={setSubject}
                  maxLength={80}
                />
              )}

              {supportType === SupportRequestType.FEATURE_REQUEST && (
                <Input
                  placeholder="What would you like to see?"
                  value={subject}
                  onValueChange={setSubject}
                  maxLength={80}
                />
              )}

              {supportType === SupportRequestType.BUG && (
                <Input
                  placeholder="What was the bug?"
                  value={subject}
                  onValueChange={setSubject}
                  maxLength={80}
                />
              )}

              {supportType === SupportRequestType.OTHER && (
                <Input
                  placeholder="Please explain your issue"
                  value={subject}
                  onValueChange={setSubject}
                />
              )}
            </div>
          </div>

          <textarea
            className="h-32 px-4 py-2 duration-300 border-2 rounded-lg outline-none border-secondary hover:border-primary"
            placeholder={textareaPlaceholder}
            maxLength={500}
            value={message}
            disabled={sent}
            onChange={e => setMessage(e.target.value)}
          />

          <div className="flex items-center space-x-4">
            <Button
              color="primary"
              className="font-somatic"
              wide={isMobile || isTablet}
              onClick={submit}
            >
              {sent ? 'Sent!' : 'Send'}
            </Button>

            {sent && (
              <p className="cursor-pointer hover:underline">Another request</p>
            )}
          </div>
        </div>
      </Contained>
    </div>
  );
};

export default Help;
