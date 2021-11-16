import * as React from 'react';

function SvgThankYouHero(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="thank-you-hero_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 550.98 287.57"
      {...props}
    >
      <defs>
        <linearGradient
          id="thank-you-hero_svg__linear-gradient"
          x1={139.39}
          y1={7.54}
          x2={414.82}
          y2={282.98}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.02} stopColor="#fffee3" />
          <stop offset={0.39} stopColor="#b3cfd4" />
          <stop offset={1} stopColor="#3882bb" />
        </linearGradient>
        <linearGradient
          id="thank-you-hero_svg__linear-gradient-2"
          x1={249.04}
          y1={-2.73}
          x2={250.11}
          y2={-2.73}
          gradientTransform="scale(-220.24 220.24) rotate(79.895 122.62 -150.175)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f3ffff" />
          <stop offset={0.01} stopColor="#f2fefe" />
          <stop offset={0.35} stopColor="#def1e9" />
          <stop offset={0.68} stopColor="#d2e9dd" />
          <stop offset={1} stopColor="#cee6d9" />
        </linearGradient>
        <linearGradient
          id="thank-you-hero_svg__linear-gradient-3"
          x1={434.25}
          y1={75.93}
          x2={558.52}
          y2={213.94}
          xlinkHref="#thank-you-hero_svg__linear-gradient-2"
        />
        <style>
          {
            '.thank-you-hero_svg__cls-2{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:9px}.thank-you-hero_svg__cls-4{fill:#fff}'
          }
        </style>
      </defs>
      <path
        opacity={0.99}
        fill="url(#thank-you-hero_svg__linear-gradient)"
        d="M101.93 44.99h350.35v200.52H101.93z"
      />
      <path className="thank-you-hero_svg__cls-2" d="M353 44" />
      <path
        strokeDasharray="0 20.13"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={9}
        d="M353 64.13V255.4"
      />
      <path className="thank-you-hero_svg__cls-2" d="M353 265.47" />
      <circle
        className="thank-you-hero_svg__cls-4"
        cx={103.93}
        cy={146.42}
        r={28.93}
      />
      <circle
        className="thank-you-hero_svg__cls-4"
        cx={455.75}
        cy={146.42}
        r={28.93}
      />
      <g opacity={0.49}>
        <path
          className="thank-you-hero_svg__cls-4"
          d="M305.86 146.92h-3.41a64.19 64.19 0 11-18.8-45.38 63.95 63.95 0 0118.8 45.38h6.82a71 71 0 10-71 71 71 71 0 0071-71z"
        />
        <path
          className="thank-you-hero_svg__cls-4"
          d="M263 116.22h-18.18v72.41c0 2.77-.59 4.67-1.77 5.72s-3.11 1.58-5.76 1.58q-5.56 0-5.57-6.06v-73.65h-18.21v8.63q0 4.29-1.75 6.1t-5.31 1.82q-5.2 0-5.21-6.05v-12.4c0-1.78.58-3 1.75-3.58a12.39 12.39 0 015.54-.92H268a12.47 12.47 0 015.55.92c1.16.61 1.75 1.8 1.75 3.58v12.4c0 2.13-.43 3.68-1.28 4.62a5 5 0 01-3.94 1.43 7.07 7.07 0 01-5.31-1.82q-1.75-1.81-1.75-6.1z"
        />
      </g>
      <path
        d="M73 33.06l-2.13 64.71a11.17 11.17 0 01-.17 1.93 11 11 0 01-3.76 6.49 11.63 11.63 0 01-2.28 1.49 1.38 1.38 0 01-2-1.19l-1.8-74h-2.08L57 106.39a1.43 1.43 0 01-2.09 1.23 11.18 11.18 0 01-3.5-2.76 10.93 10.93 0 01-2.59-7.14L47 33.06h-2.56L43 97.71a16.79 16.79 0 0011.93 16.12l-6 144a11.12 11.12 0 1022.23.09l-4.79-144.69a16.8 16.8 0 0010-12.52 17.64 17.64 0 00.26-2.93L75.26 33.1z"
        fill="url(#thank-you-hero_svg__linear-gradient-2)"
      />
      <path
        d="M522.5 69.46c0-24-11.72-43.42-26.18-43.42s-26.18 19.44-26.18 43.42c0 21.55 6.7 39.42 21 42.83l-6.55 142.42a11.25 11.25 0 1022.48.19L503 112.11c15.44-3.8 19.5-21.45 19.5-42.65z"
        fill="url(#thank-you-hero_svg__linear-gradient-3)"
      />
    </svg>
  );
}

export default SvgThankYouHero;
