import { Contained } from 'components/Contained';
import StyledUppercase from 'components/text/StyledUppercase';
import Image from 'next/image';
import React from 'react';

export default function HomeWhyTastiestSection() {
  return (
    <Contained>
      <div className="flex gap-6 w-full py-16">
        <div
          style={{ minWidth: `${44 / 4}rem` }}
          className="relative w-44 h-44"
        >
          <Image
            src="https://images.ctfassets.net/tq39z0nxr0bv/7zN6nw2CDsolVDGS33zkvk/5bd404771f4761c76510ddaddd2aba6a/Tastiest_Blue_Platter.png"
            layout="fill"
          />
        </div>

        <div className="">
          <h2 className="font-primary font-medium text-2xl text-primary">
            <StyledUppercase size="2xl">Why Tastiest?</StyledUppercase>
          </h2>

          <p className="leading-relaxed">
            Tastiest was established with one mission in mind: make sure foodies
            have the best experiences when dining out.
          </p>

          <p className="leading-relaxed">
            We demand excellence from ourselves and our restaurant partners. We
            collaborate directly with London’s best restaurants to provide you
            with information you otherwise wouldn’t see such as interviews with
            chefs and behind the scenes footage of a top tier kitchen.
          </p>

          <p className="leading-relaxed">
            That is why Tastiest is valued amongst people that value great
            tasting food, memories that are shared with friends for life and
            don’t mind spending that little extra to have these experiences.
          </p>
        </div>
      </div>
    </Contained>
  );
}
