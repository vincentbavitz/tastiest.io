import React from 'react';
import { CUISINES } from '../../constants';
import { HorizontalScrollable } from '../HorizontalScrollable';
import { CuisineItem } from './CuisineItem';

interface Props {
  onItemClick?(): void;
}

export function CuisineBar(props: Props) {
  const { onItemClick } = props;

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="mt-20">
      <HorizontalScrollable {...props}>
        {Object.values(CUISINES).map(cuisine => (
          <CuisineItem
            key={cuisine.name}
            name={cuisine.name}
            svg={cuisine.svg}
            onClick={handleItemClick}
          />
        ))}
      </HorizontalScrollable>
    </div>
  );
}
