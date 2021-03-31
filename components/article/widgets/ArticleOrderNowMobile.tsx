import PoundSVG from '@svg/icons/pound.svg';
import RightSVG from '@svg/icons/right.svg';
import { Button, Select } from '@tastiest-io/tastiest-components';
import classNames from 'classnames';
import { Contained } from 'components/Contained';
import { useOrderNow } from 'hooks/checkout/useOrderNow';
import { UI } from '../../../constants';
import { IDeal, valdHeads, ValidHead } from '../../../types/cms';

interface Props {
  deal: IDeal;
  slug: string;
}

export default function ArticleOrderNowMobile({ deal, slug }: Props) {
  return (
    <div
      style={{ zIndex: UI.ARTICLE.FLOATING_COMPONENTS_Z_INDEX }}
      className="fixed bottom-0 left-0 right-0 pb-6"
    >
      <Contained>
        <Button wide size="large" className="shadow-md">
          <div className="flex items-center justify-between w-full text-xl font-somatic">
            <div className="w-5"></div>
            <span>Get the offer!</span>
            <RightSVG className="h-5 text-white stroke-current" />
          </div>
        </Button>
      </Contained>
      <OrderNowOverlay deal={deal} slug={slug} />
    </div>
  );
}

const OrderNowOverlay = ({ deal, slug }: Props) => {
  const { totalPrice, isFloating, heads, setHeads, submit } = useOrderNow(
    deal,
    slug,
  );

  return (
    <div
      className={classNames('fixed inset-0 hidden w-full pointer-events-none')}
    >
      <Contained>
        <div className="flex justify-end w-full">
          <div className="relative z-30 w-full pt-2 pb-4 mt-20 bg-white border-4 pointer-events-auto desktop:mt-0 border-secondary-1 rounded-xl">
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
    </div>
  );
};
