import * as React from 'react';

function SvgBritainHeroDesktop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1341.51 754.36"
      {...props}
    >
      <style>
        {
          '\r\n  \r\n  #car {\r\n    animation: car 20s linear infinite;\r\n    animation-direction: inherit;\r\n    transform-origin: center;\r\n    transform-box: fill-box;\r\n}\r\n\r\n@keyframes car {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(70px);\r\n    }\r\n    10% {\r\n        opacity: 0;\r\n    }\r\n    11% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(-700px);\r\n    }\r\n}\r\n\r\n#hda {\r\n    animation: hda 1.5s linear infinite;\r\n    transform-origin: right;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n}\r\n\r\n@keyframes hda {\r\n    100% {\r\n        transform: rotateZ(7deg) translateX(-5px);\r\n    }\r\n}\r\n\r\n#hdb {\r\n    animation: hdb 1.5s linear infinite;\r\n    transform-origin: left bottom;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n}\r\n\r\n@keyframes hdb {\r\n    100% {\r\n        transform: rotateZ(-8deg);\r\n    }\r\n}\r\n\r\n#flag {\r\n    animation: flag 1.5s linear infinite;\r\n    transform-origin: 20% 40%;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n}\r\n\r\n@keyframes flag {\r\n    100% {\r\n        transform: skewY(-2deg) skewX(5deg);\r\n    }\r\n}\r\n\r\n#w1 {\r\n    animation: w1 75s linear infinite;\r\n    animation-direction: inherit;\r\n    transform-origin: center;\r\n    transform-box: fill-box;\r\n}\r\n\r\n@keyframes w1 {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(700px);\r\n    }\r\n    10% {\r\n        opacity: 0;\r\n    }\r\n    11% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(-700px);\r\n    }\r\n}\r\n\r\n#wave {\r\n    animation: wave 10s linear infinite;\r\n    animation-direction: inherit;\r\n    transform-origin: center;\r\n    transform-box: fill-box;\r\n}\r\n\r\n@keyframes wave {\r\n    5%,\r\n    15%,\r\n    25%,\r\n    35%,\r\n    45%,\r\n    55%,\r\n    65%,\r\n    75%,\r\n    85%,\r\n    95% {\r\n        opacity: 1;\r\n        transform: translateY(3px);\r\n    }\r\n    0%,\r\n    10%,\r\n    20%,\r\n    30%,\r\n    40%,\r\n    50%,\r\n    60%,\r\n    70%,\r\n    80%,\r\n    90% {\r\n        opacity: 1;\r\n        transform: translateY(0px);\r\n    }\r\n}\r\n\r\n#w2 {\r\n    animation: w2 70s linear infinite;\r\n    animation-direction: inherit;\r\n    transform-origin: center;\r\n    transform-box: fill-box;\r\n}\r\n\r\n@keyframes w2 {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(700px);\r\n    }\r\n    10% {\r\n        opacity: 0;\r\n    }\r\n    11% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(-700px);\r\n    }\r\n}\r\n\r\n#w3 {\r\n    animation: w3 45s linear infinite;\r\n    animation-direction: inherit;\r\n    transform-origin: center;\r\n    transform-box: fill-box;\r\n}\r\n\r\n@keyframes w3 {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(200px);\r\n    }\r\n    10% {\r\n        opacity: 0;\r\n    }\r\n    11% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(-700px);\r\n    }\r\n}\r\n\r\n#w4 {\r\n    animation: w4 40s linear infinite;\r\n    animation-direction: inherit;\r\n    transform-origin: center;\r\n    transform-box: fill-box;\r\n}\r\n\r\n@keyframes w4 {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(150px);\r\n    }\r\n    10% {\r\n        opacity: 0;\r\n    }\r\n    11% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateX(-700px);\r\n    }\r\n}\r\n\r\n#cld3 {\r\n    animation: cld3 70s linear infinite;\r\n    transform-origin: center;\r\n}\r\n\r\n@keyframes cld3 {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(700px);\r\n    }\r\n    35% {\r\n        opacity: 0;\r\n        transform: translateX(700px);\r\n    }\r\n    37% {\r\n        opacity: 0;\r\n    }\r\n    39% {\r\n        opacity: 1;\r\n    }\r\n    98% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-600px);\r\n    }\r\n}\r\n\r\n#cld2 {\r\n    animation: cld2 60s linear infinite;\r\n    transform-origin: center;\r\n}\r\n\r\n@keyframes cld2 {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(280px)\r\n    }\r\n    25% {\r\n        opacity: 0;\r\n        transform: translateX(280px)\r\n    }\r\n    27% {\r\n        opacity: 0;\r\n    }\r\n    29% {\r\n        opacity: 1;\r\n    }\r\n    98% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-980px);\r\n    }\r\n}\r\n\r\n#cld1 {\r\n    animation: cld1 50s linear infinite;\r\n    transform-origin: center;\r\n}\r\n\r\n@keyframes cld1 {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateX(1050px);\r\n    }\r\n    2% {\r\n        opacity: 0;\r\n    }\r\n    4% {\r\n        opacity: 1;\r\n    }\r\n    98% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translateX(-230px);\r\n    }\r\n}\r\n  \r\n  '
        }
      </style>
      <defs>
        <linearGradient
          id="linear-gradient"
          x1={1250.19}
          y1={285.72}
          x2={1345.97}
          y2={285.72}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.1} stopColor="#fbfbfb" />
          <stop offset={0.22} stopColor="#eee" />
          <stop offset={0.33} stopColor="#d9d9d9" />
          <stop offset={0.45} stopColor="#bbb" />
          <stop offset={0.57} stopColor="#949494" />
          <stop offset={0.69} stopColor="#656565" />
          <stop offset={0.81} stopColor="#2e2e2e" />
          <stop offset={0.9} />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1={1128.98}
          y1={927.06}
          x2={-34.11}
          y2={384.7}
          gradientTransform="matrix(1, 0, 0, -1, 133.84, 1311.76)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.12} stopColor="#fffcf3" />
          <stop offset={0.59} stopColor="#ffcc2b" />
          <stop offset={0.82} stopColor="#fffbf0" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <clipPath id="clip-path" transform="translate(-22.62 -7.33)">
          <rect
            x={52.64}
            y={3.15}
            width={844.5}
            height={626.12}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-2" transform="translate(-22.62 -7.33)">
          <rect
            x={425.09}
            y={68.33}
            width={844.5}
            height={486.21}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <mask
          id="mask"
          x={1227.58}
          y={146.37}
          width={113.94}
          height={264.04}
          maskUnits="userSpaceOnUse"
        >
          <g transform="translate(-22.62 -7.33)">
            <rect
              x={1250.19}
              y={153.7}
              width={95.77}
              height={264.04}
              style={{
                fill: 'url(#linear-gradient)',
              }}
            />
          </g>
        </mask>
        <linearGradient
          id="linear-gradient-3"
          x1={52.59}
          y1={501.33}
          x2={1320.13}
          y2={501.33}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#fff" />
          <stop offset={0.08} stopColor="#eefafa" />
          <stop offset={0.22} stopColor="#c3eeec" />
          <stop offset={0.41} stopColor="#7edbd6" />
          <stop offset={0.5} stopColor="#5ad1cb" />
          <stop offset={0.93} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1={1218.23}
          y1={513.82}
          x2={1218.23}
          y2={464.6}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.31} stopColor="#fffefd" />
          <stop offset={0.49} stopColor="#fffbf4" />
          <stop offset={0.64} stopColor="#fff7e6" />
          <stop offset={0.76} stopColor="#fff0d3" />
          <stop offset={0.88} stopColor="#ffe7b9" />
          <stop offset={0.98} stopColor="#ffdd9a" />
          <stop offset={1} stopColor="#ffdb94" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1={795.24}
          y1={513.82}
          x2={795.24}
          y2={464.6}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.16} stopColor="#fffdf8" />
          <stop offset={0.38} stopColor="#fff7e6" />
          <stop offset={0.65} stopColor="#ffedc8" />
          <stop offset={0.93} stopColor="#ffdf9f" />
          <stop offset={1} stopColor="#ffdb94" />
        </linearGradient>
      </defs>
      <g
        style={{
          isolation: 'isolate',
        }}
      >
        <g id="Layer_2" data-name="Layer 2">
          <rect
            x={22.62}
            y={550.06}
            width={1317.31}
            height={211.63}
            transform="translate(1339.93 1304.43) rotate(-180)"
            style={{
              opacity: 0.53,
              mixBlendMode: 'multiply',
              fill: 'url(#linear-gradient-2)',
            }}
          />
        </g>
        <g id="Layer_1" data-name="Layer 1">
          <path
            d="M1017.14,461.81c0-69.11-55.86-125.14-124.76-125.14s-124.76,56-124.76,125.14a125,125,0,0,0,36.66,88.62h176.2A125,125,0,0,0,1017.14,461.81Z"
            transform="translate(-22.62 -7.33)"
            style={{
              fill: '#ffd505',
            }}
          />
          <g id="car">
            <path
              d="M1343.64,394.72v-27.2h0l-.76-10.33a11,11,0,0,0-11-10.2h-48.7a6.07,6.07,0,0,0-6.07,5.68l-1,15h0V369h0v.49h1.11v15.12a6.35,6.35,0,0,0-1.52,4.12v.35h0v.77h0v5.51h3a5.79,5.79,0,0,0,11.43,0h21.39a5.79,5.79,0,0,0,11.44,0h22.22v-.68Z"
              transform="translate(-22.62 -7.33)"
              style={{
                fill: '#fff',
              }}
            />
            <g
              style={{
                opacity: 0.56,
              }}
            >
              <rect
                x={1284.39}
                y={362.85}
                width={36.24}
                height={25.22}
                style={{
                  fill: '#ad0404',
                }}
              />
              <rect
                x={1284.39}
                y={384.57}
                width={36.24}
                height={3.5}
                style={{
                  fill: '#3f2626',
                }}
              />
              <rect
                x={1254.61}
                y={362.09}
                width={15.08}
                height={19.52}
                style={{
                  fill: '#c00',
                }}
              />
              <path
                d="M1292.06,381.08h-14.32v-8a2.23,2.23,0,0,1,2.23-2.24h12.09Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#101d23',
                }}
              />
              <path
                d="M1329,387.16v-.38h-1.19v-5.45H1329a.33.33,0,0,1,.33.32v4.81a.33.33,0,0,1-.33.32v.76a1.09,1.09,0,0,0,1.09-1.08v-4.81a1.09,1.09,0,0,0-1.09-1.08h-2v7h2Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#fc6',
                }}
              />
              <rect
                x={1312.74}
                y={363.31}
                width={0.68}
                height={24.08}
                style={{
                  fill: '#fc6',
                }}
              />
              <path
                d="M1289.81,367.52v2h-12.37l11.1,1.36a1.45,1.45,0,0,1,1.27,1.45V395.4h38.62V376.8a5.43,5.43,0,0,1,4.68-5.38l8-1.14a.65.65,0,0,1,.74.65V395.4h1.78V367.52Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#f33',
                }}
              />
              <path
                d="M1343.64,367.64h-67.52l1-15a6.07,6.07,0,0,1,6.07-5.68h48.7a11,11,0,0,1,11,10.2Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#f33',
                }}
              />
              <path
                d="M1295.58,395.4h-19.87v-6.63a6.37,6.37,0,0,1,5.48-6.31l14.39-2Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#f33',
                }}
              />
              <rect
                x={1253.5}
                y={360.31}
                width={67.52}
                height={1.39}
                style={{
                  fill: '#fff',
                }}
              />
              <polyline
                points="1253.08 382.56 1305.88 382.56 1305.88 381.79 1253.08 381.79"
                style={{
                  fill: '#c10505',
                }}
              />
              <rect
                x={1253.5}
                y={361.71}
                width={67.51}
                height={0.49}
                style={{
                  fill: '#c10505',
                }}
              />
              <path
                d="M1291,395.4h-12.92v-1.65a6.21,6.21,0,0,1,6.21-6.21h.5a6.21,6.21,0,0,1,6.21,6.21Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#101d23',
                }}
              />
              <circle
                cx={1261.84}
                cy={387.15}
                r={5.8}
                style={{
                  fill: '#1f3440',
                }}
              />
              <circle
                cx={1261.71}
                cy={387.09}
                r={2.74}
                style={{
                  fill: '#101d23',
                }}
              />
              <path
                d="M1323.87,395.4h-12.93v-1.65a6.21,6.21,0,0,1,6.21-6.21h.51a6.21,6.21,0,0,1,6.21,6.21Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#101d23',
                }}
              />
              <circle
                cx={1294.66}
                cy={387.15}
                r={5.8}
                style={{
                  fill: '#1f3440',
                }}
              />
              <path
                d="M1319.89,394.42a2.74,2.74,0,1,1-2.74-2.74A2.74,2.74,0,0,1,1319.89,394.42Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#101d23',
                }}
              />
              <rect
                x={1304.23}
                y={387.39}
                width={18.38}
                height={0.68}
                style={{
                  fill: '#f33',
                }}
              />
              <rect
                x={1269.76}
                y={366.02}
                width={12.93}
                height={6.59}
                rx={1.85}
                style={{
                  fill: '#101d23',
                }}
              />
              <rect
                x={1287.18}
                y={366.02}
                width={12.93}
                height={6.59}
                rx={1.85}
                style={{
                  fill: '#101d23',
                }}
              />
              <rect
                x={1267.67}
                y={367.79}
                width={33.79}
                height={0.43}
                style={{
                  fill: '#f33',
                }}
              />
              <rect
                x={1269.76}
                y={343.54}
                width={12.93}
                height={6.59}
                rx={1.85}
                style={{
                  fill: '#101d23',
                }}
              />
              <path
                d="M1287.08,357.46h-7.43a1.52,1.52,0,0,1-1.51-1.7l.38-3a2.11,2.11,0,0,1,2.09-1.85h6.47a1.51,1.51,0,0,1,1.51,1.52V356A1.51,1.51,0,0,1,1287.08,357.46Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#101d23',
                }}
              />
              <path
                d="M1328.69,357.46h7.43a1.52,1.52,0,0,0,1.51-1.7l-.38-3a2.11,2.11,0,0,0-2.09-1.85h-6.47a1.52,1.52,0,0,0-1.51,1.52V356A1.52,1.52,0,0,0,1328.69,357.46Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#101d23',
                }}
              />
              <rect
                x={1287.18}
                y={343.54}
                width={12.93}
                height={6.59}
                rx={1.85}
                style={{
                  fill: '#101d23',
                }}
              />
              <rect
                x={1255.42}
                y={345.32}
                width={59.76}
                height={0.44}
                style={{
                  fill: '#f33',
                }}
              />
              <path
                d="M1301.18,385.2h-.38A2.56,2.56,0,0,1,1300,387a2.78,2.78,0,0,1-3.82,0,2.55,2.55,0,0,1,0-3.67,2.78,2.78,0,0,1,3.82,0,2.59,2.59,0,0,1,.78,1.84h.76a3.45,3.45,0,1,0-3.45,3.35,3.4,3.4,0,0,0,3.45-3.35Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#fff',
                }}
              />
              <rect
                x={1270.83}
                y={376.47}
                width={9.19}
                height={1.71}
                style={{
                  fill: '#fff',
                }}
              />
            </g>
          </g>
          <g>
            <rect
              x={847.2}
              y={395.9}
              width={18.06}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="874.23 408.6 853.94 408.6 874.23 433.99 874.23 408.6"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={968.9}
              y={395.9}
              width={13.88}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="830.95 404.8 840.27 404.8 840.27 405.59 845.2 405.59 845.2 395.9 830.95 395.9 830.95 404.8"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={888.05}
              y={395.9}
              width={18.06}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={867.26}
              y={395.9}
              width={18.8}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="897.34 408.6 877.91 408.6 897.34 430.4 897.34 408.6"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={988.15}
              y={395.91}
              width={13.88}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="969.17 408.6 951.17 408.6 969.17 422.96 969.17 408.6"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="921.78 408.6 901.23 408.6 921.78 427.89 921.78 408.6"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={908.11}
              y={395.9}
              width={17.93}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="946.89 408.6 926.06 408.6 946.89 425.29 946.89 408.6"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1140.2 215.88 1132.2 215.88 1132.2 208.06 836.65 208.06 836.65 215.88 830.95 215.88 830.95 273.02 830.98 273.02 830.98 274.8 830.95 274.8 830.95 283.58 830.98 283.58 830.98 285.36 830.95 285.36 830.95 341.53 830.98 341.53 830.98 343.3 830.95 343.3 830.95 352.08 830.98 352.08 830.98 353.86 830.95 353.86 830.95 392.9 985.78 392.9 985.78 392.91 1140.2 392.91 1140.2 215.88"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={1004.03}
              y={395.91}
              width={18.79}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1125.74 405.59 1132.43 405.59 1132.43 404.8 1140.2 404.8 1140.2 395.91 1125.74 395.91 1125.74 405.59"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="982.8 419.95 982.8 408.6 972.45 408.6 982.8 419.95"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1001.76 408.6 1001.76 422.97 1019.76 408.6 1001.76 408.6"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={948.11}
              y={395.9}
              width={18.8}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={1105.68}
              y={395.91}
              width={18.06}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={1024.83}
              y={395.91}
              width={18.06}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1024.04 408.6 1024.04 425.29 1044.88 408.6 1024.04 408.6"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={1084.88}
              y={395.91}
              width={18.8}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={1044.89}
              y={395.91}
              width={17.93}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={1064.82}
              y={395.91}
              width={18.06}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={928.04}
              y={395.9}
              width={18.06}
              height={9.68}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1132.43 408.6 1120.48 408.6 1120.48 436.65 1132.43 419.47 1132.43 408.6"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={1081.29}
              y={174.14}
              width={50.91}
              height={21.43}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1118.48 409.94 1097.67 435.99 1118.48 438.56 1118.48 409.94"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1047.15 409.34 1025.08 427.03 1047.15 429.75 1047.15 409.34"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={1008.21}
              y={174.14}
              width={51.65}
              height={21.43}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1094.71 409.71 1073.91 433.05 1094.71 435.62 1094.71 409.71"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1071.59 409.56 1049.75 430.07 1071.59 432.77 1071.59 409.56"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1049.15 408.6 1049.15 427.89 1069.7 408.6 1049.15 408.6"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="840.27 425.51 840.27 440.06 849.59 438.91 840.27 425.51"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={909.69}
              y={174.14}
              width={51.51}
              height={21.43}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1121.35 438.91 1132.43 440.28 1132.43 422.98 1121.35 438.91"
              style={{
                fill: 'none',
              }}
            />
            <rect
              x={836.65}
              y={174.14}
              width={51.61}
              height={21.43}
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="876.23 409.71 876.23 435.62 897.03 433.05 876.23 409.71"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="899.34 409.56 899.34 432.77 921.19 430.07 899.34 409.56"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="852.45 409.94 852.45 438.55 873.26 435.99 852.45 409.94"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="923.78 409.33 923.78 429.75 945.86 427.02 923.78 409.33"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1073.59 408.6 1073.59 430.4 1093.02 408.6 1073.59 408.6"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="850.45 408.6 840.27 408.6 840.27 422.01 850.45 436.65 850.45 408.6"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1096.71 408.6 1096.71 434 1117 408.6 1096.71 408.6"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="999.76 410.17 988.5 422.51 999.76 423.9 999.76 410.17"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="1022.04 409.33 1003.26 424.33 1022.04 426.65 1022.04 409.33"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="988.13 408.6 988.13 419.95 998.49 408.6 988.13 408.6"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="971.17 410.17 971.17 423.9 982.43 422.51 971.17 410.17"
              style={{
                fill: 'none',
              }}
            />
            <polygon
              points="948.89 409.33 948.89 426.65 967.68 424.33 948.89 409.33"
              style={{
                fill: 'none',
              }}
            />
            <path
              d="M1276.31,412.13V361.19h0v-1.77h0v-8.79h0v-1.77h0V292.69h0v-1.78h0v-8.78h0v-1.78h0V223.21h5.7V101.83h.27l-7.19-63.46a1.22,1.22,0,0,0,0-2.44h-3.24V27.34h5.4a.58.58,0,1,0,0-1.16h-5.4V21.1a.75.75,0,0,0-1.5,0v5.08h-4.74a.58.58,0,0,0,0,1.16h4.74v8.59h-2.85a1.22,1.22,0,0,0,0,2.44h.09l-7.19,63.46H1260v1.93h-6.79l-20.88-74.92h1.23a1.09,1.09,0,0,0,0-2.17h-4.8V25h-7.67l-1-5.65h-2V8.08a.76.76,0,0,0-.75-.75h-.4a.76.76,0,0,0-.75.75V19.36h-1.6l-1,5.65h-6.78v1.66h-4.47a1.09,1.09,0,0,0,0,2.17h1.43L1183,103.76h-6.21v-1.93h-.06l-7.19-63.46a1.22,1.22,0,0,0,0-2.44h-3.24V27.34h5.4a.58.58,0,1,0,0-1.16h-5.4V21.1a.75.75,0,0,0-1.5,0v5.08h-4.74a.58.58,0,0,0,0,1.16h4.74v8.59H1162a1.22,1.22,0,0,0,0,2.44h.1l-7.19,63.46h0v76.65h-124v-16h.55a1.33,1.33,0,1,0,0-2.66h-2a3.11,3.11,0,1,0-2.27,0h-1.62a1.33,1.33,0,1,0,0,2.66h.22v4.95h-36.8v-4.95h.55a1.33,1.33,0,1,0,0-2.66h-2a3.11,3.11,0,1,0-2.27,0h-1.62a1.33,1.33,0,0,0,0,2.66h.22v16H859.27V101.83h.27l-7.19-63.46a1.22,1.22,0,0,0,0-2.44h-3.25V27.34h5.41a.58.58,0,0,0,0-1.16h-5.41V21.1a.75.75,0,0,0-1.49,0v5.08h-4.74a.58.58,0,1,0,0,1.16h4.74v8.59h-2.86a1.22,1.22,0,0,0,0,2.44h.1l-7.19,63.46h-.38v1.93h-6.8L809.6,28.84h1.22a1.09,1.09,0,0,0,0-2.17H806V25h-7.67l-1-5.65h-1.95V8.08a.75.75,0,0,0-.74-.75h-.4a.76.76,0,0,0-.75.75V19.36h-1.61L791,25h-6.78v1.66h-4.46a1.09,1.09,0,0,0,0,2.17h1.43l-20.87,74.92h-6.22v-1.93H754l-7.19-63.46a1.22,1.22,0,0,0,0-2.44h-3.24V27.34H749a.58.58,0,0,0,0-1.16h-5.4V21.1a.75.75,0,0,0-1.5,0v5.08h-4.74a.58.58,0,1,0,0,1.16h4.74v8.59h-2.85a1.22,1.22,0,0,0,0,2.44h.09l-7.19,63.46h0V223.21h8V412.13h-7.77v52.5h20.9v.17h86v-.17h23.72V450.41l145.18-17.92,1,.12,146,18v14H1176v.17h86v-.17h23.71v-52.5Zm-251.93,3.8h18l-18,14.37Zm-19,11.35-10.36-11.35h10.36Zm40-24v9.68h-18.8v-9.68Zm117.37,8.89h-7.77v.79h-6.69v-9.68h14.46Zm-16.46.79H1128.3v-9.68h18.06Zm-20.06,0h-18.8v-9.68h18.8Zm-20.8,0h-18.06v-9.68h18.06Zm-20.06,0h-17.93v-9.68h17.93Zm-19.93,0h-18.06v-9.68h18.06Zm97.31-12.68H853.57v-39h0v-1.77h0v-8.79h0v-1.77h0V292.69h0v-1.78h0v-8.78h0v-1.78h0V223.21h5.7V215.4h295.55v7.81h8Zm-192.1,12.68v-9.69h18.8v9.69Zm-2,0H950.66v-9.69h18.06Zm-20.06,0H930.73v-9.69h17.93Zm-19.93,0H910.67v-9.69h18.06Zm-20.06,0H889.88v-9.69h18.79Zm-20.79,0H869.81v-9.69h18.07Zm-20.07,0h-4.92v-.79h-9.32v-8.9h14.24Zm123.71,0v-9.69h13.88v9.69Zm-94.67,3v25.4l-20.29-25.4Zm23.11,0v21.8l-19.43-21.8Zm24.44,0v19.29l-20.55-19.29Zm25.11,0v16.69l-20.83-16.69Zm22.28,0V430.3l-18-14.37Zm19-12.69h13.88v9.68h-13.88Zm35.89,12.69h20.83l-20.83,16.69Zm25.11,0h20.55l-20.55,19.29Zm24.44,0h19.43l-19.43,21.8Zm23.11,0h20.3l-20.3,25.4Zm-256.43,0h10.18V444l-10.18-14.64Zm12.18,1.34,20.81,26.05-20.81,2.56Zm23.78-.23,20.8,23.34L898.85,443Zm23.11-.15L943.8,437.4,922,440.1Zm24.44-.22,22.08,17.69-22.08,2.72Zm25.11,0,18.78,15L971.51,434Zm22.28.84,11.26,12.34-11.26,1.39Zm17-1.57h10.36l-10.36,11.36Zm11.63,1.57v13.73l-11.26-1.39Zm22.28-.84V434l-18.78-2.32Zm25.11,0v20.41l-22.08-2.72Zm24.44.23v23.2l-21.84-2.7Zm23.11.14V443l-20.79-2.56Zm23.78.23v28.62l-20.81-2.57Zm2-1.34h12V426.8l-12,17.19Zm11.72-234.45V202.9H1103.9V181.48Zm-72.35,0V202.9h-51.64V181.48Zm-98.64,0V202.9H932.31V181.48Zm-73,0V202.9H859.27V181.48Zm-48,251.37,9.31,13.39-9.31,1.15ZM1144,446.24l11.08-15.93v17.3Z"
              transform="translate(-22.62 -7.33)"
              style={{
                fill: '#fff',
              }}
            />
          </g>
          <g
            id="cld2"
            style={{
              opacity: 0.8200000000000001,
            }}
          >
            <path
              d="M1103.07,116.51a24.67,24.67,0,0,0-13.23,3.82,29.48,29.48,0,0,0-56.43,6.23,16.2,16.2,0,0,0-3.06-.29A16.39,16.39,0,0,0,1014,141.34H1127.9A24.83,24.83,0,0,0,1103.07,116.51Z"
              transform="translate(-22.62 -7.33)"
              style={{
                fill: '#fcf3e0',
              }}
            />
          </g>
          <g
            style={{
              opacity: 0.49,
            }}
          >
            <line
              x1={271.98}
              y1={692.3}
              x2={286.71}
              y2={692.3}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={284.39}
              y1={682.1}
              x2={299.12}
              y2={682.1}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={298.58}
              y1={692.07}
              x2={313.31}
              y2={692.07}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={334.94}
              y1={692.07}
              x2={349.67}
              y2={692.07}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={351.34}
              y1={680.55}
              x2={366.07}
              y2={680.55}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={229.85}
              y1={650.84}
              x2={244.58}
              y2={650.84}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={211.23}
              y1={664.58}
              x2={225.96}
              y2={664.58}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={117.68}
              y1={664.58}
              x2={132.41}
              y2={664.58}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={101.27}
              y1={677}
              x2={116}
              y2={677}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={134.08}
              y1={677}
              x2={148.81}
              y2={677}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={21.46}
              y1={719.12}
              x2={36.19}
              y2={719.12}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={166.01}
              y1={652.61}
              x2={180.74}
              y2={652.61}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={418.74}
              y1={661.92}
              x2={433.47}
              y2={661.92}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={495.89}
              y1={676.11}
              x2={510.62}
              y2={676.11}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={512.29}
              y1={686.31}
              x2={527.02}
              y2={686.31}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={606.29}
              y1={718.68}
              x2={621.02}
              y2={718.68}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={618.93}
              y1={704.71}
              x2={633.66}
              y2={704.71}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={649.52}
              y1={717.35}
              x2={664.25}
              y2={717.35}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={342.92}
              y1={737.96}
              x2={357.65}
              y2={737.96}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={192.61}
              y1={726.66}
              x2={207.34}
              y2={726.66}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={785.2}
              y1={710.03}
              x2={799.93}
              y2={710.03}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={934.84}
              y1={650.17}
              x2={949.57}
              y2={650.17}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={920.87}
              y1={664.14}
              x2={935.6}
              y2={664.14}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={956.79}
              y1={664.14}
              x2={971.52}
              y2={664.14}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={767.24}
              y1={579.67}
              x2={781.97}
              y2={579.67}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={697.63}
              y1={575.68}
              x2={712.36}
              y2={575.68}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={900.26}
              y1={604.95}
              x2={914.99}
              y2={604.95}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={872.32}
              y1={579.23}
              x2={887.05}
              y2={579.23}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={965.44}
              y1={578.34}
              x2={980.16}
              y2={578.34}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={978.74}
              y1={591.2}
              x2={993.47}
              y2={591.2}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={749.73}
              y1={593.64}
              x2={764.46}
              y2={593.64}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={785.64}
              y1={593.64}
              x2={800.37}
              y2={593.64}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={847.72}
              y1={638.2}
              x2={862.45}
              y2={638.2}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={867}
              y1={740.62}
              x2={881.73}
              y2={740.62}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={717.36}
              y1={691.41}
              x2={732.09}
              y2={691.41}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={793.84}
              y1={675.45}
              x2={808.57}
              y2={675.45}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={467.51}
              y1={715.24}
              x2={482.24}
              y2={715.24}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={479.93}
              y1={705.04}
              x2={494.65}
              y2={705.04}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
            <line
              x1={494.11}
              y1={715.02}
              x2={508.84}
              y2={715.02}
              style={{
                fill: 'none',
                stroke: '#f9c44e',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
              }}
            />
          </g>
          <g
            style={{
              opacity: 0.56,
            }}
          >
            <g
              style={{
                mask: 'url(#mask)',
              }}
            >
              <g>
                <g>
                  <line
                    x1={1286.44}
                    y1={266.42}
                    x2={1323.01}
                    y2={267.42}
                    style={{
                      fill: 'none',
                      stroke: '#ffe499',
                      strokeMiterlimit: 10,
                      strokeWidth: '1.5px',
                    }}
                  />
                  <line
                    x1={1288.76}
                    y1={232.83}
                    x2={1321.68}
                    y2={311.98}
                    style={{
                      fill: 'none',
                      stroke: '#ffe499',
                      strokeMiterlimit: 10,
                      strokeWidth: '1.5px',
                    }}
                  />
                  <line
                    x1={1286.1}
                    y1={229.43}
                    x2={1286.1}
                    y2={393.45}
                    style={{
                      fill: 'none',
                      stroke: '#ffe499',
                      strokeMiterlimit: 10,
                      strokeWidth: '1.5px',
                    }}
                  />
                  <path
                    d="M1363.59,286.06c-43.9-17-82.8-94.78-82.8-94.78s9,87,78.28,140.15"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#5bb8c4',
                      strokeMiterlimit: 10,
                      strokeWidth: 3,
                    }}
                  />
                </g>
                <polyline
                  points="1324.57 406.42 1246.2 406.42 1246.2 394.45 1324.57 394.45"
                  style={{
                    fill: 'none',
                    stroke: '#5bb8c4',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
                <g>
                  <line
                    x1={1273.13}
                    y1={394.45}
                    x2={1273.13}
                    y2={406.09}
                    style={{
                      fill: 'none',
                      stroke: '#5bb8c4',
                      strokeMiterlimit: 10,
                      strokeWidth: 2,
                    }}
                  />
                  <line
                    x1={1293.58}
                    y1={394.45}
                    x2={1293.58}
                    y2={406.09}
                    style={{
                      fill: 'none',
                      stroke: '#5bb8c4',
                      strokeMiterlimit: 10,
                      strokeWidth: 2,
                    }}
                  />
                  <line
                    x1={1315.86}
                    y1={394.45}
                    x2={1315.86}
                    y2={406.09}
                    style={{
                      fill: 'none',
                      stroke: '#5bb8c4',
                      strokeMiterlimit: 10,
                      strokeWidth: 2,
                    }}
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <line
                  x1={683.21}
                  y1={266.42}
                  x2={646.63}
                  y2={267.42}
                  style={{
                    fill: 'none',
                    stroke: '#ffe499',
                    strokeMiterlimit: 10,
                    strokeWidth: '1.5px',
                  }}
                />
                <line
                  x1={680.88}
                  y1={232.83}
                  x2={647.96}
                  y2={311.98}
                  style={{
                    fill: 'none',
                    stroke: '#ffe499',
                    strokeMiterlimit: 10,
                    strokeWidth: '1.5px',
                  }}
                />
                <line
                  x1={683.54}
                  y1={229.43}
                  x2={683.54}
                  y2={393.45}
                  style={{
                    fill: 'none',
                    stroke: '#ffe499',
                    strokeMiterlimit: 10,
                    strokeWidth: '1.5px',
                  }}
                />
                <line
                  x1={646.29}
                  y1={268.86}
                  x2={646.29}
                  y2={393.45}
                  style={{
                    fill: 'none',
                    stroke: '#ffe499',
                    strokeMiterlimit: 10,
                    strokeWidth: '1.5px',
                  }}
                />
                <path
                  d="M651.29,286.06c43.89-17,82.8-94.78,82.8-94.78s-9,87-78.28,140.15"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#5bb8c4',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
              </g>
              <polyline
                points="631.99 406.42 723.44 406.42 723.44 394.45 631.99 394.45"
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <g>
                <line
                  x1={696.51}
                  y1={394.45}
                  x2={696.51}
                  y2={406.09}
                  style={{
                    fill: 'none',
                    stroke: '#5bb8c4',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }}
                />
                <line
                  x1={676.06}
                  y1={394.45}
                  x2={676.06}
                  y2={406.09}
                  style={{
                    fill: 'none',
                    stroke: '#5bb8c4',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }}
                />
                <line
                  x1={653.78}
                  y1={394.45}
                  x2={653.78}
                  y2={406.09}
                  style={{
                    fill: 'none',
                    stroke: '#5bb8c4',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }}
                />
              </g>
            </g>
            <rect
              x={835.18}
              y={198.41}
              width={305.78}
              height={8.43}
              style={{
                fill: '#71adad',
              }}
            />
            <g>
              <line
                x1={846.2}
                y1={394.34}
                x2={846.2}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={866.26}
                y1={394.34}
                x2={866.26}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={887.05}
                y1={394.34}
                x2={887.05}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={907.11}
                y1={394.34}
                x2={907.11}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={927.04}
                y1={394.34}
                x2={927.04}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={947.11}
                y1={394.34}
                x2={947.11}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={967.9}
                y1={394.34}
                x2={967.9}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <path
                d="M850.47,415l22.78,32.75,1.82-.57v-29.9l22,27.53,1.78-.62V417l21.36,24,1.75-.66V416.89l22.76,21.37,1.68-.73V416.67l23.48,18.81,1.63-.78v-18l20.66,16.5,1.62-.79V417.5l12.06,13.22a1,1,0,0,0,1.48-1.35l-13.8-15.13-1.74.68V430.3l-20.66-16.5-1.62.78v18L946,413.8l-1.63.78v20.64l-22.75-21.37-1.69.73v23.15l-21.36-24-1.75.67v26.91l-22-27.54-1.78.63V444l-21-30.13a1,1,0,0,0-1.39-.25,1,1,0,0,0-.25,1.39Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#afe5e8',
                }}
              />
              <rect
                x={828.69}
                y={394.4}
                width={155.59}
                height={12.69}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <polygon
                points="984.3 423.79 828.67 443 828.67 407.09 984.3 407.09 984.3 423.79"
                style={{
                  fill: 'none',
                  stroke: '#afe5e8',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
            </g>
            <g>
              <line
                x1={1124.74}
                y1={394.34}
                x2={1124.74}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={1104.68}
                y1={394.34}
                x2={1104.68}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={1083.88}
                y1={394.34}
                x2={1083.88}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={1063.82}
                y1={394.34}
                x2={1063.82}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={1043.89}
                y1={394.34}
                x2={1043.89}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={1023.83}
                y1={394.34}
                x2={1023.83}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={1003.03}
                y1={394.34}
                x2={1003.03}
                y2={406.09}
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <path
                d="M1165.7,415l-22.78,32.76-1.82-.58v-29.9l-22,27.54-1.78-.63V417L1096,441l-1.75-.66V416.9l-22.76,21.36-1.68-.73V416.67l-23.48,18.81-1.63-.78v-18L1024,433.16l-1.63-.78V417.5l-12.06,13.22a1,1,0,0,1-1.41.07,1,1,0,0,1-.07-1.42l13.8-15.13,1.74.68V430.3L1045,413.8l1.62.79v18l23.48-18.81,1.63.78v20.63l22.76-21.36,1.68.73v23.14l21.37-24,1.74.67v26.91l22-27.53,1.78.62V444l21-30.14a1,1,0,0,1,1.64,1.14Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#afe5e8',
                }}
              />
              <rect
                x={1009.27}
                y={401.74}
                width={155.59}
                height={12.69}
                transform="translate(2151.52 808.83) rotate(-180)"
                style={{
                  fill: 'none',
                  stroke: '#5bb8c4',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <polygon
                points="986.63 423.79 1142.26 443 1142.26 407.09 986.63 407.09 986.63 423.79"
                style={{
                  fill: 'none',
                  stroke: '#afe5e8',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
            </g>
            <rect
              x={832.85}
              y={172.64}
              width={57.01}
              height={25.94}
              style={{
                fill: 'none',
                stroke: '#5bb8c4',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <rect
              x={908.2}
              y={172.64}
              width={57.01}
              height={25.94}
              style={{
                fill: 'none',
                stroke: '#5bb8c4',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <rect
              x={912.38}
              y={179.98}
              width={18.43}
              height={25.94}
              transform="translate(1820.58 378.56) rotate(180)"
              style={{
                fill: '#ffeec4',
                stroke: '#afe5e8',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <rect
              x={1004.44}
              y={172.64}
              width={57.01}
              height={25.94}
              style={{
                fill: 'none',
                stroke: '#5bb8c4',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <rect
              x={987.73}
              y={168.91}
              width={39.33}
              height={37.01}
              transform="translate(1992.17 367.49) rotate(180)"
              style={{
                fill: '#ffeec4',
                stroke: '#afe5e8',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <path
              d="M993.55,205.91h27.28V188.64a13.89,13.89,0,0,0-8.18-12.66l-5.88-2.66-5.33,2.57a13.89,13.89,0,0,0-7.89,12.52Z"
              transform="translate(-22.62 -7.33)"
              style={{
                fill: '#fff',
              }}
            />
            <rect
              x={1079.79}
              y={172.64}
              width={57.01}
              height={25.94}
              style={{
                fill: 'none',
                stroke: '#5bb8c4',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <rect
              x={1083.97}
              y={179.98}
              width={18.43}
              height={25.94}
              transform="translate(2163.76 378.56) rotate(180)"
              style={{
                fill: '#ffeec4',
                stroke: '#afe5e8',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <rect
              x={835.18}
              y={195.57}
              width={305.78}
              height={7.22}
              style={{
                fill: '#afe5e8',
              }}
            />
            <rect
              x={835.18}
              y={205.23}
              width={305.78}
              height={2.84}
              style={{
                fill: '#afe5e8',
              }}
            />
            <g>
              <rect
                x={770.93}
                width={1.89}
                height={21.45}
                rx={0.75}
                style={{
                  fill: '#f4d3a2',
                }}
              />
              <polygon
                points="777.09 25.55 767.01 25.55 769.33 12.03 774.77 12.03 777.09 25.55"
                style={{
                  fill: '#eab875',
                }}
              />
              <rect
                x={761.57}
                y={17.68}
                width={21.84}
                height={4.21}
                style={{
                  fill: '#f4d3a2',
                }}
              />
              <rect
                x={709.46}
                y={96.43}
                width={126.97}
                height={119.44}
                style={{
                  fill: '#86b79a',
                }}
              />
              <polygon
                points="813.89 118.11 731.63 118.11 759.05 19.68 786.47 19.68 813.89 118.11"
                style={{
                  fill: '#a3d3b8',
                }}
              />
              <polygon
                points="792.83 154.91 750.27 154.91 750.27 95.5 771.11 68.78 792.83 95.5 792.83 154.91"
                style={{
                  fill: '#f4d3a2',
                }}
              />
              <rect
                x={717.46}
                y={207.89}
                width={113.06}
                height={249.41}
                style={{
                  fill: '#f4d3a2',
                }}
              />
              <rect
                x={717.46}
                y={215.87}
                width={113.06}
                height={4.02}
                style={{
                  fill: '#d3a56a',
                }}
              />
              <rect
                x={717.46}
                y={207.89}
                width={19.71}
                height={249.41}
                style={{
                  fill: '#ffedd4',
                }}
              />
              <rect
                x={811.23}
                y={207.89}
                width={19.71}
                height={249.41}
                style={{
                  fill: '#ffedd4',
                }}
              />
              <rect
                x={717.46}
                y={207.89}
                width={19.71}
                height={12.64}
                style={{
                  fill: '#f9ddbb',
                }}
              />
              <rect
                x={811.23}
                y={207.89}
                width={19.71}
                height={12.64}
                style={{
                  fill: '#f9ddbb',
                }}
              />
              <rect
                x={709.69}
                y={404.8}
                width={130.58}
                height={52.5}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <g>
                <g>
                  <rect
                    x={737.2}
                    y={344.69}
                    width={74.05}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                  <rect
                    x={737.2}
                    y={355.24}
                    width={74.05}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={740.08}
                    y={348.86}
                    width={19.74}
                    height={1.77}
                    transform="translate(1477.28 692.16) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={740.08}
                    y={359.42}
                    width={19.74}
                    height={1.77}
                    transform="translate(1477.28 713.27) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={833.85}
                    y={348.86}
                    width={19.74}
                    height={1.77}
                    transform="translate(1664.83 692.16) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={833.85}
                    y={359.42}
                    width={19.74}
                    height={1.77}
                    transform="translate(1664.83 713.27) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
              </g>
              <path
                d="M839.17,455.82c0-5.84-15.14-11.9-27.43-15.86a50.61,50.61,0,0,0-30.94,0c-12.35,4-27.59,10-27.59,15.88,0,.05,0,.11,0,.16h0v8.82h86V456h0C839.16,455.93,839.17,455.87,839.17,455.82Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#fff1dc',
                }}
              />
              <g>
                <g>
                  <rect
                    x={737.2}
                    y={276.18}
                    width={74.05}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                  <rect
                    x={737.2}
                    y={286.74}
                    width={74.05}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={740.08}
                    y={280.35}
                    width={19.74}
                    height={1.77}
                    transform="translate(1477.28 555.15) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={740.08}
                    y={290.91}
                    width={19.74}
                    height={1.77}
                    transform="translate(1477.28 576.27) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={833.85}
                    y={280.35}
                    width={19.74}
                    height={1.77}
                    transform="translate(1664.83 555.15) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={833.85}
                    y={290.91}
                    width={19.74}
                    height={1.77}
                    transform="translate(1664.83 576.27) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
              </g>
              <rect
                x={709.46}
                y={117.56}
                width={126.97}
                height={98.31}
                style={{
                  fill: '#f4d3a2',
                }}
              />
              <rect
                x={709.46}
                y={94.5}
                width={22}
                height={121.38}
                style={{
                  fill: '#ffedd4',
                }}
              />
              <rect
                x={814.65}
                y={94.5}
                width={22}
                height={121.38}
                style={{
                  fill: '#ffedd4',
                }}
              />
              <g>
                <g>
                  <rect
                    x={731.56}
                    y={200.36}
                    width={82.8}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                  <rect
                    x={731.56}
                    y={210.92}
                    width={82.8}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={732.09}
                    y={204.53}
                    width={22.08}
                    height={1.77}
                    transform="translate(1463.65 403.51) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={732.09}
                    y={215.09}
                    width={22.08}
                    height={1.77}
                    transform="translate(1463.65 424.63) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={836.96}
                    y={204.53}
                    width={22.08}
                    height={1.77}
                    transform="translate(1673.39 403.51) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={836.96}
                    y={215.09}
                    width={22.08}
                    height={1.77}
                    transform="translate(1673.39 424.63) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x={731.56}
                    y={128.87}
                    width={82.8}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                  <rect
                    x={731.56}
                    y={139.42}
                    width={82.8}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={732.09}
                    y={133.04}
                    width={22.08}
                    height={1.77}
                    transform="translate(1463.65 260.52) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={732.09}
                    y={143.6}
                    width={22.08}
                    height={1.77}
                    transform="translate(1463.65 281.64) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={836.96}
                    y={133.04}
                    width={22.08}
                    height={1.77}
                    transform="translate(1673.39 260.52) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={836.96}
                    y={143.6}
                    width={22.08}
                    height={1.77}
                    transform="translate(1673.39 281.64) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
              </g>
              <g>
                <path
                  d="M777.17,394.46H771v-6.62a4.6,4.6,0,0,1,1.35-3.24l1.55-1.55,1.7,1.53a4.59,4.59,0,0,1,1.53,3.41Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M777.17,379H771v-6.62a4.58,4.58,0,0,1,1.35-3.24l1.55-1.56,1.7,1.53a4.59,4.59,0,0,1,1.53,3.42Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M821.39,394.46h-6.12v-6.62a4.6,4.6,0,0,1,1.35-3.24l1.55-1.55,1.7,1.53a4.58,4.58,0,0,1,1.52,3.41Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M821.39,379h-6.12v-6.62a4.58,4.58,0,0,1,1.35-3.24l1.55-1.56,1.7,1.53a4.58,4.58,0,0,1,1.52,3.42Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M794.06,394.08h-4.77V378a6,6,0,0,1,1.05-3.48l1.21-1.66,1.32,1.64a5.84,5.84,0,0,1,1.19,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M801.87,394.08h-4.76V378a6,6,0,0,1,1-3.48l1.21-1.66,1.33,1.64a5.9,5.9,0,0,1,1.18,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <rect
                  x={748.38}
                  y={393.97}
                  width={6.19}
                  height={7.05}
                  style={{
                    fill: '#c99250',
                  }}
                />
                <rect
                  x={792.61}
                  y={393.97}
                  width={6.19}
                  height={7.05}
                  style={{
                    fill: '#c99250',
                  }}
                />
                <rect
                  x={766.67}
                  y={394.06}
                  width={4.82}
                  height={7.18}
                  style={{
                    fill: '#c99250',
                  }}
                />
                <rect
                  x={774.74}
                  y={394.06}
                  width={4.82}
                  height={7.18}
                  style={{
                    fill: '#c99250',
                  }}
                />
              </g>
              <g>
                <path
                  d="M794.06,336.66h-4.77V320.58a6,6,0,0,1,1.05-3.49l1.21-1.66,1.32,1.64a5.86,5.86,0,0,1,1.19,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M776.54,336.66h-5.87V320.58a5.24,5.24,0,0,1,1.29-3.49l1.49-1.66,1.63,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M821.27,336.66H815.4V320.58a5.24,5.24,0,0,1,1.29-3.49l1.48-1.66,1.64,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M801.87,336.66h-4.76V320.58a6,6,0,0,1,1-3.49l1.21-1.66,1.33,1.64a5.92,5.92,0,0,1,1.18,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
              </g>
              <g>
                <path
                  d="M790.23,176h-4.76V159.88a6,6,0,0,1,1-3.49l1.21-1.66,1.33,1.64a5.92,5.92,0,0,1,1.18,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M775.38,176H769.5V159.88a5.29,5.29,0,0,1,1.29-3.49l1.49-1.66,1.64,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M821.93,176h-5.87V159.88a5.24,5.24,0,0,1,1.29-3.49l1.49-1.66,1.63,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M798.05,176h-4.77V159.88a6,6,0,0,1,1.05-3.49l1.2-1.66,1.33,1.64a5.92,5.92,0,0,1,1.19,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M805.36,176H800.6V159.88a6,6,0,0,1,1-3.49l1.21-1.66,1.33,1.64a5.92,5.92,0,0,1,1.18,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
              </g>
              <path
                d="M775.71,273.81h-5.87V257.73a5.24,5.24,0,0,1,1.29-3.49l1.49-1.66,1.63,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <path
                d="M797.33,273.81h-5.88V257.73a5.29,5.29,0,0,1,1.29-3.49l1.49-1.66,1.64,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <path
                d="M796,129.29h-5.88V113.21a5.25,5.25,0,0,1,1.29-3.48l1.49-1.67,1.64,1.64a5.22,5.22,0,0,1,1.46,3.67Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <path
                d="M786.52,129.29h-5.87V113.21a5.19,5.19,0,0,1,1.29-3.48l1.48-1.67,1.64,1.64a5.22,5.22,0,0,1,1.46,3.67Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <path
                d="M806.31,129.29h-5.88V113.21a5.25,5.25,0,0,1,1.29-3.48l1.49-1.67,1.63,1.64a5.19,5.19,0,0,1,1.47,3.67Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <path
                d="M819.94,273.81h-5.87V257.73a5.24,5.24,0,0,1,1.29-3.49l1.48-1.66,1.64,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <g>
                <g>
                  <polygon
                    points="719.32 30.09 716.8 30.09 709.5 94.5 722.22 94.5 719.32 30.09"
                    style={{
                      fill: '#a3d3b8',
                    }}
                  />
                  <polygon
                    points="721.58 30.09 724.1 30.09 731.4 94.5 718.68 94.5 721.58 30.09"
                    style={{
                      fill: '#a3d3b8',
                    }}
                  />
                  <polygon
                    points="721.59 30.09 719.07 30.09 713.98 94.5 726.69 94.5 721.59 30.09"
                    style={{
                      fill: '#86b79a',
                    }}
                  />
                </g>
                <rect
                  x={715.38}
                  y={28.6}
                  width={10.03}
                  height={2.44}
                  rx={1.22}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
                <rect
                  x={719.45}
                  y={13.02}
                  width={1.5}
                  height={16.96}
                  rx={0.75}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
                <rect
                  x={714.13}
                  y={18.84}
                  width={12.8}
                  height={1.16}
                  rx={0.58}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
              </g>
              <g>
                <g>
                  <polygon
                    points="824.85 30.09 822.33 30.09 815.03 94.5 827.74 94.5 824.85 30.09"
                    style={{
                      fill: '#a3d3b8',
                    }}
                  />
                  <polygon
                    points="827.11 30.09 829.63 30.09 836.92 94.5 824.21 94.5 827.11 30.09"
                    style={{
                      fill: '#a3d3b8',
                    }}
                  />
                  <polygon
                    points="827.12 30.09 824.6 30.09 819.5 94.5 832.22 94.5 827.12 30.09"
                    style={{
                      fill: '#86b79a',
                    }}
                  />
                </g>
                <rect
                  x={820.91}
                  y={28.6}
                  width={10.03}
                  height={2.44}
                  rx={1.22}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
                <rect
                  x={824.98}
                  y={13.02}
                  width={1.5}
                  height={16.96}
                  rx={0.75}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
                <rect
                  x={819.66}
                  y={18.84}
                  width={12.8}
                  height={1.16}
                  rx={0.58}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
              </g>
              <rect
                x={756.03}
                y={19.34}
                width={33.25}
                height={2.16}
                rx={1.08}
                style={{
                  fill: '#86b79a',
                }}
              />
              <rect
                x={709.92}
                y={415.62}
                width={130.3}
                height={1.77}
                style={{
                  fill: '#e2b77f',
                }}
              />
              <rect
                x={771}
                y={417.06}
                width={5.49}
                height={7.98}
                style={{
                  fill: '#c99250',
                }}
              />
              <rect
                x={753.48}
                y={417.06}
                width={5.49}
                height={7.98}
                style={{
                  fill: '#c99250',
                }}
              />
              <rect
                x={788.62}
                y={417.06}
                width={5.49}
                height={7.98}
                style={{
                  fill: '#c99250',
                }}
              />
              <rect
                x={818.22}
                y={417.06}
                width={5.49}
                height={7.98}
                style={{
                  fill: '#c99250',
                }}
              />
              <rect
                x={725.77}
                y={417.06}
                width={5.49}
                height={7.98}
                style={{
                  fill: '#c99250',
                }}
              />
            </g>
            <g>
              <rect
                x={1193.67}
                width={1.89}
                height={21.45}
                rx={0.75}
                style={{
                  fill: '#f4d3a2',
                }}
              />
              <polygon
                points="1199.84 25.55 1189.75 25.55 1192.07 12.03 1197.52 12.03 1199.84 25.55"
                style={{
                  fill: '#eab875',
                }}
              />
              <rect
                x={1184.32}
                y={17.68}
                width={21.84}
                height={4.21}
                style={{
                  fill: '#f4d3a2',
                }}
              />
              <rect
                x={1132.2}
                y={96.43}
                width={126.97}
                height={119.44}
                style={{
                  fill: '#86b79a',
                }}
              />
              <polygon
                points="1236.64 118.11 1154.37 118.11 1181.8 19.68 1209.21 19.68 1236.64 118.11"
                style={{
                  fill: '#a3d3b8',
                }}
              />
              <polygon
                points="1215.58 154.91 1173.01 154.91 1173.01 95.5 1193.85 68.78 1215.58 95.5 1215.58 154.91"
                style={{
                  fill: '#f4d3a2',
                }}
              />
              <rect
                x={1140.2}
                y={207.89}
                width={113.06}
                height={249.41}
                style={{
                  fill: '#f4d3a2',
                }}
              />
              <rect
                x={1140.2}
                y={215.87}
                width={113.06}
                height={4.02}
                style={{
                  fill: '#d3a56a',
                }}
              />
              <rect
                x={1140.2}
                y={207.89}
                width={19.71}
                height={249.41}
                style={{
                  fill: '#ffedd4',
                }}
              />
              <rect
                x={1233.98}
                y={207.89}
                width={19.71}
                height={249.41}
                style={{
                  fill: '#ffedd4',
                }}
              />
              <rect
                x={1140.2}
                y={207.89}
                width={19.71}
                height={11.97}
                style={{
                  fill: '#f9ddbb',
                }}
              />
              <rect
                x={1233.98}
                y={207.89}
                width={19.71}
                height={11.97}
                style={{
                  fill: '#f9ddbb',
                }}
              />
              <rect
                x={1132.43}
                y={404.8}
                width={130.58}
                height={52.5}
                style={{
                  fill: '#fce2b9',
                }}
              />
              <g>
                <g>
                  <rect
                    x={1159.94}
                    y={344.69}
                    width={74.05}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                  <rect
                    x={1159.94}
                    y={355.24}
                    width={74.05}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={1162.82}
                    y={348.86}
                    width={19.74}
                    height={1.77}
                    transform="translate(2322.76 692.16) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={1162.82}
                    y={359.42}
                    width={19.74}
                    height={1.77}
                    transform="translate(2322.76 713.27) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={1256.6}
                    y={348.86}
                    width={19.74}
                    height={1.77}
                    transform="translate(2510.32 692.16) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={1256.6}
                    y={359.42}
                    width={19.74}
                    height={1.77}
                    transform="translate(2510.32 713.27) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
              </g>
              <path
                d="M1261.92,455.82c0-5.84-15.14-11.9-27.44-15.86a50.57,50.57,0,0,0-30.93,0c-12.35,4-27.6,10-27.6,15.88,0,.05,0,.11,0,.16h0v8.82h86V456h0C1261.91,455.93,1261.92,455.87,1261.92,455.82Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#fff1dc',
                }}
              />
              <g>
                <g>
                  <rect
                    x={1159.94}
                    y={276.18}
                    width={74.05}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                  <rect
                    x={1159.94}
                    y={286.74}
                    width={74.05}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={1162.82}
                    y={280.35}
                    width={19.74}
                    height={1.77}
                    transform="translate(2322.76 555.15) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={1162.82}
                    y={290.91}
                    width={19.74}
                    height={1.77}
                    transform="translate(2322.76 576.27) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={1256.6}
                    y={280.35}
                    width={19.74}
                    height={1.77}
                    transform="translate(2510.32 555.15) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={1256.6}
                    y={290.91}
                    width={19.74}
                    height={1.77}
                    transform="translate(2510.32 576.27) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
              </g>
              <rect
                x={1132.2}
                y={117.56}
                width={126.97}
                height={98.31}
                style={{
                  fill: '#f4d3a2',
                }}
              />
              <rect
                x={1132.2}
                y={94.5}
                width={22}
                height={121.38}
                style={{
                  fill: '#ffedd4',
                }}
              />
              <rect
                x={1237.39}
                y={94.5}
                width={22}
                height={121.38}
                style={{
                  fill: '#ffedd4',
                }}
              />
              <g>
                <g>
                  <rect
                    x={1154.3}
                    y={200.36}
                    width={82.8}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                  <rect
                    x={1154.3}
                    y={210.92}
                    width={82.8}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={1154.84}
                    y={204.53}
                    width={22.08}
                    height={1.77}
                    transform="translate(2309.14 403.51) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={1154.84}
                    y={215.09}
                    width={22.08}
                    height={1.77}
                    transform="translate(2309.14 424.63) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={1259.71}
                    y={204.53}
                    width={22.08}
                    height={1.77}
                    transform="translate(2518.87 403.51) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={1259.71}
                    y={215.09}
                    width={22.08}
                    height={1.77}
                    transform="translate(2518.87 424.63) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
              </g>
              <g>
                <g>
                  <rect
                    x={1154.3}
                    y={128.87}
                    width={82.8}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                  <rect
                    x={1154.3}
                    y={139.42}
                    width={82.8}
                    height={1.77}
                    style={{
                      fill: '#e2b77f',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={1154.84}
                    y={133.04}
                    width={22.08}
                    height={1.77}
                    transform="translate(2309.14 260.52) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={1154.84}
                    y={143.6}
                    width={22.08}
                    height={1.77}
                    transform="translate(2309.14 281.64) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
                <g>
                  <rect
                    x={1259.71}
                    y={133.04}
                    width={22.08}
                    height={1.77}
                    transform="translate(2518.87 260.52) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                  <rect
                    x={1259.71}
                    y={143.6}
                    width={22.08}
                    height={1.77}
                    transform="translate(2518.87 281.64) rotate(180)"
                    style={{
                      fill: '#f4d3a2',
                    }}
                  />
                </g>
              </g>
              <g>
                <path
                  d="M1199.91,394.46h-6.12v-6.62a4.59,4.59,0,0,1,1.34-3.24l1.55-1.55,1.71,1.53a4.58,4.58,0,0,1,1.52,3.41Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1199.91,379h-6.12v-6.62a4.57,4.57,0,0,1,1.34-3.24l1.55-1.56,1.71,1.53a4.58,4.58,0,0,1,1.52,3.42Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1244.14,394.46H1238v-6.62a4.59,4.59,0,0,1,1.34-3.24l1.55-1.55,1.7,1.53a4.59,4.59,0,0,1,1.53,3.41Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1244.14,379H1238v-6.62a4.57,4.57,0,0,1,1.34-3.24l1.55-1.56,1.7,1.53a4.59,4.59,0,0,1,1.53,3.42Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1216.8,394.08H1212V378a6,6,0,0,1,1-3.48l1.21-1.66,1.32,1.64a5.84,5.84,0,0,1,1.19,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1224.62,394.08h-4.77V378a6,6,0,0,1,1.05-3.48l1.2-1.66,1.33,1.64a5.9,5.9,0,0,1,1.19,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <rect
                  x={1171.13}
                  y={393.97}
                  width={6.19}
                  height={7.05}
                  style={{
                    fill: '#c99250',
                  }}
                />
                <rect
                  x={1215.35}
                  y={393.97}
                  width={6.19}
                  height={7.05}
                  style={{
                    fill: '#c99250',
                  }}
                />
                <rect
                  x={1189.42}
                  y={394.06}
                  width={4.82}
                  height={7.18}
                  style={{
                    fill: '#c99250',
                  }}
                />
                <rect
                  x={1197.48}
                  y={394.06}
                  width={4.82}
                  height={7.18}
                  style={{
                    fill: '#c99250',
                  }}
                />
              </g>
              <g>
                <path
                  d="M1216.8,336.66H1212V320.58a6,6,0,0,1,1-3.49l1.21-1.66,1.32,1.64a5.86,5.86,0,0,1,1.19,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1199.29,336.66h-5.88V320.58a5.29,5.29,0,0,1,1.29-3.49l1.49-1.66,1.63,1.64a5.16,5.16,0,0,1,1.47,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1244,336.66h-5.87V320.58a5.24,5.24,0,0,1,1.29-3.49l1.49-1.66,1.63,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1224.62,336.66h-4.77V320.58a6,6,0,0,1,1.05-3.49l1.2-1.66,1.33,1.64a5.92,5.92,0,0,1,1.19,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
              </g>
              <g>
                <path
                  d="M1213,176h-4.76V159.88a6,6,0,0,1,1-3.49l1.21-1.66,1.33,1.64A5.92,5.92,0,0,1,1213,160Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1198.12,176h-5.87V159.88a5.24,5.24,0,0,1,1.29-3.49l1.48-1.66,1.64,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1244.68,176h-5.88V159.88a5.29,5.29,0,0,1,1.29-3.49l1.49-1.66,1.63,1.64a5.21,5.21,0,0,1,1.47,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1220.79,176H1216V159.88a6,6,0,0,1,1-3.49l1.21-1.66,1.32,1.64a5.86,5.86,0,0,1,1.19,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
                <path
                  d="M1228.1,176h-4.76V159.88a6,6,0,0,1,1.05-3.49l1.2-1.66,1.33,1.64a5.92,5.92,0,0,1,1.18,3.66Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#c99250',
                  }}
                />
              </g>
              <path
                d="M1198.46,273.81h-5.88V257.73a5.24,5.24,0,0,1,1.29-3.49l1.49-1.66,1.63,1.64a5.21,5.21,0,0,1,1.47,3.66Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <path
                d="M1220.07,273.81h-5.87V257.73a5.24,5.24,0,0,1,1.29-3.49l1.48-1.66,1.64,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <path
                d="M1218.74,129.29h-5.87V113.21a5.19,5.19,0,0,1,1.29-3.48l1.48-1.67,1.64,1.64a5.22,5.22,0,0,1,1.46,3.67Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <path
                d="M1209.26,129.29h-5.87V113.21a5.19,5.19,0,0,1,1.29-3.48l1.49-1.67,1.63,1.64a5.22,5.22,0,0,1,1.46,3.67Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <path
                d="M1229.05,129.29h-5.88V113.21a5.25,5.25,0,0,1,1.29-3.48l1.49-1.67,1.64,1.64a5.22,5.22,0,0,1,1.46,3.67Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <path
                d="M1242.68,273.81h-5.87V257.73a5.24,5.24,0,0,1,1.29-3.49l1.49-1.66,1.63,1.64a5.2,5.2,0,0,1,1.46,3.66Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#c99250',
                }}
              />
              <g>
                <g>
                  <polygon
                    points="1142.06 30.09 1139.54 30.09 1132.25 94.5 1144.96 94.5 1142.06 30.09"
                    style={{
                      fill: '#a3d3b8',
                    }}
                  />
                  <polygon
                    points="1144.32 30.09 1146.84 30.09 1154.14 94.5 1141.43 94.5 1144.32 30.09"
                    style={{
                      fill: '#a3d3b8',
                    }}
                  />
                  <polygon
                    points="1144.33 30.09 1141.82 30.09 1136.72 94.5 1149.43 94.5 1144.33 30.09"
                    style={{
                      fill: '#86b79a',
                    }}
                  />
                </g>
                <rect
                  x={1138.12}
                  y={28.6}
                  width={10.03}
                  height={2.44}
                  rx={1.22}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
                <rect
                  x={1142.2}
                  y={13.02}
                  width={1.5}
                  height={16.96}
                  rx={0.75}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
                <rect
                  x={1136.87}
                  y={18.84}
                  width={12.8}
                  height={1.16}
                  rx={0.58}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
              </g>
              <g>
                <g>
                  <polygon
                    points="1247.59 30.09 1245.07 30.09 1237.77 94.5 1250.48 94.5 1247.59 30.09"
                    style={{
                      fill: '#a3d3b8',
                    }}
                  />
                  <polygon
                    points="1249.85 30.09 1252.37 30.09 1259.66 94.5 1246.95 94.5 1249.85 30.09"
                    style={{
                      fill: '#a3d3b8',
                    }}
                  />
                  <polygon
                    points="1249.86 30.09 1247.34 30.09 1242.25 94.5 1254.96 94.5 1249.86 30.09"
                    style={{
                      fill: '#86b79a',
                    }}
                  />
                </g>
                <rect
                  x={1243.65}
                  y={28.6}
                  width={10.03}
                  height={2.44}
                  rx={1.22}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
                <rect
                  x={1247.72}
                  y={13.02}
                  width={1.5}
                  height={16.96}
                  rx={0.75}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
                <rect
                  x={1242.4}
                  y={18.84}
                  width={12.8}
                  height={1.16}
                  rx={0.58}
                  style={{
                    fill: '#d8efe1',
                  }}
                />
              </g>
              <rect
                x={1178.77}
                y={19.34}
                width={33.25}
                height={2.16}
                rx={1.08}
                style={{
                  fill: '#86b79a',
                }}
              />
              <rect
                x={1132.66}
                y={415.62}
                width={130.3}
                height={1.77}
                style={{
                  fill: '#e2b77f',
                }}
              />
              <rect
                x={1193.74}
                y={417.06}
                width={5.49}
                height={7.98}
                style={{
                  fill: '#c99250',
                }}
              />
              <rect
                x={1176.23}
                y={417.06}
                width={5.49}
                height={7.98}
                style={{
                  fill: '#c99250',
                }}
              />
              <rect
                x={1211.36}
                y={417.06}
                width={5.49}
                height={7.98}
                style={{
                  fill: '#c99250',
                }}
              />
              <rect
                x={1240.96}
                y={417.06}
                width={5.49}
                height={7.98}
                style={{
                  fill: '#c99250',
                }}
              />
              <rect
                x={1148.51}
                y={417.06}
                width={5.49}
                height={7.98}
                style={{
                  fill: '#c99250',
                }}
              />
            </g>
            <g>
              <rect
                x={961.21}
                y={152.47}
                width={5.1}
                height={47}
                style={{
                  fill: '#afe5e8',
                }}
              />
              <rect
                x={959.66}
                y={152.47}
                width={8.54}
                height={2.66}
                rx={1.33}
                style={{
                  fill: '#85c1c1',
                }}
              />
              <circle
                cx={963.75}
                cy={149.59}
                r={3.1}
                style={{
                  fill: '#afe5e8',
                }}
              />
            </g>
            <g>
              <rect
                x={1003.11}
                y={152.47}
                width={5.1}
                height={47}
                style={{
                  fill: '#afe5e8',
                }}
              />
              <rect
                x={1001.56}
                y={152.47}
                width={8.54}
                height={2.66}
                rx={1.33}
                style={{
                  fill: '#85c1c1',
                }}
              />
              <circle
                cx={1005.65}
                cy={149.59}
                r={3.1}
                style={{
                  fill: '#afe5e8',
                }}
              />
            </g>
          </g>
          <rect
            x={52.59}
            y={457.22}
            width={1267.54}
            height={88.22}
            style={{
              opacity: 0.72,
              fill: 'url(#linear-gradient-3)',
            }}
          />
          <g id="wave">
            <g id="w2">
              <path
                d="M790.62,512.52c8.51,0,8.51-6,17-6s8.51,6,17,6,8.51-6,17-6,8.5,6,17,6,8.51-6,17-6,8.51,6,17,6,8.51-6,17-6,8.51,6,17,6,8.5-6,17-6,8.51,6,17,6,8.51-6,17-6,8.51,6,17,6"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  opacity: 0.5700000000000001,
                }}
              />
            </g>
            <g id="w3">
              <path
                d="M1100.76,529.48c8.51,0,8.51-6,17-6s8.51,6,17,6,8.51-6,17-6,8.51,6,17,6,8.5-6,17-6,8.51,6,17,6,8.51-6,17-6,8.51,6,17,6"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  opacity: 0.93,
                }}
              />
            </g>
            <g id="w4">
              <path
                d="M1132.32,494.91c8.5,0,8.5-6,17-6s8.5,6,17,6,8.51-6,17-6,8.51,6,17,6"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  opacity: 0.93,
                }}
              />
            </g>
            <g id="w1">
              <path
                d="M722.63,483.6c8.5,0,8.5-6,17-6s8.5,6,17,6,8.5-6,17-6,8.51,6,17,6"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: 'none',
                  stroke: '#fff',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  opacity: 0.76,
                }}
              />
            </g>
          </g>
          <line
            x1={606.06}
            y1={544.76}
            x2={1016.08}
            y2={544.76}
            style={{
              fill: 'none',
              stroke: '#fc6',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: '2.5px',
            }}
          />
          <line
            x1={1077.93}
            y1={544.76}
            x2={1040.69}
            y2={544.76}
            style={{
              fill: 'none',
              stroke: '#fc6',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: '2.5px',
            }}
          />
          <g>
            <rect
              x={676.58}
              y={194.45}
              width={2.66}
              height={70.28}
              transform="translate(242.89 -362.72) rotate(36.11)"
              style={{
                fill: '#8c6239',
              }}
            />
            <g id="flag">
              <polygon
                points="698.14 274.11 654.36 221.28 679.83 186.35 723.62 239.18 698.14 274.11"
                style={{
                  fill: '#36c',
                }}
              />
              <polygon
                points="721.26 242.41 723.62 239.18 721.01 236.03 690.81 227.62 682.35 189.39 679.83 186.35 677.42 189.66 685.5 226.13 656.67 218.1 654.36 221.28 657.04 224.51 686.98 232.86 695.37 270.76 698.14 274.11 700.41 271 692.3 234.34 721.26 242.41"
                style={{
                  fill: '#fff',
                }}
              />
              <polygon
                points="699.54 272.19 690.75 232.47 722.13 241.22 723.62 239.18 722.56 237.9 689.94 228.81 680.8 187.52 679.83 186.35 678.29 188.46 687.04 228 655.8 219.29 654.36 221.28 655.49 222.65 687.85 231.67 696.92 272.63 698.14 274.11 699.54 272.19"
                style={{
                  fill: '#e83636',
                }}
              />
              <polygon
                points="708.23 260.28 664.44 207.46 670.4 199.28 714.19 252.11 708.23 260.28"
                style={{
                  fill: '#fff',
                }}
              />
              <polygon
                points="679.42 251.51 672.84 243.57 698.31 208.65 704.89 216.59 679.42 251.51"
                style={{
                  fill: '#fff',
                }}
              />
              <polygon
                points="709.2 258.95 665.41 206.12 669.42 200.63 713.21 253.46 709.2 258.95"
                style={{
                  fill: '#e83636',
                }}
              />
              <polygon
                points="678.35 250.23 673.88 244.84 699.36 209.91 703.83 215.3 678.35 250.23"
                style={{
                  fill: '#e83636',
                }}
              />
            </g>
          </g>
          <g>
            <rect
              x={15.87}
              y={260.53}
              width={622.23}
              height={364.39}
              style={{
                fill: '#ffeec4',
              }}
            />
            <rect
              x={15.87}
              y={260.53}
              width={622.23}
              height={8.63}
              style={{
                fill: '#e8c682',
              }}
            />
            <rect
              x={15.87}
              y={191.23}
              width={622.23}
              height={69.18}
              style={{
                fill: '#101d23',
              }}
            />
            <rect
              x={15.87}
              y={191.23}
              width={622.23}
              height={69.18}
              style={{
                fill: 'none',
                stroke: '#57758f',
                strokeMiterlimit: 10,
                strokeWidth: 9,
              }}
            />
            <rect
              x={15.87}
              y={191.23}
              width={622.23}
              height={69.18}
              style={{
                fill: 'none',
                stroke: '#7394ad',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <polyline
              points="209.25 624.7 209.25 280.14 446.88 280.14 446.88 624.7"
              style={{
                fill: '#edcb7e',
              }}
            />
            <g
              style={{
                opacity: 0.18,
              }}
            >
              <polyline
                points="370.85 511.34 362.79 605.5 393.84 511.83"
                style={{
                  fill: 'none',
                  stroke: '#1f3440',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
              <polyline
                points="418.65 511.33 426.71 605.49 395.66 511.83"
                style={{
                  fill: 'none',
                  stroke: '#1f3440',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
              <rect
                x={367.08}
                y={508.52}
                width={55.4}
                height={2.82}
                style={{
                  fill: '#d37324',
                }}
              />
              <path
                d="M372.34,503.25H417.2a5.27,5.27,0,0,1,5.27,5.27v0a0,0,0,0,1,0,0h-55.4a0,0,0,0,1,0,0v0A5.27,5.27,0,0,1,372.34,503.25Z"
                style={{
                  fill: '#dd883c',
                }}
              />
              <rect
                x={367.08}
                y={511.34}
                width={55.4}
                height={1.78}
                style={{
                  fill: '#1f3440',
                }}
              />
              <polyline
                points="380.39 512.22 394.48 605.5 406.37 512.22"
                style={{
                  fill: 'none',
                  stroke: '#1f3440',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
            </g>
            <polyline
              points="209.25 624.7 209.25 600.33 446.88 600.33 446.88 624.7"
              style={{
                fill: '#fff',
              }}
            />
            <polyline
              points="209.25 448 209.25 600.33 379.85 600.33 379.85 448"
              style={{
                fill: '#ffeec4',
              }}
            />
            <polyline
              points="209.25 448 209.25 462.63 379.85 462.63 379.85 448"
              style={{
                fill: '#f4d798',
              }}
            />
            <g
              style={{
                opacity: 0.2,
                mixBlendMode: 'multiply',
              }}
            >
              <line
                x1={350.61}
                y1={454.09}
                x2={350.61}
                y2={600.33}
                style={{
                  fill: 'none',
                  stroke: '#9e968d',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={379.85}
                y1={480.9}
                x2={214.12}
                y2={480.9}
                style={{
                  fill: 'none',
                  stroke: '#9e968d',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={379.85}
                y1={515.33}
                x2={214.12}
                y2={515.33}
                style={{
                  fill: 'none',
                  stroke: '#9e968d',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={379.85}
                y1={547.62}
                x2={214.12}
                y2={547.62}
                style={{
                  fill: 'none',
                  stroke: '#9e968d',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={379.85}
                y1={581.74}
                x2={214.12}
                y2={581.74}
                style={{
                  fill: 'none',
                  stroke: '#9e968d',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={307.96}
                y1={454.09}
                x2={307.96}
                y2={600.33}
                style={{
                  fill: 'none',
                  stroke: '#9e968d',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={267.13}
                y1={454.09}
                x2={267.13}
                y2={600.33}
                style={{
                  fill: 'none',
                  stroke: '#9e968d',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={225.7}
                y1={454.09}
                x2={225.7}
                y2={600.33}
                style={{
                  fill: 'none',
                  stroke: '#9e968d',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
            </g>
            <polyline
              points="209.25 446.78 209.25 459.27 386.25 459.27 386.25 446.78"
              style={{
                fill: '#664020',
              }}
            />
            <g>
              <polyline
                points="190.83 511.34 182.77 605.5 213.82 511.83"
                style={{
                  fill: 'none',
                  stroke: '#1f3440',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
              <polyline
                points="238.63 511.33 246.69 605.49 215.64 511.83"
                style={{
                  fill: 'none',
                  stroke: '#1f3440',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
              <rect
                x={187.06}
                y={508.52}
                width={55.4}
                height={2.82}
                style={{
                  fill: '#d37324',
                }}
              />
              <path
                d="M192.33,503.25h44.86a5.27,5.27,0,0,1,5.27,5.27v0a0,0,0,0,1,0,0h-55.4a0,0,0,0,1,0,0v0A5.27,5.27,0,0,1,192.33,503.25Z"
                style={{
                  fill: '#dd883c',
                }}
              />
              <rect
                x={187.06}
                y={511.34}
                width={55.4}
                height={1.78}
                style={{
                  fill: '#1f3440',
                }}
              />
              <polyline
                points="200.38 512.22 214.46 605.5 226.36 512.22"
                style={{
                  fill: 'none',
                  stroke: '#1f3440',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
            </g>
            <g>
              <polyline
                points="99.84 511.34 91.78 605.5 122.84 511.83"
                style={{
                  fill: 'none',
                  stroke: '#1f3440',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
              <polyline
                points="147.65 511.33 155.7 605.49 124.65 511.83"
                style={{
                  fill: 'none',
                  stroke: '#1f3440',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
              <rect
                x={96.07}
                y={508.52}
                width={55.4}
                height={2.82}
                style={{
                  fill: '#d37324',
                }}
              />
              <path
                d="M101.34,503.25H146.2a5.27,5.27,0,0,1,5.27,5.27v0a0,0,0,0,1,0,0H96.07a0,0,0,0,1,0,0v0A5.27,5.27,0,0,1,101.34,503.25Z"
                style={{
                  fill: '#dd883c',
                }}
              />
              <rect
                x={96.07}
                y={511.34}
                width={55.4}
                height={1.78}
                style={{
                  fill: '#1f3440',
                }}
              />
              <polyline
                points="109.39 512.22 123.47 605.5 135.37 512.22"
                style={{
                  fill: 'none',
                  stroke: '#1f3440',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: 2,
                }}
              />
            </g>
            <g>
              <g>
                <path
                  d="M171.78,431.33h0a1.48,1.48,0,0,1,.21-.69,1.27,1.27,0,0,0,.15-.4v0a1.42,1.42,0,0,0-.12-.39,2,2,0,0,1-.16-.64v-.09h0a1.59,1.59,0,0,1,.3-.68,1.24,1.24,0,0,0,.21-.38h0v-.1a2.55,2.55,0,0,0,0-.34,2,2,0,0,1-.06-.45,1,1,0,0,1,0-.3h0a1.26,1.26,0,0,1,.55-.62,4.35,4.35,0,0,0,.48-.35,2.18,2.18,0,0,0,.29-.46,1.56,1.56,0,0,1,.55-.61,1.44,1.44,0,0,1,.77-.16,2.4,2.4,0,0,0,.55-.06,1.69,1.69,0,0,0,.43-.3,1.73,1.73,0,0,1,.7-.38.93.93,0,0,1,.23,0,2.09,2.09,0,0,1,.6.1,1.73,1.73,0,0,0,.43.08H178a1.85,1.85,0,0,0,.48-.18,1.75,1.75,0,0,1,.75-.21h0a1.75,1.75,0,0,1,.75.24,2.12,2.12,0,0,0,.49.21h.07a1.76,1.76,0,0,0,.4-.06,2.73,2.73,0,0,1,.54-.07,1.08,1.08,0,0,1,.3,0c.82.24,1.53.74,2.36.9a3.73,3.73,0,0,0,.69.05h.87a4.84,4.84,0,0,1,1,.08c.87.16,1.62.65,2.44.79a3.61,3.61,0,0,0,.76.06h.71a5.12,5.12,0,0,1,1.09.09c.88.19,1.63.7,2.42.86s1.61,0,2.57.22,1.61.74,2.39.93,1.61.05,2.55.29c1.13.3,2.08,1,3.07,1.34s2.12.47,3.19,1,1.9,1.32,2.81,1.81,2.05.75,3,1.35,1.78,1.53,2.6,2.07,2,1,2.91,1.61c1.05.76,1.75,1.74,2.43,2.27a6,6,0,0,0,1.48.9,3.8,3.8,0,0,1,1.33.95h0a1.67,1.67,0,0,1,.51,1.12,1.36,1.36,0,0,1-.28.8,3.39,3.39,0,0,1-1.18.89,11.83,11.83,0,0,1-1.84.71,28.72,28.72,0,0,1-4.7,1.32c-1.53.22-3.19.05-4.85.19-1.51.12-3.12.57-4.81.64l-.5,0c-1.45,0-2.87-.24-4.23-.24h-.12c-1.52,0-3.07.33-4.6.33h-.24c-1.76,0-3.39-.47-4.81-.56-1.86-.13-3.54,0-4.87-.19a3.76,3.76,0,0,1-1-.4,4.77,4.77,0,0,0-.82-.35,4.11,4.11,0,0,0-.81-.06h-.18a3.26,3.26,0,0,1-1-.11,3.42,3.42,0,0,1-1-.51,3.79,3.79,0,0,0-.77-.45,4.15,4.15,0,0,0-.92-.2,3.66,3.66,0,0,1-1-.25,3.83,3.83,0,0,1-.91-.67,4.34,4.34,0,0,0-.67-.57,4,4,0,0,0-.9-.37,3.74,3.74,0,0,1-.95-.45,3.43,3.43,0,0,1-.77-.88,5,5,0,0,0-.5-.7,9.31,9.31,0,0,0-.89-.77,2.35,2.35,0,0,1-.64-.66h0a.51.51,0,0,1,0-.2.77.77,0,0,1,.13-.4l-.11-.07-.14-.12a.49.49,0,0,1-.13-.28V438h0a.49.49,0,0,1,.12-.3l.11-.13,0,0-.14-.13a.45.45,0,0,1-.12-.27v-.06h0a.57.57,0,0,1,.09-.28.56.56,0,0,1,0-.08l-.15-.07a.54.54,0,0,1-.2-.2h0a.49.49,0,0,1-.05-.24,1.15,1.15,0,0,1,0-.21h-.19a.63.63,0,0,1-.26-.13.88.88,0,0,1-.22-.36,2.53,2.53,0,0,1-.09-.5,1.46,1.46,0,0,0-.08-.38,1.56,1.56,0,0,0-.27-.34,1.54,1.54,0,0,1-.39-.67h0a1,1,0,0,1,0-.18,2.2,2.2,0,0,1,.12-.57,1.43,1.43,0,0,0,.08-.38v0h0a1.3,1.3,0,0,0-.18-.39,1.57,1.57,0,0,1-.24-.71h0Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#eaa654',
                  }}
                />
                <path
                  d="M192.83,430.24a4.76,4.76,0,0,0-2.21-.5c-.73.11-1.06.71-1.29,1.34l.55-.22a3.33,3.33,0,0,0-3-.18,3.36,3.36,0,0,1-.33.16.56.56,0,0,1-.34,0,2,2,0,0,0-.76,0,1.93,1.93,0,0,0-1.14.79c-.29.39.36.76.65.38a1.2,1.2,0,0,1,1-.48,2.43,2.43,0,0,0,.54.08,1.37,1.37,0,0,0,.5-.21,2.55,2.55,0,0,1,2.47.08.38.38,0,0,0,.55-.23c.2-.54.45-.89,1.08-.79a7.94,7.94,0,0,1,1.5.48c.46.16.66-.57.2-.73Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#d3822a',
                  }}
                />
                <path
                  d="M181.25,428.56a1.32,1.32,0,0,0-1.13-.14,1.51,1.51,0,0,0-.52.3,1.14,1.14,0,0,0-.2.23.75.75,0,0,0-.13.27c0,.11.22,0,.18-.07a.26.26,0,0,0-.13-.06,1.15,1.15,0,0,0-.35-.1,1.14,1.14,0,0,0-.6.12,1.16,1.16,0,0,0-.66,1l.57-.32a.89.89,0,0,0-.89,0c-.42.23,0,.88.38.64a.12.12,0,0,1,.13,0,.37.37,0,0,0,.56-.32c0-.12,0,0,0-.05l0,0a.28.28,0,0,1,.09-.13.49.49,0,0,1,.13-.08l0,0,.12,0s.07,0,.07,0a.56.56,0,0,1,.17.07.59.59,0,0,0,.67,0c.15-.12.17-.29.27-.43l.11-.11.14-.08a.58.58,0,0,1,.58.06.38.38,0,1,0,.38-.65Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#d3822a',
                  }}
                />
                <path
                  d="M192.75,433.59a.6.6,0,0,0-.19.06l-.18.09a1.15,1.15,0,0,0-.33.33,1.12,1.12,0,0,0-.15.84.38.38,0,0,0,.46.26.38.38,0,0,0,.26-.46.13.13,0,0,0,0-.06l0,.1a.49.49,0,0,1,0-.17l0,.1a.6.6,0,0,1,.06-.19l0,.09a1,1,0,0,1,.1-.17l-.06.08a.62.62,0,0,1,.14-.14l-.08.06.16-.1-.09,0,.15,0a.38.38,0,0,0,.26-.46.36.36,0,0,0-.18-.22l-.08,0a.34.34,0,0,0-.2,0Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#d3822a',
                  }}
                />
                <path
                  d="M202.67,430.9a2,2,0,0,0-1.37-.11,1.07,1.07,0,0,0-.75,1l.47-.36a1.14,1.14,0,0,0-1.09,0,.74.74,0,0,0-.28,1,.39.39,0,0,0,.52.14.4.4,0,0,0,.13-.52s0,0,0,0a.17.17,0,0,1,0,.07v0s0,0,0,0h0l0,0h0s0,0,0,0a.29.29,0,0,1,.18,0,2.33,2.33,0,0,1,.31.11c.23.1.47-.14.47-.36s0,.05,0,0,0-.06,0,0a.26.26,0,0,1,0-.09l0,0s.06-.05,0,0l.08-.05.08,0h0a1.68,1.68,0,0,1,.87.14.38.38,0,0,0,.46-.26.37.37,0,0,0-.26-.46Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#d3822a',
                  }}
                />
              </g>
              <g>
                <path
                  d="M228.14,444.1l16.59-11.76a.67.67,0,0,0,.15-1l-.45-.54a.81.81,0,0,0-1.07-.13L225.83,443.1a.34.34,0,0,0,.06.6l1.19.51A1.09,1.09,0,0,0,228.14,444.1Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffd38d',
                  }}
                />
                <path
                  d="M225.88,449.88l11.2-16.28a.67.67,0,0,0-.23-1l-.63-.36a.81.81,0,0,0-1.06.22l-11.84,17.2a.34.34,0,0,0,.29.53l1.31.1A1.07,1.07,0,0,0,225.88,449.88Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffd38d',
                  }}
                />
                <path
                  d="M224,447.79l11.2-16.27a.66.66,0,0,0-.23-1l-.63-.37a.82.82,0,0,0-1.06.23l-11.83,17.2a.34.34,0,0,0,.28.53l1.32.1A1.07,1.07,0,0,0,224,447.79Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffd38d',
                  }}
                />
                <path
                  d="M223.58,446.22l18.58-8.83a.68.68,0,0,0,.34-.95l-.33-.61a.79.79,0,0,0-1-.3l-19.64,9.33a.33.33,0,0,0-.05.59l1.06.7A1.1,1.1,0,0,0,223.58,446.22Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffda8f',
                  }}
                />
                <path
                  d="M220.19,447.87l-15.58-13.44a.69.69,0,0,1-.07-1l.48-.5a.8.8,0,0,1,1.07,0l16.46,14.21a.34.34,0,0,1-.11.59l-1.21.39A1.07,1.07,0,0,1,220.19,447.87Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffda8f',
                  }}
                />
                <path
                  d="M211.8,442.77l17.54-10.51a.68.68,0,0,0,.23-1l-.4-.58a.81.81,0,0,0-1.06-.2l-18.53,11.11a.34.34,0,0,0,0,.6l1.14.6A1.1,1.1,0,0,0,211.8,442.77Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffda8f',
                  }}
                />
                <path
                  d="M216.88,443.37l16.25-12.15a.67.67,0,0,0,.12-1l-.47-.54a.8.8,0,0,0-1.07-.09l-17.17,12.84a.33.33,0,0,0,.08.59l1.2.48A1.09,1.09,0,0,0,216.88,443.37Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffda8f',
                  }}
                />
                <path
                  d="M217.64,432.7l-12.08,15.74a.66.66,0,0,0,.18,1l.61.39a.82.82,0,0,0,1.07-.18L220.18,433a.35.35,0,0,0-.26-.55l-1.3-.15A1.07,1.07,0,0,0,217.64,432.7Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffd38d',
                  }}
                />
                <path
                  d="M207.45,441.59,225,431.07a.68.68,0,0,0,.24-1l-.41-.57a.79.79,0,0,0-1.06-.2l-18.52,11.11a.34.34,0,0,0,0,.6l1.14.59A1.08,1.08,0,0,0,207.45,441.59Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffda8f',
                  }}
                />
                <path
                  d="M213.29,431.51l-12.08,15.74a.67.67,0,0,0,.18,1l.61.4a.82.82,0,0,0,1.07-.18l12.76-16.63a.34.34,0,0,0-.26-.55l-1.3-.16A1.09,1.09,0,0,0,213.29,431.51Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffd38d',
                  }}
                />
                <path
                  d="M224.06,436.53l-18.74,8.54a.68.68,0,0,0-.36.94l.32.62a.8.8,0,0,0,1,.32l19.8-9a.33.33,0,0,0,.06-.59l-1-.72A1.08,1.08,0,0,0,224.06,436.53Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffe6a6',
                  }}
                />
              </g>
              <g>
                <path
                  d="M205.36,436.59l1.35-.39a6.64,6.64,0,0,0,4.57-8.2l-14.12,4A6.63,6.63,0,0,0,205.36,436.59Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffd505',
                  }}
                />
                <path
                  d="M205.15,435.44l1.3-.37c3.39-1,5.47-4.11,4.64-7l-13.58,3.87C198.34,434.83,201.76,436.41,205.15,435.44Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ffeea4',
                  }}
                />
                <g>
                  <path
                    d="M205.07,429.76l4.71,3.26-.22.24-4.89-3.38Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffd505',
                    }}
                  />
                  <path
                    d="M203.77,430.14l-2.61,5.29-.32-.1,2.51-5.07Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffd505',
                    }}
                  />
                </g>
                <path
                  d="M204.22,431.05a.36.36,0,0,0,.7-.2c0-.2-.32-.53-.51-.47S204.16,430.85,204.22,431.05Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#f7c54f',
                  }}
                />
                <path
                  d="M206.46,430.27a.37.37,0,0,0,.46-.24.36.36,0,0,0-.24-.46c-.19-.06-.61,0-.67.17S206.27,430.21,206.46,430.27Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#f7c54f',
                  }}
                />
                <path
                  d="M202.29,431.46a.37.37,0,1,1-.55-.48c.13-.15.51-.34.66-.21S202.43,431.3,202.29,431.46Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#f7c54f',
                  }}
                />
              </g>
              <g>
                <path
                  d="M184.69,453.77h46a7.52,7.52,0,0,0,6.93-5.32l3.35-9.69H174.41l3.36,9.69A7.5,7.5,0,0,0,184.69,453.77Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#e6e6e6',
                  }}
                />
                <path
                  d="M184.69,453.77h46a7.52,7.52,0,0,0,6.93-5.32l3.35-9.69H174.41l3.36,9.69A7.5,7.5,0,0,0,184.69,453.77Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#fe4c00',
                    strokeMiterlimit: 10,
                  }}
                />
                <line
                  x1={215}
                  y1={441.12}
                  x2={155.15}
                  y2={441.12}
                  style={{
                    fill: 'none',
                    stroke: '#fe4c00',
                    strokeMiterlimit: 10,
                  }}
                />
                <line
                  x1={216.75}
                  y1={436.37}
                  x2={153.57}
                  y2={436.37}
                  style={{
                    fill: 'none',
                    stroke: '#fe4c00',
                    strokeMiterlimit: 10,
                  }}
                />
                <line
                  x1={185.25}
                  y1={431.23}
                  x2={185.25}
                  y2={446.54}
                  style={{
                    fill: 'none',
                    stroke: '#fe4c00',
                    strokeMiterlimit: 10,
                  }}
                />
                <g>
                  <line
                    x1={191.98}
                    y1={431.23}
                    x2={189.22}
                    y2={446.54}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={198.24}
                    y1={431.23}
                    x2={193.49}
                    y2={446.54}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={204.79}
                    y1={431.23}
                    x2={197.65}
                    y2={446.54}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={211.67}
                    y1={431.23}
                    x2={202.7}
                    y2={446.54}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={217.96}
                    y1={431.23}
                    x2={207.29}
                    y2={446.54}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                </g>
                <g>
                  <line
                    x1={178.43}
                    y1={431.23}
                    x2={181.19}
                    y2={446.54}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={172.17}
                    y1={431.23}
                    x2={176.92}
                    y2={446.54}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={165.62}
                    y1={431.23}
                    x2={172.77}
                    y2={446.54}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={158.74}
                    y1={431.23}
                    x2={167.72}
                    y2={446.54}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={152.46}
                    y1={431.23}
                    x2={163.12}
                    y2={446.54}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                </g>
              </g>
              <path
                d="M229.45,438.5l-26.79,13.69s-6.08-2.24-7.84-2.37-9-2.11-10.41-3.82-7.6-7.9-7.6-7.9,11.81-1.31,15.67-.79a49.33,49.33,0,0,0,10.53.27C204.65,437.31,228.17,438,229.45,438.5Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#f2f2f2',
                }}
              />
              <g>
                <path
                  d="M203,449a60,60,0,0,0-8.3-2.9c-3.82-.92-5.93-2.76-6.52-3.68"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }}
                />
                <path
                  d="M187.12,441.2a5.59,5.59,0,0,0-1.78-1.52"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }}
                />
                <path
                  d="M188.57,437.38a5.41,5.41,0,0,0,3.82,3.49c3.16.92,10.13,3.42,14,6.71"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                  }}
                />
                <path
                  d="M192.48,437.31s.76,1.65,3.72,2.37"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                  }}
                />
                <path
                  d="M209.24,446.17s-5.48-4.94-10.86-6"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                  }}
                />
                <path
                  d="M198.77,438a4.92,4.92,0,0,0,1.78.79"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                  }}
                />
                <path
                  d="M202.18,439.35a15.24,15.24,0,0,1,2.07,1"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                  }}
                />
                <path
                  d="M206,441.13a50.32,50.32,0,0,1,5.09,4"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                  }}
                />
                <path
                  d="M213.83,443.9a47.57,47.57,0,0,0-7.35-5.73"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                  }}
                />
                <path
                  d="M216.15,442.51s-2.86-2.61-4.05-3.45"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                  }}
                />
                <path
                  d="M218.67,441.08a22.43,22.43,0,0,1-3-2.12l-.35-.5"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                  }}
                />
                <path
                  d="M221.22,440.14a6.7,6.7,0,0,1-1.64-1.58"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#999',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.5px',
                  }}
                />
              </g>
              <g>
                <path
                  d="M187.91,427.11s-.13.92,1,.85"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M193,429.41a.43.43,0,0,0-.59.2"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M196,430.6s.06.79-.86.72"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M187.58,434.15s-1.05-.33-1.45.2"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <line
                  x1={169.04}
                  y1={425.7}
                  x2={168.45}
                  y2={426.16}
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <line
                  x1={180.76}
                  y1={426.23}
                  x2={179.91}
                  y2={426.36}
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M200.26,431.64s.22-.52-.5-.85"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M185.47,428.69a1.16,1.16,0,0,0-.85-.46"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M216.09,435.27a.86.86,0,0,1-1,.46"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M212.34,434.74s-.33-.46-.86.27"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M209.31,431.39s-.07.65-.6.52"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M205.55,437.11a2.2,2.2,0,0,0-1.31.07"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#dded43',
                    strokeMiterlimit: 10,
                  }}
                />
              </g>
            </g>
            <rect
              x={26.05}
              y={538.18}
              width={182.62}
              height={86.55}
              style={{
                fill: '#ffeec4',
              }}
            />
            <g>
              <rect
                x={183.62}
                y={285.04}
                width={21.28}
                height={263.82}
                style={{
                  fill: '#ffeec4',
                }}
              />
              <rect
                x={35.83}
                y={292.93}
                width={146.01}
                height={246.46}
                style={{
                  fill: '#69e8e2',
                  opacity: 0.72,
                }}
              />
              <polyline
                points="33.93 453.28 33.93 540.01 181.4 540.01 181.4 453.28"
                style={{
                  fill: '#58c6bd',
                  opacity: 0.72,
                }}
              />
              <polyline
                points="33.93 447 33.93 459.38 181.4 459.38 181.4 447"
                style={{
                  fill: '#58c6bd',
                }}
              />
              <rect
                x={35.83}
                y={292.93}
                width={146.01}
                height={246.46}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 10,
                }}
              />
              <rect
                x={35.83}
                y={292.93}
                width={146.01}
                height={36.86}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 10,
                }}
              />
              <rect
                x={35.83}
                y={292.93}
                width={73.15}
                height={36.86}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 10,
                }}
              />
              <g
                style={{
                  opacity: 0.45,
                }}
              >
                <line
                  x1={132.34}
                  y1={372.68}
                  x2={87.86}
                  y2={449.45}
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <line
                  x1={136.6}
                  y1={437.26}
                  x2={107.96}
                  y2={487.23}
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <line
                  x1={153.05}
                  y1={369.02}
                  x2={81.76}
                  y2={492.71}
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
              </g>
            </g>
            <g>
              <rect
                x={470.79}
                y={292.93}
                width={146.01}
                height={246.46}
                style={{
                  fill: '#69e8e2',
                  opacity: 0.72,
                }}
              />
              <rect
                x={470.79}
                y={292.93}
                width={146.01}
                height={246.46}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 10,
                }}
              />
              <rect
                x={470.79}
                y={292.93}
                width={146.01}
                height={36.86}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 10,
                }}
              />
              <rect
                x={470.79}
                y={292.93}
                width={73.15}
                height={36.86}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 10,
                }}
              />
              <g
                style={{
                  opacity: 0.45,
                }}
              >
                <line
                  x1={567.29}
                  y1={372.68}
                  x2={522.82}
                  y2={449.45}
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <line
                  x1={571.56}
                  y1={437.26}
                  x2={542.92}
                  y2={487.23}
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <line
                  x1={588.01}
                  y1={369.02}
                  x2={516.72}
                  y2={492.71}
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
              </g>
            </g>
            <polyline
              points="209.25 624.7 209.25 280.14 446.88 280.14 446.88 624.7"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 10,
              }}
            />
            <g
              style={{
                opacity: 0.42,
              }}
            >
              <path
                d="M82.38,421.77c1.13,1.39-.27,1.58.38,2.39l.51.64,4.3-5.74-.53-.65c-.27-.34-.37-.27-.73,0s-.62.52-1.22-.23l-2.15-2.61.77-1c.69-.92,1.62.59,2.08,0l.58-.78-3-3.72-.52.71c-.65.86.63,1.35-.21,2.48l-.77,1-2.51-3,1.49-2c1.09-1.47,2.18.38,2.82-.47l.55-.74-2.54-3.11A5.6,5.6,0,0,1,80.52,407l-5.67,7.58.52.65c.58.73.88-.93,1.86.27Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M84.93,405.51a1.8,1.8,0,0,0,2.69-.08,2.22,2.22,0,0,0,.14-3.13,1.73,1.73,0,0,0-2.57.13A2.19,2.19,0,0,0,84.93,405.51Zm4.9,7.84a1.61,1.61,0,0,0,.32.43c1,1,2.09.41,3-.47,1.14-1.12,1.91-3.08,1.59-3.41a3.81,3.81,0,0,0-.9-.47,2.15,2.15,0,0,1-.45,1,.51.51,0,0,1-.8-.16L89.49,405c-.06-.12-.16-.22-.27-.12a21.16,21.16,0,0,1-3.28,4.29l.42.72c.12.2.26.24.51.12l.19-.09c.28-.11.61-.16,1.06.58Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M97.13,400.73a3.05,3.05,0,0,0,.2.53c.33.45,1.1.36,1.63,0a1.44,1.44,0,0,0,.5-2c-.93-1.28-3.31.43-3.83.81-2.86,2.08-3.37,4.15-2.45,5.41,1.13,1.56,4.33.09,5,1,.23.33,0,.79-.4,1.11a1.07,1.07,0,0,1-.68.22,1.32,1.32,0,0,0-.24-.55,1.47,1.47,0,0,0-2.06-.13,1.53,1.53,0,0,0-.45,2.16c.7,1,2.57.67,4.72-.9,3.22-2.34,2.92-4.57,2.22-5.53-1.39-1.92-4.42.29-5.17-.73-.33-.46.15-.92.34-1.06A2.1,2.1,0,0,1,97.13,400.73Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M104.91,390.08l-4.9,2.47.15.76c.15.9,1.27-.3,1.57,1.31l1.9,10.22,3.7-1.7L106.19,397a1.8,1.8,0,0,1,.81-.89.6.6,0,0,1,.81.21c.29.65.68,4,1,4.68s1.5,1.1,3.05.39,2.78-2.24,2.6-2.64c0-.1-.18-.22-.77-.66a1.59,1.59,0,0,1-.59.65c-.2.1-.71.21-.89-.75l-.33-1.77a9,9,0,0,0-.57-2.32c-.38-.81-1.39-1.26-2.89-.57a7.69,7.69,0,0,0-2.56,2Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M124.62,392.32a13.47,13.47,0,0,0,2.2,3.52,1.21,1.21,0,0,1-.61.2,2.34,2.34,0,0,1-2.38-2.25A1.25,1.25,0,0,1,124.62,392.32Zm3.21-3.29a4.42,4.42,0,0,1-.42-1.51c0-.31,0-1.21.79-1.29s.75.63.77.81A2.22,2.22,0,0,1,127.83,389Zm2.13,1.38-.11.75c-.11.67.66.38.72,1a1.92,1.92,0,0,1-.53,1.23,11.23,11.23,0,0,1-1.64-3,11.14,11.14,0,0,0,1.9-1.28,2.85,2.85,0,0,0,.92-2.27c-.1-1-1-2.52-3.62-2.28-2.83.26-4.37,2.28-4.18,4.3a6.14,6.14,0,0,0,.58,1.94c-2,.69-4.42,1.58-4.17,4.25.16,1.71,1.68,3.41,4.74,3.13a6.73,6.73,0,0,0,3.5-1.39,4.37,4.37,0,0,0,3,.79c1.91-.18,3.56-1.64,3.52-2.11,0-.19-.14-.3-.6-.68a1.66,1.66,0,0,1-1,.44,2.64,2.64,0,0,1-2-.83l1.26-1.72c1-1.34,1.83-1.13,2-1.85l.12-.84Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M156.64,389.05l-1.37-.34a1.12,1.12,0,0,1-.63,0c-.55-.13-.85-1-2.94-1.49a8,8,0,0,0-9.61,5.84c-.71,2.9.35,5.75,4.28,6.72s6.13-1.53,6.25-2c0-.15,0-.35-.61-1.13a4.48,4.48,0,0,1-4.11,1.51c-1.77-.43-1.48-2.31-1.3-3.07.42-1.71,2.8-6.75,5.54-6.08,1.35.34,1.22,1.38,1.13,2.32-.1.75-.15,1.12.53,1.28l.85.21Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M164.49,392.87l-5-2.26-.5.59c-.61.68,1,.8,0,2.05l-6.76,7.88,3.64,1.82,4.1-4.77a1.79,1.79,0,0,1,1.21.07c.21.11.51.42.34.76-.32.64-2.66,3-3,3.72s.08,1.86,1.6,2.63,3.49.76,3.69.36a2.73,2.73,0,0,0,0-1,1.71,1.71,0,0,1-.88,0c-.19-.1-.6-.43,0-1.18l1.17-1.36a9.59,9.59,0,0,0,1.44-1.9c.4-.8.11-1.87-1.36-2.6a7.71,7.71,0,0,0-3.18-.73Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M171.88,399.75a1.82,1.82,0,0,0,.51,2.65,2.22,2.22,0,0,0,3.12-.37,1.73,1.73,0,0,0-.54-2.51A2.19,2.19,0,0,0,171.88,399.75Zm-7,6.1a1.55,1.55,0,0,0-.37.38c-.82,1.11-.07,2.13.95,2.88,1.28.95,3.34,1.39,3.61,1a3.36,3.36,0,0,0,.33-1,2.12,2.12,0,0,1-1-.29.51.51,0,0,1,0-.82l4.68-3.88c.1-.09.19-.2.07-.29a21.27,21.27,0,0,1-4.76-2.55l-.65.53c-.17.15-.19.29,0,.52l.11.18c.16.25.26.57-.4,1.13Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M176.65,410.73a2,2,0,0,1,.85.4c.46.47-.08,1-.21,1.14-.76.74-3.27,2.09-4.12,1.22-.23-.23-.21-.44,0-.68a3.2,3.2,0,0,1,.6-.41Zm-4.94,2.91a3.12,3.12,0,0,0,.95,1.9c1.88,1.9,5.5,1.88,7.83-.41a2.59,2.59,0,0,0,.25-3.87,6,6,0,0,0-2.81-1.29l.83-.49c.1-.05.12-.11,0-.19a17.09,17.09,0,0,1-4.27-3.24l-.67.41c-.3.19-.23.35-.15.53l.09.2c.1.28.12.62-.59,1l-7.8,4.62,2.8,2.85Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M186.15,421.21a3.13,3.13,0,0,0-.54.19c-.45.3-.4,1.08,0,1.63a1.44,1.44,0,0,0,2,.57c1.31-.87-.3-3.32-.66-3.85-2-2.94-4-3.53-5.31-2.66-1.6,1.07-.26,4.32-1.2,5-.34.22-.79,0-1.09-.44a1,1,0,0,1-.2-.68,1.45,1.45,0,0,0,.56-.22,1.48,1.48,0,0,0,.21-2.06,1.53,1.53,0,0,0-2.14-.53c-1,.66-.77,2.54.71,4.75,2.22,3.3,4.46,3.1,5.45,2.43,2-1.31-.13-4.43.92-5.14.47-.31.92.18,1,.38A2.12,2.12,0,0,1,186.15,421.21Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M149.19,426.07c-4.54-4.37-13.34-11.31-23.46-11.31C111,414.76,99,421.38,99,429.54s12,14.77,26.75,14.77c10.34,0,19.3-7.24,23.75-11.58A12.17,12.17,0,0,0,160.85,441l.1-12.11V416.78a12.18,12.18,0,0,0-11.76,9.29"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#e6fffc',
                }}
              />
              <path
                d="M112.09,418.09a.49.49,0,0,0-.27.91h0a13,13,0,0,1,.68,21.31.5.5,0,0,0,.3.9.54.54,0,0,0,.3-.1,14,14,0,0,0-.73-22.94.48.48,0,0,0-.28-.08"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#8ceee9',
                }}
              />
              <path
                d="M108.69,425a1.45,1.45,0,1,1-1.45-1.45A1.45,1.45,0,0,1,108.69,425Z"
                transform="translate(-22.62 -7.33)"
                style={{
                  fill: '#69e8e2',
                }}
              />
            </g>
            <path
              d="M498.73,232a7.06,7.06,0,0,0-.37,1.38c0,1.37,1.69,2.33,3.34,2.33,2.52,0,3.93-1.74,3.93-3.29,0-3.94-7.32-4-8.92-4-8.83,0-12.9,3.43-12.9,7.32,0,4.8,8.6,6.54,8.6,9.37,0,1-1.05,1.65-2.42,1.65a2.5,2.5,0,0,1-1.69-.55,3.65,3.65,0,0,0,.32-1.46c0-2.11-2.11-3.3-4-3.3a3.83,3.83,0,0,0-4.08,3.71c0,3,4.21,5.12,10.85,5.12,9.92,0,12.62-4.94,12.62-7.91,0-5.9-9.38-5.9-9.38-9.06,0-1.42,1.65-1.65,2.25-1.65A5.11,5.11,0,0,1,498.73,232ZM465,234.82a4.87,4.87,0,0,1,2.2-.83c1.64,0,1.64,1.92,1.64,2.38,0,2.65-2,9.47-5,9.47-.82,0-1.14-.41-1.14-1.28a8.28,8.28,0,0,1,.32-1.79Zm-3.48,13.86c1.15,1.28,3.8,1.64,5,1.64,6.67,0,13-6.49,13-14.64,0-5.62-3.94-7.22-6.45-7.22s-5.45,1.6-7.23,2.74l.59-2.33c.1-.28,0-.41-.27-.41A42.14,42.14,0,0,1,453,230.38l-.46,1.92c-.18.87.23,1,.69,1.19l.5.18c.69.32,1.33.87.82,2.88l-5.44,22h10Zm-21.36-26.63c0,3.39,2.74,4.58,4.94,4.58a5.54,5.54,0,0,0,5.72-5.36c0-2.37-1.79-4.25-4.8-4.25C441.77,217,440.17,220.27,440.17,222.05Zm-5,22.55a4.33,4.33,0,0,0-.18,1.33c0,3.43,3,4.39,6.18,4.39,4,0,8.78-2.15,8.78-3.29a9.06,9.06,0,0,0-.78-2.43,5.11,5.11,0,0,1-2.51,1,1.28,1.28,0,0,1-1.15-1.7l3.66-14.73c.09-.32.09-.68-.27-.68a53.1,53.1,0,0,1-13.36,1.92l-.5,2c-.14.55,0,.87.68,1.1l.51.18c.68.28,1.37.78.86,2.88Zm-15.87-27.08-13.68.51-.46,1.87c-.59,2.2,3.21.64,2.2,4.62l-6.31,25.16h10.15l3.84-15.23a4.49,4.49,0,0,1,2.79-1.19c.6,0,1.61.37,1.61,1.33,0,1.78-2.57,9.69-2.57,11.66s2.25,4.07,6.5,4.07c3.89,0,8.65-2.19,8.65-3.29,0-.28-.19-.69-1.06-2.29a4.18,4.18,0,0,1-2,.87c-.55,0-1.83-.27-1.23-2.65l1.09-4.35c.87-3.43,1.1-4.48,1.1-5.85,0-2.24-1.83-4.3-5.95-4.3a19,19,0,0,0-7.91,1.92ZM403,218.3H399.5a2.85,2.85,0,0,1-1.51.46c-1.42,0-2.65-1.88-8-1.88a19.85,19.85,0,0,0-19.81,19.9c0,7.46,4.25,13.73,14.36,13.73s13.95-7.37,13.95-8.65c0-.37-.27-.82-2.15-2.38-2.65,4.44-6.4,6.13-9,6.13-4.58,0-5-4.71-5-6.68,0-4.39,2.74-18,9.79-18,3.48,0,3.8,2.61,4.12,4.94.23,1.87.32,2.79,2.05,2.79h2.2Zm-74.61,17.29c2.1,5.22,2.61,6.41,4.67,9.24a2.8,2.8,0,0,1-1.56.37c-3.2,0-5.4-3-5.4-6.13C326.12,236.6,327.17,236.14,328.41,235.59Zm8.74-7.45a11,11,0,0,1-.69-3.85c0-.77.28-3,2.24-3,1.65,0,1.74,1.74,1.74,2.2C340.44,226.26,338.06,227.63,337.15,228.14Zm5,3.93-.45,1.83c-.42,1.65,1.55,1.1,1.55,2.65a4.68,4.68,0,0,1-1.6,2.93,28.57,28.57,0,0,1-3.38-7.78,27.85,27.85,0,0,0,5-2.74,7.15,7.15,0,0,0,2.79-5.44c0-2.57-1.92-6.5-8.47-6.5-7.09,0-11.39,4.67-11.39,9.74a15.77,15.77,0,0,0,1,4.94c-5,1.29-11.34,2.93-11.34,9.61,0,4.3,3.38,8.88,11.07,8.88a16.87,16.87,0,0,0,9-2.66,10.75,10.75,0,0,0,7.27,2.66c4.8,0,9.24-3.25,9.24-4.44,0-.46-.27-.78-1.32-1.83a4,4,0,0,1-2.52.87,6.52,6.52,0,0,1-4.76-2.52l3.52-4c2.79-3.11,4.81-2.38,5.27-4.16l.5-2.06Zm-54.71-14.55-13.68.51-.45,1.87c-.6,2.2,3.2.64,2.19,4.62l-6.31,25.16h10.15l3.85-15.23a4.46,4.46,0,0,1,2.79-1.19c.59,0,1.6.37,1.6,1.33,0,1.78-2.56,9.69-2.56,11.66s2.24,4.07,6.49,4.07c3.89,0,8.65-2.19,8.65-3.29,0-.28-.18-.69-1.05-2.29a4.21,4.21,0,0,1-2,.87c-.55,0-1.83-.27-1.23-2.65l1.1-4.35c.86-3.43,1.09-4.48,1.09-5.85,0-2.24-1.83-4.3-5.94-4.3a19,19,0,0,0-7.92,1.92ZM260.7,232a7.8,7.8,0,0,0-.36,1.38c0,1.37,1.69,2.33,3.34,2.33,2.51,0,3.93-1.74,3.93-3.29,0-3.94-7.32-4-8.92-4-8.83,0-12.9,3.43-12.9,7.32,0,4.8,8.6,6.54,8.6,9.37,0,1-1,1.65-2.42,1.65a2.55,2.55,0,0,1-1.7-.55,3.49,3.49,0,0,0,.32-1.46c0-2.11-2.1-3.3-4-3.3a3.83,3.83,0,0,0-4.07,3.71c0,3,4.21,5.12,10.85,5.12,9.92,0,12.62-4.94,12.62-7.91,0-5.9-9.38-5.9-9.38-9.06,0-1.42,1.65-1.65,2.24-1.65A5,5,0,0,1,260.7,232Zm-28.82-10c0,3.39,2.75,4.58,4.94,4.58a5.53,5.53,0,0,0,5.72-5.36c0-2.37-1.78-4.25-4.8-4.25C233.49,217,231.88,220.27,231.88,222.05Zm-5,22.55a4.33,4.33,0,0,0-.18,1.33c0,3.43,3,4.39,6.17,4.39,4,0,8.78-2.15,8.78-3.29a9.24,9.24,0,0,0-.77-2.43,5.17,5.17,0,0,1-2.52,1,1.27,1.27,0,0,1-1.14-1.7l3.66-14.73c.09-.32.09-.68-.28-.68a53.1,53.1,0,0,1-13.36,1.92l-.5,2c-.14.55.05.87.69,1.1l.5.18c.69.28,1.37.78.87,2.88Zm-28.37-1.23c-1.09,4.35-3.56,1.83-4.2,4.35l-.51,2h17.89l.5-2c.28-1,0-1.14-1.14-1.42s-2-.46-1.37-2.79l2-8.19h3.2c2.88,0,1.24,4.12,3.16,4.12h2.42l2.93-11.57h-2.2c-2.69,0-1.73,3.29-5.26,3.29h-3.2l2.33-9.56h6.18c4.57,0,2.52,4.94,5.17,4.94h2.29l2.42-9.74c-1.28.54-2.65.77-5.81.77H201.69l-.5,2c-.6,2.24,3.15.36,2.24,4.11Z"
              transform="translate(-22.62 -7.33)"
              style={{
                fill: '#ffd505',
              }}
            />
            <g>
              <line
                x1={311.76}
                y1={282.38}
                x2={311.76}
                y2={341.58}
                style={{
                  fill: 'none',
                  stroke: '#1f3440',
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="M308.43,334.92h5.32a41.9,41.9,0,0,1,41.9,41.9v0a0,0,0,0,1,0,0H266.53a0,0,0,0,1,0,0v0A41.9,41.9,0,0,1,308.43,334.92Z"
                style={{
                  fill: '#ffeec4',
                }}
              />
            </g>
          </g>
          <g>
            <path
              d="M567.15,616.75H613.7a7.45,7.45,0,0,1,7.45,7.45v0a0,0,0,0,1,0,0H559.7a0,0,0,0,1,0,0v0A7.45,7.45,0,0,1,567.15,616.75Z"
              style={{
                fill: '#ffb255',
              }}
            />
            <g>
              <g>
                <polyline
                  points="644.41 521.77 635.62 624.55 669.51 522.32"
                  style={{
                    fill: 'none',
                    stroke: '#1f3440',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                  }}
                />
                <polyline
                  points="696.59 521.77 705.39 624.55 671.49 522.32"
                  style={{
                    fill: 'none',
                    stroke: '#1f3440',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                  }}
                />
                <rect
                  x={640.29}
                  y={518.7}
                  width={60.47}
                  height={3.07}
                  style={{
                    fill: '#d37324',
                  }}
                />
                <path
                  d="M646,513h49a5.75,5.75,0,0,1,5.75,5.75v0a0,0,0,0,1,0,0H640.29a0,0,0,0,1,0,0v0A5.75,5.75,0,0,1,646,513Z"
                  style={{
                    fill: '#dd883c',
                  }}
                />
                <rect
                  x={640.29}
                  y={521.77}
                  width={60.47}
                  height={1.94}
                  style={{
                    fill: '#1f3440',
                  }}
                />
                <polyline
                  points="654.83 522.74 670.21 624.55 683.19 522.74"
                  style={{
                    fill: 'none',
                    stroke: '#1f3440',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                  }}
                />
              </g>
              <g>
                <rect
                  x={681.18}
                  y={437.88}
                  width={24.74}
                  height={21.31}
                  transform="translate(-23.83 -5.45) rotate(-0.16)"
                  style={{
                    fill: '#fc6',
                  }}
                />
                <path
                  d="M696,443l-7.14,0a26.22,26.22,0,0,1-26-22.68l-3.48-25.55C656.22,371.68,671,350,692.2,349.89h0c21.18-.06,36.1,21.6,33.08,44.67L722,420.13A26.21,26.21,0,0,1,696,443Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#fc6',
                  }}
                />
                <path
                  d="M673.39,415.27a14.26,14.26,0,0,0,26.29-.14"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#4f3102',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
                <path
                  d="M687.28,502.29h30.63a0,0,0,0,1,0,0v18.44a0,0,0,0,1,0,0H669.26a0,0,0,0,1,0,0v-.42A18,18,0,0,1,687.28,502.29Z"
                  transform="translate(1365.93 1013.8) rotate(179.84)"
                  style={{
                    fill: '#4e908e',
                  }}
                />
                <polygon
                  points="646.62 495.08 695.27 494.95 684.8 447.25 656.82 447.33 646.62 495.08"
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <g>
                  <line
                    x1={666.92}
                    y1={512.1}
                    x2={667.12}
                    y2={583.67}
                    style={{
                      fill: 'none',
                      stroke: '#fc6',
                      strokeMiterlimit: 10,
                      strokeWidth: 12,
                    }}
                  />
                  <line
                    x1={643.68}
                    y1={512.17}
                    x2={643.87}
                    y2={583.73}
                    style={{
                      fill: 'none',
                      stroke: '#fc6',
                      strokeMiterlimit: 10,
                      strokeWidth: 12,
                    }}
                  />
                  <path
                    d="M683.36,506.66h13a0,0,0,0,1,0,0v49.19a6.49,6.49,0,0,1-6.49,6.49h0a6.49,6.49,0,0,1-6.49-6.49V506.66a0,0,0,0,1,0,0Z"
                    transform="translate(1358.53 1059.81) rotate(179.84)"
                    style={{
                      fill: '#4e908e',
                    }}
                  />
                  <path
                    d="M659.58,506.73h13a0,0,0,0,1,0,0v49.19a6.49,6.49,0,0,1-6.49,6.49h0a6.49,6.49,0,0,1-6.49-6.49V506.73a0,0,0,0,1,0,0Z"
                    transform="translate(1310.96 1060) rotate(179.84)"
                    style={{
                      fill: '#4e908e',
                    }}
                  />
                  <path
                    d="M678.65,583.45H696a0,0,0,0,1,0,0v8.64a1.09,1.09,0,0,1-1.09,1.09H671.09a1.09,1.09,0,0,1-1.09-1.09v0a8.64,8.64,0,0,1,8.64-8.64Z"
                    transform="translate(-24.21 -5.48) rotate(-0.16)"
                    style={{
                      fill: '#1f3440',
                    }}
                  />
                  <path
                    d="M655.39,583.51h17.3a0,0,0,0,1,0,0v8.64a1.09,1.09,0,0,1-1.09,1.09H647.84a1.09,1.09,0,0,1-1.09-1.09v0A8.64,8.64,0,0,1,655.39,583.51Z"
                    transform="translate(-24.21 -5.54) rotate(-0.16)"
                    style={{
                      fill: '#1f3440',
                    }}
                  />
                  <rect
                    x={682.56}
                    y={557.39}
                    width={15.33}
                    height={7.76}
                    transform="translate(1359.35 1113.35) rotate(179.84)"
                    style={{
                      fill: '#68afac',
                    }}
                  />
                  <rect
                    x={658.47}
                    y={557.46}
                    width={15.33}
                    height={7.76}
                    transform="translate(1311.18 1113.54) rotate(179.84)"
                    style={{
                      fill: '#68afac',
                    }}
                  />
                </g>
                <line
                  x1={683.69}
                  y1={465.67}
                  x2={679.9}
                  y2={465.68}
                  style={{
                    fill: 'none',
                    stroke: '#fe4c00',
                    strokeMiterlimit: 10,
                  }}
                />
                <path
                  d="M673,400.12a3,3,0,0,1,5.93,0"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#4f3102',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
                <path
                  d="M694.48,400.06a3,3,0,0,1,5.94,0"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#4f3102',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
                <rect
                  x={676.5}
                  y={445.18}
                  width={31.96}
                  height={10.15}
                  rx={5.08}
                  transform="translate(-23.84 -5.45) rotate(-0.16)"
                  style={{
                    fill: '#fe4c00',
                  }}
                />
                <path
                  d="M701.81,334.43h0A19.16,19.16,0,0,1,721,353.59V357a0,0,0,0,1,0,0H682.65a0,0,0,0,1,0,0v-3.37A19.16,19.16,0,0,1,701.81,334.43Z"
                  transform="translate(111.61 -200.05) rotate(17.27)"
                  style={{
                    fill: '#277da1',
                  }}
                />
                <path
                  d="M680.92,334.19h0a4.94,4.94,0,0,1,4.94,4.94v26.36a0,0,0,0,1,0,0H684a8,8,0,0,1-8-8V339.13A4.94,4.94,0,0,1,680.92,334.19Z"
                  transform="translate(122.12 888.91) rotate(-72.73)"
                  style={{
                    fill: '#277da1',
                  }}
                />
                <circle
                  cx={685.62}
                  cy={401.2}
                  r={2.42}
                  style={{
                    fill: '#fce68d',
                  }}
                />
              </g>
              <g>
                <rect
                  x={488.94}
                  y={432.51}
                  width={24.99}
                  height={15.86}
                  style={{
                    fill: '#ff9100',
                  }}
                />
                <path
                  d="M529.21,354.8l.63,4.9a3.23,3.23,0,0,1-2.36,3.58,3.13,3.13,0,0,1-3.8-2.64l-1-8.22a1.35,1.35,0,0,0-1.22-1.19c-1.16-.1-2.34-.15-3.52-.14a1.37,1.37,0,0,0-1.36,1.54l1.1,8.63a3.21,3.21,0,0,1-2.36,3.57,3.12,3.12,0,0,1-3.8-2.63l-1.12-8.78a1.37,1.37,0,0,0-1.7-1.15c-1.15.29-2.27.63-3.37,1a1.36,1.36,0,0,0-.88,1.46l1,8.08a3.21,3.21,0,0,1-2.37,3.57,3.11,3.11,0,0,1-3.79-2.64l-.65-5.05a1.37,1.37,0,0,0-2.12-1,38.32,38.32,0,0,0-16.43,36.51L483.61,422a29.11,29.11,0,0,0,32.56,25.2l18.27-2.34a29.1,29.1,0,0,0,25.19-32.56l-3.53-27.71A38.32,38.32,0,0,0,531,353.33,1.37,1.37,0,0,0,529.21,354.8Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#ff9100',
                  }}
                />
                <path
                  d="M507.35,401.94a4.93,4.93,0,0,1,9.79-1.25"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#5b3103',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
                <path
                  d="M539.31,415.84a12.47,12.47,0,0,1-22.82,2.85Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#5b3103',
                  }}
                />
                <path
                  d="M513.53,425.06a4.68,4.68,0,0,0-1.07-8.57"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#fcaa47',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
                <path
                  d="M543.86,420a4.69,4.69,0,0,1-1.12-8.57"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#fcaa47',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
                <path
                  d="M532.56,398.72a4.93,4.93,0,0,1,9.79-1.25"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#5b3103',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
                <path
                  d="M474.25,480.58h51.09a0,0,0,0,1,0,0v32.36a0,0,0,0,1,0,0H492.27a18,18,0,0,1-18-18V480.58A0,0,0,0,1,474.25,480.58Z"
                  style={{
                    fill: '#1f3440',
                  }}
                />
                <g id="hdb">
                  <path
                    d="M537.87,458.08s27.62,24.19,56.29-23.5"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeMiterlimit: 10,
                      strokeWidth: 13,
                    }}
                  />
                  <path
                    d="M537.87,458.08a28.62,28.62,0,0,0,23.32,5.55"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#ffd505',
                      strokeMiterlimit: 10,
                      strokeWidth: 17,
                    }}
                  />
                  <path
                    d="M596,426h7.47a8.33,8.33,0,0,1,8.33,8.33v0a8.33,8.33,0,0,1-8.33,8.33h-15.8a0,0,0,0,1,0,0v-8.33A8.33,8.33,0,0,1,596,426Z"
                    transform="translate(101.87 -140.87) rotate(14.16)"
                    style={{
                      fill: '#ff9100',
                    }}
                  />
                  <g>
                    <path
                      d="M610.42,459.18l-16.68-2.9a1.49,1.49,0,0,1-1.18-1.86c5.77-21.85,5.93-42,8.05-58.39a1.47,1.47,0,0,1,1.71-1.25l21,3.67a1.47,1.47,0,0,1,1.19,1.77c-4,16.72-11.31,35.84-12.38,57.55A1.5,1.5,0,0,1,610.42,459.18Z"
                      transform="translate(-22.62 -7.33)"
                      style={{
                        fill: '#ffefd2',
                        opacity: 0.59,
                      }}
                    />
                    <path
                      d="M609.28,456.74l-13.59-2.37a1.19,1.19,0,0,1-1-1.46c4.57-17,4.57-32.73,6.2-45.53a1.17,1.17,0,0,1,1.39-1l17.15,3a1.16,1.16,0,0,1,1,1.39c-3.13,13-9,27.91-9.74,44.84A1.19,1.19,0,0,1,609.28,456.74Z"
                      transform="translate(-22.62 -7.33)"
                      style={{
                        fill: '#ffa70b',
                        opacity: 0.59,
                      }}
                    />
                    <circle
                      cx={583.11}
                      cy={403.37}
                      r={1.06}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                    <circle
                      cx={585.88}
                      cy={406.53}
                      r={0.55}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                    <circle
                      cx={581.13}
                      cy={408.14}
                      r={0.58}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                    <circle
                      cx={584.43}
                      cy={410.38}
                      r={0.55}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                    <circle
                      cx={592.47}
                      cy={406.73}
                      r={0.39}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                    <circle
                      cx={589.85}
                      cy={421.17}
                      r={0.55}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                    <circle
                      cx={584.58}
                      cy={423.77}
                      r={0.35}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                    <circle
                      cx={587.13}
                      cy={425.03}
                      r={0.51}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                    <circle
                      cx={578.43}
                      cy={432.48}
                      r={0.61}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                    <circle
                      cx={579.06}
                      cy={426.82}
                      r={0.58}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                    <circle
                      cx={584.6}
                      cy={434.7}
                      r={0.71}
                      style={{
                        fill: '#fff',
                        opacity: 0.51,
                      }}
                    />
                  </g>
                  <path
                    d="M594.42,432.12s5.53,3.56,10.8,0"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
                <path
                  d="M474.25,442.54h40.18a10.92,10.92,0,0,1,10.92,10.92v40.18a0,0,0,0,1,0,0H474.25a0,0,0,0,1,0,0V442.54A0,0,0,0,1,474.25,442.54Z"
                  style={{
                    fill: '#ffd505',
                  }}
                />
              </g>
              <rect
                x={578.09}
                y={487.87}
                width={18.65}
                height={136.22}
                style={{
                  fill: '#ffb255',
                }}
              />
              <rect
                x={578.09}
                y={492.53}
                width={18.65}
                height={11.64}
                style={{
                  fill: '#fc9322',
                }}
              />
              <line
                x1={509.92}
                y1={486.25}
                x2={673.46}
                y2={486.25}
                style={{
                  fill: 'none',
                  stroke: '#ffb255',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 17,
                }}
              />
              <g>
                <path
                  d="M483.88,463a42.55,42.55,0,0,0-16.21,14.6c-14.71,22.06,38.93,33.16,62.08,6.89"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#ff9100',
                    strokeMiterlimit: 10,
                    strokeWidth: 13,
                  }}
                />
                <path
                  d="M500.85,459.75a28.63,28.63,0,0,0-22.77,7.49"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#ffd505',
                    strokeMiterlimit: 10,
                    strokeWidth: 20,
                  }}
                />
                <line
                  x1={474.25}
                  y1={462.13}
                  x2={478.23}
                  y2={462.13}
                  style={{
                    fill: 'none',
                    stroke: '#fe4c00',
                    strokeMiterlimit: 10,
                  }}
                />
              </g>
              <g>
                <polyline
                  points="470.79 521.77 462 624.55 495.89 522.32"
                  style={{
                    fill: 'none',
                    stroke: '#1f3440',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                  }}
                />
                <polyline
                  points="522.97 521.77 531.76 624.55 497.87 522.32"
                  style={{
                    fill: 'none',
                    stroke: '#1f3440',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                  }}
                />
                <rect
                  x={466.67}
                  y={518.7}
                  width={60.47}
                  height={3.07}
                  style={{
                    fill: '#d37324',
                  }}
                />
                <path
                  d="M472.42,513h49a5.75,5.75,0,0,1,5.75,5.75v0a0,0,0,0,1,0,0H466.67a0,0,0,0,1,0,0v0A5.75,5.75,0,0,1,472.42,513Z"
                  style={{
                    fill: '#dd883c',
                  }}
                />
                <rect
                  x={466.67}
                  y={521.77}
                  width={60.47}
                  height={1.94}
                  style={{
                    fill: '#1f3440',
                  }}
                />
                <polyline
                  points="481.21 522.74 496.58 624.55 509.57 522.74"
                  style={{
                    fill: 'none',
                    stroke: '#1f3440',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                  }}
                />
              </g>
              <g>
                <line
                  x1={518.33}
                  y1={510.23}
                  x2={518.33}
                  y2={585.38}
                  style={{
                    fill: 'none',
                    stroke: '#ff9100',
                    strokeMiterlimit: 10,
                    strokeWidth: 12,
                  }}
                />
                <line
                  x1={529.3}
                  y1={506.64}
                  x2={554.84}
                  y2={577.32}
                  style={{
                    fill: 'none',
                    stroke: '#ff9100',
                    strokeMiterlimit: 10,
                    strokeWidth: 12,
                  }}
                />
                <path
                  d="M518,496.82h0a6.81,6.81,0,0,1,6.81,6.81V550a0,0,0,0,1,0,0H511.24a0,0,0,0,1,0,0v-46.4A6.81,6.81,0,0,1,518,496.82Z"
                  style={{
                    fill: '#1f3440',
                  }}
                />
                <path
                  d="M556.67,499.68h0a6.81,6.81,0,0,1,6.81,6.81v46.4a0,0,0,0,1,0,0H549.86a0,0,0,0,1,0,0v-46.4a6.81,6.81,0,0,1,6.81-6.81Z"
                  transform="translate(-168.38 213.25) rotate(-19.87)"
                  style={{
                    fill: '#1f3440',
                  }}
                />
                <path
                  d="M535.56,584.76h25a1.14,1.14,0,0,1,1.14,1.14V595a0,0,0,0,1,0,0H543.49a9.08,9.08,0,0,1-9.08-9.08v0a1.14,1.14,0,0,1,1.14-1.14Z"
                  transform="translate(1073.46 1172.41) rotate(180)"
                  style={{
                    fill: '#1f3440',
                  }}
                />
                <path
                  d="M570.69,574.46h25a1.14,1.14,0,0,1,1.14,1.14v9.08a0,0,0,0,1,0,0H578.62a9.08,9.08,0,0,1-9.08-9.08v0a1.14,1.14,0,0,1,1.14-1.14Z"
                  transform="translate(1306.02 919.04) rotate(160.13)"
                  style={{
                    fill: '#1f3440',
                  }}
                />
                <rect
                  x={565.8}
                  y={558.25}
                  width={13.63}
                  height={24.3}
                  transform="translate(1282.41 904.84) rotate(160.13)"
                  style={{
                    fill: '#1f3440',
                  }}
                />
                <rect
                  x={534.42}
                  y={565.51}
                  width={13.63}
                  height={24.3}
                  transform="translate(1059.85 1147.99) rotate(-180)"
                  style={{
                    fill: '#1f3440',
                  }}
                />
              </g>
              <line
                x1={427.06}
                y1={624.55}
                x2={643.34}
                y2={624.55}
                style={{
                  fill: 'none',
                  stroke: '#ffd505',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <line
                x1={734.76}
                y1={624.55}
                x2={653.2}
                y2={624.55}
                style={{
                  fill: 'none',
                  stroke: '#ffd505',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 2,
                }}
              />
              <g>
                <g>
                  <path
                    d="M544.21,464.86h0a1.56,1.56,0,0,1,.21-.68,1.3,1.3,0,0,0,.15-.41h0a1.59,1.59,0,0,0-.11-.39,1.87,1.87,0,0,1-.17-.64v-.1h0a1.63,1.63,0,0,1,.3-.69,1.13,1.13,0,0,0,.21-.37h0v-.09a2.88,2.88,0,0,0,0-.35,2,2,0,0,1-.06-.45,1.13,1.13,0,0,1,0-.3h0a1.35,1.35,0,0,1,.55-.62,2.72,2.72,0,0,0,.48-.35,2.06,2.06,0,0,0,.29-.45,1.59,1.59,0,0,1,.55-.62,1.68,1.68,0,0,1,.78-.16,1.57,1.57,0,0,0,.54-.06,1.59,1.59,0,0,0,.43-.29,1.73,1.73,0,0,1,.7-.39l.23,0a2.5,2.5,0,0,1,.6.1,1.41,1.41,0,0,0,.43.08h0a1.63,1.63,0,0,0,.48-.17,1.62,1.62,0,0,1,.75-.22h0a1.67,1.67,0,0,1,.76.25,1.53,1.53,0,0,0,.48.2H553a2.43,2.43,0,0,0,.4-.06,2.83,2.83,0,0,1,.54-.07,1.08,1.08,0,0,1,.3,0c.82.23,1.53.74,2.36.9a3.73,3.73,0,0,0,.69.05l.87,0a5.85,5.85,0,0,1,1,.08c.86.16,1.61.65,2.43.8a4.47,4.47,0,0,0,.76.05H563a6,6,0,0,1,1.1.09c.87.19,1.62.7,2.42.87s1.6,0,2.56.21,1.61.75,2.39.93,1.61.05,2.56.29a32,32,0,0,1,3.06,1.35c1,.36,2.12.47,3.2,1s1.89,1.33,2.8,1.81,2,.75,3,1.35,1.78,1.53,2.6,2.08,2,1,2.91,1.6c1.06.77,1.75,1.74,2.43,2.27a5.69,5.69,0,0,0,1.48.9,3.94,3.94,0,0,1,1.33.95h0a1.69,1.69,0,0,1,.51,1.12,1.36,1.36,0,0,1-.28.8,3.39,3.39,0,0,1-1.18.89,11.83,11.83,0,0,1-1.84.71,29.34,29.34,0,0,1-4.7,1.33c-1.53.22-3.19,0-4.85.18-1.51.12-3.11.57-4.81.65h-.5c-1.44,0-2.87-.23-4.22-.23h-.13c-1.52,0-3.07.32-4.6.32h-.23c-1.77,0-3.39-.46-4.82-.56-1.86-.13-3.54.05-4.87-.19a3.75,3.75,0,0,1-1-.39,3.86,3.86,0,0,0-.82-.35,3.44,3.44,0,0,0-.81-.07h-.18a3.57,3.57,0,0,1-1-.1,3.7,3.7,0,0,1-1-.52,4.32,4.32,0,0,0-.77-.45,4.16,4.16,0,0,0-.92-.19,3.55,3.55,0,0,1-1-.26,3.64,3.64,0,0,1-.92-.67,5,5,0,0,0-.67-.57,4.34,4.34,0,0,0-.9-.37,3.17,3.17,0,0,1-1-.45,3.27,3.27,0,0,1-.77-.88,5,5,0,0,0-.5-.7,10.44,10.44,0,0,0-.88-.76,2.26,2.26,0,0,1-.65-.66h0a.52.52,0,0,1,0-.21.88.88,0,0,1,.13-.4l-.11-.06-.14-.13a.49.49,0,0,1-.13-.28v-.06h0a.56.56,0,0,1,.12-.31l.11-.12,0,0-.14-.13a.45.45,0,0,1-.12-.27v0h0a.62.62,0,0,1,.08-.28.35.35,0,0,0,.05-.08.48.48,0,0,1-.15-.07.54.54,0,0,1-.2-.2h0a.45.45,0,0,1-.05-.23.62.62,0,0,1,0-.21.75.75,0,0,1-.2,0,.45.45,0,0,1-.26-.13.82.82,0,0,1-.22-.36,2.53,2.53,0,0,1-.09-.5,1.68,1.68,0,0,0-.08-.38,1.73,1.73,0,0,0-.27-.34,1.49,1.49,0,0,1-.39-.67h0a.88.88,0,0,1,0-.17,2.11,2.11,0,0,1,.12-.57,1.49,1.49,0,0,0,.08-.39v0h0a1.1,1.1,0,0,0-.18-.4,1.49,1.49,0,0,1-.24-.71h0Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#eaa654',
                    }}
                  />
                  <path
                    d="M565.26,463.77a4.78,4.78,0,0,0-2.21-.51c-.73.11-1.06.71-1.29,1.35l.55-.23a3.36,3.36,0,0,0-3-.18,3.41,3.41,0,0,1-.33.17.56.56,0,0,1-.34,0,1.93,1.93,0,0,0-1.9.82c-.29.39.36.77.65.38a1.17,1.17,0,0,1,1-.47,2.42,2.42,0,0,0,.54.07,1.54,1.54,0,0,0,.5-.2,2.55,2.55,0,0,1,2.47.07.39.39,0,0,0,.56-.22c.19-.54.44-.9,1.07-.8a8.73,8.73,0,0,1,1.5.48c.46.16.66-.56.2-.72Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#d3822a',
                    }}
                  />
                  <path
                    d="M553.68,462.09a1.29,1.29,0,0,0-1.13-.14,1.48,1.48,0,0,0-.52.29,1.37,1.37,0,0,0-.19.23.67.67,0,0,0-.14.28c0,.1.22,0,.18-.07s-.09-.05-.13-.07a1.09,1.09,0,0,0-1,0,1.12,1.12,0,0,0-.65,1l.56-.32a.89.89,0,0,0-.89,0c-.42.23,0,.88.38.65a.11.11,0,0,1,.13,0,.39.39,0,0,0,.57-.33c0-.12,0,0,0,0s0-.09,0-.05a.34.34,0,0,1,.09-.12.48.48,0,0,1,.13-.09h0l.12,0h.07a.56.56,0,0,1,.17.07.61.61,0,0,0,.67,0c.15-.13.17-.29.27-.43a.56.56,0,0,1,.11-.11l.14-.08a.58.58,0,0,1,.58.06.38.38,0,1,0,.38-.65Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#d3822a',
                    }}
                  />
                  <path
                    d="M565.18,467.11a1.06,1.06,0,0,0-.19.06l-.18.09a1.72,1.72,0,0,0-.33.33,1.14,1.14,0,0,0-.15.84.38.38,0,0,0,.46.26.39.39,0,0,0,.27-.46l0-.05,0,.1a.54.54,0,0,1,0-.18v.1a.41.41,0,0,1,.05-.18l0,.08.1-.17-.06.08a.93.93,0,0,1,.14-.14l-.08.06a.51.51,0,0,1,.16-.09l-.09,0a.42.42,0,0,1,.15,0,.39.39,0,0,0,.22-.18.37.37,0,0,0,0-.29.41.41,0,0,0-.17-.22l-.09,0a.34.34,0,0,0-.2,0Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#d3822a',
                    }}
                  />
                  <path
                    d="M575.1,464.42a2.09,2.09,0,0,0-1.37-.11,1.08,1.08,0,0,0-.75,1l.48-.36a1.19,1.19,0,0,0-1.1,0,.74.74,0,0,0-.27,1,.38.38,0,0,0,.51.13.37.37,0,0,0,.13-.51h0a.22.22,0,0,1,0,.08v0h0l0,0s0,0,0,0,0,0,0,0a.38.38,0,0,1,.18,0l.31.11c.23.1.47-.14.47-.36s0,.06,0,0,0-.05,0,0a.41.41,0,0,1,0-.09s0,0,0,0,.06-.06,0,0l.08-.05.08,0c-.06,0,0,0,0,0a1.57,1.57,0,0,1,.87.15.38.38,0,0,0,.2-.73Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#d3822a',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M600.57,477.62l16.59-11.75a.67.67,0,0,0,.15-1l-.45-.55a.81.81,0,0,0-1.07-.12l-17.53,12.42a.33.33,0,0,0,.06.59l1.19.51A1.09,1.09,0,0,0,600.57,477.62Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffd38d',
                    }}
                  />
                  <path
                    d="M598.31,483.4l11.2-16.28a.67.67,0,0,0-.23-1l-.63-.36a.82.82,0,0,0-1.06.23l-11.84,17.19a.35.35,0,0,0,.29.54l1.31.09A1.07,1.07,0,0,0,598.31,483.4Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffd38d',
                    }}
                  />
                  <path
                    d="M596.4,481.32,607.61,465a.67.67,0,0,0-.24-1l-.63-.36a.8.8,0,0,0-1.06.23l-11.83,17.19a.34.34,0,0,0,.28.53l1.32.1A1,1,0,0,0,596.4,481.32Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffd38d',
                    }}
                  />
                  <path
                    d="M596,479.75l18.58-8.84a.68.68,0,0,0,.34-1l-.33-.61a.79.79,0,0,0-1-.3l-19.64,9.33a.34.34,0,0,0,0,.6l1.07.7A1.11,1.11,0,0,0,596,479.75Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffda8f',
                    }}
                  />
                  <path
                    d="M592.62,481.4,577,468a.69.69,0,0,1-.07-1l.48-.5a.8.8,0,0,1,1.08,0L595,480.63a.34.34,0,0,1-.11.59l-1.21.4A1.1,1.1,0,0,1,592.62,481.4Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffda8f',
                    }}
                  />
                  <path
                    d="M584.23,476.3l17.54-10.52a.68.68,0,0,0,.23-1l-.4-.57a.79.79,0,0,0-1.06-.2L582,475.14a.34.34,0,0,0,0,.6l1.13.59A1.1,1.1,0,0,0,584.23,476.3Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffda8f',
                    }}
                  />
                  <path
                    d="M589.31,476.9l16.25-12.16a.66.66,0,0,0,.12-1l-.47-.53a.8.8,0,0,0-1.07-.1L587,476a.34.34,0,0,0,.08.6l1.2.48A1.12,1.12,0,0,0,589.31,476.9Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffda8f',
                    }}
                  />
                  <path
                    d="M590.07,466.22,578,482a.66.66,0,0,0,.18,1l.61.4a.82.82,0,0,0,1.07-.18l12.76-16.63a.35.35,0,0,0-.26-.55l-1.3-.16A1.09,1.09,0,0,0,590.07,466.22Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffd38d',
                    }}
                  />
                  <path
                    d="M579.88,475.11l17.54-10.51a.69.69,0,0,0,.24-1l-.41-.58a.8.8,0,0,0-1-.2L577.67,474a.34.34,0,0,0,0,.6l1.14.6A1.08,1.08,0,0,0,579.88,475.11Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffda8f',
                    }}
                  />
                  <path
                    d="M585.72,465l-12.08,15.74a.67.67,0,0,0,.18,1l.61.39a.82.82,0,0,0,1.07-.18l12.76-16.63a.34.34,0,0,0-.25-.55l-1.31-.15A1.07,1.07,0,0,0,585.72,465Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffd38d',
                    }}
                  />
                  <path
                    d="M596.49,470.05l-18.74,8.54a.7.7,0,0,0-.36,1l.32.61a.79.79,0,0,0,1,.32l19.8-9a.34.34,0,0,0,.06-.6l-1.05-.72A1.11,1.11,0,0,0,596.49,470.05Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffe6a6',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M577.79,470.11l1.35-.38a6.65,6.65,0,0,0,4.57-8.21l-14.12,4A6.63,6.63,0,0,0,577.79,470.11Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffd505',
                    }}
                  />
                  <path
                    d="M577.58,469l1.3-.37c3.39-1,5.47-4.11,4.64-7l-13.58,3.86C570.77,468.36,574.19,469.93,577.58,469Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffeea4',
                    }}
                  />
                  <g>
                    <path
                      d="M577.5,463.29l4.71,3.25-.22.24-4.89-3.38Z"
                      transform="translate(-22.62 -7.33)"
                      style={{
                        fill: '#ffd505',
                      }}
                    />
                    <path
                      d="M576.2,463.66,573.59,469l-.32-.1,2.51-5.07Z"
                      transform="translate(-22.62 -7.33)"
                      style={{
                        fill: '#ffd505',
                      }}
                    />
                  </g>
                  <path
                    d="M576.65,464.57a.35.35,0,0,0,.45.25.35.35,0,0,0,.25-.45c-.05-.19-.32-.52-.51-.47S576.59,464.38,576.65,464.57Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#f7c54f',
                    }}
                  />
                  <path
                    d="M578.89,463.79a.35.35,0,0,0,.46-.23.36.36,0,0,0-.24-.46c-.19-.07-.61,0-.67.17S578.7,463.73,578.89,463.79Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#f7c54f',
                    }}
                  />
                  <path
                    d="M574.73,465a.37.37,0,0,1-.52,0,.37.37,0,0,1,0-.52c.13-.15.51-.34.66-.21S574.86,464.83,574.73,465Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#f7c54f',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M557.12,487.3h46a7.53,7.53,0,0,0,6.93-5.33l3.35-9.68H546.84L550.2,482A7.51,7.51,0,0,0,557.12,487.3Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#e6e6e6',
                    }}
                  />
                  <path
                    d="M557.12,487.3h46a7.53,7.53,0,0,0,6.93-5.33l3.35-9.68H546.84L550.2,482A7.51,7.51,0,0,0,557.12,487.3Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={587.43}
                    y1={474.64}
                    x2={527.58}
                    y2={474.64}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={589.18}
                    y1={469.89}
                    x2={526.01}
                    y2={469.89}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={557.68}
                    y1={464.76}
                    x2={557.68}
                    y2={480.06}
                    style={{
                      fill: 'none',
                      stroke: '#fe4c00',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <g>
                    <line
                      x1={564.41}
                      y1={464.76}
                      x2={561.65}
                      y2={480.06}
                      style={{
                        fill: 'none',
                        stroke: '#fe4c00',
                        strokeMiterlimit: 10,
                      }}
                    />
                    <line
                      x1={570.67}
                      y1={464.76}
                      x2={565.92}
                      y2={480.06}
                      style={{
                        fill: 'none',
                        stroke: '#fe4c00',
                        strokeMiterlimit: 10,
                      }}
                    />
                    <line
                      x1={577.22}
                      y1={464.76}
                      x2={570.08}
                      y2={480.06}
                      style={{
                        fill: 'none',
                        stroke: '#fe4c00',
                        strokeMiterlimit: 10,
                      }}
                    />
                    <line
                      x1={584.1}
                      y1={464.76}
                      x2={575.13}
                      y2={480.06}
                      style={{
                        fill: 'none',
                        stroke: '#fe4c00',
                        strokeMiterlimit: 10,
                      }}
                    />
                    <line
                      x1={590.39}
                      y1={464.76}
                      x2={579.72}
                      y2={480.06}
                      style={{
                        fill: 'none',
                        stroke: '#fe4c00',
                        strokeMiterlimit: 10,
                      }}
                    />
                  </g>
                  <g>
                    <line
                      x1={550.86}
                      y1={464.76}
                      x2={553.62}
                      y2={480.06}
                      style={{
                        fill: 'none',
                        stroke: '#fe4c00',
                        strokeMiterlimit: 10,
                      }}
                    />
                    <line
                      x1={544.61}
                      y1={464.76}
                      x2={549.35}
                      y2={480.06}
                      style={{
                        fill: 'none',
                        stroke: '#fe4c00',
                        strokeMiterlimit: 10,
                      }}
                    />
                    <line
                      x1={538.05}
                      y1={464.76}
                      x2={545.2}
                      y2={480.06}
                      style={{
                        fill: 'none',
                        stroke: '#fe4c00',
                        strokeMiterlimit: 10,
                      }}
                    />
                    <line
                      x1={531.17}
                      y1={464.76}
                      x2={540.15}
                      y2={480.06}
                      style={{
                        fill: 'none',
                        stroke: '#fe4c00',
                        strokeMiterlimit: 10,
                      }}
                    />
                    <line
                      x1={524.89}
                      y1={464.76}
                      x2={535.55}
                      y2={480.06}
                      style={{
                        fill: 'none',
                        stroke: '#fe4c00',
                        strokeMiterlimit: 10,
                      }}
                    />
                  </g>
                </g>
                <path
                  d="M601.88,472l-26.79,13.7s-6.08-2.24-7.84-2.37-9-2.11-10.41-3.82-7.6-7.9-7.6-7.9,11.81-1.32,15.67-.79a49.87,49.87,0,0,0,10.53.26C577.08,470.84,600.6,471.5,601.88,472Z"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: '#f2f2f2',
                  }}
                />
                <g>
                  <path
                    d="M575.42,482.56a58.59,58.59,0,0,0-8.3-2.9c-3.82-.92-5.92-2.77-6.52-3.69"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: 2,
                    }}
                  />
                  <path
                    d="M559.55,474.72a5.62,5.62,0,0,0-1.78-1.51"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: 2,
                    }}
                  />
                  <path
                    d="M561,470.9a5.41,5.41,0,0,0,3.82,3.49c3.16.92,10.14,3.43,13.95,6.72"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                  <path
                    d="M564.91,470.84s.76,1.64,3.73,2.37"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                  <path
                    d="M581.67,479.69s-5.48-4.94-10.86-6"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                  <path
                    d="M571.2,471.5a4.92,4.92,0,0,0,1.78.79"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                  <path
                    d="M574.61,472.88a14.64,14.64,0,0,1,2.07,1"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                  <path
                    d="M578.46,474.66a50.32,50.32,0,0,1,5.09,4"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                  <path
                    d="M586.26,477.42a47.57,47.57,0,0,0-7.35-5.73"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                  <path
                    d="M588.58,476s-2.86-2.62-4-3.46"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                  <path
                    d="M591.1,474.61a21.74,21.74,0,0,1-3-2.13l-.35-.49"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                  <path
                    d="M593.65,473.67a6.7,6.7,0,0,1-1.64-1.58"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#999',
                      strokeMiterlimit: 10,
                      strokeWidth: '0.5px',
                    }}
                  />
                </g>
                <g>
                  <path
                    d="M560.34,460.63s-.13.92,1,.86"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <path
                    d="M565.41,462.94a.43.43,0,0,0-.59.19"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <path
                    d="M568.44,464.12s.06.79-.86.73"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <path
                    d="M560,467.68s-1-.33-1.45.19"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={541.47}
                    y1={459.23}
                    x2={540.88}
                    y2={459.69}
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <line
                    x1={553.19}
                    y1={459.75}
                    x2={552.34}
                    y2={459.88}
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <path
                    d="M572.69,465.17s.22-.52-.5-.85"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <path
                    d="M557.9,462.21a1.16,1.16,0,0,0-.85-.46"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <path
                    d="M588.52,468.8a.88.88,0,0,1-1,.46"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <path
                    d="M584.77,468.27s-.33-.46-.86.26"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <path
                    d="M581.74,464.91s-.07.66-.6.53"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                  <path
                    d="M578,470.64a2.11,2.11,0,0,0-1.31.07"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: 'none',
                      stroke: '#dded43',
                      strokeMiterlimit: 10,
                    }}
                  />
                </g>
              </g>
              <g id="hda">
                <path
                  d="M643.06,433.08h6.38a7.27,7.27,0,0,1,7.27,7.27V442a5.15,5.15,0,0,1-5.15,5.15h-8.5a7,7,0,0,1-7-7v0A7,7,0,0,1,643.06,433.08Z"
                  transform="translate(3.87 -43.92) rotate(3.31)"
                  style={{
                    fill: '#fc6',
                    mixBlendMode: 'multiply',
                  }}
                />
                <g>
                  <path
                    d="M637.17,462.94l16.67-2.9a1.51,1.51,0,0,0,1.18-1.87c-5.77-21.85-5.93-42-8-58.39a1.46,1.46,0,0,0-1.71-1.24l-21,3.66A1.47,1.47,0,0,0,623,404c4,16.72,11.3,35.84,12.38,57.55A1.5,1.5,0,0,0,637.17,462.94Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffefd2',
                      opacity: 0.59,
                    }}
                  />
                  <path
                    d="M638.3,460.49l13.59-2.37a1.18,1.18,0,0,0,1-1.46c-4.57-17-4.57-32.72-6.2-45.52a1.17,1.17,0,0,0-1.38-1l-17.16,3a1.16,1.16,0,0,0-1,1.39c3.12,13,9,27.91,9.73,44.85A1.18,1.18,0,0,0,638.3,460.49Z"
                    transform="translate(-22.62 -7.33)"
                    style={{
                      fill: '#ffa70b',
                      opacity: 0.59,
                    }}
                  />
                  <circle
                    cx={619.24}
                    cy={407.12}
                    r={1.06}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                  <circle
                    cx={616.46}
                    cy={410.28}
                    r={0.55}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                  <circle
                    cx={621.21}
                    cy={411.9}
                    r={0.58}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                  <circle
                    cx={617.92}
                    cy={414.14}
                    r={0.55}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                  <circle
                    cx={609.88}
                    cy={410.48}
                    r={0.39}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                  <circle
                    cx={612.49}
                    cy={424.93}
                    r={0.55}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                  <circle
                    cx={617.77}
                    cy={427.53}
                    r={0.35}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                  <circle
                    cx={615.22}
                    cy={428.79}
                    r={0.51}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                  <circle
                    cx={623.92}
                    cy={436.24}
                    r={0.61}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                  <circle
                    cx={623.29}
                    cy={430.58}
                    r={0.58}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                  <circle
                    cx={617.75}
                    cy={438.45}
                    r={0.71}
                    style={{
                      fill: '#fff',
                      opacity: 0.51,
                    }}
                  />
                </g>
                <path
                  d="M704,467.62c-5.52,31.53-63.59,32.32-51.34-26.94"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#fc6',
                    strokeMiterlimit: 10,
                    strokeWidth: 12,
                  }}
                />
                <path
                  d="M699.74,460.1s11.1,9.06-1.25,24.43"
                  transform="translate(-22.62 -7.33)"
                  style={{
                    fill: 'none',
                    stroke: '#fe4c00',
                    strokeMiterlimit: 10,
                    strokeWidth: 24,
                  }}
                />
                <path
                  d="M643.26,431.06h8.49a7.27,7.27,0,0,1,7.27,7.27V440a5.15,5.15,0,0,1-5.15,5.15H643.26a7,7,0,0,1-7-7v0a7,7,0,0,1,7-7Z"
                  transform="translate(3.76 -43.99) rotate(3.31)"
                  style={{
                    fill: '#fc6',
                  }}
                />
              </g>
              <path
                d="M533.34,473h3.79a12,12,0,0,1,12,12v0a4.21,4.21,0,0,1-4.21,4.21h-17a4.21,4.21,0,0,1-4.21-4.21v-2.4a9.63,9.63,0,0,1,9.63-9.63Z"
                transform="translate(-127.46 145.14) rotate(-14.75)"
                style={{
                  fill: '#ff9100',
                }}
              />
            </g>
          </g>
          <rect
            x={4.49}
            y={567.04}
            width={209.95}
            height={9.31}
            style={{
              fill: '#dd883c',
            }}
          />
          <g>
            <rect
              x={11.14}
              y={576.35}
              width={6.32}
              height={48.88}
              style={{
                fill: '#dd883c',
              }}
            />
            <rect
              x={11.14}
              y={576.35}
              width={6.32}
              height={3.37}
              style={{
                fill: '#c66f28',
              }}
            />
          </g>
          <g>
            <rect
              x={201.13}
              y={576.35}
              width={6.32}
              height={48.88}
              style={{
                fill: '#dd883c',
              }}
            />
            <rect
              x={201.13}
              y={576.35}
              width={6.32}
              height={3.37}
              style={{
                fill: '#c66f28',
              }}
            />
          </g>
          <line
            x1={4.43}
            y1={624.9}
            x2={220.7}
            y2={624.9}
            style={{
              fill: 'none',
              stroke: '#ffd505',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 2,
            }}
          />
          <path
            d="M1285.49,464.6c0,4.92-4,4.92-4,9.84s4,4.92,4,9.85-4,4.92-4,9.84,4,4.92,4,9.84-4,4.93-4,9.85H1151s4-4.92,4-9.85-4-4.92-4-9.84,4-4.92,4-9.84-4-4.93-4-9.85,4-4.92,4-9.84Z"
            transform="translate(-22.62 -7.33)"
            style={{
              mixBlendMode: 'multiply',
              fill: 'url(#linear-gradient-4)',
            }}
          />
          <path
            d="M862.5,464.6c0,4.92-4,4.92-4,9.84s4,4.92,4,9.85-4,4.92-4,9.84,4,4.92,4,9.84-4,4.93-4,9.85H728s4-4.92,4-9.85-4-4.92-4-9.84,4-4.92,4-9.84-4-4.93-4-9.85,4-4.92,4-9.84Z"
            transform="translate(-22.62 -7.33)"
            style={{
              mixBlendMode: 'multiply',
              fill: 'url(#linear-gradient-5)',
            }}
          />
          <g id="cld3">
            <path
              d="M630.1,109.55a24,24,0,0,1,12.63,3.58,33.74,33.74,0,0,1,31.06-20.57c1.09,0,2.15.07,3.21.17a41.49,41.49,0,0,1,76.94,9.69,25.75,25.75,0,0,1,3.43-.26,25.24,25.24,0,0,1,25.24,25.24,25.75,25.75,0,0,1-.32,3.85H606A24.2,24.2,0,0,1,630.1,109.55Z"
              transform="translate(-22.62 -7.33)"
              style={{
                fill: '#fcf3e0',
                opacity: 0.72,
              }}
            />
          </g>
          <g
            id="cld1"
            style={{
              opacity: 0.8200000000000001,
            }}
          >
            <path
              d="M328.91,141.78a24.78,24.78,0,0,0-13.23,3.82,29.48,29.48,0,0,0-56.43,6.23,17.07,17.07,0,0,0-3.06-.29,16.39,16.39,0,0,0-16.33,15.07H353.74A24.83,24.83,0,0,0,328.91,141.78Z"
              transform="translate(-22.62 -7.33)"
              style={{
                fill: '#fcf3e0',
              }}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgBritainHeroDesktop;