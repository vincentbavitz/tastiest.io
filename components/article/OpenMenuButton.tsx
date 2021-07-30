import clsx from 'clsx';
import { OpenMenuIcon } from 'public/assets/article';
import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { toggleOfferMenu } from 'state/navigation';

interface Props {
  children: ReactNode;
}

export default function OpenMenuButton(props: Props) {
  const { children } = props;
  const dispatch = useDispatch();

  return (
    <div className="relative flex items-center h-10">
      <div
        onClick={() => dispatch(toggleOfferMenu(true))}
        style={{ height: '59.42857%' }}
        className={clsx(
          'relative pl-16 pr-4 text-white duration-200 flex items-center rounded-md cursor-pointer whitespace-nowrap',
          'bg-primary hover:-bg-primary-1',
        )}
      >
        <div style={{ lineHeight: '0' }} className="font-medium">
          {children}
        </div>
      </div>

      <OpenMenuIcon className="absolute top-0 bottom-0 h-full cursor-pointer left-2" />
    </div>
  );
}
