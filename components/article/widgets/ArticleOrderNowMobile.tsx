import { Button, Select } from '@tastiest-io/tastiest-components';
import { ExitIcon, RightIcon } from '@tastiest-io/tastiest-icons';
import { IDeal } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import { Contained } from 'components/Contained';
import { useArticleOrder } from 'hooks/checkout/useArticleOrder';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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
            className="overflow-y-auto"
          >
            <Button
              wide
              size="large"
              className="shadow-md"
              onClick={() => setDisplayOverlay(true)}
            >
              <div className="flex items-center justify-between w-full text-xl font-primary">
                <div className="w-5"></div>
                <div>Get the offer!</div>
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
        <OverlayInnerCard deal={deal} />
      </div>

      <OverlayInnerAction deal={deal} slug={slug} />
    </div>
  );
};

interface OverlayInnerCardProps {
  deal: IDeal;
}

const OverlayInnerCard = ({ deal }: OverlayInnerCardProps) => {
  return (
    <div className="flex justify-center w-full py-6">
      <div
        style={{ width: '16rem' }}
        className="pb-4 mx-4 overflow-hidden text-lg bg-secondary-1 rounded-xl"
      >
        <div className="aspect-w-16 aspect-h-9">
          <img src={`${deal?.image?.url}?w=700`} className="object-cover" />
        </div>

        <div className="flex flex-col justify-center px-2 pt-2 mx-4 space-y-4">
          <p className="text-xl leading-none text-center font-primary">
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

interface OverlayInnerActionProps {
  deal: IDeal;
  slug: string;
}

const OverlayInnerAction = (props: OverlayInnerActionProps) => {
  const { deal, slug: fromSlug } = props;
  const { totalPrice, heads, setHeads, submit, submitting } = useArticleOrder(
    deal,
    fromSlug,
  );

  const allowedHeads = deal.allowedHeads.sort((a, b) => a - b);

  // Set valid heads from the first mount
  useEffect(() => {
    setHeads(allowedHeads[0]);
  }, []);

  // FIX ME
  const bookedForTimestamp = Date.now();

  return (
    <Contained>
      <div className="my-3 -mx-2 border-b border-black border-opacity-25"></div>

      <div className="flex flex-col mx-2 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium font-secondary bold text-primary">
            Book for
          </div>

          <div className="w-20">
            <Select onChange={value => setHeads(Number(value))}>
              {allowedHeads.map(n => (
                <option
                  selected={allowedHeads[0] === n}
                  key={n}
                  className="text-center"
                  value={n}
                >
                  {n}
                </option>
              ))}
            </Select>
          </div>

          <div className="text-lg font-medium font-secondary bold text-primary">
            {heads === 1 ? 'person' : 'people'}
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-2 mb-4">
        <div className="mb-2 -mx-2 border-b border-gray-500 border-opacity-25"></div>

        <div className="flex justify-between px-1 mb-4 text-xl font-medium">
          <p className="">Total</p>
          <p className="">£{totalPrice}</p>
        </div>

        <Button
          wide
          size="large"
          className="text-2xl font-primary"
          loading={submitting}
          onClick={() => submit(bookedForTimestamp)}
        >
          Buy now
        </Button>
      </div>
    </Contained>
  );
};
