import React, { useContext } from 'react';
import HeySpriteSVG from '../../../assets/svgs/article/hey-sprite.svg';
import { ScreenContext } from '../../../contexts/screen';
import { useAuth } from '../../../hooks/useAuth';
import { useUserData } from '../../../hooks/useUserData';
import { UserData } from '../../../types/firebase';
import { Button } from '../../Button';
import { Title } from '../../Title';

export interface IOrderDeal {
  restaurantID: string;
  dealName: string; // Grizzly Grumble
  dealDescription: string; // Experience the best porterhouse steak in London
  dealPrefix: string; // Only £25 and you'll get
  dealItems: Array<string>; // ['300g Porterhouse', 'Fries', ...]
  pricePerHeadGBP: number; // 25 (25 pounds)s
  heads: number;
}

export function ArticleWidgetOrderNow(deal: IOrderDeal) {
  const { isDesktop } = useContext(ScreenContext);

  const { user } = useAuth();
  const { userData, setUserData } = useUserData(user);

  const submit = () => {
    setUserData(UserData.DISPLAY_NAME, '234324');
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
          {deal.dealName}
        </h3>

        <div className="pb-4 mx-4 overflow-hidden bg-secondary-1 rounded-xl">
          <img src="/img/steak-dish.jpeg" className="w-full" />

          <div className="flex flex-col justify-center pt-2 mx-4 space-y-4">
            <Title level={2} className="font-somatic">
              {deal.dealDescription}
            </Title>

            <div className="py-2 mb-3 text-center border-t-4 border-b-4 border-white border-dashed">
              <Title
                level={2}
                margin={false}
                className="font-somatic text-primary"
              >
                {deal.dealPrefix}
              </Title>
            </div>

            <div className="text-center">
              {deal.dealItems.map(item => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-lg font-roboto bold text-primary">
              Book for
            </span>
            <select
              name="zzz"
              defaultValue={1}
              className="w-12 bg-transparent border-2 rounded-md border-secondary"
            >
              <option className="text-center" value="1">
                1
              </option>
              <option className="text-center" value="2">
                2
              </option>
            </select>
          </div>

          <div className="flex justify-between text-sm">
            <span>Booking for 2x people</span>
            <span>£50</span>
          </div>

          <div className="w-full my-2 border-t border-primary"></div>

          <div className="flex justify-between text-lg bold">
            <span>Total</span>
            <span>£50</span>
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
