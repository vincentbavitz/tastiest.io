import React from 'react';
import { CUISINES, UI } from '../../constants';
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
    <div style={{ marginTop: `${UI.HEADER_HEIGHT_MOBILE_REM}rem` }}>
      <HorizontalScrollable spacing={0} chevronSize={12} {...props}>
        {Object.values(CUISINES)
          .sort((a, b) => b.popularity - a.popularity)
          .map(cuisine => (
            <CuisineItem
              key={cuisine?.name}
              name={cuisine?.name}
              svg={cuisine?.svg}
              onClick={handleItemClick}
            />
          ))}
      </HorizontalScrollable>
    </div>
  );
}
