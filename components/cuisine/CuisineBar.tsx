import React from 'react';
import { useSelector } from 'react-redux';
import { CUISINES, UI } from '../../constants';
import { IState } from '../../state/reducers';
import { HorizontalScrollable } from '../HorizontalScrollable';
import { CuisineItem } from './CuisineItem';

interface Props {
  onItemClick?(): void;
}

export function CuisineBar(props: Props) {
  const { onItemClick } = props;
  const { onCheckoutPage } = useSelector((state: IState) => state.checkout);

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  if (onCheckoutPage) {
    return null;
  }

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
