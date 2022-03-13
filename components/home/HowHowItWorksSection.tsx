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
      <div className="flex flex-col py-6 space-y-6">
        <div
          className={clsx(
            'grid gap-6 grid-rows-1',
            isMobile && 'grid-cols-1',
            isTablet && 'grid-cols-2',
            isDesktop && 'grid-cols-4',
          )}
        >
          <InformationBlock
            label="Community Driven"
            image={
              'https://images.ctfassets.net/tq39z0nxr0bv/2WFskjswTMEGw1o8IL524U/484db6a04ef839b11e62b9ff12d15a2a/Booked_table.png'
            }
          >
            All restaurants are recommended by you and anonymously tested by us
          </InformationBlock>
          <InformationBlock
            label="Restaurant Stories"
            image="https://images.ctfassets.net/tq39z0nxr0bv/2WFskjswTMEGw1o8IL524U/484db6a04ef839b11e62b9ff12d15a2a/Booked_table.png"
          >
            Stories Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </InformationBlock>
          <InformationBlock
            label="Book Directly"
            image={
              'https://images.ctfassets.net/tq39z0nxr0bv/5MpdJ86OOL03uMdcVM3iKO/4b7b91bd89a566bf2b5adee632874a51/Hands_and_wine_glasses.png'
            }
          >
            Reserve your table through Tastiest
          </InformationBlock>
          <InformationBlock
            label="Be In The Know"
            image={
              'https://images.ctfassets.net/tq39z0nxr0bv/5c57DUVOkAxWtCfwi64jsk/28cab1c3a0b45f5f597df09a21fb17fc/Loyalty.png'
            }
          >
            Loyal customers follow restaurants and get access to special
            experiences
          </InformationBlock>
        </div>
      </div>
    </Contained>
  );
}

interface InformationBlockProps {
  label: string;
  image: string;
}

const InformationBlock: FC<InformationBlockProps> = props => {
  const { label, image, children } = props;

  return (
    <div className="flex flex-col w-full border border-primary px-4 py-6">
      <h4 className="text-lg font-medium text-center">
        <LineLimit lines={3} fit="tight">
          {label}
        </LineLimit>
      </h4>

      <div className="">
        <div className="flex justify-center items-center relative w-full h-32">
          <Image src={image} layout="fill" objectFit="contain" />
        </div>
      </div>

      <div className="pt-4 text-center leading-none font-light">{children}</div>
    </div>
  );
};
