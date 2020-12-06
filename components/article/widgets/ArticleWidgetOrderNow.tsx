import React from 'react';
import { Title } from '../../Title';

export function ArticleWidgetOrderNow() {
  return (
    <div className="flex flex-col space-y-6 py-4  border-4 border-secondary-alt rounded-xl">
      <h3 className="font-somantic text-threexl text-primary text-center leading-8">
        Daniel's
        <br /> Restaurant
      </h3>

      <div className="mx-4 pb-4 overflow-hidden bg-secondary-alt rounded-xl">
        <img src="/img/steak-dish.jpeg" className="w-full" />

        <div className="flex flex-col space-y-4 mx-4 pt-2 justify-center">
          <Title level={2} className="font-somantic">
            Experience the best porterhouse steak in Lonodn
          </Title>

          <div className="border-t-4 border-b-4 py-2 mb-3 border-white border-dashed text-center">
            <Title
              level={2}
              margin={false}
              className="font-somantic text-primary"
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
    </div>
  );
}
