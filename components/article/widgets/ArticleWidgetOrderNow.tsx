import React from 'react';
import { Button } from '../../Button';

import { Title } from '../../Title';
import HeySpriteSVG from '../../../assets/svgs/article/hey-sprite.svg';
import { useScreenSize } from '../../../hooks/screen';

export function ArticleWidgetOrderNow() {
  const { isDesktop } = useScreenSize();

  return (
    <div className="flex justify-center w-full">
      <div
        style={{
          width: isDesktop ? 'unset' : '300px',
          maxWidth: isDesktop ? 'unset' : '75vw',
        }}
        className="relative flex flex-col space-y-6 py-4 mt-20 mb-6 desktop:mt-0 border-4 border-secondary-alt rounded-xl"
      >
        <div className="absolute top-0 right-0 mr-4 -mt-20 desktop:-mt-16">
          <HeySpriteSVG
            className="h-20 desktop:h-16"
            style={{ paddingBottom: '4px' }}
          />
        </div>

        <h3 className="font-somatic text-threexl text-primary text-center leading-8">
          Daniel's
          <br /> Restaurant
        </h3>

        <div className="mx-4 pb-4 overflow-hidden bg-secondary-alt rounded-xl">
          <img src="/img/steak-dish.jpeg" className="w-full" />

          <div className="flex flex-col space-y-4 mx-4 pt-2 justify-center">
            <Title level={2} className="font-somatic">
              Experience the best porterhouse steak in London
            </Title>

            <div className="border-t-4 border-b-4 py-2 mb-3 border-white border-dashed text-center">
              <Title
                level={2}
                margin={false}
                className="font-somatic text-primary"
              >
                Only £25 and you'll get
              </Title>
            </div>

            <div className="text-center">
              <div>300g porterhouse</div>
              <div>Fries</div>
              <div>Salad</div>
              <div>Choice of steak sauces</div>
              <div>House wine/beer</div>
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
              className="w-12 bg-transparent rounded-md border-2 border-secondary"
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

          <div className="border-t border-primary w-full my-2"></div>

          <div className="flex justify-between bold text-lg">
            <span>Total</span>
            <span>£50</span>
          </div>

          <Button type="solid" size="small" className="text-base font-somatic">
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
}
