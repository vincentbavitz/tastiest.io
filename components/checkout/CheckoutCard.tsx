import { IOrder } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { ReactNode } from 'react';

interface Props {
  title: string;
  order: IOrder;
  children: ReactNode;
  isLoading?: boolean;
}

export function CheckoutCard(props: Props) {
  const { title, order, children } = props;
  const { isMobile, isTablet, isDesktop } = useScreenSize();

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
          className="w-full px-3 py-3 font-medium leading-none text-center font-secondary bg-secondary"
        >
          {title}
        </div>

        <div
          className={clsx(
            'flex overflow-hidden flex-col sm:flex-row md:flex-col border-2 border-secondary md:border-0 rounded-b-xl md:rounded-b-none',
          )}
        >
          <div
            className={clsx(
              'relative bg-opacity-75 overflow-hidden',
              isMobile && '',
              isTablet ? 'w-40 h-40' : 'aspect-w-1 aspect-h-1',
              isDesktop &&
                'border-l-2 border-r-2 border-secondary pl-px w-full',
            )}
          >
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={`${order?.deal?.image?.url}?w=700`}
            />
          </div>

          <div className="flex flex-col justify-between flex-grow px-3 pt-3 pb-4 space-y-3 md:border-b-2 md:border-l-2 md:border-r-2 border-secondary rounded-b-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
