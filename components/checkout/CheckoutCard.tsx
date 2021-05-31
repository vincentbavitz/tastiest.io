import { IOrder } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  order: IOrder;
  children: ReactNode;
}

export function CheckoutCard(props: Props) {
  const { title, order, children } = props;
  const { isMobile } = useScreenSize();

  if (!order) return null;

  return (
    <div
      style={{
        height: 'min-content',
      }}
      className="relative"
    >
      <div className="overflow-hidden rounded-t-xl">
        <div
          style={{}}
          className="w-full px-3 py-3 font-medium leading-none text-center font-roboto bg-secondary"
        >
          {title}
        </div>

        <div className="flex flex-row overflow-hidden border-2 rounded-b-xl tablet:flex-col border-secondary">
          <div className="relative w-64 h-40 bg-opacity-75 sm:border-l-2 sm:border-r-2 sm:w-full border-secondary">
            <img
              className="object-cover w-full h-full"
              src={`${order?.deal?.image?.imageUrl}?w=300`}
            />
          </div>

          <div className="flex flex-col flex-grow px-3 pt-3 pb-4 space-y-3 tablet:border-b-2 tablet:border-l-2 tablet:border-r-2 border-secondary rounded-b-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
