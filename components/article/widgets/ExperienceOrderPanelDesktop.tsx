import { IDeal, IPost } from '@tastiest-io/tastiest-utils';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import ExperienceOrderPanelInner from './ExperienceOrderPanelInner';

export interface ExperienceOrderPanelProps {
  deal: IDeal;
  slug: string;
  posts: IPost[];
}

const DESKTOP_OFFER_WIDGET_WIDTH_PX = 350;

export function ExperienceOrderPanelDesktop(props: ExperienceOrderPanelProps) {
  const { deal, posts, slug: fromSlug } = props;
  const { isDesktop } = useScreenSize();

  return (
    <div className="flex justify-end w-full">
      <div
        style={{
          width: isDesktop
            ? `calc(${DESKTOP_OFFER_WIDGET_WIDTH_PX}px - 2rem)`
            : '400px',
          maxWidth: isDesktop ? 'unset' : '75vw',
        }}
        className="relative z-30 bg-white border-4 pointer-events-auto last:pb-4 border-secondary-1 rounded-xl pb-2"
      >
        <div className="pb-4 mx-2 overflow-hidden bg-secondary-1 rounded-xl">
          <div className="flex flex-col justify-center px-2 pt-6 space-y-3">
            <p className="text-lg leading-none text-center font-primary">
              Buy the experience
            </p>
          </div>
        </div>

        <div className="py-2 mx-4">
          <ExperienceOrderPanelInner
            layout="sidebar"
            deal={deal}
            slug={fromSlug}
            posts={posts}
          />
        </div>
      </div>
    </div>
  );
}
