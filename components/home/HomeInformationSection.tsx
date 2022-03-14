import { Modal } from '@tastiest-io/tastiest-ui';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import FancyBorder from 'components/FancyBorder';
import LineLimit from 'components/text/LineLimit';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, ReactNode, useState } from 'react';
import Scroll from 'react-scroll';

const scroller = Scroll.scroller;

export default function HomeInformationSection() {
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();
  const router = useRouter();

  const [showFollowModal, setShowFollowModal] = useState(false);

  return (
    <Contained>
      <div className="flex flex-col py-6 space-y-6">
        <div
          className={clsx(
            'grid gap-4 grid-rows-1',
            isMobile && 'grid-cols-1',
            isTablet && 'grid-cols-2',
            isDesktop && 'grid-cols-2',
            isHuge && 'grid-cols-4',
          )}
        >
          <InformationBlock
            label="Community Driven"
            image={
              'https://images.ctfassets.net/tq39z0nxr0bv/2WFskjswTMEGw1o8IL524U/484db6a04ef839b11e62b9ff12d15a2a/Booked_table.png'
            }
            sublabel="All restaurants are recommended by you and anonymously tested by us"
            buttonText="Recommend a restaurant"
            onButtonClick={() => router.push('/recommend')}
          />

          <InformationBlock
            label="Restaurant Stories"
            image="https://images.ctfassets.net/tq39z0nxr0bv/2WFskjswTMEGw1o8IL524U/484db6a04ef839b11e62b9ff12d15a2a/Booked_table.png"
            sublabel="Stories Lorem ipsum dolor sit amet consectetur adipisicing elit"
            buttonText="Browse restaurants"
            onButtonClick={() =>
              scroller.scrollTo('featured-restaurants-section', {
                duration: 250,
                smooth: true,
                offset: -75,
              })
            }
          />

          <InformationBlock
            label="Book Directly"
            image={
              'https://images.ctfassets.net/tq39z0nxr0bv/5MpdJ86OOL03uMdcVM3iKO/4b7b91bd89a566bf2b5adee632874a51/Hands_and_wine_glasses.png'
            }
            sublabel="Reserve your table through Tastiest"
            buttonText="Browse experiences"
            onButtonClick={() =>
              scroller.scrollTo('featured-experiences-section', {
                duration: 250,
                smooth: true,
                offset: -75,
              })
            }
          />

          <InformationBlock
            label="Be In The Know"
            image={
              'https://images.ctfassets.net/tq39z0nxr0bv/5c57DUVOkAxWtCfwi64jsk/28cab1c3a0b45f5f597df09a21fb17fc/Loyalty.png'
            }
            sublabel="Loyal customers follow restaurants and get access to special
            experiences"
            buttonText="Learn how"
            onButtonClick={() => setShowFollowModal(true)}
          />

          <Modal
            title="How Follow Works"
            show={showFollowModal}
            close={() => setShowFollowModal(false)}
          >
            <span>
              When you follow a restaurant, you'll be notified about information
              that's important to you.
            </span>
          </Modal>
        </div>
      </div>
    </Contained>
  );
}

interface InformationBlockProps {
  label: string;
  image: string;
  sublabel: string;
  buttonText: ReactNode;
  onButtonClick: () => void;
}

const InformationBlock: FC<InformationBlockProps> = props => {
  const { label, image, sublabel, buttonText, onButtonClick } = props;

  return (
    <FancyBorder layers="double">
      <div className="flex flex-col w-full px-4 py-6">
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

        <div className="pt-4 text-center text-base font-light">
          <LineLimit lines={2}>{sublabel}</LineLimit>
        </div>

        <div
          onClick={onButtonClick}
          className="text-center px-4 py-2 mt-4 text-base text-light font-medium cursor-pointer w-full bg-primary duration-300 filter hover:brightness-125"
        >
          {buttonText}
        </div>
      </div>
    </FancyBorder>
  );
};
