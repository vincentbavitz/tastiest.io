/* eslint-disable jsx-a11y/media-has-caption */
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import CreationHeading from 'components/text/CreationHeading';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, ReactNode, useState } from 'react';
import Scroll from 'react-scroll';

const scroller = Scroll.scroller;

interface Props {
  withoutButtons?: boolean;
}

export default function HomeInformationSection(props: Props) {
  const { withoutButtons = false } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  const router = useRouter();

  const [showFollowModal, setShowFollowModal] = useState(false);

  return (
    <div className="text-light bg-primary">
      <CreationHeading color="light" backdropOpacity={10}>
        Benefits of Tastiest
      </CreationHeading>

      <Contained>
        <div className="flex flex-col items-center py-6 space-y-6">
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
                'https://images.ctfassets.net/tq39z0nxr0bv/7Me4aVwgxt1i3RvmiUQr3n/4f7a921a90f9232d27e8df3b779ec19b/wine_glasses_clink_2x.png?h=400'
              }
              sublabel="All restaurants are recommended by you and anonymously tested by us"
              withoutButton={withoutButtons}
              buttonText="Recommend a restaurant"
              onButtonClick={() => router.push('/recommend')}
            />

            <InformationBlock
              label="Restaurant Stories"
              image="https://images.ctfassets.net/tq39z0nxr0bv/115r7wGs5FM1fY953TceAv/dee35d3a25c8611fa61605ba11b7779e/600-book.png"
              sublabel="Feel the atmosphere through our cinematography and interviews"
              withoutButton={withoutButtons}
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
                'https://images.ctfassets.net/tq39z0nxr0bv/6fUQwVweKUTUOkGY01Qhbo/58117932bf3aed0fecfff458d1f7dd75/reservation_table_2x.png'
              }
              sublabel="Reserve your table through Tastiest"
              withoutButton={withoutButtons}
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
                'https://images.ctfassets.net/tq39z0nxr0bv/5ZHlLymrwX4jlLA3e1oxc5/202ae9787657c05867d5ae088605da21/loyalty_hand_2x.png'
              }
              sublabel="Loyal customers follow restaurants and get access to special
            experiences"
              withoutButton={withoutButtons}
              buttonText="Learn how"
              onButtonClick={() => setShowFollowModal(true)}
            />

            {/* <Modal
            title="How Following Works"
            show={showFollowModal}
            close={() => setShowFollowModal(false)}
          >
            <div style={{ maxWidth: '400px' }}>
              <span>
                When you follow a restaurant, you'll be notified about
                information that's important to you.
              </span>

              <div
                style={{ paddingBottom: '67%' }}
                className="h-0 w-full bg-gray-200"
              >
                <video
                  muted
                  autoPlay
                  playsInline // prevent fullscreen on iOS
                  controls={true}
                  src="https://videos.ctfassets.net/tq39z0nxr0bv/4Ywf56iS0PSDh1FKDO6sSW/eead542476fc5077d81c74c3e08b5d54/simplescreenrecorder-2022-03-15_22.57.53.webm"
                  className="mt-4 w-full border-2"
                />
              </div>

              <p className="text-center mt-4 italic">
                You can follow restaurants from their profile
              </p>
            </div>
          </Modal> */}
          </div>
        </div>
      </Contained>
    </div>
  );
}

interface InformationBlockProps {
  label: string;
  image: string;
  sublabel: string;
  buttonText: ReactNode;
  onButtonClick: () => void;

  withoutButton?: boolean;
}

const InformationBlock: FC<InformationBlockProps> = props => {
  const {
    label,
    image,
    sublabel,
    withoutButton,
    buttonText,
    onButtonClick,
  } = props;

  return (
    <div className="flex flex-col w-full px-4">
      <div className="">
        <div className="flex justify-center items-center relative w-full h-32">
          <Image src={image} layout="fill" objectFit="contain" />
        </div>
      </div>

      <h4 className="text-lg font-medium text-center mt-6">{label}</h4>

      <div className="flex items-center">
        <div className="text-center text-base font-light opacity-75">
          {sublabel}
        </div>
      </div>
    </div>
  );
};
