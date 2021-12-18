import { Modal } from '@tastiest-io/tastiest-ui';
import { ExperiencePost, ExperienceProduct } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { UI } from '../../../constants';
import ExperienceOrderPanelInner from './ExperienceOrderPanelInner';

interface Props {
  deal: ExperienceProduct;
  slug: string;
  posts: ExperiencePost[];
}

export default function ExperienceOrderPanelMobile({
  deal,
  slug,
  posts,
}: Props) {
  const [displayOverlay, setDisplayOverlay] = useState(false);

  // Close mobile overlay once we move to /checkout
  const router = useRouter();
  router?.events?.on('routeChangeComplete', () => {
    setDisplayOverlay(false);
  });

  return (
    <>
      <div
        style={{ zIndex: UI.Z_INDEX_FLOATING_COMPONENTS }}
        className="fixed bottom-0 left-0 right-0 pb-6"
      >
        <button
          onClick={() => setDisplayOverlay(true)}
          className={clsx(
            'fixed bottom-0 left-0 right-0 w-full h-14 flex items-center justify-center',
            'bg-primary hover:bg-secondary duration-300',
            'text-light text-lg outline-none font-medium tracking-wide',
          )}
        >
          GET IT
        </button>
      </div>

      <Modal
        title="Get the offer"
        show={displayOverlay}
        close={() => setDisplayOverlay(false)}
        fullscreen
      >
        <div className="relative flex-grow overflow-hidden mt-4 mb-4 -mx-6">
          <OverlayInnerCard deal={deal} slug={slug} />
        </div>

        <div
          className="-mx-6 pt-6"
          style={{ boxShadow: 'inset 0px 15px 15px -15px rgba(0,0,0,0.08)' }}
        >
          <ExperienceOrderPanelInner
            layout="overlay"
            posts={posts}
            deal={deal}
            slug={slug}
          />
        </div>
      </Modal>
    </>
  );
}

interface OverlayInnerCardProps {
  deal: ExperienceProduct;
  slug: string;
}

const OverlayInnerCard = ({ deal, slug }: OverlayInnerCardProps) => {
  return (
    <div className="flex justify-center w-full">
      <div
        style={{ width: '100%', maxHeight: '15rem', maxWidth: '33rem' }}
        className="relative rounded-lg bg-transparent px-4 overflow-hidden"
      >
        <img
          src={`${deal?.image?.url}?w=700`}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
};
