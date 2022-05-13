import clsx from 'clsx';
import { Contained } from 'components/Contained';
import CreationHeading from 'components/text/CreationHeading';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import React, { FC } from 'react';

export default function HomeHowItWorksSection() {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <div className="bg-blue-300 bg-opacity-5 pb-10">
      <Contained>
        <div className="flex justify-center mt-12">
          <CreationHeading>How Tastiest Works</CreationHeading>
        </div>

        <div
          className={clsx(
            'relative flex mt-2 pt-6',
            isDesktop ? 'gap-6' : 'flex-col space-y-6',
          )}
        >
          <TimelineBlock
            label="Go to a restaurant's page and pick an experience."
            image="https://images.ctfassets.net/tq39z0nxr0bv/6z0dRxzex6jSt0Hd5uGqet/0061e8f647d1d176ab3d0f435d0c6008/600-phone.png"
            place={1}
          />

          <TimelineBlock
            label="Book an experience, we'll send your confirmation code."
            image="https://images.ctfassets.net/tq39z0nxr0bv/2SqxPpmBqfaqEmMNPMFfqN/52d8c3c10eb1ee6b83c625ba605896ba/600-calendar.png"
            place={2}
          />

          <TimelineBlock
            label="Give your code to to the restaurant, and enjoy!"
            image="https://images.ctfassets.net/tq39z0nxr0bv/68LskaFrEfKGEXk3ZfysNi/476e3dd9c5fbcc0960e617b88ecc4f84/600-vip.png"
            place={3}
          />
        </div>
      </Contained>
    </div>
  );
}

interface TimelineBlockProps {
  label: string;
  place: number;
  image: string;
}

const TimelineBlock: FC<TimelineBlockProps> = props => {
  const { label, place, image } = props;
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="font-primary text-primary text-3xl leading-none">
        0{place}.
      </p>

      <div>
        <div
          style={{
            width: '100px',
            height: '100px',
            margin: '0 auto',
          }}
          className="relative"
        >
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
      </div>

      <h4
        style={{ maxWidth: '250px' }}
        className="font-primary font-light text-center text-gray-600 text-base leading-snug"
      >
        {label}
      </h4>
    </div>
  );
};
