import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { SectionTitle } from 'components/SectionTitle';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { FC } from 'react';

export default function HomeInformationSection() {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <Contained>
      <SectionTitle>Why book with Tastiest?</SectionTitle>

      <div className="flex flex-col py-6 space-y-6">
        <div className="bg-gray-200 h-64 w-full inline-block"></div>

        <div
          className={clsx(
            'grid gap-6 grid-rows-1',
            isMobile && 'grid-cols-1',
            isTablet && 'grid-cols-2',
            isDesktop && 'grid-cols-4',
          )}
        >
          <InformationBlock>Know what to expect</InformationBlock>
          <InformationBlock>News from the kitchen</InformationBlock>
          <InformationBlock>Last minute tables</InformationBlock>
          <InformationBlock>Book directly</InformationBlock>
        </div>
      </div>
    </Contained>
  );
}

const InformationBlock: FC = ({ children }) => {
  return (
    <div className="w-full">
      <div className="bg-gray-200 w-full h-32 inline-block"></div>

      <div className="pt-2 font-medium flex justify-center">{children}</div>
    </div>
  );
};
