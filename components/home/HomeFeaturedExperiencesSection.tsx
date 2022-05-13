import { ContentfulPost } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { AbstractExperienceCard } from 'components/cards/AbstractExperienceCard';
import { Contained } from 'components/Contained';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import CreationHeading from 'components/text/CreationHeading';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';

interface Props {
  cards: ContentfulPost[];
}

export default function HomeFeaturedExperiencesSection(props: Props) {
  const { cards } = props;
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  // FIX ME CORRECT ME
  // Sort cards so Numa is last; it's Coming Soon
  const sortedCards = [
    ...cards.filter(c => c.restaurant.name !== 'Numa'),
    ...cards.filter(c => c.restaurant.name === 'Numa'),
  ];

  return (
    <div className="relative">
      <Contained>
        <div className={clsx(!isDesktop && 'flex justify-center')}>
          <CreationHeading float={isDesktop ? 'right' : 'center'}>
            Featured Experiences
          </CreationHeading>
        </div>
      </Contained>

      <div className={clsx(isDesktop ? '-mt-20' : '')}>
        <HorizontalScrollable
          noPadding
          buttonsLocation="top"
          forceButtons
          spacing={6}
          verticalBuffer={6}
        >
          {sortedCards.map((card, key) => (
            <div key={key} className="mt-4" style={{ width: '250px' }}>
              <AbstractExperienceCard
                withViewRestaurant
                key={card.id}
                {...card}
              />
            </div>
          ))}
        </HorizontalScrollable>
      </div>
    </div>
  );
}
