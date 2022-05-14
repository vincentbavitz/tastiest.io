import clsx from 'clsx';
import { Contained } from 'components/Contained';
import CreationHeading from 'components/text/CreationHeading';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import React from 'react';

export default function HomeWhyTastiestSection() {
  const { isMobile } = useScreenSize();

  return (
    <Contained>
      <div className="flex justify-center mt-8">
        <CreationHeading>Why Tastiest</CreationHeading>
      </div>

      <div
        className={clsx(
          'flex gap-6 w-full pb-4',
          isMobile ? 'flex-col items-center' : '',
        )}
      >
        <div className="">
          <div className="font-primary mt-6 text-2xl leading-loose">
            Tastiest was established with one mission in mind:{' '}
            <span className="bg-blue-300 bg-opacity-25 pb-1 px-2">
              make sure foodies have the best experiences when dining out.
            </span>
          </div>

          <p className="leading-loose mt-10">
            We demand excellence from ourselves and our restaurant partners. We
            collaborate directly with London’s best restaurants to provide you
            with information you otherwise wouldn’t see such as interviews with
            chefs and behind the scenes footage of a top tier kitchen.
          </p>
        </div>

        <div style={{ minWidth: `${44 / 4}rem` }} className="relative">
          <Image
            src="https://images.ctfassets.net/tq39z0nxr0bv/7zN6nw2CDsolVDGS33zkvk/5bd404771f4761c76510ddaddd2aba6a/Tastiest_Blue_Platter.png"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </Contained>
  );
}
