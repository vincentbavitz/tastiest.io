import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';

function RestaurateurCalculator() {
  const { isDesktop } = useScreenSize();

  return (
    <div className="pt-12 pb-20">
      <Contained maxWidth={900}>
        <h1 className="font-primary text-center font-medium text-3xl text-primary mb-2">
          Let's find out what Tastiest can do for El Vaquero.
        </h1>
      </Contained>
    </div>
  );
}

export default RestaurateurCalculator;
