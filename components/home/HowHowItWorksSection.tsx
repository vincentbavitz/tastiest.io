import clsx from 'clsx';
import { Contained } from 'components/Contained';
import LineLimit from 'components/text/LineLimit';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import React, { FC } from 'react';

export default function HomeHowItWorksSection() {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <Contained>
      <div
        className={clsx(
          'relative grid gap-6 grid-rows-1',
          isMobile && 'grid-cols-1',
          isTablet && 'grid-cols-3',
          isDesktop && 'grid-cols-3',
        )}
      >
        <TimelineBlock
          label="Go to a restaurant's page and pick an experience"
          image="https://images.ctfassets.net/tq39z0nxr0bv/QTS5Y0edHG9RQggGbidtO/b7422c2e6eb1a8125f2df28215040b44/phone.png"
        />

        <TimelineBlock
          label="Book an experience, we'll send your confirmation code"
          image="https://images.ctfassets.net/tq39z0nxr0bv/6EM4dK2EKzSW79CltjDWfM/9a6ae0e1415f8158cd801181a47dc8fc/calendar.png"
        />

        <TimelineBlock
          label="Give your code to to the restaurant, and enjoy"
          image="https://images.ctfassets.net/tq39z0nxr0bv/1w8v2RQYJEprawIqborEqx/8b5cdb960c3e983d9a8ca91d3307c535/vip.png"
        />

        {/* Connecting lines */}
        {isMobile ? (
          <div className="absolute inset-0 flex justify-center py-6">
            <div className="h-full w-2 bg-secondary z-0"></div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center z-0 px-6">
            <div className="w-full h-2 bg-secondary z-0"></div>
          </div>
        )}
      </div>
    </Contained>
  );
}

interface TimelineBlockProps {
  label: string;
  image: string;
}

const TimelineBlock: FC<TimelineBlockProps> = props => {
  const { label, image } = props;

  const { isMobile } = useScreenSize();

  return (
    <div className="w-full px-4 py-6 bg-white shadow-lg z-10">
      <h4 className="text-base font-medium text-center leading-snug">
        {isMobile ? (
          label
        ) : (
          <LineLimit lines={5} fit="tight">
            {label}
          </LineLimit>
        )}
      </h4>

      <div
        style={{
          maxWidth: '300px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            paddingBottom: '100%',
          }}
          className="flex justify-center items-center relative w-full h-0"
        >
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};
