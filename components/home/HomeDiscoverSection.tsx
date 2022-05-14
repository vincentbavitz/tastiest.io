import clsx from 'clsx';
import { Contained } from 'components/Contained';
import ImageLinkBlock from 'components/ImageLinkBlock';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import Scroll from 'react-scroll';

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
        <ImageLinkBlock
          label={['Discover', 'Restaurants']}
          image="https://images.ctfassets.net/tq39z0nxr0bv/4ObOP95uddGx55mo04YF9T/52ace8bb8f411293b6961b26b9fea9ec/Rectangle_20_2x.png?h=600"
          description=""
          onClick={() => scrollTo('featured-restaurants-section')}
        />

        <ImageLinkBlock
          label={['Dining', 'Experiences']}
          image="https://images.ctfassets.net/tq39z0nxr0bv/7eMdV9FxnLDiGc1phAFx49/dc654fa8680cc8e23594348b550e21e0/Rectangle_20_2x.png?h=600"
          description=""
          onClick={() => scrollTo('featured-experiences-section')}
        />
      </div>
    </Contained>
  );
}
