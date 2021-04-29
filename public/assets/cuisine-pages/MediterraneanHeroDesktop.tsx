import * as React from 'react';

function SvgMediterraneanHeroDesktop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1330.5 728.6"
      {...props}
    >
      <style>
        {
          '\r\n    #tail {\r\n       animation: tail 3s ease-in-out infinite;\r\n       transform-origin: top;\r\n       animation-direction: alternate;\r\n       transform-box: fill-box;\r\n   }\r\n   \r\n   @keyframes tail {\r\n       0% {\r\n           transform: rotateZ(0deg);\r\n       }\r\n       10% {\r\n           transform: rotateZ(5deg);\r\n       }\r\n       20% {\r\n           transform: rotateZ(0deg);\r\n       }\r\n       35% {\r\n           transform: rotateZ(9deg);\r\n       }\r\n       55% {\r\n           transform: rotateZ(0deg);\r\n       }\r\n       75% {\r\n           transform: rotateZ(5deg);\r\n       }\r\n       90% {\r\n           transform: rotateZ(0deg);\r\n       }\r\n       100% {\r\n           transform: rotateZ(0deg);\r\n       }\r\n   }\r\n   \r\n   #tree1 {\r\n       animation: tree1 5s linear infinite;\r\n       transform-origin: bottom;\r\n       animation-direction: alternate;\r\n       transform-box: fill-box;\r\n   }\r\n   \r\n   @keyframes tree1 {\r\n       0% {\r\n           transform: rotateZ(0deg);\r\n       }\r\n       40% {\r\n           transform: rotateZ(-1deg);\r\n       }\r\n       70% {\r\n           transform: rotateZ(0deg);\r\n       }\r\n       100% {\r\n           transform: rotateZ(1deg);\r\n       }\r\n   }\r\n   \r\n   #tree2 {\r\n       animation: tree2 5s linear infinite;\r\n       transform-origin: bottom;\r\n       animation-direction: alternate;\r\n       transform-box: fill-box;\r\n   }\r\n   \r\n   @keyframes tree2 {\r\n       0% {\r\n           transform: rotateZ(0deg);\r\n       }\r\n       40% {\r\n           transform: rotateZ(1deg);\r\n       }\r\n       70% {\r\n           transform: rotateZ(0deg);\r\n       }\r\n       100% {\r\n           transform: rotateZ(-1deg);\r\n       }\r\n   }\r\n   \r\n   #head {\r\n       animation: head 2s linear infinite;\r\n       -webkit-animation: head 2s linear infinite;\r\n       transform-origin: bottom;\r\n       animation-direction: alternate;\r\n       transform-box: fill-box;\r\n   }\r\n   \r\n   @keyframes head {\r\n       100% {\r\n           transform: rotateZ(-5deg);\r\n           -webkit-transform: rotateZ(-5deg);\r\n           -moz-transform: rotateZ(-5deg);\r\n           -ms-transform: rotateZ(-5deg);\r\n           -o-transform: rotateZ(-5deg);\r\n       }\r\n   }\r\n   \r\n   #hand2 {\r\n       animation: arm1 2s linear infinite;\r\n       -webkit-animation: arm1 2s linear infinite;\r\n       transform-origin: top left;\r\n       animation-direction: alternate;\r\n       transform-box: fill-box;\r\n   }\r\n   \r\n   @keyframes arm1 {\r\n       100% {\r\n           transform: rotateZ(3deg);\r\n       }\r\n   }\r\n   \r\n   #hand1 {\r\n       animation: hd1 2s linear infinite;\r\n      \r\n       transform-origin: top;\r\n       animation-direction: alternate;\r\n       transform-box: fill-box;\r\n   }\r\n   \r\n   @keyframes hd1 {\r\n       100% {\r\n           transform: rotateZ(7deg);\r\n           \r\n       }\r\n   }\r\n   \r\n   #oil {\r\n       animation: oil 2s linear infinite;\r\n       -webkit-animation: oil 2s linear infinite;\r\n       transform-origin: top left;\r\n       animation-direction: alternate;\r\n       transform-box: fill-box;\r\n   }\r\n   \r\n   @keyframes oil {\r\n       100% {\r\n           transform: rotateZ(-5deg) skewX(-5deg);\r\n           \r\n       }\r\n   }\r\n   \r\n   #leg {\r\n       animation: leg 1.5s linear infinite;\r\n       transform-origin: top left;\r\n       animation-direction: alternate;\r\n       transform-box: fill-box;\r\n   }\r\n   \r\n   @keyframes leg {\r\n       100% {\r\n           transform: rotateZ(7deg);\r\n           \r\n       }\r\n   }\r\n   \r\n   #cl3 {\r\n       animation: c3 70s linear infinite;\r\n       transform-origin: center;\r\n      \r\n   }\r\n   \r\n   @keyframes c3 {\r\n       0% {\r\n           opacity: 0;\r\n           transform: translateX(100px);\r\n          \r\n       }\r\n       25% {\r\n           opacity: 0;\r\n           transform: translateX(100px);\r\n           \r\n       }\r\n       27% {\r\n           opacity: 0;\r\n       }\r\n       29% {\r\n           opacity: 1;\r\n       }\r\n       98% {\r\n           opacity: 1;\r\n       }\r\n       100% {\r\n           opacity: 0;\r\n           transform: translateX(-1155px);\r\n           \r\n       }\r\n   }\r\n   \r\n   #cl2 {\r\n       animation: c2 60s linear infinite;\r\n       transform-origin: center;\r\n       \r\n   }\r\n   \r\n   @keyframes c2 {\r\n       0% {\r\n           opacity: 0;\r\n           transform: translateX(480px)\r\n       }\r\n       15% {\r\n           opacity: 0;\r\n           transform: translateX(480px)\r\n       }\r\n       17% {\r\n           opacity: 0;\r\n       }\r\n       19% {\r\n           opacity: 1;\r\n       }\r\n       98% {\r\n           opacity: 1;\r\n       }\r\n       100% {\r\n           opacity: 0;\r\n           transform: translateX(-780px);\r\n           \r\n       }\r\n   }\r\n   \r\n   #cl1 {\r\n       animation: c1 50s linear infinite;\r\n       transform-origin: center;\r\n       -webkit-animation: c1 50s linear infinite;\r\n   }\r\n   \r\n   @keyframes c1 {\r\n       0% {\r\n           opacity: 0;\r\n           transform: translateX(650px);\r\n           \r\n       }\r\n       2% {\r\n           opacity: 0;\r\n       }\r\n       4% {\r\n           opacity: 1;\r\n       }\r\n       98% {\r\n           opacity: 1;\r\n       }\r\n       100% {\r\n           opacity: 0;\r\n           transform: translateX(-600px);\r\n          \r\n       }\r\n   }\r\n \r\n '
        }
      </style>
      <defs>
        <linearGradient
          id="linear-gradient"
          x1={861.84}
          y1={-105.85}
          x2={-30.69}
          y2={310.35}
          gradientTransform="translate(1266.56 694.01) rotate(180)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.12} stopColor="#fffcf3" />
          <stop offset={0.59} stopColor="#ffcc2b" />
          <stop offset={0.82} stopColor="#fffbf0" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <pattern
          id="Plaid_3_Color"
          data-name="Plaid 3 Color"
          width={72}
          height={72}
          patternTransform="matrix(1, 0, 0, -1, -37.14, 749.99)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 72 72"
        >
          <rect
            width={72}
            height={72}
            style={{
              fill: 'none',
            }}
          />
          <rect
            width={72}
            height={72}
            style={{
              fill: 'none',
            }}
          />
          <g>
            <rect
              x={69}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={68}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={68}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
          </g>
          <g>
            <rect
              x={-3}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={32}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={50}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={68}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={14}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={14}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={32}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={50}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
          </g>
          <g>
            <rect
              x={-75}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
          </g>
          <g>
            <rect
              x={69}
              y={32}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={69}
              y={50}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={69}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={69}
              y={14}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={69}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={68}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={68}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
          </g>
          <g>
            <rect
              x={-3}
              y={32}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-3}
              y={50}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-3}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-3}
              y={14}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-3}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={32}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={50}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={68}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={14}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={14}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={32}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={50}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={-4}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={14}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={32}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={50}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={-4}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={14}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={32}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={50}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={-4}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={14}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={32}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={50}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={-4}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={14}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={32}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={50}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
          </g>
          <g>
            <rect
              x={-75}
              y={32}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-75}
              y={50}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-75}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-75}
              y={14}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-75}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={-4}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={-4}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={-4}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={-4}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
          </g>
          <g>
            <rect
              x={69}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={68}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={68}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
          </g>
          <g>
            <rect
              x={-3}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={32}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={50}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={68}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={14}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={14}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={32}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={50}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
            <rect
              x={68}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
          </g>
          <g>
            <rect
              x={-75}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#29abe2',
              }}
            />
            <rect
              x={-4}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#046aa3',
              }}
            />
          </g>
        </pattern>
      </defs>
      <title>{'Mediterranean-desktop2'}</title>
      <g>
        <path
          d="M1330.5,728.6h-959q-.09-136.8-.16-273.61l959.17,0Z"
          style={{
            opacity: 0.5299999713897705,
            isolation: 'isolate',
            fill: 'url(#linear-gradient)',
          }}
        />
        <g>
          <path
            d="M930.23,564.32c36,13.38,15.65,21,12,23.52-21.28,14.24-99.08-6.06-120.17,39.23-7.33,15.72,5.39,25.1-3.29,38.21-18.1,27.33-71.85,15.32-139.2,25.11-47.82,7-156,38.21-156,38.21H1231c-156.41-30.26-192.74-48.54-191.9-60,1-13.19,45.42-22.92,51.51-44.76,3.25-11.65-8.86-18.47-6.57-33.84,1.86-12.52,8-19.73,14.94-25.39Z"
            style={{
              fill: '#fff',
            }}
          />
          <g id="cl1">
            <path
              d="M696.86,63a18.15,18.15,0,0,0-9.51,2.7A25.4,25.4,0,0,0,664,50.19c-.8,0-1.61,0-2.41.12a31.23,31.23,0,0,0-57.91,7.3,18.56,18.56,0,0,0-2.58-.2,19,19,0,0,0-19,19,20,20,0,0,0,.24,2.89H715A18.23,18.23,0,0,0,696.86,63Z"
              style={{
                fill: '#fcf3e0',
                opacity: 0.6899999976158142,
                isolation: 'isolate',
              }}
            />
          </g>
          <g id="cl3">
            <path
              d="M1132.44,70.74a24,24,0,0,1,12.62,3.58,33.75,33.75,0,0,1,31.07-20.56c1.08,0,2.15.06,3.2.16a41.49,41.49,0,0,1,76.94,9.69,26.27,26.27,0,0,1,3.43-.26,25.24,25.24,0,0,1,25.24,25.24,26.08,26.08,0,0,1-.32,3.85H1108.36A24.21,24.21,0,0,1,1132.44,70.74Z"
              style={{
                fill: '#fcf3e0',
                opacity: 0.8199999928474426,
                isolation: 'isolate',
              }}
            />
          </g>
          <g
            id="cl2"
            style={{
              opacity: 0.8199999928474426,
            }}
          >
            <path
              d="M869.71,74.82a24.78,24.78,0,0,0-13.23,3.82,29.48,29.48,0,0,0-56.43,6.23,16.37,16.37,0,0,0-19.39,14.78H894.54a24.83,24.83,0,0,0-24.83-24.83Z"
              style={{
                fill: '#fcf3e0',
              }}
            />
          </g>
          <g
            style={{
              opacity: 0.47999998927116394,
            }}
          >
            <ellipse
              cx={541.37}
              cy={111.9}
              rx={111.56}
              ry={111.9}
              style={{
                fill: '#ffd505',
              }}
            />
            <path
              d="M489.05,84.51,473.76,80s-.77,4.06-2.71,3.87-1.74.19-3.68-1.55-1.35-3.1-3.48-3.87-3.87-2.9-7.36-2.9-3.87-.39-6.58-.78-10.64-4.26-10.84-4.84-4.26-6-4.26-6L421.3,58.31l-1.93-3.68-1.94-2.13L413.56,51,393,46.89a21.87,21.87,0,0,0-.38,4.64c.19,1.36-1.55,3.1-3.87,3.29s-6.78-.19-7.94.58-7.74-4.83-7.74-4.83l-9.88,1,2.13,74.33H492.54l1.54-40.07Z"
              style={{
                fill: '#f7d5a4',
              }}
            />
            <g>
              <path
                d="M438.18,68.47a10.5,10.5,0,0,1,.93,1.45c.1.29,2.12,1.4,4.45,2.48V68.47Z"
                style={{
                  fill: 'none',
                }}
              />
              <polygon
                points="422.71 58.89 434.56 63.8 434.56 58.89 422.71 58.89"
                style={{
                  fill: 'none',
                }}
              />
              <path
                d="M463,78a7.34,7.34,0,0,0,.86.39c2.13.77,1.55,2.13,3.48,3.87,1.31,1.18,1.65,1.38,2.32,1.45V78Z"
                style={{
                  fill: 'none',
                }}
              />
              <path
                d="M367.78,58v.87h13.84v8.71H369v.87h20.67v8.71H372.14V78h26.42v8.71H381v.87h8.62v9H381v.88h35.42v8.9H381.14v.87h8.52v8.81H381v1h35.42v8.9h.88V117h17.22v8.9h.88V117H451.6v8.9h.87V117h17.22v8.9h.88V117h21.77v-.87H482.18v-8.81h10.26v-.87H470.57v-8.9h21.77v-.88H482.18v-9h10.16v-.87H470.57V83.87l-.88-.06v3H452.47V78H463c-.49-.25-1-.56-1.49-.87h-17.1V72.76l-.88-.4v4.78H426.34V68.43h11.84l-.62-.87h-2.12v-2.9l-.59-.78-.29-.12v3.8H417.34V58.89h5.37l-1.41-.58-.15-.29H410.32V50.31l-.87-.17V58h-20v-3.3a4.58,4.58,0,0,1-.63.1h-.25V58Zm22.75,19.16V68.46h17.22v8.71Zm25.93.87v8.71h-17V78Zm-8.71,18.58H390.53v-9h17.22Zm.88,0v-9h16.84v9Zm34.93,0H426.34v-9h17.22Zm8,.88v8.9H435.44V97.5Zm-17,0v8.9H417.34V97.5Zm-26.81,18.58H390.53v-8.81h17.22Zm17.72,0H408.63v-8.81h16.84Zm18.09,0H426.34v-8.81h17.22Zm19.65,0H444.44v-8.81h18.77Zm-10.74-9.68V97.5h17.22v8.9Zm28.84.87v8.81H464.08v-8.81ZM464.08,87.62h17.23v9H464.08Zm-.87,0v9H444.44v-9ZM435.44,78H451.6v8.71H435.44Zm-.88,0v8.71H417.34V78Zm-9.09-9.58v8.71H408.63V68.43Zm-26-9.58h17v8.71h-17Zm-.87,0v8.71H382.5V58.89Z"
                style={{
                  fill: '#e5bd88',
                }}
              />
            </g>
            <g>
              <path
                d="M414,125.89h-.32l1,1.86S414.46,127,414,125.89Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M405.43,106.12c-1.3-.44-4.64-11.61-5.08-14.81s-.58-5.81-1.45-5.81-.87,3.78-2.18,3-.87-8.42-1-9.72-.44-3.34-1.31,1c-.52,2.61-1.35,5.21-2,7.64a27.25,27.25,0,0,0-.9,4.56c-.3,3.48-.88,13.64-2,13.35s-1.16-2-1.45-6.38-2.9-16.75-4.26-17.91-1.35-2.52-1.55-4.26a11.57,11.57,0,0,0-1.93-4.45c-.78-1.35-3.1-5.81-3.29-8.71a16.35,16.35,0,0,0-.26-2.09,1.19,1.19,0,0,0-1.42-.93,1.16,1.16,0,0,0-.4.16l-.24.15-4.23-10.79a2.87,2.87,0,0,0-3.62-1.68L303.51,68.16c.24,1.24.55,3.14.26,3.55-.44.63-1.35-2.22-1.69-2.47s-.54.63-.49,1.55-.87,0-1.06-.72a1.55,1.55,0,0,0-.58-.8L230.31,90.9c.18,1.23.41,3.42,0,4.33-.58,1.31-1.89-1.74-2,1.45s-.87,8.28-2.47,5.08-1.6-3.92-3.34-4.5c-1-.33-1.71-2-2.13-3.27l-102.7,31.9H414C412,120.71,406.5,106.48,405.43,106.12Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
            </g>
            <polygon
              points="464.43 417.97 460.39 190.57 461.91 190.57 461.91 185.29 463.58 185.29 463.58 181.18 438.22 181.18 438.22 185.29 439.89 185.29 439.89 190.57 441.66 190.57 437.62 417.97 436.43 417.97 436.43 422.08 465.95 422.08 465.95 417.97 464.43 417.97"
              style={{
                fill: '#e5bd88',
              }}
            />
            <polygon
              points="533.53 417.97 529.49 190.57 531.01 190.57 531.01 185.29 532.69 185.29 532.69 181.18 507.32 181.18 507.32 185.29 509 185.29 509 190.57 510.76 190.57 506.72 417.97 505.54 417.97 505.54 422.08 535.05 422.08 535.05 417.97 533.53 417.97"
              style={{
                fill: '#e5bd88',
              }}
            />
            <polygon
              points="595.66 417.97 591.62 190.57 593.15 190.57 593.15 185.29 594.82 185.29 594.82 181.18 569.46 181.18 569.46 185.29 571.13 185.29 571.13 190.57 572.9 190.57 568.86 417.97 567.67 417.97 567.67 422.08 597.19 422.08 597.19 417.97 595.66 417.97"
              style={{
                fill: '#e5bd88',
              }}
            />
            <polygon
              points="405.19 417.97 401.15 190.57 402.68 190.57 402.68 185.29 404.35 185.29 404.35 181.18 378.99 181.18 378.99 185.29 380.66 185.29 380.66 190.57 382.43 190.57 378.39 417.97 377.2 417.97 377.2 422.08 406.72 422.08 406.72 417.97 405.19 417.97"
              style={{
                fill: '#e5bd88',
              }}
            />
            <polygon
              points="337.25 417.97 333.21 190.57 334.74 190.57 334.74 185.29 336.41 185.29 336.41 181.18 311.05 181.18 311.05 185.29 312.72 185.29 312.72 190.57 314.49 190.57 310.45 417.97 309.26 417.97 309.26 422.08 338.78 422.08 338.78 417.97 337.25 417.97"
              style={{
                fill: '#e5bd88',
              }}
            />
            <polygon
              points="271.05 417.97 267.01 190.57 268.54 190.57 268.54 185.29 270.21 185.29 270.21 181.18 244.85 181.18 244.85 185.29 246.52 185.29 246.52 190.57 248.29 190.57 244.25 417.97 243.06 417.97 243.06 422.08 272.58 422.08 272.58 417.97 271.05 417.97"
              style={{
                fill: '#e5bd88',
              }}
            />
            <polygon
              points="210.66 417.97 206.62 190.57 208.15 190.57 208.15 185.29 209.82 185.29 209.82 181.18 184.45 181.18 184.45 185.29 186.13 185.29 186.13 190.57 187.89 190.57 183.85 417.97 182.67 417.97 182.67 422.08 212.19 422.08 212.19 417.97 210.66 417.97"
              style={{
                fill: '#e5bd88',
              }}
            />
            <polygon
              points="145.48 417.97 141.44 190.57 142.97 190.57 142.97 185.29 144.64 185.29 144.64 181.18 119.28 181.18 119.28 185.29 120.95 185.29 120.95 190.57 122.72 190.57 118.68 417.97 117.49 417.97 117.49 422.08 147.01 422.08 147.01 417.97 145.48 417.97"
              style={{
                fill: '#e5bd88',
              }}
            />
            <polygon
              points="94.27 417.97 90.23 190.57 91.75 190.57 91.75 185.29 93.43 185.29 93.43 181.18 68.06 181.18 68.06 185.29 69.74 185.29 69.74 190.57 71.5 190.57 67.47 417.97 66.28 417.97 66.28 422.08 95.8 422.08 95.8 417.97 94.27 417.97"
              style={{
                fill: '#c69259',
              }}
            />
            <polygon
              points="59.69 417.97 55.65 190.57 57.17 190.57 57.17 185.29 58.84 185.29 58.84 181.18 33.48 181.18 33.48 185.29 35.16 185.29 35.16 190.57 36.92 190.57 32.88 417.97 31.7 417.97 31.7 422.08 61.21 422.08 61.21 417.97 59.69 417.97"
              style={{
                fill: '#c69259',
              }}
            />
            <g>
              <polygon
                points="161.65 422.07 134.69 422.07 138.85 187.75 157.48 187.75 161.65 422.07"
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={142.54}
                y1={192.75}
                x2={139.79}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={153.87}
                y1={192.75}
                x2={156.63}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={147.72}
                y1={192.75}
                x2={148.69}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={137.04}
                y={185.29}
                width={22.02}
                height={5.28}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <rect
                x={135.37}
                y={181.18}
                width={25.36}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <rect
                x={133.58}
                y={417.97}
                width={29.52}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={135.62}
                y1={417.93}
                x2={150.92}
                y2={417.93}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g>
              <polygon
                points="107.11 422.07 80.16 422.07 84.32 187.75 102.94 187.75 107.11 422.07"
                style={{
                  fill: '#e0ba89',
                }}
              />
              <line
                x1={88.01}
                y1={192.75}
                x2={85.25}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#d3a575',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={99.34}
                y1={192.75}
                x2={102.09}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#d3a575',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={93.19}
                y1={192.75}
                x2={94.16}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#d3a575',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={82.5}
                y={185.29}
                width={22.02}
                height={5.28}
                style={{
                  fill: '#edc28a',
                }}
              />
              <rect
                x={80.83}
                y={181.18}
                width={25.36}
                height={4.11}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <rect
                x={79.04}
                y={417.97}
                width={29.52}
                height={4.11}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <line
                x1={81.09}
                y1={417.93}
                x2={96.38}
                y2={417.93}
                style={{
                  fill: 'none',
                  stroke: '#d3a575',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g>
              <polygon
                points="56.23 422.07 29.28 422.07 33.44 187.75 52.07 187.75 56.23 422.07"
                style={{
                  fill: '#e0ba89',
                }}
              />
              <line
                x1={37.13}
                y1={192.75}
                x2={34.38}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#d3a575',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={48.46}
                y1={192.75}
                x2={51.21}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#d3a575',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={42.31}
                y1={192.75}
                x2={43.28}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#d3a575',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={31.62}
                y={185.29}
                width={22.02}
                height={5.28}
                style={{
                  fill: '#edc28a',
                }}
              />
              <rect
                x={29.95}
                y={181.18}
                width={25.36}
                height={4.11}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <rect
                x={28.16}
                y={417.97}
                width={29.52}
                height={4.11}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <line
                x1={30.21}
                y1={417.93}
                x2={45.51}
                y2={417.93}
                style={{
                  fill: 'none',
                  stroke: '#d3a575',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g>
              <polygon
                points="225.75 422.07 198.8 422.07 202.96 187.75 221.59 187.75 225.75 422.07"
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={206.65}
                y1={192.75}
                x2={203.9}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={217.98}
                y1={192.75}
                x2={220.73}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={211.83}
                y1={192.75}
                x2={212.8}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={201.14}
                y={185.29}
                width={22.02}
                height={5.28}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <rect
                x={199.47}
                y={181.18}
                width={25.36}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <rect
                x={197.68}
                y={417.97}
                width={29.52}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={199.73}
                y1={417.93}
                x2={215.03}
                y2={417.93}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g>
              <polygon
                points="290.18 422.07 263.23 422.07 267.39 187.75 286.02 187.75 290.18 422.07"
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={271.08}
                y1={192.75}
                x2={268.33}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={282.41}
                y1={192.75}
                x2={285.16}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={276.26}
                y1={192.75}
                x2={277.23}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={265.57}
                y={185.29}
                width={22.02}
                height={5.28}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <rect
                x={263.9}
                y={181.18}
                width={25.36}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <rect
                x={262.11}
                y={417.97}
                width={29.52}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={264.16}
                y1={417.93}
                x2={279.45}
                y2={417.93}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g>
              <polygon
                points="354.28 422.07 327.33 422.07 331.49 187.75 350.12 187.75 354.28 422.07"
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={335.18}
                y1={192.75}
                x2={332.43}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={346.51}
                y1={192.75}
                x2={349.27}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={340.36}
                y1={192.75}
                x2={341.33}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={329.68}
                y={185.29}
                width={22.02}
                height={5.28}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <rect
                x={328}
                y={181.18}
                width={25.36}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <rect
                x={326.22}
                y={417.97}
                width={29.52}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={328.26}
                y1={417.93}
                x2={343.56}
                y2={417.93}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g>
              <polygon
                points="418.07 422.07 391.11 422.07 395.27 187.75 413.9 187.75 418.07 422.07"
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={398.96}
                y1={192.75}
                x2={396.21}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={410.3}
                y1={192.75}
                x2={413.05}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={404.14}
                y1={192.75}
                x2={405.12}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={393.46}
                y={185.29}
                width={22.02}
                height={5.28}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <rect
                x={391.79}
                y={181.18}
                width={25.36}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <rect
                x={390}
                y={417.97}
                width={29.52}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={392.04}
                y1={417.93}
                x2={407.34}
                y2={417.93}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g>
              <polygon
                points="482.17 422.07 455.22 422.07 459.38 187.75 478.01 187.75 482.17 422.07"
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={463.07}
                y1={192.75}
                x2={460.32}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={474.4}
                y1={192.75}
                x2={477.15}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={468.25}
                y1={192.75}
                x2={469.22}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={457.56}
                y={185.29}
                width={22.02}
                height={5.28}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <rect
                x={455.89}
                y={181.18}
                width={25.36}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <rect
                x={454.11}
                y={417.97}
                width={29.52}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={456.15}
                y1={417.93}
                x2={471.45}
                y2={417.93}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g>
              <polygon
                points="546.6 422.07 519.65 422.07 523.81 187.75 542.44 187.75 546.6 422.07"
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={527.5}
                y1={192.75}
                x2={524.75}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={538.83}
                y1={192.75}
                x2={541.58}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={532.68}
                y1={192.75}
                x2={533.65}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={521.99}
                y={185.29}
                width={22.02}
                height={5.28}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <rect
                x={520.32}
                y={181.18}
                width={25.36}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <rect
                x={518.53}
                y={417.97}
                width={29.52}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={520.58}
                y1={417.93}
                x2={535.87}
                y2={417.93}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <g>
              <polygon
                points="610.71 422.07 583.75 422.07 587.91 187.75 606.54 187.75 610.71 422.07"
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={591.6}
                y1={192.75}
                x2={588.85}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={602.93}
                y1={192.75}
                x2={605.69}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <line
                x1={596.78}
                y1={192.75}
                x2={597.75}
                y2={415.06}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={586.1}
                y={185.29}
                width={22.02}
                height={5.28}
                style={{
                  fill: '#f7d5a4',
                }}
              />
              <rect
                x={584.42}
                y={181.18}
                width={25.36}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <rect
                x={582.64}
                y={417.97}
                width={29.52}
                height={4.11}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <line
                x1={584.68}
                y1={417.93}
                x2={599.98}
                y2={417.93}
                style={{
                  fill: 'none',
                  stroke: '#f2d09e',
                  strokeMiterlimit: 10,
                }}
              />
            </g>
            <rect
              x={121.81}
              y={422.01}
              width={492.49}
              height={33.35}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={27.73}
              y={422.01}
              width={94.09}
              height={33.35}
              style={{
                fill: '#f4d3a2',
              }}
            />
            <rect
              x={116.05}
              y={426.76}
              width={504.03}
              height={28.6}
              style={{
                fill: '#f4d3a2',
              }}
            />
            <rect
              x={19.81}
              y={426.76}
              width={96.24}
              height={28.6}
              style={{
                fill: '#e8ba7c',
              }}
            />
            <rect
              x={106.76}
              y={435.92}
              width={524.37}
              height={19.44}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={14.2}
              y={435.92}
              width={92.56}
              height={19.44}
              style={{
                fill: '#f4d3a2',
              }}
            />
            <polyline
              points="120.76 133.22 168.81 117.98 166.17 109.66 118.12 124.9"
              style={{
                fill: '#edca96',
              }}
            />
            <rect
              x={121.47}
              y={165}
              width={499.11}
              height={16.5}
              style={{
                fill: '#f7d5a4',
              }}
            />
            <rect
              x={121.47}
              y={155.78}
              width={499.11}
              height={19.49}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={16.3}
              y={165.01}
              width={105.17}
              height={16.5}
              style={{
                fill: '#e5b376',
              }}
            />
            <rect
              x={16.3}
              y={155.78}
              width={105.17}
              height={19.49}
              style={{
                fill: '#f7d5a4',
              }}
            />
            <rect
              x={117.68}
              y={125.89}
              width={506.89}
              height={9.39}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={16.91}
              y={125.89}
              width={607.66}
              height={9.39}
              style={{
                fill: '#f2d1a0',
              }}
            />
            <rect
              x={117.68}
              y={125.89}
              width={506.89}
              height={9.39}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={18.78}
              y={135.08}
              width={601.79}
              height={1.56}
              style={{
                fill: '#cca26e',
              }}
            />
            <rect
              x={121.47}
              y={135.08}
              width={499.11}
              height={1.56}
              style={{
                fill: '#e5bd88',
              }}
            />
            <rect
              x={121.47}
              y={136.62}
              width={499.11}
              height={19.49}
              style={{
                fill: '#f7d5a4',
              }}
            />
            <rect
              x={17.04}
              y={136.62}
              width={104.43}
              height={19.49}
              style={{
                fill: '#e8be87',
              }}
            />
            <g>
              <path
                d="M139.54,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.43V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M163.35,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.43V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M184.26,136.61h-11v19.47h11Zm-1.87,1.88v15.76h-3V138.49Zm-4.86,0v15.76h-2.44V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M207.48,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.43V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M231.29,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.43V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
            </g>
            <g>
              <path
                d="M39.34,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76H30.17V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M63.15,136.61h-11v19.47h11Zm-1.87,1.88v15.76h-3V138.49Zm-4.87,0v15.76H54V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M84.05,136.61H73v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76H74.86V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M107.28,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76H98.11V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
            </g>
            <g>
              <path
                d="M269.67,136.61h-11v19.47h10.95Zm-1.81,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.44V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M293.48,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.44V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M314.38,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.43V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M337.61,136.61H326.56v19.47h11.09Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.44V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M361.42,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.44V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
            </g>
            <g>
              <path
                d="M398.58,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.43V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M422.39,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.43V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M443.3,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.44V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M466.52,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.43V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M490.33,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.43V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
            </g>
            <g>
              <path
                d="M525.17,136.61h-11v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76H516V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M549,136.61H538v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.39V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M569.86,136.61h-11v19.47h11ZM568,138.49v15.76h-3V138.49Zm-4.87,0v15.76h-2.44V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M593.12,136.61h-11v19.47h11Zm-1.87,1.88v15.76h-3V138.49Zm-4.86,0v15.76H584V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
              <path
                d="M616.92,136.61H605.86v19.47h11Zm-1.86,1.88v15.76h-3V138.49Zm-4.87,0v15.76h-2.43V138.49Z"
                style={{
                  fill: '#ffedd4',
                }}
              />
            </g>
            <polyline
              points="117.71 126.11 172.58 108.69 169.94 100.36 115.07 117.78"
              style={{
                fill: '#fce2b9',
              }}
            />
            <polyline
              points="627.22 118.12 572.35 100.7 569.7 109.03 624.58 126.45"
              style={{
                fill: '#fce2b9',
              }}
            />
            <path
              d="M568.86,108.78c-.72,4.75-1.75,1.1-2.16,1a2.82,2.82,0,0,0-2.32,1c-.87.88-1.74-2.32-1.89-3a3.39,3.39,0,0,0-1.07-1.22l-33.53-10.3a7.75,7.75,0,0,0-1.11.48c-1,.58-3.2-1.3-4.21-1.3s-3.34.29-4.07-.87c-.3-.49-.66-1-1-1.49L489,84.32c.55,2.75,1.07,6.18.58,7.49-.87,2.32-2-.58-2.9-2.33s-2.61-1.45-2.9.58S482,95.58,480.87,95a2,2,0,0,0-2.73.75,2.09,2.09,0,0,0-.17.41c-.29,1.16,0,7-.58,9.87-.41,2.06-2.43,13.46-3.57,19.92h150.7Z"
              style={{
                fill: '#ffedd4',
              }}
            />
            <rect
              x={262.19}
              y={118.53}
              width={29.03}
              height={7.48}
              style={{
                fill: '#f7d5a4',
              }}
            />
            <rect
              x={28.97}
              y={118.53}
              width={29.03}
              height={7.48}
              style={{
                fill: '#f7d5a4',
              }}
            />
            <rect
              x={226.57}
              y={124.95}
              width={24.2}
              height={10.07}
              style={{
                fill: '#ffedd4',
              }}
            />
          </g>
          <g>
            <rect
              x={668.3}
              y={186.86}
              width={653.44}
              height={377.61}
              style={{
                fill: '#ffeec4',
              }}
            />
            <rect
              x={668.38}
              y={186.86}
              width={653.36}
              height={4.39}
              style={{
                fill: '#f9d270',
              }}
            />
            <rect
              x={661.69}
              y={173.74}
              width={663.04}
              height={13.12}
              style={{
                fill: '#ffe499',
              }}
            />
            <rect
              x={668.3}
              y={494.66}
              width={653.44}
              height={69.8}
              style={{
                fill: '#ffe499',
              }}
            />
            <g
              style={{
                opacity: 0.7400000095367432,
              }}
            >
              <path
                d="M681.47,551.45l25-20.42a26.8,26.8,0,0,1,21-6.19L742.06,527a3.29,3.29,0,0,1,2.27,1.61l14.2,22.62c1.8,2.85.24,7.11-2.62,7.15l-72.56,1.19C679.86,559.61,678.56,553.82,681.47,551.45Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M682.51,543.32l19.35-16.08c4.76-4,6.29-12,3.49-18.36L694.83,485.1a41.38,41.38,0,0,0-10.71-14.76h0c-3.19-2.74-7.48.1-7.6,5L675,537.82c-.09,3.69,2.31,6.69,5.18,6.47h0A4.25,4.25,0,0,0,682.51,543.32Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M722.18,507.57h0a10.32,10.32,0,0,1,9,4h0c2.29,2.7,1.16,7.59-1.9,8.27L710.36,524c-1.25.27-2.27-1.28-1.84-2.81v-.15C710.67,513.52,716,508.26,722.18,507.57Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M758.06,544l6.73,10.88a4.81,4.81,0,0,0,3.85,2.47l30.87,1c2.07.07,4-1.48,4.8-3.92l1.21-3.58a2.78,2.78,0,0,0-.91-3.18L779.56,532a15.17,15.17,0,0,0-16.77.14l-3,2C756.86,536,756.06,540.74,758.06,544Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M734.86,518.62l-.08.33c-.37,1.45.4,3,1.59,3.11l7.86,1a1.72,1.72,0,0,1,1.16.72l6.1,8.17a3.89,3.89,0,0,0,5.38,1.19l0,0h0a6.57,6.57,0,0,0,2.3-7l-2.39-9.82c-1.62-6.65-7.2-10.26-12.32-8l-2.64,1.1C738.52,510.89,735.92,514.3,734.86,518.62Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M808.76,550.69h0a5.26,5.26,0,0,1,1.1-1.68l18.72-19.43a3.65,3.65,0,0,1,3.66-1.1l4.5,1.29a5.06,5.06,0,0,1,3.28,4.17L843.08,551a6.85,6.85,0,0,1-.58,4.25l-.78,1.56a4.18,4.18,0,0,1-3.7,2.55l-25.51-.48C809.29,558.77,807.25,554.35,808.76,550.69Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M805.29,544.47l-13-7.54a5.14,5.14,0,0,1-2.29-4.1h0c-.23-2.87,1.49-5.37,3.73-5.44l23.34-.74c2.24-.07,4.31,1.56,5.27,4.17h0a2.9,2.9,0,0,1-.7,3.13l-12.16,10.12A3.57,3.57,0,0,1,805.29,544.47Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M760.8,514.1l1.58,7.28c.6,2.77,2.75,4.5,5,4l3.45-.82a3.42,3.42,0,0,1,2,.14l7.8,3c2.48.94,5-1.09,5.49-4.36l1.32-9.52c.4-2.84-1-5.59-3.13-6.35L774,503.88a3.41,3.41,0,0,0-2.53.1l-7.86,3.42C761.4,508.28,760.18,511.25,760.8,514.1Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M790.71,508.17l1.09,11a2.93,2.93,0,0,0,2.55,2.91l26.66.26h.32l12.17,2.07c1.45.24,2.77-1.1,2.92-3h0a3.64,3.64,0,0,0-1.38-3.28l-28-18.78c-4-2.71-9-1.85-12.32,2.15l-3.16,3.77A3.9,3.9,0,0,0,790.71,508.17Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M741.41,491.55l-2.08,9.89c-.45,2.13,1,4.09,2.71,3.56l7.17-2.3a1.71,1.71,0,0,1,1.14,0l6.64,2.36a1.72,1.72,0,0,0,1.42-.1l9.48-4.82a3,3,0,0,0,1.42-2.83l-.25-6.14c-.06-1.57-1.09-2.79-2.31-2.74l-23.24,1A2.45,2.45,0,0,0,741.41,491.55Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M845.79,545.42l1.81,8.21c.68,3.08,3,5,5.49,4.54l19.77-3.88a3.87,3.87,0,0,1,1.82.08l.89.25c3.12.89,6.07-2.22,6-6.33l-.08-4.62a6.62,6.62,0,0,0-2.81-5.57L861.5,527.63a4.13,4.13,0,0,0-5.44,1L847.21,539A7.6,7.6,0,0,0,845.79,545.42Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M886,544.35l-.31,8.21c-.09,2.47,1.46,4.53,3.39,4.5l11.95-.24c1.82,0,3.29-2,3.29-4.29h0a5,5,0,0,0-1-3.08l-8-10a2.81,2.81,0,0,0-3.63-.87l-3.66,2A4.36,4.36,0,0,0,886,544.35Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M841.52,526.82l.55.87c1.84,2.92,5.18,3.37,7.46,1l8-8.35a8.13,8.13,0,0,0,.15-10.42l-12.82-14.35a4.42,4.42,0,0,0-6.22-.72,3.78,3.78,0,0,0-.55.51l-2.88,2.92a8.13,8.13,0,0,0-.34,10.3l3.62,4.37a7.75,7.75,0,0,1,1.67,4.71l.15,5.13A8,8,0,0,0,841.52,526.82Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M834.52,511.7l-6.37-9.23a1,1,0,0,0-1.36-.41,1.05,1.05,0,0,0-.4.41l-2.62,3.85a1.75,1.75,0,0,0,.39,2.36l9,5.38c.63.38,1.38,0,1.61-.86h0A1.89,1.89,0,0,0,834.52,511.7Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M862.62,518.89l.86-1.54c1.43-2.56,3.88-3.86,6.3-3.35l18.08,3.78c2.4.5,4.2,3.1,4.3,6.23l.19,6.18a4,4,0,0,1-1.77,3.66l-4.83,2.75a2.37,2.37,0,0,1-2.49,0l-19.49-12C862.07,523.55,861.53,520.82,862.62,518.89Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M855,498.07l6.49,8.6a3.11,3.11,0,0,0,2.12,1.28L876,509.17c2.29.23,4.06-2.54,3.44-5.38l-1.71-7.9a3.75,3.75,0,0,0-2.58-3l-14-3.37a2.58,2.58,0,0,0-1.73.18l-3.14,1.45C854,492.16,853.34,495.85,855,498.07Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M897.27,526l.2,3.67a10.15,10.15,0,0,0,1.35,4.59L909.35,552a6.3,6.3,0,0,0,5.3,3.36h5.41c3.73,0,6.74-3.94,6.66-8.74l-.14-8.76a9.21,9.21,0,0,0-3.18-7.12l-16-12.6a5.4,5.4,0,0,0-5.76-.75h0C898.86,518.69,897.05,522.23,897.27,526Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M913.86,518.73l6.93,4.16c3.07,1.84,6.58-1,6.58-5.38v-6.65c0-2.82-1.54-5.25-3.7-5.81l-7.33-1.93c-3.08-.8-5.87,2.48-5.51,6.49l.39,4.42A6,6,0,0,0,913.86,518.73Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M882.78,506.21,883,508a4.85,4.85,0,0,0,3.19,4.39l6.07,1.59a3.07,3.07,0,0,0,1.28.06l10.23-1.56c2.18-.33,3.75-2.85,3.52-5.66h0c-.18-2.24-1.47-4.08-3.19-4.53l-14.29-3.77a3.28,3.28,0,0,0-3.08.8l-2.2,1.94A5.84,5.84,0,0,0,882.78,506.21Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M918.23,496.89l-11.61-2.8a7.34,7.34,0,0,1-5.39-8.69L904,472.67a7.37,7.37,0,0,1,2-3.73l8.07-7.86a7.17,7.17,0,0,1,5-2h0a7.27,7.27,0,0,1,7.21,7.06l.82,23.4a7.25,7.25,0,0,1-8.83,7.35Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M946.1,297.93l-7.82,4.84a3.27,3.27,0,0,1-3.91-.37L930,298.47a3.4,3.4,0,0,1-.2-4.8l.2-.2L938,286.4a3.26,3.26,0,0,1,2.42-.82l6.67.5a3.35,3.35,0,0,1,3.05,3.63,3.19,3.19,0,0,1-.27,1.05l-2.43,5.67A3.36,3.36,0,0,1,946.1,297.93Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M918.25,446.92l-3.16,5.7a1.34,1.34,0,0,0,.47,1.84,1.46,1.46,0,0,0,.44.16l3.43.62a1.32,1.32,0,0,0,1.53-1.07,1,1,0,0,0,0-.3l-.27-6.33a1.31,1.31,0,0,0-2.46-.62Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M773.17,495.12l-.23,1.35a2.93,2.93,0,0,0,1.81,3.22l10,4a2.94,2.94,0,0,0,2.91-.42l8.29-6.55a2.94,2.94,0,0,0,1-1.38h0a2.93,2.93,0,0,0-3-3.86l-18.09,1.19A2.94,2.94,0,0,0,773.17,495.12Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M805,494.37,818.63,503a2.06,2.06,0,0,0,2.67-.41l2.33-2.8a2.09,2.09,0,0,0,.34-2l-2.26-5.86a2,2,0,0,0-1.9-1.31H806.12a2,2,0,0,0-1.1,3.74Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M824.91,493.92l.56,2.5a3.29,3.29,0,0,0,1.23,1.9l3.14,2.32a1.44,1.44,0,0,0,2-.29l.07-.11,3.76-6.14a1.44,1.44,0,0,0-.48-2,1.41,1.41,0,0,0-.8-.21l-8.13.26a1.45,1.45,0,0,0-1.4,1.5A1.07,1.07,0,0,0,824.91,493.92Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M704.51,500.85l3.36,7.43a2.87,2.87,0,0,0,3.8,1.42l.13-.06,9.33-4.83a2.88,2.88,0,0,0,1.52-2.93l-.45-3.34a2.88,2.88,0,0,0-3-2.48l-12.23.75a2.88,2.88,0,0,0-2.71,3A2.94,2.94,0,0,0,704.51,500.85Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M724.73,499.25l.19,4.32a3.08,3.08,0,0,0,1.8,2.68l5.79,2.66a3.09,3.09,0,0,0,3.21-.38l.44-.34a3.13,3.13,0,0,0,1.19-2.35l.19-6.6a3.11,3.11,0,0,0-3-3.23h-6.71a3.09,3.09,0,0,0-3.13,3.05Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M927.59,344.54l-3.52,16.66a7.84,7.84,0,0,1-6,6l-1.15.25a7.81,7.81,0,0,1-8.66-4.07l-5.38-10.49a7.82,7.82,0,0,1-.75-4.85l2.7-16.18a7.84,7.84,0,0,1,9-6.45l.15,0,5.86,1.09a7.85,7.85,0,0,1,6.29,6.38l1.48,8.66A7.61,7.61,0,0,1,927.59,344.54Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M919.17,319.64l4.52,2.95a5.14,5.14,0,0,0,7-1.41l1.84-2.7a5.11,5.11,0,0,0,0-5.79l-5.41-7.9a5.14,5.14,0,0,0-7.14-1.34,3.79,3.79,0,0,0-.45.34l-2.77,2.4a5.12,5.12,0,0,0-1.5,5.57l1.83,5.25A5.11,5.11,0,0,0,919.17,319.64Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M913.12,316.94l-4-6.22a3.6,3.6,0,0,0-4-1.54l-3.78,1a3.56,3.56,0,0,0-2.47,2.34L897,318.27a3.61,3.61,0,0,0,2.28,4.57l.29.08,3.12.76a3.61,3.61,0,0,0,2.44-.27l7.15-3.5a2.08,2.08,0,0,0,1-2.77A2,2,0,0,0,913.12,316.94Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M858.66,319.8l-1.9,11.74a9.77,9.77,0,0,0,1.6,7.1l3.74,5.45a9.78,9.78,0,0,0,11.16,3.75l1.58-.53a9.81,9.81,0,0,0,6.24-6.34l1.7-5.38A14.91,14.91,0,0,0,881.06,323l-4.54-7a9.77,9.77,0,0,0-11.1-4h0A9.78,9.78,0,0,0,858.66,319.8Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M873.19,308.8l3.93,2.79a2.43,2.43,0,0,1,.72.84l1.67,3.18a2.39,2.39,0,0,0,3.23,1,2.31,2.31,0,0,0,.56-.41l3.54-3.54a2.39,2.39,0,0,0,.63-2.23l-3.61-15.06a2.36,2.36,0,0,0-2.17-1.82h0a7.08,7.08,0,0,0-7.23,5.12l-2.18,7.55A2.39,2.39,0,0,0,873.19,308.8Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M869.41,306.77l1.15-3.63a3.61,3.61,0,0,0-3.13-4.68h0a1.82,1.82,0,0,0-2,1.63.66.66,0,0,0,0,.14l-.13,6a1.83,1.83,0,0,0,1.79,1.87h.21l.56-.08A1.83,1.83,0,0,0,869.41,306.77Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M730,354.6l-1.52,23a6.55,6.55,0,0,1-5.86,6.08h-.35a6.55,6.55,0,0,1-6-2.71L710,372.13a6.56,6.56,0,0,1-.66-6.42l7.12-16.24a6.56,6.56,0,0,1,7-3.84h0a6.56,6.56,0,0,1,4.82,3.54l1,2.06A6.57,6.57,0,0,1,730,354.6Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M713.68,383.87l-2.87-4a3.16,3.16,0,0,0-4.41-.71l-.12.09-1.42,1.17a3.18,3.18,0,0,0-1.2,2.62l.49,10.8a3.16,3.16,0,0,0,2.49,3l1.07.23a3.18,3.18,0,0,0,3.66-2.08l2.78-8.2A3.16,3.16,0,0,0,713.68,383.87Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
            </g>
            <g
              style={{
                opacity: 0.6700000166893005,
              }}
            >
              <path
                d="M1280.67,544l-6.81,10.85a4.91,4.91,0,0,1-3.9,2.47l-31.34,1c-2.1.07-4-1.48-4.87-3.92l-1.24-3.58a2.77,2.77,0,0,1,.93-3.18L1258.86,532a15.62,15.62,0,0,1,17,.14l3.09,2C1281.86,536,1282.7,540.74,1280.67,544Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1304.27,518.62l.08.33c.38,1.45-.41,3-1.61,3.11l-8,1a1.76,1.76,0,0,0-1.18.72l-6.19,8.17a4,4,0,0,1-5.5,1.17h0c-2-1.31-3-4.28-2.34-7l2.43-9.82c1.64-6.65,7.31-10.26,12.51-8l2.63,1.16C1300.5,510.89,1303.15,514.3,1304.27,518.62Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1229.2,550.69h0a5.34,5.34,0,0,0-1.13-1.73l-19-19.43a3.73,3.73,0,0,0-3.72-1.1l-4.57,1.29a5.07,5.07,0,0,0-3.32,4.17L1194.35,551a6.78,6.78,0,0,0,.58,4.25l.79,1.56a4.26,4.26,0,0,0,3.76,2.55l25.9-.48C1228.66,558.77,1230.73,554.35,1229.2,550.69Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1232.72,544.47l13.2-7.54a5.17,5.17,0,0,0,2.33-4.1h0c.22-2.87-1.52-5.37-3.8-5.44l-23.69-.74c-2.28-.07-4.37,1.56-5.35,4.17h0a2.88,2.88,0,0,0,.71,3.13l12.35,10.12A3.66,3.66,0,0,0,1232.72,544.47Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1277.86,514.1l-1.6,7.28c-.61,2.77-2.8,4.5-5,4l-3.51-.82a3.5,3.5,0,0,0-2,.14l-7.92,3c-2.52.94-5.12-1.09-5.58-4.36l-1.34-9.52c-.4-2.84,1-5.59,3.18-6.35l10.48-3.59a3.48,3.48,0,0,1,2.56.1l8,3.42C1277.28,508.28,1278.52,511.25,1277.86,514.1Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1247.52,508.17l-1.1,11a3,3,0,0,1-2.59,2.91l-27.07.26h-.32l-12.36,2.07c-1.47.24-2.81-1.1-3-3h0a3.6,3.6,0,0,1,1.4-3.28L1231,499.35c4.11-2.71,9.12-1.85,12.51,2.15l3.2,3.77A3.85,3.85,0,0,1,1247.52,508.17Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1297.57,491.55l2.12,9.89c.45,2.13-1.07,4.09-2.76,3.56l-7.27-2.3a1.77,1.77,0,0,0-1.16,0l-6.74,2.36a1.79,1.79,0,0,1-1.45-.1l-9.62-4.82a3,3,0,0,1-1.44-2.83l.25-6.14a2.58,2.58,0,0,1,2.35-2.74l23.59,1A2.47,2.47,0,0,1,1297.57,491.55Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1191.6,545.42l-1.83,8.21c-.69,3.08-3.08,5-5.57,4.54l-20.06-3.88a4,4,0,0,0-1.84.08l-.9.25c-3.17.89-6.17-2.22-6.09-6.33l.08-4.62a6.57,6.57,0,0,1,2.86-5.57l17.44-10.47a4.22,4.22,0,0,1,5.52,1l9,10.34A7.48,7.48,0,0,1,1191.6,545.42Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1150.79,544.35l.32,8.21c.1,2.47-1.48,4.53-3.44,4.5l-12.13-.24c-1.86,0-3.34-2-3.34-4.29h0a4.94,4.94,0,0,1,1-3.08l8.09-10a2.89,2.89,0,0,1,3.69-.87l3.72,2A4.35,4.35,0,0,1,1150.79,544.35Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1195.94,526.82l-.56.87c-1.87,2.92-5.26,3.37-7.57,1l-8.14-8.35a8,8,0,0,1-.15-10.42l13-14.35a4.55,4.55,0,0,1,6.39-.67,5.22,5.22,0,0,1,.48.46l2.93,2.92a8,8,0,0,1,.34,10.3L1199,513a7.76,7.76,0,0,0-1.7,4.71l-.15,5.13A8,8,0,0,1,1195.94,526.82Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1203.05,511.7l6.46-9.23a1,1,0,0,1,1.34-.45,1,1,0,0,1,.45.45l2.66,3.85a1.73,1.73,0,0,1-.4,2.36l-9.11,5.38a1.13,1.13,0,0,1-1.52-.5,1.08,1.08,0,0,1-.11-.36h0A1.81,1.81,0,0,1,1203.05,511.7Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1174.52,518.89l-.87-1.54c-1.46-2.56-3.94-3.86-6.4-3.35l-18.34,3.78c-2.43.5-4.26,3.1-4.35,6.23l-.2,6.18a4,4,0,0,0,1.79,3.66l4.9,2.75a2.46,2.46,0,0,0,2.54,0l19.78-12A4.42,4.42,0,0,0,1174.52,518.89Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1182.24,498.07l-6.58,8.6a3.13,3.13,0,0,1-2.16,1.28L1161,509.17c-2.33.23-4.12-2.54-3.5-5.38l1.74-7.9a3.82,3.82,0,0,1,2.62-3l14.21-3.37a2.67,2.67,0,0,1,1.76.18l3.19,1.45C1183.26,492.16,1183.94,495.85,1182.24,498.07Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1139.35,526l-.21,3.67a10.05,10.05,0,0,1-1.37,4.59L1127.08,552a6.4,6.4,0,0,1-5.38,3.36h-5.49c-3.79,0-6.85-3.94-6.77-8.74l.14-8.76a9.24,9.24,0,0,1,3.23-7.12l16.25-12.6a5.56,5.56,0,0,1,5.85-.75h0C1137.75,518.69,1139.56,522.23,1139.35,526Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1122.48,518.73l-7,4.16c-3.11,1.84-6.68-1-6.68-5.38v-6.65c0-2.82,1.57-5.25,3.76-5.81l7.44-1.93c3.13-.8,6,2.48,5.6,6.49l-.4,4.42A6,6,0,0,1,1122.48,518.73Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1154.05,506.21l-.19,1.8a4.85,4.85,0,0,1-3.24,4.39l-6.16,1.59a3.17,3.17,0,0,1-1.3.06l-10.38-1.56c-2.21-.33-3.81-2.85-3.58-5.66h0a4.89,4.89,0,0,1,3.24-4.53l14.5-3.77a3.4,3.4,0,0,1,3.14.8l2.23,1.94A5.81,5.81,0,0,1,1154.05,506.21Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1248.64,501.46l-3.88-4.25a2.47,2.47,0,0,1,.22-3.5,2.6,2.6,0,0,1,.87-.5l15.69-4.94a2.5,2.5,0,0,1,3.13,1.65,3.59,3.59,0,0,1,.08.35l.86,5.84a2.49,2.49,0,0,1-1.83,2.76l-12.67,3.34A2.49,2.49,0,0,1,1248.64,501.46Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1232.5,490.42h0a2.78,2.78,0,0,0-2.73-.9l-16,3.66a2.78,2.78,0,0,0-2.09,3.33h0l.67,2.84a2.81,2.81,0,0,0,.44,1c.76,1.07,2.66,3.67,3.08,3.67s10.85-6.29,16-9.4a2.78,2.78,0,0,0,.92-3.82A2.82,2.82,0,0,0,1232.5,490.42Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1109.27,486.42l-.53,8.52a4.38,4.38,0,0,0,.21,1.61l.08.25a4.27,4.27,0,0,0,4.51,2.88l12.29-1.36a4.89,4.89,0,0,0,.76-.16l7.79-2.36a4.25,4.25,0,0,0,2.94-4.85h0a4.26,4.26,0,0,0-2.13-3l-14.94-8.17a4.25,4.25,0,0,0-4.4.19l-4.69,3.13A4.27,4.27,0,0,0,1109.27,486.42Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1113,475.45l6.07-2.29a4.87,4.87,0,0,0,3.11-5.18l-.82-6.39a4.87,4.87,0,0,0-4.23-4.22h0a4.92,4.92,0,0,0-3.55,1l-5.38,4.08a4.87,4.87,0,0,0-1.92,4l.12,4.6a4.87,4.87,0,0,0,5,4.72A5.05,5.05,0,0,0,1113,475.45Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1125.25,475.39l.66-3a3.41,3.41,0,0,1,3.79-2.65l3.86.52a3.38,3.38,0,0,1,1.61.67l8.21,6.29A3.41,3.41,0,0,1,1144,482a3.7,3.7,0,0,1-.42.46l-3.49,3.2a3.4,3.4,0,0,1-4.36.2l-9.23-7A3.42,3.42,0,0,1,1125.25,475.39Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1123.54,461.07l.93,3.2a2.76,2.76,0,0,0,2.56,2l4.08.11a2.75,2.75,0,0,0,2.82-2.66h0l.12-3.9a2.76,2.76,0,0,0-1.16-2.32l-2.86-2a2.72,2.72,0,0,0-3.65.44l-2.27,2.6A2.73,2.73,0,0,0,1123.54,461.07Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1119.42,434.81h0a7.47,7.47,0,0,0,3-3l8-14.56a7.55,7.55,0,0,0,.06-7.15l-8.31-15.77a7.57,7.57,0,0,0-10.22-3.15l-.18.1-.28.15a7.58,7.58,0,0,0-3.83,6.73l.61,30.17a7.55,7.55,0,0,0,11.15,6.48Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1124.58,439.51l4.35-7a3.09,3.09,0,0,1,2.86-1.46l3.31.23a1.74,1.74,0,0,1,1.61,1.6l.3,3.95a1.75,1.75,0,0,1-.46,1.32l-3.13,3.34a6,6,0,0,1-7.71.82l-.64-.44A1.74,1.74,0,0,1,1124.58,439.51Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1126.17,392.28l-1.34-2.41a4.1,4.1,0,0,1-.49-1.53l-.66-6a4.07,4.07,0,0,1,3.52-4.48h0a4,4,0,0,1,2.8.67l4.15,2.81a4.06,4.06,0,0,1,1.52,4.83l-2.15,5.56a4.07,4.07,0,0,1-7.35.55Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1279.08,553.36l2.9-5.57a14.8,14.8,0,0,1,12.18-7.95l19.59-1.28a2.63,2.63,0,0,1,2.8,2.45v0l.73,15a2.65,2.65,0,0,1-2.54,2.76h-.22l-33.23-1.65a2.64,2.64,0,0,1-2.21-3.81Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1290.46,534.34l5-6.19a5.3,5.3,0,0,1,3.6-2l14.34-1.43a2.91,2.91,0,0,1,3.18,2.61,2.46,2.46,0,0,1,0,.47l-.3,4.84a2.68,2.68,0,0,1-2.53,2.49l-22.27,1.09a1.18,1.18,0,0,1-1.26-1.1A1.16,1.16,0,0,1,1290.46,534.34Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1304.36,513.13,1306,518a5.2,5.2,0,0,0,4.92,3.51H1315a1,1,0,0,0,1-.84l.58-5.09a1,1,0,0,0-.71-1l-10.34-2.67a1,1,0,0,0-1.18.77A1,1,0,0,0,1304.36,513.13Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1301.76,500.29l1.71,7.18a2.88,2.88,0,0,0,2.21,2.13l7.89,1.62a2.84,2.84,0,0,0,3.36-2.22,2.42,2.42,0,0,0,.06-.47l.32-8.59a2.86,2.86,0,0,0-2.7-3h-.09l-9.93-.2a2.86,2.86,0,0,0-2.92,2.78A3.31,3.31,0,0,0,1301.76,500.29Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1097.08,323.15l3.66,11.24a4.44,4.44,0,0,1,.15.52l5.19,21.07a7.3,7.3,0,0,0,8.83,5.35l.39-.11h0a7.29,7.29,0,0,0,4.25-3.43l7.77-13.91a7.32,7.32,0,0,0,.68-5.44l-4.14-15.58a7.35,7.35,0,0,0-4-4.74l-9.7-4.56a7.33,7.33,0,0,0-4.77-.51l-3.08.72a7.31,7.31,0,0,0-5.38,8.84A5.44,5.44,0,0,0,1097.08,323.15Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1121.34,362.29l4-7.44a5.59,5.59,0,0,1,7.33-2.4l9.82,4.67a5.58,5.58,0,0,1,3.2,4.91l.24,9.52a5.59,5.59,0,0,1-4.06,5.52h0a5.59,5.59,0,0,1-4-.33l-14-6.73a5.6,5.6,0,0,1-2.65-7.46A2.1,2.1,0,0,1,1121.34,362.29Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1097,311l.28-.11a4.64,4.64,0,0,0,3-4.74l-.43-4.63a4.63,4.63,0,0,0-1.28-2.8l-4.88-5a4.63,4.63,0,0,0-3.69-1.38l-3.48.28a4.63,4.63,0,0,0-3.41,7.28l1.55,2.18a4.33,4.33,0,0,0,.43.53l7,7.28A4.6,4.6,0,0,0,1097,311Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1102.86,302.11l.09,4.48a4.14,4.14,0,0,0,3.72,4l3,.3a4.15,4.15,0,0,0,4.53-3.73,2.45,2.45,0,0,0,0-.27v-1.07a4.13,4.13,0,0,0-1-2.81l-3.15-3.71a4.12,4.12,0,0,0-4.88-1.08h0A4.1,4.1,0,0,0,1102.86,302.11Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1084.38,279.2l.09,1.07a8.64,8.64,0,0,0,4.58,6.93l9.2,4.85a8.66,8.66,0,0,0,5.45.88l2.45-.41a8.57,8.57,0,0,0,4.59-2.31l7-6.76a8.63,8.63,0,0,0,2.2-8.95h0a8.61,8.61,0,0,0-7.58-5.89l-15.5-1.13a8.66,8.66,0,0,0-5.72,1.63l-3.26,2.37A8.66,8.66,0,0,0,1084.38,279.2Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1111.91,294l2.47-1.69a1.47,1.47,0,0,1,1.35-.16l1.48.57a1.45,1.45,0,0,1,.88,1l.57,2.07a3.84,3.84,0,0,1-2.62,4.71l-.59.17a1.44,1.44,0,0,1-1.67-.68l-2.31-4A1.46,1.46,0,0,1,1111.91,294Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1285.24,464.82l3.36,3.09a3.83,3.83,0,0,0,3.21,1h0a6.72,6.72,0,0,0,5.18-4.13l3-7.43a3.85,3.85,0,0,0-1.07-4.35l-.37-.32a3.83,3.83,0,0,0-4.62-.28l-7.13,4.75a4,4,0,0,0-1.1,1.12l-1.08,1.7A3.82,3.82,0,0,0,1285.24,464.82Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1299.86,484.23l1.12,4.17a3.78,3.78,0,0,0,3.6,2.8l8.41.13a3.78,3.78,0,0,0,3.84-3.72v0L1317,474a3.8,3.8,0,0,0-4.78-3.7h0a3.89,3.89,0,0,0-1.64.93l-9.66,9.3A3.79,3.79,0,0,0,1299.86,484.23Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1293.75,445.13v4.09a1.22,1.22,0,0,0,1.22,1.22,1.15,1.15,0,0,0,.37-.06l1.72-.55a2.39,2.39,0,0,0,1.67-2.14l.07-1.12a1.2,1.2,0,0,0-.65-1.15l-2.62-1.37a1.22,1.22,0,0,0-1.64.52A1.25,1.25,0,0,0,1293.75,445.13Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1318.77,359.87l-1-.43a4.44,4.44,0,0,0-5.51,1.66l-5.39,8.38a4.49,4.49,0,0,0-.62,3.31l1.5,7.2a4.5,4.5,0,0,0,1.71,2.66l12.16,9-.2-27.71A4.45,4.45,0,0,0,1318.77,359.87Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1311.76,387.69l-2-1.92a3.83,3.83,0,0,0-3.38-1h0a3.84,3.84,0,0,0-2.27,1.38l-.32.41a3.84,3.84,0,0,0-.62,3.62l1,2.8a3.85,3.85,0,0,0,4.77,2.44l1.07-.33a3.87,3.87,0,0,0,2.49-2.39l.35-1A3.82,3.82,0,0,0,1311.76,387.69Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1308.45,364.4l2.44-3.11a.84.84,0,0,0,.06-1l-.71-1.17a.8.8,0,0,0-.67-.4l-2.4-.16a.85.85,0,0,0-.89.72l-.28,1.81a1,1,0,0,0,.08.5l1.32,2.66a.62.62,0,0,0,.83.31A.6.6,0,0,0,1308.45,364.4Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1288.32,336l6,3.47a2.46,2.46,0,0,0,2.85-.27l2.5-2.19a10.68,10.68,0,0,0,3.61-7.46l.5-9.78a2.44,2.44,0,0,0-.4-1.48l-3.29-5a11.17,11.17,0,0,0-9.74-5h0a2.44,2.44,0,0,0-2.35,2.35l-.86,23.09A2.46,2.46,0,0,0,1288.32,336Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1305.2,299.19l.26.05a2.67,2.67,0,0,1,2.21,2.56l.31,11.11a2.69,2.69,0,0,1-1.44,2.45h0a2.67,2.67,0,0,1-3.38-.76l-4-5.32a2.66,2.66,0,0,1-.17-3l3.46-5.83A2.67,2.67,0,0,1,1305.2,299.19Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
              <path
                d="M1299.7,302l-2.52,4.22a1.87,1.87,0,0,1-1.61.91h0a1.88,1.88,0,0,1-1.88-1.84l-.1-5.14a1.88,1.88,0,0,1,1.52-1.89,27.81,27.81,0,0,1,3.27-.52,10.38,10.38,0,0,1,1.41,2.49A1.88,1.88,0,0,1,1299.7,302Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
            </g>
            <path
              d="M925,564.58V362.79a90.18,90.18,0,0,1,90.16-90.16h0a90.18,90.18,0,0,1,90.16,90.16V564.58"
              style={{
                fill: '#edac3a',
              }}
            />
            <path
              d="M1029.18,272.92A91.62,91.62,0,0,0,1015,271.8h0A90.17,90.17,0,0,0,924.79,362V563.74h28.45V362A90.18,90.18,0,0,1,1029.18,272.92Z"
              style={{
                fill: '#d39024',
              }}
            />
            <path
              d="M1105.11,564.49V362.71A90.17,90.17,0,0,0,1015,272.55h0a90.18,90.18,0,0,0-90.16,90.16V564.49"
              style={{
                fill: 'none',
                stroke: '#069',
                strokeMiterlimit: 10,
                strokeWidth: 12,
              }}
            />
            <g>
              <rect
                x={716.24}
                y={457.31}
                width={156.25}
                height={5.19}
                style={{
                  fill: '#664020',
                }}
              />
              <rect
                x={716.24}
                y={462.5}
                width={156.25}
                height={2.86}
                style={{
                  fill: '#e5bc61',
                }}
              />
              <rect
                x={730.16}
                y={271.09}
                width={128.8}
                height={181.75}
                style={{
                  fill: '#9cc',
                  stroke: '#09c',
                  strokeMiterlimit: 10,
                  strokeWidth: 9,
                }}
              />
              <line
                x1={794.56}
                y1={271.09}
                x2={794.56}
                y2={452.84}
                style={{
                  fill: 'none',
                  stroke: '#09c',
                  strokeMiterlimit: 10,
                  strokeWidth: 9,
                }}
              />
              <line
                x1={862.83}
                y1={361.35}
                x2={728.8}
                y2={361.35}
                style={{
                  fill: 'none',
                  stroke: '#09c',
                  strokeMiterlimit: 10,
                  strokeWidth: 9,
                }}
              />
              <g>
                <rect
                  x={732.73}
                  y={349.88}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={344.04}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={337.96}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={332.13}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={326.04}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={320.21}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={314.13}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={308.29}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={302.21}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={296.37}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={290.29}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={284.45}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={278.68}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
              </g>
              <g>
                <rect
                  x={732.73}
                  y={440.89}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={435.06}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={428.98}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={423.14}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={417.06}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={411.22}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={405.14}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={399.3}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={393.22}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={387.38}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={381.3}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={375.46}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={732.73}
                  y={369.9}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
              </g>
            </g>
            <g>
              <rect
                x={1145.22}
                y={457.31}
                width={156.25}
                height={5.19}
                style={{
                  fill: '#664020',
                }}
              />
              <rect
                x={1145.22}
                y={462.5}
                width={156.25}
                height={2.86}
                style={{
                  fill: '#e5bc61',
                }}
              />
              <rect
                x={1159.14}
                y={271.09}
                width={128.8}
                height={181.75}
                style={{
                  fill: '#9cc',
                  stroke: '#09c',
                  strokeMiterlimit: 10,
                  strokeWidth: 9,
                }}
              />
              <line
                x1={1223.54}
                y1={271.09}
                x2={1223.54}
                y2={452.84}
                style={{
                  fill: 'none',
                  stroke: '#09c',
                  strokeMiterlimit: 10,
                  strokeWidth: 9,
                }}
              />
              <line
                x1={1291.81}
                y1={361.35}
                x2={1157.78}
                y2={361.35}
                style={{
                  fill: 'none',
                  stroke: '#09c',
                  strokeMiterlimit: 10,
                  strokeWidth: 9,
                }}
              />
              <g>
                <rect
                  x={1161.71}
                  y={349.88}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={344.04}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={337.96}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={332.13}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={326.04}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={320.21}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={314.13}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={308.29}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={302.21}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={296.37}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={290.29}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={284.45}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={278.68}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
              </g>
              <g>
                <rect
                  x={1161.71}
                  y={440.89}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={435.06}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={428.98}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={423.14}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={417.06}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={411.22}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={405.14}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={399.3}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={393.22}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={387.38}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={381.3}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={375.46}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
                <rect
                  x={1161.71}
                  y={369.9}
                  width={123.4}
                  height={3.28}
                  style={{
                    fill: '#09c',
                  }}
                />
              </g>
            </g>
          </g>
          <line
            x1={590.13}
            y1={565.65}
            x2={848.98}
            y2={565.65}
            style={{
              fill: 'none',
              stroke: '#d19433',
              strokeMiterlimit: 10,
              strokeWidth: 3,
            }}
          />
          <line
            x1={1162.9}
            y1={564.65}
            x2={1330.5}
            y2={564.65}
            style={{
              fill: 'none',
              stroke: '#d19433',
              strokeMiterlimit: 10,
              strokeWidth: 3,
            }}
          />
          <line
            x1={880.9}
            y1={565.65}
            x2={858.45}
            y2={565.65}
            style={{
              fill: 'none',
              stroke: '#d19433',
              strokeMiterlimit: 10,
              strokeWidth: 3,
            }}
          />
          <g
            style={{
              opacity: 0.49000000953674316,
            }}
          >
            <line
              x1={601.85}
              y1={645.24}
              x2={616.58}
              y2={645.24}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={614.27}
              y1={635.05}
              x2={628.99}
              y2={635.05}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={628.45}
              y1={645.02}
              x2={643.18}
              y2={645.02}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={664.81}
              y1={645.02}
              x2={679.54}
              y2={645.02}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={681.22}
              y1={633.49}
              x2={695.95}
              y2={633.49}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={559.73}
              y1={603.79}
              x2={574.46}
              y2={603.79}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={541.11}
              y1={617.53}
              x2={555.84}
              y2={617.53}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={425.55}
              y1={625.53}
              x2={440.28}
              y2={625.53}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={409.15}
              y1={637.95}
              x2={423.88}
              y2={637.95}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={441.96}
              y1={637.95}
              x2={456.69}
              y2={637.95}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={322.23}
              y1={670.74}
              x2={336.96}
              y2={670.74}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={495.88}
              y1={605.56}
              x2={510.61}
              y2={605.56}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={748.61}
              y1={614.87}
              x2={763.34}
              y2={614.87}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={779.21}
              y1={588.82}
              x2={793.94}
              y2={588.82}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={795.61}
              y1={599.02}
              x2={810.34}
              y2={599.02}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1237.45}
              y1={676.61}
              x2={1252.18}
              y2={676.61}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1250.08}
              y1={662.65}
              x2={1264.81}
              y2={662.65}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1280.68}
              y1={675.28}
              x2={1295.41}
              y2={675.28}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={710.7}
              y1={666.97}
              x2={725.43}
              y2={666.97}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={522.48}
              y1={679.61}
              x2={537.21}
              y2={679.61}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1115.07}
              y1={662.98}
              x2={1129.8}
              y2={662.98}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1264.72}
              y1={603.12}
              x2={1279.45}
              y2={603.12}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1250.75}
              y1={617.09}
              x2={1265.48}
              y2={617.09}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1286.66}
              y1={617.09}
              x2={1301.39}
              y2={617.09}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1177.59}
              y1={591.15}
              x2={1192.32}
              y2={591.15}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1196.88}
              y1={693.57}
              x2={1211.61}
              y2={693.57}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1065.7}
              y1={666.75}
              x2={1080.43}
              y2={666.75}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={1123.72}
              y1={628.39}
              x2={1138.45}
              y2={628.39}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
          </g>
          <g>
            <rect
              x={894.81}
              y={241.43}
              width={212.16}
              height={13.3}
              style={{
                fill: '#e5bc61',
              }}
            />
            <g>
              <rect
                x={890.05}
                y={152.97}
                width={221.02}
                height={89.12}
                style={{
                  fill: '#fff',
                }}
              />
              <g
                style={{
                  opacity: 0.5099999904632568,
                }}
              >
                <path
                  d="M890.86,176c16.53-1.58,33,1.83,49.44,3.46q12.38,1.22,24.8,1.8c8.25.38,16.54.69,24.8.33,4-.17,8.26-.22,12.12-1.22a6.66,6.66,0,0,0,4.07-2.62,5.53,5.53,0,0,0,.67-3.21,5.81,5.81,0,0,0-.85-3.45,7.79,7.79,0,0,0-4.14-2.79A64.79,64.79,0,0,0,990.31,166a160,160,0,0,0-24.26-1.13c-4,.06-8,.21-12,.37-1.54.06-3.7-.19-5,.9-.89.79-.79,1.92-.79,3a4.51,4.51,0,0,0,.82,3,6.38,6.38,0,0,0,4.15,1.87,118.7,118.7,0,0,0,12.25,1.22c4.08.22,8.22.4,12.33.41a115.65,115.65,0,0,0,12.49-.4c1.09-.12,2.45-.47,2.53-1.75a13.35,13.35,0,0,0,0-2,53.4,53.4,0,0,0-18.65-.83c-.1,0,.07,2,0,2a53.4,53.4,0,0,1,18.65.83v-2c-.11,1.76-2.67,1.7-3.91,1.77-2.21.13-4.43.21-6.66.26q-6.4.15-12.82-.15t-12.8-1c-3-.34-8-.42-8.36-4.44v2c.1-3.1,4-2.67,6.2-2.75,2.95-.12,5.9-.23,8.85-.3,6-.15,11.94-.15,17.9.21a108.76,108.76,0,0,1,17.42,2.38c2.47.56,5.29,1.15,7,3.27a5.18,5.18,0,0,1,.81,1.45,3,3,0,0,1,.19.71v-.54a3.13,3.13,0,0,1-.16.52,5.25,5.25,0,0,1-2.31,2.59c-2.43,1.43-5.68,1.44-8.41,1.68q-4.53.41-9.07.49c-6.14.13-12.28,0-18.42-.29q-18.19-.72-36.31-2.85c-13.64-1.6-27.35-3.87-41.12-2.55-.08,0,0,2,0,2Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M1108.23,194.29c-4.34-3-9.71-3.33-14.79-3.81q-9.11-.87-18.25-1.39c-12.27-.72-24.56-1-36.84-1.16-24.45-.23-48.89.31-73.33,0-12.89-.14-26.09-.23-38.38-4.6.2.07-.22,1.92,0,2,10.82,3.84,22.37,4.36,33.74,4.54,12.28.2,24.56.15,36.85.08,24.42-.14,48.86-.39,73.27.84,6.83.35,13.66.81,20.48,1.42,5.8.52,12.27.64,17.25,4-.3-.21.32-1.78,0-2Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M1000.86,165.48c9.46-1,16.85,6.27,25.64,8.27,4.63,1.06,9.57.87,14.29,1q7.53.19,15.07.31,8.52.1,17,.1c8.48,0,0-2,0-2q-15.08,0-30.13-.36c-4.78-.12-9.7,0-14.43-.7-4.51-.69-8.55-2.76-12.59-4.76-4.65-2.29-9.6-4.43-14.89-3.86a14.83,14.83,0,0,0,0,2Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M1072,176.74q-16.68-.6-33.36-.26c-5.47.12-11,.2-16.43.62-1.24.1-2.48.23-3.72.44a6.48,6.48,0,0,0-3,.9c-.75.61-.77,2.28-.53,3.16s1.13,1,1.85,1.14c1.36.24,2.74.36,4.11.49,2.66.26,5.33.41,8,.5,5.56.18,11.14.16,16.71.2l33.06.26c11.79.09,24-.43,35.38,3.22-.18-.06.21-1.94,0-2-12.37-4-25.8-3.15-38.61-3.25-13.41-.1-26.81-.17-40.21-.31-3.73,0-7.47-.11-11.19-.36-1.78-.12-3.56-.28-5.33-.49-1.11-.14-3.68-.05-3.8-1.64v2c.37-1.74,3.36-1.79,4.71-2,2.34-.31,4.69-.41,7-.51q7.59-.32,15.18-.44,15.06-.22,30.13.32c15.07.54,0-2,0-2Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M1109.47,176.92q-14.46-2.13-29-3.22c-14.54-1.09-.06,2,0,2q14.58,1.1,29,3.22C1109.39,178.92,1109.58,176.92,1109.47,176.92Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M888.66,168.48q10.82.36,21.65.26a198,198,0,0,0,21.23-.88c6.9-.81,13.44-3.17,20.26-4.37s14-2,21-2.89c8-1,16-2.49,24.06-2.25v-2c-7.16-.21-14.28,1-21.36,1.89s-14.2,1.77-21.27,2.85c-6.86,1-13.44,3.4-20.3,4.45s-13.92,1.07-20.87,1.17q-12.19.16-24.39-.23c-12.19-.4,0,2,0,2Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M1016.14,157.69c25,3.34,50.14,6.69,75.41,7.63,7.09.27,14.19.34,21.28.17v-2c-25.28.58-50.49-1.89-75.55-5-7-.88-14.09-1.82-21.14-2.76.08,0-.1,2,0,2Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M892,205.09c20.83.62,41.67.59,62.5.16S996,204,1016.76,203q15.56-.74,31.11-1.55l15.68-.81c5.09-.26,10.22-.7,15.32-.72,4,0,8.57.88,10.8,4.63a3.87,3.87,0,0,1-.34,5.13,17.48,17.48,0,0,1-4.14,4.56c-7.29,5.8-17,6.29-25.93,6-10.38-.37-20.75-1-31.13-1.45s-20.65-.77-31-1.45c-1.59-.1-3.72-.5-3.82-2.47v2c.17-1.84,2.35-2.72,3.9-3.08a74.42,74.42,0,0,1,8.29-1q8.71-1,17.46-1.86,17.47-1.76,35-3c3.16-.23,6.35-.61,9.51-.61,2.32,0,6.34.65,6.4,3.69v-2c-.49,4.88-7.47,4.17-10.9,4.3q-7.58.28-15.17.41-15.29.25-30.59-.17c-15.3-.42,0,2,0,2q24.12.64,48.25-.34c2.87-.12,7.36,0,8.3-3.52.53-2,.18-4.4-1.69-5.5-3-1.8-7.34-.89-10.66-.65q-6,.42-12.09.91-23.65,1.89-47.25,4.63c-2.57.29-6.57.16-8.32,2.52a3.83,3.83,0,0,0-.44,2.44,2.62,2.62,0,0,0,1,2.54c1.13.75,2.66.7,4,.76l6.46.3,11.92.56,23.84,1.12c7.81.36,15.66,1,23.47.94,7-.06,14.21-1.15,20.06-5.22,2.52-1.77,5.09-4.21,6.11-7.19a10.3,10.3,0,0,0-.06-6.38c-2.75-6.9-12-5.59-17.87-5.3l-24.38,1.28c-15.93.82-31.86,1.62-47.79,2.3-32,1.37-64.07,2.22-96.12,1.63q-6-.12-12-.29c-6-.17,0,2,0,2Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M891.31,213.15h52.22c7.85,0,15.82-.37,23.65.41a41.35,41.35,0,0,1,10.26,2.18,27.89,27.89,0,0,1,4.69,2.21c1.64,1,3.07,2.24,4.69,3.23a15.24,15.24,0,0,0,6,1.83c2.35.33,4.7.63,7.06.88,4.89.55,9.8.94,14.71,1.21v-2q-6.39-.34-12.75-1c-2.21-.23-4.41-.48-6.6-.77a36.31,36.31,0,0,1-5.85-1,15.91,15.91,0,0,1-4.85-2.77,27.82,27.82,0,0,0-4.52-2.75,35.31,35.31,0,0,0-10.16-3c-7.6-1.12-15.4-.73-23.06-.73H891.31v2Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M1051.61,227.87a117.47,117.47,0,0,0,24.21-1.23,80.87,80.87,0,0,0,11.73-2.53,43.67,43.67,0,0,0,9.51-4.59c3.34-2,6.74-4,10.65-4.6.11,0-.09-2,0-2-6.94,1.08-12.17,6.35-18.64,8.69a67.64,67.64,0,0,1-11.59,2.76,114,114,0,0,1-11.94,1.41,117.71,117.71,0,0,1-13.93.09Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M1109,203.31c-1.81-.6-3.64.18-5.48-.15s-3.58-1.54-5.21-2.36q-5.71-2.9-11.41-5.82c.25.13-.29,1.85,0,2q5.7,2.93,11.41,5.82c1.62.82,3.39,2,5.21,2.36s3.67-.45,5.48.15C1108.83,205.25,1109.23,203.38,1109,203.31Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M1000.39,193.09q-43.08,1.64-86.19,2.35-12.21.21-24.43.33c-12.22.12,0,2,0,2Q932.9,197.32,976,196q12.21-.4,24.41-.86C1012.59,194.64,1000.39,193.09,1000.39,193.09Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M890,185.25c8.46-1.16,17.16-2.29,25.54,0-.15,0,.18-2,0-2-8.38-2.26-17.08-1.13-25.54,0C889.85,183.25,890,185.25,890,185.25Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M892.63,221.46a187.26,187.26,0,0,1,25.51-.48c8.17.29,16.59.24,24.55,2.28,7.41,1.91,14.31,5.3,21.34,8.24a90.09,90.09,0,0,0,22.83,6.29c9.1,1.21,18.29,1.26,27.45,1.31v-2a242.77,242.77,0,0,1-24.42-.95,87.53,87.53,0,0,1-23-5.49c-7.11-2.8-13.95-6.28-21.26-8.56-7.91-2.46-16.1-2.66-24.31-3a203.66,203.66,0,0,0-28.7.36c-.08,0,0,2,0,2Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M972.86,225.62c16.76.39,31.95,8.48,48.27,11.23a55.34,55.34,0,0,0,13.9.67,19.06,19.06,0,0,0,0-2c-16.75,1.45-32.28-6.33-48.22-10a69.8,69.8,0,0,0-13.95-1.9Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M1066.45,238c15.13.3,31.23-.39,44.42-8.67.31-.2-.29-1.82,0-2-13.19,8.28-29.29,9-44.42,8.67Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M892,228.63c17-3.19,34.08.87,50.09,6.4,4.57,1.58,9.1,3.28,13.62,5-.2-.08.24-1.91,0-2-15.87-6-32.15-12-49.31-12.51a68.15,68.15,0,0,0-14.4,1.11C891.88,226.63,892.13,228.63,892,228.63Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
                <path
                  d="M932.77,236.83a167.79,167.79,0,0,0-42.55-5.42v2a167.79,167.79,0,0,1,42.55,5.42C932.62,238.83,932.94,236.83,932.77,236.83Z"
                  style={{
                    fill: '#e8e2d9',
                  }}
                />
              </g>
              <rect
                x={890.05}
                y={152.97}
                width={221.02}
                height={89.12}
                style={{
                  fill: 'none',
                  stroke: '#069',
                  strokeMiterlimit: 10,
                  strokeWidth: 12,
                }}
              />
            </g>
          </g>
          <g>
            <g>
              <polygon
                points="994.73 541.4 987.37 541.4 979.73 471.21 987.09 471.21 994.73 541.4"
                style={{
                  fill: '#09c',
                }}
              />
              <polygon
                points="1031.07 541.4 1038.42 541.4 1046.06 471.21 1038.7 471.21 1031.07 541.4"
                style={{
                  fill: '#09c',
                }}
              />
              <rect
                x={976.31}
                y={536.53}
                width={74.99}
                height={4.87}
                style={{
                  fill: '#09c',
                }}
              />
              <path
                d="M982.38,530.13h62.84a6.07,6.07,0,0,1,6.07,6.07v.33h-75v-.33a6.07,6.07,0,0,1,6.07-6.07Z"
                style={{
                  fill: '#57758f',
                }}
              />
              <rect
                x={979.23}
                y={541.4}
                width={7.36}
                height={75.69}
                style={{
                  fill: '#09c',
                }}
              />
              <rect
                x={1040.2}
                y={541.4}
                width={7.36}
                height={75.69}
                style={{
                  fill: '#09c',
                }}
              />
              <path
                d="M1047.68,489H977.31a3,3,0,0,1-3-3v-17.5a4.26,4.26,0,0,1,3.77-4.24,320.14,320.14,0,0,1,68.78,0,4.24,4.24,0,0,1,3.8,4.24V486A3,3,0,0,1,1047.68,489Z"
                style={{
                  fill: '#09c',
                }}
              />
            </g>
            <g>
              <polygon
                points="1210.24 541.82 1202.88 541.82 1195.24 471.63 1202.6 471.63 1210.24 541.82"
                style={{
                  fill: '#09c',
                }}
              />
              <polygon
                points="1246.58 541.82 1253.94 541.82 1261.58 471.63 1254.22 471.63 1246.58 541.82"
                style={{
                  fill: '#09c',
                }}
              />
              <rect
                x={1191.82}
                y={536.94}
                width={74.99}
                height={4.87}
                style={{
                  fill: '#09c',
                }}
              />
              <path
                d="M1197.9,530.54h62.84a6.07,6.07,0,0,1,6.07,6.07v.33h-75v-.33a6.07,6.07,0,0,1,6.07-6.07Z"
                style={{
                  fill: '#57758f',
                }}
              />
              <rect
                x={1194.74}
                y={541.81}
                width={7.36}
                height={75.69}
                style={{
                  fill: '#09c',
                }}
              />
              <rect
                x={1255.71}
                y={541.81}
                width={7.36}
                height={75.69}
                style={{
                  fill: '#09c',
                }}
              />
              <path
                d="M1263.19,489.44h-70.33a3,3,0,0,1-3-3v-17.5a4.26,4.26,0,0,1,3.77-4.24,321.43,321.43,0,0,1,68.78,0,4.28,4.28,0,0,1,3.81,4.25v17.46a3,3,0,0,1-3,3Z"
                style={{
                  fill: '#09c',
                }}
              />
              <g>
                <line
                  x1={1192.52}
                  y1={504.33}
                  x2={1192.3}
                  y2={521.18}
                  style={{
                    fill: 'none',
                    stroke: '#ff7d37',
                    strokeMiterlimit: 10,
                    strokeWidth: 11,
                  }}
                />
                <polyline
                  points="1244.35 512.04 1242.43 616.45 1230.51 616.23 1232.43 511.82"
                  style={{
                    fill: '#ff7d37',
                  }}
                />
                <path
                  d="M1220.86,515.47l-.73-2.93.75,2.92h0l-.73-2.93.75,2.92-.28.08a57.22,57.22,0,0,0-14.89,7.14,61.34,61.34,0,0,0-11.12,9.4,59.13,59.13,0,0,0-9.88,14.53,37.08,37.08,0,0,0-3.18,10.65,60.34,60.34,0,0,0,.26,17.85,110.51,110.51,0,0,0,6.7,23.86c1.25,3.15,2.42,5.71,3.26,7.47.43.88.77,1.56,1,2l.26.5.06.11h0l-2,1.09,2-1.09h0l-2,1.09,2-1.09h0l-5,2.71,5-2.71h0l-5,2.71,5-2.71-10.48,5.69a129.26,129.26,0,0,1-8-19,114.57,114.57,0,0,1-4.62-18.88,72.61,72.61,0,0,1-.26-21.38,48.65,48.65,0,0,1,4.23-14.05,70.47,70.47,0,0,1,13-18.62,74,74,0,0,1,20.7-14.94,56.42,56.42,0,0,1,10.34-4l2.87,11.57Z"
                  style={{
                    fill: '#ff7d37',
                  }}
                />
                <path
                  d="M1221.7,517.38l-2.25-7.54,2.27,7.53h0l-2.25-7.54,2.27,7.53h0l-1-3.49,1.08,3.49h0l-1-3.49,1.08,3.49h0a57.74,57.74,0,0,0-13.34,6.65,68.86,68.86,0,0,0-22.23,23.89,31.43,31.43,0,0,0-3.56,10.66,44.12,44.12,0,0,0-.31,9.47,70.73,70.73,0,0,0,2.43,13.62c.56,2.08,1.16,4,1.73,5.8s1.11,3.35,1.57,4.78l-15.33,5c-.53-1.65-1.34-4-2.2-6.79a103.29,103.29,0,0,1-3.61-15.22,64,64,0,0,1-.2-19,47,47,0,0,1,5.42-16.11,85,85,0,0,1,34.63-33.74,62.52,62.52,0,0,1,10.16-4.38l4.6,15.4Z"
                  style={{
                    fill: '#193441',
                  }}
                />
                <polyline
                  points="1246.33 517.22 1244.86 597.29 1228.79 597 1230.26 516.93"
                  style={{
                    fill: '#193441',
                  }}
                />
                <path
                  d="M1169.5,618.71l22.79-.09c.82,0,1-.45,1-1.36l-.14-8.29-16.59.29a8.28,8.28,0,0,0-8.14,8.42h0a1,1,0,0,0,1,1Z"
                  style={{
                    fill: '#193441',
                  }}
                />
                <g id="head">
                  <path
                    d="M1219.93,324.34a5.2,5.2,0,0,1,3.68,6l-.56,3-.18,1v.07l-.55,3h0l-.18,1-.57,3.08-1.61,8.64-.75,4.09a4.32,4.32,0,0,0,8.49,1.57l.76-4.09,1.6-8.64.57-3.08.18-1h0l.57-3.08v-.11l.17-.9.59-3.21a5.08,5.08,0,0,1,5.92-4.07h0a5.09,5.09,0,0,1,4.07,5.92l-.6,3.21-.16.9v.11l-.55,2.95v.15l-.18,1-.55,2.95-1.62,8.77-.74,4a4.41,4.41,0,0,0,2.78,5,4.33,4.33,0,0,0,5.52-2.65,4.91,4.91,0,0,0,.17-.63l.76-4.09,1.6-8.65.57-3.08.18-1h0l.56-3h0l.19-1,.56-3.07a5.18,5.18,0,0,1,5.15-4.3,5.09,5.09,0,0,1,5,5.23,5,5,0,0,1-.08.77l-.59,3.22-.17.89v.12l-.55,2.95v.14l-.18,1-.55,2.95-1.62,8.78-.74,4a4.4,4.4,0,0,0,2.78,5,4.31,4.31,0,0,0,5.51-2.63,3.69,3.69,0,0,0,.18-.65l.76-4.09,1.6-8.65.57-3.07.19-1h0l.56-3h0l.19-1,.56-3.07a5.18,5.18,0,0,1,5.15-4.3,5.09,5.09,0,0,1,5,5.23,5,5,0,0,1-.08.77l-.59,3.22-.17.89-.59,3.22-2.36,12.73-.76,4.11-5,27h0l-.76,4.1a27.06,27.06,0,0,1-31.53,21.68l-12.22-2.27a27,27,0,0,1-21.7-31.42l0-.11.76-4.1,5-27,.77-4.11,2.35-12.73.6-3.22.16-.89.6-3.21a5.1,5.1,0,0,1,5.78-4.32Z"
                    style={{
                      fill: '#ff7d37',
                    }}
                  />
                  <polygon
                    points="1219.14 444.61 1243.37 444.9 1243.43 408.79 1219.21 408.49 1219.14 444.61"
                    style={{
                      fill: '#ff7d37',
                    }}
                  />
                  <g>
                    <path
                      d="M1218.91,376.65a4.29,4.29,0,0,1,4.64-3.15,3.24,3.24,0,0,1,.62.12,4.29,4.29,0,0,1,3.15,4.64,2.82,2.82,0,0,1-.12.62,1.81,1.81,0,0,0,3.5.94,8.67,8.67,0,0,0,.22-1.13,7.91,7.91,0,0,0-5.81-8.57,6.27,6.27,0,0,0-1.13-.22,7.91,7.91,0,0,0-8.57,5.81,1.81,1.81,0,0,0,3.5.94Z"
                      style={{
                        fill: '#681800',
                      }}
                    />
                    <path
                      d="M1243.14,383.16a4.28,4.28,0,0,1,4.64-3.15,3.14,3.14,0,0,1,.61.12,4.28,4.28,0,0,1,3.15,4.64,3.14,3.14,0,0,1-.12.61,1.82,1.82,0,0,0,3.51.94,8.67,8.67,0,0,0,.22-1.13,7.94,7.94,0,0,0-5.81-8.57,8.67,8.67,0,0,0-1.13-.22,7.93,7.93,0,0,0-8.57,5.82,1.81,1.81,0,0,0,3.5.94Z"
                      style={{
                        fill: '#681800',
                      }}
                    />
                    <path
                      d="M1217.05,388.09a16.22,16.22,0,0,0,28.91,7.68Z"
                      style={{
                        fill: '#681800',
                      }}
                    />
                    <path
                      d="M1228.79,396.33l12.71,3.41a16.19,16.19,0,0,1-17.84-.7A4.28,4.28,0,0,1,1228.79,396.33Z"
                      style={{
                        fill: '#fc4c01',
                      }}
                    />
                    <path
                      d="M1248.12,400.55a2.46,2.46,0,0,1-.94-2.23,1.53,1.53,0,0,1,.07-.36h0a2.39,2.39,0,0,1,.76-1.21,2.44,2.44,0,0,1,1.28-.59,1.81,1.81,0,1,0-.5-3.59,6.08,6.08,0,0,0-5,4.45h0a6.68,6.68,0,0,0-.17.87,6.1,6.1,0,0,0,2.33,5.53,1.81,1.81,0,0,0,2.22-2.87Z"
                      style={{
                        fill: '#681800',
                      }}
                    />
                  </g>
                  <path
                    d="M1231.16,417.07a47.58,47.58,0,0,1-9.65-2.15,17.25,17.25,0,0,1-2.36-1.07.26.26,0,0,1-.1-.35.25.25,0,0,1,.35-.1h0a14.46,14.46,0,0,0,2.28,1A39.39,39.39,0,0,0,1228,416c.94.17,1.74.29,2.31.37l.66.09h.24a.26.26,0,1,1,0,.52h-.08Z"
                    style={{
                      fill: '#681800',
                    }}
                  />
                </g>
                <path
                  d="M1257.18,422.46l-25.87-.12-4.1,18.18-3.59-18.22-16.07-.07a9.57,9.57,0,0,0-9.61,9.52l-.32,68.19,63.15.29.35-73.79A4,4,0,0,0,1257.18,422.46Z"
                  style={{
                    fill: '#fff',
                  }}
                />
                <path
                  d="M1204.38,430.22s-11.3,38.59-12.38,70.95v4.22"
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: 12,
                  }}
                />
                <path
                  d="M1233.34,606.69h5a9,9,0,0,1,9.05,9h0v1.59h-23.12v-1.59a9,9,0,0,1,9-9Z"
                  style={{
                    fill: '#193441',
                  }}
                />
                <g id="hand1">
                  <path
                    d="M1234.86,456.33s.89-5.76-7-6.1"
                    style={{
                      fill: 'none',
                      stroke: '#ff7d37',
                      strokeMiterlimit: 10,
                      strokeWidth: 3,
                    }}
                  />
                  <g>
                    <g>
                      <polygon
                        points="1213.29 447.47 1215.67 446.15 1217.22 447.76 1213.85 449.64 1213.29 447.47"
                        style={{
                          fill: '#eaf2c0',
                        }}
                      />
                      <rect
                        x={1213.8}
                        y={448.53}
                        width={3.87}
                        height={0.92}
                        transform="translate(-64.76 648.83) rotate(-29.14)"
                        style={{
                          fill: '#a3af4a',
                        }}
                      />
                    </g>
                    <g>
                      <g>
                        <path
                          d="M1226.38,444.34h0l-1.13,1h0a5.49,5.49,0,0,1,1.25,4.38l1.4.11A6.75,6.75,0,0,0,1226.38,444.34Z"
                          style={{
                            fill: '#fe4c00',
                          }}
                        />
                        <polygon
                          points="1225.22 445.32 1225.21 445.31 1222.71 447.56 1222.71 447.57 1225.22 445.32"
                          style={{
                            fill: '#ff7748',
                          }}
                        />
                        <path
                          d="M1223.33,449.49l3.16.23a5.49,5.49,0,0,0-1.25-4.38h0l-2.5,2.24A2.7,2.7,0,0,1,1223.33,449.49Z"
                          style={{
                            fill: '#ff7748',
                          }}
                        />
                        <polygon
                          points="1222.71 447.56 1222.71 447.56 1222.69 447.55 1220.74 449.3 1220.76 449.3 1222.71 447.56"
                          style={{
                            fill: '#ffaf99',
                          }}
                        />
                        <polygon
                          points="1220.78 449.3 1222.71 447.57 1222.71 447.56 1220.76 449.3 1220.78 449.3"
                          style={{
                            fill: '#ffaf99',
                          }}
                        />
                        <path
                          d="M1222.72,447.56l-1.94,1.74,2.55.19A2.66,2.66,0,0,0,1222.72,447.56Z"
                          style={{
                            fill: '#ffaf99',
                          }}
                        />
                      </g>
                      <path
                        d="M1224.56,447.88a.59.59,0,0,1,.3,1.13c-.31.09-1.1-.3-1.1-.3S1224.25,448,1224.56,447.88Z"
                        style={{
                          fill: '#fff',
                          opacity: 0.38999998569488525,
                          isolation: 'isolate',
                        }}
                      />
                    </g>
                    <circle
                      cx={1211.11}
                      cy={449.68}
                      r={4.53}
                      style={{
                        fill: '#5b3103',
                      }}
                    />
                    <circle
                      cx={1222.63}
                      cy={449.89}
                      r={4.53}
                      style={{
                        fill: '#5b3103',
                      }}
                    />
                    <g>
                      <polygon
                        points="1205.77 447.89 1208.15 446.56 1209.7 448.17 1206.32 450.05 1205.77 447.89"
                        style={{
                          fill: '#eaf2c0',
                        }}
                      />
                      <rect
                        x={1206.28}
                        y={448.95}
                        width={3.87}
                        height={0.92}
                        transform="translate(-65.91 645.22) rotate(-29.14)"
                        style={{
                          fill: '#a3af4a',
                        }}
                      />
                    </g>
                    <g>
                      <polygon
                        points="1232.04 449.47 1229.38 450.09 1228.34 448.11 1232.11 447.24 1232.04 449.47"
                        style={{
                          fill: '#eaf2c0',
                        }}
                      />
                      <rect
                        x={1228.18}
                        y={446.86}
                        width={3.87}
                        height={0.92}
                        transform="translate(-69.26 289.54) rotate(-13.06)"
                        style={{
                          fill: '#a3af4a',
                        }}
                      />
                    </g>
                    <g>
                      <polygon
                        points="1225.1 450.05 1222.44 450.67 1221.4 448.69 1225.16 447.82 1225.1 450.05"
                        style={{
                          fill: '#eaf2c0',
                        }}
                      />
                      <rect
                        x={1221.23}
                        y={447.44}
                        width={3.87}
                        height={0.92}
                        transform="translate(-69.57 287.99) rotate(-13.06)"
                        style={{
                          fill: '#a3af4a',
                        }}
                      />
                    </g>
                    <path
                      d="M1204.38,447.35s5.82-4.86,8.82,2.91"
                      style={{
                        fill: 'none',
                        stroke: '#af94af',
                        strokeMiterlimit: 10,
                      }}
                    />
                    <path
                      d="M1228.59,445.38s-2.26,7.25-9,2.34"
                      style={{
                        fill: 'none',
                        stroke: '#af94af',
                        strokeMiterlimit: 10,
                      }}
                    />
                    <g>
                      <g>
                        <path
                          d="M1201.78,450.17h0l1.5.15h0a5.45,5.45,0,0,1,2.4-3.87l-.86-1.11A6.71,6.71,0,0,0,1201.78,450.17Z"
                          style={{
                            fill: '#fe4c00',
                          }}
                        />
                        <polygon
                          points="1203.28 450.37 1203.28 450.38 1206.63 450.72 1206.63 450.71 1203.28 450.37"
                          style={{
                            fill: '#ff7748',
                          }}
                        />
                        <path
                          d="M1207.64,449l-2-2.49a5.45,5.45,0,0,0-2.4,3.87h0l3.35.34A2.65,2.65,0,0,1,1207.64,449Z"
                          style={{
                            fill: '#ff7748',
                          }}
                        />
                        <polygon
                          points="1206.63 450.72 1206.63 450.72 1206.62 450.74 1209.24 451.01 1209.22 450.99 1206.63 450.72"
                          style={{
                            fill: '#ffaf99',
                          }}
                        />
                        <polygon
                          points="1209.21 450.98 1206.63 450.71 1206.63 450.72 1209.22 450.99 1209.21 450.98"
                          style={{
                            fill: '#ffaf99',
                          }}
                        />
                        <path
                          d="M1206.63,450.71l2.59.26-1.58-2A2.63,2.63,0,0,0,1206.63,450.71Z"
                          style={{
                            fill: '#ffaf99',
                          }}
                        />
                      </g>
                      <path
                        d="M1205.62,449.13a.57.57,0,0,1-.19-.78v0a.59.59,0,0,1,.8-.2h0c.27.17.52,1,.52,1S1205.86,449.31,1205.62,449.13Z"
                        style={{
                          fill: '#fff',
                          opacity: 0.38999998569488525,
                          isolation: 'isolate',
                        }}
                      />
                    </g>
                    <g>
                      <g>
                        <path
                          d="M1214.86,453h0l.91-1.21h0a5.44,5.44,0,0,1-2.07-4.06l-1.4.17A6.69,6.69,0,0,0,1214.86,453Z"
                          style={{
                            fill: '#fe4c00',
                          }}
                        />
                        <polygon
                          points="1215.76 451.8 1215.77 451.81 1217.79 449.12 1217.79 449.11 1215.76 451.8"
                          style={{
                            fill: '#ff7748',
                          }}
                        />
                        <path
                          d="M1216.86,447.34l-3.14.38a5.44,5.44,0,0,0,2.07,4.06h0l2-2.69A2.66,2.66,0,0,1,1216.86,447.34Z"
                          style={{
                            fill: '#ff7748',
                          }}
                        />
                        <polygon
                          points="1217.79 449.12 1217.79 449.12 1217.81 449.13 1219.39 447.03 1219.36 447.03 1217.79 449.12"
                          style={{
                            fill: '#ffaf99',
                          }}
                        />
                        <polygon
                          points="1219.35 447.04 1217.79 449.11 1217.79 449.12 1219.36 447.03 1219.35 447.04"
                          style={{
                            fill: '#ffaf99',
                          }}
                        />
                        <path
                          d="M1217.79,449.11l1.57-2.08-2.55.31A2.64,2.64,0,0,0,1217.79,449.11Z"
                          style={{
                            fill: '#ffaf99',
                          }}
                        />
                      </g>
                      <path
                        d="M1215.92,449.16a.6.6,0,0,1-.79-.27.58.58,0,0,1,.26-.78h0c.29-.15,1.15.08,1.15.08S1216.21,449,1215.92,449.16Z"
                        style={{
                          fill: '#fff',
                          opacity: 0.38999998569488525,
                          isolation: 'isolate',
                        }}
                      />
                    </g>
                    <path
                      d="M1217.86,448.08l16.45-.54a16.46,16.46,0,0,1-32.89,1.33Z"
                      style={{
                        fill: '#f7deb2',
                      }}
                    />
                  </g>
                  <rect
                    x={1249.68}
                    y={448.22}
                    width={11.15}
                    height={46.65}
                    transform="translate(385.67 1492.26) rotate(-70.16)"
                    style={{
                      fill: '#ff7d37',
                    }}
                  />
                  <path
                    d="M1227.92,469.08l-7.43-2.38a6.2,6.2,0,0,1-4-7.8l1.11-3.5a6.21,6.21,0,0,1,7.81-4l7.43,2.37a6.84,6.84,0,0,1,4.43,8.6l-.74,2.32a6.84,6.84,0,0,1-8.6,4.43Z"
                    style={{
                      fill: '#ff7d37',
                    }}
                  />
                  <path
                    d="M1248.6,437.19l36.26,33.07,5.92-6.5-6.06,6.37a2.13,2.13,0,0,1,.54,2.23,2,2,0,0,1-.42.73,2.21,2.21,0,0,1-1,.64,2.18,2.18,0,0,1-1.24,0l-7.68-2.62-5.68,16.63,7.69,2.62a19.71,19.71,0,0,0,20-32.92l-.07-.07-36.35-33.13-11.84,13Z"
                    style={{
                      fill: '#fff',
                    }}
                  />
                </g>
                <path
                  d="M1197.72,490.62h63.09v23.69a16,16,0,0,1-16,16h-47V490.62Z"
                  style={{
                    fill: '#193441',
                  }}
                />
              </g>
              <line
                x1={1198}
                y1={490.56}
                x2={1198}
                y2={450.62}
                style={{
                  fill: 'none',
                  stroke: '#ffeec4',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.75px',
                }}
              />
            </g>
            <g>
              <rect
                x={1007.44}
                y={444.82}
                width={23.82}
                height={22.46}
                style={{
                  fill: '#ffd366',
                }}
              />
              <path
                d="M1018,450.18h7.52a27.62,27.62,0,0,0,27.39-24l3.59-26.93c3.25-24.31-12.42-47.17-34.74-47.17h0c-22.32,0-38,22.86-34.74,47.17l3.6,26.93A27.64,27.64,0,0,0,1018,450.18Z"
                style={{
                  fill: '#ffd366',
                }}
              />
              <path
                d="M1007.6,448.14a27.36,27.36,0,0,0,10.42,2h7.52"
                style={{
                  fill: 'none',
                  stroke: '#efa420',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="M995.16,512.7h51.27v19.43h-33.25a18,18,0,0,1-18-18V512.7Z"
                style={{
                  fill: '#72441e',
                }}
              />
              <path
                d="M1046.43,512.76h-46.37a4.06,4.06,0,0,1-4.07-4.05,3.84,3.84,0,0,1,.07-.76l9.35-49.18a4.06,4.06,0,0,1,4-3.3h22.73a4.1,4.1,0,0,1,4,3.33Z"
                style={{
                  fill: '#fe4c00',
                }}
              />
              <polyline
                points="1031.43 539.85 1031.43 615.25 1018.71 615.25 1018.71 539.85"
                style={{
                  fill: '#ffd366',
                }}
              />
              <path
                d="M1024.44,517.3h.7a6.48,6.48,0,0,1,6.48,6.48V576H1018V523.78A6.48,6.48,0,0,1,1024.44,517.3Z"
                style={{
                  fill: '#72441e',
                }}
              />
              <path
                d="M1044.77,617.53H1019.6a1.09,1.09,0,0,1-1.09-1.09v-9.17h18.7a8.64,8.64,0,0,1,8.64,8.64h0v.53A1.09,1.09,0,0,1,1044.77,617.53Z"
                style={{
                  fill: '#8c6239',
                }}
              />
              <rect
                x={1016.39}
                y={570.76}
                width={16.15}
                height={8.18}
                style={{
                  fill: '#a67c52',
                }}
              />
              <g id="leg">
                <polyline
                  points="1049.61 534.12 1078.43 603.8 1066.68 608.67 1037.86 538.98"
                  style={{
                    fill: '#ffd366',
                  }}
                />
                <path
                  d="M1035.06,515.76l.65-.27a6.47,6.47,0,0,1,8.46,3.51l19.93,48.19h0l-12.63,5.23h0l-19.93-48.19a6.49,6.49,0,0,1,3.51-8.47Z"
                  style={{
                    fill: '#72441e',
                  }}
                />
                <path
                  d="M1091.64,600.79l-23.26,9.62a1.09,1.09,0,0,1-1.43-.59l-3.5-8.47h0l17.28-7.15a8.63,8.63,0,0,1,11.28,4.68h0l.21.49A1.09,1.09,0,0,1,1091.64,600.79Z"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <rect
                  x={1049.29}
                  y={564.72}
                  width={16.15}
                  height={8.18}
                  transform="translate(-137.12 447.31) rotate(-22.47)"
                  style={{
                    fill: '#a67c52',
                  }}
                />
              </g>
              <path
                d="M1034.47,353l-38.55,12.1h0l-1.37-4.38a19.16,19.16,0,0,1,12.54-24h0l2-.62a19.16,19.16,0,0,1,24,12.54h0l1.37,4.38Z"
                style={{
                  fill: '#005d80',
                }}
              />
              <path
                d="M1017.14,354.32l-.72-2.3h0l26.72-8.39a4.94,4.94,0,0,1,6.18,3.23h0l.16.52a4.94,4.94,0,0,1-3.23,6.18h0l-19.11,6a8,8,0,0,1-10-5.24Z"
                style={{
                  fill: '#005d80',
                }}
              />
              <circle
                cx={1005.05}
                cy={413.95}
                r={2.55}
                style={{
                  fill: '#ffe19f',
                }}
              />
              <line
                x1={1019.47}
                y1={401.93}
                x2={1019.47}
                y2={404.99}
                style={{
                  fill: 'none',
                  stroke: '#4f3102',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 4,
                }}
              />
              <line
                x1={1044.11}
                y1={401.93}
                x2={1044.11}
                y2={404.99}
                style={{
                  fill: 'none',
                  stroke: '#4f3102',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 4,
                }}
              />
              <g>
                <g>
                  <path
                    d="M1028.39,395.45h-20.24a2.61,2.61,0,0,0-2.61,2.61v3.53a10.72,10.72,0,0,0,10.7,10.72h4A10.72,10.72,0,0,0,1031,401.59v-3.53A2.61,2.61,0,0,0,1028.39,395.45Zm0,5.83a9,9,0,0,1-9,9h-2.49a9,9,0,0,1-9-9v-2.54a.87.87,0,0,1,.87-.89h18.7a.89.89,0,0,1,.89.89h0Z"
                    style={{
                      fill: '#101d23',
                    }}
                  />
                  <path
                    d="M1027.5,397.85h-18.64a.87.87,0,0,0-.88.88h0v2.54a9,9,0,0,0,9,9h2.49a9,9,0,0,0,9-9v-2.54a.89.89,0,0,0-.89-.89Z"
                    style={{
                      fill: '#101d23',
                      opacity: 0.800000011920929,
                      isolation: 'isolate',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M1058.27,395.45H1038a2.61,2.61,0,0,0-2.61,2.61v3.53a10.72,10.72,0,0,0,10.71,10.72h4a10.72,10.72,0,0,0,10.74-10.7v-3.55A2.61,2.61,0,0,0,1058.27,395.45Zm0,5.83a9,9,0,0,1-9,9h-2.49a9,9,0,0,1-9-9v-2.54a.89.89,0,0,1,.89-.89h18.69a.87.87,0,0,1,.88.88h0Z"
                    style={{
                      fill: '#101d23',
                    }}
                  />
                  <path
                    d="M1057.38,397.85h-18.69a.89.89,0,0,0-.89.89h0v2.54a9,9,0,0,0,9,9h2.49a9,9,0,0,0,9-9v-2.54a.87.87,0,0,0-.87-.89Z"
                    style={{
                      fill: '#101d23',
                      opacity: 0.7200000286102295,
                      isolation: 'isolate',
                    }}
                  />
                </g>
                <line
                  x1={1029.82}
                  y1={399.94}
                  x2={1036.86}
                  y2={399.94}
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
              </g>
              <path
                d="M1004.33,463.23s-12.76-10.56-21.72-1.77c-11.53,11.3,21.5,48.33,21.5,48.33"
                style={{
                  fill: 'none',
                  stroke: '#ffd366',
                  strokeMiterlimit: 10,
                  strokeWidth: 11,
                }}
              />
              <path
                d="M1012.09,466.78s-5.76-4.55-17.07-10.2"
                style={{
                  fill: 'none',
                  stroke: '#fe4c00',
                  strokeMiterlimit: 10,
                  strokeWidth: 18,
                }}
              />
              <path
                d="M1002,502.69h2.51a4.89,4.89,0,0,1,4.89,4.89h0v15.28a4.89,4.89,0,0,1-4.89,4.89h0a10,10,0,0,1-10-10v-7.63a7.46,7.46,0,0,1,7.46-7.46h0Z"
                style={{
                  fill: '#ffd366',
                }}
              />
              <path
                d="M1015.2,424.49a8.92,8.92,0,0,0,9.47,5.49"
                style={{
                  fill: 'none',
                  stroke: '#efa420',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
            </g>
            <g>
              <polygon
                points="1136.79 489 1146.77 476.45 1149.1 489.59 1136.79 489"
                style={{
                  fill: '#f7deb2',
                }}
              />
              <polygon
                points="1108.53 493.49 1104.87 476.37 1124.9 489.67 1108.53 493.49"
                style={{
                  fill: '#f7deb2',
                }}
              />
              <polygon
                points="1117.53 481.05 1130.9 481.6 1130.95 481.7 1116.23 494.56 1117.53 481.05"
                style={{
                  fill: '#f4d39d',
                }}
              />
              <polygon
                points="1147.22 488.09 1130.06 476.66 1124.28 488.59 1147.22 488.09"
                style={{
                  fill: '#ffe8c2',
                }}
              />
              <path
                d="M1153.55,504.64h-40.94a6.06,6.06,0,0,1-6-4.4l-3.47-14H1163l-3.46,14A6.07,6.07,0,0,1,1153.55,504.64Z"
                style={{
                  fill: '#8e5624',
                }}
              />
              <rect
                x={1120.5}
                y={488.42}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1124.03}
                y={491}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1127.31}
                y={488.41}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1141.86}
                y={488.41}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1148.8}
                y={488.41}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1145.17}
                y={491.01}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1131.22}
                y={490.96}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1127.65}
                y={493.54}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1121}
                y={493.62}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1124.61}
                y={496.15}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1131.54}
                y={496.15}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1134.81}
                y={493.55}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1127.94}
                y={498.7}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1115.47}
                y={498.7}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <rect
                x={1113.42}
                y={491.17}
                width={5.1}
                height={2.55}
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
              <path
                d="M1105.76,488.39c.27.06,53.87,0,53.87,0"
                style={{
                  fill: 'none',
                  stroke: '#6b3b13',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.4000000059604645px',
                }}
              />
            </g>
            <g>
              <g>
                <rect
                  x={1026.18}
                  y={513.27}
                  width={12.92}
                  height={104.26}
                  style={{
                    fill: '#5b3103',
                  }}
                />
                <rect
                  x={1026.18}
                  y={513.27}
                  width={12.92}
                  height={4.16}
                  style={{
                    fill: '#3f2002',
                  }}
                />
              </g>
              <g>
                <rect
                  x={1260.58}
                  y={513.27}
                  width={12.92}
                  height={104.26}
                  style={{
                    fill: '#5b3103',
                  }}
                />
                <rect
                  x={1260.58}
                  y={513.27}
                  width={12.92}
                  height={4.16}
                  style={{
                    fill: '#3f2002',
                  }}
                />
              </g>
              <rect
                x={1015.19}
                y={504.84}
                width={280.66}
                height={8.43}
                style={{
                  fill: '#5b3103',
                }}
              />
              <polygon
                points="1032.47 504.75 1055.03 558.33 1250.55 558.33 1269.35 504.75 1032.47 504.75"
                style={{
                  fill: '#fff',
                }}
              />
              <g>
                <polygon
                  points="1042.81 504.77 1149.5 568.91 1257.6 504.47 1042.81 504.77"
                  style={{
                    fill: '#fff',
                  }}
                />
                <polygon
                  points="1042.81 504.77 1149.5 568.91 1257.6 504.47 1042.81 504.77"
                  style={{
                    fill: 'url(#Plaid_3_Color)',
                  }}
                />
              </g>
            </g>
            <g>
              <rect
                x={1060.89}
                y={490.35}
                width={66.73}
                height={13.73}
                rx={5.39}
                style={{
                  fill: '#fc6',
                }}
              />
              <path
                d="M1066.21,492.13h56.41a5,5,0,0,1,5,4.92,6.87,6.87,0,0,0-6.86-6.71h-53a6.88,6.88,0,0,0-6.87,6.87v.16A5.31,5.31,0,0,1,1066.21,492.13Z"
                style={{
                  fill: '#efac35',
                }}
              />
              <g>
                <g>
                  <path
                    d="M1116.13,492.82a5.3,5.3,0,0,0-7.3-1.69l-.06,0-.25-.06-.19.85h0c-.22,1.27,1.28,2.66,3.41,3.14s4.09-.14,4.43-1.38h0l.19-.85Z"
                    style={{
                      fill: '#a3af4a',
                    }}
                  />
                  <ellipse
                    cx={1112.38}
                    cy={492.01}
                    rx={2.38}
                    ry={4.03}
                    transform="translate(388.53 1469.52) rotate(-77.34)"
                    style={{
                      fill: '#eaf2c0',
                    }}
                  />
                </g>
                <polygon
                  points="1112.67 490.64 1112.81 491.38 1113.78 491.03 1113.31 491.63 1114.61 491.6 1113.62 491.94 1114.99 492.24 1113.68 492.25 1114.86 492.82 1113.49 492.51 1114.24 493.24 1113.08 492.66 1113.25 493.4 1112.53 492.67 1112.08 493.27 1111.94 492.54 1110.98 492.89 1111.45 492.29 1110.15 492.32 1111.14 491.98 1109.77 491.68 1111.07 491.67 1109.9 491.09 1111.27 491.41 1110.52 490.68 1111.68 491.26 1111.51 490.52 1112.23 491.25 1112.67 490.64"
                  style={{
                    fill: '#fff',
                    opacity: 0.3199999928474426,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <g>
                <g>
                  <path
                    d="M1127,495.26a4.44,4.44,0,0,0-3.33-2.36,4.54,4.54,0,0,0-4,.7l-.25-.05-.19.85h0c-.22,1.26,1.28,2.66,3.41,3.14s4.09-.14,4.43-1.38h0l.19-.85Z"
                    style={{
                      fill: '#a3af4a',
                    }}
                  />
                  <ellipse
                    cx={1123.28}
                    cy={494.45}
                    rx={2.38}
                    ry={4.03}
                    transform="translate(394.67 1482.06) rotate(-77.34)"
                    style={{
                      fill: '#eaf2c0',
                    }}
                  />
                </g>
                <polygon
                  points="1123.59 493.08 1123.72 493.82 1124.69 493.46 1124.22 494.06 1125.52 494.03 1124.53 494.37 1125.9 494.67 1124.6 494.69 1125.77 495.26 1124.4 494.94 1125.15 495.68 1123.99 495.09 1124.16 495.84 1123.44 495.1 1122.99 495.71 1122.86 494.97 1121.89 495.33 1122.36 494.73 1121.06 494.76 1122.05 494.42 1120.68 494.12 1121.98 494.1 1120.81 493.53 1122.18 493.85 1121.43 493.12 1122.59 493.7 1122.42 492.95 1123.14 493.69 1123.59 493.08"
                  style={{
                    fill: '#fff',
                    opacity: 0.3199999928474426,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <path
                d="M1120.18,489.71a2.39,2.39,0,0,1-.17,2.16,5.67,5.67,0,0,1-1.34,1.66,10.5,10.5,0,0,1-3.61,2,10.83,10.83,0,0,1-4.11.56,5.74,5.74,0,0,1-2.08-.52,2.4,2.4,0,0,1-1.46-1.64l.41-.13a2.08,2.08,0,0,0,1.39.87,6.2,6.2,0,0,0,1.77.13,13.37,13.37,0,0,0,3.6-.71,14.05,14.05,0,0,0,3.32-1.58,6.23,6.23,0,0,0,1.34-1.17,2.06,2.06,0,0,0,.6-1.56Z"
                style={{
                  fill: '#fff',
                }}
              />
              <g>
                <ellipse
                  cx={1073.97}
                  cy={490.91}
                  rx={3.24}
                  ry={4.33}
                  transform="translate(-13.37 951.45) rotate(-47.52)"
                  style={{
                    fill: '#3f370e',
                  }}
                />
                <ellipse
                  cx={1071.75}
                  cy={488.81}
                  rx={1.26}
                  ry={0.69}
                  transform="translate(-12.55 949.13) rotate(-47.52)"
                  style={{
                    fill: '#211b03',
                  }}
                />
              </g>
              <ellipse
                cx={1066.75}
                cy={493.45}
                rx={2.82}
                ry={1.55}
                style={{
                  fill: 'none',
                  stroke: '#3f370e',
                  strokeMiterlimit: 10,
                }}
              />
              <g>
                <path
                  d="M1083.86,489l7.48,3.1c-1.48,3.59-6.09,5.15-10.19,3.45s-6.27-6.06-4.78-9.65h0Z"
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <path
                  d="M1083.86,489l6.1,2.52c-1.21,2.92-5,4.19-8.31,2.81s-5.1-4.94-3.89-7.86h0Z"
                  style={{
                    fill: '#ff7748',
                  }}
                />
                <path
                  d="M1083.86,489l3,1.24a3.28,3.28,0,0,1-6-2.49h0Z"
                  style={{
                    fill: '#ffaf99',
                  }}
                />
                <path
                  d="M1082.64,493.24a.54.54,0,1,1-1-.4c.11-.27.82-.62.82-.62S1082.76,493,1082.64,493.24Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1087.08,492.2a.53.53,0,0,1-.09.74.54.54,0,0,1-.75-.09,2.27,2.27,0,0,1-.13-1A3.29,3.29,0,0,1,1087.08,492.2Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1079.6,490.85a.54.54,0,0,0-.2.72.52.52,0,0,0,.71.21h0c.26-.14.51-.9.51-.9A2.39,2.39,0,0,0,1079.6,490.85Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1079.22,488.62a.58.58,0,1,0,.08,1.16c.32,0,.94-.64.94-.64S1079.54,488.6,1079.22,488.62Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <g>
                <ellipse
                  cx={1108.08}
                  cy={495.65}
                  rx={4.33}
                  ry={3.24}
                  transform="translate(301.05 1402.42) rotate(-72.43)"
                  style={{
                    fill: '#3f370e',
                  }}
                />
                <ellipse
                  cx={1109.04}
                  cy={492.76}
                  rx={0.69}
                  ry={1.26}
                  transform="translate(304.48 1401.32) rotate(-72.43)"
                  style={{
                    fill: '#211b03',
                  }}
                />
              </g>
              <ellipse
                cx={1105.52}
                cy={493.57}
                rx={1.27}
                ry={0.69}
                transform="translate(-22.31 933.77) rotate(-45.38)"
                style={{
                  fill: '#211b03',
                }}
              />
              <path
                d="M1080.16,490.57a2.39,2.39,0,0,1-.42,2.13,5.71,5.71,0,0,1-1.53,1.49,10.4,10.4,0,0,1-3.82,1.6,10.74,10.74,0,0,1-4.15.07,5.7,5.7,0,0,1-2-.75,2.42,2.42,0,0,1-1.25-1.81l.41-.08a2.14,2.14,0,0,0,1.28,1,6.47,6.47,0,0,0,1.74.34,13.62,13.62,0,0,0,3.66-.29,13.34,13.34,0,0,0,3.48-1.17,6.76,6.76,0,0,0,1.48-1,2.12,2.12,0,0,0,.77-1.47Z"
                style={{
                  fill: '#fff',
                }}
              />
              <g>
                <g>
                  <path
                    d="M1109.36,498.29a4.63,4.63,0,0,0-7.54,0h-.26v1.08h0c.06,1.58,1.83,2.86,4,2.86s4-1.28,4-2.86h0v-1.08Z"
                    style={{
                      fill: '#a3af4a',
                    }}
                  />
                  <ellipse
                    cx={1105.59}
                    cy={498.37}
                    rx={4.03}
                    ry={2.94}
                    style={{
                      fill: '#eaf2c0',
                    }}
                  />
                </g>
                <polygon
                  points="1105.51 496.59 1105.81 497.45 1106.67 496.76 1106.35 497.61 1107.61 497.22 1106.72 497.9 1108.12 497.89 1106.85 498.26 1108.12 498.63 1106.72 498.63 1107.61 499.31 1106.35 498.92 1106.67 499.77 1105.81 499.08 1105.51 499.93 1105.21 499.08 1104.35 499.77 1104.68 498.92 1103.42 499.31 1104.31 498.63 1102.9 498.63 1104.17 498.26 1102.9 497.89 1104.31 497.9 1103.42 497.22 1104.68 497.61 1104.35 496.76 1105.21 497.45 1105.51 496.59"
                  style={{
                    fill: '#fff',
                    opacity: 0.3199999928474426,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <g>
                <path
                  d="M1069.17,494.72l7.48,3.1c-1.48,3.59-6.08,5.15-10.19,3.45s-6.27-6.06-4.78-9.65h0Z"
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <path
                  d="M1069.17,494.71l6.1,2.53c-1.21,2.92-5,4.19-8.31,2.8s-5.1-4.93-3.89-7.85h0Z"
                  style={{
                    fill: '#ff7748',
                  }}
                />
                <path
                  d="M1069.18,494.7l3,1.24a3.28,3.28,0,0,1-6-2.49h0Z"
                  style={{
                    fill: '#ffaf99',
                  }}
                />
                <path
                  d="M1068,499a.55.55,0,0,1-.7.29.53.53,0,0,1-.28-.69c.11-.27.83-.62.83-.62A2.21,2.21,0,0,1,1068,499Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1072.39,497.93a.54.54,0,0,1-.09.75.52.52,0,0,1-.73-.08h0a2.42,2.42,0,0,1-.13-1S1072.21,497.7,1072.39,497.93Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1064.91,496.59a.53.53,0,0,0-.19.72.52.52,0,0,0,.72.2c.25-.15.5-.9.5-.9A2.39,2.39,0,0,0,1064.91,496.59Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1064.53,494.36a.58.58,0,0,0-.54.62h0a.58.58,0,0,0,.62.54h0c.32,0,.94-.64.94-.64S1064.86,494.34,1064.53,494.36Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <g>
                <path
                  d="M1096.57,499.39l7.41-3.28c1.57,3.56-.49,8-4.55,9.75s-8.71.35-10.28-3.2h0Z"
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <path
                  d="M1096.56,499.38l6-2.67c1.28,2.9-.4,6.48-3.71,7.94s-7.09.29-8.36-2.61h0Z"
                  style={{
                    fill: '#ff7748',
                  }}
                />
                <path
                  d="M1096.56,499.36l3-1.31a3.28,3.28,0,0,1-6,2.62h0Z"
                  style={{
                    fill: '#ffaf99',
                  }}
                />
                <path
                  d="M1098.86,503.2a.54.54,0,1,1-1,.43c-.12-.27.13-1,.13-1A2.8,2.8,0,0,1,1098.86,503.2Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1101.12,499.28a.51.51,0,0,1,.47.55v0a.53.53,0,0,1-.58.48h0c-.29,0-.83-.62-.83-.62S1100.86,499.25,1101.12,499.28Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1095,503.75a.53.53,0,0,0,.51.55.54.54,0,0,0,.49-.29,2.36,2.36,0,0,0-.29-1S1095.05,503.47,1095,503.75Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1093.1,502.48a.6.6,0,0,0,.17.82.6.6,0,0,0,.73-.07,2.69,2.69,0,0,0,.18-1.12S1093.31,502.23,1093.1,502.48Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <g>
                <path
                  d="M1115.36,496.32l-8,1.23c.59,3.86,4.71,6.49,9.13,5.81s7.57-4.41,7-8.28h0Z"
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <path
                  d="M1115.36,496.31l-6.56,1c.48,3.14,3.84,5.27,7.44,4.72s6.17-3.59,5.68-6.74h0Z"
                  style={{
                    fill: '#ff7748',
                  }}
                />
                <path
                  d="M1115.36,496.29l-3.23.5a3.3,3.3,0,0,0,6.46-1h0Z"
                  style={{
                    fill: '#ffaf99',
                  }}
                />
                <path
                  d="M1115.53,500.77a.52.52,0,0,0,.59.44h0a.53.53,0,0,0,.45-.6h0c0-.29-.66-.8-.66-.8S1115.48,500.48,1115.53,500.77Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1111.45,498.68a.53.53,0,0,0,.66.84h0c.23-.18.37-1,.37-1A2.42,2.42,0,0,0,1111.45,498.68Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1119.07,499.16a.53.53,0,0,1,0,.75h0a.52.52,0,0,1-.74,0h0c-.21-.2-.28-1-.28-1A3.8,3.8,0,0,1,1119.07,499.16Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
                <path
                  d="M1120,497.07a.58.58,0,0,1,.46.69.59.59,0,0,1-.69.47l-.12,0c-.3-.1-.76-.85-.76-.85A3.28,3.28,0,0,1,1120,497.07Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <g>
                <g>
                  <path
                    d="M1086.43,496.91a4.63,4.63,0,0,0-7.54,0h-.26V498h0c.06,1.58,1.83,2.86,4,2.86s4-1.28,4-2.86h0v-1.1Z"
                    style={{
                      fill: '#a3af4a',
                    }}
                  />
                  <ellipse
                    cx={1082.66}
                    cy={496.99}
                    rx={4.03}
                    ry={2.94}
                    style={{
                      fill: '#eaf2c0',
                    }}
                  />
                </g>
                <polygon
                  points="1082.58 495.22 1082.88 496.07 1083.74 495.38 1083.41 496.23 1084.67 495.85 1083.79 496.52 1085.19 496.51 1083.92 496.89 1085.19 497.26 1083.79 497.25 1084.67 497.93 1083.41 497.54 1083.74 498.39 1082.88 497.7 1082.58 498.56 1082.28 497.7 1081.42 498.39 1081.75 497.54 1080.49 497.93 1081.38 497.25 1079.97 497.26 1081.24 496.89 1079.97 496.51 1081.38 496.52 1080.49 495.85 1081.75 496.23 1081.42 495.38 1082.28 496.07 1082.58 495.22"
                  style={{
                    fill: '#fff',
                    opacity: 0.3199999928474426,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <g>
                <g>
                  <path
                    d="M1091.59,500.51a4.63,4.63,0,0,0-7.54,0h-.26v1.08h0c.06,1.59,1.83,2.86,4,2.86s4-1.27,4-2.86h0v-1.08Z"
                    style={{
                      fill: '#a3af4a',
                    }}
                  />
                  <ellipse
                    cx={1087.81}
                    cy={500.6}
                    rx={4.03}
                    ry={2.94}
                    style={{
                      fill: '#eaf2c0',
                    }}
                  />
                </g>
                <polygon
                  points="1087.74 498.82 1088.04 499.67 1088.9 498.98 1088.57 499.84 1089.83 499.45 1088.94 500.13 1090.35 500.12 1089.08 500.49 1090.35 500.86 1088.94 500.85 1089.83 501.53 1088.57 501.14 1088.9 501.99 1088.04 501.3 1087.74 502.16 1087.44 501.3 1086.58 501.99 1086.9 501.14 1085.65 501.53 1086.53 500.85 1085.13 500.86 1086.4 500.49 1085.13 500.12 1086.53 500.13 1085.65 499.45 1086.9 499.84 1086.58 498.98 1087.44 499.67 1087.74 498.82"
                  style={{
                    fill: '#fff',
                    opacity: 0.3199999928474426,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <path
                d="M1114.33,501.12a2.38,2.38,0,0,1-1,1.94,5.88,5.88,0,0,1-1.88,1,11,11,0,0,1-8.12-.57,6.19,6.19,0,0,1-1.73-1.27,2.43,2.43,0,0,1-.71-2.08h.43a2.09,2.09,0,0,0,.94,1.34,6.41,6.41,0,0,0,1.59.8,15,15,0,0,0,7.27.54,6.58,6.58,0,0,0,1.69-.56,2.14,2.14,0,0,0,1.15-1.21Z"
                style={{
                  fill: '#fff',
                }}
              />
              <g>
                <ellipse
                  cx={1075.89}
                  cy={497.9}
                  rx={4.33}
                  ry={3.24}
                  transform="translate(98.6 1168.98) rotate(-59.31)"
                  style={{
                    fill: '#3f370e',
                  }}
                />
                <ellipse
                  cx={1077.49}
                  cy={495.3}
                  rx={0.69}
                  ry={1.26}
                  transform="matrix(0.51, -0.86, 0.86, 0.51, 101.62, 1169.08)"
                  style={{
                    fill: '#211b03',
                  }}
                />
              </g>
              <g>
                <path
                  d="M1120.76,504.08h-53a6.86,6.86,0,0,1-6.86-6.71v2.49a7.61,7.61,0,0,0,7.61,7.6H1120a7.6,7.6,0,0,0,7.6-7.6v-2.65A6.88,6.88,0,0,1,1120.76,504.08Z"
                  style={{
                    fill: '#fff',
                  }}
                />
                <path
                  d="M1127.62,497Z"
                  style={{
                    fill: '#fff',
                  }}
                />
              </g>
              <path
                d="M1088.86,499.83a2.38,2.38,0,0,1-1,1.94,5.68,5.68,0,0,1-1.86,1,11.1,11.1,0,0,1-8.13-.47,5.83,5.83,0,0,1-1.74-1.26,2.41,2.41,0,0,1-.74-2.06h.43a2.08,2.08,0,0,0,1,1.33,6.35,6.35,0,0,0,1.59.78,14.74,14.74,0,0,0,7.28.46,6.32,6.32,0,0,0,1.68-.58,2.08,2.08,0,0,0,1.14-1.22Z"
                style={{
                  fill: '#fff',
                }}
              />
              <ellipse
                cx={1117.95}
                cy={495.22}
                rx={2.82}
                ry={1.55}
                style={{
                  fill: 'none',
                  stroke: '#3f370e',
                  strokeMiterlimit: 10,
                }}
              />
              <g>
                <rect
                  x={1083.03}
                  y={491.14}
                  width={24.31}
                  height={8.69}
                  rx={0.64}
                  style={{
                    fill: '#ffeec4',
                  }}
                />
                <rect
                  x={1083.03}
                  y={489.39}
                  width={24.31}
                  height={8.69}
                  rx={0.78}
                  style={{
                    fill: '#fff',
                  }}
                />
              </g>
              <ellipse cx={1088.57} cy={493.71} rx={0.41} ry={0.21} />
              <ellipse cx={1090.63} cy={491.99} rx={0.29} ry={0.11} />
              <ellipse cx={1090.64} cy={493.09} rx={0.2} ry={0.09} />
              <ellipse cx={1090.39} cy={494.62} rx={0.11} ry={0.09} />
              <ellipse cx={1088.11} cy={495.79} rx={0.11} ry={0.07} />
              <ellipse cx={1089.67} cy={496.27} rx={0.11} ry={0.07} />
              <ellipse cx={1092.02} cy={496.52} rx={0.17} ry={0.05} />
              <ellipse cx={1093.02} cy={495.48} rx={0.12} ry={0.08} />
              <ellipse cx={1094.35} cy={493.58} rx={0.23} ry={0.08} />
              <ellipse cx={1092.31} cy={494.28} rx={0.15} ry={0.09} />
              <ellipse cx={1093.23} cy={492.56} rx={0.17} ry={0.07} />
              <ellipse cx={1097.66} cy={495.35} rx={0.23} ry={0.08} />
              <ellipse cx={1099.54} cy={494.29} rx={0.17} ry={0.08} />
              <ellipse cx={1097.93} cy={493.45} rx={0.13} ry={0.05} />
              <ellipse cx={1096.05} cy={492.05} rx={0.19} ry={0.09} />
              <ellipse cx={1098.19} cy={492.05} rx={0.15} ry={0.07} />
              <ellipse cx={1095.18} cy={495.97} rx={0.16} ry={0.09} />
              <ellipse cx={1094.24} cy={491.58} rx={0.12} ry={0.04} />
              <ellipse cx={1095.25} cy={490.85} rx={0.12} ry={0.05} />
              <ellipse cx={1097.22} cy={490.96} rx={0.13} ry={0.05} />
              <ellipse cx={1098.49} cy={500.52} rx={0.16} ry={0.05} />
              <ellipse cx={1100.09} cy={500.7} rx={0.12} ry={0.11} />
              <ellipse cx={1104.5} cy={500.79} rx={0.16} ry={0.07} />
              <ellipse cx={1104.29} cy={498.91} rx={0.13} ry={0.07} />
              <ellipse cx={1096.82} cy={499.35} rx={0.16} ry={0.08} />
              <ellipse cx={1091.78} cy={499.02} rx={0.23} ry={0.07} />
              <ellipse cx={1090.19} cy={500.78} rx={0.12} ry={0.08} />
              <ellipse cx={1087.2} cy={500.56} rx={0.12} ry={0.07} />
              <ellipse cx={1085.4} cy={500.09} rx={0.17} ry={0.08} />
              <ellipse cx={1086.12} cy={499.13} rx={0.19} ry={0.07} />
              <ellipse cx={1086.16} cy={497.67} rx={0.17} ry={0.04} />
              <ellipse cx={1097.35} cy={496.99} rx={0.11} ry={0.03} />
              <ellipse cx={1100.83} cy={495.3} rx={0.12} ry={0.05} />
              <ellipse cx={1101.11} cy={493.86} rx={0.03} ry={0.01} />
              <ellipse cx={1096.31} cy={493.95} rx={0.12} ry={0.03} />
              <ellipse cx={1101.83} cy={492.23} rx={0.11} ry={0.03} />
              <ellipse cx={1103.05} cy={493.54} rx={0.16} ry={0.09} />
            </g>
            <g id="hand2">
              <path
                d="M1041,474.54s11.53,13.3,21.06,5.09,20.84-37.46,20.84-37.46"
                style={{
                  fill: 'none',
                  stroke: '#ffd366',
                  strokeMiterlimit: 10,
                  strokeWidth: 11,
                }}
              />
              <path
                d="M1080,440.61l6.56,1.13a8.44,8.44,0,0,1,6.88,9.75l-.29,1.72a2.07,2.07,0,0,1-2.38,1.68h0l-12.81-2.21a2.05,2.05,0,0,1-1.68-2.38h0l1.38-8A2.06,2.06,0,0,1,1080,440.61Z"
                style={{
                  fill: '#ffd366',
                }}
              />
              <g>
                <g
                  style={{
                    opacity: 0.7200000286102295,
                  }}
                >
                  <path
                    d="M1066.33,462.65c1.94.72,4.29-.26,6.44-2.41a7.5,7.5,0,0,1,7.37-2l12.12,3.5v.07a.85.85,0,0,0,.5,1.09l.78.29a.85.85,0,0,0,1.09-.5l.09-.25h0l2.28-6.17h0l.14-.38a.85.85,0,0,0-.5-1.09l-.78-.29a.85.85,0,0,0-1.09.5l-.08.21-6.15-2.8.63-1.72a4.66,4.66,0,0,0-1.27-5.1,6.87,6.87,0,0,0-2.19-1.31,6.75,6.75,0,0,0-2.48-.43l-4.25.05a.89.89,0,0,1,0-.23c-.23-3.07-1.37-5.39-3.33-6.11-1.8-.67-4,.13-6,1.95l-2.15-.79-6.59,17.8,2.18.81h0C1063.44,460,1064.55,462,1066.33,462.65Zm13-17,3.93-.06a5.47,5.47,0,0,1,1.88.33,5,5,0,0,1,1.67,1,3,3,0,0,1,.82,3.29l-.6,1.6-3.75-1.72a7.4,7.4,0,0,1-4-4.47Z"
                    style={{
                      fill: '#fff',
                    }}
                  />
                </g>
                <g id="oil">
                  <path
                    d="M1095,461.63s3.65,3.65,2.21,7.86-4.49,4.1-4.32,7.87,3.38,6.15,2.66,7.93-2.33,4.21-4.16,4.54-4.93,3.22-3.43,4.38,7,1.39,10,1.55,6,1.06,6.82-.16.06-3.33-2-4.16-3.87-4.38-2.38-6.6-3.43-5.87-2.94-9.14,4.72-7.43,3.11-11a7.43,7.43,0,0,0-5.18-4.13Z"
                    style={{
                      fill: '#ffe499',
                      opacity: 0.6899999976158142,
                      isolation: 'isolate',
                    }}
                  />
                  <path
                    d="M1095.45,460.63s-5.18-2.35-6.33-3-12.62-3.37-15-7.15a13.06,13.06,0,0,0-.86-1.24,20.47,20.47,0,0,0-5.46-4.78h0v.05a29.51,29.51,0,0,0-1.84,4c-2.33,6.28-2.17,12.13.35,13.06a2.53,2.53,0,0,0,1.91-.15,12.42,12.42,0,0,0,4.31-3c2.18-2.15,6.35-1.93,6.35-1.93l16.15,5.34Z"
                    style={{
                      fill: '#ffb200',
                      opacity: 0.4300000071525574,
                      isolation: 'isolate',
                    }}
                  />
                </g>
              </g>
              <path
                d="M1081.52,443.06s-.42,5.86,4.6,6.37"
                style={{
                  fill: 'none',
                  stroke: '#f9c146',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <path
                d="M1029.16,464s10.34,11.63,22.84,15.1"
                style={{
                  fill: 'none',
                  stroke: '#fe4c00',
                  strokeMiterlimit: 10,
                  strokeWidth: 18,
                }}
              />
            </g>
            <g>
              <rect
                x={1145.06}
                y={491.25}
                width={66.73}
                height={13.73}
                rx={5.39}
                style={{
                  fill: '#fc6',
                }}
              />
              <g>
                <path
                  d="M1204.93,505h-53a6.87,6.87,0,0,1-6.86-6.71v2.49a7.61,7.61,0,0,0,7.6,7.61h51.52a7.61,7.61,0,0,0,7.61-7.61v-2.68A6.88,6.88,0,0,1,1205,505Z"
                  style={{
                    fill: '#fff',
                  }}
                />
                <path
                  d="M1211.79,498v0Z"
                  style={{
                    fill: '#fff',
                  }}
                />
              </g>
              <g>
                <ellipse
                  cx={1160.07}
                  cy={494.1}
                  rx={15.63}
                  ry={7.43}
                  style={{
                    fill: '#f2d3a0',
                  }}
                />
                <path
                  d="M1160.07,498.46c-8.24,0-15-2.16-15.57-4.91a5.14,5.14,0,0,0-.06.55c0,4.1,7,7.43,15.63,7.43s15.63-3.33,15.63-7.43a5.14,5.14,0,0,0-.06-.55C1175.05,496.3,1168.31,498.46,1160.07,498.46Z"
                  style={{
                    fill: '#fff0d9',
                  }}
                />
              </g>
              <circle
                cx={1178.53}
                cy={494.55}
                r={4.53}
                style={{
                  fill: '#5b3103',
                }}
              />
              <g>
                <ellipse
                  cx={1160.98}
                  cy={488.45}
                  rx={15.63}
                  ry={7.43}
                  style={{
                    fill: '#f7deb2',
                  }}
                />
                <path
                  d="M1161,492.81c-8.24,0-15-2.17-15.57-4.91a2.57,2.57,0,0,0-.06.55c0,4.1,7,7.42,15.63,7.42s15.63-3.32,15.63-7.42a2.57,2.57,0,0,0-.06-.55C1176,490.64,1169.23,492.81,1161,492.81Z"
                  style={{
                    fill: '#fff0d9',
                  }}
                />
              </g>
              <rect
                x={1203.6}
                y={498.68}
                width={2.19}
                height={2.16}
                rx={0.5}
                style={{
                  fill: '#fff',
                }}
              />
              <g>
                <g>
                  <path
                    d="M1182.79,498.12h0l-1.51-.07h0a5.49,5.49,0,0,1-2.17,4l.93,1.05A6.69,6.69,0,0,0,1182.79,498.12Z"
                    style={{
                      fill: '#fe4c00',
                    }}
                  />
                  <polygon
                    points="1181.28 498.01 1181.28 498.01 1177.91 497.86 1177.91 497.87 1181.28 498.01"
                    style={{
                      fill: '#ff7748',
                    }}
                  />
                  <path
                    d="M1177,499.68l2.1,2.37a5.49,5.49,0,0,0,2.17-4h0l-3.37-.14A2.63,2.63,0,0,1,1177,499.68Z"
                    style={{
                      fill: '#ff7748',
                    }}
                  />
                  <polygon
                    points="1177.91 497.86 1177.91 497.86 1177.91 497.85 1175.29 497.73 1175.31 497.75 1177.91 497.86"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                  <polygon
                    points="1175.31 497.76 1177.91 497.87 1177.91 497.86 1175.31 497.75 1175.31 497.76"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                  <path
                    d="M1177.91,497.87l-2.59-.11,1.69,1.92A2.64,2.64,0,0,0,1177.91,497.87Z"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                </g>
                <path
                  d="M1179,499.38a.6.6,0,0,1,.23.8.59.59,0,0,1-.8.23c-.28-.16-.58-1-.58-1A2.79,2.79,0,0,1,1179,499.38Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <g>
                <polygon
                  points="1172.31 497.79 1175.02 498.05 1175.38 500.26 1171.53 499.88 1172.31 497.79"
                  style={{
                    fill: '#eaf2c0',
                  }}
                />
                <rect
                  x={1172.94}
                  y={498.59}
                  width={0.92}
                  height={3.87}
                  transform="translate(561.54 1619.91) rotate(-84.44)"
                  style={{
                    fill: '#a3af4a',
                  }}
                />
              </g>
              <g>
                <polygon
                  points="1200.45 499.03 1202.83 497.7 1204.38 499.31 1201.01 501.2 1200.45 499.03"
                  style={{
                    fill: '#eaf2c0',
                  }}
                />
                <rect
                  x={1203.51}
                  y={505.64}
                  width={3.86}
                  height={0.92}
                  transform="translate(-93.23 656.68) rotate(-29.39)"
                  style={{
                    fill: '#a3af4a',
                  }}
                />
              </g>
              <g>
                <polygon
                  points="1191.42 499.25 1193.8 497.93 1195.35 499.54 1191.97 501.42 1191.42 499.25"
                  style={{
                    fill: '#eaf2c0',
                  }}
                />
                <rect
                  x={1191.94}
                  y={500.31}
                  width={3.87}
                  height={0.92}
                  transform="translate(-92.74 644.73) rotate(-29.14)"
                  style={{
                    fill: '#a3af4a',
                  }}
                />
              </g>
              <g>
                <g>
                  <path
                    d="M1178.94,498.52h0l-1.36.67h0a5.42,5.42,0,0,1,0,4.56l1.32.47A6.69,6.69,0,0,0,1178.94,498.52Z"
                    style={{
                      fill: '#fe4c00',
                    }}
                  />
                  <polygon
                    points="1177.56 499.15 1177.55 499.14 1174.54 500.63 1174.54 500.64 1177.56 499.15"
                    style={{
                      fill: '#ff7748',
                    }}
                  />
                  <path
                    d="M1174.62,502.66l3,1.07a5.42,5.42,0,0,0,0-4.56h0l-3,1.5A2.64,2.64,0,0,1,1174.62,502.66Z"
                    style={{
                      fill: '#ff7748',
                    }}
                  />
                  <polygon
                    points="1174.54 500.63 1174.54 500.63 1174.53 500.61 1172.17 501.78 1172.2 501.79 1174.54 500.63"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                  <polygon
                    points="1172.21 501.79 1174.54 500.64 1174.54 500.63 1172.2 501.79 1172.21 501.79"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                  <path
                    d="M1174.54,500.64l-2.33,1.15,2.41.87A2.62,2.62,0,0,0,1174.54,500.64Z"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                </g>
                <path
                  d="M1176.24,501.43a.6.6,0,0,1,.58.59.58.58,0,0,1-.57.59h0c-.32,0-1-.59-1-.59S1175.91,501.43,1176.24,501.43Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <g>
                <g>
                  <path
                    d="M1205.34,496.84h-16.16a5.64,5.64,0,0,1-5.49-4.37l-.84-3.67h28.82l-.84,3.67A5.61,5.61,0,0,1,1205.34,496.84Z"
                    style={{
                      fill: '#8e3f04',
                    }}
                  />
                  <ellipse
                    cx={1197.25}
                    cy={488.76}
                    rx={14.4}
                    ry={2.23}
                    style={{
                      fill: '#8e3f04',
                    }}
                  />
                </g>
                <path
                  d="M1208.45,488.82c-.32-.29-.38-.46-.8-.4a2.94,2.94,0,0,1-2.55-1.15c-1.17-1.21-5.06-.23-7.5-.17s-1.22,1-3.14,0-1.22-1.33-2.13-1.79a3.36,3.36,0,0,0-3.35.4,4.74,4.74,0,0,1-2.6,1.9c-1.81.64-2.55,2.94-2.55,2.94,2,7.65,12.86,5.41,19.67,5s6.06-2.71,6.43-4.49S1208.77,489.11,1208.45,488.82Z"
                  style={{
                    fill: '#ffcf57',
                  }}
                />
                <path
                  d="M1211.64,488.8c-.13,1.21-6.52,2.19-14.39,2.19s-14.26-1-14.38-2.19h0l.84,3.67a5.64,5.64,0,0,0,5.49,4.37h16.16a5.62,5.62,0,0,0,5.49-4.37l.84-3.67Z"
                  style={{
                    fill: '#c65b02',
                  }}
                />
                <circle
                  cx={1192.35}
                  cy={487.13}
                  r={0.11}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1193.38}
                  cy={487.36}
                  r={0.11}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1193.46}
                  cy={487.79}
                  r={0.08}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1192.75}
                  cy={488.13}
                  r={0.03}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1193.72}
                  cy={488.87}
                  r={0.03}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1195.05}
                  cy={488.89}
                  r={0.06}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1195.06}
                  cy={488}
                  r={0.03}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1195.89}
                  cy={488.04}
                  r={0.03}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1196.05}
                  cy={489.44}
                  r={0.06}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1196.67}
                  cy={489.32}
                  r={0.06}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1198.87}
                  cy={488.13}
                  r={0.18}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1199.33}
                  cy={489.3}
                  r={0.14}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1200.61}
                  cy={488.87}
                  r={0.18}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1200.73}
                  cy={487.93}
                  r={0.12}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1201.65}
                  cy={487.72}
                  r={0.12}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1202.33}
                  cy={488.57}
                  r={0.05}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <circle
                  cx={1197.17}
                  cy={488.02}
                  r={0.11}
                  style={{
                    fill: '#fe4c00',
                  }}
                />
              </g>
              <g>
                <g>
                  <path
                    d="M1191.86,497h0l-1.16,1h0a5.49,5.49,0,0,1,1.1,4.42l1.4.15A6.69,6.69,0,0,0,1191.86,497Z"
                    style={{
                      fill: '#fe4c00',
                    }}
                  />
                  <polygon
                    points="1190.67 497.98 1190.66 497.97 1188.08 500.13 1188.09 500.14 1190.67 497.98"
                    style={{
                      fill: '#ff7748',
                    }}
                  />
                  <path
                    d="M1188.64,502.08l3.15.34a5.49,5.49,0,0,0-1.1-4.42h0l-2.58,2.16A2.55,2.55,0,0,1,1188.64,502.08Z"
                    style={{
                      fill: '#ff7748',
                    }}
                  />
                  <polygon
                    points="1188.08 500.13 1188.08 500.13 1188.07 500.12 1186.05 501.8 1186.08 501.81 1188.08 500.13"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                  <polygon
                    points="1186.09 501.81 1188.09 500.14 1188.08 500.13 1186.08 501.81 1186.09 501.81"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                  <path
                    d="M1188.09,500.14l-2,1.66,2.55.28A2.58,2.58,0,0,0,1188.09,500.14Z"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                </g>
                <path
                  d="M1189.92,500.51a.6.6,0,0,1,.72.43.6.6,0,0,1-.44.72c-.32.07-1.1-.35-1.1-.35S1189.61,500.59,1189.92,500.51Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <circle
                cx={1184.84}
                cy={493.49}
                r={4.53}
                style={{
                  fill: '#7c4f29',
                }}
              />
              <g>
                <g>
                  <path
                    d="M1196.21,501.73h0l1.5.15h0a5.42,5.42,0,0,1,2.4-3.87l-.87-1.11A6.7,6.7,0,0,0,1196.21,501.73Z"
                    style={{
                      fill: '#fe4c00',
                    }}
                  />
                  <polygon
                    points="1197.71 501.93 1197.71 501.94 1201.06 502.28 1201.06 502.27 1197.71 501.93"
                    style={{
                      fill: '#ff7748',
                    }}
                  />
                  <path
                    d="M1202.07,500.52l-2-2.49a5.42,5.42,0,0,0-2.4,3.87h0l3.35.34A2.65,2.65,0,0,1,1202.07,500.52Z"
                    style={{
                      fill: '#ff7748',
                    }}
                  />
                  <polygon
                    points="1201.06 502.28 1201.06 502.28 1201.06 502.3 1203.67 502.57 1203.65 502.55 1201.06 502.28"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                  <polygon
                    points="1203.65 502.54 1201.06 502.27 1201.06 502.28 1203.65 502.55 1203.65 502.54"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                  <path
                    d="M1201.06,502.27l2.59.26-1.58-2A2.63,2.63,0,0,0,1201.06,502.27Z"
                    style={{
                      fill: '#ffaf99',
                    }}
                  />
                </g>
                <path
                  d="M1200.05,500.69a.59.59,0,0,1,.63-1h0c.27.17.52,1,.52,1S1200.33,500.87,1200.05,500.69Z"
                  style={{
                    fill: '#fff',
                    opacity: 0.38999998569488525,
                    isolation: 'isolate',
                  }}
                />
              </g>
              <g>
                <polygon
                  points="1181.93 500.94 1180.78 498.48 1182.5 497.05 1184.13 500.55 1181.93 500.94"
                  style={{
                    fill: '#eaf2c0',
                  }}
                />
                <rect
                  x={1183.22}
                  y={496.67}
                  width={0.92}
                  height={3.87}
                  transform="translate(-99.91 544.49) rotate(-24.89)"
                  style={{
                    fill: '#a3af4a',
                  }}
                />
              </g>
              <g>
                <polygon
                  points="1184.72 500.26 1187.44 500.53 1187.8 502.74 1183.95 502.36 1184.72 500.26"
                  style={{
                    fill: '#eaf2c0',
                  }}
                />
                <rect
                  x={1185.36}
                  y={501.08}
                  width={0.92}
                  height={3.87}
                  transform="translate(570.28 1634.52) rotate(-84.44)"
                  style={{
                    fill: '#a3af4a',
                  }}
                />
              </g>
              <g>
                <polygon
                  points="1195.09 500.21 1197.8 500.47 1198.16 502.68 1194.31 502.31 1195.09 500.21"
                  style={{
                    fill: '#eaf2c0',
                  }}
                />
                <rect
                  x={1195.72}
                  y={501.02}
                  width={0.92}
                  height={3.87}
                  transform="translate(579.7 1644.78) rotate(-84.44)"
                  style={{
                    fill: '#a3af4a',
                  }}
                />
              </g>
              <g>
                <path
                  d="M1199.26,488a2.3,2.3,0,0,1-2.56-.17,2.48,2.48,0,0,1,.76-2.45,6.56,6.56,0,0,1,2.88-.34.29.29,0,0,1,.29.31.25.25,0,0,1,0,.08A6.64,6.64,0,0,1,1199.26,488Z"
                  style={{
                    fill: '#8cc63f',
                  }}
                />
                <path
                  d="M1196.09,485.41a2.37,2.37,0,0,1,.74,2.47,2.52,2.52,0,0,1-2.57.13,6.6,6.6,0,0,1-1.32-2.58.28.28,0,0,1,.17-.37l.1,0A6.7,6.7,0,0,1,1196.09,485.41Z"
                  style={{
                    fill: '#8cc63f',
                  }}
                />
              </g>
              <ellipse
                cx={1189.33}
                cy={498.26}
                rx={1.99}
                ry={1.1}
                style={{
                  fill: 'none',
                  stroke: '#3f370e',
                  strokeMiterlimit: 10,
                }}
              />
              <ellipse
                cx={1196.07}
                cy={501.54}
                rx={1.99}
                ry={1.1}
                style={{
                  fill: 'none',
                  stroke: '#3f370e',
                  strokeMiterlimit: 10,
                }}
              />
              <ellipse
                cx={1200.27}
                cy={498.47}
                rx={1.99}
                ry={1.1}
                style={{
                  fill: 'none',
                  stroke: '#3f370e',
                  strokeMiterlimit: 10,
                }}
              />
              <rect
                x={1194.12}
                y={497.11}
                width={2.16}
                height={2.19}
                rx={0.48}
                transform="translate(394.11 1515.53) rotate(-74.41)"
                style={{
                  fill: '#fff',
                }}
              />
              <rect
                x={1187.33}
                y={501.13}
                width={2.16}
                height={2.19}
                rx={0.49}
                transform="translate(385.28 1511.93) rotate(-74.41)"
                style={{
                  fill: '#fff',
                }}
              />
              <rect
                x={1181.27}
                y={499.53}
                width={2.19}
                height={2.16}
                rx={0.49}
                style={{
                  fill: '#fff',
                }}
              />
              <circle
                cx={1165.14}
                cy={499.15}
                r={4.53}
                style={{
                  fill: '#7c4f29',
                }}
              />
            </g>
            <g>
              <g>
                <path
                  d="M1242.73,508h-17.47a6.09,6.09,0,0,1-6-4.73l-.9-4h31.17l-.91,4A6.09,6.09,0,0,1,1242.73,508Z"
                  style={{
                    fill: '#ffdb94',
                  }}
                />
                <ellipse
                  cx={1233.98}
                  cy={499.24}
                  rx={15.57}
                  ry={2.42}
                  style={{
                    fill: '#ffdb94',
                  }}
                />
              </g>
              <path
                d="M1246.09,499.31c-.34-.31-.4-.5-.86-.44a3.22,3.22,0,0,1-2.76-1.24c-1.27-1.31-5.47-.25-8.11-.19s-1.32,1.06-3.4,0-1.32-1.43-2.3-1.93a3.61,3.61,0,0,0-3.62.44,5.24,5.24,0,0,1-2.82,2c-2,.68-2.76,3.17-2.76,3.17,2.19,8.28,13.92,5.86,21.28,5.42s6.56-2.92,7-4.85S1246.44,499.62,1246.09,499.31Z"
                style={{
                  fill: '#9e9a5a',
                }}
              />
              <path
                d="M1249.54,499.28c-.13,1.32-7,2.38-15.56,2.38s-15.42-1.06-15.56-2.38h0l.9,4a6.09,6.09,0,0,0,6,4.73h17.47a6.09,6.09,0,0,0,5.94-4.73l.91-4Z"
                style={{
                  fill: '#fff',
                }}
              />
            </g>
            <g>
              <g>
                <path
                  d="M1150.68,508.32h-15.91a5.55,5.55,0,0,1-5.41-4.31l-.82-3.62h28.37l-.82,3.62A5.55,5.55,0,0,1,1150.68,508.32Z"
                  style={{
                    fill: '#8e3f04',
                  }}
                />
                <ellipse
                  cx={1142.71}
                  cy={500.36}
                  rx={14.18}
                  ry={2.2}
                  style={{
                    fill: '#8e3f04',
                  }}
                />
              </g>
              <path
                d="M1153.74,500.42c-.32-.28-.37-.45-.79-.4a2.89,2.89,0,0,1-2.51-1.13c-1.15-1.19-5-.23-7.38-.17s-1.21,1-3.09,0-1.21-1.3-2.1-1.76a3.28,3.28,0,0,0-3.29.4,4.75,4.75,0,0,1-2.57,1.87c-1.78.62-2.51,2.89-2.51,2.89,2,7.54,12.67,5.33,19.37,4.93s6-2.66,6.33-4.42S1154.05,500.7,1153.74,500.42Z"
                style={{
                  fill: '#fc8144',
                }}
              />
              <path
                d="M1156.86,500.39c-.13,1.2-6.41,2.17-14.16,2.17s-14-1-14.17-2.17h0l.82,3.62a5.55,5.55,0,0,0,5.41,4.31h15.91a5.55,5.55,0,0,0,5.41-4.31l.82-3.62Z"
                style={{
                  fill: '#c65b02',
                }}
              />
              <circle
                cx={1137.89}
                cy={498.76}
                r={0.1}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1138.9}
                cy={498.98}
                r={0.1}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1138.98}
                cy={499.4}
                r={0.08}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1138.28}
                cy={499.74}
                r={0.03}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1139.24}
                cy={500.47}
                r={0.03}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1140.55}
                cy={500.48}
                r={0.06}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1140.55}
                cy={499.61}
                r={0.03}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1141.38}
                cy={499.65}
                r={0.03}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1141.53}
                cy={501.03}
                r={0.06}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1142.14}
                cy={500.91}
                r={0.06}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1144.31}
                cy={499.73}
                r={0.17}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1144.76}
                cy={500.88}
                r={0.14}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1146.02}
                cy={500.47}
                r={0.17}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1146.14}
                cy={499.54}
                r={0.12}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1147.05}
                cy={499.33}
                r={0.12}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1147.71}
                cy={500.17}
                r={0.05}
                style={{
                  fill: '#fe4c00',
                }}
              />
              <circle
                cx={1142.63}
                cy={499.63}
                r={0.1}
                style={{
                  fill: '#fe4c00',
                }}
              />
            </g>
          </g>
          <g>
            <path
              d="M927.26,208.4a14.39,14.39,0,0,1-6.77,1.4c-4.64,0-8.75-2.07-8.75-7.1a6.14,6.14,0,0,1,4.84-5.71v-.24a5,5,0,0,1-3.82-4.93c0-3.29,2.66-6.43,8.8-6.43a10.11,10.11,0,0,1,5.12,1.16l-1,4.35a8.67,8.67,0,0,0-3.62-.72c-2.08,0-3.34,1-3.34,2.37,0,1.83,2.52,2.37,4.93,2.37h.78v4.3h-1c-2.76.09-5.22.82-5.22,2.95,0,1.74,1.79,2.7,3.72,2.7a10.29,10.29,0,0,0,4.69-1.06Z"
              style={{
                fill: '#069',
              }}
            />
            <path
              d="M948.24,190a18.89,18.89,0,0,1-4.11-.38v.14c1.79,1.55,2.9,4.93,2.9,7.74,0,9.66-5.41,12.27-8.94,12.27-5.66,0-9-4.44-9-12.13,0-8.51,4.45-12.28,9.33-12.28h10Zm-7.44,7.5c0-3.24-.68-7.35-2.61-7.35-2.32,0-2.81,4.11-2.81,7.35,0,4.06.63,7.44,2.86,7.44,2,.06,2.56-3.94,2.56-7.42Z"
              style={{
                fill: '#069',
              }}
            />
            <path
              d="M963.57,209.47a9.2,9.2,0,0,1-2.71.33c-4.69,0-6.09-3.14-6.09-7.68V190.85h-1.5a18.78,18.78,0,0,0-3,.25L949.4,187c.44-.34,2.28-1.26,6.05-1.26h11.07l-.49,5.07h-4.88v10.74c0,2.46.73,3.33,1.84,3.33h.72Z"
              style={{
                fill: '#069',
              }}
            />
            <path
              d="M975.46,202.65c0,2,.68,2.46,1.94,2.42l-.44,4.44a9,9,0,0,1-2.37.29c-2.66,0-5.46-.82-5.46-6.62v-17.4h6.33Z"
              style={{
                fill: '#069',
              }}
            />
            <path
              d="M997.79,185.78c-.24,1.69-.62,10.63-.62,16.72,0,2,.48,2.57,1.83,2.61l-.58,4.45a4.51,4.51,0,0,1-1.54.24c-2.23,0-3.68-1-4.21-3.57h-.19a5.62,5.62,0,0,1-5.22,3.57c-5.18,0-7.69-5.46-7.69-11.4,0-8.46,4.21-13,8.27-13a4.37,4.37,0,0,1,4.35,3.1h.19c.19-.87.48-1.94.68-2.71Zm-9.23,18.85c1,0,2-1.06,2.32-3.29a28.88,28.88,0,0,0,.19-3.72c0-1.54,0-2.37-.09-3.33-.19-2.42-1-3.77-2.18-3.77-1.83,0-3,3.48-3,7.2.06,4.2,1.17,6.91,2.76,6.91Z"
              style={{
                fill: '#069',
              }}
            />
            <path
              d="M1013.7,209.47a9.2,9.2,0,0,1-2.71.33c-4.68,0-6.09-3.14-6.09-7.68V190.85h-1.49a18.78,18.78,0,0,0-3,.25l-.87-4.06c.43-.34,2.27-1.26,6-1.26h11.07l-.48,5.07h-4.89v10.74c0,2.46.73,3.33,1.84,3.33h.73Z"
              style={{
                fill: '#069',
              }}
            />
            <path
              d="M1036.08,197.53c0,9.86-5.46,12.27-9,12.27-5.66,0-9-4.44-9-12.13,0-8.51,4.44-12.28,9.13-12.28C1032.7,185.39,1036.08,190.08,1036.08,197.53Zm-11.79,0c0,4.06.63,7.44,2.9,7.44,2,0,2.56-4,2.56-7.44,0-3.24-.53-7.35-2.66-7.35-2.32,0-2.8,4.11-2.8,7.35Zm7.49-21.32-3,6.77h-3.57l1.45-6.77Z"
              style={{
                fill: '#069',
              }}
            />
            <path
              d="M1040.34,218.7c-.48-1.21-.82-3.92-.87-8.51V198.44c0-6.28,1.65-9.28,3.68-11a8.06,8.06,0,0,1,5.36-2c6.43,0,9,5.66,9,12.09,0,8.5-3.86,12.32-7.93,12.32a4.42,4.42,0,0,1-3.67-2h-.1v2.42a74.72,74.72,0,0,0,.49,8.46Zm5.46-17.5a4.3,4.3,0,0,0,.34,1.84,2.06,2.06,0,0,0,1.94,1.59c2.17,0,3.09-3.38,3.09-7.06,0-4.35-1.06-6.76-2.76-6.76-1.54,0-2.61,1.64-2.61,6.57Z"
              style={{
                fill: '#069',
              }}
            />
            <path
              d="M1067.41,202.65c0,2,.68,2.46,1.94,2.42l-.44,4.44a8.93,8.93,0,0,1-2.36.29c-2.66,0-5.47-.82-5.47-6.62v-17.4h6.33Z"
              style={{
                fill: '#069',
              }}
            />
            <path
              d="M1089.6,197.53c0,9.86-5.46,12.27-9,12.27-5.65,0-9-4.44-9-12.13,0-8.51,4.45-12.28,9.14-12.28C1086.22,185.39,1089.6,190.08,1089.6,197.53Zm-11.79,0c0,4.06.63,7.44,2.9,7.44,2,0,2.56-4,2.56-7.44,0-3.24-.53-7.35-2.66-7.35-2.32,0-2.75,4.11-2.75,7.35Z"
              style={{
                fill: '#069',
              }}
            />
          </g>
          <line
            y1={455.92}
            x2={295.63}
            y2={455.92}
            style={{
              fill: 'none',
              stroke: '#ffd505',
              strokeMiterlimit: 10,
              strokeWidth: 2,
            }}
          />
          <line
            x1={358.15}
            y1={455.92}
            x2={321.35}
            y2={455.92}
            style={{
              fill: 'none',
              stroke: '#ffd505',
              strokeMiterlimit: 10,
              strokeWidth: 2,
            }}
          />
          <line
            x1={636.82}
            y1={455.92}
            x2={582.94}
            y2={455.92}
            style={{
              fill: 'none',
              stroke: '#ffd505',
              strokeMiterlimit: 10,
              strokeWidth: 2,
            }}
          />
          <g>
            <rect
              x={79.31}
              y={474.21}
              width={18.95}
              height={7.98}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={70.36}
              y={474.21}
              width={8.95}
              height={7.98}
              style={{
                fill: '#edca96',
              }}
            />
          </g>
          <g>
            <rect
              x={260.71}
              y={484.63}
              width={18.95}
              height={7.98}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={251.75}
              y={484.63}
              width={8.95}
              height={7.98}
              style={{
                fill: '#edca96',
              }}
            />
          </g>
          <g>
            <rect
              x={163.6}
              y={498.59}
              width={18.95}
              height={7.98}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={154.66}
              y={498.59}
              width={8.95}
              height={7.98}
              style={{
                fill: '#edca96',
              }}
            />
          </g>
          <g>
            <rect
              x={529.65}
              y={477.27}
              width={16.23}
              height={6.84}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={521.98}
              y={477.27}
              width={7.67}
              height={6.84}
              style={{
                fill: '#edca96',
              }}
            />
          </g>
          <g>
            <rect
              x={77.15}
              y={466.23}
              width={14.85}
              height={7.98}
              style={{
                fill: '#edca96',
              }}
            />
            <rect
              x={92}
              y={466.23}
              width={7.02}
              height={7.98}
              style={{
                fill: '#fce2b9',
              }}
            />
          </g>
          <g>
            <rect
              x={45.89}
              y={543.04}
              width={15.79}
              height={7.98}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={38.43}
              y={543.04}
              width={7.46}
              height={7.98}
              style={{
                fill: '#edca96',
              }}
            />
          </g>
          <g>
            <rect
              x={51.98}
              y={535.28}
              width={10.26}
              height={7.98}
              style={{
                fill: '#edca96',
              }}
            />
            <rect
              x={62.24}
              y={535.28}
              width={4.85}
              height={7.98}
              style={{
                fill: '#fce2b9',
              }}
            />
          </g>
          <g>
            <polygon
              points="60.66 498.99 14.31 497.71 14.24 481.02 60.07 477.35 60.66 498.99"
              style={{
                fill: '#fce2b9',
              }}
            />
            <line
              x1={58.21}
              y1={488.11}
              x2={17.02}
              y2={489.78}
              style={{
                fill: 'none',
                stroke: '#f2d09e',
                strokeMiterlimit: 10,
              }}
            />
            <line
              x1={58.49}
              y1={481.1}
              x2={16.12}
              y2={484.52}
              style={{
                fill: 'none',
                stroke: '#f2d09e',
                strokeMiterlimit: 10,
              }}
            />
            <line
              x1={58.49}
              y1={495.47}
              x2={16.68}
              y2={494.78}
              style={{
                fill: 'none',
                stroke: '#f2d09e',
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={14.3}
              cy={489.36}
              rx={1.5}
              ry={8.34}
              style={{
                fill: '#efc68b',
              }}
            />
          </g>
          <path
            d="M98.86,489.6a3.21,3.21,0,0,1,2.21-3c2.22-.63,2.53-1.26,3-2.37s.79-1.58,1.9-1.9,1.74-1.42,2.69-2.21,1.1-1.58,3.79-1.58,4.75.47,5.07,2-.8,2.38.94,3.32,2.22,1.43,2.54,2.22,2.21.95,2.53,1.42,1.8,1.33,1.8,2Z"
            style={{
              fill: '#fce2b9',
            }}
          />
          <path
            d="M127.14,489.56a13.85,13.85,0,0,1,1.18-1.36,4.27,4.27,0,0,1,2.14-.66c.59,0,2.19,1.07,2.43,1.07s1.13.77,1.13.77Z"
            style={{
              fill: '#fce2b9',
            }}
          />
          <path
            d="M69.34,556.7a12.83,12.83,0,0,1,1.19-1.37,4.22,4.22,0,0,1,2.13-.65c.6,0,2.2,1.07,2.44,1.07s1.12.77,1.12.77Z"
            style={{
              fill: '#fce2b9',
            }}
          />
          <path
            d="M475,518.21a23,23,0,0,1,2.15-2.37,7.69,7.69,0,0,1,3.8-1.07c1.05,0,3.83,2,4.25,2s2,1.41,2,1.41Z"
            style={{
              fill: '#fce2b9',
            }}
          />
          <path
            d="M437.12,504.46s.9-.94,1.43-1.4a5.56,5.56,0,0,1,2.74-.83c.75,0,2.8,1.36,3.11,1.36s1.44,1,1.44,1Z"
            style={{
              fill: '#fce2b9',
            }}
          />
          <g>
            <rect
              x={487.24}
              y={484.05}
              width={70.43}
              height={20.2}
              style={{
                fill: '#fce2b9',
              }}
            />
            <rect
              x={475.05}
              y={484.04}
              width={12.19}
              height={20.2}
              style={{
                fill: '#edca96',
              }}
            />
            <g>
              <ellipse
                cx={548.28}
                cy={500.07}
                rx={1.47}
                ry={0.56}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={551.02}
                cy={501.54}
                rx={0.58}
                ry={0.34}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={548.87}
                cy={501.96}
                rx={0.26}
                ry={0.18}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={551.91}
                cy={500.34}
                rx={0.47}
                ry={0.24}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={550.78}
                cy={498.87}
                rx={0.24}
                ry={0.13}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={554.42}
                cy={502.62}
                rx={0.37}
                ry={0.26}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={554.24}
                cy={498.85}
                rx={0.34}
                ry={0.21}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={553.06}
                cy={501.18}
                rx={0.1}
                ry={0.08}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={545.47}
                cy={502.7}
                rx={0.37}
                ry={0.18}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={545.52}
                cy={500.97}
                rx={0.31}
                ry={0.13}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={540.78}
                cy={502.04}
                rx={0.5}
                ry={0.31}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={555.49}
                cy={486.21}
                rx={0.86}
                ry={0.5}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={556.46}
                cy={487.49}
                rx={0.37}
                ry={0.21}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={553.45}
                cy={486.05}
                rx={0.29}
                ry={0.18}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={552.04}
                cy={485.5}
                rx={0.34}
                ry={0.16}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={549.47}
                cy={485.32}
                rx={0.18}
                ry={0.08}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={551.15}
                cy={487.31}
                rx={0.29}
                ry={0.13}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={554.58}
                cy={489.25}
                rx={0.26}
                ry={0.18}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={556.7}
                cy={490.24}
                rx={0.24}
                ry={0.18}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={490.56}
                cy={485.7}
                rx={1.54}
                ry={0.7}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={491.99}
                cy={487.52}
                rx={0.8}
                ry={0.42}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={493.21}
                cy={486.33}
                rx={0.42}
                ry={0.21}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={493.84}
                cy={488.04}
                rx={0.28}
                ry={0.17}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={495.73}
                cy={485.46}
                rx={0.35}
                ry={0.17}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={497.14}
                cy={486.29}
                rx={0.33}
                ry={0.17}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={488.67}
                cy={488.89}
                rx={0.31}
                ry={0.16}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={489.01}
                cy={487.6}
                rx={0.33}
                ry={0.12}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={489.47}
                cy={502.86}
                rx={0.75}
                ry={0.49}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={491.22}
                cy={503.57}
                rx={0.37}
                ry={0.23}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={490.83}
                cy={502.58}
                rx={0.19}
                ry={0.1}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={488.53}
                cy={501.84}
                rx={0.37}
                ry={0.21}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={490.03}
                cy={501.46}
                rx={0.3}
                ry={0.17}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={492.63}
                cy={502.05}
                rx={0.31}
                ry={0.21}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={493.35}
                cy={503.47}
                rx={0.23}
                ry={0.12}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={488.53}
                cy={499.87}
                rx={0.33}
                ry={0.16}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={488.48}
                cy={498.44}
                rx={0.17}
                ry={0.05}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={492.23}
                cy={500.2}
                rx={0.23}
                ry={0.1}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={495.02}
                cy={502.14}
                rx={0.16}
                ry={0.09}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={497.73}
                cy={503.4}
                rx={0.31}
                ry={0.12}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={498.01}
                cy={501.23}
                rx={0.28}
                ry={0.09}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={495.76}
                cy={499.87}
                rx={0.23}
                ry={0.12}
                style={{
                  fill: '#efc68b',
                }}
              />
              <ellipse
                cx={488.04}
                cy={503.8}
                rx={0.4}
                ry={0.21}
                style={{
                  fill: '#efc68b',
                }}
              />
            </g>
          </g>
          <path
            d="M61.52,501.8a12.72,12.72,0,0,0,3.11-2.88c1.33-1.77,1.77-2.66,4.43-2.21s3.55,1.55,5.1,1.1,4,.67,5.76,1.11a44.26,44.26,0,0,1,6.21,2.88Z"
            style={{
              fill: '#fce2b9',
            }}
          />
          <path
            d="M455.08,466.33s-2.22-.44-5.76-3.1-.89,1.77-3.55-2.66-3.55-6.65-8.43-5.76a10.7,10.7,0,0,1-10.64-4.44c-1.77-2.66-8.86-4-13.74-2.21s-4,6.2-6.21,7.09a85.92,85.92,0,0,1-9.31,2.66c-3.55.89-5.76,4-8,5.76s-6.71,2.5-6.71,2.5Z"
            style={{
              fill: '#f4d3a2',
            }}
          />
          <g>
            <g id="tree1">
              <polygon
                points="672.76 503.03 665.69 502.56 679.54 316.85 683.43 317.11 672.76 503.03"
                style={{
                  fill: '#664020',
                }}
              />
              <g>
                <path
                  d="M670.29,456.94l12.93-19.11,6.46-9.55,1.64-2.42a15.3,15.3,0,0,1,2.16-2.39,15,15,0,0,1,5.49-3.12l43.56-15.06.34.94-43,16.72A11.62,11.62,0,0,0,694,427.7l-1.46,2.43-5.9,9.9-11.74,19.79Z"
                  style={{
                    fill: '#664020',
                  }}
                />
                <polygon
                  points="706.68 419.56 738.13 422.71 738.11 422.89 706.6 420.56 706.68 419.56"
                  style={{
                    fill: '#664020',
                  }}
                />
                <g>
                  <path
                    d="M740.37,404.53a28,28,0,0,0,7.88-8.45c3.16-5.37,4.74-10.3,3.54-11s-4.73,3.08-7.89,8.46A28,28,0,0,0,740.37,404.53Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M750.71,387.25s-11.48,16.36-10.85,19.92"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M728.77,407.94a24.09,24.09,0,0,0,5-8.62c1.6-5.12,2-9.56.82-9.92s-3.37,3.51-5,8.62A24.27,24.27,0,0,0,728.77,407.94Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M733.86,392.59s-6.1,16.42-5.67,19"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M741.12,408.75a24,24,0,0,0,9.08,4.06c5.25,1.07,9.71,1,9.95-.19s-3.83-3-9.09-4.06A24.13,24.13,0,0,0,741.12,408.75Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M738.4,407.76s10.87,4,19.31,4.23"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M720.28,420.74a24.16,24.16,0,0,0,9.94-.52c5.16-1.44,9.09-3.54,8.77-4.7s-4.77-.92-9.94.52A24.13,24.13,0,0,0,720.28,420.74Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M719.42,421.31A44,44,0,0,1,737,416.1"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M687.78,418.92a24.15,24.15,0,0,0,.49-9.94c-.91-5.28-2.61-9.4-3.79-9.2s-1.4,4.65-.49,9.94A24.08,24.08,0,0,0,687.78,418.92Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M688.26,419.83a44.23,44.23,0,0,1-3.4-18.06"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M684.94,428.38a24.14,24.14,0,0,0-1.33-9.86c-1.86-5-4.28-8.77-5.4-8.35s-.53,4.83,1.33,9.86A24.12,24.12,0,0,0,684.94,428.38Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M685.58,429.19A44,44,0,0,1,679,412.06"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M737.28,422.59a24,24,0,0,0,9.94-.52c5.17-1.44,9.09-3.54,8.77-4.7s-4.77-.92-9.94.52A24.13,24.13,0,0,0,737.28,422.59Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <line
                    x1={737.28}
                    y1={422.6}
                    x2={753.55}
                    y2={418.32}
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M712.22,422.13a24.13,24.13,0,0,0,1.32,9.86c1.86,5,4.27,8.77,5.4,8.36s.53-4.83-1.32-9.86A24.16,24.16,0,0,0,712.22,422.13Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M711.31,420.53s6,12.58,7,17.77"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M696,427.4a24.06,24.06,0,0,0,6.67,7.39c4.37,3.11,8.48,4.83,9.17,3.85s-2.29-4.28-6.66-7.39A24.1,24.1,0,0,0,696,427.4Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M694.38,426.6s12.1,7,15.82,10.71"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M728.42,421.87a24.15,24.15,0,0,0,4.69,8.78c3.49,4.07,7.06,6.73,8,6s-1.19-4.71-4.68-8.78A24.07,24.07,0,0,0,728.42,421.87Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M727.43,421.79s1.49-1.41,11.77,12.38"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M722,421.3a24.07,24.07,0,0,0,3.4,9.35c2.89,4.52,6,7.66,7.06,7s-.51-4.84-3.4-9.35A24.15,24.15,0,0,0,722,421.3Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <line
                    x1={721.96}
                    y1={421.31}
                    x2={730.97}
                    y2={435.64}
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M717.65,413.09a24.19,24.19,0,0,0,6.94-7.13c2.8-4.57,4.25-8.79,3.23-9.41s-4.13,2.56-6.93,7.13A24.1,24.1,0,0,0,717.65,413.09Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M726.77,398.55s-9.51,13-9.75,17.11"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M713,413.34a24.29,24.29,0,0,0,4.14-9c1.11-5.25,1.06-9.7-.11-10s-3,3.8-4.14,9.05A24.17,24.17,0,0,0,713,413.34Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M716.67,396.58s-4.59,15.48-3.45,19.39"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M691.57,412.48a24.23,24.23,0,0,0,8.8-4.65c4.08-3.48,6.76-7,6-7.95s-4.72,1.17-8.8,4.65A24,24,0,0,0,691.57,412.48Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M704.73,401.47s-13.08,9.46-14.56,13.25"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <polygon
                  points="683.39 437.45 695.68 390.99 696.04 391.07 685.33 437.93 683.39 437.45"
                  style={{
                    fill: '#664020',
                  }}
                />
                <polygon
                  points="692.63 403.02 710.44 390.69 710.55 390.84 693.21 403.83 692.63 403.02"
                  style={{
                    fill: '#664020',
                  }}
                />
                <g>
                  <path
                    d="M708.5,392a16.88,16.88,0,0,0,7,.46c3.71-.57,6.61-1.71,6.48-2.54s-3.24-1-7-.46A16.74,16.74,0,0,0,708.5,392Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M721.23,390s-11,.57-13.34,2.63"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M703.73,395.47a16.9,16.9,0,0,0,4.42-5.38c1.69-3.35,2.45-6.38,1.7-6.76s-2.72,2-4.42,5.39A16.87,16.87,0,0,0,703.73,395.47Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M709.45,384s-4,10.27-6.28,11.91"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M700.92,397.7a16.88,16.88,0,0,0,7,.46c3.71-.57,6.62-1.71,6.49-2.54s-3.24-1-7-.46A16.89,16.89,0,0,0,700.92,397.7Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M713.52,395.76s-10.72.32-14.27,2.89"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M696.65,400.43a16.83,16.83,0,0,0,3.58-6c1.18-3.57,1.5-6.67.7-6.93s-2.4,2.41-3.58,6A16.62,16.62,0,0,0,696.65,400.43Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M700.86,388.54c-.14.06-4,11.86-4.17,12.25"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M686.15,298.75a32.41,32.41,0,0,0,.85-13.36c-1.12-7.13-3.33-12.7-4.92-12.45s-2,6.23-.85,13.36A32.26,32.26,0,0,0,686.15,298.75Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M686.78,300a59.17,59.17,0,0,1-4.23-24.36"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M682.15,311.43a32.41,32.41,0,0,0-1.6-13.29c-2.41-6.8-5.59-11.88-7.11-11.34s-.8,6.49,1.6,13.29A32.61,32.61,0,0,0,682.15,311.43Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M683,312.53a59.42,59.42,0,0,1-8.61-23.18"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M691.37,290.16a32.42,32.42,0,0,0,11.93-6.09c5.56-4.6,9.23-9.33,8.2-10.58s-6.37,1.48-11.93,6.08A32.49,32.49,0,0,0,691.37,290.16Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M709.29,275.59s-17.77,12.49-19.84,17.56"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <polygon
                  points="678.99 327.79 697.38 261.33 697.74 261.43 680.92 328.31 678.99 327.79"
                  style={{
                    fill: '#664020',
                  }}
                />
                <polygon
                  points="693.08 277.59 717.19 261.23 717.3 261.38 693.65 278.41 693.08 277.59"
                  style={{
                    fill: '#664020',
                  }}
                />
                <g>
                  <path
                    d="M714.54,263a22.86,22.86,0,0,0,9.34.75c5-.71,8.93-2.18,8.78-3.3s-4.34-1.46-9.35-.75A22.69,22.69,0,0,0,714.54,263Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M731.71,260.51s-14.82.56-18,3.28"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M708.05,267.51a22.52,22.52,0,0,0,6-7.16c2.34-4.48,3.43-8.53,2.43-9.06s-3.71,2.69-6,7.16A22.72,22.72,0,0,0,708.05,267.51Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M716,252.25s-5.58,13.74-8.67,15.9"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M704.24,270.45a22.52,22.52,0,0,0,9.34.75c5-.7,8.94-2.18,8.78-3.3s-4.34-1.45-9.35-.75A22.85,22.85,0,0,0,704.24,270.45Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M721.22,268.08s-14.43.23-19.25,3.62"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M698.43,274a22.65,22.65,0,0,0,4.94-8c1.66-4.77,2.14-8.94,1.07-9.32s-3.27,3.2-4.93,8A22.84,22.84,0,0,0,698.43,274Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M704.27,258.12c-.19.08-5.63,15.88-5.86,16.41"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
              </g>
              <g>
                <path
                  d="M679.25,326.08l-.32-7-.13-3.49a3.11,3.11,0,0,0-.81-2.09,3.88,3.88,0,0,0-.42-.39l-.68-.5-1.41-1-2.81-2.07-5.62-4.14L655.86,297q-5.58-4.22-11.09-8.5l.54-.76q5.9,3.76,11.72,7.6l11.62,7.74,5.79,3.91,2.89,2,1.44,1,.74.51a7.23,7.23,0,0,1,.89.77,6.56,6.56,0,0,1,1.81,4.21l.21,3.48.38,7Z"
                  style={{
                    fill: '#664020',
                  }}
                />
                <g>
                  <path
                    d="M653,293.38a24.17,24.17,0,0,0,8.74-4.74c4-3.53,6.68-7.12,5.9-8s-4.71,1.22-8.75,4.74A24.1,24.1,0,0,0,653,293.38Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M652.49,294.26A44.16,44.16,0,0,1,666.16,282"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M658.17,297.19a23.83,23.83,0,0,0,8.75-4.74c4-3.52,6.68-7.11,5.89-8s-4.7,1.22-8.74,4.74A24.13,24.13,0,0,0,658.17,297.19Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M657.64,298.08a44,44,0,0,1,13.67-12.28"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M655.25,296.84a24.17,24.17,0,0,1-10,.05c-5.24-1.14-9.28-3-9-4.18s4.71-1.2,10-.06A24,24,0,0,1,655.25,296.84Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M658,298.09s-9.43-4.71-19.73-4.91"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M661,301.63a23.93,23.93,0,0,1-9.63,2.51c-5.36.19-9.74-.63-9.78-1.83s4.27-2.32,9.63-2.51A24.29,24.29,0,0,1,661,301.63Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M664,302.18s-10.3-2.25-20.34.1"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M645.51,288.22a16.84,16.84,0,0,0,2.43-6.53c.5-3.72.24-6.83-.6-6.94s-1.91,2.81-2.42,6.53A17.14,17.14,0,0,0,645.51,288.22Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M647.42,275.76c-.13.09-1.76,12.4-1.85,12.82"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M667.46,311a16.77,16.77,0,0,0-6.48,2.43c-3.12,2-5.28,4.25-4.83,4.95s3.36-.39,6.48-2.43A16.76,16.76,0,0,0,667.46,311Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M656.86,317.65c.15,0,11.76-7.47,12.13-7.68"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M656.27,311.07a17,17,0,0,0-6.09-3.37c-3.61-1.06-6.72-1.26-7-.46s2.5,2.32,6.1,3.38A16.83,16.83,0,0,0,656.27,311.07Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M644.24,307.32c.06.14,12,3.61,12.39,3.75"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M650.62,290.45a16.82,16.82,0,0,0,2.42-6.53c.51-3.72.24-6.83-.59-7s-1.92,2.82-2.42,6.54A16.69,16.69,0,0,0,650.62,290.45Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M652.52,278c-.12.09-1.91,13.78-2,14.2"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M667.86,300.89a16.84,16.84,0,0,0,4.59-5.24c1.81-3.29,2.67-6.29,1.94-6.69s-2.8,1.94-4.6,5.23A16.75,16.75,0,0,0,667.86,300.89Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M674.07,289.94c-.15,0-6.72,12.18-7,12.54"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M647.52,290.68a16.83,16.83,0,0,0-6-3.58c-3.56-1.19-6.66-1.5-6.93-.7s2.41,2.4,6,3.58A17,17,0,0,0,647.52,290.68Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M635.62,286.52c.06.14,11.86,4,12.26,4.17"
                    style={{
                      fill: 'none',
                      stroke: '#664020',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <path
                  d="M674.27,309.88q-9.43.71-18.86,1.5V311q9.35-1.51,18.67-3.12Z"
                  style={{
                    fill: '#664020',
                  }}
                />
              </g>
            </g>
            <path
              d="M686.86,582.94h-33.8c-11.13,0-20.41-7.2-21.36-16.59l-7.76-76.52h92l-7.76,76.52C707.25,575.74,698,582.94,686.86,582.94Z"
              style={{
                fill: '#af4d04',
              }}
            />
            <g id="tree2">
              <polygon
                points="668.96 503.58 661.87 503.58 663.46 317.36 666.99 318.87 668.96 503.58"
                style={{
                  fill: '#8c6239',
                }}
              />
              <g>
                <polygon
                  points="664.42 340.13 670.53 334.58 676.62 329.03 676.85 328.82 677.07 328.76 703.23 322.21 703.42 322.93 677.59 330.67 678.04 330.41 672.66 336.66 667.29 342.92 664.42 340.13"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <g>
                  <path
                    d="M691.47,327.18a24.1,24.1,0,0,0,8.9,4.43c5.21,1.29,9.66,1.38,10,.22s-3.7-3.15-8.91-4.43A24,24,0,0,0,691.47,327.18Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M688.46,327.11s10.54-.09,19.88,4.27"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M682.27,330a24.27,24.27,0,0,0,8.9,4.44c5.21,1.28,9.66,1.38,10,.21s-3.7-3.15-8.91-4.43A24.2,24.2,0,0,0,682.27,330Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M679.26,329.88s10.54-.08,19.88,4.27"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M703.2,322.4a16.9,16.9,0,0,1,2.35-6.56c2-3.17,4.21-5.38,4.92-4.93s-.34,3.39-2.35,6.56A16.87,16.87,0,0,1,703.2,322.4Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M710.14,311.54s-4.91,9.86-7.73,11.18"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M697.42,322.41a16.85,16.85,0,0,1,.61-7c1.13-3.58,2.7-6.27,3.5-6s.53,3.36-.6,6.94A17,17,0,0,1,697.42,322.41Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M701.37,310.13s-2.88,12.11-5.28,14.1"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M687,325.4a16.81,16.81,0,0,1,.61-6.94c1.13-3.58,2.7-6.28,3.5-6s.53,3.37-.6,7A16.85,16.85,0,0,1,687,325.4Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M691,313.12s-2.88,12.11-5.27,14.1"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M701.17,323.84a16.84,16.84,0,0,0,6.08,3.4c3.59,1.08,6.7,1.3,7,.5s-2.48-2.33-6.08-3.41A16.89,16.89,0,0,0,701.17,323.84Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M713.54,327.48s-11.63-4.43-14.62-3.57"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
              </g>
              <g>
                <path
                  d="M663.42,380.76l-17.89-25.95-4.47-6.49-1.12-1.63-.28-.4-.25-.33c-.18-.23-.36-.45-.56-.66a11.28,11.28,0,0,0-2.71-2.2,12.64,12.64,0,0,0-3.3-1.34l-3.8-1.08-7.58-2.15-60.68-17.21.26-1,61,15.78,7.63,2,3.81,1a15.84,15.84,0,0,1,4,1.45,14.9,14.9,0,0,1,3.53,2.58c.27.25.51.52.76.8l.37.43.3.4,1.2,1.56,4.8,6.25,19.23,25Z"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <polygon
                  points="626.31 340.04 575.4 348.41 575.37 348.23 626.14 339.06 626.31 340.04"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <g>
                  <path
                    d="M577.17,323.06a28,28,0,0,1-8.56-7.76c-3.59-5.09-5.58-9.87-4.45-10.67s5,2.67,8.57,7.76A27.89,27.89,0,0,1,577.17,323.06Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M565.7,307.08s12.07,15.84,12.72,18.52"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M591.32,326.9a28.23,28.23,0,0,1-8.56-7.76c-3.59-5.09-5.58-9.87-4.44-10.67s5,2.67,8.56,7.76A27.89,27.89,0,0,1,591.32,326.9Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M579.57,310.54s12.81,15.35,12.47,18.94"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M603.16,329.33a24.07,24.07,0,0,1-5.67-8.18c-2-5-2.76-9.36-1.64-9.81s3.64,3.21,5.66,8.17A24.05,24.05,0,0,1,603.16,329.33Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M596.86,314.46s7.45,15.85,7.24,18.43"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M573.24,325a28.06,28.06,0,0,1-9.54,6.52c-5.79,2.31-10.9,3.13-11.41,1.84s3.75-4.21,9.54-6.52A27.94,27.94,0,0,1,573.24,325Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M574.86,324.71s-8.64,1.35-20.26,7.59"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M564.69,321.15a28,28,0,0,1-11.15,3.05c-6.22.3-11.32-.59-11.38-2s4.92-2.76,11.14-3.06A27.92,27.92,0,0,1,564.69,321.15Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M565.61,321.63s-1.37-2.27-21.11.41"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M590.93,331.17a24.12,24.12,0,0,1-8.71,4.81c-5.15,1.5-9.59,1.79-9.93.64s3.57-3.31,8.71-4.81A24.13,24.13,0,0,1,590.93,331.17Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M593.56,330s-10.51,4.87-18.9,5.83"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M612.7,341.37a24.08,24.08,0,0,1-10,.31c-5.27-1-9.36-2.77-9.13-3.95s4.68-1.32,9.94-.31A24.13,24.13,0,0,1,612.7,341.37Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M613.6,341.86a44.24,44.24,0,0,0-18-3.71"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M644.93,336.83a24.13,24.13,0,0,1-1.32-9.86c.47-5.34,1.81-9.59,3-9.48s1.79,4.52,1.33,9.86A24.12,24.12,0,0,1,644.93,336.83Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M644.53,337.78a44,44,0,0,0,1.87-18.28"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M648.55,346a24.33,24.33,0,0,1,.5-9.94c1.43-5.17,3.53-9.1,4.69-8.78s.93,4.77-.5,9.94A24.3,24.3,0,0,1,648.55,346Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M648,346.89a44,44,0,0,0,5.18-17.63"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M595.91,344.64A24,24,0,0,1,586,345c-5.26-1-9.35-2.77-9.13-3.95s4.68-1.32,9.95-.31A24.16,24.16,0,0,1,595.91,344.64Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <line
                    x1={595.9}
                    y1={344.64}
                    x2={579.34}
                    y2={341.74}
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M576.1,348a24,24,0,0,1-4.87,8.68c-3.58,4-7.2,6.58-8.1,5.78s1.29-4.68,4.87-8.68A24.1,24.1,0,0,1,576.1,348Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M576.1,348s-7.84,7.54-11.75,13"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M585.91,346.62a24.15,24.15,0,0,1-.49,9.94c-1.43,5.17-3.52,9.1-4.67,8.78s-.94-4.77.48-9.93A24.17,24.17,0,0,1,585.91,346.62Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M585.91,346.62s-4.2,11.38-4.71,16.63"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M620.86,342.08a24.1,24.1,0,0,1-.49,9.93c-1.42,5.17-3.52,9.11-4.67,8.79s-.94-4.77.49-9.94A24.11,24.11,0,0,1,620.86,342.08Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M621.62,340.41s-5,13-5.49,18.29"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M637.42,346a24.28,24.28,0,0,1-6,7.92c-4.1,3.46-8,5.52-8.83,4.6s1.93-4.46,6-7.92A24.09,24.09,0,0,1,637.42,346Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M639,345s-11.48,8-14.87,12"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M604.68,343.18a24.1,24.1,0,0,1-3.93,9.14c-3.15,4.34-6.48,7.3-7.45,6.59s.78-4.79,3.93-9.14A24.12,24.12,0,0,1,604.68,343.18Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M605.66,343s-1.6-1.28-10.7,13.32"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M611.07,342.07a24,24,0,0,1-2.61,9.6c-2.5,4.75-5.38,8.14-6.45,7.58s.11-4.86,2.61-9.6A24.14,24.14,0,0,1,611.07,342.07Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <line
                    x1={611.07}
                    y1={342.08}
                    x2={603.29}
                    y2={357.11}
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M614.67,333.53a24.11,24.11,0,0,1-7.5-6.53c-3.18-4.32-5-8.4-4-9.11s4.32,2.21,7.5,6.53A24.26,24.26,0,0,1,614.67,333.53Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M604.38,319.8S614.94,332,615.52,336"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M619.37,333.38a24.18,24.18,0,0,1-4.88-8.67c-1.54-5.14-1.87-9.58-.72-9.93s3.33,3.54,4.88,8.67A24.14,24.14,0,0,1,619.37,333.38Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M614.28,317s5.86,15,5.05,19"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M640.62,330.73a24.18,24.18,0,0,1-9.16-3.89c-4.36-3.12-7.33-6.45-6.63-7.42s4.8.77,9.16,3.89A24,24,0,0,1,640.62,330.73Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M626.58,320.86s13.82,8.34,15.62,12"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <polygon
                  points="650.09 358.55 634.36 309.78 634.71 309.66 651.98 357.91 650.09 358.55"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <polygon
                  points="638.25 322.25 619.89 310.76 619.98 310.6 638.76 321.39 638.25 322.25"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <g>
                  <path
                    d="M622,311.79a16.87,16.87,0,0,1-6.89,1c-3.75-.27-6.74-1.16-6.68-2s3.15-1.3,6.89-1A17,17,0,0,1,622,311.79Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M609.18,310.84s11-.35,13.51,1.5"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M627.08,314.81a16.91,16.91,0,0,1-4.86-5c-2-3.2-3-6.15-2.26-6.59s2.88,1.8,4.85,5A16.81,16.81,0,0,1,627.08,314.81Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M620.42,303.91s4.85,9.89,7.25,11.33"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M630.06,316.79a16.84,16.84,0,0,1-6.89,1c-3.75-.26-6.74-1.15-6.68-2s3.15-1.3,6.89-1A16.71,16.71,0,0,1,630.06,316.79Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M617.34,315.91s10.72-.57,14.46,1.68"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M634.55,319.16a16.81,16.81,0,0,1-4.07-5.66c-1.48-3.45-2-6.52-1.28-6.85s2.59,2.2,4.07,5.66A16.92,16.92,0,0,1,634.55,319.16Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M629.4,307.65c.14.05,5,11.48,5.19,11.86"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
              </g>
              <g>
                <path
                  d="M663.26,454.41,652,434.28l-5.62-10.06L645,421.75a11.46,11.46,0,0,0-1.54-2,11.8,11.8,0,0,0-4.23-2.88L596.73,399l.38-.93,43.11,16.27a15,15,0,0,1,7.5,5.73l1.57,2.46,6.2,9.73,12.37,19.44Z"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <polygon
                  points="632.59 414.28 601.02 415.73 601.01 415.54 632.53 413.28 632.59 414.28"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <g>
                  <path
                    d="M599.29,397.31a28,28,0,0,1-7.65-8.67c-3-5.45-4.45-10.42-3.23-11.09s4.65,3.21,7.65,8.66A28.28,28.28,0,0,1,599.29,397.31Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M589.43,379.75s11,16.68,10.28,20.21"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M610.78,401a24.09,24.09,0,0,1-4.72-8.75c-1.46-5.16-1.7-9.61-.55-9.94s3.27,3.6,4.73,8.76A24.12,24.12,0,0,1,610.78,401Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M606.17,385.56s5.63,16.59,5.14,19.13"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M598.42,401.51a24,24,0,0,1-9.19,3.81c-5.28.92-9.73.71-9.94-.47s3.91-2.89,9.19-3.81A24.32,24.32,0,0,1,598.42,401.51Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M601.16,400.6s-11,3.66-19.42,3.68"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M618.91,414.08a24.09,24.09,0,0,1-9.92-.8c-5.12-1.58-9-3.8-8.63-4.94s4.79-.79,9.92.79A24.09,24.09,0,0,1,618.91,414.08Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M619.75,414.67a44.11,44.11,0,0,0-17.46-5.7"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M651.45,413.16a24.18,24.18,0,0,1-.21-10c1.06-5.25,2.87-9.32,4-9.09s1.27,4.69.22,9.95A24.12,24.12,0,0,1,651.45,413.16Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M651,414.06a44.16,44.16,0,0,0,3.9-18"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M654,422.7a24.22,24.22,0,0,1,1.61-9.82c2-5,4.52-8.64,5.63-8.2s.4,4.85-1.6,9.82A24.06,24.06,0,0,1,654,422.7Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M653.36,423.49a43.91,43.91,0,0,0,7.11-16.94"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M601.86,415.45a24.06,24.06,0,0,1-9.91-.79c-5.13-1.59-9-3.8-8.64-4.94s4.8-.79,9.92.79A24.07,24.07,0,0,1,601.86,415.45Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <line
                    x1={601.86}
                    y1={415.46}
                    x2={585.72}
                    y2={410.73}
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M626.93,415.69a24,24,0,0,1-1.6,9.82c-2,5-4.51,8.65-5.62,8.2s-.4-4.84,1.59-9.82A24.28,24.28,0,0,1,626.93,415.69Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M627.86,414.11s-6.4,12.42-7.5,17.58"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M643,421.41a24,24,0,0,1-6.86,7.2c-4.46,3-8.61,4.59-9.28,3.6s2.41-4.22,6.87-7.21A24.07,24.07,0,0,1,643,421.41Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M644.64,420.66s-12.29,6.62-16.11,10.26"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M610.74,415a24.19,24.19,0,0,1-4.92,8.65c-3.61,4-7.26,6.53-8.14,5.72s1.32-4.68,4.92-8.65A24.19,24.19,0,0,1,610.74,415Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M611.73,414.93s-1.44-1.45-12.11,12"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M617.22,414.59a24.24,24.24,0,0,1-3.66,9.26c-3,4.43-6.26,7.48-7.26,6.81s.65-4.82,3.67-9.25A24.19,24.19,0,0,1,617.22,414.59Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <line
                    x1={617.21}
                    y1={414.6}
                    x2={607.81}
                    y2={428.67}
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M621.75,406.51a24.17,24.17,0,0,1-6.73-7.33c-2.68-4.65-4-8.9-3-9.5s4,2.68,6.73,7.33A24.14,24.14,0,0,1,621.75,406.51Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M613.05,391.72s9.14,13.3,9.26,17.37"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M626.44,406.88a24,24,0,0,1-3.88-9.16c-1-5.28-.8-9.73.38-9.94s2.92,3.88,3.89,9.16A24.15,24.15,0,0,1,626.44,406.88Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M623.2,390s4.15,15.59,2.9,19.47"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M647.86,406.62a24.06,24.06,0,0,1-8.67-4.89c-4-3.59-6.56-7.22-5.76-8.11s4.68,1.29,8.67,4.88A24.26,24.26,0,0,1,647.86,406.62Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M635,395.24s12.8,9.83,14.18,13.66"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <polygon
                  points="653.37 432.23 643.96 385.1 644.33 385.02 655.32 431.81 653.37 432.23"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <polygon
                  points="646.44 397.93 629.47 384.46 629.58 384.31 647.04 397.13 646.44 397.93"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <g>
                  <path
                    d="M631.49,385.73a17,17,0,0,1-7,.26c-3.69-.67-6.56-1.89-6.41-2.72s3.27-.94,7-.27A16.75,16.75,0,0,1,631.49,385.73Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M618.86,383.34s11,.88,13.26,3"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M636.16,389.28a16.81,16.81,0,0,1-4.26-5.5c-1.6-3.4-2.28-6.45-1.52-6.8s2.67,2.1,4.27,5.5A16.81,16.81,0,0,1,636.16,389.28Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M630.76,377.71s3.72,10.37,6,12.07"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M638.91,391.59a17,17,0,0,1-7,.26c-3.69-.68-6.56-1.9-6.41-2.72s3.27-.95,7-.27A16.75,16.75,0,0,1,638.91,391.59Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M626.37,389.3s10.71.62,14.18,3.28"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M643.1,394.44a16.86,16.86,0,0,1-3.41-6.08c-1.09-3.59-1.31-6.7-.51-6.94s2.33,2.47,3.42,6.07A16.82,16.82,0,0,1,643.1,394.44Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M639.27,382.43c.14.07,3.68,12,3.83,12.37"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
              </g>
              <g>
                <path
                  d="M663.62,386.68c6.45-5.12,13-10.18,19.37-15.35l.21-.17.2-.06,40.65-11.69.28.89L684,373.2l.41-.23c-5.88,5.77-11.67,11.63-17.51,17.44Z"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <g>
                  <path
                    d="M714.79,361.45a24.11,24.11,0,0,1-6.12-7.84c-2.29-4.85-3.28-9.19-2.19-9.71s3.82,3,6.12,7.85A24.09,24.09,0,0,1,714.79,361.45Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M714.93,362.47a44,44,0,0,0-7.62-16.72"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M708.55,362.89a24.11,24.11,0,0,1-6.12-7.84c-2.3-4.85-3.28-9.19-2.2-9.71s3.83,3,6.12,7.85A24.07,24.07,0,0,1,708.55,362.89Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M708.68,363.91a44.2,44.2,0,0,0-7.61-16.72"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M713.54,364a24,24,0,0,0,9.09,4c5.26,1.05,9.71,1,10-.23s-3.84-3-9.1-4A23.87,23.87,0,0,0,713.54,364Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M710.53,364.07s10.52-.56,20.05,3.38"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M706.72,367a24.14,24.14,0,0,0,7.83,6.14c4.83,2.32,9.17,3.32,9.69,2.24s-3-3.84-7.82-6.15A24.1,24.1,0,0,0,706.72,367Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M703.79,366.29s10.34,2.06,18.61,8.22"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M723.74,359.73a17,17,0,0,1,.39-7c1-3.61,2.51-6.35,3.32-6.12s.63,3.34-.39,6.95A16.73,16.73,0,0,1,723.74,359.73Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M727,347.55c.08.13-3.34,12.06-3.44,12.48"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M715.1,378a16.76,16.76,0,0,1,5.67,4c2.51,2.75,4.05,5.44,3.43,6s-3.15-1.21-5.66-4A16.66,16.66,0,0,1,715.1,378Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M723.69,387.11c-.15,0-9.53-10.17-9.83-10.47"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M720.68,378.64a16.64,16.64,0,0,1,6.16-3.26c3.62-1,6.73-1.13,7-.32s-2.54,2.27-6.16,3.26A16.7,16.7,0,0,1,720.68,378.64Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M732.78,375.12c-.07.14-12.06,3.37-12.46,3.51"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M718.17,359.73a17,17,0,0,1,.39-7c1-3.61,2.51-6.35,3.32-6.12s.63,3.34-.39,6.95A16.73,16.73,0,0,1,718.17,359.73Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M721.41,347.55c.08.13-3.76,13.39-3.85,13.81"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M699.63,365.14a16.92,16.92,0,0,1-2.12-6.64c-.34-3.74.07-6.83.9-6.91s1.79,2.9,2.13,6.64A16.92,16.92,0,0,1,699.63,365.14Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M698.3,352.6c.12.09,1.28,13.85,1.35,14.28"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M720.92,361.18a16.91,16.91,0,0,1,6.91-.9c3.74.35,6.71,1.3,6.63,2.14s-3.17,1.23-6.91.89A16.94,16.94,0,0,1,720.92,361.18Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M733.49,362.12c-.11.1-12.48-1.06-12.9-1.08"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <path
                  d="M695.41,367.86q12.62,5.37,25.26,10.65l-.13.35q-12.91-4.62-25.85-9.14Z"
                  style={{
                    fill: '#8c6239',
                  }}
                />
              </g>
              <g>
                <path
                  d="M663.6,320c-.6-2-1.22-3.93-1.8-5.9s-1.18-3.95-1.73-5.93c-1.13-3.95-2.24-7.92-3.3-11.89l.24.43-14-15.85L629.07,265l.69-.63,14.51,15.39,14.45,15.44.15.16.1.27q2.12,5.81,4.13,11.63c.69,1.94,1.32,3.9,2,5.85S666.38,317,667,319Z"
                  style={{
                    fill: '#8c6239',
                  }}
                />
                <g>
                  <path
                    d="M636.66,270.87a24.13,24.13,0,0,0,9.28-3.6c4.45-3,7.53-6.21,6.86-7.21s-4.82.62-9.28,3.6A24.19,24.19,0,0,0,636.66,270.87Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M636,271.68a44.08,44.08,0,0,1,15.1-10.46"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M641.29,275.3a24,24,0,0,0,9.27-3.6c4.46-3,7.53-6.21,6.86-7.2s-4.82.61-9.27,3.6A24,24,0,0,0,641.29,275.3Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M640.65,276.11a44,44,0,0,1,15.11-10.45"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M636.44,273.71a24.18,24.18,0,0,1-9.88-1.2c-5.06-1.8-8.83-4.16-8.43-5.29s4.83-.6,9.88,1.19A24.28,24.28,0,0,1,636.44,273.71Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M639,275.3s-8.76-5.87-19-7.37"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M640.76,279.75a24,24,0,0,1-9.9,1.26c-5.34-.49-9.58-1.86-9.47-3.05s4.52-1.77,9.86-1.28A24.24,24.24,0,0,1,640.76,279.75Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M643.63,280.66s-9.93-3.53-20.19-2.47"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M629.86,264.8a16.69,16.69,0,0,0,3.23-6.17c1-3.63,1.1-6.75.29-7s-2.26,2.55-3.23,6.17A17,17,0,0,0,629.86,264.8Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M633.32,252.69c-.13.06-3.31,12.07-3.44,12.48"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M627.91,284.94a16.93,16.93,0,0,0-6.9.5c-3.56,1.07-6.26,2.59-6,3.39s3.33.57,6.9-.5A16.78,16.78,0,0,0,627.91,284.94Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M615.86,288.35c.13.07,13.39-3.86,13.81-4"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M622.8,282.62a16.84,16.84,0,0,0-3.62-6c-2.6-2.7-5.2-4.43-5.81-3.84s1,3.24,3.62,6A16.83,16.83,0,0,0,622.8,282.62Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M614.22,273.39c0,.15,8.62,9.07,8.9,9.4"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M634.65,267.66a16.86,16.86,0,0,0,3.22-6.18c1-3.62,1.1-6.74.29-7s-2.25,2.55-3.22,6.18A17,17,0,0,0,634.65,267.66Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M638.11,255.54c-.14.07-3.64,13.42-3.78,13.83"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M647.8,281.8a17,17,0,0,0,5.22-4.61c2.21-3,3.44-5.9,2.76-6.4s-3,1.57-5.22,4.61A17.07,17.07,0,0,0,647.8,281.8Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M655.37,271.72c-.16,0-8.21,11.24-8.48,11.57"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M631.54,267.5a16.88,16.88,0,0,0-5.47-4.31c-3.39-1.63-6.43-2.33-6.79-1.57s2.09,2.68,5.47,4.31A17,17,0,0,0,631.54,267.5Z"
                    style={{
                      fill: '#7ea851',
                    }}
                  />
                  <path
                    d="M620.27,261.86c0,.15,11.25,5.48,11.63,5.69"
                    style={{
                      fill: 'none',
                      stroke: '#8c6239',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.30000001192092896px',
                    }}
                  />
                </g>
                <path
                  d="M649.69,288.27q-13.44-2.75-26.88-5.4l.07-.36q13.56,1.94,27.14,3.79Z"
                  style={{
                    fill: '#8c6239',
                  }}
                />
              </g>
            </g>
            <rect
              x={621.96}
              y={489.84}
              width={95.77}
              height={10.64}
              style={{
                fill: '#af4d04',
              }}
            />
            <polygon
              points="625.01 500.48 625.32 503.59 714.57 503.59 714.88 500.48 625.01 500.48"
              style={{
                fill: '#913d03',
              }}
            />
          </g>
          <g>
            <polygon
              points="273.7 474.4 266.14 474.4 273.62 492.61 283.76 492.61 273.7 474.4"
              style={{
                fill: '#edca96',
              }}
            />
            <path
              d="M269.86,474.4,278,492.6H298a5.34,5.34,0,0,0-1.33-2.1,3.58,3.58,0,0,1-1.22-2c-.11-.44-1.22-4.21-1.22-4.21l-4.32-10.09Z"
              style={{
                fill: '#fce2b9',
              }}
            />
            <g>
              <ellipse
                cx={295.12}
                cy={491.35}
                rx={0.89}
                ry={0.4}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={294.28}
                cy={490.4}
                rx={0.36}
                ry={0.18}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={293.25}
                cy={491.41}
                rx={0.22}
                ry={0.14}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={295.69}
                cy={490.62}
                rx={0.2}
                ry={0.12}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={294.04}
                cy={491.93}
                rx={0.24}
                ry={0.18}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={292.06}
                cy={491.89}
                rx={0.28}
                ry={0.1}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={292.12}
                cy={491.19}
                rx={0.14}
                ry={0.08}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={290.81}
                cy={490.22}
                rx={0.12}
                ry={0.08}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={292.43}
                cy={490.3}
                rx={0.2}
                ry={0.08}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={293.27}
                cy={490.72}
                rx={0.12}
                ry={0.06}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={294.62}
                cy={489.39}
                rx={0.1}
                ry={0.06}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={281.46}
                cy={491.72}
                rx={0.34}
                ry={0.18}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={282.34}
                cy={492.25}
                rx={0.26}
                ry={0.14}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={282.21}
                cy={491.66}
                rx={0.1}
                ry={0.04}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={281.38}
                cy={491.13}
                rx={0.12}
                ry={0.08}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={282.15}
                cy={491.17}
                rx={0.18}
                ry={0.07}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={282.92}
                cy={491.96}
                rx={0.13}
                ry={0.09}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={283.34}
                cy={492.39}
                rx={0.17}
                ry={0.08}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={271.8}
                cy={475.48}
                rx={0.39}
                ry={0.27}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={273.67}
                cy={475.63}
                rx={0.39}
                ry={0.12}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={273.19}
                cy={476.74}
                rx={0.33}
                ry={0.15}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={275.63}
                cy={478.56}
                rx={0.54}
                ry={0.33}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={273.37}
                cy={478.35}
                rx={0.33}
                ry={0.24}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={285.5}
                cy={476.49}
                rx={0.85}
                ry={0.36}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={286.73}
                cy={477.48}
                rx={0.39}
                ry={0.21}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={287.55}
                cy={476.4}
                rx={0.36}
                ry={0.21}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={286.98}
                cy={475.49}
                rx={0.39}
                ry={0.09}
                style={{
                  fill: '#efcb97',
                }}
              />
              <ellipse
                cx={289.76}
                cy={477}
                rx={0.45}
                ry={0.27}
                style={{
                  fill: '#efcb97',
                }}
              />
            </g>
          </g>
          <line
            x1={268.85}
            y1={492.94}
            x2={311.86}
            y2={492.94}
            style={{
              fill: 'none',
              stroke: '#ffd505',
              strokeMiterlimit: 10,
            }}
          />
          <line
            x1={145.48}
            y1={506.57}
            x2={173.59}
            y2={506.57}
            style={{
              fill: 'none',
              stroke: '#ffd505',
              strokeMiterlimit: 10,
            }}
          />
          <line
            x1={30.93}
            y1={550.91}
            x2={55.7}
            y2={550.91}
            style={{
              fill: 'none',
              stroke: '#ffd505',
              strokeMiterlimit: 10,
            }}
          />
          <line
            x1={63.68}
            y1={550.91}
            x2={58.36}
            y2={550.91}
            style={{
              fill: 'none',
              stroke: '#ffd505',
              strokeMiterlimit: 10,
            }}
          />
          <path
            d="M455.24,504.34a3.2,3.2,0,0,1,2.22-3c2.21-.63,2.53-1.26,3-2.37s.79-1.58,1.9-1.9,1.74-1.42,2.69-2.21,1.11-1.59,3.8-1.59,4.74.48,5.06,2.06-.79,2.37.95,3.32,2.21,1.43,2.53,2.22,2.21.95,2.53,1.42,1.8,1.33,1.8,2Z"
            style={{
              fill: '#fce2b9',
            }}
          />
          <path
            d="M379.77,466.06s-2.25-.25-2.58-.92a1.76,1.76,0,0,0-1.75-1.16c-1,0-2.58-.67-3.16-.67a5.46,5.46,0,0,0-2.16.25c-.91.33-2.16,2.33-2.16,2.33Z"
            style={{
              fill: '#f4d3a2',
            }}
          />
          <path
            d="M180.46,489.06s-1.66-1.44-2.55-2.33-1.55-2.33-3.1-2.33a14,14,0,0,0-3.88.22c-1.11.34-1.33.89-2.11,1.22s-1,1.22-1.33,1.33a23.46,23.46,0,0,1-2.88,1.33c-.44,0-3.32.67-3.32.67Z"
            style={{
              fill: '#fce2b9',
            }}
          />
          <path
            d="M470.86,518.26s-1.66-.77-2.55-1.25-1.55-1.24-3.1-1.24a25.16,25.16,0,0,0-3.88.12,14.28,14.28,0,0,0-2.11.65c-.77.18-1,.65-1.33.71s-2.44.71-2.88.71-3.33.36-3.33.36Z"
            style={{
              fill: '#fce2b9',
            }}
          />
          <g>
            <polygon
              points="518.35 513.95 521.92 513.95 530.49 493.66 527.63 493.38 521.92 502.22 518.35 513.95"
              style={{
                fill: '#edca96',
              }}
            />
            <path
              d="M495.71,514l9.53-20.84a67.34,67.34,0,0,0,8.87-.22c3.11-.45,8,.44,9.09.22a22.76,22.76,0,0,1,4.44.22L519.27,514Z"
              style={{
                fill: '#ffedd2',
              }}
            />
            <ellipse
              cx={498.12}
              cy={513.13}
              rx={1.22}
              ry={0.52}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={499.48}
              cy={511.96}
              rx={0.52}
              ry={0.23}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={500.48}
              cy={513.32}
              rx={0.54}
              ry={0.23}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={499.92}
              cy={512.68}
              rx={0.23}
              ry={0.1}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <path
              d="M497.74,511.94c.17,0,.31.07.31.16s-.14.16-.31.16-.31-.07-.31-.16S497.57,511.94,497.74,511.94Z"
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={498.31}
              cy={511.51}
              rx={0.37}
              ry={0.12}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={500.29}
              cy={511.18}
              rx={0.45}
              ry={0.17}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={502.54}
              cy={513.36}
              rx={0.47}
              ry={0.23}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={502.8}
              cy={511.73}
              rx={0.42}
              ry={0.21}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={501.63}
              cy={512.26}
              rx={0.65}
              ry={0.31}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={517.54}
              cy={513}
              rx={1.05}
              ry={0.5}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <path
              d="M516.44,511.67c.3,0,.55.11.55.25s-.25.25-.55.25-.55-.11-.55-.25S516.14,511.67,516.44,511.67Z"
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={515.6}
              cy={513.11}
              rx={0.39}
              ry={0.22}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={515.11}
              cy={512.25}
              rx={0.22}
              ry={0.14}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={508.37}
              cy={511.87}
              rx={0.36}
              ry={0.19}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={513.06}
              cy={512.23}
              rx={0.33}
              ry={0.11}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={517.96}
              cy={511.87}
              rx={0.47}
              ry={0.19}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={519.71}
              cy={511.23}
              rx={0.28}
              ry={0.17}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={518.15}
              cy={510.48}
              rx={0.28}
              ry={0.14}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={506.18}
              cy={494.1}
              rx={0.67}
              ry={0.28}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={505.19}
              cy={494.82}
              rx={0.22}
              ry={0.11}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={506.54}
              cy={495.41}
              rx={0.36}
              ry={0.19}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={506.85}
              cy={494.66}
              rx={0.28}
              ry={0.11}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={507.6}
              cy={493.83}
              rx={0.36}
              ry={0.11}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={508.01}
              cy={494.66}
              rx={0.28}
              ry={0.11}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={507.71}
              cy={495.41}
              rx={0.14}
              ry={0.08}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={504.83}
              cy={495.82}
              rx={0.36}
              ry={0.11}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={526.52}
              cy={493.91}
              rx={0.55}
              ry={0.25}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={525.22}
              cy={494.35}
              rx={0.36}
              ry={0.14}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={525.93}
              cy={495.03}
              rx={0.27}
              ry={0.17}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={525.02}
              cy={495.07}
              rx={0.15}
              ry={0.12}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={523.13}
              cy={494.66}
              rx={0.42}
              ry={0.12}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={523.69}
              cy={495.32}
              rx={0.27}
              ry={0.12}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={522.21}
              cy={494.95}
              rx={0.21}
              ry={0.08}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={520.32}
              cy={494.99}
              rx={0.19}
              ry={0.12}
              style={{
                fill: '#f7d2a6',
              }}
            />
            <ellipse
              cx={521.13}
              cy={496.22}
              rx={0.29}
              ry={0.1}
              style={{
                fill: '#f7d2a6',
              }}
            />
          </g>
          <line
            x1={490.17}
            y1={514.11}
            x2={593.59}
            y2={514.11}
            style={{
              fill: 'none',
              stroke: '#ffd505',
              strokeMiterlimit: 10,
            }}
          />
          <g>
            <path
              d="M1235.94,173.68H1179.5V151.1l28.63-4.66a24,24,0,0,1,27.51,19.89,23.76,23.76,0,0,1,.3,3.77Z"
              style={{
                fill: '#101d23',
              }}
            />
            <g>
              <path
                d="M1178,130.63a2.08,2.08,0,0,0-.88,2l1.23,9.77-10.9,7.61-8.78-4.47a2.1,2.1,0,0,0-2.67,3.08l10.28,14.64a15.23,15.23,0,0,0,24.93-17.51h0l-10.29-14.64a2.09,2.09,0,0,0-2.92-.48Z"
                style={{
                  fill: '#101d23',
                }}
              />
              <path
                d="M1173.74,154.82a3,3,0,0,1-4.83,3.4"
                style={{
                  fill: 'none',
                  stroke: '#ffeec4',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.75px',
                }}
              />
              <path
                d="M1185.24,146.75a3,3,0,0,1-4.83,3.39"
                style={{
                  fill: 'none',
                  stroke: '#ffeec4',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: '0.75px',
                }}
              />
              <path
                d="M1180.4,159.2l-2.24-.52a.63.63,0,0,1-.47-.74.68.68,0,0,1,.25-.37l3.1-2.17a.61.61,0,0,1,.86.06.63.63,0,0,1,.14.51l-.27,2.29a1.09,1.09,0,0,1-1.2,1Z"
                style={{
                  fill: '#ff7d37',
                }}
              />
            </g>
            <path
              d="M1149.07,173.65h32.65a5.08,5.08,0,0,0,5.34-4.78h0a5.08,5.08,0,0,0-5.34-4.78l-28,3.8a5.08,5.08,0,0,0-4.63,4.82Z"
              style={{
                fill: '#101d23',
              }}
            />
            <g id="tail">
              <path
                d="M1236.59,216.52a62.9,62.9,0,0,0,5.71-12.25c.32-1.06.66-2.13.92-3.2a27.86,27.86,0,0,0,.64-3.25,31,31,0,0,0,.41-6.52,22.31,22.31,0,0,0-4.07-12.13,24.1,24.1,0,0,0-4.57-4.73,30.28,30.28,0,0,0-2.78-1.83,18.14,18.14,0,0,0-2.93-1.36h-.09a1.84,1.84,0,0,1,1.15-3.49,16.12,16.12,0,0,1,1.9.72c.6.25,1.18.52,1.75.81a28.53,28.53,0,0,1,3.31,2,27.84,27.84,0,0,1,5.79,5.15,29.65,29.65,0,0,1,6.51,14.2,46.59,46.59,0,0,1-.13,15.54,96,96,0,0,1-3.83,14.82h0a5.36,5.36,0,1,1-10.19-3.33,5.58,5.58,0,0,1,.51-1.11Z"
                style={{
                  fill: '#101d23',
                }}
              />
            </g>
            <path
              d="M1226.14,164.94a12.39,12.39,0,0,0-24.78,0,12.08,12.08,0,0,0,.09,1.47l-9.68,1.48a4.86,4.86,0,0,0-4.12,4.82v.94"
              style={{
                fill: 'none',
                stroke: '#29444f',
                strokeMiterlimit: 10,
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgMediterraneanHeroDesktop;
