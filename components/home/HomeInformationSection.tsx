import clsx from 'clsx';
import { Contained } from 'components/Contained';
import CreationHeading from 'components/text/CreationHeading';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
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

      <div className="border-t opacity-25"></div>

      <Contained>
        <div className={clsx('flex')}>
          <div className="flex flex-col gap-6 mt-6 mb-8">
            <InformationBlock
              label="Community Driven"
              image={
                'https://images.ctfassets.net/tq39z0nxr0bv/7Me4aVwgxt1i3RvmiUQr3n/4f7a921a90f9232d27e8df3b779ec19b/wine_glasses_clink_2x.png?h=400'
              }
              sublabel="All restaurants are recommended by you and anonymously tested by us"
            />
            <InformationBlock
              label="Book Directly"
              image={
                'https://images.ctfassets.net/tq39z0nxr0bv/6fUQwVweKUTUOkGY01Qhbo/58117932bf3aed0fecfff458d1f7dd75/reservation_table_2x.png'
              }
              sublabel="Reserve your table through Tastiest"
            />
          </div>

          {isHuge && (
            <div>
              <div style={{ width: '350px' }} className="relative h-full">
                <Image
                  src="https://images.ctfassets.net/tq39z0nxr0bv/KswcfirT5Jm4J3OcUQizM/6c331fa67648123de13e9f6de0e2d1b4/Rectangle_33_2x.png?h=700"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-6 mt-6 mb-8">
            <InformationBlock
              label="Restaurant Stories"
              image="https://images.ctfassets.net/tq39z0nxr0bv/115r7wGs5FM1fY953TceAv/dee35d3a25c8611fa61605ba11b7779e/600-book.png"
              sublabel="Feel the atmosphere through our cinematography and interviews"
            />

            <InformationBlock
              label="Be In The Know"
              image={
                'https://images.ctfassets.net/tq39z0nxr0bv/5ZHlLymrwX4jlLA3e1oxc5/202ae9787657c05867d5ae088605da21/loyalty_hand_2x.png'
              }
              sublabel="Loyal customers follow restaurants and get access to special experiences"
            />
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
}

const InformationBlock: FC<InformationBlockProps> = props => {
  const { label, image, sublabel } = props;

  return (
    <div className="flex flex-col w-full px-4">
      <div className="">
        <div className="flex justify-center items-center relative w-full h-32">
          <Image src={image} layout="fill" objectFit="contain" />
        </div>
      </div>

      <h4 className="text-lg font-medium text-center mt-6">{label}</h4>

      <div className="flex items-center">
        <div className="w-full text-center text-base font-light opacity-75">
          {sublabel}
        </div>
      </div>
    </div>
  );
};
