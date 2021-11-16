import { IOrder } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import { useScreenSize } from 'hooks/useScreenSize';

interface CheckoutCardProps {
  order: IOrder;
  children: ReactNode;
}

export const CheckoutCard = (props: CheckoutCardProps) => {
  const { order, children } = props;
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <div
      style={{
        height: 'min-content',
      }}
      className="relative"
    >
      <div className="overflow-hidden shadow-lg rounded-md">
        <div
          className={clsx(
            'flex overflow-hidden flex-col sm:flex-row md:flex-col',
          )}
        >
          <div
            className={clsx(
              'relative bg-opacity-75 overflow-hidden',
              isMobile && '',
              isTablet ? 'w-40 h-40' : 'aspect-w-1 aspect-h-1',
              isDesktop && 'w-full',
            )}
          >
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={`${order?.deal?.image?.url}?w=700`}
            />
          </div>

          <div className="flex flex-col justify-between flex-grow px-4 pt-3 pb-4 space-y-3 md:border-b-2 md:border-l-2 md:border-r-2 border-secondary rounded-b-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
