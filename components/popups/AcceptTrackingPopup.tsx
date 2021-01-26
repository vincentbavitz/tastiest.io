import React from 'react';
import { useLocalStorage } from 'react-use';
import { UI } from '../../constants';
import { LocalStorageItem } from '../../types/data';
import { Button } from '../Button';

export function AcceptTrackingPopup() {
  const [hasAcceptedCookies, setHasAcceptedCookies] = useLocalStorage(
    LocalStorageItem.HAS_ACCEPTED_COOKIES,
    null,
  );

  const acceptAnalytics = () => {
    setHasAcceptedCookies(1);
    window?.analytics?.on();
  };

  return (
    <>
      {!hasAcceptedCookies && (
        <div className="fixed bottom-0 flex justify-center w-full">
          <div
            style={{
              zIndex: UI.Z_INDEX_GPDR_POPUP,
            }}
            className="flex items-center bg-white shadow-md rounded-md text-black px-3 py-2 mb-2"
          >
            <p className="pl-1 pr-1">
              By using Tastiest, you agree to our{' '}
              <a href="#" className="underline">
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
