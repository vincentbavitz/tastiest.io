import { Button, Select } from '@tastiest-io/tastiest-components';
import { PoundIcon } from '@tastiest-io/tastiest-icons';
import { IDeal } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { useArticleOrder } from 'hooks/checkout/useArticleOrder';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleOfferMenu } from 'state/navigation';
import { UI } from '../../../constants';

const DEAL_INCLUDES_QTY = 4;

interface Props {
  deal: IDeal;
  slug: string;
}

export function ArticleOrderNowDesktop(props: Props) {
  const { deal, slug: fromSlug } = props;
  const { totalPrice, heads, setHeads, submit } = useArticleOrder(
    deal,
    fromSlug,
  );

  const dispatch = useDispatch();
  const { isDesktop } = useScreenSize();
  const allowedHeads = deal.allowedHeads.sort((a, b) => a - b);

  // Set valid heads from the first mount
  useEffect(() => {
    setHeads(allowedHeads[0]);
  }, []);

  return (
    <Contained maxWidth={900}>
      <div className="flex justify-end w-full">
        <div
          style={{
            width: isDesktop
              ? `calc(${UI.ARTICLE.DESKTOP_OFFER_WIDGET_WIDTH_PX}px - 2rem)`
              : '300px',
            maxWidth: isDesktop ? 'unset' : '75vw',
          }}
          className="relative z-30 pt-2 mt-16 bg-white border-4 pointer-events-auto last:pb-4 border-secondary-1 rounded-xl"
        >
          <h3 className="mb-2 text-xl text-center font-somatic text-primary">
            Get the offer!
          </h3>

          <div className="pb-4 mx-4 overflow-hidden bg-secondary-1 rounded-xl">
            <div className="aspect-w-16 aspect-h-9">
              <img src={`${deal?.image?.url}?w=700`} className="object-cover" />
            </div>

            <div className="flex flex-col justify-center px-2 pt-3 space-y-3">
              <p className="text-base leading-none text-center font-somatic">
                {deal?.tagline}
              </p>

              <div className="py-2 mx-2 mb-3 text-center border-t-2 border-b-2 border-white border-dashed">
                <p className="text-base leading-tight font-somatic text-primary">
                  For{' '}
                  <PoundIcon className="inline h-3 mx-1 -mt-1 fill-current" />
                  {deal?.pricePerHeadGBP}, you'll get
                </p>
              </div>

              <div className="text-sm text-center leading-1">
                {deal?.includes.slice(0, DEAL_INCLUDES_QTY - 1).map(item => (
                  <div key={item}>{item}</div>
                ))}
                {deal.includes.length > DEAL_INCLUDES_QTY && (
                  <a
                    onClick={() => dispatch(toggleOfferMenu(true))}
                    className="font-medium text-primary"
                  >
                    See full menu
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col mx-4 space-y-3">
            <div className="flex items-center justify-between mt-4">
              <div className="font-medium font-roboto bold text-primary">
                Book for
              </div>

              <div className="w-12">
                <Select
                  size="small"
                  onChange={value => setHeads(Number(value))}
                >
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

              <div className="font-medium font-roboto bold text-primary">
                {heads === 1 ? 'person' : 'people'}
              </div>
            </div>

            <div className="flex items-end justify-between font-medium">
              <span className="">Total</span>
              <div className="flex items-center h-full">
                <PoundIcon
                  style={{ height: '0.78rem', marginTop: '-0.125rem' }}
                  className="inline mr-1"
                />
                <p>{totalPrice}</p>
              </div>
            </div>

            <div className="w-full my-2 border-t border-primary"></div>

            <Button
              wide
              onClick={submit}
              type="solid"
              className="text-base font-somatic"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </Contained>
  );
}
