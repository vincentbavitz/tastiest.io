import { IPost } from '@tastiest-io/tastiest-utils';
import { CardGrid } from 'components/cards/CardGrid';
import { ExperienceCard } from 'components/cards/ExperienceCard';
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
          <ExperienceCard key={card.id} {...card} />
        ))}
      </CardGrid>
    </div>
  );
}
