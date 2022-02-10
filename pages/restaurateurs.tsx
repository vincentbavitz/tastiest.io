import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';

function Restaurateurs() {
  const { isDesktop } = useScreenSize();

  return (
    <div className="">
      <div className={clsx('mt-12 py-10 bg-white shadow-xl')}>
        <Contained maxWidth={900}>
          <div
            className={clsx(
              'flex',
              isDesktop ? 'justify-between' : 'justify-center',
            )}
          ></div>
        </Contained>
      </div>
    </div>
  );
}

export default Restaurateurs;
