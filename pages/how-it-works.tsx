import { Contained } from 'components/Contained';
import { HowItWorksHero } from 'public/assets/page';
import React from 'react';

function HowItWorks() {
  return (
    <div>
      <Contained>
        <HowItWorksHero className="w-full h-auto font-somatic" />
      </Contained>
    </div>
  );
}

export default HowItWorks;
