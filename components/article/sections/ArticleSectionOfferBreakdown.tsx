import { IDeal } from '@tastiest-io/tastiest-utils';
import React from 'react';

export default function ArticleSectionOfferBreakdown(deal: IDeal) {
  return (
    <div className="w-full pb-6">
      <div className="flex w-full space-x-4">
        <p className="text-xl font-semibold">The Offer</p>
      </div>

      <ul className="pt-1 pb-2">
        {deal.includes.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="flex w-full space-x-4">
        <p className="mb-3 text-base font-medium">
          for only £{deal.pricePerHeadGBP}
        </p>
      </div>
    </div>
  );
}
