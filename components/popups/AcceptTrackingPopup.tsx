import { Button } from '@tastiest-io/tastiest-components';
import clsx from 'clsx';
import { LocalStorageItem } from 'contexts/tracking';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { useLocalStorage } from 'react-use';
import { UI } from '../../constants';

export function AcceptTrackingPopup() {
  const [hasAcceptedCookies, setHasAcceptedCookies] = useLocalStorage(
    LocalStorageItem.HAS_ACCEPTED_COOKIES,
    null,
  );

  const acceptAnalytics = () => {
    setHasAcceptedCookies(1);
    window?.analytics?.on();
  };

  const { isMobile } = useScreenSize();

  return (
    <>
      {!hasAcceptedCookies && (
        <div
          style={{
            zIndex: UI.Z_INDEX_GDPR_POPUP,
          }}
          className="fixed bottom-0 flex justify-center w-full pointer-events-none"
        >
          <div className="flex items-center px-3 py-2 mb-2 text-black bg-white rounded-md shadow-md pointer-events-auto">
            <p className={clsx('pl-1 pr-1', isMobile && 'text-xs')}>
              By using Tastiest, you agree to our{' '}
              <a href="/privacy" className="underline">
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
      )}
    </>
  );
}
