import { Button } from '@tastiest-io/tastiest-components';
import { CookieEmoji } from '@tastiest-io/tastiest-icons';
import { LocalStorageItem } from 'contexts/tracking';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { useLocalStorage } from 'react-use';
import { UI } from '../../constants';

export function AcceptTrackingPopup() {
  const { isMobile } = useScreenSize();

  const [hasAcceptedCookies, setHasAcceptedCookies] = useLocalStorage(
    LocalStorageItem.HAS_ACCEPTED_COOKIES,
    null,
  );

  const acceptAnalytics = () => {
    setHasAcceptedCookies(1);
  };

  if (hasAcceptedCookies) {
    return null;
  }

  return (
    <div
      style={{
        zIndex: UI.Z_INDEX_GDPR_POPUP,
      }}
      className="fixed bottom-0 flex justify-center w-full pointer-events-none"
    >
      <div
        style={{ filter: 'drop-shadow(0px 0px 5px rgba(0,0,0,0.15))' }}
        className="flex items-center px-3 py-2 mb-2 text-gray-800 bg-white rounded-md pointer-events-auto"
      >
        <CookieEmoji className="w-6 pl-1" />
        <p className="pl-2 pr-1 text-sm mobile:text-base">
          By using Tastiest, you agree to our{' '}
          <a
            href="/privacy"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            cookie policy
          </a>
          .
        </p>

        <Button
          type="text"
          color="primary"
          size="small"
          onClick={acceptAnalytics}
        >
          OK
        </Button>
      </div>
    </div>
  );
}
