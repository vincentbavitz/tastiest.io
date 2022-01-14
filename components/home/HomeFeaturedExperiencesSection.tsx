import { ExperiencePost } from '@tastiest-io/tastiest-utils';
import { AbstractExperienceCard } from 'components/cards/AbstractExperienceCard';
import { CardGrid } from 'components/cards/CardGrid';
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

      <CardGrid>
        {cards.map(card => (
          <AbstractExperienceCard key={card.id} {...card} />
        ))}
      </CardGrid>
    </div>
  );
}
