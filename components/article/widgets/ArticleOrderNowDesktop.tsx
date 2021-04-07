import PoundSVG from '@svg/icons/pound.svg';
import { Button, Select } from '@tastiest-io/tastiest-components';
import { IDeal, valdHeads, ValidHead } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import { useOrderNow } from 'hooks/checkout/useOrderNow';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { UI } from '../../../constants';

interface Props {
  deal: IDeal;
  slug: string;
}

export function ArticleOrderNowDesktop(props: Props) {
  const { deal, slug: fromSlug } = props;
  const { totalPrice, heads, setHeads, submit } = useOrderNow(deal, fromSlug);

  const { isDesktop } = useScreenSize();

  return (
    <Contained>
      <div className="flex justify-end w-full">
        <div
          style={{
            width: isDesktop
              ? `calc(${UI.ARTICLE.DESKTOP_OFFER_WIDGET_WIDTH_PX}px - 2rem)`
              : '300px',
            maxWidth: isDesktop ? 'unset' : '75vw',
          }}
          className="relative z-30 pt-2 pb-4 mt-20 bg-white border-4 pointer-events-auto desktop:mt-0 border-secondary-1 rounded-xl"
        >
          <h3 className="mb-2 text-xl text-center font-somatic text-primary">
            Get the offer!
          </h3>

          <div className="pb-4 mx-4 overflow-hidden bg-secondary-1 rounded-xl">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={`${deal?.image?.imageUrl}?w=300`}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center pt-2 mx-4 space-y-4">
              <p className="text-base leading-none text-center font-somatic">
                {deal?.tagline}
              </p>

              <div className="py-2 mb-3 text-center border-t-2 border-b-2 border-white border-dashed">
                <p className="flex items-center text-base font-somatic text-primary">
                  For <PoundSVG className="inline h-3 mx-1 fill-current" />
                  {deal?.pricePerHeadGBP}, you'll get
                </p>
              </div>

              <div className="text-center">
                {deal?.includes.map(item => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col mx-4 space-y-3">
            <div className="flex items-center justify-between mt-4">
              <span className="font-medium font-roboto bold text-primary">
                Book for
              </span>
              <div className="w-12">
                <Select
                  size="small"
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

            <div className="flex items-end justify-between text-xs">
              <span>Booking for {heads} people</span>
              <div className="flex items-center h-full">
                <PoundSVG
                  style={{ height: '0.6rem' }}
                  className="inline mr-1"
                />
                <p>{totalPrice}</p>
              </div>
            </div>

            <div className="w-full my-2 border-t border-primary"></div>

            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>
                <PoundSVG className="inline h-3 mr-1 -mt-1" />
                {totalPrice}
              </span>
            </div>

            <Button
              wide
              onClick={submit}
              type="solid"
              size="small"
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
