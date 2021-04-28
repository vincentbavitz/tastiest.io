import { Button, Select } from '@tastiest-io/tastiest-components';
import { ExitIcon, RightIcon } from '@tastiest-io/tastiest-icons';
import { IDeal, valdHeads, ValidHead } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import { Contained } from 'components/Contained';
import { useArticleOrder } from 'hooks/checkout/useArticleOrder';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useLockBodyScroll } from 'react-use';
import { UI } from '../../../constants';

interface Props {
  deal: IDeal;
  slug: string;
}

export default function ArticleOrderNowMobile({ deal, slug }: Props) {
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
        <Contained>
          <div
            style={{
              filter: 'drop-shadow(2px 0px 6px rgba(255,255,255,0.33))',
            }}
          >
            <Button
              wide
              size="large"
              className="shadow-md"
              onClick={() => setDisplayOverlay(true)}
            >
              <div className="flex items-center justify-between w-full text-xl font-somatic">
                <div className="w-5"></div>
                <span>Get the offer!</span>
                <RightIcon className="h-5 text-white stroke-current" />
              </div>
            </Button>
          </div>
        </Contained>
      </div>

      {displayOverlay && (
        <OrderNowOverlay
          deal={deal}
          slug={slug}
          onClose={() => setDisplayOverlay(false)}
        />
      )}
    </>
  );
}

interface OrderNowOverlayProps extends Props {
  onClose: () => void;
}

const OrderNowOverlay = ({ deal, slug, onClose }: OrderNowOverlayProps) => {
  const { totalPrice, heads, setHeads, submit } = useArticleOrder(deal, slug);

  return (
    <div
      style={{
        zIndex: UI.Z_INDEX_FLOATING_COMPONENTS + 1,
      }}
      className={classNames(
        'fixed flex flex-col justify-between inset-0 bg-white w-full overflow-y-auto',
      )}
    >
      <Contained>
        <div className="flex items-center justify-between py-2">
          <div className="w-10"></div>
          <h3 className="text-3xl text-center font-somatic text-primary">
            Get the offer!
          </h3>
          <ExitIcon
            onClick={onClose}
            className="w-8 fill-current text-primary"
          />
        </div>

        <div className="-mx-2 border-b border-gray-500 border-opacity-25"></div>

        <OverlayInner
          deal={deal}
          slug={slug}
          heads={heads}
          setHeads={setHeads}
          totalPrice={totalPrice}
        />
      </Contained>

      <Contained>
        <div className="flex flex-col mb-6 space-y-4">
          <div className="-mx-2 border-b border-black"></div>

          <div className="flex justify-between px-1 text-2xl font-medium">
            <p className="">Total</p>
            <p className="">£{totalPrice}</p>
          </div>

          <Button wide className="text-2xl font-somatic" onClick={submit}>
            Buy now
          </Button>
        </div>
      </Contained>
    </div>
  );
};

interface OverlayInnerProps extends Props {
  heads: number;
  totalPrice: string;
  setHeads: (value: ValidHead) => void;
}

const OverlayInner = (props: OverlayInnerProps) => {
  const { deal, totalPrice, heads, setHeads } = props;

  return (
    <div className="relative z-30 w-full py-6 bg-white">
      <OverlayInnerCard deal={deal} />

      <div className="my-4 -mx-2 border-b border-gray-500"></div>

      <div className="flex flex-col mx-4 space-y-2">
        <div className="flex items-end justify-between">
          <span className="text-lg font-medium font-roboto bold text-primary">
            Book for
          </span>
          <div className="w-12">
            <Select
              size="small"
              text-center
              onChange={value => setHeads(Number(value) as ValidHead)}
            >
              {valdHeads.map(n => (
                <option key={n} className="text-center" value={n}>
                  {n}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex items-end justify-between text-sm">
          <span>Booking for {heads} people</span>
          <div className="flex items-center h-full tracking-wide">
            £<p>{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface OverlayInnerCardProps {
  deal: IDeal;
}

const OverlayInnerCard = ({ deal }: OverlayInnerCardProps) => {
  return (
    <div className="flex justify-center w-full">
      <div
        style={{ width: '16rem' }}
        className="pb-4 mx-4 mb-3 overflow-hidden text-lg bg-secondary-1 rounded-xl"
      >
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={`${deal?.image?.imageUrl}?w=600`}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center pt-2 mx-4 space-y-4">
          <p className="text-xl leading-none text-center font-somatic">
            {deal?.tagline}
          </p>

          <div className="py-2 mb-3 text-center border-t-2 border-b-2 border-white border-dashed">
            <p className="flex items-center justify-center text-xl font-medium text-primary">
              Only £{deal?.pricePerHeadGBP}, you'll get
            </p>
          </div>

          <div className="text-center">
            {deal?.includes.map(item => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
