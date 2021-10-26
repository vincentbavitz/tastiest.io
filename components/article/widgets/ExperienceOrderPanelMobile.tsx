import { ExitIcon } from '@tastiest-io/tastiest-icons';
import { IDeal, IPost } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useLockBodyScroll } from 'react-use';
import { UI } from '../../../constants';
import ExperienceOrderPanelInner from './ExperienceOrderPanelInner';

interface Props {
  deal: IDeal;
  slug: string;
  posts: IPost[];
}

export default function ExperienceOrderPanelMobile({
  deal,
  slug,
  posts,
}: Props) {
  const [displayOverlay, setDisplayOverlay] = useState(false);
  useLockBodyScroll(displayOverlay);

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

      {displayOverlay && (
        <OrderNowOverlay
          deal={deal}
          slug={slug}
          posts={posts}
          onClose={() => setDisplayOverlay(false)}
        />
      )}
    </>
  );
}

interface OrderNowOverlayProps extends Props {
  onClose: () => void;
}

const OrderNowOverlay = ({
  deal,
  posts,
  slug,
  onClose,
}: OrderNowOverlayProps) => {
  return (
    <div
      style={{
        zIndex: UI.Z_INDEX_FLOATING_COMPONENTS + 1,
      }}
      className={classNames(
        'fixed flex flex-col justify-between inset-0 bg-white w-full h-full',
      )}
    >
      <OverlayInnerHeader onClose={onClose} />

      <div className="flex-grow overflow-auto">
        <OverlayInnerCard deal={deal} slug={slug} />
      </div>

      <ExperienceOrderPanelInner
        layout="overlay"
        posts={posts}
        deal={deal}
        slug={slug}
      />
    </div>
  );
};

interface OverlayInnerCardProps {
  deal: IDeal;
  slug: string;
}

const OverlayInnerCard = ({ deal, slug }: OverlayInnerCardProps) => {
  return (
    <div className="flex justify-center w-full py-6">
      <div
        style={{ width: '16rem' }}
        className="pb-4 mx-4 overflow-hidden text-lg bg-secondary-1 rounded-xl"
      >
        <div className="aspect-w-16 aspect-h-9">
          <img src={`${deal?.image?.url}?w=700`} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

interface OverlayInnerHeaderProps {
  onClose: () => void;
}

const OverlayInnerHeader = ({ onClose }: OverlayInnerHeaderProps) => {
  return (
    <Contained>
      <div className="flex items-center justify-between py-2">
        <div className="w-6"></div>
        <h3 className="text-3xl text-center font-primary text-primary">
          Get the offer!
        </h3>
        <ExitIcon
          onClick={onClose}
          className="w-6 text-gray-300 fill-current"
        />
      </div>

      <div className="-mx-2 border-b border-gray-500 border-opacity-25"></div>
    </Contained>
  );
};
