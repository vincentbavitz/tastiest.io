import * as React from 'react';

function SvgItalyHeroMobile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1635.11 781.14"
      {...props}
    >
      <style>
        {
          '\r\n \r\n \r\n\r\n\r\n#stick {\r\n    animation-name: diamondMoves;\r\n    animation-duration: 8s;\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n    transform-origin: 30% 10%;\r\n}\r\n@keyframes diamondMoves {\r\n  \r\n    20%  { transform: rotateZ(-3deg); }\r\n   \r\n    40%  { transform: rotateZ(3deg); }\r\n  \r\n    60%  { transform: rotateY(-5deg); }\r\n   \r\n    80%  { transform: rotateY(5deg); }\r\n  \r\n}\r\n#tarm2{\r\n    animation-name: adiamondMoves;\r\n    animation-duration: 8s;\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n    transform-origin: 20% 5%;\r\n}\r\n@keyframes adiamondMoves {\r\n    \r\n    20%  { transform: rotateZ(-3deg); }\r\n    \r\n    40%  { transform: rotateZ(3deg); }\r\n    \r\n    60%  { transform: rotateY(-5deg); }\r\n   \r\n    80%  { transform: rotateY(5deg); }\r\n    \r\n}\r\n#tarm1{\r\n    animation-name: a2diamondMoves;\r\n    animation-duration: 2s;\r\n\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n    transform-origin: left bottom;\r\n}\r\n@keyframes a2diamondMoves {\r\n    \r\n    100%  { transform: rotateZ(8deg); }\r\n}\r\n#thead1{\r\n    animation-name: h1diamondMoves;\r\n    animation-duration: 2s;\r\n\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n    transform-origin: bottom;\r\n}\r\n@keyframes h1diamondMoves {\r\n    \r\n    100%  { transform: rotateZ(5deg); }\r\n}\r\n#thead2{\r\n    animation-name: h2diamondMoves;\r\n    animation-duration: 2s;\r\n\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n    transform-origin: bottom;\r\n}\r\n@keyframes h2diamondMoves {\r\n    \r\n    100%  { transform: rotateZ(7deg); }\r\n}\r\n#slights  {\r\n    animation-name: cdiamondOpacity;\r\n    animation-duration:  5s;\r\n    animation-direction: alternate;\r\n    animation-iteration-count: infinite;\r\n    animation-timing-function: ease-in-out;\r\n    \r\n}\r\n\r\n@keyframes cdiamondOpacity {\r\n    0%   { opacity: .8; }\r\n    50%   { opacity: .3; }\r\n    60%   { opacity: .8; }\r\n    70%   { opacity: .3;}\r\n    100%   { opacity: .8; }\r\n\r\n}\r\n#tc4{\r\n    animation: tc4 55s linear infinite;\r\n    transform-origin: center;\r\n    \r\n    }\r\n    \r\n      @keyframes tc4 { 0%{opacity: 0; transform: translateX(200px)}\r\n      50%{opacity: 0; transform: translateX(200px)}\r\n      52%{opacity: 0;}\r\n      54%{opacity: 1;}\r\n      \r\n      98%{opacity: 1;}\r\n      100%{opacity: 0; transform: translateX(-1090px)}\r\n      }\r\n#tc3{\r\n        animation: tc3 50s linear infinite;\r\n        transform-origin: center;\r\n                \r\n    }\r\n        \r\n    @keyframes tc3 { 0%{opacity: 0; transform: translateX(400px)}\r\n    25%{opacity: 0; transform: translateX(400px)}\r\n    27%{opacity: 0;}\r\n    29%{opacity: 1;}\r\n    \r\n    98%{opacity: 1;}\r\n    100%{opacity: 0; transform: translateX(-755px)}\r\n    }\r\n    #tc2{\r\n    animation: tc2 40s linear infinite;\r\n    transform-origin: center;\r\n            \r\n    }\r\n            \r\n      @keyframes tc2 { 0%{opacity: 0; transform: translateX(480px)}\r\n      15%{opacity: 0; transform: translateX(480px)}\r\n      17%{opacity: 0;}\r\n      19%{opacity: 1;}\r\n      \r\n      98%{opacity: 1;}\r\n      100%{opacity: 0; transform: translateX(-850px)}\r\n      }\r\n    #tc1{\r\n        animation: tc1 40s linear infinite;\r\n        transform-origin: center;\r\n        \r\n    }\r\n        \r\n    @keyframes tc1 { 0%{opacity: 0; transform: translateX(800px)}\r\n    2%{opacity: 0;}\r\n    4%{opacity: 1;}\r\n    \r\n    98%{opacity: 1;}\r\n    100%{opacity: 0; transform: translateX(-550px)}\r\n    }\r\n    #boat,#g1,#g2{\r\n        animation-name: bot;\r\n        animation-duration: 2s;\r\n    \r\n        animation-iteration-count: infinite;\r\n        animation-direction: alternate;\r\n        animation-timing-function: linear;\r\n        transform-box: fill-box;\r\n        transform-origin: bottom;\r\n    }\r\n    @keyframes bot {\r\n        \r\n        100%  { transform: translateX(10px); }\r\n    }\r\n    #hand2{\r\n        animation-name: h2;\r\n        animation-duration: 2s;\r\n    \r\n        animation-iteration-count: infinite;\r\n        animation-direction: alternate;\r\n        animation-timing-function: linear;\r\n        transform-box: fill-box;\r\n        transform-origin: bottom;\r\n    }\r\n    @keyframes h2 {\r\n        \r\n        100%  { transform: rotateZ(-7deg); }\r\n    }\r\n    #tleaf1,#tleaf2,#tleaf3{\r\n        animation-name: h2;\r\n        animation-duration: 3s;\r\n    \r\n        animation-iteration-count: infinite;\r\n        animation-timing-function: linear;\r\n        animation-direction: alternate;\r\n        transform-box: fill-box;\r\n        transform-origin: bottom;\r\n    }\r\n    @keyframes h2 {\r\n        \r\n        50%  { transform: translateX(.5px) skew(-5deg); }\r\n        100%  { transform: translateX(.5px) skew(5deg); }\r\n    }\r\n    #leaf5,#leaf4{\r\n        animation-name: h3;\r\n        animation-duration: 3s;\r\n    \r\n        animation-iteration-count: infinite;\r\n        animation-timing-function: linear;\r\n        animation-direction: alternate;\r\n        transform-box: fill-box;\r\n        transform-origin: bottom;\r\n    }\r\n    @keyframes h3 {\r\n        \r\n        50%  { transform: translateX(.5px) skew(-5deg); }\r\n        100%  { transform: translateX(.5px) skew(5deg); }\r\n    }\r\n    #ta{\r\n        animation: c 5s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes c{\r\n    \r\n        0%{ opacity: 0; transform: translateY(0px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        20%{opacity: 1;}\r\n        90%{ opacity: 0; transform: translateY(-17px);}\r\n        100%{ opacity: 0; transform: translateY(-17px);}\r\n        \r\n    }\r\n    #tb{\r\n        animation: b 6s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes b{\r\n    \r\n        0%{ opacity: 0; transform: translateY(.5px);}\r\n        10%{ opacity: 0; transform: translateY(.5px);}\r\n        20%{ opacity: 1; transform: translateY(0px);}\r\n       \r\n        80%{ opacity: 1; transform: translateY(-25px);}\r\n        90%{ opacity: 0; transform: translateY(-25px);}\r\n        100%{ opacity: 0; transform: translateY(-25px);}\r\n        \r\n    }\r\n    #tc{\r\n        animation: c 7s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes c{\r\n    \r\n        0%{ opacity: 0; transform: translateY(1px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        20%{ opacity: 1; transform: translateY(0px);}\r\n        70%{ opacity: 1; transform: translateY(-20px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-20px);}\r\n        \r\n    }\r\n    #td{\r\n        animation: d 8s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes d{\r\n    \r\n        0%{ opacity: 0; transform: translateY(1.5px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        25%{ opacity: 1; transform: translateY(0px);}\r\n       \r\n        70%{ opacity: 1; transform: translateY(-11px);}\r\n        90%{ opacity: 0; transform: translateY(-11px);}\r\n        100%{ opacity: 0; transform: translateY(-11px);}\r\n        \r\n    }\r\n    #te{\r\n        animation: e 9s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes e{\r\n    \r\n        0%{ opacity: 0; transform: translateY(1.8px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        30%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-17px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-17x);}\r\n        \r\n    }\r\n    #tf{\r\n        animation: f 10s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes f{\r\n    \r\n        0%{ opacity: 0; transform: translateY(2px);}\r\n        15%{ opacity: 0; transform: translateY(0px);}\r\n        35%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-25px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-25px);}\r\n        \r\n    }\r\n    #tg{\r\n        animation: g 11s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes g{\r\n    \r\n        0%{ opacity: 0; transform: translateY(2.2px);}\r\n        20%{ opacity: 0; transform: translateY(0px);}\r\n        40%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-23px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-23px);}\r\n        \r\n    }\r\n    #th{\r\n        animation: h 12s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes h{\r\n    \r\n        0%{ opacity: 0; transform: translateY(2.5px);}\r\n        25%{ opacity: 0; transform: translateY(0px);}\r\n        45%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-20px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-20px);}\r\n        \r\n    }\r\n    #ti{\r\n        animation: i 13s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes i{\r\n    \r\n        0%{ opacity: 0; transform: translateY(3px);}\r\n        30%{ opacity: 0; transform: translateY(0px);}\r\n        \r\n        50%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-20px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n\r\n        100%{ opacity: 0; transform: translateY(-20px);}\r\n        \r\n    }\r\n \r\n '
        }
      </style>
      <defs>
        <linearGradient
          id="linear-gradient"
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(-94.11, 0, 0, 94.11, 1374.51, -73152.88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} />
          <stop offset={0.01} />
          <stop offset={0.12} stopColor="#fff" />
          <stop offset={0.59} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(-186.8, 0, 0, 406.79, 1612.99, -317127.54)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} />
          <stop offset={0.01} />
          <stop offset={0.17} stopColor="#fff" />
          <stop offset={0.62} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1={0}
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="translate(1590.38 259035.75) rotate(180) scale(164.18 330.71)"
          xlinkHref="#linear-gradient-2"
        />
        <linearGradient
          id="linear-gradient-4"
          x1={0}
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="translate(1612.99 10073.96) rotate(180) scale(186.8 12.7)"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-5"
          x1={0}
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(-127.47, 0, 0, 127.47, 1581.49, -99182.96)"
          xlinkHref="#linear-gradient"
        />
        <clipPath id="clip-path">
          <rect
            x={256.66}
            y={370.03}
            width={276.8}
            height={203.08}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-6"
          x1={0}
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="translate(90.72 -383085.12) scale(728.31 491.21)"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-7"
          x1={0}
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(745.18, 0, 0, -65.36, 74.1, 51653.6)"
          xlinkHref="#linear-gradient"
        />
        <clipPath id="clip-path-2">
          <rect
            width={72}
            height={72}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-5">
          <rect
            x={63.49}
            y={104.83}
            width={173.25}
            height={59.36}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-6">
          <rect
            x={884.9}
            y={46.3}
            width={173.24}
            height={59.36}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-7">
          <rect
            x={1172.88}
            y={113.12}
            width={148.14}
            height={50.76}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-8">
          <rect
            x={894.87}
            y={179.81}
            width={140.83}
            height={48.26}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-9">
          <rect
            x={559.49}
            y={185.28}
            width={880.58}
            height={436.74}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-10">
          <rect
            x={1383.68}
            y={267.38}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-11">
          <rect
            x={1340.22}
            y={231.91}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-12">
          <rect
            x={1318.94}
            y={484.2}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-13">
          <rect
            x={1333.13}
            y={470.01}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-14">
          <rect
            x={1385.89}
            y={472.23}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-15">
          <rect
            x={1374.81}
            y={403.06}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-16">
          <rect
            x={1392.77}
            y={277.58}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-17">
          <rect
            x={1364.83}
            y={277.58}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-18">
          <rect
            x={1185.48}
            y={272.7}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-19">
          <rect
            x={1194.57}
            y={282.9}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-20">
          <rect
            x={1248.89}
            y={231.47}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-21">
          <rect
            x={1257.98}
            y={241.67}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-22">
          <rect
            x={1230.04}
            y={241.67}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-23">
          <rect
            x={1188.36}
            y={227.48}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-24">
          <rect
            x={1213.19}
            y={372.69}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-25">
          <rect
            x={1213.19}
            y={395.08}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-26">
          <rect
            x={1186.37}
            y={395.08}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-27">
          <rect
            x={1192.35}
            y={454.27}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-28">
          <rect
            x={1219.18}
            y={454.27}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-29">
          <rect
            x={1204.33}
            y={466.02}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-30">
          <rect
            x={1191.69}
            y={555.53}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-31">
          <rect
            x={1218.51}
            y={555.53}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-32">
          <rect
            x={1236.8}
            y={539.07}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-33">
          <rect
            x={1205.55}
            y={521.28}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-34">
          <rect
            x={1203.66}
            y={567.28}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-35">
          <rect
            x={1259.53}
            y={483.31}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-36">
          <rect
            x={1247.11}
            y={494.84}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-37">
          <rect
            x={1183.82}
            y={497.39}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-38">
          <rect
            x={1263.19}
            y={504.71}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-39">
          <rect
            x={1183.13}
            y={486.69}
            width={11.05}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-40">
          <rect
            x={1183.1}
            y={478.1}
            width={5.77}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-41">
          <rect
            x={1201.22}
            y={383.77}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-42">
          <rect
            x={1194.57}
            y={261.62}
            width={21.73}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-43">
          <rect
            x={1280.4}
            y={275.78}
            width={94.11}
            height={172.49}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <mask
          id="mask"
          x={1280.4}
          y={275.78}
          width={94.11}
          height={172.49}
          maskUnits="userSpaceOnUse"
        >
          <rect
            x={1280.4}
            y={275.78}
            width={94.11}
            height={172.49}
            style={{
              fill: 'url(#linear-gradient)',
            }}
          />
        </mask>
        <linearGradient
          id="linear-gradient-8"
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(-94.11, 0, 0, 94.11, 1374.51, -73152.88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.01} stopColor="#fff" />
          <stop offset={0.12} stopColor="#fffcf3" />
          <stop offset={0.59} stopColor="#ffdb94" />
          <stop offset={1} stopColor="#ffdb94" />
        </linearGradient>
        <clipPath id="clip-path-44">
          <rect
            x={1280.4}
            y={275.78}
            width={45.47}
            height={172.52}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-45">
          <rect
            x={1280.4}
            y={275.78}
            width={45.47}
            height={172.52}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-9"
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(-45.47, 0, 0, 45.47, 1325.87, -35153.36)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.01} stopColor="#fff" />
          <stop offset={0.11} stopColor="#fffdf9" />
          <stop offset={0.26} stopColor="#fff7e7" />
          <stop offset={0.43} stopColor="#ffedc9" />
          <stop offset={0.62} stopColor="#ffdfa0" />
          <stop offset={0.67} stopColor="#ffdb94" />
          <stop offset={1} stopColor="#ffdb94" />
        </linearGradient>
        <clipPath id="clip-path-46">
          <rect
            x={1280.4}
            y={275.78}
            width={3.46}
            height={172.54}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <pattern
          id="Unnamed_Pattern"
          data-name="Unnamed Pattern"
          width={72}
          height={72}
          patternTransform="matrix(1, 0, 0, -1, 113.12, 17479.35)"
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
          <g
            style={{
              clipPath: 'url(#clip-path-2)',
            }}
          >
            <rect
              x={69}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={68}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={68}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-3}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={32}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={50}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={68}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={14}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={14}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={32}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={50}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-75}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={-75}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={69}
              y={32}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={69}
              y={50}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={69}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={69}
              y={14}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={69}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={68}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={68}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-3}
              y={32}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-3}
              y={50}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-3}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-3}
              y={14}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-3}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={32}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={50}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={68}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={14}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={14}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={32}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={50}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-4}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={14}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={32}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={50}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-4}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={14}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={32}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={50}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-4}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={14}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={32}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={50}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-4}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={14}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={32}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={50}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-75}
              y={32}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-75}
              y={50}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-75}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-75}
              y={14}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-75}
              y={-4}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={-3}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-4}
              y={50}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-4}
              y={32}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-4}
              y={14}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-4}
              y={-4}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={69}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={68}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={68}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-3}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={32}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={50}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={68}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={14}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={14}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={32}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={50}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={68}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
            <rect
              x={-75}
              y={68}
              width={78}
              height={8}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={69}
              width={8}
              height={78}
              style={{
                fill: '#fc5e5e',
              }}
            />
            <rect
              x={-4}
              y={68}
              width={8}
              height={8}
              style={{
                fill: '#db1616',
              }}
            />
          </g>
        </pattern>
        <mask
          id="mask-2"
          x={1182.15}
          y={494.28}
          width={66.05}
          height={38.69}
          maskUnits="userSpaceOnUse"
        >
          <use transform="translate(1182 494.14)" xlinkHref="#image" />
        </mask>
        <image
          id="image"
          width={67}
          height={39}
          xlinkHref="data:image/png;base64,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"
        />
        <mask
          id="mask-3"
          x={1182.15}
          y={494.28}
          width={66.05}
          height={38.69}
          maskUnits="userSpaceOnUse"
        >
          <use transform="translate(1182 494.14)" xlinkHref="#image" />
        </mask>
        <clipPath id="clip-path-47">
          <rect
            x={9.46}
            y={615.69}
            width={1456.56}
            height={162.97}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-48">
          <rect
            x={9.46}
            y={615.69}
            width={1456.57}
            height={162.97}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-10"
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(1456.57, 0, 0, -1456.57, 9.46, 1138482.72)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.01} stopColor="#fff" />
          <stop offset={0.08} stopColor="#eefafa" />
          <stop offset={0.22} stopColor="#c3eeec" />
          <stop offset={0.41} stopColor="#7edbd6" />
          <stop offset={0.5} stopColor="#5ad1cb" />
          <stop offset={0.93} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-11"
          x1={990.04}
          y1={232.35}
          x2={1051.64}
          y2={246.57}
          gradientTransform="matrix(1, 0, 0, -1, -1.44, 900.67)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#bc7235" />
        </linearGradient>
        <clipPath id="clip-path-49">
          <rect
            x={1426.19}
            y={596.74}
            width={186.8}
            height={73.01}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <mask
          id="mask-11"
          x={1426.19}
          y={596.74}
          width={186.8}
          height={73.02}
          maskUnits="userSpaceOnUse"
        >
          <rect
            x={1426.19}
            y={596.74}
            width={186.8}
            height={73.01}
            style={{
              fill: 'url(#linear-gradient-2)',
            }}
          />
        </mask>
        <linearGradient
          id="linear-gradient-12"
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(-186.8, 0, 0, 406.79, 1612.99, -317127.49)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.01} stopColor="#fff" />
          <stop offset={0.17} stopColor="#fffcf3" />
          <stop offset={0.38} stopColor="#f9be98" />
          <stop offset={0.62} stopColor="#f1732b" />
          <stop offset={1} stopColor="#f1732b" />
        </linearGradient>
        <clipPath id="clip-path-50">
          <rect
            width={1635.11}
            height={781.14}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-51">
          <rect
            x={1426.19}
            y={596.73}
            width={186.8}
            height={4.73}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-52">
          <rect
            x={1426.19}
            y={669.75}
            width={164.19}
            height={67.53}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-53">
          <rect
            x={1426.19}
            y={669.75}
            width={164.18}
            height={67.53}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <mask
          id="mask-12"
          x={1426.19}
          y={669.75}
          width={164.18}
          height={67.53}
          maskUnits="userSpaceOnUse"
        >
          <rect
            x={1426.19}
            y={669.75}
            width={164.18}
            height={67.53}
            style={{
              fill: 'url(#linear-gradient-3)',
            }}
          />
        </mask>
        <linearGradient
          id="linear-gradient-13"
          x1={0}
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="translate(1590.38 259035.75) rotate(180) scale(164.18 330.71)"
          xlinkHref="#linear-gradient-12"
        />
        <clipPath id="clip-path-54">
          <rect
            x={1426.19}
            y={148.18}
            width={186.8}
            height={2.87}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-55">
          <rect
            x={1426.19}
            y={148.18}
            width={186.8}
            height={2.87}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <mask
          id="mask-13"
          x={1426.19}
          y={148.18}
          width={186.8}
          height={2.87}
          maskUnits="userSpaceOnUse"
        >
          <rect
            x={1426.19}
            y={148.18}
            width={186.8}
            height={2.87}
            style={{
              fill: 'url(#linear-gradient-4)',
            }}
          />
        </mask>
        <linearGradient
          id="linear-gradient-14"
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="translate(1612.99 10073.96) rotate(180) scale(186.8 12.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.01} stopColor="#fff" />
          <stop offset={0.12} stopColor="#fffcf3" />
          <stop offset={0.59} stopColor="#fc6" />
          <stop offset={1} stopColor="#fc6" />
        </linearGradient>
        <clipPath id="clip-path-56">
          <rect
            x={1436.22}
            y={618.08}
            width={22.38}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-57">
          <rect
            x={1426.13}
            y={168.76}
            width={132.05}
            height={419.63}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-58">
          <rect
            x={1427.84}
            y={274.45}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-59">
          <rect
            x={1439.05}
            y={284.64}
            width={25.18}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-60">
          <rect
            x={1506.07}
            y={233.21}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-61">
          <rect
            x={1517.28}
            y={243.41}
            width={25.18}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-62">
          <rect
            x={1482.82}
            y={243.41}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-63">
          <rect
            x={1431.4}
            y={229.22}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-64">
          <rect
            x={1433.31}
            y={411.68}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-65">
          <rect
            x={1475.57}
            y={581.38}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-66">
          <rect
            x={1436.32}
            y={365.56}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-67">
          <rect
            x={1437.55}
            y={492.93}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-68">
          <rect
            x={1452.32}
            y={504.68}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-69">
          <rect
            x={1437.55}
            y={203.01}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-70">
          <rect
            x={1470.65}
            y={203.01}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-71">
          <rect
            x={1493.21}
            y={186.55}
            width={25.18}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-72">
          <rect
            x={1454.65}
            y={168.76}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-73">
          <rect
            x={1452.32}
            y={214.76}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-74">
          <rect
            x={1503.2}
            y={528.62}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-75">
          <rect
            x={1487.88}
            y={540.15}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-76">
          <rect
            x={1427.84}
            y={560.66}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-77">
          <rect
            x={1507.71}
            y={550.01}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-78">
          <rect
            x={1426.17}
            y={549.96}
            width={13.64}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-79">
          <rect
            x={1426.13}
            y={541.36}
            width={7.13}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-80">
          <rect
            x={1533.01}
            y={513.21}
            width={25.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-81">
          <rect
            x={1439.05}
            y={263.36}
            width={25.18}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-82">
          <rect
            x={1445.48}
            y={628.49}
            width={22.37}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-83">
          <rect
            x={1435.3}
            y={638.69}
            width={22.37}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-84">
          <rect
            x={1474.54}
            y={653.32}
            width={18.18}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-85">
          <rect
            x={1484.3}
            y={643.35}
            width={18.17}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-86">
          <rect
            x={1472.52}
            y={612.98}
            width={18.18}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-87">
          <rect
            x={1512.79}
            y={625.95}
            width={20.21}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-88">
          <rect
            x={1548.89}
            y={616.19}
            width={20.22}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-89">
          <rect
            x={1454.01}
            y={286.59}
            width={127.47}
            height={208.75}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <mask
          id="mask-14"
          x={1454.01}
          y={286.59}
          width={127.47}
          height={208.75}
          maskUnits="userSpaceOnUse"
        >
          <rect
            x={1454.01}
            y={286.59}
            width={127.47}
            height={208.75}
            style={{
              fill: 'url(#linear-gradient-5)',
            }}
          />
        </mask>
        <linearGradient
          id="linear-gradient-15"
          x1={0}
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(-127.47, 0, 0, 127.47, 1581.49, -99182.96)"
          xlinkHref="#linear-gradient-8"
        />
        <clipPath id="clip-path-90">
          <rect
            x={1454.02}
            y={286.59}
            width={59.61}
            height={208.8}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-91">
          <rect
            x={1454.02}
            y={286.59}
            width={59.61}
            height={208.79}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-16"
          x1={0}
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(-59.61, 0, 0, 59.61, 1513.63, -46175)"
          xlinkHref="#linear-gradient-9"
        />
        <clipPath id="clip-path-92">
          <rect
            x={1454.02}
            y={286.59}
            width={4.53}
            height={204.68}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-93">
          <rect
            x={89.96}
            y={218.79}
            width={265.83}
            height={297.94}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-94">
          <rect
            x={255.71}
            y={267.06}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-95">
          <rect
            x={265.42}
            y={277.94}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-96">
          <rect
            x={323.38}
            y={223.05}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-97">
          <rect
            x={333.08}
            y={233.93}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-98">
          <rect
            x={303.27}
            y={233.93}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-99">
          <rect
            x={194.79}
            y={309.51}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-100">
          <rect
            x={204.49}
            y={320.39}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-101">
          <rect
            x={174.69}
            y={320.39}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-102">
          <rect
            x={143.8}
            y={245.22}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-103">
          <rect
            x={153.51}
            y={256.1}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-104">
          <rect
            x={123.7}
            y={256.1}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-105">
          <rect
            x={258.79}
            y={218.79}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-106">
          <rect
            x={315.1}
            y={306.33}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-107">
          <rect
            x={315.1}
            y={330.22}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-108">
          <rect
            x={286.47}
            y={330.22}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-109">
          <rect
            x={256.66}
            y={362.87}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-110">
          <rect
            x={285.29}
            y={362.87}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-111">
          <rect
            x={269.44}
            y={375.41}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-112">
          <rect
            x={256.66}
            y={497.19}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-113">
          <rect
            x={285.29}
            y={497.19}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-114">
          <rect
            x={304.81}
            y={479.63}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-115">
          <rect
            x={271.45}
            y={460.64}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-116">
          <rect
            x={269.44}
            y={509.73}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-117">
          <rect
            x={109.01}
            y={497.19}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-118">
          <rect
            x={137.64}
            y={497.19}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-119">
          <rect
            x={135.88}
            y={441.94}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-120">
          <rect
            x={149.62}
            y={428.63}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-121">
          <rect
            x={121.79}
            y={509.73}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-122">
          <rect
            x={313.44}
            y={400.96}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-123">
          <rect
            x={300.19}
            y={413.26}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-124">
          <rect
            x={248.26}
            y={435.15}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-125">
          <rect
            x={198.16}
            y={388.59}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-126">
          <rect
            x={317.35}
            y={423.79}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-127">
          <rect
            x={90}
            y={423.5}
            width={11.8}
            height={7.47}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-128">
          <rect
            x={89.96}
            y={414.32}
            width={6.17}
            height={7.47}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-129">
          <rect
            x={302.32}
            y={318.16}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-130">
          <rect
            x={265.42}
            y={255.23}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-131">
          <rect
            x={109.84}
            y={348.2}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-132">
          <rect
            x={119.54}
            y={359.08}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-133">
          <rect
            x={119.54}
            y={336.37}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-134">
          <rect
            x={680.96}
            y={218.79}
            width={108.54}
            height={297.94}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-135">
          <rect
            x={758.32}
            y={267.06}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-136">
          <rect
            x={748.62}
            y={277.94}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-137">
          <rect
            x={690.66}
            y={223.05}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-138">
          <rect
            x={680.96}
            y={233.93}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-139">
          <rect
            x={710.77}
            y={233.93}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-140">
          <rect
            x={755.25}
            y={218.79}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-141">
          <rect
            x={698.94}
            y={306.33}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-142">
          <rect
            x={698.94}
            y={330.22}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-143">
          <rect
            x={727.57}
            y={330.22}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-144">
          <rect
            x={757.38}
            y={362.87}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-145">
          <rect
            x={728.75}
            y={362.87}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-146">
          <rect
            x={744.6}
            y={375.41}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-147">
          <rect
            x={757.38}
            y={497.19}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-148">
          <rect
            x={728.75}
            y={497.19}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-149">
          <rect
            x={709.23}
            y={479.63}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-150">
          <rect
            x={742.59}
            y={460.64}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-151">
          <rect
            x={744.6}
            y={509.73}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-152">
          <rect
            x={700.59}
            y={400.96}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-153">
          <rect
            x={713.84}
            y={413.26}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-154">
          <rect
            x={765.77}
            y={435.15}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-155">
          <rect
            x={696.69}
            y={423.79}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-156">
          <rect
            x={777.67}
            y={423.5}
            width={11.8}
            height={7.47}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-157">
          <rect
            x={783.33}
            y={414.32}
            width={6.17}
            height={7.47}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-158">
          <rect
            x={711.71}
            y={318.16}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-159">
          <rect
            x={748.62}
            y={255.23}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-160">
          <rect
            x={719.58}
            y={359.02}
            width={24.03}
            height={87.82}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-161">
          <rect
            x={720.79}
            y={403.35}
            width={21.62}
            height={41.14}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-162">
          <rect
            x={720.79}
            y={405.08}
            width={21.62}
            height={39.4}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <mask
          id="mask-15"
          x={-75}
          y={3}
          width={612.72}
          height={570.12}
          maskUnits="userSpaceOnUse"
        >
          <rect x={256.66} y={370.03} width={276.8} height={203.08} />
          <g
            style={{
              isolation: 'isolate',
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path)',
              }}
            >
              <rect
                x={349.28}
                y={331.34}
                width={188.44}
                height={240.6}
                style={{
                  fill: '#fff',
                }}
              />
            </g>
          </g>
        </mask>
        <clipPath id="clip-path-163">
          <rect
            x={256.66}
            y={370.03}
            width={276.8}
            height={203.08}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-164">
          <rect
            x={242.18}
            y={664.75}
            width={576.9}
            height={79.38}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-165">
          <rect
            x={242.18}
            y={664.75}
            width={576.9}
            height={79.38}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-17"
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(576.9, 0, 0, -300.37, 242.18, 235332.88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.01} stopColor="#fff" />
          <stop offset={0.12} stopColor="#fffcf3" />
          <stop offset={0.59} stopColor="#ffcc2b" />
          <stop offset={1} stopColor="#ffcc2b" />
        </linearGradient>
        <clipPath id="clip-path-166">
          <rect
            x={90.72}
            y={570.38}
            width={728.31}
            height={94.37}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <mask
          id="mask-16"
          x={90.72}
          y={570.38}
          width={728.31}
          height={94.37}
          maskUnits="userSpaceOnUse"
        >
          <rect
            x={90.72}
            y={570.38}
            width={728.31}
            height={94.37}
            style={{
              fill: 'url(#linear-gradient-6)',
            }}
          />
        </mask>
        <linearGradient
          id="linear-gradient-18"
          x1={0}
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="translate(90.72 -383085.12) scale(728.31 491.21)"
          xlinkHref="#linear-gradient-8"
        />
        <clipPath id="clip-path-167">
          <rect
            x={74.1}
            y={570.38}
            width={745.18}
            height={26.63}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-19"
          x1={0}
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="translate(74.1 -392008.76) scale(745.18 502.59)"
          xlinkHref="#linear-gradient-17"
        />
        <clipPath id="clip-path-169">
          <rect
            x={74.1}
            y={597.01}
            width={745.18}
            height={3.46}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-170">
          <rect
            x={74.1}
            y={597.01}
            width={745.18}
            height={3.46}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <mask
          id="mask-17"
          x={74.1}
          y={597.01}
          width={745.18}
          height={3.46}
          maskUnits="userSpaceOnUse"
        >
          <rect
            x={74.1}
            y={597.01}
            width={745.18}
            height={3.46}
            style={{
              fill: 'url(#linear-gradient-7)',
            }}
          />
        </mask>
        <linearGradient
          id="linear-gradient-20"
          y1={781.14}
          x2={1}
          y2={781.14}
          gradientTransform="matrix(745.18, 0, 0, -65.36, 74.1, 51653.6)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.01} stopColor="#fff" />
          <stop offset={0.12} stopColor="#fffcf3" />
          <stop offset={0.59} stopColor="#a67c52" />
          <stop offset={1} stopColor="#a67c52" />
        </linearGradient>
        <clipPath id="clip-path-171">
          <rect
            x={312.49}
            y={606.06}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-172">
          <rect
            x={343.23}
            y={606.06}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-173">
          <rect
            x={372.63}
            y={639.71}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-174">
          <rect
            x={391.34}
            y={623.47}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-175">
          <rect
            x={482.21}
            y={641.45}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-176">
          <rect
            x={498.24}
            y={627.53}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-177">
          <rect
            x={512.14}
            y={641.74}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-178">
          <rect
            x={638.95}
            y={642.22}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-179">
          <rect
            x={670.65}
            y={642.22}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-180">
          <rect
            x={654.09}
            y={654.05}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-181">
          <rect
            x={753.46}
            y={615.72}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-182">
          <rect
            x={740.68}
            y={605.31}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-183">
          <rect
            x={562.39}
            y={621.73}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-184">
          <rect
            x={789.51}
            y={647.75}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-185">
          <rect
            x={616.33}
            y={604.69}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-186">
          <rect
            x={327.46}
            y={619.11}
            width={22.72}
            height={7}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-187">
          <rect
            x={720.77}
            y={257.86}
            width={79.16}
            height={79.16}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-189">
          <rect
            x={756.24}
            y={279.38}
            width={27.77}
            height={37.24}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-190">
          <rect
            x={253.75}
            y={257.86}
            width={79.16}
            height={79.16}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-191">
          <path
            d="M732.07,292.48a28.28,28.28,0,1,0,28.27-28.28,28.28,28.28,0,0,0-28.27,28.28"
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-192">
          <rect
            x={726.44}
            y={258.56}
            width={67.62}
            height={67.62}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-193">
          <rect
            x={726.44}
            y={258.56}
            width={67.62}
            height={67.62}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-194">
          <path
            d="M265.05,292.48a28.28,28.28,0,1,0,28.28-28.28,28.28,28.28,0,0,0-28.28,28.28"
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-195">
          <rect
            x={259.43}
            y={258.56}
            width={67.61}
            height={67.62}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-196">
          <rect
            x={259.43}
            y={258.56}
            width={67.62}
            height={67.62}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-198">
          <rect
            x={289.23}
            y={279.38}
            width={27.77}
            height={37.24}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-199">
          <rect
            x={727.81}
            y={643.1}
            width={141.53}
            height={46.48}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-200">
          <rect
            x={820.57}
            y={668.11}
            width={70.2}
            height={40.75}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-201">
          <rect
            x={715.51}
            y={707.92}
            width={29.34}
            height={2}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-202">
          <rect
            x={861.73}
            y={629.14}
            width={27.97}
            height={23.36}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <image
          id="image-2"
          width={67}
          height={39}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAnCAYAAABUr/U/AAAACXBIWXMAAAsSAAALEgHS3X78AAABMklEQVRoQ+2a0Q6DIAxFL2b//8vsYcEUhPaiMVPa87gBtscLS5wp54wXoxWflO+6fKwBFxgVyhSpzWXvXhnHXA8AkG5IxsyCbaEzc2eghMwkQxY6Wny2mdnxt7JZA/AruC2618SjGmugarOSoS1CXeBNjGQs1yhDb5usKsLsizkzVkIV0sow7S1A7wcBgL9kSA5CPMsAmpRIGR62yIgMRDIqigzPqdiJZAg2RCp2IhmCkCEIGYKQIQgZgpAhCBmCDeSTYw+UZIQQ1NvEvZA4MwStDK/pSID9v8nqVDff8zY57AKPyRgeBb1krHxuqL152ibmTR7JMCe+DKofLRkJ5CIPh+6BOUC1V4esC/37+apVXwUjA5hcVFDmWVJm3tViOFUvK+MqstlRofLzK2JOiQCAL5HaK1a0qbhNAAAAAElFTkSuQmCC"
        />
      </defs>
      <title>{'Italy_mobile'}</title>
      <g
        style={{
          isolation: 'isolate',
        }}
      >
        <g id="Layer_1" data-name="Layer 1">
          <g
            style={{
              opacity: 0.869994997978211,
              mixBlendMode: 'multiply',
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-5)',
              }}
            >
              <path
                d="M213.11,142.91a23.63,23.63,0,0,0-12.38,3.51,33.12,33.12,0,0,0-30.48-20.18c-1.06,0-2.11.06-3.15.16a40.71,40.71,0,0,0-75.48,9.51A24.64,24.64,0,0,0,63.8,164.2H236.73a23.75,23.75,0,0,0-23.62-21.29"
                style={{
                  fill: '#fcf3e0',
                }}
              />
            </g>
          </g>
          <g
            id="tc2"
            style={{
              opacity: 0.869994997978211,
              mixBlendMode: 'multiply',
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-6)',
              }}
            >
              <path
                d="M1034.52,84.38a23.55,23.55,0,0,0-12.38,3.52,33.12,33.12,0,0,0-30.48-20.18c-1.06,0-2.11.06-3.15.16A40.7,40.7,0,0,0,913,77.39,24.56,24.56,0,0,0,884.9,101.9a24.69,24.69,0,0,0,.31,3.77h172.93a23.75,23.75,0,0,0-23.62-21.29"
                style={{
                  fill: '#fcf3e0',
                }}
              />
            </g>
          </g>
          <g
            id="tc3"
            style={{
              opacity: 0.869994997978211,
              mixBlendMode: 'multiply',
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-7)',
              }}
            >
              <path
                d="M1193.07,145.68a20.16,20.16,0,0,1,10.6,3,28.31,28.31,0,0,1,26.06-17.26,26.62,26.62,0,0,1,2.69.14A34.81,34.81,0,0,1,1297,139.7a20.84,20.84,0,0,1,2.87-.22A21.18,21.18,0,0,1,1321,160.66a21.54,21.54,0,0,1-.27,3.23H1172.88a20.31,20.31,0,0,1,20.19-18.21"
                style={{
                  fill: '#fcf3e0',
                }}
              />
            </g>
          </g>
          <g
            id="tc1"
            style={{
              opacity: 0.869994997978211,
              mixBlendMode: 'multiply',
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-8)',
              }}
            >
              <path
                d="M914.07,210.76a19.16,19.16,0,0,1,10.07,2.85,26.91,26.91,0,0,1,24.78-16.4c.86,0,1.71,0,2.55.13a33.09,33.09,0,0,1,61.36,7.73,20.67,20.67,0,0,1,2.74-.2A20.13,20.13,0,0,1,1035.7,225a19.34,19.34,0,0,1-.26,3.06H894.87a19.31,19.31,0,0,1,19.2-17.3"
                style={{
                  fill: '#fcf3e0',
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.449997007846832,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-9)',
              }}
            >
              <polyline
                points="818.12 352.64 818.12 263.63 814.5 263.63 814.5 352.64"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="831.72 352.64 831.72 263.63 828.1 263.63 828.1 352.64"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="932.47 352.64 932.47 263.63 928.85 263.63 928.85 352.64"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="946.07 352.64 946.07 263.63 942.45 263.63 942.45 352.64"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="1150.87 389.52 1150.87 300.51 1147.25 300.51 1147.25 389.52"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="1164.47 396.52 1164.47 307.51 1160.84 307.51 1160.84 396.52"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="632.9 393.84 632.9 304.83 629.27 304.83 629.27 393.84"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="619.3 400.85 619.3 311.84 615.67 311.84 615.67 400.85"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="720.87 352.84 720.87 263.83 717.25 263.83 717.25 352.84"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="1084.32 359.64 1084.32 270.63 1080.7 270.63 1080.7 359.64"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="1053.41 352.84 1053.41 263.83 1049.79 263.83 1049.79 352.84"
                style={{
                  fill: '#101d23',
                }}
              />
              <polyline
                points="689.76 359.44 689.76 270.43 686.14 270.43 686.14 359.44"
                style={{
                  fill: '#101d23',
                }}
              />
              <path
                d="M1208.63,325.34l-139.28-62.6h-372L566.76,339.18a1.81,1.81,0,0,0,1.83,3.13l129.74-75.94h370.24l138.58,62.27a1.81,1.81,0,1,0,1.48-3.3Z"
                style={{
                  fill: '#101d23',
                }}
              />
              <path
                d="M1208.63,343.26l-139.28-62.59h-372L566.76,357.11a1.81,1.81,0,0,0,1.83,3.13l129.74-75.95h370.24l138.58,62.28a1.81,1.81,0,0,0,1.48-3.31"
                style={{
                  fill: '#101d23',
                }}
              />
              <path
                d="M1208.43,400.13l-139.29-62.59h-372L566.56,414a1.81,1.81,0,1,0,1.83,3.13l129.73-75.94h370.25l138.57,62.27a1.81,1.81,0,1,0,1.49-3.3"
                style={{
                  fill: '#101d23',
                }}
              />
              <rect
                x={698.25}
                y={255.67}
                width={10.35}
                height={6.95}
                style={{
                  fill: '#f9d069',
                }}
              />
              <rect
                x={695.62}
                y={260.23}
                width={15.45}
                height={94.57}
                style={{
                  fill: '#ffe499',
                }}
              />
              <path
                d="M712.39,249.61a8.85,8.85,0,1,1-8.85-8.85,8.84,8.84,0,0,1,8.85,8.85"
                style={{
                  fill: '#ffe499',
                }}
              />
              <rect
                x={1058.92}
                y={255.67}
                width={10.35}
                height={6.95}
                style={{
                  fill: '#f9d069',
                }}
              />
              <rect
                x={1056.29}
                y={260.23}
                width={15.45}
                height={94.57}
                style={{
                  fill: '#ffe499',
                }}
              />
              <path
                d="M1073.06,249.61a8.85,8.85,0,1,1-8.85-8.85,8.84,8.84,0,0,1,8.85,8.85"
                style={{
                  fill: '#ffe499',
                }}
              />
              <path
                d="M1207.89,417.85l-131.22-62.43H697.84L567.68,431.61l-8.19,56.08h15.64C577.74,432,717.67,387.16,889.9,387.16S1202.06,432,1204.67,487.69h3.22V417.85"
                style={{
                  fill: '#ffb255',
                }}
              />
              <path
                d="M709.22,370.43H695.53a3,3,0,1,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M698.09,399.17H684.4a3,3,0,0,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M670.59,399.17H656.9a3,3,0,0,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M772.88,382.17H759.19a3,3,0,0,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M784,372.9H770.32a3,3,0,0,0,0,6H784a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M799.46,382.17H785.77a3,3,0,0,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M832.22,371H818.53a3,3,0,0,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M843.35,361.77H829.66a3,3,0,1,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M858.8,371H845.11a3,3,0,0,0,0,6H858.8a3,3,0,1,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M1141.89,389.59H1128.2a3,3,0,1,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M1132.41,398.24h-13.68a3,3,0,0,0,0,6h13.68a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M1117.68,390H1104a3,3,0,1,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M1153.12,418.43h-13.69a3,3,0,1,0,0,6h13.69a3,3,0,1,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M1076.06,389h-13.68a3,3,0,0,0,0,6h13.68a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M954.19,362.44H940.51a3,3,0,1,0,0,6h13.68a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M972.74,370H959.05a3,3,0,1,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M953.88,379.29H940.2a3,3,0,1,0,0,6h13.68a3,3,0,1,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M672.2,370.43h-1.6a3,3,0,0,0-3,2.69l4.6-2.69"
                style={{
                  fill: '#ffcdc2',
                }}
              />
              <path
                d="M684.29,370.43H672.2l-4.6,2.69a1.83,1.83,0,0,0,0,.33,3,3,0,0,0,3,3h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M698.09,381.35H684.4a3,3,0,0,0,0,6h13.69a3,3,0,0,0,0-6"
                style={{
                  fill: '#ff984c',
                }}
              />
              <path
                d="M1210.74,411.85l-131.21-62.43a6.76,6.76,0,0,0-2.86-.65H697.84a6.59,6.59,0,0,0-3.36.91L564.32,425.87A6.65,6.65,0,0,0,571,437.34l128.6-75.28h375.53L1205,423.85a6.64,6.64,0,0,0,5.7-12Z"
                style={{
                  fill: '#ffe499',
                }}
              />
              <path
                d="M581.76,488c.27-5.57,2.22-11.14,6.09-16.9A69.25,69.25,0,0,1,602.38,456c11-8.77,26.32-17.18,45.13-24.71,28.23-11.32,64.3-20.72,105.56-27.25s87.71-10.21,136.83-10.2a901.46,901.46,0,0,1,120.58,7.82,636.67,636.67,0,0,1,76.43,14.86c34.38,9.08,62.47,20.51,81.67,33.11,9.6,6.29,17,12.85,21.83,19.34a41.6,41.6,0,0,1,5.54,9.63A29.32,29.32,0,0,1,1198,488l13.27-.62a46.21,46.21,0,0,0-8.34-23.7,82.67,82.67,0,0,0-17.27-18.11c-12.44-9.89-28.81-18.75-48.47-26.64-29.48-11.82-66.39-21.38-108.42-28s-89.13-10.37-138.91-10.37a915.57,915.57,0,0,0-122.37,7.94,649.54,649.54,0,0,0-78,15.19c-35.3,9.34-64.5,21.07-85.55,34.84-10.52,6.9-19,14.33-25.16,22.46a54.6,54.6,0,0,0-7.27,12.72,42.41,42.41,0,0,0-3,13.71Z"
                style={{
                  fill: '#ffe499',
                }}
              />
              <rect
                x={1183.68}
                y={211.92}
                width={256.39}
                height={410.1}
                style={{
                  fill: '#fc6',
                }}
              />
              <rect
                x={1183.68}
                y={185.28}
                width={256.39}
                height={26.64}
                style={{
                  fill: '#ffb255',
                }}
              />
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-10)',
                  }}
                >
                  <line
                    x1={1387.18}
                    y1={270.88}
                    x2={1401.91}
                    y2={270.88}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-11)',
                  }}
                >
                  <line
                    x1={1343.72}
                    y1={235.41}
                    x2={1358.45}
                    y2={235.41}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-12)',
                  }}
                >
                  <line
                    x1={1322.44}
                    y1={487.7}
                    x2={1337.17}
                    y2={487.7}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-13)',
                  }}
                >
                  <line
                    x1={1336.63}
                    y1={473.51}
                    x2={1351.36}
                    y2={473.51}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-14)',
                  }}
                >
                  <line
                    x1={1389.39}
                    y1={475.73}
                    x2={1404.12}
                    y2={475.73}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-15)',
                  }}
                >
                  <line
                    x1={1378.31}
                    y1={406.56}
                    x2={1393.04}
                    y2={406.56}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-16)',
                  }}
                >
                  <line
                    x1={1396.27}
                    y1={281.08}
                    x2={1411}
                    y2={281.08}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-17)',
                  }}
                >
                  <line
                    x1={1368.33}
                    y1={281.08}
                    x2={1383.06}
                    y2={281.08}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-18)',
                  }}
                >
                  <line
                    x1={1188.98}
                    y1={276.2}
                    x2={1203.71}
                    y2={276.2}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-19)',
                  }}
                >
                  <line
                    x1={1198.07}
                    y1={286.4}
                    x2={1212.8}
                    y2={286.4}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-20)',
                  }}
                >
                  <line
                    x1={1252.39}
                    y1={234.97}
                    x2={1267.12}
                    y2={234.97}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-21)',
                  }}
                >
                  <line
                    x1={1261.48}
                    y1={245.17}
                    x2={1276.21}
                    y2={245.17}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-22)',
                  }}
                >
                  <line
                    x1={1233.54}
                    y1={245.17}
                    x2={1248.27}
                    y2={245.17}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-23)',
                  }}
                >
                  <line
                    x1={1191.86}
                    y1={230.98}
                    x2={1206.59}
                    y2={230.98}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-24)',
                  }}
                >
                  <line
                    x1={1216.69}
                    y1={376.19}
                    x2={1231.42}
                    y2={376.19}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-25)',
                  }}
                >
                  <line
                    x1={1216.69}
                    y1={398.58}
                    x2={1231.42}
                    y2={398.58}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-26)',
                  }}
                >
                  <line
                    x1={1189.87}
                    y1={398.58}
                    x2={1204.6}
                    y2={398.58}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-27)',
                  }}
                >
                  <line
                    x1={1195.86}
                    y1={457.77}
                    x2={1210.58}
                    y2={457.77}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-28)',
                  }}
                >
                  <line
                    x1={1222.68}
                    y1={457.77}
                    x2={1237.41}
                    y2={457.77}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-29)',
                  }}
                >
                  <line
                    x1={1207.83}
                    y1={469.52}
                    x2={1222.55}
                    y2={469.52}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-30)',
                  }}
                >
                  <line
                    x1={1195.19}
                    y1={559.03}
                    x2={1209.92}
                    y2={559.03}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-31)',
                  }}
                >
                  <line
                    x1={1222.01}
                    y1={559.03}
                    x2={1236.74}
                    y2={559.03}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-32)',
                  }}
                >
                  <line
                    x1={1240.3}
                    y1={542.57}
                    x2={1255.03}
                    y2={542.57}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-33)',
                  }}
                >
                  <line
                    x1={1209.05}
                    y1={524.78}
                    x2={1223.77}
                    y2={524.78}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-34)',
                  }}
                >
                  <line
                    x1={1207.16}
                    y1={570.78}
                    x2={1221.89}
                    y2={570.78}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-35)',
                  }}
                >
                  <line
                    x1={1263.03}
                    y1={486.81}
                    x2={1277.76}
                    y2={486.81}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-36)',
                  }}
                >
                  <line
                    x1={1250.61}
                    y1={498.34}
                    x2={1265.34}
                    y2={498.34}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-37)',
                  }}
                >
                  <line
                    x1={1187.32}
                    y1={500.89}
                    x2={1202.05}
                    y2={500.89}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-38)',
                  }}
                >
                  <line
                    x1={1266.69}
                    y1={508.21}
                    x2={1281.42}
                    y2={508.21}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: 'multiply',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-39)',
                  }}
                >
                  <path
                    d="M1183.17,493.69h7.51a3.5,3.5,0,0,0,0-7h-7.55Z"
                    style={{
                      fill: '#ffddb0',
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: 'multiply',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-40)',
                  }}
                >
                  <path
                    d="M1183.14,485.1h2.23a3.5,3.5,0,0,0,0-7h-2.27Z"
                    style={{
                      fill: '#ffddb0',
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-41)',
                  }}
                >
                  <line
                    x1={1204.72}
                    y1={387.27}
                    x2={1219.45}
                    y2={387.27}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-42)',
                  }}
                >
                  <line
                    x1={1198.07}
                    y1={265.12}
                    x2={1212.8}
                    y2={265.12}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <rect
                x={1271.92}
                y={263.87}
                width={116.03}
                height={194.54}
                style={{
                  fill: '#fff',
                }}
              />
              <g
                style={{
                  clipPath: 'url(#clip-path-43)',
                }}
              >
                <g
                  style={{
                    mask: 'url(#mask)',
                  }}
                >
                  <rect
                    x={1280.4}
                    y={275.78}
                    width={94.11}
                    height={172.49}
                    style={{
                      fill: 'url(#linear-gradient-8)',
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: 'multiply',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-44)',
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-45)',
                    }}
                  >
                    <rect
                      x={1280.4}
                      y={275.78}
                      width={45.47}
                      height={172.52}
                      style={{
                        fill: 'url(#linear-gradient-9)',
                      }}
                    />
                  </g>
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: 'multiply',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-46)',
                  }}
                >
                  <rect
                    x={1280.4}
                    y={275.78}
                    width={3.46}
                    height={172.54}
                    style={{
                      fill: '#ffe499',
                    }}
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="g2">
            <path
              d="M1104.29,426.23s-33.7,17.29-22,101.09"
              style={{
                fill: 'none',
                stroke: '#ff7d37',
                strokeMiterlimit: 10,
                strokeWidth: 12,
              }}
            />
            <rect
              x={1091.99}
              y={391.79}
              width={57.2}
              height={5.87}
              style={{
                fill: '#fff',
              }}
            />
            <g id="thead2">
              <path
                d="M1094.24,254.23a4.75,4.75,0,0,1,4.26,4.8v6.58h0v15.62a3.92,3.92,0,1,0,7.84,0V258.89a4.62,4.62,0,0,1,4.63-4.59h0a4.63,4.63,0,0,1,4.59,4.64v22.19a3.92,3.92,0,0,0,7.81.62c0-.16,0-.32,0-.48V259.12a4.7,4.7,0,0,1,3.91-4.67,4.62,4.62,0,0,1,5.26,3.87,4.34,4.34,0,0,1,.06.71v22.2a4,4,0,0,0,3.28,4,3.91,3.91,0,0,0,4.5-3.24,4.34,4.34,0,0,0,.06-.62V259.23a4.71,4.71,0,0,1,3.91-4.68,4.61,4.61,0,0,1,5.26,3.85,4.49,4.49,0,0,1,.06.73v22.36l-.12,25h0v3.79a24.58,24.58,0,0,1-24.69,24.47h0l-11.3-.06a24.58,24.58,0,0,1-24.55-24.61,1,1,0,0,1,0-.17v-3.8l.12-25v-3.79l.06-11.77v-6.77a4.62,4.62,0,0,1,4.69-4.56Z"
                style={{
                  fill: '#ff7d37',
                }}
              />
              <rect
                x={1112.89}
                y={324.2}
                width={12.53}
                height={22.01}
                transform="translate(778.68 1452.78) rotate(-89.73)"
                style={{
                  fill: '#ff7d37',
                }}
              />
              <g>
                <path
                  d="M1101.76,301.17a3.86,3.86,0,0,1,1.17-2.47,3.92,3.92,0,0,1,2.47-1.09h.57a3.91,3.91,0,0,1,2.47,1.17,4,4,0,0,1,1.09,2.47,5.42,5.42,0,0,1,0,.57,1.65,1.65,0,1,0,3.29.27h0a7.2,7.2,0,0,0-14.34-1.2,1.65,1.65,0,1,0,3.29.27Z"
                  style={{
                    fill: '#681800',
                  }}
                />
                <path
                  d="M1124.47,303.09a3.81,3.81,0,0,1,1.17-2.48,3.92,3.92,0,0,1,2.47-1.09h.57a3.91,3.91,0,0,1,2.47,1.17,4,4,0,0,1,1.09,2.47,5.42,5.42,0,0,1,0,.57,1.65,1.65,0,1,0,3.29.27,8.34,8.34,0,0,0,0-1,7.19,7.19,0,0,0-14.35-.16,1.65,1.65,0,1,0,3.28.28Z"
                  style={{
                    fill: '#681800',
                  }}
                />
                <path
                  d="M1101.93,311.7a14.74,14.74,0,0,0,27.13,2.21Z"
                  style={{
                    fill: '#681800',
                  }}
                />
                <path
                  d="M1113.76,317.23l11.91,1a14.74,14.74,0,0,1-16.09,2.25A3.89,3.89,0,0,1,1113.76,317.23Z"
                  style={{
                    fill: '#fc4c01',
                  }}
                />
                <path
                  d="M1131.72,317.83a2.21,2.21,0,0,1-1.2-1.84v-.33h0a2.18,2.18,0,0,1,.48-1.21,2.23,2.23,0,0,1,1-.73,1.65,1.65,0,0,0-.71-3.22,1.4,1.4,0,0,0-.29.09,5.52,5.52,0,0,0-3.79,4.8h0a5.61,5.61,0,0,0,3,5.38,1.65,1.65,0,1,0,1.65-2.85l-.14-.08Z"
                  style={{
                    fill: '#681800',
                  }}
                />
              </g>
              <path
                d="M1119.35,334.86a43,43,0,0,1-9-.13,13.54,13.54,0,0,1-2.29-.5.22.22,0,0,1-.16-.28v0a.23.23,0,0,1,.28-.15h0a12.84,12.84,0,0,0,2.23.49,33.47,33.47,0,0,0,5.92.29c.86,0,1.6-.06,2.12-.09h.82a.23.23,0,0,1,.25.2h0a.23.23,0,0,1-.21.25h0Z"
                style={{
                  fill: '#681800',
                }}
              />
            </g>
            <path
              d="M1103.77,341h29.33a16.1,16.1,0,0,1,16.09,16.09h0v60.4H1092V352.83a11.78,11.78,0,0,1,11.78-11.78h0Z"
              style={{
                fill: '#101d23',
              }}
            />
            <path
              d="M1130.06,337.81l-26.39.67,8.76,13.52,21.73-11h0a4.22,4.22,0,0,0-4-3.21Z"
              style={{
                fill: '#e51f05',
              }}
            />
            <polyline
              points="1134.65 421 1132.91 533.79 1122.09 533.55 1123.84 420.76"
              style={{
                fill: '#ff7d37',
              }}
            />
            <path
              d="M1092.3,409.69l56.88.54v11.1c-.2,8.33-6.45,15.3-13.6,15.43l-31.26.58c-9.87.07-12.79-6.51-12.59-14.84Z"
              style={{
                fill: '#193441',
              }}
            />
            <rect
              x={1091.99}
              y={405.88}
              width={57.2}
              height={5.87}
              style={{
                fill: '#fff',
              }}
            />
            <rect
              x={1091.99}
              y={379.61}
              width={57.2}
              height={5.87}
              style={{
                fill: '#fff',
              }}
            />
            <g id="thand2">
              <path
                d="M1057.48,326c.25.08,4.41,6.81,13.39-.83"
                style={{
                  fill: 'none',
                  stroke: '#ff7d37',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 4,
                }}
              />
              <path
                d="M1094.34,354.53s-21.61,18-40.06,8.66,2.08-39.77,2.08-39.77"
                style={{
                  fill: 'none',
                  stroke: '#ff7d37',
                  strokeMiterlimit: 10,
                  strokeWidth: 12,
                }}
              />
              <path
                d="M1051.06,313.28s42.29-3.25,55,9.2c0,0-30.79,3.45-39.92,7.3C1066.16,329.78,1055.24,326.49,1051.06,313.28Z"
                style={{
                  fill: '#d88521',
                }}
              />
              <path
                d="M1052.06,313.12s41.31-3.09,54.07,9.36c0,0-30.58,1.75-39.71,5.6C1066.37,328.08,1056.22,326.33,1052.06,313.12Z"
                style={{
                  fill: '#ffc866',
                }}
              />
              <path
                d="M1055.51,312.93s37.81-2.9,50.57,9.55c0,0-26.73,1.64-37.54,4.91C1068.54,327.39,1059.72,326.14,1055.51,312.93Z"
                style={{
                  fill: '#fe4c00',
                }}
              />
              <g>
                <path
                  d="M1096.42,321.29c1.45-.13,2.95.8,4.36,1.58,3.22-.26,5.3-.39,5.3-.39-9.59-9.36-33.36-10-44.55-9.81a3.78,3.78,0,0,1-1.25,2.64c-2.44,2.55.11,5.21,7.1,4.65s8.87.89,8.64,2.33c-.11.74-1.37,2.34-2.07,3.82,5.94-1.16,13.53-2,19.86-2.64C1094.27,321.87,1094.73,321.45,1096.42,321.29Z"
                  style={{
                    fill: '#fff1d3',
                  }}
                />
                <ellipse
                  cx={1064.93}
                  cy={314.3}
                  rx={1.04}
                  ry={0.54}
                  style={{
                    fill: '#efd4a3',
                  }}
                />
                <ellipse
                  cx={1066.51}
                  cy={315.4}
                  rx={0.58}
                  ry={0.23}
                  style={{
                    fill: '#efd4a3',
                  }}
                />
                <ellipse
                  cx={1070.05}
                  cy={313.47}
                  rx={0.53}
                  ry={0.17}
                  style={{
                    fill: '#efd4a3',
                  }}
                />
                <ellipse
                  cx={1079.27}
                  cy={323.11}
                  rx={1.25}
                  ry={0.54}
                  style={{
                    fill: '#efd4a3',
                  }}
                />
                <ellipse
                  cx={1082.6}
                  cy={321.53}
                  rx={0.67}
                  ry={0.46}
                  style={{
                    fill: '#efd4a3',
                  }}
                />
              </g>
              <path
                d="M1071.06,323.41,1056,326.14l-5.88-2-.07-1.87a5.93,5.93,0,0,1,5.71-6.12l12-.42a4.83,4.83,0,0,1,5,4.66h0v1.19A1.76,1.76,0,0,1,1071.06,323.41Z"
                style={{
                  fill: '#ff7d37',
                }}
              />
              <path
                d="M1081.55,315.4a7.16,7.16,0,0,1-3.84,2.49c-2.3.44-4.31,0-4.49-.9s1.54-2,3.85-2.49A7.16,7.16,0,0,1,1081.55,315.4Z"
                style={{
                  fill: '#46b711',
                }}
              />
              <path
                d="M1091.36,322.42c-2.08-1.07-4.12-1.24-4.56-.4-.26.52.14,1.3,1,2.08,1.73-.2,3.45-.38,5.09-.54A5.87,5.87,0,0,0,1091.36,322.42Z"
                style={{
                  fill: '#46b711',
                }}
              />
              <ellipse
                cx={1067.85}
                cy={325.94}
                rx={0.46}
                ry={0.79}
                transform="translate(25.63 726.35) rotate(-37.99)"
                style={{
                  fill: '#db2b03',
                }}
              />
              <ellipse
                cx={1069.28}
                cy={326.05}
                rx={0.25}
                ry={0.43}
                transform="translate(25.87 727.25) rotate(-37.99)"
                style={{
                  fill: '#db2b03',
                }}
              />
            </g>
            <rect
              x={1080.62}
              y={345.95}
              width={24.86}
              height={20.07}
              transform="translate(-47.19 502.06) rotate(-25.34)"
              style={{
                fill: '#101d23',
              }}
            />
            <rect
              x={1119.59}
              y={423.61}
              width={17.29}
              height={101.09}
              style={{
                fill: '#193441',
              }}
            />
            <path
              d="M1104.29,426.23s-30.2,15.49-23.45,88.23"
              style={{
                fill: 'none',
                stroke: '#193441',
                strokeMiterlimit: 10,
                strokeWidth: 18,
              }}
            />
            <polygon
              points="1149.18 371.39 1091.98 371.39 1091.98 365.52 1141.72 365.52 1149.18 369.19 1149.18 371.39"
              style={{
                fill: '#fff',
              }}
            />
            <g>
              <path
                d="M1125.5,530.15h2.9a9.06,9.06,0,0,1,9,9.05v.63h-21v-.61a9.05,9.05,0,0,1,9-9.07Z"
                style={{
                  fill: '#193441',
                }}
              />
              <path
                d="M1064.47,537.23l25.85-.16-2.16-11.56h-12.8a10.9,10.9,0,0,0-10.89,10.9Z"
                style={{
                  fill: '#193441',
                }}
              />
            </g>
          </g>
          <g id="boat">
            <rect
              x={1145.05}
              y={520.06}
              width={224.39}
              height={45.43}
              style={{
                fill: '#d08e00',
              }}
            />
            <polygon
              points="1153.2 519.96 1253.85 595.86 1355.83 519.6 1153.2 519.96"
              style={{
                fill: '#fff',
              }}
            />
            <polygon
              points="1153.2 519.96 1253.85 595.86 1355.83 519.6 1153.2 519.96"
              style={{
                fill: 'url(#Unnamed_Pattern)',
              }}
            />
            <rect
              x={912.66}
              y={454.02}
              width={54.87}
              height={6.32}
              transform="matrix(0.95, -0.31, 0.31, 0.95, -96.1, 319.03)"
              style={{
                fill: '#ffd505',
              }}
            />
            <rect
              x={919.18}
              y={473.62}
              width={33.84}
              height={6.32}
              transform="translate(-102.47 318.75) rotate(-18.34)"
              style={{
                fill: '#ffd505',
              }}
            />
            <rect
              x={923.84}
              y={487.59}
              width={33.84}
              height={6.32}
              transform="translate(-106.63 320.93) rotate(-18.34)"
              style={{
                fill: '#ffd505',
              }}
            />
            <rect
              x={929.38}
              y={503.33}
              width={33.84}
              height={6.32}
              transform="translate(-111.3 323.48) rotate(-18.34)"
              style={{
                fill: '#ffd505',
              }}
            />
            <rect
              x={934.48}
              y={519.36}
              width={33.84}
              height={6.32}
              transform="translate(-116.09 325.89) rotate(-18.34)"
              style={{
                fill: '#ffd505',
              }}
            />
            <rect
              x={940.02}
              y={534.88}
              width={33.84}
              height={6.32}
              transform="translate(-120.69 328.43) rotate(-18.34)"
              style={{
                fill: '#ffd505',
              }}
            />
            <path
              d="M950.68,465.33l-10.31-28.59a45.37,45.37,0,0,0-36-29.49l-6-.9,13.3,51.44s5.32-35.47,39,7.54"
              style={{
                fill: '#ffd505',
              }}
            />
            <path
              d="M1254.78,534.23h-79a5.06,5.06,0,0,1-5.06-5.06v-7.84a5.05,5.05,0,0,1,5.06-5.06h79a5.05,5.05,0,0,1,5,5.06v7.84a5.06,5.06,0,0,1-5,5.06"
              style={{
                fill: '#874417',
              }}
            />
            <path
              d="M942.86,452s10.37,85.71,52.94,128.61,100.42,47.88,138.33,50.54Z"
              style={{
                fill: '#ffd505',
              }}
            />
            <path
              d="M1435.19,644.68c-63.3-1-228.23-4.11-301.06-14.08-35.34-4.84-77-11.64-105.41-30-25.23-16.36-41.68-35.92-54.54-59.42s-20-53-28.25-78.71c-.8-2.52-2.1-7.32-3.06-11a1.05,1.05,0,0,1,1.83-.94c23.37,28.46,76.11,66.51,110.61,76.58,36.13,10.54,74.19,12.07,111.8,13.53,61.61,2.4,217.56,8.56,279.17,10.95Z"
              style={{
                fill: '#101d23',
              }}
            />
            <path
              d="M1254.78,532.07h-79a5.06,5.06,0,0,1-5.06-5.06v-7.85a5.05,5.05,0,0,1,5.06-5h79a5,5,0,0,1,5,5V527a5.06,5.06,0,0,1-5,5.06"
              style={{
                fill: '#a85e27',
              }}
            />
            <path
              d="M945.15,456.34c3.09,3.63,6.38,7.09,9.78,10.43s6.89,6.59,10.46,9.74c7.16,6.29,14.64,12.21,22.32,17.84s15.54,11,23.64,16a249.25,249.25,0,0,0,25,13.64c4.29,2,8.66,3.87,13.09,5.5l3.34,1.15,3.37,1,6.87,1.87a281.65,281.65,0,0,0,27.93,5.6c9.39,1.42,18.85,2.44,28.34,3.22s19,1.3,28.52,1.79c38.11,1.68,76.27,3.23,114.38,5.33l114.35,6.14c-19.08-.44-38.15-1.12-57.23-1.75l-57.22-2.21-114.42-4.58c-9.55-.41-19.09-1-28.63-1.81s-19-1.91-28.52-3.39a285.15,285.15,0,0,1-28.16-5.79l-6.93-1.93-3.46-1.09-3.41-1.2a144,144,0,0,1-13.24-5.73,252.76,252.76,0,0,1-25-14.14q-12.1-7.72-23.52-16.44c-7.59-5.82-14.93-12-21.95-18.44a187.77,187.77,0,0,1-19.69-20.79"
              style={{
                fill: '#ffd505',
              }}
            />
            <path
              d="M1245.53,530.74h-60a11.31,11.31,0,1,1,0-22.62h60a11.31,11.31,0,0,1,0,22.62"
              style={{
                fill: '#d88521',
              }}
            />
            <path
              d="M945.59,451.79a200.22,200.22,0,0,0,18.94,19.15c3.31,3,6.79,5.89,10.22,8.78s7,5.64,10.62,8.29,7.22,5.33,10.88,7.93c1.83,1.3,3.71,2.52,5.57,3.79l2.79,1.88,2.84,1.81a267.92,267.92,0,0,0,23.29,13.45,149.93,149.93,0,0,0,24.71,10.34,253.27,253.27,0,0,0,26.14,6.2,435.15,435.15,0,0,0,53.46,6c17.93,1.09,35.91,1.67,53.88,2.43s35.93,1.42,53.9,2.24l53.9,2.37,53.89,2.59-53.93-1.61-53.92-1.82c-18-.57-35.94-1.3-53.92-2s-35.94-1.21-53.92-2.25a436.73,436.73,0,0,1-53.68-6.18,250.33,250.33,0,0,1-26.3-6.33c-2.15-.74-4.32-1.39-6.44-2.19l-6.29-2.53-6.15-2.86c-2-.93-4-2-6-3a270.24,270.24,0,0,1-23.27-13.76c-7.53-4.94-14.89-10.14-22-15.69-3.59-2.71-7-5.63-10.51-8.48s-6.83-5.87-10.1-9a189.52,189.52,0,0,1-18.58-19.54"
              style={{
                fill: '#ffd505',
              }}
            />
            <path
              d="M1245.53,529.74h-60a11.31,11.31,0,1,1,0-22.61h60a11.31,11.31,0,1,1,0,22.61"
              style={{
                fill: '#ffc866',
              }}
            />
            <path
              d="M1244.39,526.37c-5.06-.84-44.75,3.15-57.34,0-5.31.56-11-1.65-8.34-8.34v-.83c2.34-4.78,5.25-7.19,8.13-7.8,27.61-3,47.52,1,56.75.33,4.61,0,9.14,2.87,9.14,7.47V518c0,4.6-3.28,9.18-8.34,8.34"
              style={{
                fill: '#fe4c00',
              }}
            />
            <path
              d="M1200.14,511.2c-5.11.05-7.23-1.14-9.64.5-1.59,1.08-1.3,2-3.24,3.24-2.82,1.77-5,.77-5.57,1.91-.78,1.55,2.07,5.74,6.06,6.9,3.18.93,4.4-.84,9.23-1s4.86,1.57,10.23,1.91c4.77.3,8.69-.82,13.13-2.08,6-1.71,5.47-2.53,8.32-2.66,5.06-.23,6.81,2.37,12.3,1.66,1.8-.23,4.44-.57,5.41-2.49s0-4.49-1.58-5.91c-1.71-1.55-4-1.5-8.15-1.33-4.79.2-5.09,1-8.4.92-3.48-.11-3.51-1-8.73-2A46.36,46.36,0,0,0,1209,510c-5,.23-4.5,1.12-8.9,1.16"
              style={{
                fill: '#fff1d3',
              }}
            />
            <path
              d="M1204.17,514a7.78,7.78,0,0,0-2.28-.12,4.2,4.2,0,0,0-2.25.79c-.27.21-1.1.86-1,1.37s1.43.69,3.57.87,2.85,0,3.7.67c.69.51.78,1,1.16,1,.78-.06,1.74-2.2,1-3.37-.36-.62-1.57-.82-4-1.21"
              style={{
                fill: '#fe4c00',
              }}
            />
            <polygon
              points="1173.54 524.42 1211.12 516.94 1196.32 530.74 1179.36 531.4 1173.54 524.42"
              style={{
                fill: '#a85e27',
              }}
            />
            <path
              d="M1175.66,524l.29.63a1.19,1.19,0,0,0,1.35.65l33.82-8.33Z"
              style={{
                fill: '#d88521',
              }}
            />
            <path
              d="M1235.85,516.31a2.8,2.8,0,0,0-2.08-.12c-.14,0-1.25.46-1.29,1.2s.65,1.07.79,1.17c1.19.81,2.08-.08,4,.41,1.34.36,1.61,1,2.49.83s1.7-1.09,1.54-1.49c-.26-.65-2.71.52-4.2-.79-.51-.45-.52-.86-1.2-1.21"
              style={{
                fill: '#fe4c00',
              }}
            />
            <path
              d="M1223.59,516.08a7.13,7.13,0,0,1-3.84,2.49c-2.3.44-4.31,0-4.49-.9s1.55-2,3.85-2.49a7.09,7.09,0,0,1,4.48.9"
              style={{
                fill: '#46b711',
              }}
            />
            <path
              d="M1222.26,524.83c0-.41,3.9-3.41,8.14-3.24s6.65,1.33,5.49,2.08-5.74.25-8.31,1.16-5.32,1.17-5.32,0"
              style={{
                fill: '#fff1d3',
              }}
            />
            <path
              d="M1191.93,513.61a7.12,7.12,0,0,1-3.85,2.48c-2.3.44-4.31,0-4.48-.9s1.54-2.05,3.84-2.49a7.17,7.17,0,0,1,4.49.91"
              style={{
                fill: '#46b711',
              }}
            />
            <path
              d="M1233,523.14a7.16,7.16,0,0,1-4.56.48c-2.25-.65-3.85-1.92-3.59-2.83s2.3-1.13,4.55-.48a7.15,7.15,0,0,1,3.6,2.83"
              style={{
                fill: '#46b711',
              }}
            />
            <path
              d="M1251.78,517.53a7.09,7.09,0,0,1-4.55.49c-2.25-.65-3.86-1.92-3.59-2.84s2.3-1.13,4.55-.48a7.11,7.11,0,0,1,3.59,2.83"
              style={{
                fill: '#46b711',
              }}
            />
            <path
              d="M1230.67,510.06c0,.24-.4.43-.9.43s-.89-.19-.89-.43.4-.44.89-.44.9.2.9.44"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1231.58,511.2c0,.11-.21.21-.48.21s-.48-.1-.48-.21.22-.21.48-.21.48.09.48.21"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1223.68,510c0,.11-.21.2-.48.2s-.47-.09-.47-.2.21-.21.47-.21.48.09.48.21"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1223.72,524.15c0,.24-.33.43-.74.43s-.75-.19-.75-.43.33-.44.75-.44.74.2.74.44"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1221.4,524.75c0,.14-.19.25-.42.25s-.41-.11-.41-.25.18-.25.41-.25.42.11.42.25"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1243.18,523.48c0,.36-.66.65-1.48.65s-1.47-.29-1.47-.65.66-.64,1.47-.64,1.48.29,1.48.64"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1244,525c0,.18-.31.33-.69.33s-.68-.15-.68-.33.3-.33.68-.33.69.15.69.33"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1252.41,520c0,.15-.22.27-.48.27s-.48-.12-.48-.27.21-.27.48-.27.48.12.48.27"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1189.78,511.06c0,.28-.51.5-1.14.5s-1.13-.22-1.13-.5.5-.5,1.13-.5,1.14.23,1.14.5"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1190.86,510.15c0,.13-.29.25-.65.25s-.65-.12-.65-.25.29-.25.65-.25.65.11.65.25"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1184.12,514.72c0,.15-.19.28-.44.28s-.44-.13-.44-.28.2-.28.44-.28.44.13.44.28"
              style={{
                fill: '#bc3208',
              }}
            />
            <path
              d="M1199,512.78c0,.32-.78.58-1.74.58s-1.75-.26-1.75-.58.78-.58,1.75-.58,1.74.26,1.74.58"
              style={{
                fill: '#fc6',
              }}
            />
            <path
              d="M1186.73,517.87c0,.22-.28.4-.62.4s-.63-.18-.63-.4.28-.39.63-.39.62.17.62.39"
              style={{
                fill: '#fc6',
              }}
            />
            <path
              d="M1187.1,517c0,.1-.15.19-.35.19s-.35-.09-.35-.19.15-.19.35-.19.35.09.35.19"
              style={{
                fill: '#fc6',
              }}
            />
            <path
              d="M1194.79,512.36c0,.1-.18.17-.41.17s-.42-.07-.42-.17.19-.16.42-.16.41.07.41.16"
              style={{
                fill: '#fc6',
              }}
            />
            <path
              d="M1224,514c0,.24-.49.44-1.09.44s-1.08-.2-1.08-.44.49-.43,1.08-.43,1.09.19,1.09.43"
              style={{
                fill: '#fc6',
              }}
            />
            <path
              d="M1225,513c0,.12-.29.23-.64.23s-.65-.11-.65-.23.29-.23.65-.23.64.1.64.23"
              style={{
                fill: '#fc6',
              }}
            />
            <path
              d="M1239.65,512.78c0,.23-.56.42-1.25.42s-1.25-.19-1.25-.42.56-.42,1.25-.42,1.25.19,1.25.42"
              style={{
                fill: '#fc6',
              }}
            />
            <path
              d="M1240.43,512.22c0,.08-.14.14-.31.14s-.31-.06-.31-.14.14-.15.31-.15.31.07.31.15"
              style={{
                fill: '#fc6',
              }}
            />
            <path
              d="M1248.06,518.32c0,.11-.19.2-.43.2s-.44-.09-.44-.2.19-.2.44-.2.43.09.43.2"
              style={{
                fill: '#fc6',
              }}
            />
            <g id="ta">
              <g
                style={{
                  mask: 'url(#mask-2)',
                }}
              >
                <use
                  transform="translate(1182 494.14)"
                  xlinkHref="#image-2"
                  style={{
                    opacity: 0.4,
                  }}
                />
              </g>
            </g>
            <g id="tb">
              <g
                style={{
                  mask: 'url(#mask-3)',
                }}
              >
                <use
                  transform="translate(1182 494.14)"
                  xlinkHref="#image-2"
                  style={{
                    opacity: 0.4,
                  }}
                />
              </g>
            </g>
            <g id="tc">
              <g
                style={{
                  mask: 'url(#mask-3)',
                }}
              >
                <use
                  transform="translate(1182 494.14)"
                  xlinkHref="#image-2"
                  style={{
                    opacity: 0.4,
                  }}
                />
              </g>
            </g>
            <g id="td">
              <g
                style={{
                  mask: 'url(#mask-3)',
                }}
              >
                <use
                  transform="translate(1182 494.14)"
                  xlinkHref="#image-2"
                  style={{
                    opacity: 0.4,
                  }}
                />
              </g>
            </g>
            <g id="te">
              <g
                style={{
                  mask: 'url(#mask-3)',
                }}
              >
                <use
                  transform="translate(1182 494.14)"
                  xlinkHref="#image-2"
                  style={{
                    opacity: 0.4,
                  }}
                />
              </g>
            </g>
            <g id="tf">
              <g
                style={{
                  mask: 'url(#mask-3)',
                }}
              >
                <use
                  transform="translate(1182 494.14)"
                  xlinkHref="#image-2"
                  style={{
                    opacity: 0.4,
                  }}
                />
              </g>
            </g>
            <g id="tg">
              <g
                style={{
                  mask: 'url(#mask-3)',
                }}
              >
                <use
                  transform="translate(1182 494.14)"
                  xlinkHref="#image-2"
                  style={{
                    opacity: 0.4,
                  }}
                />
              </g>
            </g>
            <g id="th">
              <g
                style={{
                  mask: 'url(#mask-3)',
                }}
              >
                <use
                  transform="translate(1182 494.14)"
                  xlinkHref="#image-2"
                  style={{
                    opacity: 0.4,
                  }}
                />
              </g>
            </g>
            <g id="ti">
              <g
                style={{
                  mask: 'url(#mask-3)',
                }}
              >
                <use
                  transform="translate(1182 494.14)"
                  xlinkHref="#image-2"
                  style={{
                    opacity: 0.4,
                  }}
                />
              </g>
            </g>
          </g>
          <g
            style={{
              opacity: 0.720000982284546,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-47)',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-48)',
                }}
              >
                <rect
                  x={9.46}
                  y={615.69}
                  width={1456.57}
                  height={162.97}
                  style={{
                    fill: 'url(#linear-gradient-10)',
                  }}
                />
              </g>
            </g>
          </g>
          <g id="g1">
            <g id="stick">
              <g>
                <path
                  d="M1018.9,652h7.65l132.06-388.33a3.66,3.66,0,0,0-2.28-4.64h0a3.65,3.65,0,0,0-4.63,2.27v0Z"
                  style={{
                    fill: '#bc7235',
                  }}
                />
                <path
                  d="M1037.76,607.89h0a3.66,3.66,0,0,1,2.28,4.65l-34.5,101.51h0l-6.93-2.35h0l34.5-101.52a3.67,3.67,0,0,1,4.65-2.29Z"
                  style={{
                    fill: 'url(#linear-gradient-11)',
                  }}
                />
              </g>
              <path
                d="M1006.4,649.2v1.47a6,6,0,0,0,5.94,5.93h2.46"
                style={{
                  fill: 'none',
                  stroke: '#57758f',
                  strokeMiterlimit: 10,
                  opacity: 0.419999986886978,
                  isolation: 'isolate',
                }}
              />
              <path
                d="M1037.5,641.88h1.08a6.66,6.66,0,0,1,6.65,6.66h0"
                style={{
                  fill: 'none',
                  stroke: '#57758f',
                  strokeMiterlimit: 10,
                  opacity: 0.150000005960464,
                  isolation: 'isolate',
                }}
              />
              <path
                d="M1034.78,646.6h1.77a2.48,2.48,0,0,1,2.5,2.48h0a2.48,2.48,0,0,1-2.49,2.49h-21.82a2.35,2.35,0,0,1-2.35-2.35h0a2.36,2.36,0,0,1,2.35-2.36h2"
                style={{
                  fill: 'none',
                  stroke: '#57758f',
                  strokeMiterlimit: 10,
                  opacity: 0.300000011920929,
                  isolation: 'isolate',
                }}
              />
            </g>
            <g id="tarm2">
              <path
                d="M1140.69,352.29l32.81,13.21a9.89,9.89,0,0,1,5.77,9h0a9.92,9.92,0,0,1-9.92,9.92h-41.74"
                style={{
                  fill: 'none',
                  stroke: '#ff7d37',
                  strokeMiterlimit: 10,
                  strokeWidth: 12,
                }}
              />
              <path
                d="M1124,393.72l-7.16.14a6.22,6.22,0,0,1-6.34-6.09h0l-.06-3.18a6.2,6.2,0,0,1,6.08-6.33h0l7.16-.14a6.84,6.84,0,0,1,7,6.7h0l0,1.91a6.85,6.85,0,0,1-6.69,7Z"
                style={{
                  fill: '#ff7d37',
                }}
              />
            </g>
            <path
              d="M1151.65,370.05l-16.44-7.78,7.27-18,17.76,7.6Z"
              style={{
                fill: '#101d23',
              }}
            />
          </g>
          <rect
            width={1635.11}
            height={781.14}
            style={{
              fill: 'none',
            }}
          />
          <g
            style={{
              clipPath: 'url(#clip-path-49)',
            }}
          >
            <g
              style={{
                mask: 'url(#mask-11)',
              }}
            >
              <rect
                x={1426.19}
                y={596.74}
                width={186.8}
                height={73.01}
                style={{
                  fill: 'url(#linear-gradient-12)',
                }}
              />
            </g>
          </g>
          <g
            style={{
              clipPath: 'url(#clip-path-50)',
            }}
          >
            <g
              style={{
                mixBlendMode: 'multiply',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-51)',
                }}
              >
                <rect
                  x={1426.19}
                  y={596.73}
                  width={186.8}
                  height={4.73}
                  style={{
                    fill: '#ff7d37',
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.169998005032539,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-52)',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-53)',
                  }}
                >
                  <g
                    style={{
                      mask: 'url(#mask-12)',
                    }}
                  >
                    <rect
                      x={1426.19}
                      y={669.75}
                      width={164.18}
                      height={67.53}
                      style={{
                        fill: 'url(#linear-gradient-13)',
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
            <rect
              x={1426.19}
              y={148.18}
              width={186.8}
              height={449.78}
              style={{
                fill: '#ffeec4',
              }}
            />
            <rect
              x={1426.19}
              y={116.48}
              width={186.8}
              height={31.69}
              style={{
                fill: '#ffb255',
              }}
            />
            <g
              style={{
                mixBlendMode: 'multiply',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-54)',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-55)',
                  }}
                >
                  <g
                    style={{
                      mask: 'url(#mask-13)',
                    }}
                  >
                    <rect
                      x={1426.19}
                      y={148.18}
                      width={186.8}
                      height={2.87}
                      style={{
                        fill: 'url(#linear-gradient-14)',
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
            <g
              style={{
                opacity: 0.309998005628586,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-56)',
                }}
              >
                <line
                  x1={1439.73}
                  y1={621.58}
                  x2={1455.1}
                  y2={621.58}
                  style={{
                    fill: 'none',
                    stroke: '#af3610',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 7,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.63000500202179,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-57)',
                }}
              >
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-58)',
                    }}
                  >
                    <line
                      x1={1431.34}
                      y1={277.95}
                      x2={1449.51}
                      y2={277.95}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-59)',
                    }}
                  >
                    <line
                      x1={1442.55}
                      y1={288.15}
                      x2={1460.73}
                      y2={288.15}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-60)',
                    }}
                  >
                    <line
                      x1={1509.57}
                      y1={236.71}
                      x2={1527.74}
                      y2={236.71}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-61)',
                    }}
                  >
                    <line
                      x1={1520.78}
                      y1={246.91}
                      x2={1538.96}
                      y2={246.91}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-62)',
                    }}
                  >
                    <line
                      x1={1486.32}
                      y1={246.91}
                      x2={1504.49}
                      y2={246.91}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-63)',
                    }}
                  >
                    <line
                      x1={1434.9}
                      y1={232.72}
                      x2={1453.07}
                      y2={232.72}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-64)',
                    }}
                  >
                    <line
                      x1={1436.81}
                      y1={415.18}
                      x2={1454.98}
                      y2={415.18}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-65)',
                    }}
                  >
                    <line
                      x1={1479.07}
                      y1={584.88}
                      x2={1497.24}
                      y2={584.88}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-66)',
                    }}
                  >
                    <line
                      x1={1439.82}
                      y1={369.06}
                      x2={1457.99}
                      y2={369.06}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-67)',
                    }}
                  >
                    <line
                      x1={1441.05}
                      y1={496.43}
                      x2={1459.22}
                      y2={496.43}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-68)',
                    }}
                  >
                    <line
                      x1={1455.82}
                      y1={508.18}
                      x2={1473.99}
                      y2={508.18}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-69)',
                    }}
                  >
                    <line
                      x1={1441.05}
                      y1={206.51}
                      x2={1459.22}
                      y2={206.51}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-70)',
                    }}
                  >
                    <line
                      x1={1474.15}
                      y1={206.51}
                      x2={1492.32}
                      y2={206.51}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-71)',
                    }}
                  >
                    <line
                      x1={1496.71}
                      y1={190.05}
                      x2={1514.89}
                      y2={190.05}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-72)',
                    }}
                  >
                    <line
                      x1={1458.15}
                      y1={172.26}
                      x2={1476.32}
                      y2={172.26}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-73)',
                    }}
                  >
                    <line
                      x1={1455.82}
                      y1={218.26}
                      x2={1473.99}
                      y2={218.26}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-74)',
                    }}
                  >
                    <line
                      x1={1506.7}
                      y1={532.12}
                      x2={1524.87}
                      y2={532.12}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-75)',
                    }}
                  >
                    <line
                      x1={1491.38}
                      y1={543.65}
                      x2={1509.55}
                      y2={543.65}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-76)',
                    }}
                  >
                    <line
                      x1={1431.34}
                      y1={564.16}
                      x2={1449.51}
                      y2={564.16}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-77)',
                    }}
                  >
                    <line
                      x1={1511.21}
                      y1={553.51}
                      x2={1529.38}
                      y2={553.51}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    mixBlendMode: 'multiply',
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-78)',
                    }}
                  >
                    <path
                      d="M1426.22,557h9.27c2.38,0,4.32-1.57,4.32-3.5s-1.94-3.5-4.32-3.5h-9.32Z"
                      style={{
                        fill: '#ffddb0',
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    mixBlendMode: 'multiply',
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-79)',
                    }}
                  >
                    <path
                      d="M1426.18,548.36h2.76c2.38,0,4.32-1.56,4.32-3.5s-1.94-3.5-4.32-3.5h-2.81Z"
                      style={{
                        fill: '#ffddb0',
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-80)',
                    }}
                  >
                    <line
                      x1={1536.51}
                      y1={516.71}
                      x2={1554.68}
                      y2={516.71}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
                <g
                  style={{
                    opacity: 0.309998005628586,
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-81)',
                    }}
                  >
                    <line
                      x1={1442.55}
                      y1={266.86}
                      x2={1460.73}
                      y2={266.86}
                      style={{
                        fill: 'none',
                        stroke: '#ff9100',
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                        strokeWidth: 7,
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
            <g
              style={{
                opacity: 0.309998005628586,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-82)',
                }}
              >
                <line
                  x1={1448.98}
                  y1={631.99}
                  x2={1464.35}
                  y2={631.99}
                  style={{
                    fill: 'none',
                    stroke: '#af3610',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 7,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.309998005628586,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-83)',
                }}
              >
                <line
                  x1={1438.8}
                  y1={642.19}
                  x2={1454.17}
                  y2={642.19}
                  style={{
                    fill: 'none',
                    stroke: '#af3610',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 7,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.309998005628586,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-84)',
                }}
              >
                <line
                  x1={1478.04}
                  y1={656.82}
                  x2={1489.22}
                  y2={656.82}
                  style={{
                    fill: 'none',
                    stroke: '#af3610',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 7,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.309998005628586,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-85)',
                }}
              >
                <line
                  x1={1487.8}
                  y1={646.85}
                  x2={1498.97}
                  y2={646.85}
                  style={{
                    fill: 'none',
                    stroke: '#af3610',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 7,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.309998005628586,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-86)',
                }}
              >
                <line
                  x1={1476.02}
                  y1={616.48}
                  x2={1487.2}
                  y2={616.48}
                  style={{
                    fill: 'none',
                    stroke: '#af3610',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 7,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.309998005628586,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-87)',
                }}
              >
                <line
                  x1={1516.29}
                  y1={629.45}
                  x2={1529.5}
                  y2={629.45}
                  style={{
                    fill: 'none',
                    stroke: '#af3610',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 7,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.309998005628586,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-88)',
                }}
              >
                <line
                  x1={1552.39}
                  y1={619.69}
                  x2={1565.61}
                  y2={619.69}
                  style={{
                    fill: 'none',
                    stroke: '#af3610',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 7,
                  }}
                />
              </g>
            </g>
            <rect
              x={1442.9}
              y={272.19}
              width={152.14}
              height={235.44}
              style={{
                fill: '#fff',
              }}
            />
          </g>
          <g
            style={{
              clipPath: 'url(#clip-path-89)',
            }}
          >
            <g
              style={{
                mask: 'url(#mask-14)',
              }}
            >
              <rect
                x={1454.01}
                y={286.59}
                width={127.47}
                height={208.75}
                style={{
                  fill: 'url(#linear-gradient-15)',
                }}
              />
            </g>
          </g>
          <g
            style={{
              mixBlendMode: 'multiply',
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-90)',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-91)',
                }}
              >
                <rect
                  x={1454.02}
                  y={286.59}
                  width={59.61}
                  height={208.79}
                  style={{
                    fill: 'url(#linear-gradient-16)',
                  }}
                />
              </g>
            </g>
          </g>
          <g
            style={{
              mixBlendMode: 'multiply',
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-92)',
              }}
            >
              <rect
                x={1454.02}
                y={286.59}
                width={4.53}
                height={204.68}
                style={{
                  fill: '#ffe499',
                }}
              />
            </g>
          </g>
          <g id="tleaf1">
            <path
              d="M1403,505.27c0,8,6.77,14.5,15.13,14.5s15.14-6.49,15.14-14.5-6.78-14.51-15.14-14.51-15.13,6.5-15.13,14.51"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M1414,493.72a10.4,10.4,0,1,0,10.4-10,10.19,10.19,0,0,0-10.4,10"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M1423.33,508.88a10.43,10.43,0,1,0,10.42-10,10.21,10.21,0,0,0-10.42,10"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M1436.42,510.4a2.32,2.32,0,1,0,2.31-2.22,2.27,2.27,0,0,0-2.31,2.22"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M1403.12,510.35c-1.54.79-2.86,3.53-3.45,4.9a.68.68,0,0,0,.55,1c1.51.3,4.62.76,6.16,0,2.07-1.06,3-3.23,2.12-4.85s-3.31-2.06-5.38-1"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M1432.73,521.71c1.54.77,4.65.26,6.16-.05a.68.68,0,0,0,.53-1c-.6-1.36-2-4.09-3.51-4.85-2.09-1-4.49-.56-5.37,1.07s.1,3.78,2.19,4.81"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M1405.16,503.55c-2.43-.39-6.39,1.58-8.28,2.62a1,1,0,0,0-.27,1.54c1.42,1.59,4.49,4.69,6.92,5.09,3.27.53,6.29-1.11,6.74-3.67s-1.84-5.05-5.11-5.58"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M1420.29,492.23a2.32,2.32,0,1,0,2.32-2.22,2.27,2.27,0,0,0-2.32,2.22"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M1411.41,499.88a1.53,1.53,0,0,0,3,0,1.53,1.53,0,0,0-3,0"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M1420.56,503.63a1.52,1.52,0,1,0,1.52-1.45,1.49,1.49,0,0,0-1.52,1.45"
              style={{
                fill: '#c6170a',
              }}
            />
          </g>
          <path
            d="M1421.28,548.55h10.23V514.43h-27.58V531.2a17.35,17.35,0,0,0,17.35,17.35"
            style={{
              fill: '#2e4556',
            }}
          />
          <path
            d="M1415.13,512c-1.28,1.13-1.84,4.11-2.05,5.57a.7.7,0,0,0,.78.81c1.54-.08,4.68-.38,6-1.5,1.73-1.53,2.08-3.86.78-5.2s-3.74-1.2-5.47.32"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M1421.1,548.55h10.41V507.76h-27.76V531.2A17.35,17.35,0,0,0,1421.1,548.55Z"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <line
            x1={1429.11}
            y1={507.71}
            x2={1456.87}
            y2={507.71}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M1433.66,502.7c1.3.69,2.42,3.05,2.91,4.23a.59.59,0,0,1-.48.83c-1.29.24-4,.62-5.28-.07-1.77-.92-2.56-2.79-1.78-4.17s2.86-1.74,4.63-.82"
            style={{
              fill: '#97ca67',
            }}
          />
          <rect
            x={90.06}
            y={122.52}
            width={698.75}
            height={447.86}
            style={{
              fill: '#ffeec4',
            }}
          />
          <rect
            x={247.35}
            y={523.96}
            width={541.46}
            height={46.42}
            style={{
              fill: '#f7dea6',
            }}
          />
          <rect
            x={246.63}
            y={527.34}
            width={542.18}
            height={43.04}
            style={{
              fill: '#fff5de',
            }}
          />
          <rect
            x={90.12}
            y={91.28}
            width={698.7}
            height={31.24}
            style={{
              fill: '#ffeec4',
            }}
          />
          <g
            style={{
              opacity: 0.63000500202179,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-93)',
              }}
            >
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-94)',
                  }}
                >
                  <line
                    x1={259.22}
                    y1={270.56}
                    x2={274.93}
                    y2={270.56}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-95)',
                  }}
                >
                  <line
                    x1={268.91}
                    y1={281.44}
                    x2={284.63}
                    y2={281.44}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-96)',
                  }}
                >
                  <line
                    x1={326.88}
                    y1={226.55}
                    x2={342.6}
                    y2={226.55}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-97)',
                  }}
                >
                  <line
                    x1={336.58}
                    y1={237.43}
                    x2={352.3}
                    y2={237.43}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-98)',
                  }}
                >
                  <line
                    x1={306.77}
                    y1={237.43}
                    x2={322.49}
                    y2={237.43}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-99)',
                  }}
                >
                  <line
                    x1={198.3}
                    y1={313.01}
                    x2={214.01}
                    y2={313.01}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-100)',
                  }}
                >
                  <line
                    x1={207.99}
                    y1={323.89}
                    x2={223.71}
                    y2={323.89}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-101)',
                  }}
                >
                  <line
                    x1={178.19}
                    y1={323.89}
                    x2={193.9}
                    y2={323.89}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-102)',
                  }}
                >
                  <line
                    x1={147.31}
                    y1={248.72}
                    x2={163.02}
                    y2={248.72}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-103)',
                  }}
                >
                  <line
                    x1={157.01}
                    y1={259.6}
                    x2={172.72}
                    y2={259.6}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-104)',
                  }}
                >
                  <line
                    x1={127.2}
                    y1={259.6}
                    x2={142.91}
                    y2={259.6}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-105)',
                  }}
                >
                  <line
                    x1={262.29}
                    y1={222.29}
                    x2={278.01}
                    y2={222.29}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-106)',
                  }}
                >
                  <line
                    x1={318.6}
                    y1={309.83}
                    x2={334.32}
                    y2={309.83}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-107)',
                  }}
                >
                  <line
                    x1={318.6}
                    y1={333.72}
                    x2={334.32}
                    y2={333.72}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-108)',
                  }}
                >
                  <line
                    x1={289.97}
                    y1={333.72}
                    x2={305.69}
                    y2={333.72}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-109)',
                  }}
                >
                  <line
                    x1={260.16}
                    y1={366.37}
                    x2={275.88}
                    y2={366.37}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-110)',
                  }}
                >
                  <line
                    x1={288.79}
                    y1={366.37}
                    x2={304.51}
                    y2={366.37}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-111)',
                  }}
                >
                  <line
                    x1={272.94}
                    y1={378.91}
                    x2={288.66}
                    y2={378.91}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-112)',
                  }}
                >
                  <line
                    x1={260.16}
                    y1={500.69}
                    x2={275.88}
                    y2={500.69}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-113)',
                  }}
                >
                  <line
                    x1={288.79}
                    y1={500.69}
                    x2={304.51}
                    y2={500.69}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-114)',
                  }}
                >
                  <line
                    x1={308.31}
                    y1={483.12}
                    x2={324.02}
                    y2={483.12}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-115)',
                  }}
                >
                  <line
                    x1={274.95}
                    y1={464.14}
                    x2={290.67}
                    y2={464.14}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-116)',
                  }}
                >
                  <line
                    x1={272.94}
                    y1={513.23}
                    x2={288.66}
                    y2={513.23}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-117)',
                  }}
                >
                  <line
                    x1={112.51}
                    y1={500.69}
                    x2={128.23}
                    y2={500.69}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-118)',
                  }}
                >
                  <line
                    x1={141.14}
                    y1={500.69}
                    x2={156.86}
                    y2={500.69}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-119)',
                  }}
                >
                  <line
                    x1={139.37}
                    y1={445.44}
                    x2={155.09}
                    y2={445.44}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-120)',
                  }}
                >
                  <line
                    x1={153.12}
                    y1={432.14}
                    x2={168.84}
                    y2={432.14}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-121)',
                  }}
                >
                  <line
                    x1={125.29}
                    y1={513.23}
                    x2={141.01}
                    y2={513.23}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-122)',
                  }}
                >
                  <line
                    x1={316.94}
                    y1={404.46}
                    x2={332.66}
                    y2={404.46}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-123)',
                  }}
                >
                  <line
                    x1={303.69}
                    y1={416.76}
                    x2={319.41}
                    y2={416.76}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-124)',
                  }}
                >
                  <line
                    x1={251.76}
                    y1={438.65}
                    x2={267.48}
                    y2={438.65}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-125)',
                  }}
                >
                  <line
                    x1={201.66}
                    y1={392.09}
                    x2={217.38}
                    y2={392.09}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-126)',
                  }}
                >
                  <line
                    x1={320.84}
                    y1={427.29}
                    x2={336.56}
                    y2={427.29}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: 'multiply',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-127)',
                  }}
                >
                  <path
                    d="M90,431h8a3.74,3.74,0,0,0,0-7.47H90Z"
                    style={{
                      fill: '#ffddb0',
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: 'multiply',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-128)',
                  }}
                >
                  <path
                    d="M90,421.8h2.38a3.74,3.74,0,1,0,0-7.47H90Z"
                    style={{
                      fill: '#ffddb0',
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-129)',
                  }}
                >
                  <line
                    x1={305.82}
                    y1={321.66}
                    x2={321.54}
                    y2={321.66}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-130)',
                  }}
                >
                  <line
                    x1={268.91}
                    y1={258.73}
                    x2={284.63}
                    y2={258.73}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-131)',
                  }}
                >
                  <line
                    x1={113.34}
                    y1={351.7}
                    x2={129.06}
                    y2={351.7}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-132)',
                  }}
                >
                  <line
                    x1={123.04}
                    y1={362.58}
                    x2={138.76}
                    y2={362.58}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-133)',
                  }}
                >
                  <line
                    x1={123.04}
                    y1={339.87}
                    x2={138.76}
                    y2={339.87}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
            </g>
          </g>
          <g
            style={{
              opacity: 0.63000500202179,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-134)',
              }}
            >
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-135)',
                  }}
                >
                  <line
                    x1={777.54}
                    y1={270.56}
                    x2={761.82}
                    y2={270.56}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-136)',
                  }}
                >
                  <line
                    x1={767.84}
                    y1={281.44}
                    x2={752.12}
                    y2={281.44}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-137)',
                  }}
                >
                  <line
                    x1={709.88}
                    y1={226.55}
                    x2={694.16}
                    y2={226.55}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-138)',
                  }}
                >
                  <line
                    x1={700.18}
                    y1={237.43}
                    x2={684.46}
                    y2={237.43}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-139)',
                  }}
                >
                  <line
                    x1={729.99}
                    y1={237.43}
                    x2={714.27}
                    y2={237.43}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-140)',
                  }}
                >
                  <line
                    x1={774.46}
                    y1={222.29}
                    x2={758.75}
                    y2={222.29}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-141)',
                  }}
                >
                  <line
                    x1={718.16}
                    y1={309.83}
                    x2={702.44}
                    y2={309.83}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-142)',
                  }}
                >
                  <line
                    x1={718.16}
                    y1={333.72}
                    x2={702.44}
                    y2={333.72}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-143)',
                  }}
                >
                  <line
                    x1={746.78}
                    y1={333.72}
                    x2={731.06}
                    y2={333.72}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-144)',
                  }}
                >
                  <line
                    x1={776.59}
                    y1={366.37}
                    x2={760.87}
                    y2={366.37}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-145)',
                  }}
                >
                  <line
                    x1={747.97}
                    y1={366.37}
                    x2={732.25}
                    y2={366.37}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-146)',
                  }}
                >
                  <line
                    x1={763.82}
                    y1={378.91}
                    x2={748.1}
                    y2={378.91}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-147)',
                  }}
                >
                  <line
                    x1={776.59}
                    y1={500.69}
                    x2={760.87}
                    y2={500.69}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-148)',
                  }}
                >
                  <line
                    x1={747.97}
                    y1={500.69}
                    x2={732.25}
                    y2={500.69}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-149)',
                  }}
                >
                  <line
                    x1={728.45}
                    y1={483.12}
                    x2={712.73}
                    y2={483.12}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-150)',
                  }}
                >
                  <line
                    x1={761.81}
                    y1={464.14}
                    x2={746.09}
                    y2={464.14}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-151)',
                  }}
                >
                  <line
                    x1={763.82}
                    y1={513.23}
                    x2={748.1}
                    y2={513.23}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-152)',
                  }}
                >
                  <line
                    x1={719.81}
                    y1={404.46}
                    x2={704.09}
                    y2={404.46}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-153)',
                  }}
                >
                  <line
                    x1={733.06}
                    y1={416.76}
                    x2={717.34}
                    y2={416.76}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-154)',
                  }}
                >
                  <line
                    x1={784.99}
                    y1={438.65}
                    x2={769.27}
                    y2={438.65}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-155)',
                  }}
                >
                  <line
                    x1={715.91}
                    y1={427.29}
                    x2={700.19}
                    y2={427.29}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: 'multiply',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-156)',
                  }}
                >
                  <path
                    d="M789.42,431h-8a3.74,3.74,0,0,1,0-7.47h8.07Z"
                    style={{
                      fill: '#ffddb0',
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: 'multiply',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-157)',
                  }}
                >
                  <path
                    d="M789.46,421.8h-2.39a3.74,3.74,0,1,1,0-7.47h2.43Z"
                    style={{
                      fill: '#ffddb0',
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-158)',
                  }}
                >
                  <line
                    x1={730.93}
                    y1={321.66}
                    x2={715.21}
                    y2={321.66}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
              <g
                style={{
                  opacity: 0.309998005628586,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-159)',
                  }}
                >
                  <line
                    x1={767.84}
                    y1={258.73}
                    x2={752.12}
                    y2={258.73}
                    style={{
                      fill: 'none',
                      stroke: '#ff9100',
                      strokeLinecap: 'round',
                      strokeMiterlimit: 10,
                      strokeWidth: 7,
                    }}
                  />
                </g>
              </g>
            </g>
          </g>
          <path
            d="M725.31,570.38H327.7V279.74A115.68,115.68,0,0,1,443.38,164.06H609.63A115.68,115.68,0,0,1,725.31,279.74Z"
            style={{
              fill: '#fff5de',
            }}
          />
          <rect
            x={90.09}
            y={116.36}
            width={698.72}
            height={6.16}
            style={{
              fill: '#fc6',
            }}
          />
          <path
            d="M704.28,570.38H348.53V291.67A115.68,115.68,0,0,1,464.21,176H588.6A115.68,115.68,0,0,1,704.28,291.67Z"
            style={{
              fill: '#f7c546',
            }}
          />
          <path
            d="M704.28,570.38H375V291.67A115.68,115.68,0,0,1,490.7,176h97.9A115.68,115.68,0,0,1,704.28,291.67Z"
            style={{
              fill: '#f9d780',
            }}
          />
          <line
            x1={401.04}
            y1={313}
            x2={416.76}
            y2={313}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={411.22}
            y1={324.36}
            x2={426.93}
            y2={324.36}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={411.22}
            y1={302.83}
            x2={426.93}
            y2={302.83}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={487.28}
            y1={344.82}
            x2={502.99}
            y2={344.82}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={500.53}
            y1={333.94}
            x2={516.24}
            y2={333.94}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={515.67}
            y1={344.59}
            x2={531.39}
            y2={344.59}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={521.58}
            y1={380.78}
            x2={537.3}
            y2={380.78}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={446.82}
            y1={395.69}
            x2={462.54}
            y2={395.69}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={383.89}
            y1={403.73}
            x2={399.61}
            y2={403.73}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={391.93}
            y1={414.14}
            x2={407.65}
            y2={414.14}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={384.36}
            y1={427.39}
            x2={400.08}
            y2={427.39}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={481.36}
            y1={245.22}
            x2={497.08}
            y2={245.22}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={566.06}
            y1={228.66}
            x2={581.78}
            y2={228.66}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={550.92}
            y1={240.96}
            x2={566.64}
            y2={240.96}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={580.73}
            y1={240.96}
            x2={596.45}
            y2={240.96}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={653.59}
            y1={261.31}
            x2={669.31}
            y2={261.31}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={590.19}
            y1={276.92}
            x2={605.91}
            y2={276.92}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={664.95}
            y1={348.37}
            x2={680.67}
            y2={348.37}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={586.4}
            y1={390.48}
            x2={602.12}
            y2={390.48}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <path
            d="M617.57,489.85H597.22V386.29a9.53,9.53,0,0,1,9.53-9.53H608a9.54,9.54,0,0,1,9.54,9.53Z"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M634.84,489.14H580l-7.48-74.48a35.1,35.1,0,0,1,34.92-38.61h0a35.11,35.11,0,0,1,34.93,38.61Z"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M647.85,492.29H567.29v-.69a7.68,7.68,0,0,1,7.67-7.67h65.22a7.67,7.67,0,0,1,7.67,7.67Z"
            style={{
              fill: '#bc7235',
            }}
          />
          <rect
            x={567.23}
            y={492.27}
            width={80.56}
            height={2.38}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M575.1,493.63l3.35,73.44a5.55,5.55,0,0,1-5.53,6.06h-.07"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M639.74,493.63l-3.34,73.44a5.55,5.55,0,0,0,5.52,6.06H642"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <line
            x1={576.52}
            y1={537.87}
            x2={637.56}
            y2={537.87}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M774,489.85H753.6V386.29a9.53,9.53,0,0,1,9.53-9.53h1.28a9.54,9.54,0,0,1,9.54,9.53Z"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M791.22,489.14H736.33l-7.48-74.48a35.1,35.1,0,0,1,34.92-38.61h0a35.1,35.1,0,0,1,34.92,38.61Z"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M804.23,492.29H723.67v-.69a7.68,7.68,0,0,1,7.67-7.67h65.22a7.67,7.67,0,0,1,7.67,7.67Z"
            style={{
              fill: '#bc7235',
            }}
          />
          <rect
            x={723.61}
            y={492.27}
            width={80.56}
            height={2.38}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M731.48,493.63l3.35,73.44a5.55,5.55,0,0,1-5.53,6.06h-.07"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M796.12,493.63l-3.34,73.44a5.55,5.55,0,0,0,5.53,6.06h.06"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <line
            x1={732.9}
            y1={537.87}
            x2={793.94}
            y2={537.87}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <g
            style={{
              opacity: 0.949997007846832,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-160)',
              }}
            >
              <path
                d="M737.48,385.62h0a2.72,2.72,0,0,1-1.8-2.56V363h1V359H726.19V363h1v20a2.74,2.74,0,0,1-1.72,2.54,9.3,9.3,0,0,0-5.88,8.65v48.47a3.09,3.09,0,0,0,2.26,3,37.92,37.92,0,0,0,19.42-.07,3.09,3.09,0,0,0,2.36-3V394.37a9.31,9.31,0,0,0-6.14-8.75"
                style={{
                  fill: '#054924',
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.259995013475418,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-161)',
              }}
            >
              <g
                style={{
                  opacity: 0.839995980262756,
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-162)',
                  }}
                >
                  <path
                    d="M720.79,440.71a2.76,2.76,0,0,0,2,2.66,34,34,0,0,0,17.47-.06,2.77,2.77,0,0,0,2.12-2.68V405.08H720.79Z"
                    style={{
                      fill: '#ed1c24',
                    }}
                  />
                </g>
              </g>
              <path
                d="M742.41,405.13c0,1-4.84,1.78-10.81,1.78s-10.81-.8-10.81-1.78,4.84-1.78,10.81-1.78,10.81.79,10.81,1.78"
                style={{
                  fill: '#fe4c00',
                }}
              />
            </g>
          </g>
          <g id="th1">
            <rect
              x={614.76}
              y={390.49}
              width={29.01}
              height={18.41}
              style={{
                fill: '#ff8a00',
              }}
            />
            <path
              d="M645.3,293.18v5.74a3.73,3.73,0,0,1-3.24,3.77,3.63,3.63,0,0,1-4-3.6v-9.62a1.58,1.58,0,0,0-1.24-1.55c-1.32-.28-2.66-.51-4-.67a1.59,1.59,0,0,0-1.79,1.58v10.09a3.73,3.73,0,0,1-3.24,3.77,3.63,3.63,0,0,1-4-3.6V288.83a1.6,1.6,0,0,0-1.8-1.58c-1.36.16-2.7.39-4,.67a1.59,1.59,0,0,0-1.23,1.55v9.45a3.73,3.73,0,0,1-3.24,3.77,3.64,3.64,0,0,1-4-3.6v-5.91a1.58,1.58,0,0,0-2.29-1.42,44.47,44.47,0,0,0-24.29,39.63v32.42a33.79,33.79,0,0,0,33.79,33.79H638.1a33.79,33.79,0,0,0,33.79-33.79V331.39a44.47,44.47,0,0,0-24.29-39.63,1.59,1.59,0,0,0-2.3,1.42"
              style={{
                fill: '#ff8a00',
              }}
            />
            <path
              d="M609.3,344.24a5.49,5.49,0,0,1,1.6-3.86,5.46,5.46,0,0,1,9.31,3.86,2.31,2.31,0,1,0,4.61,0,10.07,10.07,0,1,0-20.13,0,2.31,2.31,0,1,0,4.61,0"
              style={{
                fill: '#612f00',
              }}
            />
            <path
              d="M648.82,358.9a20.62,20.62,0,0,1-38-.1Z"
              style={{
                fill: '#612f00',
              }}
            />
            <path
              d="M608.33,368.21a7.75,7.75,0,0,0,0-14.28,2.31,2.31,0,1,0-1.8,4.25,3.2,3.2,0,0,1,1.38,1.14,3.14,3.14,0,0,1,.53,1.75,3.12,3.12,0,0,1-1.93,2.88,2.31,2.31,0,0,0,1.78,4.26"
              style={{
                fill: '#ffa625',
              }}
            />
            <path
              d="M653.05,364a3.13,3.13,0,0,1-1.4-4.63,3.2,3.2,0,0,1,1.38-1.14,2.31,2.31,0,0,0-1.79-4.25,7.74,7.74,0,0,0,0,14.28,2.31,2.31,0,0,0,1.78-4.26"
              style={{
                fill: '#ffa625',
              }}
            />
            <path
              d="M641.2,344.24a5.45,5.45,0,1,1,10.9,0,2.31,2.31,0,1,0,4.61,0,10.07,10.07,0,1,0-20.13,0,2.31,2.31,0,0,0,4.62,0"
              style={{
                fill: '#612f00',
              }}
            />
            <path
              d="M631.68,365.14H615a20.6,20.6,0,0,0,22.13,5,5.44,5.44,0,0,0-5.4-5"
              style={{
                fill: '#fc4c01',
              }}
            />
            <polyline
              points="614.76 397.93 626.01 397.93 626.01 397.27 614.76 397.27"
              style={{
                fill: '#eb5000',
              }}
            />
          </g>
          <g
            style={{
              mask: 'url(#mask-15)',
            }}
          >
            <g
              style={{
                opacity: 0.36999499797821,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-163)',
                }}
              >
                <path
                  d="M340.15,487.84H319.8V384.28a9.54,9.54,0,0,1,9.54-9.53h1.28a9.53,9.53,0,0,1,9.53,9.53Z"
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <path
                  d="M357.42,487.13H302.53l-7.48-74.48a35.1,35.1,0,1,1,69.85,0Z"
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <path
                  d="M370.43,490.28H289.87v-.69a7.68,7.68,0,0,1,7.67-7.67h65.22a7.67,7.67,0,0,1,7.67,7.67Z"
                  style={{
                    fill: '#bc7235',
                  }}
                />
                <rect
                  x={289.82}
                  y={490.26}
                  width={80.56}
                  height={2.38}
                  style={{
                    fill: '#101d23',
                  }}
                />
                <path
                  d="M297.68,491.62,301,565.06a5.54,5.54,0,0,1-5.53,6.05h-.07"
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <path
                  d="M362.33,491.62,359,565.06a5.54,5.54,0,0,0,5.53,6.05h.06"
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <line
                  x1={299.1}
                  y1={535.86}
                  x2={360.14}
                  y2={535.86}
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <rect
                  x={385.63}
                  y={443.2}
                  width={24.46}
                  height={124.06}
                  style={{
                    fill: '#101d23',
                  }}
                />
                <path
                  d="M423.09,570.32H372.63a6.1,6.1,0,0,1,6.11-6.11H417a6.11,6.11,0,0,1,6.12,6.11"
                  style={{
                    fill: '#101d23',
                  }}
                />
                <path
                  d="M533.46,450.19H256.66v-.43a6.32,6.32,0,0,1,6.32-6.32H527.14a6.32,6.32,0,0,1,6.32,6.32Z"
                  style={{
                    fill: '#fff',
                  }}
                />
                <polygon
                  points="289.66 443.36 397.07 524.36 505.9 442.97 289.66 443.36"
                  style={{
                    fill: '#fff',
                  }}
                />
                <polygon
                  points="289.66 443.36 397.07 524.36 505.9 442.97 289.66 443.36"
                  style={{
                    fill: 'url(#Unnamed_Pattern)',
                  }}
                />
                <path
                  d="M474,485.83H453.68V382.27a9.53,9.53,0,0,1,9.53-9.53h1.28a9.53,9.53,0,0,1,9.53,9.53Z"
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <path
                  d="M491.29,485.12H436.41l-7.48-74.48a35.1,35.1,0,1,1,69.84,0Z"
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <path
                  d="M504.31,488.27H423.75v-.69a7.67,7.67,0,0,1,7.67-7.67h65.22a7.68,7.68,0,0,1,7.67,7.67Z"
                  style={{
                    fill: '#bc7235',
                  }}
                />
                <rect
                  x={423.69}
                  y={488.25}
                  width={80.56}
                  height={2.38}
                  style={{
                    fill: '#101d23',
                  }}
                />
                <path
                  d="M431.56,489.61l3.34,73.44a5.54,5.54,0,0,1-5.52,6.05h-.07"
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <path
                  d="M496.2,489.61l-3.34,73.44a5.54,5.54,0,0,0,5.52,6.05h.07"
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
                <line
                  x1={432.98}
                  y1={533.85}
                  x2={494.02}
                  y2={533.85}
                  style={{
                    fill: 'none',
                    stroke: '#101d23',
                    strokeMiterlimit: 10,
                    strokeWidth: 4,
                  }}
                />
              </g>
            </g>
          </g>
          <path
            d="M643,483.83H611.74a14,14,0,0,1-14-14V406.14H657v63.73a14,14,0,0,1-14,14"
            style={{
              fill: '#ff8a00',
            }}
          />
          <path
            d="M657,483.83H609.59A11.87,11.87,0,0,1,597.71,472V446.28H657Z"
            style={{
              fill: '#193441',
            }}
          />
          <g id="tarm1">
            <path
              d="M761.53,387.91h-17.3V375.34a2.81,2.81,0,0,1,2.81-2.81h12.87a7.47,7.47,0,0,1,7.47,7.47v2.06a5.85,5.85,0,0,1-5.85,5.85"
              style={{
                fill: '#ff8a00',
              }}
            />
            <path
              d="M674.82,414.14s40.93-2.84,75-34.07"
              style={{
                fill: 'none',
                stroke: '#ff8a00',
                strokeMiterlimit: 10,
                strokeWidth: 15,
              }}
            />
            <path
              d="M646.67,413.67s23.42,7.1,34.06,0"
              style={{
                fill: 'none',
                stroke: '#fe4c00',
                strokeMiterlimit: 10,
                strokeWidth: 21,
              }}
            />
            <path
              d="M757.28,373.9h0a10.11,10.11,0,0,1-8.07-11.81L752.63,344l19.87,3.73-3.41,18.14a10.12,10.12,0,0,1-11.81,8.07"
              style={{
                fill: '#fff',
              }}
            />
            <path
              d="M758.2,371l-.72-.13a7.06,7.06,0,0,1-5.63-8.24l.23-1.23,15.42-.89-1.06,4.87A7.06,7.06,0,0,1,758.2,371"
              style={{
                fill: '#f89e57',
              }}
            />
            <polyline
              points="756.63 373.78 752.39 396.31 753.69 396.55 757.93 374.02"
              style={{
                fill: '#fff',
              }}
            />
            <polyline
              points="749.36 395.81 756.7 397.19 756.94 395.9 749.6 394.52"
              style={{
                fill: '#fff',
              }}
            />
            <path
              d="M749.8,376.53s5.1,5.16,9.76,1"
              style={{
                fill: 'none',
                stroke: '#ff6d00',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
          </g>
          <path
            d="M657,461.43h-59.3v-59.3h48.1A11.2,11.2,0,0,1,657,413.34Z"
            style={{
              fill: '#fe4c00',
            }}
          />
          <path
            d="M579.2,410.64a56.08,56.08,0,0,0-11.32,7.64,59.19,59.19,0,0,0-10.37,11.85,28.37,28.37,0,0,0-3.1,6,18.86,18.86,0,0,0-1.17,6.39,15.41,15.41,0,0,0,2.61,8.66,17.86,17.86,0,0,0,5,4.87,23.76,23.76,0,0,0,4.48,2.31,35.08,35.08,0,0,0,7.44,2,53,53,0,0,0,8.21.6,74.8,74.8,0,0,0,14.73-1.55,87.47,87.47,0,0,0,23.15-8.19,71.64,71.64,0,0,0,20.63-15.88l-11.37-10a53.37,53.37,0,0,1-10.31,8.93A69.84,69.84,0,0,1,599.07,443,64.89,64.89,0,0,1,581,445.8a37,37,0,0,1-6.65-.56,18.51,18.51,0,0,1-3.52-1,8.92,8.92,0,0,1-1.6-.82,3.8,3.8,0,0,1-.58-.47,1.29,1.29,0,0,1-.2-.25.52.52,0,0,1,0-.17,3.87,3.87,0,0,1,.27-1.26,13.29,13.29,0,0,1,1.45-2.73,44.08,44.08,0,0,1,7.7-8.83,41.36,41.36,0,0,1,8.26-5.57Z"
            style={{
              fill: '#ff8a00',
            }}
          />
          <path
            d="M604.2,402.55a34.58,34.58,0,0,0-5.49-.39,45.74,45.74,0,0,0-13.57,2.07,44.27,44.27,0,0,0-8.43,3.64,43.52,43.52,0,0,0-8.49,6.27l15.36,16.3a21.2,21.2,0,0,1,4.14-3.05,21.68,21.68,0,0,1,6.08-2.3,24,24,0,0,1,4.91-.53c.73,0,1.29,0,1.61.07l.28,0h0l.82-5.7-1,5.68.15,0,.82-5.7-1,5.68Z"
            style={{
              fill: '#fe4c00',
            }}
          />
          <polyline
            points="597.71 425.2 602.33 425.2 602.33 424.54 597.71 424.54"
            style={{
              fill: '#fc4c01',
            }}
          />
          <polyline
            points="654.47 479.11 684.12 561.14 698.38 555.98 668.72 473.95"
            style={{
              fill: '#ff8a00',
            }}
          />
          <path
            d="M685.05,517.18l-14.87,5.37-18.31-50.64a7.91,7.91,0,1,1,14.87-5.38Z"
            style={{
              fill: '#193441',
            }}
          />
          <path
            d="M713.52,553.31l-27.25,9.86a1.34,1.34,0,0,1-1.7-.8L681,552.46l19.83-7.17a10.53,10.53,0,0,1,13.49,6.33,1.31,1.31,0,0,1-.79,1.69"
            style={{
              fill: '#193441',
            }}
          />
          <rect
            x={677.72}
            y={527.92}
            width={15.81}
            height={28.2}
            transform="matrix(0.94, -0.34, 0.34, 0.94, -143.43, 265.36)"
            style={{
              fill: '#193441',
            }}
          />
          <path
            d="M636.11,426l-2-.6,2,.66,0-.06-2-.6,2,.66-.55-.19.55.2h0l-.55-.19.55.2v0a2.8,2.8,0,0,1,.15-.29,1.68,1.68,0,0,1,.45-.52.77.77,0,0,1,.24-.12,1.24,1.24,0,0,1,.42-.06.59.59,0,0,1,.17,0h0l0-.11-.06.09,0,0,0-.11-.06.09,0,0,0,0h0l0,0,0,0s0,0,.09.12a1.57,1.57,0,0,1,.19.5,1.2,1.2,0,0,1,0,.17v0l.35-.05-.35,0h0l.35-.05-.35,0,2.15-.25-2.15.2v.05l2.15-.25-2.15.2a3.29,3.29,0,0,0,6.56-.6,6.72,6.72,0,0,0-.19-1.06,8.06,8.06,0,0,0-.51-1.5,7.35,7.35,0,0,0-.77-1.36,6.69,6.69,0,0,0-2.18-2,7,7,0,0,0-3.37-.85,7.6,7.6,0,0,0-5.57,2.34,8.55,8.55,0,0,0-1.5,2.12,7,7,0,0,0-.48,1.16,3.3,3.3,0,0,0,6.31,1.91"
            style={{
              fill: '#ff6900',
            }}
          />
          <path
            d="M645.1,437.51H630.93a3.29,3.29,0,0,1-3.28-3.28v-7a4.59,4.59,0,0,1,4.57-4.57H645.1a6.75,6.75,0,0,1,6.73,6.73v1.34a6.75,6.75,0,0,1-6.73,6.73"
            style={{
              fill: '#ff8a00',
            }}
          />
          <polyline
            points="641.3 480.69 641.3 567.92 656.45 567.92 656.45 480.69"
            style={{
              fill: '#ff8a00',
            }}
          />
          <path
            d="M656.45,526.89H640.64V473a7.91,7.91,0,0,1,15.81,0Z"
            style={{
              fill: '#193441',
            }}
          />
          <path
            d="M671.59,570.55h-29a1.32,1.32,0,0,1-1.32-1.32V558.69h21.09a10.53,10.53,0,0,1,10.53,10.54,1.32,1.32,0,0,1-1.32,1.32"
            style={{
              fill: '#193441',
            }}
          />
          <rect
            x={641.29}
            y={536.35}
            width={15.81}
            height={28.2}
            style={{
              fill: '#193441',
            }}
          />
          <rect
            x={714.95}
            y={445.13}
            width={24.46}
            height={124.06}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M671.26,443.31H650.19a8.8,8.8,0,0,1,8.8-8.8h3.46a8.8,8.8,0,0,1,8.81,8.8"
            style={{
              fill: '#ffe2b0',
            }}
          />
          <path
            d="M669.52,443.31V443H652.25v-.42a6.11,6.11,0,0,1,6.12-6.11h4.71a6.11,6.11,0,0,1,6.11,6.11v.75h.33v0h.33v-.75a6.77,6.77,0,0,0-6.77-6.77h-4.71a6.78,6.78,0,0,0-6.78,6.77v1.08h18.26v-.33Z"
            style={{
              fill: '#e8b75a',
            }}
          />
          <path
            d="M667.66,436.84a2.79,2.79,0,1,1-2.79-2.79,2.79,2.79,0,0,1,2.79,2.79"
            style={{
              fill: '#8e1b00',
            }}
          />
          <path
            d="M667.31,443.31H654.14v-1a4.36,4.36,0,0,1,4.36-4.36H663a4.36,4.36,0,0,1,4.36,4.36Z"
            style={{
              fill: '#ffe2b0',
            }}
          />
          <path
            d="M667.31,443.31V443H654.47v-.69a4,4,0,0,1,4-4H663a4,4,0,0,1,4,4v1h.33v0h.33v-1A4.69,4.69,0,0,0,663,437.6H658.5a4.69,4.69,0,0,0-4.69,4.69v1.35h13.83v-.33Z"
            style={{
              fill: '#e8b75a',
            }}
          />
          <path
            d="M701.78,442.62H665.35V442A11.68,11.68,0,0,1,677,430.36h13.09A11.68,11.68,0,0,1,701.78,442Z"
            style={{
              fill: '#ffe2b0',
            }}
          />
          <path
            d="M699.28,442.62v-.33H667.66v.33H668a10,10,0,0,1,10.06-10.06h10.84A10,10,0,0,1,699,442.62h.33v0h.33a10.72,10.72,0,0,0-10.72-10.72H678.05a10.72,10.72,0,0,0-10.72,10.72V443h32.28v-.33Z"
            style={{
              fill: '#e8b75a',
            }}
          />
          <path
            d="M695.52,434.05a2.79,2.79,0,1,1-2.79-2.79,2.79,2.79,0,0,1,2.79,2.79"
            style={{
              fill: '#8e1b00',
            }}
          />
          <path
            d="M696.81,442.62H670.12v-.48a7.64,7.64,0,0,1,7.64-7.63h11.42a7.64,7.64,0,0,1,7.63,7.63Z"
            style={{
              fill: '#ffe2b0',
            }}
          />
          <path
            d="M696.81,442.62v-.33H670.45v-.15a7.31,7.31,0,0,1,7.31-7.3h11.42a7.31,7.31,0,0,1,7.3,7.3v.48h.33v0h.33v-.48a8,8,0,0,0-8-8H677.76a8,8,0,0,0-8,8V443h27.34v-.33Z"
            style={{
              fill: '#e8b75a',
            }}
          />
          <path
            d="M693.32,442.62v-.33H674v-.69a4.42,4.42,0,0,1,4.43-4.43h10.18A4.42,4.42,0,0,1,693,441.6v1h.33v0h.33v-1a5.09,5.09,0,0,0-5.09-5.09H678.38a5.09,5.09,0,0,0-5.09,5.09V443h20.36v-.33Z"
            style={{
              fill: '#e8b75a',
            }}
          />
          <path
            d="M685.82,431.26a2.79,2.79,0,1,1-2.79-2.79,2.79,2.79,0,0,1,2.79,2.79"
            style={{
              fill: '#8e1b00',
            }}
          />
          <path
            d="M710.08,445.17H640.42a5.94,5.94,0,0,1-5.94-5.94H716a5.94,5.94,0,0,1-5.94,5.94"
            style={{
              fill: '#57758f',
            }}
          />
          <rect
            x={645.45}
            y={421.46}
            width={27.41}
            height={2.55}
            style={{
              fill: '#cab195',
            }}
          />
          <path
            d="M673.89,425.92H671.1a2.3,2.3,0,0,1-2.3-2.3v-1.76a2.3,2.3,0,0,1,2.3-2.3h2.79Z"
            style={{
              fill: '#cab195',
            }}
          />
          <path
            d="M680.36,425.92h-7.91a.58.58,0,0,1-.58-.57v-.27a.57.57,0,0,1,.58-.57h7.91a.57.57,0,0,1,.57.57v.27a.58.58,0,0,1-.57.57"
            style={{
              fill: '#cab195',
            }}
          />
          <path
            d="M680.36,423.45h-7.91a.58.58,0,0,1-.58-.57v-.28a.58.58,0,0,1,.58-.57h7.91a.58.58,0,0,1,.57.57v.28a.58.58,0,0,1-.57.57"
            style={{
              fill: '#cab195',
            }}
          />
          <path
            d="M680.36,421h-7.91a.58.58,0,0,1-.58-.58v-.27a.58.58,0,0,1,.58-.57h7.91a.58.58,0,0,1,.57.57v.27a.58.58,0,0,1-.57.58"
            style={{
              fill: '#cab195',
            }}
          />
          <path
            d="M674.57,432.23h0a.69.69,0,0,1-.68-.68v-9.89a.68.68,0,1,1,1.36,0v9.89a.69.69,0,0,1-.68.68"
            style={{
              fill: '#ffe2b0',
            }}
          />
          <path
            d="M675.83,431.43h0a.58.58,0,0,1-.58-.57v-11a.58.58,0,0,1,1.15,0v11a.58.58,0,0,1-.57.57"
            style={{
              fill: '#ffe2b0',
            }}
          />
          <path
            d="M677,431.27h0a.58.58,0,0,1-.58-.58v-11a.58.58,0,0,1,1.15,0v11a.58.58,0,0,1-.57.58"
            style={{
              fill: '#ffe2b0',
            }}
          />
          <path
            d="M679.05,431.27h0a.58.58,0,0,1-.58-.58v-11a.58.58,0,0,1,1.15,0v11a.58.58,0,0,1-.57.58"
            style={{
              fill: '#ffe2b0',
            }}
          />
          <path
            d="M678.13,426.6h0a.58.58,0,0,1-.58-.57v-6.3a.58.58,0,0,1,1.15,0V426a.58.58,0,0,1-.57.57"
            style={{
              fill: '#ffe2b0',
            }}
          />
          <path
            d="M752.41,572.25H702a6.11,6.11,0,0,1,6.11-6.12h38.23a6.12,6.12,0,0,1,6.12,6.12"
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M862.78,452.11H586v-.42a6.32,6.32,0,0,1,6.32-6.32H856.47a6.31,6.31,0,0,1,6.31,6.32Z"
            style={{
              fill: '#bc7235',
            }}
          />
          <polygon
            points="618.99 445.28 726.39 526.28 835.22 444.9 618.99 445.28"
            style={{
              fill: '#fff',
            }}
          />
          <polygon
            points="618.99 445.28 726.39 526.28 835.22 444.9 618.99 445.28"
            style={{
              fill: 'url(#Unnamed_Pattern)',
            }}
          />
          <g
            style={{
              opacity: 0.190001994371414,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-164)',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-165)',
                }}
              >
                <rect
                  x={242.18}
                  y={664.75}
                  width={576.9}
                  height={79.38}
                  style={{
                    fill: 'url(#linear-gradient-17)',
                  }}
                />
              </g>
            </g>
          </g>
          <rect
            width={1635.11}
            height={781.14}
            style={{
              fill: 'none',
            }}
          />
          <g
            style={{
              clipPath: 'url(#clip-path-166)',
            }}
          >
            <g
              style={{
                mask: 'url(#mask-16)',
              }}
            >
              <rect
                x={90.72}
                y={570.38}
                width={728.31}
                height={94.37}
                style={{
                  fill: 'url(#linear-gradient-18)',
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.529999017715454,
              mixBlendMode: 'multiply',
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-167)',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-167)',
                }}
              >
                <rect
                  x={74.1}
                  y={570.38}
                  width={745.18}
                  height={26.63}
                  style={{
                    fill: 'url(#linear-gradient-19)',
                  }}
                />
              </g>
            </g>
          </g>
          <g
            style={{
              opacity: 0.529999017715454,
              mixBlendMode: 'multiply',
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-169)',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-170)',
                }}
              >
                <g
                  style={{
                    mask: 'url(#mask-17)',
                  }}
                >
                  <rect
                    x={74.1}
                    y={597.01}
                    width={745.18}
                    height={3.46}
                    style={{
                      fill: 'url(#linear-gradient-20)',
                    }}
                  />
                </g>
              </g>
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-171)',
              }}
            >
              <line
                x1={315.99}
                y1={609.56}
                x2={331.71}
                y2={609.56}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-172)',
              }}
            >
              <line
                x1={346.73}
                y1={609.56}
                x2={362.45}
                y2={609.56}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-173)',
              }}
            >
              <line
                x1={376.13}
                y1={643.21}
                x2={391.85}
                y2={643.21}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-174)',
              }}
            >
              <line
                x1={394.84}
                y1={626.97}
                x2={410.55}
                y2={626.97}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-175)',
              }}
            >
              <line
                x1={485.71}
                y1={644.95}
                x2={501.43}
                y2={644.95}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-176)',
              }}
            >
              <line
                x1={501.74}
                y1={631.03}
                x2={517.46}
                y2={631.03}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-177)',
              }}
            >
              <line
                x1={515.64}
                y1={645.24}
                x2={531.36}
                y2={645.24}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-178)',
              }}
            >
              <line
                x1={642.45}
                y1={645.72}
                x2={658.17}
                y2={645.72}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-179)',
              }}
            >
              <line
                x1={674.15}
                y1={645.72}
                x2={689.87}
                y2={645.72}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-180)',
              }}
            >
              <line
                x1={657.59}
                y1={657.55}
                x2={673.31}
                y2={657.55}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-181)',
              }}
            >
              <line
                x1={756.96}
                y1={619.22}
                x2={772.67}
                y2={619.22}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-182)',
              }}
            >
              <line
                x1={744.18}
                y1={608.81}
                x2={759.9}
                y2={608.81}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g id="tleaf2">
            <path
              d="M863.14,492.1a15.48,15.48,0,1,1-15.47-15.48,15.47,15.47,0,0,1,15.47,15.48"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M851.89,479.78a10.63,10.63,0,1,1-10.63-10.63,10.63,10.63,0,0,1,10.63,10.63"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M842.34,496a10.66,10.66,0,1,1-10.66-10.67A10.66,10.66,0,0,1,842.34,496"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M831.78,495.32a2.37,2.37,0,1,1-2.37-2.37,2.37,2.37,0,0,1,2.37,2.37"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M863,497.52c1.57.84,2.93,3.77,3.53,5.23a.74.74,0,0,1-.56,1c-1.54.31-4.73.81-6.3,0-2.12-1.13-3.09-3.45-2.17-5.17s3.39-2.2,5.5-1.07"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M832.73,509.65c-1.58.81-4.76.27-6.3-.06a.74.74,0,0,1-.54-1c.62-1.45,2-4.36,3.59-5.18,2.14-1.1,4.59-.59,5.49,1.15s-.11,4-2.24,5.14"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M860.93,490.26c2.48-.41,6.53,1.69,8.46,2.8a1,1,0,0,1,.28,1.65c-1.46,1.69-4.59,5-7.08,5.42-3.35.57-6.43-1.18-6.89-3.91s1.88-5.39,5.23-6"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M845.45,478.19a2.37,2.37,0,1,1-2.37-2.37,2.37,2.37,0,0,1,2.37,2.37"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M854.53,486.35a1.56,1.56,0,1,1-1.56-1.56,1.56,1.56,0,0,1,1.56,1.56"
              style={{
                fill: '#c6170a',
              }}
            />
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-183)',
              }}
            >
              <line
                x1={565.89}
                y1={625.23}
                x2={581.61}
                y2={625.23}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-184)',
              }}
            >
              <line
                x1={793.01}
                y1={651.25}
                x2={808.73}
                y2={651.25}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-185)',
              }}
            >
              <line
                x1={619.83}
                y1={608.19}
                x2={635.55}
                y2={608.19}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <g
            style={{
              opacity: 0.309998005628586,
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-186)',
              }}
            >
              <line
                x1={330.96}
                y1={622.62}
                x2={346.68}
                y2={622.62}
                style={{
                  fill: 'none',
                  stroke: '#ff9100',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 7,
                }}
              />
            </g>
          </g>
          <path
            d="M844.83,538.29H834V501.87h28.2v19.06a17.35,17.35,0,0,1-17.35,17.36"
            style={{
              fill: '#2e4556',
            }}
          />
          <path
            d="M850.72,499.3c1.31,1.21,1.89,4.38,2.1,5.95a.72.72,0,0,1-.8.86c-1.57-.08-4.78-.4-6.09-1.6-1.77-1.63-2.12-4.12-.8-5.55s3.83-1.28,5.59.34"
            style={{
              fill: '#97ca67',
            }}
          />
          <rect
            x={330.83}
            y={479.67}
            width={352.36}
            height={91.56}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={330.83}
            y={559.63}
            width={352.36}
            height={11.6}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={330.83}
            y={479.43}
            width={352.36}
            height={11.6}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M683.19,571.23H821.71a10.87,10.87,0,0,0,10.87-10.87v-.73H683.19Z"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={683.19}
            y={479.43}
            width={150.14}
            height={11.6}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={89.95}
            y={479.43}
            width={231.16}
            height={11.6}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={89.95}
            y={559.87}
            width={231.16}
            height={11.6}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={436.71}
            y={479.67}
            width={18.05}
            height={91.56}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={330.25}
            y={479.67}
            width={18.05}
            height={91.56}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={300.44}
            y={479.67}
            width={18.05}
            height={91.56}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={186.93}
            y={479.67}
            width={18.05}
            height={91.56}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={661.94}
            y={479.67}
            width={18.05}
            height={91.56}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={691.04}
            y={479.67}
            width={18.05}
            height={91.56}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M815,571.23h4.51a13.54,13.54,0,0,0,13.54-13.53v-78H815Z"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={562.69}
            y={479.67}
            width={18.05}
            height={91.56}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M819.26,571.23H688.05V479.68H833v77.86A13.69,13.69,0,0,1,819.26,571.23Z"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M845,538.29H834V494.76h28.39v26.17A17.35,17.35,0,0,1,845,538.29Z"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={315.6}
            y={469.52}
            width={17.36}
            height={103.75}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M333.88,472.84H315a1.59,1.59,0,0,1-1.59-1.59V471a1.6,1.6,0,0,1,1.59-1.6h18.88a1.6,1.6,0,0,1,1.59,1.6v.21a1.59,1.59,0,0,1-1.59,1.59"
            style={{
              fill: '#101d23',
            }}
          />
          <rect
            x={317.88}
            y={466.99}
            width={12.95}
            height={2.48}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M336.49,456.72a12.16,12.16,0,1,1-12.16-12.15,12.16,12.16,0,0,1,12.16,12.15"
            style={{
              fill: '#101d23',
            }}
          />
          <rect
            x={676.86}
            y={469.52}
            width={17.36}
            height={103.75}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M695.14,472.84H676.26a1.59,1.59,0,0,1-1.59-1.59V471a1.6,1.6,0,0,1,1.59-1.6h18.88a1.6,1.6,0,0,1,1.59,1.6v.21a1.59,1.59,0,0,1-1.59,1.59"
            style={{
              fill: '#101d23',
            }}
          />
          <rect
            x={679.14}
            y={466.99}
            width={12.95}
            height={2.48}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M697.75,456.72a12.16,12.16,0,1,1-12.16-12.15,12.16,12.16,0,0,1,12.16,12.15"
            style={{
              fill: '#101d23',
            }}
          />
          <g id="tleaf3">
            <path
              d="M617,489a5.51,5.51,0,0,0-10.7-1.88,9,9,0,0,0-2.81-.45,8.92,8.92,0,0,0-3.58.74,12.68,12.68,0,0,0-20.58-4.23,19.77,19.77,0,0,0-9.15-5.53,28.77,28.77,0,0,0-53.38-3,19.61,19.61,0,0,0-6.39-1.07,19.83,19.83,0,0,0-18.28,12.14,9,9,0,0,0-13.91,1.68,12.62,12.62,0,0,0-9.44-4.24,11.31,11.31,0,0,0-1.17.06,19.8,19.8,0,0,0-32.86-4.07,12.66,12.66,0,0,0-19.49,6.56,8.7,8.7,0,1,0,3.53,13.05,12.67,12.67,0,0,0,13.48,2.38,19.79,19.79,0,0,0,30.51,5.86,12.67,12.67,0,0,0,18.08-7.34,9,9,0,0,0,10.59-.45,19.81,19.81,0,0,0,32.19,8.95A28.76,28.76,0,0,0,554,513.24a19.81,19.81,0,0,0,29.37-9.33,12.67,12.67,0,0,0,13.39-2.36,9,9,0,0,0,15.76-5.93,8.28,8.28,0,0,0-.09-1.23A5.52,5.52,0,0,0,617,489"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M522.66,483.59a2.09,2.09,0,1,1-2.09-2.09,2.1,2.1,0,0,1,2.09,2.09"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M614.71,491.79c1.37,1.13,2.12,4.27,2.41,5.82a.73.73,0,0,1-.75.91c-1.57,0-4.79-.15-6.17-1.28-1.85-1.53-2.34-4-1.09-5.5s3.75-1.48,5.6.05"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M566.16,473.17c.75-1.62,3.6-3.13,5-3.81a.73.73,0,0,1,1.07.5c.4,1.52,1.08,4.68.33,6.29-1,2.18-3.27,3.28-5,2.45s-2.39-3.25-1.38-5.43"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M572,474.62c1.78,0,4.4,1.84,5.64,2.82a.73.73,0,0,1,0,1.17c-1.19,1-3.72,3-5.5,3.08-2.4.06-4.39-1.47-4.43-3.43s1.86-3.58,4.26-3.64"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M590.35,485.9a2.09,2.09,0,1,1-2.09-2.09,2.08,2.08,0,0,1,2.09,2.09"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M442,481.22a1.2,1.2,0,1,1-1.2-1.2,1.2,1.2,0,0,1,1.2,1.2"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M449.92,485.27a1.2,1.2,0,1,1-1.2-1.2,1.2,1.2,0,0,1,1.2,1.2"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M430.64,496.3a1,1,0,1,1-1-1,1,1,0,0,1,1,1"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M422.2,483a1.15,1.15,0,1,1-1.15-1.15A1.15,1.15,0,0,1,422.2,483"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M504.05,483.58a1.42,1.42,0,1,1-1.42-1.42,1.43,1.43,0,0,1,1.42,1.42"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M612.83,486.77a1.42,1.42,0,1,1-1.41-1.41,1.41,1.41,0,0,1,1.41,1.41"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M536.26,482a1.72,1.72,0,1,1-1.72-1.72,1.72,1.72,0,0,1,1.72,1.72"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M545.75,469.2a2.37,2.37,0,1,1-2.37-2.37,2.38,2.38,0,0,1,2.37,2.37"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M560.7,483.05a1.82,1.82,0,1,1-1.82-1.81,1.82,1.82,0,0,1,1.82,1.81"
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M464,486.6a.89.89,0,0,1-1.77,0,.89.89,0,1,1,1.77,0"
              style={{
                fill: '#c6170a',
              }}
            />
          </g>
          <path
            d="M432,535H589.49a21,21,0,0,0,21-21V498.53H411v15.53a21,21,0,0,0,21,21"
            style={{
              fill: '#2e4556',
            }}
          />
          <line
            x1={410.79}
            y1={506.88}
            x2={547.54}
            y2={506.88}
            style={{
              fill: 'none',
              stroke: '#57758f',
              strokeMiterlimit: 10,
            }}
          />
          <line
            x1={596.04}
            y1={506.88}
            x2={560.79}
            y2={506.88}
            style={{
              fill: 'none',
              stroke: '#57758f',
              strokeMiterlimit: 10,
            }}
          />
          <path
            d="M458.5,494.24a6.89,6.89,0,1,1-6.89-6.88,6.89,6.89,0,0,1,6.89,6.88"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M432,535H589.49a21,21,0,0,0,21-21V491H411v23A21,21,0,0,0,432,535Z"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M467.19,499.61a6.41,6.41,0,1,1-6.41-6.4,6.41,6.41,0,0,1,6.41,6.4"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M466.43,505.22c.58,1.13.2,3.39,0,4.48a.52.52,0,0,1-.74.39c-1-.44-3.1-1.43-3.69-2.55-.78-1.52-.42-3.27.81-3.9a2.84,2.84,0,0,1,3.66,1.58"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M467.08,500.39c1.25.17,2.89,1.77,3.65,2.59a.52.52,0,0,1-.11.83c-.95.6-2.94,1.73-4.2,1.57a2.57,2.57,0,1,1,.66-5"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M558.54,497.13c1,1.47.82,4.69.66,6.26a.74.74,0,0,1-1,.66c-1.51-.45-4.56-1.5-5.55-3-1.34-2-1.11-4.49.51-5.58s4-.36,5.36,1.64"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M562.7,493.76c1.57.84,2.92,3.76,3.52,5.22a.73.73,0,0,1-.55,1c-1.55.32-4.74.82-6.3,0-2.12-1.14-3.09-3.45-2.17-5.17s3.38-2.2,5.5-1.07"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M478.46,496.22c1.12.6,2.08,2.68,2.51,3.72a.52.52,0,0,1-.4.74c-1.1.22-3.36.58-4.48,0a2.57,2.57,0,1,1,2.37-4.44"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M436.93,500.29c-.7,1.24-3.07,2.26-4.25,2.7a.58.58,0,0,1-.81-.47c-.22-1.24-.55-3.79.15-5,1-1.66,2.82-2.39,4.18-1.61s1.68,2.75.73,4.41"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M519.88,500.47c-1,1-3.49,1.51-4.74,1.68a.58.58,0,0,1-.69-.64c.06-1.25.32-3.82,1.28-4.86,1.3-1.41,3.28-1.7,4.43-.64s1,3.05-.28,4.46"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M431.45,499.58c-1,.61-3.21.37-4.27.2a.5.5,0,0,1-.41-.69c.36-1,1.19-3,2.23-3.65a2.46,2.46,0,1,1,2.45,4.14"
            style={{
              fill: '#97ca67',
            }}
          />
          <path
            d="M462,498.36a1.2,1.2,0,1,1-1.2-1.2,1.19,1.19,0,0,1,1.2,1.2"
            style={{
              fill: '#c6170a',
            }}
          />
          <rect
            x={432.5}
            y={491.03}
            width={18.99}
            height={43.65}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={568.77}
            y={491.03}
            width={18.98}
            height={43.65}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={499.04}
            y={491.03}
            width={18.99}
            height={43.65}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={90.04}
            y={150.59}
            width={741.87}
            height={33.02}
            style={{
              fill: '#009245',
            }}
          />
          <rect
            x={90.02}
            y={149.17}
            width={741.89}
            height={5.39}
            style={{
              fill: '#ffd505',
            }}
          />
          <path
            d="M277.08,212.34H257.87a10.45,10.45,0,0,1-10.44-10.44V175.08h40.08V201.9a10.44,10.44,0,0,1-10.43,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M316.46,212.34h-19.2a10.44,10.44,0,0,1-10.44-10.44V175.08H326.9V201.9a10.45,10.45,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M355.14,212.34h-19.2A10.45,10.45,0,0,1,325.5,201.9V175.08h40.08V201.9a10.44,10.44,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M394.53,212.34h-19.2a10.44,10.44,0,0,1-10.44-10.44V175.08H405V201.9a10.45,10.45,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M119.67,212.34h-19.2A10.45,10.45,0,0,1,90,201.9V175.08h40.08V201.9a10.44,10.44,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M159.06,212.34H139.85a10.45,10.45,0,0,1-10.44-10.44V175.08h40.08V201.9a10.44,10.44,0,0,1-10.43,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M197.74,212.34h-19.2A10.44,10.44,0,0,1,168.1,201.9V175.08h40.08V201.9a10.44,10.44,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M237.13,212.34H217.92a10.45,10.45,0,0,1-10.44-10.44V175.08h40.08V201.9a10.44,10.44,0,0,1-10.43,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M432.52,212.34h-19.2a10.44,10.44,0,0,1-10.44-10.44V175.08H443V201.9a10.45,10.45,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M471.9,212.34H452.7a10.44,10.44,0,0,1-10.44-10.44V175.08h40.08V201.9a10.44,10.44,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M510.59,212.34h-19.2A10.44,10.44,0,0,1,481,201.9V175.08H521V201.9a10.45,10.45,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M550,212.34h-19.2a10.44,10.44,0,0,1-10.44-10.44V175.08h40.08V201.9A10.44,10.44,0,0,1,550,212.34"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M589.35,212.34h-19.2a10.45,10.45,0,0,1-10.44-10.44V175.08h40.08V201.9a10.44,10.44,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M628.74,212.34h-19.2A10.44,10.44,0,0,1,599.1,201.9V175.08h40.08V201.9a10.45,10.45,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M667.42,212.34h-19.2a10.45,10.45,0,0,1-10.44-10.44V175.08h40.08V201.9a10.44,10.44,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M706.81,212.34H687.6a10.44,10.44,0,0,1-10.43-10.44V175.08h40.08V201.9a10.45,10.45,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M743.4,212.34H724.2a10.44,10.44,0,0,1-10.44-10.44V175.08h40.08V201.9a10.44,10.44,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M782.78,212.34h-19.2a10.45,10.45,0,0,1-10.44-10.44V175.08h40.08V201.9a10.44,10.44,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <path
            d="M821.47,212.34h-19.2a10.44,10.44,0,0,1-10.44-10.44V175.08h40.08V201.9a10.44,10.44,0,0,1-10.44,10.44"
            style={{
              fill: '#009245',
            }}
          />
          <line
            x1={247.43}
            y1={164.67}
            x2={763.27}
            y2={164.67}
            style={{
              fill: 'none',
              stroke: '#025b2a',
              strokeMiterlimit: 10,
            }}
          />
          <line
            x1={831.91}
            y1={164.67}
            x2={780.49}
            y2={164.67}
            style={{
              fill: 'none',
              stroke: '#025b2a',
              strokeMiterlimit: 10,
            }}
          />
          <path
            d="M726.23,175.11h3.53c3.66,0,1.77,3.92,3.66,3.92h1l1.77-6.43a6.19,6.19,0,0,1-2.6.54H719.66a7.81,7.81,0,0,0-.32,1.1c0,.83,1.57.29,1.57,1.22a2.34,2.34,0,0,1-.1.55l-4.49,16.86c-.48,1.74-2,.83-2.28,1.93l-.28,1h17.61l1.57-5.82h-1c-2.63,0-.49,3.86-7.35,3.86h-3.37l2.31-8.65h2.34c2.06,0,.49,2.67,2.22,2.67h.8l1.76-6.6h-1c-1.73,0-.9,2-3.46,2h-2.18Zm-15.46,0h2.47c3.18,0,.74,3.76,2.82,3.76h.81l1.63-6.27a6.16,6.16,0,0,1-2.6.54H701.21a6.41,6.41,0,0,1-1.12-.06,2.36,2.36,0,0,1-1.06-.48l-1.64,6.27h1c2.5,0,.64-3.76,6.06-3.76h1.09l-4.65,17.34c-.61,2.35-2,1.32-2.38,2.35l-.32,1h9a10.35,10.35,0,0,0,.29-1.12c0-.77-1.51-.36-1.51-1.22a3.44,3.44,0,0,1,.19-1.13Zm-36.54,17.24c-.67,2.58-2.15,1.1-2.57,2.45l-.28,1h6.38a6.22,6.22,0,0,0,.26-1c0-.9-1.83-.35-1.83-1.73a3.48,3.48,0,0,1,.16-1l3.82-14.25L687.74,196H690l5.3-19.85c.51-2.12,1.67-.55,2.11-2.22l.2-.81h-5.71a4.84,4.84,0,0,0-.23,1c0,1,1.64.42,1.64,1.61a6.63,6.63,0,0,1-.26,1.19l-2.92,11L684,173.14h-6.67a7.24,7.24,0,0,0-.22.94c0,1,1.5.38,1.5,1.61a3.75,3.75,0,0,1-.19,1.06Zm-11.07-3,.36,2.41a6.86,6.86,0,0,1,.12,1.13c0,1.77-1.63.8-1.95,2l-.26,1h8.79a9.21,9.21,0,0,0,.26-1.09c0-.84-1.25-.1-1.51-1.74l-3-19.05c-.07-.38-.13-1.35-.71-1.35a4.93,4.93,0,0,0-.8.2l-2.44.67c-.45.13-1.12.16-1.12.77,0,.36.16,1.07.19,1.36l.1.64-10.88,17c-.83,1.28-1.86.8-2.08,1.67l-.26,1h7a8.3,8.3,0,0,0,.25-1.06c0-.93-1.73-.45-1.73-1.77a3.1,3.1,0,0,1,.58-1.57l1.28-2.06Zm-.29-2.13h-6.15l4.94-8Zm-25.34-1.83h.32c.64,0,1,.45,1.19,1l3.08,9.46h6.45a10.3,10.3,0,0,0,.25-1.06c0-1-1.25.36-2.37-2.86l-1-2.77-.36-1c-.58-1.74-1.31-3.18-3.33-3.22v-.06c3.72,0,9-2.06,9-6.6s-4.3-5-6.38-5H633.65c0,.13-.32,1-.32,1.1,0,.83,1.54.29,1.54,1.22a1.42,1.42,0,0,1-.1.55l-4.55,17c-.45,1.67-1.9.58-2.25,1.8l-.29,1h8.92a7.85,7.85,0,0,0,.32-1.12c0-.81-1.54-.29-1.54-1.19a2.84,2.84,0,0,1,.1-.55ZM640.29,175h2.6c1.89,0,2.37,2,2.37,2.76,0,4.6-3.94,5.83-6,5.83H638Zm-21.37-.71c3.28,0,4.3,3.25,4.3,5.89,0,4.4-2.37,14.54-8.05,14.54-3.27,0-4.3-3.25-4.3-5.89,0-4.41,2.37-14.54,8-14.54m-.16-1.64c-7.73,0-13.15,6.69-13.15,14.12a9.38,9.38,0,0,0,9.72,9.59c7.73,0,13.15-6.69,13.15-14.12a9.3,9.3,0,0,0-9.72-9.59m-19,2.51h2.47c3.18,0,.74,3.76,2.82,3.76h.8l1.64-6.27a6.19,6.19,0,0,1-2.6.54H590.21a6.41,6.41,0,0,1-1.12-.06,2.27,2.27,0,0,1-1.06-.48l-1.64,6.27h1c2.5,0,.64-3.76,6.06-3.76h1.09l-4.65,17.34c-.61,2.35-2,1.32-2.38,2.35l-.32,1h9a10.35,10.35,0,0,0,.29-1.12c0-.77-1.51-.36-1.51-1.22a3.44,3.44,0,0,1,.19-1.13ZM582.9,173.4a1,1,0,0,1-.93.71c-1.26,0-2.38-1.51-5.81-1.51-4.24,0-8,2.7-8,6.92,0,6.3,8.34,7.3,8.34,11.64,0,2.16-2.21,3.35-3.91,3.35-5.59,0-4.08-5.08-6.16-5.08h-1l-1.74,6.33h1.77c.35-.57.67-.9,1.28-.9,1.15,0,3.27,1.45,6.9,1.45,5.13,0,8.5-3.15,8.5-7.08,0-6.08-8.34-7.69-8.34-11.71A3.17,3.17,0,0,1,577,174.4c4.4,0,3.31,4.57,5.29,4.57h1l1.47-5.57ZM558,173.14a6.85,6.85,0,0,0-.29,1.1c0,.9,1.61.26,1.61,1.22a3,3,0,0,1-.1.55l-4.55,16.86c-.45,1.7-1.9.71-2.31,1.93l-.32,1h9.11a11.1,11.1,0,0,0,.29-1.12c0-.81-1.58-.26-1.58-1.19a1.58,1.58,0,0,1,.1-.55l4.36-16.35c.74-2.73,2-1.06,2.51-2.6l.25-.81Zm-17.38,12.2H541c.64,0,1,.45,1.18,1l3.08,9.46h6.45a10.27,10.27,0,0,0,.26-1.06c0-1-1.25.36-2.38-2.86l-1-2.77-.35-1c-.58-1.74-1.32-3.18-3.34-3.22v-.06c3.72,0,9.05-2.06,9.05-6.6s-4.3-5-6.38-5H536.76c0,.13-.32,1-.32,1.1,0,.83,1.54.29,1.54,1.22a1.63,1.63,0,0,1-.09.55l-4.56,17c-.45,1.67-1.89.58-2.24,1.8l-.29,1h8.92a7.85,7.85,0,0,0,.32-1.12c0-.81-1.54-.29-1.54-1.19a2.87,2.87,0,0,1,.09-.55ZM543.41,175H546c1.9,0,2.38,2,2.38,2.76,0,4.6-4,5.83-6,5.83h-1.32Z"
            style={{
              fill: '#fffbf5',
            }}
          />
          <path
            d="M517.48,183.82a2.88,2.88,0,1,1-2.88-2.89,2.88,2.88,0,0,1,2.88,2.89"
            style={{
              fill: '#fffbf5',
            }}
          />
          <path
            d="M754,183.82a2.88,2.88,0,1,1-2.88-2.89,2.88,2.88,0,0,1,2.88,2.89"
            style={{
              fill: '#fffbf5',
            }}
          />
          <g
            style={{
              opacity: 0.270004004240036,
              isolation: 'isolate',
            }}
          >
            <g
              style={{
                clipPath: 'url(#clip-path-187)',
              }}
            >
              <path
                d="M760.34,257.86a39.58,39.58,0,1,1-39.57,39.58,39.58,39.58,0,0,1,39.57-39.58"
                style={{
                  fill: '#ffd505',
                }}
              />
            </g>
          </g>
          <path
            d="M760.43,247.12h0a3.21,3.21,0,0,1,3.2,3.21v14.94h-6.4V250.33a3.21,3.21,0,0,1,3.2-3.21"
            style={{
              fill: '#ffbc00',
            }}
          />
          <rect
            width={1635.11}
            height={781.14}
            style={{
              fill: 'none',
            }}
          />
          <g
            style={{
              clipPath: 'url(#clip-path-50)',
            }}
          >
            <path
              d="M751.73,262.25H769a6,6,0,0,1,6,6H745.69A6,6,0,0,1,751.73,262.25Z"
              style={{
                fill: '#ffbc00',
              }}
            />
            <rect
              x={757.23}
              y={259.04}
              width={6.4}
              height={2.97}
              style={{
                fill: '#e5a505',
              }}
            />
            <rect
              x={749.03}
              y={260.5}
              width={22.86}
              height={1.81}
              style={{
                fill: '#ffa300',
              }}
            />
            <g
              style={{
                opacity: 0.440001994371414,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-189)',
                }}
              >
                <path
                  d="M782.51,290.27v1.07a23.78,23.78,0,0,1-23.77,23.78h-1"
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
                <path
                  d="M781.86,285.93a7.87,7.87,0,0,0-2-5.05"
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.270004004240036,
                isolation: 'isolate',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-190)',
                }}
              >
                <path
                  d="M293.33,257.86a39.58,39.58,0,1,1-39.58,39.58,39.58,39.58,0,0,1,39.58-39.58"
                  style={{
                    fill: '#ffd505',
                  }}
                />
              </g>
            </g>
            <path
              d="M293.42,247.12h0a3.21,3.21,0,0,1,3.2,3.21v14.94h-6.4V250.33a3.21,3.21,0,0,1,3.2-3.21"
              style={{
                fill: '#ffbc00',
              }}
            />
          </g>
          <g id="slights">
            <g
              style={{
                clipPath: 'url(#clip-path-191)',
              }}
            >
              <g
                style={{
                  isolation: 'isolate',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-192)',
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-193)',
                    }}
                  >
                    <image
                      width={132}
                      height={132}
                      transform="translate(726.44 258.56) scale(0.51)"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g
              style={{
                clipPath: 'url(#clip-path-194)',
              }}
            >
              <g
                style={{
                  isolation: 'isolate',
                }}
              >
                <g
                  style={{
                    clipPath: 'url(#clip-path-195)',
                  }}
                >
                  <g
                    style={{
                      clipPath: 'url(#clip-path-196)',
                    }}
                  >
                    <image
                      width={132}
                      height={132}
                      transform="translate(259.43 258.56) scale(0.51)"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g
            style={{
              clipPath: 'url(#clip-path-50)',
            }}
          >
            <path
              d="M284.72,262.25h17.22a6,6,0,0,1,6,6h-29.3a6,6,0,0,1,6-6"
              style={{
                fill: '#ffbc00',
              }}
            />
            <rect
              x={290.21}
              y={259.04}
              width={6.4}
              height={2.97}
              style={{
                fill: '#e5a505',
              }}
            />
            <rect
              x={282.02}
              y={260.5}
              width={22.86}
              height={1.81}
              style={{
                fill: '#ffa300',
              }}
            />
            <g
              style={{
                opacity: 0.440001994371414,
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-198)',
                }}
              >
                <path
                  d="M315.5,290.27v1.07a23.78,23.78,0,0,1-23.77,23.78h-1"
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
                <path
                  d="M314.85,285.93a7.92,7.92,0,0,0-2-5.05"
                  style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                    strokeWidth: 3,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.300002992153168,
                mixBlendMode: 'multiply',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-199)',
                }}
              >
                <path
                  d="M727.81,688.58h118.3a22.24,22.24,0,0,0,0-44.48H840.9"
                  style={{
                    fill: 'none',
                    stroke: '#57758f',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.300002992153168,
                mixBlendMode: 'multiply',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-200)',
                }}
              >
                <path
                  d="M820.57,707.86H850a39.75,39.75,0,0,0,39.75-39.75"
                  style={{
                    fill: 'none',
                    stroke: '#57758f',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.300002992153168,
                mixBlendMode: 'multiply',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-201)',
                }}
              >
                <line
                  x1={744.85}
                  y1={708.92}
                  x2={715.51}
                  y2={708.92}
                  style={{
                    fill: 'none',
                    stroke: '#57758f',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }}
                />
              </g>
            </g>
            <g
              style={{
                opacity: 0.300002992153168,
                mixBlendMode: 'multiply',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-202)',
                }}
              >
                <path
                  d="M861.74,630.14h4.61a22.36,22.36,0,0,1,22.36,22.36"
                  style={{
                    fill: 'none',
                    stroke: '#57758f',
                    strokeMiterlimit: 10,
                    strokeWidth: 2,
                  }}
                />
              </g>
            </g>
          </g>
          <rect
            width={1635.11}
            height={781.14}
            style={{
              fill: 'none',
            }}
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgItalyHeroMobile;
