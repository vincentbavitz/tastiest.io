import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { ScreenContext } from 'contexts/screen';
import React, { useContext } from 'react';
import { SectionTitle } from '../SectionTitle';

interface Props {
  cards: JSX.Element[];
}

export function HomeFavouritesSection(props: Props) {
  const { isMobile, isTablet } = useContext(ScreenContext);
  const { cards } = props;

  return (
    <div className="flex flex-col space-y-4">
      <SectionTitle>Discover your next favourite dish!</SectionTitle>

      <HorizontalScrollable fit={2}>{cards}</HorizontalScrollable>
    </div>
  );
}
