import { ExperiencePost } from '@tastiest-io/tastiest-utils';
import { AbstractExperienceCard } from 'components/cards/AbstractExperienceCard';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { SectionTitle } from 'components/SectionTitle';
import React from 'react';

interface Props {
  cards: ExperiencePost[];
}

export default function HomeFeaturedExperiencesSection(props: Props) {
  const { cards } = props;

  return (
    <div className="relative pt-16">
      <div className="pb-10">
        <SectionTitle>Featured Experiences</SectionTitle>
      </div>

      <HorizontalScrollable
        noPadding
        forceButtons
        verticalBuffer={6}
        spacing={6}
      >
        {cards.map((card, key) => (
          <div key={key} style={{ width: '250px' }}>
            <AbstractExperienceCard key={card.id} {...card} />
          </div>
        ))}
      </HorizontalScrollable>
    </div>
  );
}
