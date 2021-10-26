import { Button, TastiestBrand } from '@tastiest-io/tastiest-components';
import { useScreenSize } from 'hooks/useScreenSize';
import Link from 'next/link';
import React from 'react';

export default function SuggestRestaurantPrompBox() {
  const { isDesktop } = useScreenSize();

  return (
    <div style={{ maxWidth: 800 }} className="flex justify-center">
      <div className="flex justify-between bg-gradient-to-br from-purple-400 p-6 via-blue-300 to-blue-400 rounded-lg relative drop-shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-3xl font-bold text-light filter drop-shadow-sm">
              Recommend a restaurant
            </h4>
            <div className="pt-2 text-lg text-gray-800">
              <p className="font-medium">Tastiest runs on your suggestions!</p>
              <p>
                We'd love to hear about your favourite restaurants and dishes.
              </p>
            </div>
          </div>

          <div
            style={{ height: '5.5rem' }}
            className="relative flex items-end space-x-10"
          >
            <Link href="/suggest">
              <a className="no-underline">
                <Button color="light" size="large">
                  Suggest
                </Button>
              </a>
            </Link>

            {isDesktop ? (
              <div className="relative">
                <p className="italic text-lg font-medium">Have your say!</p>

                <img
                  className="absolute -top-10 -left-6 w-20 fill-current text-light"
                  src="/assets/ui/bendy-arrow.svg"
                />
              </div>
            ) : (
              <div className="flex-grow flex justify-end pb-1">
                <TastiestBrand type="full" theme="dark" size={10} />
              </div>
            )}
          </div>
        </div>

        {isDesktop && (
          <div className="flex flex-col justify-end">
            <TastiestBrand type="full" theme="dark" size={10} />
          </div>
        )}
      </div>
    </div>
  );
}
