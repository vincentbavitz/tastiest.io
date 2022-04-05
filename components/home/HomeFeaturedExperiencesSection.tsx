import { ContentfulPost } from '@tastiest-io/tastiest-utils';
import { AbstractExperienceCard } from 'components/cards/AbstractExperienceCard';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { SectionTitle } from 'components/SectionTitle';
import React from 'react';

interface Props {
  cards: ContentfulPost[];
}

export default function HomeFeaturedExperiencesSection(props: Props) {
  const { cards } = props;

  // FIX ME CORRECT ME
  // Sort cards so Numa is last; it's Coming Soon
  const sortedCards = [
    ...cards.filter(c => c.restaurant.name !== 'Numa'),
    ...cards.filter(c => c.restaurant.name === 'Numa'),
  ];

  return (
    <div className="relative">
      <div className="pb-10">
        <SectionTitle>Featured Experiences</SectionTitle>
      </div>

      <div className="-mt-6">
        <HorizontalScrollable
          noPadding
          forceButtons
          spacing={6}
          verticalBuffer={6}
          buttonsOffset={-35}
        >
          {sortedCards.map((card, key) => (
            <div key={key} style={{ width: '250px' }}>
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
