import { ExperiencePost, ExperienceProduct } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import { DESKTOP_OFFER_WIDGET_WIDTH_PX } from 'layouts/LayoutExperience';
import React from 'react';
import ExperienceOrderPanelInner from './ExperienceOrderPanelInner';

export interface ExperienceOrderPanelProps {
  deal: ExperienceProduct;
  slug: string;
  posts: ExperiencePost[];
}

const OFFER_WIDGET_FLOAT_GAP_PX = 120;

export function ExperienceOrderPanelDesktop(props: ExperienceOrderPanelProps) {
  const { deal, posts, slug: fromSlug } = props;
  const { isDesktop } = useScreenSize();

  return (
    <div
      style={{
        height: 'fit-content',
        top: `${OFFER_WIDGET_FLOAT_GAP_PX}px`,
        width: `${DESKTOP_OFFER_WIDGET_WIDTH_PX}px`,
      }}
      className="sticky"
    >
      <div className={clsx('w-full pointer-events-none duration-150 right-0')}>
        <div className="flex justify-end w-full">
          <div
            style={{
              width: isDesktop ? `${DESKTOP_OFFER_WIDGET_WIDTH_PX}px` : '400px',
              maxWidth: isDesktop ? 'unset' : '75vw',
            }}
            className="relative z-30 bg-white shadow-lg border-2 border-gray-100 pointer-events-auto last:pb-4 border-secondary-1 rounded-xl pb-2"
          >
            <div className="pb-4 mx-2 overflow-hidden bg-secondary-1 rounded-xl">
              <div className="flex flex-col justify-center px-2 pt-6 space-y-3">
                <p className="text-lg leading-none text-center font-primary">
                  Book the experience
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
      </div>
    </div>
  );
}
