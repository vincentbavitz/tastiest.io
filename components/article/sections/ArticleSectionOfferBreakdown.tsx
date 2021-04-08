import { IDeal } from '@tastiest-io/tastiest-utils';
import React from 'react';

export default function ArticleSectionOfferBreakdown(deal: IDeal) {
  return (
    <div className="w-full pb-6">
      <div className="flex w-full space-x-4 border-b border-gray-300">
        <p className="text-xl font-semibold">The Offer</p>
        {/* <p className="text-xl text-gray-500">Save £20!</p> */}
      </div>

      <div className="flex flex-col my-4 tracking-wide">
        {deal.includes.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div className="flex w-full space-x-4 border-b border-gray-300">
        <p className="mb-3 text-xl font-semibold">
          For only £{deal.pricePerHeadGBP}
        </p>
      </div>
    </div>
  );
}
