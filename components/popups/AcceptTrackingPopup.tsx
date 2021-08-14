import { Button } from '@tastiest-io/tastiest-components';
import { CookieEmoji } from '@tastiest-io/tastiest-icons';
import { LocalStorageItem } from 'contexts/tracking';
import { useAuth } from 'hooks/auth/useAuth';
import React from 'react';
import { useLocalStorage } from 'react-use';
import { UI } from '../../constants';

export function AcceptTrackingPopup() {
  const { isSignedIn } = useAuth();
  const [hasAcceptedCookies, setHasAcceptedCookies] = useLocalStorage(
    LocalStorageItem.HAS_ACCEPTED_COOKIES,
    null,
  );

  const acceptAnalytics = () => {
    setHasAcceptedCookies(1);
  };

  if (hasAcceptedCookies || isSignedIn) {
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
        style={{
          filter: 'drop-shadow(0px 0px 5px rgba(0,0,0,0.15))',
          maxWidth: '95vw',
        }}
        className="flex flex-col items-center px-3 py-2 mb-2 text-center text-gray-800 bg-white rounded-md pointer-events-auto mobile:flex-row"
      >
        <p className="pl-2 pr-1 text-xs mobile:text-sm">
          <CookieEmoji className="inline w-4 mr-1" />
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
