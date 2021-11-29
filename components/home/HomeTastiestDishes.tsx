import { dlog, TastiestDish } from '@tastiest-io/tastiest-utils';
import TastiestDishCard from 'components/cards/TastiestDishCard';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { SectionTitle } from '../SectionTitle';

interface Props {
  cards: TastiestDish[];
}

export function HomeTastiestDishes(props: Props) {
  const { isHuge, isDesktop } = useScreenSize();
  const { cards } = props;

  dlog('HomeTastiestDishes ➡️ cards:', cards);

  return (
    <div className="flex flex-col space-y-4">
      <SectionTitle>The Tastiest Dishes in London!</SectionTitle>

      <HorizontalScrollable
        fit={isHuge ? 5 : isDesktop ? 4 : undefined}
        spacing={8}
      >
        {[...cards, ...cards].map(dish => (
          <div key={dish.id} style={{ minWidth: '200px' }}>
            <TastiestDishCard compact {...dish} />
          </div>
        ))}
      </HorizontalScrollable>
    </div>
  );
}
