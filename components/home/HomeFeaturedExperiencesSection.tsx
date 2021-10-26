import { IPost } from '@tastiest-io/tastiest-utils';
import { AbstractExperienceCard } from 'components/cards/AbstractExperienceCard';
import { CardGrid } from 'components/cards/CardGrid';
import { SectionTitle } from 'components/SectionTitle';
import React from 'react';

interface Props {
  cards: IPost[];
}

export default function HomeFeaturedExperiencesSection(props: Props) {
  const { cards } = props;

  return (
    <div className="relative overflow-hidden pt-32">
      <div className="pb-6">
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
