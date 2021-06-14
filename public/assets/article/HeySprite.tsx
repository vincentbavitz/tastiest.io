import * as React from 'react';

function SvgHeySprite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="hey-sprite_svg__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 226.79 187.79"
      {...props}
    >
      <defs>
        <style>
          {
            '.hey-sprite_svg__cls-1{fill:#fff}.hey-sprite_svg__cls-3{fill:#ffd400}'
          }
        </style>
        <mask
          id="hey-sprite_svg__mask"
          x={-21.75}
          y={-11.32}
          width={241.1}
          height={216.11}
          maskUnits="userSpaceOnUse"
        >
          <path
            className="hey-sprite_svg__cls-1"
            d="M-21.75-11.32h241.1v199.33h-241.1z"
          />
        </mask>
      </defs>
      <g mask="url(#hey-sprite_svg__mask)">
        <path
          className="hey-sprite_svg__cls-3"
          d="M24.13 104.67h6.78c-.09-.21-.19-.4-.27-.61a17.53 17.53 0 01-1.16-6.39 21.13 21.13 0 01.28-3.39 3.55 3.55 0 013.36-3 3.51 3.51 0 013.59 4.08 15.52 15.52 0 00-.19 2.34 9.89 9.89 0 002.69 7h.29a10.2 10.2 0 0110.21 10.2v5.85c.35 4.24 2.51 28.87 5.37 37.22a45.55 45.55 0 008.07 14.65 33.25 33.25 0 006.85 6.2 31.77 31.77 0 0010.24 4.54 34.65 34.65 0 008.27 1c1.1 0 1.95 0 2.48-.1l.53-.06 1 6.49 2.31 13.65a41.06 41.06 0 01-6.38.44 54.67 54.67 0 01-16.15-2.45 52.17 52.17 0 01-15.1-7.53 54.55 54.55 0 01-10.88-10.53 72.39 72.39 0 01-12.26-25 127.3 127.3 0 01-4.47-29.95h-5.46a10.21 10.21 0 01-10.21-10.2v-4.3a10.2 10.2 0 0110.21-10.15z"
        />
        <path
          className="hey-sprite_svg__cls-3"
          d="M199.86 201.53H86.59v-75.84a56.64 56.64 0 01113.27 0z"
        />
        <path
          className="hey-sprite_svg__cls-1"
          d="M131.93 116.54a13 13 0 00-25.13 0 2.84 2.84 0 105.47 1.51 7.42 7.42 0 012.6-3.87 7.37 7.37 0 019 0 7.42 7.42 0 012.6 3.87 2.84 2.84 0 005.47-1.51zm35.99 0a13 13 0 00-25.14 0 2.84 2.84 0 005.48 1.51 7.35 7.35 0 0114.18 0 2.84 2.84 0 005.48-1.51zm-1.72 14.87a2.84 2.84 0 00-3.49 2 25.82 25.82 0 01-2.91 6.67.81.81 0 01-.73-.72c-1.34-12.06-13.71-9.68-16.2 1.37v.09c-1.69 4.63-2.92 10.76-7.77 11.68a26.14 26.14 0 01-22.81-19.09 2.84 2.84 0 10-5.47 1.5 31.84 31.84 0 0061.39 0 2.84 2.84 0 00-2.01-3.5z"
        />
        <text
          transform="rotate(-23.28 192.416 -28.223)"
          fontSize={45.24}
          fill="#ffc990"
          fontFamily="Somatic-Rounded,Somatic"
        >
          {'hey!'}
        </text>
        <path
          d="M60.7 68h0a21 21 0 0021 21h5.52"
          fill="none"
          stroke="#ffc990"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

export default SvgHeySprite;
