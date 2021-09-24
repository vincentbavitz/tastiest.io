import { Button, Select } from '@tastiest-io/tastiest-components';
import { PoundIcon } from '@tastiest-io/tastiest-icons';
import { IDeal } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import { useArticleOrder } from 'hooks/checkout/useArticleOrder';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { ReactNode, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHoverDirty } from 'react-use';
import { UI } from '../../../constants';

interface XScrollSelectItemProps {
  children: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const XScrollSelectItem = (props: XScrollSelectItemProps) => {
  const { selected, disabled, children, onClick } = props;

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  const disabledStyles =
    'bg-gray-200 opacity-50 pointer-events-none cursor-default border-none';

  const activeStyles = [
    'cursor-pointer',
    isHovering || selected ? 'border-opacity-100' : 'border-opacity-25',
    selected ? 'border-2 border-blue-600' : 'border border-blue-500',
  ];

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={clsx(
        'flex justify-center items-center flex-col space-y-1 leading-none',
        'mx-1 p-1 text-sm text-center duration-300 rounded-md whitespace-nowrap',
        disabled ? disabledStyles : activeStyles,
      )}
    >
      {children}
    </div>
  );
};

interface Props {
  deal: IDeal;
  slug: string;
}

export function ArticleOrderNowDesktop(props: Props) {
  const { deal, slug: fromSlug } = props;
  const {
    totalPrice,
    heads,
    setHeads,
    submit,
    submitting,
    error,
  } = useArticleOrder(deal, fromSlug);

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
          <h3 className="mb-2 text-xl text-center font-primary text-primary">
            Get the offer!
          </h3>

          <div className="pb-4 mx-4 overflow-hidden bg-secondary-1 rounded-xl">
            <div className="aspect-w-16 aspect-h-9">
              <img src={`${deal?.image?.url}?w=700`} className="object-cover" />
            </div>

            <div className="flex flex-col justify-center px-2 pt-3 space-y-3">
              <p className="text-base leading-none text-center font-primary">
                {deal?.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col pt-4 mx-4 space-y-3">
            <div className="px-2">
              <HorizontalScrollable noPadding chevronSize={6}>
                <XScrollSelectItem selected>
                  <p className="leading-none">Sun</p>
                  <p className="text-xs opacity-75">13 Oct</p>
                </XScrollSelectItem>

                <XScrollSelectItem disabled>
                  <p className="leading-none">Mon</p>
                  <p className="text-xs opacity-75">14 Oct</p>
                </XScrollSelectItem>

                <XScrollSelectItem>
                  <p className="leading-none">Tue</p>
                  <p className="text-xs opacity-75">15 Oct</p>
                </XScrollSelectItem>
              </HorizontalScrollable>
            </div>

            <div className="px-2 pt-3 border-t border-gray-100">
              <HorizontalScrollable noPadding chevronSize={6}>
                <XScrollSelectItem selected>10:33</XScrollSelectItem>

                <XScrollSelectItem disabled>11:33</XScrollSelectItem>

                <XScrollSelectItem>12:33</XScrollSelectItem>
              </HorizontalScrollable>
            </div>

            <div className="flex items-center justify-between pt-3 pb-1 border-t border-gray-100">
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

            <Button
              wide
              type="solid"
              onClick={submit}
              loading={submitting}
              className="text-base font-roboto"
            >
              <div className="flex items-center justify-center">
                <PoundIcon
                  style={{
                    height: '0.78rem',
                    marginTop: '-0.125rem',
                    marginRight: '0.15rem',
                  }}
                  className="inline fill-current"
                />
                <p>{totalPrice} — Buy Now</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Contained>
  );
}
