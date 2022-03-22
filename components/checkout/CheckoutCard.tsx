import { Media } from '@tastiest-io/tastiest-horus';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import Image from 'next/image';
import { ReactNode } from 'react';

interface CheckoutCardProps {
  experienceImage: Media;
  children: ReactNode;
}

export const CheckoutCard = (props: CheckoutCardProps) => {
  const { experienceImage, children } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  return (
    <div
      style={{
        height: 'min-content',
      }}
      className="relative"
    >
      <div
        style={{
          maxWidth: isMobile ? '340px' : 'unset',
        }}
        className="overflow-hidden shadow-lg rounded-md"
      >
        <div
          className={clsx(
            'flex overflow-hidden',
            isMobile && 'flex-col',
            isTablet && 'flex-row',
            isDesktop && 'flex-col',
          )}
        >
          <div
            style={{ minHeight: '200px' }}
            className={clsx(
              'relative bg-opacity-75 overflow-hidden',
              isMobile && 'w-full h-32',
              isTablet && 'w-44 h-44',
              isDesktop && 'w-full',
              isHuge && 'aspect-w-1 aspect-h-1',
            )}
          >
            <Image
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
              src={experienceImage ? `${experienceImage?.url}?w=700` : '/'}
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
