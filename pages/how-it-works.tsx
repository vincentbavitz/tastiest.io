import { Contained } from 'components/Contained';
import React from 'react';

function HowItWorks() {
  return (
    <div>
      <Contained>
        <div className="flex justify-center ">
          <img
            src="/assets/illustrations/how-it-works-illustration.png"
            style={{ maxWidth: '450px' }}
            className="w-7/12 py-20"
          />
        </div>
      </Contained>
    </div>
  );
}

export default HowItWorks;
