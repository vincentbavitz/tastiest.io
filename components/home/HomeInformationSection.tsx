import { SVG } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { SectionTitle } from 'components/SectionTitle';
import { useScreenSize } from 'hooks/useScreenSize';
import {
  HomeInformationBook,
  HomeInformationLove,
  HomeInformationPage,
  HomeInformationShare,
} from 'public/assets/page/home';
import React, { FC } from 'react';

export default function HomeInformationSection() {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <Contained>
      <SectionTitle>Why book with Tastiest?</SectionTitle>

      <div className="flex flex-col py-6 space-y-6">
        {/* <div className="bg-gray-200 h-64 w-full inline-block"></div> */}

        <div
          className={clsx(
            'grid gap-6 grid-rows-1',
            isMobile && 'grid-cols-1',
            isTablet && 'grid-cols-2',
            isDesktop && 'grid-cols-4',
          )}
        >
          <InformationBlock illustration={HomeInformationPage}>
            Know what to expect
          </InformationBlock>
          <InformationBlock illustration={HomeInformationShare}>
            News from the kitchen
          </InformationBlock>
          <InformationBlock illustration={HomeInformationLove}>
            Last minute tables
          </InformationBlock>
          <InformationBlock illustration={HomeInformationBook}>
            Book directly
          </InformationBlock>
        </div>
      </div>
    </Contained>
  );
}

interface InformationBlockProps {
  illustration: SVG;
}

const InformationBlock: FC<InformationBlockProps> = props => {
  const { illustration: Illustration, children } = props;

  return (
    <div className="w-full">
      <div className="flex justify-center items-center relative w-full h-32">
        <Illustration className="h-full w-full object-contain" />
      </div>

      <div className="pt-2 text-center leading-none font-medium flex justify-center">
        {children}
      </div>
    </div>
  );
};
