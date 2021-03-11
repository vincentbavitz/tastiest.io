import HeySpriteSVG from '@svg/article/hey-sprite.svg';
import { useCheckout } from 'hooks/useCheckout';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { IOrder } from 'types/checkout';
import { ScreenContext } from '../../../contexts/screen';
import { useAuth } from '../../../hooks/useAuth';
import { IDeal } from '../../../types/cms';
import { Button } from '../../Button';
import { Select } from '../../inputs/Select';
import { Title } from '../../Title';

interface Props {
  deal: IDeal;
  slug: string;
  restaurantId: string;
  restaurantName: string;
}

type ValidHead = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'; //| '9' | '10+';
const valdHeads: ValidHead[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

export function ArticleWidgetOrderNow(props: Props) {
  const { deal, slug, restaurantId, restaurantName } = props;

  const { user } = useAuth();
  const router = useRouter();
  const { isDesktop } = useContext(ScreenContext);
  const { initOrder } = useCheckout();

  const [heads, setHeads] = useState<ValidHead>('1');
  const totalPrice = (Number(heads) * deal?.pricePerHeadGBP).toFixed(2);

  const submit = async () => {
    const order: IOrder = {
      dealId: deal.id,
      restaurantId,
      restaurantName,
      userId: user?.uid ?? null,
      heads: Number(heads),
      orderedAt: Date.now(),
      dealDatedFor: Date.now(),
      fromSlug: slug,
    };

    const orderId = await initOrder(order);
    if (orderId) {
      router.push({ pathname: '/checkout', query: { orderId } });
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div
        style={{
          width: isDesktop ? 'unset' : '300px',
          minWidth: isDesktop ? '275px' : 'unset',
          maxWidth: isDesktop ? 'unset' : '75vw',
        }}
        className="relative flex flex-col py-4 mt-20 mb-6 space-y-6 border-4 desktop:mt-0 border-secondary-1 rounded-xl"
      >
        <div className="absolute top-0 right-0 mr-4 -mt-20 desktop:-mt-16">
          <HeySpriteSVG
            className="h-20 desktop:h-16"
            style={{ paddingBottom: '4px' }}
          />
        </div>

        <h3 className="text-3xl leading-8 text-center font-somatic text-primary">
          {restaurantName}
        </h3>

        <div className="pb-4 mx-4 overflow-hidden bg-secondary-1 rounded-xl">
          <img src={`${deal?.image?.imageUrl}?w=300`} className="w-full" />

          <div className="flex flex-col justify-center pt-2 mx-4 space-y-4">
            <Title level={2} className="font-somatic">
              {deal?.tagline}
            </Title>

            <div className="py-2 mb-3 text-center border-t-4 border-b-4 border-white border-dashed">
              <Title
                level={2}
                margin={false}
                className="font-somatic text-primary"
              >
                Only £{deal?.pricePerHeadGBP} and you'll get
              </Title>
            </div>

            <div className="text-center">
              {deal?.includes.map(item => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-lg font-medium font-roboto bold text-primary">
              Book for
            </span>
            <div className="w-16">
              <Select
                size="small"
                onChange={value => setHeads(value as ValidHead)}
              >
                {valdHeads.map(n => (
                  <option key={n} className="text-center" value={n}>
                    {n}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <span>Booking for {heads} people</span>
            <span>£{totalPrice}</span>
          </div>

          <div className="w-full my-2 border-t border-primary"></div>

          <div className="flex justify-between text-lg bold">
            <span>Total</span>
            <span>£{totalPrice}</span>
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
  );
}
