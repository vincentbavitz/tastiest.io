import { Switch } from '@tastiest-io/tastiest-ui';
import { dlog } from '@tastiest-io/tastiest-utils';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useCookie } from 'react-use';

type DevSettings = {
  contentfulEnvironment: 'production' | 'development';
};

const defaultDevSettings: DevSettings = {
  contentfulEnvironment: 'development',
};

export default function DevToggles() {
  const [devSettingsString, setDevSettings, deleteCookie] = useCookie(
    'dev-settings',
  );

  const router = useRouter();

  const devSettings: DevSettings = useMemo(() => {
    if (!devSettingsString?.length) {
      return defaultDevSettings;
    }

    try {
      return JSON.parse(devSettingsString);
    } catch (error) {
      return defaultDevSettings;
    }
  }, [devSettingsString]);

  // Hard reload any time Contentful environment changes
  const onChangeContentfulEnvironment = () => {
    const updatedSettings: DevSettings = {
      ...devSettings,
      contentfulEnvironment:
        devSettings.contentfulEnvironment === 'development'
          ? 'production'
          : 'development',
    };

    setDevSettings(JSON.stringify(updatedSettings));
    router.reload();
  };

  dlog('DevToggles ➡️ devSettings:', devSettings);

  return (
    <div
      style={{ zIndex: 100000 }}
      className="fixed bottom-6 right-6 text-sm px-4 py-2 rounded-md bg-white shadow-md"
    >
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <span>
            Contentful Production Mode {devSettings.contentfulEnvironment}
          </span>

          <Switch
            size="small"
            checked={devSettings.contentfulEnvironment === 'production'}
            onChange={onChangeContentfulEnvironment}
          />
        </div>
      </div>
    </div>
  );
}
