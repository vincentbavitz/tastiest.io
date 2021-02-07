import React from 'react';
import { useSelector } from 'react-redux';
import { CUISINES } from '../../constants';
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
