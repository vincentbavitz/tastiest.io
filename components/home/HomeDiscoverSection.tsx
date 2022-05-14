import { ArrowRightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import React, { useRef } from 'react';
import Scroll from 'react-scroll';
import { useHoverDirty } from 'react-use';

const scroller = Scroll.scroller;

export default function HomeDiscoverSection() {
  const { isDesktop, isTablet, isMobile } = useScreenSize();

  const scrollTo = (to: string) => {
    scroller.scrollTo(to, {
      duration: 250,
      smooth: true,
      offset: -50,
    });
  };

  return (
    <Contained>
      <div
        className={clsx(
          'flex',
          'my-6',
          isMobile ? 'flex-col' : '',
          isTablet ? 'gap-8' : 'gap-12',
        )}
      >
        <DiscoverBlock
          label="Discover Restaurants"
          image="https://images.ctfassets.net/tq39z0nxr0bv/4ObOP95uddGx55mo04YF9T/52ace8bb8f411293b6961b26b9fea9ec/Rectangle_20_2x.png?h=600"
          description=""
          onClick={() => scrollTo('featured-restaurants-section')}
        />

        <DiscoverBlock
          label="Dining Experiences"
          image="https://images.ctfassets.net/tq39z0nxr0bv/7eMdV9FxnLDiGc1phAFx49/dc654fa8680cc8e23594348b550e21e0/Rectangle_20_2x.png?h=600"
          description=""
          onClick={() => scrollTo('featured-experiences-section')}
        />
      </div>
    </Contained>
  );
}

interface DiscoverBlockProps {
  label: string;
  description: string;
  image: string;
  onClick: () => void;
}

const DiscoverBlock = (props: DiscoverBlockProps) => {
  const { label, description, image, onClick } = props;

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  const splitLabel = label.split(' ');

  return (
    <div ref={ref} onClick={onClick} className="w-full cursor-pointer">
      <div className="flex flex-col space-y-4">
        <div
          style={{ paddingBottom: '100%' }}
          className={clsx('relative w-full h-0 overflow-hidden')}
        >
          <Image
            layout="fill"
            className={clsx(
              'object-cover w-full h-full transform duration-300',
              isHovering && 'scale-105',
            )}
            src={image}
          />
        </div>

        <div>
          {splitLabel.map((s, index) => (
            <div
              key={s}
              className="flex items-center font-primary text-primary leading-8 text-2xl"
            >
              {s}
              {index !== splitLabel.length - 1 && <br />}

              {index === splitLabel.length - 1 && (
                <div className="inline mt-1 ml-2">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border border-primary text-xs">
                    <ArrowRightOutlined
                      style={{
                        transform: `translateX(${isHovering ? '2px' : '0'})`,
                      }}
                      className="duration-300"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p
          className={clsx(
            'leading-loose text-sm duration-300',
            isHovering ? 'text-dark' : 'text-gray-600',
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
