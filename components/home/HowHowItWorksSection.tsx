import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { SectionTitle } from 'components/SectionTitle';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import React, { FC } from 'react';

export default function HomeHowItWorksSection() {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <Contained>
      <SectionTitle>How It Works</SectionTitle>

      <div className={clsx('relative flex flex-col space-y-6 mt-2 pt-6')}>
        <TimelineBlock
          label="Go to a restaurant's page and pick an experience"
          image="https://images.ctfassets.net/tq39z0nxr0bv/6z0dRxzex6jSt0Hd5uGqet/0061e8f647d1d176ab3d0f435d0c6008/600-phone.png"
          place={1}
        />

        <TimelineBlock
          label="Book an experience, we'll send your confirmation code"
          image="https://images.ctfassets.net/tq39z0nxr0bv/2SqxPpmBqfaqEmMNPMFfqN/52d8c3c10eb1ee6b83c625ba605896ba/600-calendar.png"
          place={2}
        />

        <TimelineBlock
          label="Give your code to to the restaurant, and enjoy"
          image="https://images.ctfassets.net/tq39z0nxr0bv/68LskaFrEfKGEXk3ZfysNi/476e3dd9c5fbcc0960e617b88ecc4f84/600-vip.png"
          place={3}
        />

        {/* Connecting lines */}
        <div
          style={{ padding: '50px 0' }}
          className="absolute inset-0 flex justify-start ml-3"
        >
          <div className="h-full w-2 bg-gray-200 z-0"></div>
        </div>
      </div>
    </Contained>
  );
}

interface TimelineBlockProps {
  label: string;
  place: number;
  image: string;
}

const TimelineBlock: FC<TimelineBlockProps> = props => {
  const { label, place, image } = props;

  return (
    <div className="flex items-center gap-4 w-full z-10">
      <div
        style={{ minWidth: '2rem' }}
        className="w-8 h-8 flex items-center justify-center bg-white ring-2 ring-primary rounded-full"
      >
        <p className="font-primary text-primary font-bold text-lg leading-none">
          {place}
        </p>
      </div>

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

      <h4 className="text-base font-medium leading-snug">{label}</h4>
    </div>
  );
};
