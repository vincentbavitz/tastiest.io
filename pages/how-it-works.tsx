import { Contained } from 'components/Contained';
import { HowItWorksHero } from 'public/assets/page';
import React from 'react';

function HowItWorks() {
  return (
    <div>
      <Contained>
        <div className="flex justify-center w-full">
          <HowItWorksHero className="w-full h-auto font-somatic" />
        </div>
      </Contained>
    </div>
  );
}

export default HowItWorks;
