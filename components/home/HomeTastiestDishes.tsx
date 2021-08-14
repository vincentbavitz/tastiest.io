import { ITastiestDish } from '@tastiest-io/tastiest-utils';
import TastiestDishCard from 'components/cards/TastiestDishCard';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { SectionTitle } from '../SectionTitle';

interface Props {
  cards: ITastiestDish[];
}

export function HomeTastiestDishes(props: Props) {
  const { isHuge, isDesktop } = useScreenSize();
  const { cards } = props;

  return (
    <div className="flex flex-col space-y-4">
      <SectionTitle>Featured London Dishes</SectionTitle>

      <HorizontalScrollable fit={isHuge ? 5 : isDesktop ? 4 : undefined}>
        {cards.map(dish => (
          <div
            key={dish.id}
            style={{ minWidth: isDesktop ? 'unset' : '200px' }}
          >
            <TastiestDishCard compact {...dish} />
          </div>
        ))}
      </HorizontalScrollable>
    </div>
  );
}
