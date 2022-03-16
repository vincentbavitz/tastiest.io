import { Button } from '@tastiest-io/tastiest-ui';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StyledUppercase from './text/StyledUppercase';

export default function SuggestRestaurantPrompBox() {
  const { isDesktop } = useScreenSize();

  return (
    <div style={{ maxWidth: 800 }} className="flex justify-center">
      <div className="flex justify-between relative drop-shadow-lg">
        {/* Image underlay */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://images.ctfassets.net/tq39z0nxr0bv/3mYExawK75BTsvwsJuJ7DD/534b2ca24534faa542ef5a45bccbfcf5/El_Vaquero_Carousel_5.png"
          />
        </div>
        <div className="absolute inset-0 bg-dark bg-opacity-50 z-0"></div>

        <div className="flex flex-col items-center justify-between py-4 px-4">
          <div className="z-10 px-6">
            <h4 className="font-primary text-light filter text-center drop-shadow-sm">
              <StyledUppercase size="2xl">
                Recommend a restaurant
              </StyledUppercase>
            </h4>

            <div className="pt-2 text-base text-light text-center mb-4">
              <p className="opacity-75">
                All our restaurant partners are recommended by you, our foodie
                community.
              </p>
              <p className="leading-none font-medium">
                {' '}
                Only the best make it.{' '}
              </p>
            </div>
          </div>

          <Link href="/recommend">
            <a className="no-underline">
              <Button color="light" size="large">
                Recommend
              </Button>
            </a>
          </Link>
        </div>

        {/* {isDesktop && (
          <div className="flex flex-col justify-end">
            <TastiestBrand type="full" theme="dark" size={10} />
          </div>
        )} */}
      </div>
    </div>
  );
}
