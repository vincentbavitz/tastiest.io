import * as React from 'react';

function SvgItalyHeroDesktop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1339.35 812.18"
      {...props}
    >
      <style>
        {
          '\r\n \r\n \r\n\r\n\r\n#stick {\r\n    animation-name: diamondMoves;\r\n    animation-duration: 8s;\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n    transform-origin: 30% 10%;\r\n}\r\n@keyframes diamondMoves {\r\n  \r\n    20%  { transform: rotateZ(-3deg); }\r\n   \r\n    40%  { transform: rotateZ(3deg); }\r\n  \r\n    60%  { transform: rotateY(-5deg); }\r\n   \r\n    80%  { transform: rotateY(5deg); }\r\n  \r\n}\r\n#arm2{\r\n    animation-name: adiamondMoves;\r\n    animation-duration: 8s;\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n    transform-origin: 20% 5%;\r\n}\r\n@keyframes adiamondMoves {\r\n    \r\n    20%  { transform: rotateZ(-3deg); }\r\n    \r\n    40%  { transform: rotateZ(3deg); }\r\n    \r\n    60%  { transform: rotateY(-5deg); }\r\n   \r\n    80%  { transform: rotateY(5deg); }\r\n    \r\n}\r\n#arm1{\r\n    animation-name: a2diamondMoves;\r\n    animation-duration: 2s;\r\n\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n    transform-origin: left bottom;\r\n}\r\n@keyframes a2diamondMoves {\r\n    \r\n    100%  { transform: rotateZ(8deg); }\r\n}\r\n#head1{\r\n    animation-name: h1diamondMoves;\r\n    animation-duration: 2s;\r\n\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n    transform-origin: bottom;\r\n}\r\n@keyframes h1diamondMoves {\r\n    \r\n    100%  { transform: rotateZ(5deg); }\r\n}\r\n#head2{\r\n    animation-name: h2diamondMoves;\r\n    animation-duration: 2s;\r\n\r\n    animation-iteration-count: infinite;\r\n    animation-direction: alternate;\r\n    transform-box: fill-box;\r\n    transform-origin: bottom;\r\n}\r\n@keyframes h2diamondMoves {\r\n    \r\n    100%  { transform: rotateZ(7deg); }\r\n}\r\n#light1, #light2  {\r\n    animation-name: cdiamondOpacity;\r\n    animation-duration:  5s;\r\n    animation-direction: alternate;\r\n    animation-iteration-count: infinite;\r\n    animation-timing-function: ease-in-out;\r\n    \r\n}\r\n\r\n@keyframes cdiamondOpacity {\r\n    0%   { opacity: .8; }\r\n    50%   { opacity: .3; }\r\n    60%   { opacity: .8; }\r\n    70%   { opacity: .3;}\r\n    100%   { opacity: .8; }\r\n\r\n}\r\n#c4{\r\n    animation: c4 55s linear infinite;\r\n    transform-origin: center;\r\n    \r\n    }\r\n    \r\n      @keyframes c4 { 0%{opacity: 0; transform: translateX(200px)}\r\n      50%{opacity: 0; transform: translateX(200px)}\r\n      52%{opacity: 0;}\r\n      54%{opacity: 1;}\r\n      \r\n      98%{opacity: 1;}\r\n      100%{opacity: 0; transform: translateX(-1090px)}\r\n      }\r\n#c3{\r\n        animation: c3 50s linear infinite;\r\n        transform-origin: center;\r\n                \r\n    }\r\n        \r\n    @keyframes c3 { 0%{opacity: 0; transform: translateX(400px)}\r\n    25%{opacity: 0; transform: translateX(400px)}\r\n    27%{opacity: 0;}\r\n    29%{opacity: 1;}\r\n    \r\n    98%{opacity: 1;}\r\n    100%{opacity: 0; transform: translateX(-755px)}\r\n    }\r\n    #c2{\r\n    animation: c2 40s linear infinite;\r\n    transform-origin: center;\r\n            \r\n    }\r\n            \r\n      @keyframes c2 { 0%{opacity: 0; transform: translateX(480px)}\r\n      15%{opacity: 0; transform: translateX(480px)}\r\n      17%{opacity: 0;}\r\n      19%{opacity: 1;}\r\n      \r\n      98%{opacity: 1;}\r\n      100%{opacity: 0; transform: translateX(-850px)}\r\n      }\r\n    #c1{\r\n        animation: c1 40s linear infinite;\r\n        transform-origin: center;\r\n        \r\n    }\r\n        \r\n    @keyframes c1 { 0%{opacity: 0; transform: translateX(800px)}\r\n    2%{opacity: 0;}\r\n    4%{opacity: 1;}\r\n    \r\n    98%{opacity: 1;}\r\n    100%{opacity: 0; transform: translateX(-550px)}\r\n    }\r\n    #bot,#g1,#g2{\r\n        animation-name: bot;\r\n        animation-duration: 2s;\r\n    \r\n        animation-iteration-count: infinite;\r\n        animation-direction: alternate;\r\n        animation-timing-function: linear;\r\n        transform-box: fill-box;\r\n        transform-origin: bottom;\r\n    }\r\n    @keyframes bot {\r\n        \r\n        100%  { transform: translateX(10px); }\r\n    }\r\n    #hand2{\r\n        animation-name: h2;\r\n        animation-duration: 2s;\r\n    \r\n        animation-iteration-count: infinite;\r\n        animation-direction: alternate;\r\n        animation-timing-function: linear;\r\n        transform-box: fill-box;\r\n        transform-origin: bottom;\r\n    }\r\n    @keyframes h2 {\r\n        \r\n        100%  { transform: rotateZ(-7deg); }\r\n    }\r\n    #leaf1,#leaf2,#leaf3{\r\n        animation-name: h2;\r\n        animation-duration: 3s;\r\n    \r\n        animation-iteration-count: infinite;\r\n        animation-timing-function: linear;\r\n        animation-direction: alternate;\r\n        transform-box: fill-box;\r\n        transform-origin: bottom;\r\n    }\r\n    @keyframes h2 {\r\n        \r\n        50%  { transform: translateX(.5px) skew(-5deg); }\r\n        100%  { transform: translateX(.5px) skew(5deg); }\r\n    }\r\n    #leaf5,#leaf4{\r\n        animation-name: h3;\r\n        animation-duration: 3s;\r\n    \r\n        animation-iteration-count: infinite;\r\n        animation-timing-function: linear;\r\n        animation-direction: alternate;\r\n        transform-box: fill-box;\r\n        transform-origin: bottom;\r\n    }\r\n    @keyframes h3 {\r\n        \r\n        50%  { transform: translateX(.5px) skew(-5deg); }\r\n        100%  { transform: translateX(.5px) skew(5deg); }\r\n    }\r\n    #aa,#aa-2{\r\n        animation: c 5s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes c{\r\n    \r\n        0%{ opacity: 0; transform: translateY(0px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        20%{opacity: 1;}\r\n        90%{ opacity: 0; transform: translateY(-17px);}\r\n        100%{ opacity: 0; transform: translateY(-17px);}\r\n        \r\n    }\r\n    #bb,#bb-2{\r\n        animation: b 6s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes b{\r\n    \r\n        0%{ opacity: 0; transform: translateY(.5px);}\r\n        10%{ opacity: 0; transform: translateY(.5px);}\r\n        20%{ opacity: 1; transform: translateY(0px);}\r\n       \r\n        80%{ opacity: 1; transform: translateY(-25px);}\r\n        90%{ opacity: 0; transform: translateY(-25px);}\r\n        100%{ opacity: 0; transform: translateY(-25px);}\r\n        \r\n    }\r\n    #cc,#cc-2{\r\n        animation: c 7s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes c{\r\n    \r\n        0%{ opacity: 0; transform: translateY(1px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        20%{ opacity: 1; transform: translateY(0px);}\r\n        70%{ opacity: 1; transform: translateY(-20px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-20px);}\r\n        \r\n    }\r\n    #dd,#dd-2{\r\n        animation: d 8s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes d{\r\n    \r\n        0%{ opacity: 0; transform: translateY(1.5px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        25%{ opacity: 1; transform: translateY(0px);}\r\n       \r\n        70%{ opacity: 1; transform: translateY(-11px);}\r\n        90%{ opacity: 0; transform: translateY(-11px);}\r\n        100%{ opacity: 0; transform: translateY(-11px);}\r\n        \r\n    }\r\n    #ee,#ee-2{\r\n        animation: e 9s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes e{\r\n    \r\n        0%{ opacity: 0; transform: translateY(1.8px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        30%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-17px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-17x);}\r\n        \r\n    }\r\n    #ff,#ff-2{\r\n        animation: f 10s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes f{\r\n    \r\n        0%{ opacity: 0; transform: translateY(2px);}\r\n        15%{ opacity: 0; transform: translateY(0px);}\r\n        35%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-25px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-25px);}\r\n        \r\n    }\r\n    #gg,#gg-2{\r\n        animation: g 11s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes g{\r\n    \r\n        0%{ opacity: 0; transform: translateY(2.2px);}\r\n        20%{ opacity: 0; transform: translateY(0px);}\r\n        40%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-23px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-23px);}\r\n        \r\n    }\r\n    #hh,#hh-2{\r\n        animation: h 12s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes h{\r\n    \r\n        0%{ opacity: 0; transform: translateY(2.5px);}\r\n        25%{ opacity: 0; transform: translateY(0px);}\r\n        45%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-20px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-20px);}\r\n        \r\n    }\r\n    #ii,#ii-2{\r\n        animation: i 13s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes i{\r\n    \r\n        0%{ opacity: 0; transform: translateY(3px);}\r\n        30%{ opacity: 0; transform: translateY(0px);}\r\n        \r\n        50%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-20px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n\r\n        100%{ opacity: 0; transform: translateY(-20px);}\r\n        \r\n    }\r\n\r\n      #ta1 {\r\n        animation: c 5s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes c{\r\n    \r\n        0%{ opacity: 0; transform: translateY(0px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        20%{opacity: 1;}\r\n        90%{ opacity: 0; transform: translateY(-17px);}\r\n        100%{ opacity: 0; transform: translateY(-17px);}\r\n        \r\n    }\r\n    #tb1{\r\n        animation: b 6s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes b{\r\n    \r\n        0%{ opacity: 0; transform: translateY(.5px);}\r\n        10%{ opacity: 0; transform: translateY(.5px);}\r\n        20%{ opacity: 1; transform: translateY(0px);}\r\n       \r\n        80%{ opacity: 1; transform: translateY(-25px);}\r\n        90%{ opacity: 0; transform: translateY(-25px);}\r\n        100%{ opacity: 0; transform: translateY(-25px);}\r\n        \r\n    }\r\n    #tc1{\r\n        animation: c 7s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes c{\r\n    \r\n        0%{ opacity: 0; transform: translateY(1px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        20%{ opacity: 1; transform: translateY(0px);}\r\n        70%{ opacity: 1; transform: translateY(-20px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-20px);}\r\n        \r\n    }\r\n    #td1{\r\n        animation: d 8s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes d{\r\n    \r\n        0%{ opacity: 0; transform: translateY(1.5px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        25%{ opacity: 1; transform: translateY(0px);}\r\n       \r\n        70%{ opacity: 1; transform: translateY(-11px);}\r\n        90%{ opacity: 0; transform: translateY(-11px);}\r\n        100%{ opacity: 0; transform: translateY(-11px);}\r\n        \r\n    }\r\n    #te1{\r\n        animation: e 9s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes e{\r\n    \r\n        0%{ opacity: 0; transform: translateY(1.8px);}\r\n        10%{ opacity: 0; transform: translateY(0px);}\r\n        30%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-17px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-17x);}\r\n        \r\n    }\r\n    #tf1{\r\n        animation: f 10s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes f{\r\n    \r\n        0%{ opacity: 0; transform: translateY(2px);}\r\n        15%{ opacity: 0; transform: translateY(0px);}\r\n        35%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-25px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-25px);}\r\n        \r\n    }\r\n    #tg1{\r\n        animation: g 11s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes g{\r\n    \r\n        0%{ opacity: 0; transform: translateY(2.2px);}\r\n        20%{ opacity: 0; transform: translateY(0px);}\r\n        40%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-23px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-23px);}\r\n        \r\n    }\r\n    #th1{\r\n        animation: h 12s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes h{\r\n    \r\n        0%{ opacity: 0; transform: translateY(2.5px);}\r\n        25%{ opacity: 0; transform: translateY(0px);}\r\n        45%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-20px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n        100%{ opacity: 0; transform: translateY(-20px);}\r\n        \r\n    }\r\n    #ti1{\r\n        animation: i 13s linear infinite;\r\n        transform-origin: center;\r\n        animation-direction: initial;\r\n        transform-box: fill-box;\r\n    }\r\n    @keyframes i{\r\n    \r\n        0%{ opacity: 0; transform: translateY(3px);}\r\n        30%{ opacity: 0; transform: translateY(0px);}\r\n        \r\n        50%{ opacity: 1; transform: translateY(0px);}\r\n        80%{ opacity: 1; transform: translateY(-20px);}\r\n        90%{ opacity: 0; transform: translateY(-20px);}\r\n\r\n        100%{ opacity: 0; transform: translateY(-20px);}\r\n        \r\n    }\r\n \r\n '
        }
      </style>
      <defs>
        <linearGradient
          id="linear-gradient"
          x1={1175.88}
          y1={416.47}
          x2={1081.77}
          y2={416.47}
          gradientTransform="matrix(1, 0, 0, -1, 0, 812.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.12} stopColor="#fffcf3" />
          <stop offset={0.59} stopColor="#ffdb94" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1={1127.24}
          y1={416.46}
          x2={1081.77}
          y2={416.46}
          gradientTransform="matrix(1, 0, 0, -1, 0, 812.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#fff" />
          <stop offset={0.11} stopColor="#fffdf9" />
          <stop offset={0.26} stopColor="#fff7e6" />
          <stop offset={0.43} stopColor="#ffedc9" />
          <stop offset={0.62} stopColor="#ffdfa0" />
          <stop offset={0.67} stopColor="#ffdb94" />
        </linearGradient>
        <pattern
          id="Plaid_3_Color"
          data-name="Plaid 3 Color"
          width={72}
          height={72}
          patternTransform="matrix(1, 0, 0, -1, -31.44, 555.61)"
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
          </g>
          <g>
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
          </g>
          <g>
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
          </g>
          <g>
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
          </g>
          <g>
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
          </g>
          <g>
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
          </g>
          <g>
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
          </g>
          <g>
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
          </g>
          <g>
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
          id="mask"
          x={1042.9}
          y={527.06}
          width={66.05}
          height={38.69}
          maskUnits="userSpaceOnUse"
        >
          <g transform="translate(0 0.01)">
            <use transform="translate(1042 526.17)" xlinkHref="#image" />
          </g>
        </mask>
        <image
          id="image"
          width={67}
          height={40}
          xlinkHref="data:image/png;base64,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"
        />
        <mask
          id="mask-2"
          x={1042.9}
          y={527.06}
          width={66.05}
          height={38.69}
          maskUnits="userSpaceOnUse"
        >
          <g transform="translate(0 0.01)">
            <use transform="translate(1042 526.17)" xlinkHref="#image" />
          </g>
        </mask>
        <linearGradient
          id="linear-gradient-3"
          x1={71.81}
          y1={81.31}
          x2={1339.35}
          y2={81.31}
          gradientTransform="matrix(1, 0, 0, -1, 0, 812.01)"
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
          x1={841.2}
          y1={227.79}
          x2={902.8}
          y2={242.01}
          gradientTransform="matrix(1, 0, 0, -1, -1.44, 930.39)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.01} stopColor="#fdfbf9" stopOpacity={0.1} />
          <stop offset={1} stopColor="#bc7235" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1={51.79}
          y1={156.18}
          x2={592.39}
          y2={156.18}
          gradientTransform="matrix(1, 0, 0, -0.52, -1.44, 821.68)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#fff" />
          <stop offset={0.12} stopColor="#fffcf3" />
          <stop offset={0.59} stopColor="#ffcc2b" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1={1.44}
          y1={1.25}
          x2={592.38}
          y2={1.25}
          gradientTransform="translate(-1.44 658.21) scale(1 0.67)"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-7"
          x1={20}
          y1={-46.13}
          x2={592.58}
          y2={-46.13}
          gradientTransform="translate(-1.44 658.21) scale(1 0.67)"
          xlinkHref="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-8"
          x1={20}
          y1={557.44}
          x2={592.58}
          y2={557.44}
          gradientTransform="matrix(1, 0, 0, -0.09, -1.44, 691.57)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.12} stopColor="#fffcf3" />
          <stop offset={0.59} stopColor="#a67c52" />
        </linearGradient>
        <clipPath id="clip-path" transform="translate(0 0.01)">
          <circle
            cx={535.9}
            cy={354.41}
            r={26.5}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-2" transform="translate(0 0.01)">
          <rect
            x={504.4}
            y={322.91}
            width={63}
            height={63}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-3" transform="translate(0 0.01)">
          <circle
            cx={98.27}
            cy={354.41}
            r={26.5}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <clipPath id="clip-path-4" transform="translate(0 0.01)">
          <rect
            x={66.77}
            y={322.91}
            width={63}
            height={63}
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-9"
          x1={-1634.67}
          y1={12.75}
          x2={-1105.05}
          y2={12.75}
          gradientTransform="matrix(-0.31, 0, 0, 0.67, 813.69, 658.22)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.17} stopColor="#fffcf3" />
          <stop offset={0.36} stopColor="#f9c3a0" />
          <stop offset={0.62} stopColor="#f1732b" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-10"
          x1={-1634.67}
          y1={155.92}
          x2={-1105.05}
          y2={155.92}
          gradientTransform="translate(813.69 833.7) rotate(180) scale(0.31 0.62)"
          xlinkHref="#linear-gradient-9"
        />
        <linearGradient
          id="linear-gradient-11"
          x1={-1634.67}
          y1={2334.75}
          x2={-1105.05}
          y2={2334.75}
          gradientTransform="translate(813.69 229.83) rotate(180) scale(0.31 0.02)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.12} stopColor="#fffcf3" />
          <stop offset={0.59} stopColor="#fc6" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-12"
          x1={1295.09}
          y1={387.53}
          x2={1182.28}
          y2={387.53}
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-13"
          x1={1235.04}
          y1={387.5}
          x2={1182.28}
          y2={387.5}
          xlinkHref="#linear-gradient-2"
        />
        <image
          id="image-2"
          width={67}
          height={40}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAoCAYAAACl+UfqAAAACXBIWXMAAAsSAAALEgHS3X78AAABMElEQVRoQ+2a0Q6DMAhFb5f9/y93D1sXrFBoTeMGnFdF4fTWJbpSa0Xy5qmdcDN0pYpynIOrEdktQ2pWa5Kr0wbnaDXa/QDsk6E1Lq24VrdKhUHIjIy+0ZXYcqzUbOGhnfDBEtufGUpA7W+UDLUYtnP+BikZroa0Yt0mXhguMifDeyoqhBmjJYNyEhJZBtAJ6WV43yIc320TPRmUSmVETMWBTAahyQifCiCTcSBlEFIGIWUQUgYhZRBSBiFlEJoM9c1xBGgyogsp/TYJLSSfGQRORsR0FGDui5pHDgsfeZucdkBUGeyjQJLh+bkhzhYtGcNFHsnwlg51Hi0ZBYaLMKzU7MI8g/WntYB/aTy6STt258tmk4SGVQYweWGCRcqOvzJN9zsj4yrW5q6Ksd7nxAsFGyhfQIulugAAAABJRU5ErkJggg=="
        />
      </defs>
      <title>{'Italy-desktop'}</title>
      <g>
        <g id="c1">
          <path
            d="M619.08,176.4a23.56,23.56,0,0,0-12.39,3.52,33.12,33.12,0,0,0-30.48-20.18c-1.06,0-2.11.06-3.14.16a40.71,40.71,0,0,0-75.51,9.5,24.63,24.63,0,0,0-28.13,24.51,25.12,25.12,0,0,0,.31,3.77h173A23.74,23.74,0,0,0,619.08,176.4Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#fcf3e0',
              opacity: 0.8700000047683716,
              isolation: 'isolate',
            }}
          />
        </g>
        <g id="c2">
          <path
            d="M958.27,38.08a23.67,23.67,0,0,0-12.39,3.51A33.1,33.1,0,0,0,915.4,21.4c-1.06,0-2.11.06-3.14.16a40.75,40.75,0,0,0-75.54,9.51,25.35,25.35,0,0,0-3.37-.25,24.78,24.78,0,0,0-24.76,24.76A24.46,24.46,0,0,0,809,59.4H981.89A23.74,23.74,0,0,0,958.27,38.08Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#fcf3e0',
              opacity: 0.8700000047683716,
              isolation: 'isolate',
            }}
          />
        </g>
        <g id="c4">
          <path
            d="M1055.63,179.19a20.19,20.19,0,0,1,10.59,3,28.31,28.31,0,0,1,26.06-17.25c.91,0,1.81.05,2.69.13a34.81,34.81,0,0,1,64.59,8.14,21,21,0,0,1,23.84,17.71,21.31,21.31,0,0,1,.22,3.29,20.39,20.39,0,0,1-.28,3.22H1035.43A20.3,20.3,0,0,1,1055.63,179.19Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#fcf3e0',
              opacity: 0.8700000047683716,
              isolation: 'isolate',
            }}
          />
        </g>
        <g id="c3">
          <path
            d="M776.63,244.26a19.16,19.16,0,0,1,10.07,2.86,26.91,26.91,0,0,1,24.77-16.4c.86,0,1.72.05,2.56.13a33.09,33.09,0,0,1,61.36,7.73,20.78,20.78,0,0,1,2.73-.21,20.14,20.14,0,0,1,20.14,20.13,21.08,21.08,0,0,1-.26,3.07H757.43A19.31,19.31,0,0,1,776.63,244.26Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#fcf3e0',
              opacity: 0.8700000047683716,
              isolation: 'isolate',
            }}
          />
        </g>
        <g
          style={{
            opacity: 0.44999998807907104,
          }}
        >
          <g>
            <g>
              <line
                x1={740.72}
                y1={388.17}
                x2={740.72}
                y2={314.47}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={751.98}
                y1={388.17}
                x2={751.98}
                y2={314.47}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
            </g>
            <g>
              <line
                x1={835.41}
                y1={388.17}
                x2={835.41}
                y2={314.47}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={846.67}
                y1={388.17}
                x2={846.67}
                y2={314.47}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
            </g>
            <g>
              <line
                x1={1016.24}
                y1={418.71}
                x2={1016.24}
                y2={345.01}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={1027.5}
                y1={424.51}
                x2={1027.5}
                y2={350.81}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
            </g>
            <g>
              <line
                x1={587.35}
                y1={422.29}
                x2={587.35}
                y2={348.59}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
              <line
                x1={576.09}
                y1={428.09}
                x2={576.09}
                y2={354.39}
                style={{
                  fill: 'none',
                  stroke: '#101d23',
                  strokeMiterlimit: 10,
                  strokeWidth: 3,
                }}
              />
            </g>
            <line
              x1={660.2}
              y1={388.34}
              x2={660.2}
              y2={314.64}
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <line
              x1={961.14}
              y1={393.97}
              x2={961.14}
              y2={320.27}
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <line
              x1={935.55}
              y1={388.34}
              x2={935.55}
              y2={314.64}
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <line
              x1={634.44}
              y1={393.8}
              x2={634.44}
              y2={320.1}
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <polyline
              points="1064.96 366.94 949.92 315.24 642.63 315.24 534.85 378.33"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <polyline
              points="1064.96 381.78 949.92 330.08 642.63 330.08 534.85 393.17"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <polyline
              points="1064.79 428.86 949.75 377.17 642.46 377.17 534.68 440.25"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <g>
              <rect
                x={642.97}
                y={307.88}
                width={8.57}
                height={5.76}
                style={{
                  fill: '#f9d069',
                }}
              />
              <rect
                x={640.79}
                y={311.66}
                width={12.8}
                height={78.31}
                style={{
                  fill: '#ffe499',
                }}
              />
              <circle
                cx={647.35}
                cy={302.86}
                r={7.33}
                style={{
                  fill: '#ffe499',
                }}
              />
            </g>
            <g>
              <rect
                x={941.6}
                y={307.88}
                width={8.57}
                height={5.76}
                style={{
                  fill: '#f9d069',
                }}
              />
              <rect
                x={939.43}
                y={311.66}
                width={12.8}
                height={78.31}
                style={{
                  fill: '#ffe499',
                }}
              />
              <circle
                cx={945.99}
                cy={302.86}
                r={7.33}
                style={{
                  fill: '#ffe499',
                }}
              />
            </g>
            <path
              d="M1065,442.16,956.3,390.46H642.62L534.85,453.55,528.06,500h13c2.16-46.09,118-83.24,260.63-83.24S1060.16,453.9,1062.33,500H1065Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffb255',
              }}
            />
            <g>
              <line
                x1={652.05}
                y1={405.4}
                x2={640.71}
                y2={405.4}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={642.84}
                y1={429.2}
                x2={631.5}
                y2={429.2}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={620.06}
                y1={429.2}
                x2={608.73}
                y2={429.2}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={704.76}
                y1={415.13}
                x2={693.43}
                y2={415.13}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={713.98}
                y1={407.45}
                x2={702.64}
                y2={407.45}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={726.77}
                y1={415.13}
                x2={715.44}
                y2={415.13}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={753.9}
                y1={405.91}
                x2={742.56}
                y2={405.91}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={763.11}
                y1={398.24}
                x2={751.77}
                y2={398.24}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={775.9}
                y1={405.91}
                x2={764.57}
                y2={405.91}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={1010.31}
                y1={421.27}
                x2={998.97}
                y2={421.27}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={1002.46}
                y1={428.43}
                x2={991.13}
                y2={428.43}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={990.26}
                y1={421.61}
                x2={978.93}
                y2={421.61}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={1019.61}
                y1={445.15}
                x2={1008.27}
                y2={445.15}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={955.8}
                y1={420.76}
                x2={944.47}
                y2={420.76}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={854.89}
                y1={398.79}
                x2={843.56}
                y2={398.79}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={870.25}
                y1={405.06}
                x2={858.91}
                y2={405.06}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={854.64}
                y1={412.74}
                x2={843.3}
                y2={412.74}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={631.4}
                y1={405.4}
                x2={620.07}
                y2={405.4}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
              <line
                x1={642.84}
                y1={414.44}
                x2={631.5}
                y2={414.44}
                style={{
                  fill: 'none',
                  stroke: '#ff5e39',
                  strokeLinecap: 'round',
                  strokeMiterlimit: 10,
                  strokeWidth: 5,
                  opacity: 0.3100000023841858,
                  isolation: 'isolate',
                }}
              />
            </g>
            <polyline
              points="1064.96 442.17 956.31 390.47 642.63 390.47 534.85 453.56"
              style={{
                fill: 'none',
                stroke: '#ffe499',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 11,
              }}
            />
            <path
              d="M541,500c2.16-46.09,118-83.24,260.63-83.24S1060.12,453.9,1062.29,500"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#ffe499',
                strokeMiterlimit: 10,
                strokeWidth: 11,
              }}
            />
          </g>
          <rect
            x={1046.24}
            y={245.44}
            width={141}
            height={410.1}
            style={{
              fill: '#fc6',
            }}
          />
          <rect
            x={1046.24}
            y={218.8}
            width={141}
            height={26.64}
            style={{
              fill: '#ffb255',
            }}
          />
          <g>
            <line
              x1={1051.54}
              y1={309.72}
              x2={1066.27}
              y2={309.72}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1060.63}
              y1={319.92}
              x2={1075.36}
              y2={319.92}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1114.95}
              y1={268.48}
              x2={1129.68}
              y2={268.48}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1124.04}
              y1={278.68}
              x2={1138.77}
              y2={278.68}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1096.1}
              y1={278.68}
              x2={1110.83}
              y2={278.68}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1054.42}
              y1={264.49}
              x2={1069.15}
              y2={264.49}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1079.25}
              y1={409.7}
              x2={1093.98}
              y2={409.7}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1079.25}
              y1={432.09}
              x2={1093.98}
              y2={432.09}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1052.43}
              y1={432.09}
              x2={1067.16}
              y2={432.09}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1058.41}
              y1={491.29}
              x2={1073.14}
              y2={491.29}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1085.24}
              y1={491.29}
              x2={1099.97}
              y2={491.29}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1070.39}
              y1={503.04}
              x2={1085.12}
              y2={503.04}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1057.75}
              y1={592.55}
              x2={1072.48}
              y2={592.55}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1084.57}
              y1={592.55}
              x2={1099.3}
              y2={592.55}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1102.86}
              y1={576.08}
              x2={1117.59}
              y2={576.08}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1071.6}
              y1={558.29}
              x2={1086.33}
              y2={558.29}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1069.72}
              y1={604.3}
              x2={1084.45}
              y2={604.3}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1125.59}
              y1={520.33}
              x2={1140.32}
              y2={520.33}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1113.17}
              y1={531.86}
              x2={1127.9}
              y2={531.86}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1049.88}
              y1={534.41}
              x2={1064.61}
              y2={534.41}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1129.25}
              y1={541.72}
              x2={1143.97}
              y2={541.72}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <g>
              <path
                d="M1045.72,527.2h7.52a3.5,3.5,0,0,0,0-7h-7.56Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#ffddb0',
                }}
              />
              <path
                d="M1045.69,518.61h2.24a3.5,3.5,0,0,0,0-7h-2.28Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#ffddb0',
                }}
              />
            </g>
            <line
              x1={1067.28}
              y1={420.79}
              x2={1082.01}
              y2={420.79}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1060.63}
              y1={298.63}
              x2={1075.36}
              y2={298.63}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
          </g>
          <g>
            <rect
              x={1073.29}
              y={297.39}
              width={116.03}
              height={194.54}
              style={{
                fill: '#fff',
              }}
            />
            <rect
              x={1081.77}
              y={309.29}
              width={94.11}
              height={172.49}
              style={{
                fill: 'url(#linear-gradient)',
              }}
            />
            <rect
              x={1081.77}
              y={309.29}
              width={45.47}
              height={172.52}
              style={{
                fill: 'url(#linear-gradient-2)',
              }}
            />
            <rect
              x={1081.77}
              y={309.29}
              width={3.46}
              height={172.54}
              style={{
                fill: '#ffe499',
              }}
            />
          </g>
        </g>
        <rect
          x={55.16}
          y={195.15}
          width={507.42}
          height={419.68}
          style={{
            fill: '#ffeec4',
          }}
        />
        <g id="g2">
          <path
            d="M953.79,459.4s-33.7,17.29-22,101.09"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#ff7d37',
              strokeMiterlimit: 10,
              strokeWidth: 12,
            }}
          />
          <rect
            x={941.49}
            y={424.97}
            width={57.2}
            height={5.87}
            style={{
              fill: '#fff',
            }}
          />
          <g id="head2">
            <path
              d="M943.74,287.4a4.75,4.75,0,0,1,4.26,4.8v6.58h0V314.4a3.92,3.92,0,0,0,7.84,0V292.06a4.62,4.62,0,0,1,4.63-4.59h0a4.62,4.62,0,0,1,4.59,4.64V314.3a3.92,3.92,0,0,0,7.81.61,3.57,3.57,0,0,0,0-.47V292.29a4.71,4.71,0,0,1,3.91-4.67,4.62,4.62,0,0,1,5.27,3.87,5.52,5.52,0,0,1,0,.71v22.2a4,4,0,0,0,3.28,4,3.93,3.93,0,0,0,4.51-3.25,4.18,4.18,0,0,0,.05-.61V292.4a4.71,4.71,0,0,1,3.91-4.68,4.62,4.62,0,0,1,5.27,3.84,6.13,6.13,0,0,1,.05.74v22.36l-.12,25h0v3.79a24.57,24.57,0,0,1-24.69,24.47h0l-11.3-.06a24.57,24.57,0,0,1-24.54-24.62v-4l.12-25v-3.79l.06-11.77V292a4.62,4.62,0,0,1,4.69-4.56Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ff7d37',
              }}
            />
            <rect
              x={962.4}
              y={357.37}
              width={12.53}
              height={22.01}
              transform="translate(595.73 1335.3) rotate(-89.73)"
              style={{
                fill: '#ff7d37',
              }}
            />
            <g>
              <path
                d="M951.26,334.34a3.81,3.81,0,0,1,1.17-2.47,3.89,3.89,0,0,1,2.47-1.09h.57a3.81,3.81,0,0,1,2.47,1.17,3.89,3.89,0,0,1,1.09,2.47,5.42,5.42,0,0,1,0,.57,1.65,1.65,0,1,0,3.29.27h0a7.2,7.2,0,0,0-14.34-1.2,1.65,1.65,0,1,0,3.29.27Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#681800',
                }}
              />
              <path
                d="M974,336.26a3.84,3.84,0,0,1,1.17-2.48,3.89,3.89,0,0,1,2.47-1.09h.57a3.81,3.81,0,0,1,2.47,1.17,3.89,3.89,0,0,1,1.09,2.47,5.42,5.42,0,0,1,0,.57,1.65,1.65,0,1,0,3.29.27,8.34,8.34,0,0,0,0-1,7.19,7.19,0,0,0-14.35-.16,1.65,1.65,0,1,0,3.29.28Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#681800',
                }}
              />
              <path
                d="M951.43,344.87a14.74,14.74,0,0,0,27.13,2.21Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#681800',
                }}
              />
              <path
                d="M963.26,350.4l11.91,1a14.74,14.74,0,0,1-16.09,2.25A3.89,3.89,0,0,1,963.26,350.4Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#fc4c01',
                }}
              />
              <path
                d="M981.22,351a2.24,2.24,0,0,1-1.2-1.84v-.33h0a2.18,2.18,0,0,1,.48-1.21,2.34,2.34,0,0,1,1-.73,1.65,1.65,0,1,0-.71-3.22,1.4,1.4,0,0,0-.29.09,5.51,5.51,0,0,0-3.79,4.8h0q0,.4,0,.81a5.51,5.51,0,0,0,3,4.57,1.65,1.65,0,0,0,1.65-2.86l-.14-.07Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#681800',
                }}
              />
            </g>
            <path
              d="M968.85,368a43,43,0,0,1-9-.13,14.84,14.84,0,0,1-2.29-.5.23.23,0,0,1-.15-.29h0a.23.23,0,0,1,.29-.15h0a14.08,14.08,0,0,0,2.23.49,35.48,35.48,0,0,0,5.92.29c.86,0,1.6-.06,2.12-.09h.82a.23.23,0,0,1,.26.2h0a.23.23,0,0,1-.21.25h0Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#681800',
              }}
            />
          </g>
          <path
            d="M953.27,374.19H982.6a16.09,16.09,0,0,1,16.09,16.09h0v60.4h-57.2V386a11.77,11.77,0,0,1,11.78-11.78h0Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M979.56,371l-26.39.67,8.76,13.52,21.73-11h0a4.18,4.18,0,0,0-4-3.21Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#e51f05',
            }}
          />
          <polyline
            points="984.16 454.17 982.42 566.97 971.59 566.73 973.34 453.94"
            style={{
              fill: '#ff7d37',
            }}
          />
          <path
            d="M941.8,442.86l56.88.54v11.1c-.2,8.33-6.45,15.3-13.6,15.43l-31.26.58c-9.87.07-12.79-6.51-12.59-14.84Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#193441',
            }}
          />
          <rect
            x={941.49}
            y={439.06}
            width={57.2}
            height={5.87}
            style={{
              fill: '#fff',
            }}
          />
          <rect
            x={941.49}
            y={412.79}
            width={57.2}
            height={5.87}
            style={{
              fill: '#fff',
            }}
          />
          <g id="hand2">
            <path
              d="M907,359.15c.25.08,4.41,6.81,13.39-.83"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#ff7d37',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <path
              d="M943.84,387.7s-21.61,18-40.06,8.66,2.08-39.77,2.08-39.77"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#ff7d37',
                strokeMiterlimit: 10,
                strokeWidth: 12,
              }}
            />
            <path
              d="M900.56,346.45s42.29-3.25,55,9.2c0,0-30.79,3.45-39.92,7.3C915.66,363,904.74,359.66,900.56,346.45Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#d88521',
              }}
            />
            <path
              d="M901.56,346.29s41.31-3.09,54.07,9.36c0,0-30.58,1.75-39.71,5.6C915.87,361.25,905.72,359.5,901.56,346.29Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffc866',
              }}
            />
            <path
              d="M905,346.1s37.81-2.9,50.57,9.55c0,0-26.73,1.64-37.54,4.91C918,360.56,909.22,359.31,905,346.1Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#fe4c00',
              }}
            />
            <g>
              <path
                d="M945.92,354.46c1.45-.13,3,.8,4.36,1.58,3.22-.26,5.3-.39,5.3-.39-9.59-9.36-33.36-10-44.55-9.81a3.72,3.72,0,0,1-1.25,2.64c-2.44,2.55.11,5.21,7.1,4.65s8.87.89,8.64,2.33c-.11.74-1.37,2.34-2.07,3.82,5.94-1.16,13.53-2,19.86-2.64C943.77,355,944.23,354.62,945.92,354.46Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#fff1d3',
                }}
              />
              <ellipse
                cx={914.43}
                cy={347.48}
                rx={1.04}
                ry={0.54}
                style={{
                  fill: '#efd4a3',
                }}
              />
              <ellipse
                cx={916.01}
                cy={348.58}
                rx={0.58}
                ry={0.23}
                style={{
                  fill: '#efd4a3',
                }}
              />
              <ellipse
                cx={919.55}
                cy={346.65}
                rx={0.53}
                ry={0.17}
                style={{
                  fill: '#efd4a3',
                }}
              />
              <ellipse
                cx={928.77}
                cy={356.29}
                rx={1.25}
                ry={0.54}
                style={{
                  fill: '#efd4a3',
                }}
              />
              <ellipse
                cx={932.1}
                cy={354.71}
                rx={0.67}
                ry={0.46}
                style={{
                  fill: '#efd4a3',
                }}
              />
            </g>
            <path
              d="M920.56,356.58l-15.11,2.73-5.88-2-.07-1.87a5.93,5.93,0,0,1,5.71-6.12l12-.42a4.83,4.83,0,0,1,5,4.65v1.21A1.75,1.75,0,0,1,920.56,356.58Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ff7d37',
              }}
            />
            <path
              d="M931.05,348.57a7.14,7.14,0,0,1-3.84,2.49c-2.3.44-4.31,0-4.49-.9s1.54-2,3.85-2.49A7.08,7.08,0,0,1,931.05,348.57Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#46b711',
              }}
            />
            <path
              d="M940.86,355.59c-2.08-1.07-4.12-1.24-4.56-.4-.26.52.14,1.3,1,2.08,1.73-.2,3.45-.38,5.09-.54A5.71,5.71,0,0,0,940.86,355.59Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#46b711',
              }}
            />
            <ellipse
              cx={917.36}
              cy={359.11}
              rx={0.46}
              ry={0.79}
              transform="matrix(0.79, -0.62, 0.62, 0.79, -26.67, 640.75)"
              style={{
                fill: '#db2b03',
              }}
            />
            <ellipse
              cx={918.79}
              cy={359.22}
              rx={0.25}
              ry={0.43}
              transform="matrix(0.79, -0.62, 0.62, 0.79, -26.43, 641.66)"
              style={{
                fill: '#db2b03',
              }}
            />
          </g>
          <rect
            x={930.12}
            y={379.12}
            width={24.86}
            height={20.07}
            transform="translate(-75.87 440.85) rotate(-25.34)"
            style={{
              fill: '#101d23',
            }}
          />
          <rect
            x={969.09}
            y={456.79}
            width={17.29}
            height={101.09}
            style={{
              fill: '#193441',
            }}
          />
          <path
            d="M953.79,459.4s-30.2,15.49-23.45,88.23"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#193441',
              strokeMiterlimit: 10,
              strokeWidth: 18,
            }}
          />
          <polygon
            points="998.69 404.57 941.49 404.57 941.49 398.7 991.23 398.7 998.69 402.36 998.69 404.57"
            style={{
              fill: '#fff',
            }}
          />
          <g>
            <path
              d="M975,563.32h2.9a9,9,0,0,1,9.05,9V573H966v-.61a9,9,0,0,1,9-9.07Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#193441',
              }}
            />
            <path
              d="M914,570.4l25.85-.16-2.16-11.56h-12.8A10.9,10.9,0,0,0,914,569.58Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#193441',
              }}
            />
          </g>
        </g>
        <g id="bot">
          <rect
            x={1002.28}
            y={553.57}
            width={169.99}
            height={45.43}
            style={{
              fill: '#ffe499',
            }}
          />
          <g>
            <polygon
              points="1010.44 553.47 1111.09 629.37 1213.07 553.11 1010.44 553.47"
              style={{
                fill: '#fff',
              }}
            />
            <polygon
              points="1010.44 553.47 1111.09 629.37 1213.07 553.11 1010.44 553.47"
              style={{
                fill: 'url(#Plaid_3_Color)',
              }}
            />
          </g>
          <rect
            x={769.89}
            y={488.59}
            width={54.87}
            height={6.32}
            transform="translate(-114.23 275.87) rotate(-18.34)"
            style={{
              fill: '#ffd505',
            }}
          />
          <rect
            x={776.41}
            y={508.19}
            width={33.84}
            height={6.32}
            transform="translate(-120.6 275.61) rotate(-18.34)"
            style={{
              fill: '#ffd505',
            }}
          />
          <rect
            x={781.07}
            y={522.17}
            width={33.84}
            height={6.32}
            transform="translate(-124.76 277.79) rotate(-18.34)"
            style={{
              fill: '#ffd505',
            }}
          />
          <rect
            x={786.61}
            y={537.9}
            width={33.84}
            height={6.32}
            transform="translate(-129.43 280.33) rotate(-18.34)"
            style={{
              fill: '#ffd505',
            }}
          />
          <rect
            x={791.72}
            y={553.42}
            width={33.84}
            height={6.32}
            transform="translate(-134.06 282.72) rotate(-18.34)"
            style={{
              fill: '#ffd505',
            }}
          />
          <rect
            x={797.25}
            y={568.94}
            width={33.84}
            height={6.32}
            transform="translate(-138.66 285.25) rotate(-18.34)"
            style={{
              fill: '#ffd505',
            }}
          />
          <path
            d="M807.92,499.9l-10.36-28.59a45.36,45.36,0,0,0-36-29.49l-6-.9L768.9,492.4S774.22,456.89,807.92,499.9Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#ffd505',
            }}
          />
          <path
            d="M800.1,486S810.46,571.72,853,614.62s100.43,47.89,138.34,50.55Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#ffd505',
            }}
          />
          <path
            d="M1169.56,675.27c-63.3-1-105.32-.13-178.14-10.1-35.35-4.84-77-11.64-105.42-30-25.22-16.36-41.68-35.92-54.54-59.42s-20-53-28.24-78.71c-.81-2.52-2.1-7.32-3.07-11a1.06,1.06,0,0,1,1.84-.94c23.36,28.46,76.11,66.51,110.61,76.58,36.13,10.54,74.18,12.07,111.79,13.53l184.79,7.19Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#101d23',
            }}
          />
          <rect
            x={1027.95}
            y={549.79}
            width={89.12}
            height={17.96}
            rx={5.05}
            style={{
              fill: '#874417',
            }}
          />
          <rect
            x={1027.95}
            y={547.62}
            width={89.12}
            height={17.96}
            rx={5.05}
            style={{
              fill: '#a85e27',
            }}
          />
          <path
            d="M802.38,490.4l4.5,5c1.55,1.63,3.14,3.21,4.71,4.82s3.24,3.11,4.85,4.67c.82.77,1.61,1.56,2.45,2.31l2.52,2.23c3.32,3,6.81,5.85,10.25,8.73s7,5.61,10.65,8.24,7.23,5.31,10.89,7.9c1.83,1.29,3.72,2.51,5.57,3.77l2.8,1.87,2.84,1.8a267.13,267.13,0,0,0,23.29,13.37,151.59,151.59,0,0,0,24.66,10.29,251.06,251.06,0,0,0,26.1,6.17,435.13,435.13,0,0,0,53.41,5.91c17.92,1.1,35.9,1.69,53.86,2.47s35.94,1.43,53.91,2.31l53.89,2.51c18,1,35.92,1.79,53.88,2.83-18-.36-36-.91-53.94-1.36l-53.91-1.68c-18-.51-36-1.25-53.92-1.88s-36-1.18-53.94-2.21A434.81,434.81,0,0,1,938,574.24a253.27,253.27,0,0,1-26.35-6.36c-2.15-.74-4.33-1.4-6.45-2.21l-6.31-2.55-6.16-2.87c-2.06-.94-4-2.06-6-3.08a269.9,269.9,0,0,1-23.27-13.83c-7.52-5-14.88-10.18-22-15.76-3.58-2.73-7-5.67-10.48-8.53s-6.81-5.9-10.06-9A185.87,185.87,0,0,1,802.38,490.4Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#ffd505',
            }}
          />
          <path
            d="M1042.75,541.63h60a11.3,11.3,0,0,1,11.31,11.3h0a11.31,11.31,0,0,1-11.31,11.31h-60a11.31,11.31,0,0,1-11.31-11.31h0A11.3,11.3,0,0,1,1042.75,541.63Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#d88521',
            }}
          />
          <path
            d="M802.82,485.3a203.77,203.77,0,0,0,18.94,19.15c3.31,3,6.79,5.88,10.22,8.78s7,5.63,10.62,8.29,7.23,5.32,10.88,7.93c1.83,1.3,3.72,2.52,5.57,3.78l2.79,1.89,2.84,1.8A261.74,261.74,0,0,0,888,550.4a149.35,149.35,0,0,0,24.71,10.34,246.9,246.9,0,0,0,26.14,6.2,432.38,432.38,0,0,0,53.47,6c17.92,1.09,35.9,1.66,53.87,2.43s35.94,1.41,53.9,2.23L1154,580l53.89,2.58-53.92-1.6L1100,579.14c-18-.58-35.94-1.3-53.91-1.95s-35.95-1.22-53.92-2.26a438,438,0,0,1-53.68-6.17,250,250,0,0,1-26.31-6.36c-2.14-.73-4.32-1.38-6.43-2.19l-6.3-2.53-6.14-2.85c-2.06-.93-4-2-6-3.05A269.19,269.19,0,0,1,864,538c-7.53-4.94-14.9-10.14-22-15.69-3.59-2.72-7-5.64-10.51-8.48s-6.83-5.87-10.09-9A190,190,0,0,1,802.82,485.3Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#ffd505',
            }}
          />
          <path
            d="M1042.75,540.63h60a11.3,11.3,0,0,1,11.31,11.3h0a11.31,11.31,0,0,1-11.31,11.31h-60a11.31,11.31,0,0,1-11.31-11.31h0A11.3,11.3,0,0,1,1042.75,540.63Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#ffc866',
            }}
          />
          <path
            d="M1101.62,559.87c-5.06-.84-44.74,3.15-57.33,0-5.31.57-11-1.64-8.35-8.34v-.82c2.35-4.79,5.25-7.2,8.13-7.81,27.61-2.95,47.52,1,56.76.34,4.61,0,9.13,2.86,9.13,7.47v.82C1110,556.14,1106.68,560.72,1101.62,559.87Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#fe4c00',
            }}
          />
          <path
            d="M1057.38,544.71c-5.12,0-7.24-1.15-9.65.49-1.58,1.08-1.3,2-3.24,3.25-2.81,1.76-5,.77-5.57,1.91-.78,1.55,2.07,5.73,6.07,6.9,3.18.92,4.39-.84,9.23-1s4.85,1.57,10.22,1.91c4.77.3,8.69-.81,13.14-2.08,6-1.71,5.46-2.53,8.31-2.66,5.06-.22,6.81,2.37,12.31,1.67,1.8-.23,4.43-.57,5.4-2.5s0-4.49-1.58-5.9c-1.7-1.56-4-1.5-8.15-1.33-4.79.19-5.09,1-8.39.91-3.49-.1-3.51-1-8.73-2a47.18,47.18,0,0,0-10.48-.75C1061.23,543.78,1061.77,544.66,1057.38,544.71Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#fff1d3',
            }}
          />
          <path
            d="M1061.41,547.49a8,8,0,0,0-2.29-.12,4.1,4.1,0,0,0-2.24.79c-.27.21-1.1.86-1,1.37s1.43.68,3.58.87,2.85,0,3.7.66c.68.51.77,1,1.16,1,.78,0,1.73-2.19,1-3.36C1065,548.07,1063.82,547.88,1061.41,547.49Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#fe4c00',
            }}
          />
          <polygon
            points="1030.78 557.93 1068.35 550.45 1053.56 564.25 1036.6 564.92 1030.78 557.93"
            style={{
              fill: '#a85e27',
            }}
          />
          <path
            d="M1032.89,557.5l.3.63a1.17,1.17,0,0,0,1.35.64l33.81-8.33Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#d88521',
            }}
          />
          <path
            d="M1093.08,549.82a2.78,2.78,0,0,0-2.08-.13c-.14.06-1.24.47-1.28,1.21a1.31,1.31,0,0,0,.79,1.16c1.18.82,2.08-.08,3.94.42,1.34.35,1.61,1,2.5.83s1.7-1.09,1.54-1.5c-.26-.64-2.72.52-4.2-.79C1093.78,550.57,1093.76,550.16,1093.08,549.82Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#fe4c00',
            }}
          />
          <path
            d="M1080.83,549.59a7.07,7.07,0,0,1-3.84,2.48c-2.3.44-4.31,0-4.49-.9s1.54-2,3.84-2.49A7.12,7.12,0,0,1,1080.83,549.59Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#46b711',
            }}
          />
          <path
            d="M1079.49,558.34c0-.42,3.91-3.41,8.15-3.24s6.65,1.33,5.48,2.08-5.73.24-8.31,1.16S1079.49,559.5,1079.49,558.34Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#fff1d3',
            }}
          />
          <path
            d="M1049.16,547.11a7.14,7.14,0,0,1-3.84,2.49c-2.3.43-4.31,0-4.49-.91s1.54-2,3.84-2.48A7.12,7.12,0,0,1,1049.16,547.11Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#46b711',
            }}
          />
          <path
            d="M1090.22,556.64a7.13,7.13,0,0,1-4.55.49c-2.25-.65-3.86-1.92-3.6-2.84s2.31-1.13,4.56-.48A7.08,7.08,0,0,1,1090.22,556.64Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#46b711',
            }}
          />
          <path
            d="M1109,551a7.19,7.19,0,0,1-4.55.48c-2.25-.65-3.86-1.92-3.6-2.83s2.3-1.13,4.55-.48A7.15,7.15,0,0,1,1109,551Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#46b711',
            }}
          />
          <ellipse
            cx={1085.13}
            cy={543.57}
            rx={0.89}
            ry={0.44}
            style={{
              fill: '#bc3208',
            }}
          />
          <ellipse
            cx={1086.46}
            cy={544.71}
            rx={0.48}
            ry={0.21}
            style={{
              fill: '#bc3208',
            }}
          />
          <ellipse
            cx={1078.56}
            cy={543.55}
            rx={0.48}
            ry={0.21}
            style={{
              fill: '#bc3208',
            }}
          />
          <ellipse
            cx={1078.33}
            cy={557.66}
            rx={0.75}
            ry={0.44}
            style={{
              fill: '#bc3208',
            }}
          />
          <ellipse
            cx={1076.34}
            cy={558.27}
            rx={0.42}
            ry={0.25}
            style={{
              fill: '#bc3208',
            }}
          />
          <ellipse
            cx={1097.06}
            cy={557}
            rx={1.48}
            ry={0.64}
            style={{
              fill: '#bc3208',
            }}
          />
          <ellipse
            cx={1098.64}
            cy={558.52}
            rx={0.69}
            ry={0.33}
            style={{
              fill: '#bc3208',
            }}
          />
          <ellipse
            cx={1107.28}
            cy={553.46}
            rx={0.48}
            ry={0.27}
            style={{
              fill: '#bc3208',
            }}
          />
          <ellipse
            cx={1044}
            cy={544.58}
            rx={1.14}
            ry={0.5}
            style={{
              fill: '#bc3208',
            }}
          />
          <ellipse
            cx={1045.56}
            cy={543.66}
            rx={0.65}
            ry={0.25}
            style={{
              fill: '#bc3208',
            }}
          />
          <g>
            <ellipse
              cx={1052.6}
              cy={546.29}
              rx={1.75}
              ry={0.58}
              style={{
                fill: '#fc6',
              }}
            />
            <ellipse
              cx={1041.46}
              cy={551.39}
              rx={0.62}
              ry={0.39}
              style={{
                fill: '#fc6',
              }}
            />
            <ellipse
              cx={1042.1}
              cy={550.56}
              rx={0.35}
              ry={0.19}
              style={{
                fill: '#fc6',
              }}
            />
            <ellipse
              cx={1049.73}
              cy={545.88}
              rx={0.42}
              ry={0.17}
              style={{
                fill: '#fc6',
              }}
            />
            <ellipse
              cx={1078.29}
              cy={547.48}
              rx={1.08}
              ry={0.44}
              style={{
                fill: '#fc6',
              }}
            />
            <ellipse
              cx={1079.72}
              cy={546.48}
              rx={0.64}
              ry={0.23}
              style={{
                fill: '#fc6',
              }}
            />
            <ellipse
              cx={1093.75}
              cy={546.29}
              rx={1.25}
              ry={0.42}
              style={{
                fill: '#fc6',
              }}
            />
            <ellipse
              cx={1095.48}
              cy={545.73}
              rx={0.31}
              ry={0.15}
              style={{
                fill: '#fc6',
              }}
            />
            <ellipse
              cx={1102.98}
              cy={551.83}
              rx={0.44}
              ry={0.2}
              style={{
                fill: '#fc6',
              }}
            />
          </g>
          <ellipse
            cx={1039.04}
            cy={548.23}
            rx={0.44}
            ry={0.28}
            style={{
              fill: '#bc3208',
            }}
          />
          <g id="ta1">
            <g
              style={{
                mask: 'url(#mask)',
              }}
            >
              <use
                transform="translate(1042 526.18)"
                xlinkHref="#image-2"
                style={{
                  opacity: 0.4,
                }}
              />
            </g>
          </g>
          <g id="tb1">
            <g
              style={{
                mask: 'url(#mask-2)',
              }}
            >
              <use
                transform="translate(1042 526.17)"
                xlinkHref="#image-2"
                style={{
                  opacity: 0.4,
                }}
              />
            </g>
          </g>
          <g id="tc1">
            <g
              style={{
                mask: 'url(#mask-2)',
              }}
            >
              <use
                transform="translate(1042 526.17)"
                xlinkHref="#image-2"
                style={{
                  opacity: 0.4,
                }}
              />
            </g>
          </g>
          <g id="td1">
            <g
              style={{
                mask: 'url(#mask-2)',
              }}
            >
              <use
                transform="translate(1042 526.17)"
                xlinkHref="#image-2"
                style={{
                  opacity: 0.4,
                }}
              />
            </g>
          </g>
          <g id="te1">
            <g
              style={{
                mask: 'url(#mask-2)',
              }}
            >
              <use
                transform="translate(1042 526.17)"
                xlinkHref="#image-2"
                style={{
                  opacity: 0.4,
                }}
              />
            </g>
          </g>
          <g id="tf1">
            <g
              style={{
                mask: 'url(#mask-2)',
              }}
            >
              <use
                transform="translate(1042 526.17)"
                xlinkHref="#image-2"
                style={{
                  opacity: 0.4,
                }}
              />
            </g>
          </g>
          <g id="tg1">
            <g
              style={{
                mask: 'url(#mask-2)',
              }}
            >
              <use
                transform="translate(1042 526.17)"
                xlinkHref="#image-2"
                style={{
                  opacity: 0.4,
                }}
              />
            </g>
          </g>
          <g id="th1">
            <g
              style={{
                mask: 'url(#mask-2)',
              }}
            >
              <use
                transform="translate(1042 526.17)"
                xlinkHref="#image-2"
                style={{
                  opacity: 0.4,
                }}
              />
            </g>
          </g>
          <g id="ti1">
            <g
              style={{
                mask: 'url(#mask-2)',
              }}
            >
              <use
                transform="translate(1042 526.17)"
                xlinkHref="#image-2"
                style={{
                  opacity: 0.4,
                }}
              />
            </g>
          </g>
        </g>
        <rect
          x={71.81}
          y={649.21}
          width={1267.54}
          height={162.97}
          style={{
            opacity: 0.7200000286102295,
            isolation: 'isolate',
            fill: 'url(#linear-gradient-3)',
          }}
        />
        <g id="g1">
          <g id="stick">
            <g>
              <path
                d="M888.91,642.17h0a3.66,3.66,0,0,1,2.29,4.65L856.7,748.33h0L849.77,746h0l34.5-101.52a3.66,3.66,0,0,1,4.64-2.29Z"
                transform="translate(0 0.01)"
                style={{
                  fill: 'url(#linear-gradient-4)',
                }}
              />
              <path
                d="M870.06,686.29h7.65L1009.77,298a3.66,3.66,0,0,0-2.28-4.64h0a3.65,3.65,0,0,0-4.63,2.27v0Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#bc7235',
                }}
              />
            </g>
            <path
              d="M857.56,683.48V685a5.94,5.94,0,0,0,5.94,5.93H866"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#57758f',
                strokeMiterlimit: 10,
                opacity: 0.41999998688697815,
                isolation: 'isolate',
              }}
            />
            <path
              d="M888.66,676.16h1.08a6.67,6.67,0,0,1,6.65,6.66h0"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#57758f',
                strokeMiterlimit: 10,
                opacity: 0.15000000596046448,
                isolation: 'isolate',
              }}
            />
            <path
              d="M885.94,680.88h1.77a2.48,2.48,0,0,1,2.5,2.48h0a2.48,2.48,0,0,1-2.49,2.49H865.9a2.35,2.35,0,0,1-2.35-2.35h0a2.36,2.36,0,0,1,2.35-2.36h2"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#57758f',
                strokeMiterlimit: 10,
                opacity: 0.30000001192092896,
                isolation: 'isolate',
              }}
            />
          </g>
          <g id="arm2">
            <path
              d="M991.85,386.57l32.81,13.21a9.89,9.89,0,0,1,5.77,9h0a9.92,9.92,0,0,1-9.92,9.92H978.77"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#ff7d37',
                strokeMiterlimit: 10,
                strokeWidth: 12,
              }}
            />
            <path
              d="M975.14,428l-7.16.14a6.21,6.21,0,0,1-6.33-6.09h0l-.07-3.18a6.22,6.22,0,0,1,6.09-6.33h0l7.16-.14a6.84,6.84,0,0,1,7,6.7h0l0,1.91a6.84,6.84,0,0,1-6.69,7Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ff7d37',
              }}
            />
          </g>
          <path
            d="M1002.81,404.33l-16.44-7.78q3.63-9,7.27-18l17.76,7.6Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#101d23',
            }}
          />
        </g>
        <rect
          x={55.19}
          y={571.33}
          width={507.39}
          height={43.5}
          style={{
            fill: '#f7dea6',
          }}
        />
        <rect
          x={54.52}
          y={574.5}
          width={508.06}
          height={40.33}
          style={{
            fill: '#fff5de',
          }}
        />
        <rect
          x={54.52}
          y={165.88}
          width={508.06}
          height={29.27}
          style={{
            fill: '#ffeec4',
          }}
        />
        <g
          style={{
            opacity: 0.6299999952316284,
          }}
        >
          <line
            x1={66.31}
            y1={333.87}
            x2={81.04}
            y2={333.87}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={75.4}
            y1={344.07}
            x2={90.13}
            y2={344.07}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={129.71}
            y1={292.64}
            x2={144.44}
            y2={292.64}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={138.8}
            y1={302.84}
            x2={153.53}
            y2={302.84}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={110.87}
            y1={302.84}
            x2={125.6}
            y2={302.84}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={69.19}
            y1={288.65}
            x2={83.92}
            y2={288.65}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={121.95}
            y1={370.67}
            x2={136.68}
            y2={370.67}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={121.95}
            y1={393.07}
            x2={136.68}
            y2={393.07}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={95.13}
            y1={393.07}
            x2={109.86}
            y2={393.07}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={67.19}
            y1={423.66}
            x2={81.92}
            y2={423.66}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={94.02}
            y1={423.66}
            x2={108.75}
            y2={423.66}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={79.17}
            y1={435.41}
            x2={93.9}
            y2={435.41}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={67.19}
            y1={549.53}
            x2={81.92}
            y2={549.53}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={94.02}
            y1={549.53}
            x2={108.75}
            y2={549.53}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={112.31}
            y1={533.07}
            x2={127.04}
            y2={533.07}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={81.05}
            y1={515.27}
            x2={95.78}
            y2={515.27}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={79.17}
            y1={561.28}
            x2={93.9}
            y2={561.28}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={120.4}
            y1={459.35}
            x2={135.13}
            y2={459.35}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={107.99}
            y1={470.88}
            x2={122.72}
            y2={470.88}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={59.32}
            y1={491.39}
            x2={74.05}
            y2={491.39}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={124.06}
            y1={480.75}
            x2={138.79}
            y2={480.75}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <g>
            <path
              d="M55.17,484.18h7.51a3.5,3.5,0,1,0,0-7H55.13Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffddb0',
              }}
            />
            <path
              d="M55.14,475.59h2.23a3.5,3.5,0,0,0,0-7H55.1Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffddb0',
              }}
            />
          </g>
          <line
            x1={109.98}
            y1={381.76}
            x2={124.71}
            y2={381.76}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={75.4}
            y1={322.79}
            x2={90.13}
            y2={322.79}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
        </g>
        <g
          style={{
            opacity: 0.6299999952316284,
          }}
        >
          <line
            x1={552.01}
            y1={333.87}
            x2={537.28}
            y2={333.87}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={542.92}
            y1={344.07}
            x2={528.19}
            y2={344.07}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={488.61}
            y1={292.64}
            x2={473.88}
            y2={292.64}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={479.52}
            y1={302.84}
            x2={464.79}
            y2={302.84}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={507.45}
            y1={302.84}
            x2={492.72}
            y2={302.84}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={549.13}
            y1={288.65}
            x2={534.4}
            y2={288.65}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={496.37}
            y1={370.67}
            x2={481.64}
            y2={370.67}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={496.37}
            y1={393.07}
            x2={481.64}
            y2={393.07}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={523.19}
            y1={393.07}
            x2={508.46}
            y2={393.07}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={551.13}
            y1={423.66}
            x2={536.4}
            y2={423.66}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={524.3}
            y1={423.66}
            x2={509.57}
            y2={423.66}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={539.16}
            y1={435.41}
            x2={524.43}
            y2={435.41}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={551.13}
            y1={549.53}
            x2={536.4}
            y2={549.53}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={524.3}
            y1={549.53}
            x2={509.57}
            y2={549.53}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={506.01}
            y1={533.07}
            x2={491.28}
            y2={533.07}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={537.27}
            y1={515.27}
            x2={522.54}
            y2={515.27}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={539.16}
            y1={561.28}
            x2={524.43}
            y2={561.28}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={497.92}
            y1={459.35}
            x2={483.19}
            y2={459.35}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={510.34}
            y1={470.88}
            x2={495.61}
            y2={470.88}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={559}
            y1={491.39}
            x2={544.27}
            y2={491.39}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={494.26}
            y1={480.75}
            x2={479.53}
            y2={480.75}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <g>
            <path
              d="M563.14,484.18h-7.51a3.5,3.5,0,0,1,0-7h7.56Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffddb0',
              }}
            />
            <path
              d="M563.18,475.59h-2.24a3.5,3.5,0,0,1,0-7h2.28Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffddb0',
              }}
            />
          </g>
          <line
            x1={508.34}
            y1={381.76}
            x2={493.61}
            y2={381.76}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={542.92}
            y1={322.79}
            x2={528.19}
            y2={322.79}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
        </g>
        <path
          d="M246.16,234.07H387.39A115.68,115.68,0,0,1,503.07,349.75V614.82H130.49V349.75A115.69,115.69,0,0,1,246.16,234.07Z"
          transform="translate(0 0.01)"
          style={{
            fill: '#fff5de',
          }}
        />
        <rect
          x={54.52}
          y={189.38}
          width={508.06}
          height={5.78}
          style={{
            fill: '#fc6',
          }}
        />
        <path
          d="M265.68,245.25h102A115.68,115.68,0,0,1,483.36,360.93V614.82H150V360.93A115.68,115.68,0,0,1,265.68,245.25Z"
          transform="translate(0 0.01)"
          style={{
            fill: '#f7c546',
          }}
        />
        <path
          d="M290.5,245.25h77.18A115.68,115.68,0,0,1,483.36,360.93V614.82H174.83V360.93A115.69,115.69,0,0,1,290.5,245.25Z"
          transform="translate(0 0.01)"
          style={{
            fill: '#f9d780',
          }}
        />
        <g>
          <line
            x1={199.21}
            y1={373.65}
            x2={213.94}
            y2={373.65}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={208.74}
            y1={384.29}
            x2={223.47}
            y2={384.29}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={208.74}
            y1={364.12}
            x2={223.47}
            y2={364.12}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={280.02}
            y1={403.47}
            x2={294.75}
            y2={403.47}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={292.43}
            y1={393.27}
            x2={307.16}
            y2={393.27}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={306.62}
            y1={403.25}
            x2={321.35}
            y2={403.25}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={312.16}
            y1={437.17}
            x2={326.89}
            y2={437.17}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={242.11}
            y1={451.13}
            x2={256.84}
            y2={451.13}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={183.14}
            y1={458.67}
            x2={197.87}
            y2={458.67}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={190.67}
            y1={468.42}
            x2={205.4}
            y2={468.42}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={183.58}
            y1={480.84}
            x2={198.31}
            y2={480.84}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={274.47}
            y1={310.13}
            x2={289.2}
            y2={310.13}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={353.84}
            y1={294.62}
            x2={368.57}
            y2={294.62}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={339.65}
            y1={306.14}
            x2={354.38}
            y2={306.14}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={367.59}
            y1={306.14}
            x2={382.32}
            y2={306.14}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={435.87}
            y1={325.21}
            x2={450.6}
            y2={325.21}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={376.45}
            y1={339.84}
            x2={391.18}
            y2={339.84}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={446.51}
            y1={406.79}
            x2={461.24}
            y2={406.79}
            style={{
              fill: 'none',
              stroke: '#f9c44e',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
            }}
          />
          <line
            x1={372.91}
            y1={446.26}
            x2={387.64}
            y2={446.26}
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
          <path
            d="M392.58,433.39h0a9.53,9.53,0,0,1,9.53,9.53v96.44H383V442.92a9.53,9.53,0,0,1,9.53-9.53Z"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M418.29,538.69H366.86l-7-69.79a32.9,32.9,0,0,1,29.44-36c1.08-.1,2.17-.16,3.26-.16h0a32.89,32.89,0,0,1,32.89,32.91,32.54,32.54,0,0,1-.16,3.27Z"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M362.67,533.81h60.15a7.66,7.66,0,0,1,7.67,7.67v.16H355v-.16A7.66,7.66,0,0,1,362.67,533.81Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#bc7235',
            }}
          />
          <rect
            x={354.94}
            y={541.64}
            width={75.49}
            height={2.23}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M362.31,542.9l3.13,68.82a5.19,5.19,0,0,1-4.69,5.65l-.48,0h-.07"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M422.89,542.9l-3.14,68.82a5.2,5.2,0,0,0,4.71,5.65l.47,0H425"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <line
            x1={363.64}
            y1={584.37}
            x2={420.84}
            y2={584.37}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
        </g>
        <g>
          <path
            d="M539.12,433.39h0a9.53,9.53,0,0,1,9.53,9.53h0v96.44H529.58V442.92a9.53,9.53,0,0,1,9.53-9.53h0Z"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M564.83,538.69H513.4l-7-69.79a32.9,32.9,0,0,1,29.44-36c1.09-.1,2.18-.16,3.28-.16h0A32.89,32.89,0,0,1,572,465.63a32.54,32.54,0,0,1-.16,3.27Z"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M509.21,533.81h60.15a7.66,7.66,0,0,1,7.67,7.67v.16H501.54v-.16A7.66,7.66,0,0,1,509.21,533.81Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#bc7235',
            }}
          />
          <rect
            x={501.48}
            y={541.64}
            width={75.49}
            height={2.23}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M508.85,542.9,512,611.72a5.19,5.19,0,0,1-4.69,5.65l-.48,0h-.07"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M569.43,542.9l-3.14,68.82a5.2,5.2,0,0,0,4.71,5.65l.47,0h.09"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <line
            x1={510.18}
            y1={584.37}
            x2={567.38}
            y2={584.37}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
        </g>
        <g>
          <path
            d="M514.47,441.69h0a2.56,2.56,0,0,1-1.68-2.4V420.46h.94v-3.7h-9.82v3.7h.93v18.75a2.57,2.57,0,0,1-1.61,2.38,8.72,8.72,0,0,0-5.51,8.11v45.42a2.89,2.89,0,0,0,2.11,2.78,35.43,35.43,0,0,0,18.2-.07,2.91,2.91,0,0,0,2.21-2.8V449.89A8.71,8.71,0,0,0,514.47,441.69Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#054924',
              opacity: 0.949999988079071,
              isolation: 'isolate',
            }}
          />
          <g
            style={{
              opacity: 0.25999999046325684,
            }}
          >
            <path
              d="M498.83,493.31a2.6,2.6,0,0,0,1.9,2.5,32,32,0,0,0,16.37-.06,2.61,2.61,0,0,0,2-2.52v-33.3H498.83Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ed1c24',
                opacity: 0.8399999737739563,
                isolation: 'isolate',
              }}
            />
            <ellipse
              cx={508.96}
              cy={459.98}
              rx={10.13}
              ry={1.67}
              style={{
                fill: '#fe4c00',
              }}
            />
          </g>
        </g>
        <g
          style={{
            opacity: 0.3700000047683716,
          }}
        >
          <g>
            <path
              d="M132.61,431.5h0a9.53,9.53,0,0,1,9.53,9.53v96.44H123.08V441A9.53,9.53,0,0,1,132.61,431.5Z"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <path
              d="M158.33,536.81H106.9l-7-69.8a32.87,32.87,0,0,1,29.42-36,30.39,30.39,0,0,1,3.3-.17h0A32.83,32.83,0,0,1,165.34,467Z"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <path
              d="M102.71,531.93h60.15a7.66,7.66,0,0,1,7.67,7.67v.16H95v-.16a7.66,7.66,0,0,1,7.67-7.67Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#bc7235',
              }}
            />
            <rect
              x={94.98}
              y={539.75}
              width={75.49}
              height={2.23}
              style={{
                fill: '#101d23',
              }}
            />
            <path
              d="M102.35,541l3.13,68.81a5.2,5.2,0,0,1-4.7,5.66l-.47,0h-.07"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <path
              d="M162.92,541l-3.13,68.81a5.2,5.2,0,0,0,4.7,5.66l.48,0H165"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <line
              x1={103.68}
              y1={582.49}
              x2={160.88}
              y2={582.49}
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
          </g>
          <rect
            x={184.77}
            y={495.66}
            width={22.92}
            height={116.25}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M219.86,614.76h-47.3a5.74,5.74,0,0,1,5.73-5.73h35.82a5.74,5.74,0,0,1,5.75,5.71Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M70.23,495.87H317a6.32,6.32,0,0,1,6.32,6.32H63.91a6.32,6.32,0,0,1,6.32-6.32Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#fff',
            }}
          />
          <polygon
            points="94.84 495.8 195.49 571.7 297.47 495.44 94.84 495.8"
            style={{
              fill: '#fff',
            }}
          />
          <polygon
            points="94.84 495.8 195.49 571.7 297.47 495.44 94.84 495.8"
            style={{
              fill: 'url(#Plaid_3_Color)',
            }}
          />
          <g>
            <path
              d="M258.07,429.62h0a9.53,9.53,0,0,1,9.53,9.53v96.44H248.53V439.15a9.53,9.53,0,0,1,9.53-9.53Z"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <path
              d="M283.78,534.92H232.35l-7-69.79a32.9,32.9,0,0,1,29.44-36c1.09-.1,2.18-.16,3.28-.16h0A32.89,32.89,0,0,1,291,461.86a32.54,32.54,0,0,1-.16,3.27Z"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <path
              d="M228.16,530H288.3a7.66,7.66,0,0,1,7.67,7.67v.16H220.49v-.16A7.66,7.66,0,0,1,228.16,530Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#bc7235',
              }}
            />
            <rect
              x={220.43}
              y={537.87}
              width={75.49}
              height={2.23}
              style={{
                fill: '#101d23',
              }}
            />
            <path
              d="M227.8,539.14,230.93,608a5.19,5.19,0,0,1-4.69,5.65l-.48,0h-.07"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <path
              d="M288.38,539.14,285.24,608A5.2,5.2,0,0,0,290,613.6l.47,0h.06"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <line
              x1={229.13}
              y1={580.6}
              x2={286.33}
              y2={580.6}
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M452.41,495.75H432.68a8.24,8.24,0,0,1,8.23-8.25h3.26a8.24,8.24,0,0,1,8.24,8.24Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffe2b0',
              }}
            />
            <path
              d="M450.79,495.75v-.35H434.61V495a5.72,5.72,0,0,1,5.71-5.73h4.44a5.72,5.72,0,0,1,5.72,5.72h0v.7h.62V495a6.34,6.34,0,0,0-6.33-6.35h-4.43A6.35,6.35,0,0,0,434,495h0v1H451.1v-.31Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#e8b75a',
              }}
            />
            <path
              d="M449,489.68a2.62,2.62,0,1,1-2.63-2.61h0A2.62,2.62,0,0,1,449,489.68Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#8e1b00',
              }}
            />
            <path
              d="M448.72,495.75H436.37v-1a4.09,4.09,0,0,1,4.09-4.09h4.17a4.09,4.09,0,0,1,4.09,4.09Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffe2b0',
              }}
            />
            <path
              d="M448.72,495.75v-.35h-12v-.64A3.79,3.79,0,0,1,440.5,491h4.17a3.79,3.79,0,0,1,3.78,3.79v1h.62v-1a4.4,4.4,0,0,0-4.4-4.4h-4.21a4.4,4.4,0,0,0-4.4,4.4V496h13v-.31Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#e8b75a',
              }}
            />
            <path
              d="M481,495.1H446.88v-.55a10.93,10.93,0,0,1,10.93-10.93h12.27A10.93,10.93,0,0,1,481,494.55Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffe2b0',
              }}
            />
            <path
              d="M478.68,495.1v-.31H449v.31h.31a9.42,9.42,0,0,1,9.41-9.43h10.18a9.42,9.42,0,0,1,9.43,9.41v0H479a10,10,0,0,0-10-10.05H458.78a10.05,10.05,0,0,0-10,10.05v.3H479v-.31Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#e8b75a',
              }}
            />
            <path
              d="M475.15,487.07a2.61,2.61,0,1,1-2.61-2.62,2.61,2.61,0,0,1,2.61,2.62Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#8e1b00',
              }}
            />
            <path
              d="M476.36,495.1h-25v-.45a7.15,7.15,0,0,1,7.15-7.15h10.75a7.15,7.15,0,0,1,7.15,7.15Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffe2b0',
              }}
            />
            <path
              d="M476.36,495.1v-.31h-24.7v-.14a6.86,6.86,0,0,1,6.85-6.84h10.7a6.85,6.85,0,0,1,6.84,6.84v.45h.62v-.45a7.46,7.46,0,0,0-7.46-7.46H458.56a7.46,7.46,0,0,0-7.46,7.46v.75h25.62v-.31Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#e8b75a',
              }}
            />
            <path
              d="M473.09,495.1v-.31H454.94v-.65a4.17,4.17,0,0,1,4.15-4.15h9.54a4.17,4.17,0,0,1,4.15,4.15v1h.61v-1a4.77,4.77,0,0,0-4.76-4.77h-9.54a4.79,4.79,0,0,0-4.77,4.77v1.26h19.07v-.31Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#e8b75a',
              }}
            />
            <path
              d="M466.06,484.45a2.62,2.62,0,1,1-2.63-2.61h0A2.61,2.61,0,0,1,466.06,484.45Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#8e1b00',
              }}
            />
            <path
              d="M488.8,497.49H423.56a5.57,5.57,0,0,1-5.57-5.57h76.37a5.56,5.56,0,0,1-5.55,5.57Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#57758f',
              }}
            />
            <rect
              x={428.23}
              y={475.29}
              width={25.69}
              height={2.39}
              style={{
                fill: '#cab195',
              }}
            />
            <path
              d="M454.88,479.45h-2.61a2.15,2.15,0,0,1-2.15-2.15v-1.65a2.16,2.16,0,0,1,2.15-2.16h2.61Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#cab195',
              }}
            />
            <rect
              x={453}
              y={478.14}
              width={8.48}
              height={1.33}
              rx={0.54}
              style={{
                fill: '#cab195',
              }}
            />
            <rect
              x={453}
              y={475.82}
              width={8.48}
              height={1.33}
              rx={0.54}
              style={{
                fill: '#cab195',
              }}
            />
            <rect
              x={453}
              y={473.5}
              width={8.48}
              height={1.33}
              rx={0.54}
              style={{
                fill: '#cab195',
              }}
            />
            <path
              d="M455.56,485.4h0a.64.64,0,0,1-.64-.63V475.5a.64.64,0,0,1,.64-.64.64.64,0,0,1,.64.64h0v9.27A.64.64,0,0,1,455.56,485.4Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffe2b0',
              }}
            />
            <path
              d="M456.7,484.61h0a.55.55,0,0,1-.54-.53V473.8a.54.54,0,0,1,1.08,0v10.28A.55.55,0,0,1,456.7,484.61Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffe2b0',
              }}
            />
            <path
              d="M457.77,484.46h0a.55.55,0,0,1-.53-.54V473.65a.54.54,0,0,1,1.07-.15.38.38,0,0,1,0,.15v10.27a.54.54,0,0,1-.54.54Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffe2b0',
              }}
            />
            <path
              d="M459.72,484.46h0a.54.54,0,0,1-.54-.54h0V473.65a.54.54,0,0,1,1.07-.15.38.38,0,0,1,0,.15v10.27A.55.55,0,0,1,459.72,484.46Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffe2b0',
              }}
            />
            <path
              d="M458.85,480.09h0a.54.54,0,0,1-.54-.54h0v-5.9a.55.55,0,0,1,.54-.54.54.54,0,0,1,.54.54h0v5.9a.54.54,0,0,1-.54.54Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ffe2b0',
              }}
            />
          </g>
          <g id="arm1">
            <path
              d="M523.61,429.42H535a7.46,7.46,0,0,1,7.47,7.47V438a5.85,5.85,0,0,1-5.85,5.85H520.8v-11.6a2.81,2.81,0,0,1,2.79-2.83Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ff8a00',
              }}
            />
            <path
              d="M455.75,468.4s38.36-2.66,70.28-31.92"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#ff8a00',
                strokeMiterlimit: 10,
                strokeWidth: 14,
              }}
            />
            <g>
              <path
                d="M533,430.7h0a9.45,9.45,0,0,1-7.56-11v0l3.19-17,18.63,3.51-3.2,17A9.47,9.47,0,0,1,533,430.7Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#fff',
                }}
              />
              <path
                d="M533.89,428l-.68-.12a6.61,6.61,0,0,1-5.27-7.72l.22-1.15,14.44-.84-1,4.56a6.6,6.6,0,0,1-7.7,5.27Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#f89e57',
                }}
              />
              <polyline
                points="532.42 430.6 528.45 451.71 529.67 451.94 533.64 430.83"
                style={{
                  fill: '#fff',
                }}
              />
              <polyline
                points="525.61 451.25 532.48 452.54 532.71 451.33 525.84 450.04"
                style={{
                  fill: '#fff',
                }}
              />
            </g>
            <path
              d="M526,433.17s4.78,4.83,9.14.92"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#ff6d00',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
          </g>
          <g>
            <path
              d="M425.92,533.72H396.65a13.09,13.09,0,0,1-13.09-13.08V460.92H439v59.72A13.09,13.09,0,0,1,425.92,533.72Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ff8a00',
              }}
            />
            <g id="head1">
              <rect
                x={399.48}
                y={446.26}
                width={27.18}
                height={17.25}
                style={{
                  fill: '#ff8a00',
                }}
              />
              <path
                d="M428.1,355.07v5.38a3.49,3.49,0,0,1-3,3.52,3.39,3.39,0,0,1-3.72-3c0-.12,0-.23,0-.35v-9a1.47,1.47,0,0,0-1.15-1.45q-1.86-.4-3.78-.63a1.5,1.5,0,0,0-1.67,1.29,1.21,1.21,0,0,0,0,.19v9.46a3.49,3.49,0,0,1-3,3.52,3.38,3.38,0,0,1-3.71-3c0-.11,0-.23,0-.34V351a1.49,1.49,0,0,0-1.49-1.49h-.19c-1.28.15-2.54.36-3.77.63a1.48,1.48,0,0,0-1.16,1.45v8.86a3.49,3.49,0,0,1-3,3.52,3.4,3.4,0,0,1-3.82-2.9,3.87,3.87,0,0,1,0-.48v-5.53a1.49,1.49,0,0,0-1.48-1.5,1.45,1.45,0,0,0-.68.16,41.7,41.7,0,0,0-22.75,37.14v30.38a31.68,31.68,0,0,0,31.66,31.66h20A31.65,31.65,0,0,0,453,421.25h0V390.87a41.7,41.7,0,0,0-22.75-37.14,1.49,1.49,0,0,0-2.12,1.34Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#ff8a00',
                }}
              />
              <path
                d="M394.36,402.91a5.11,5.11,0,1,1,10.22,0,2.16,2.16,0,1,0,4.32,0h0a9.43,9.43,0,1,0-18.86,0,2.16,2.16,0,1,0,4.32,0Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#612f00',
                }}
              />
              <path
                d="M431.39,416.65a19.32,19.32,0,0,1-35.64-.1Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#612f00',
                }}
              />
              <path
                d="M393.44,425.4a7.24,7.24,0,0,0,0-13.37,2.17,2.17,0,0,0-1.68,4,3,3,0,0,1,1.29,1.06,2.92,2.92,0,0,1,0,3.28,2.81,2.81,0,0,1-1.3,1.06,2.17,2.17,0,1,0,1.66,4Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#ffa625',
                }}
              />
              <path
                d="M435.35,421.4a2.93,2.93,0,0,1,0-5.4,2.17,2.17,0,1,0-1.69-4h0a7.24,7.24,0,0,0-3.86,9.48,7.41,7.41,0,0,0,.69,1.27,7.21,7.21,0,0,0,3.21,2.62,2.17,2.17,0,0,0,1.66-4h0Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#ffa625',
                }}
              />
              <path
                d="M424.25,402.91a5.11,5.11,0,1,1,10.22,0,2.16,2.16,0,1,0,4.32,0h0a9.44,9.44,0,0,0-18.87,0,2.17,2.17,0,0,0,4.33,0Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#612f00',
                }}
              />
              <path
                d="M415.33,422.5H399.65a19.29,19.29,0,0,0,20.74,4.71A5.09,5.09,0,0,0,415.33,422.5Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#fc4c01',
                }}
              />
              <polyline
                points="399.48 453.23 410.02 453.23 410.02 452.61 399.48 452.61"
                style={{
                  fill: '#eb5000',
                }}
              />
            </g>
            <path
              d="M439.07,533.72H394.63a11.13,11.13,0,0,1-11.13-11.13h0V498.53h55.57Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#193441',
              }}
            />
            <path
              d="M439.07,512.73H383.5V457.16h45.06a10.5,10.5,0,0,1,10.5,10.5h0Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#fe4c00',
              }}
            />
            <path
              d="M366.15,465.14a52,52,0,0,0-10.59,7.15,55.1,55.1,0,0,0-9.73,11.11,25.86,25.86,0,0,0-2.9,5.63,17.55,17.55,0,0,0-1.1,6,14.39,14.39,0,0,0,.71,4.56,14,14,0,0,0,1.74,3.56,16.62,16.62,0,0,0,4.66,4.57,22.15,22.15,0,0,0,4.19,2.16,33.3,33.3,0,0,0,7,1.85,49.49,49.49,0,0,0,7.69.57,70.28,70.28,0,0,0,13.8-1.45,82.34,82.34,0,0,0,21.69-7.68,67.29,67.29,0,0,0,19.34-14.88L412,478.9a50.41,50.41,0,0,1-9.66,8.37,65.84,65.84,0,0,1-17.56,8.13,60.89,60.89,0,0,1-17,2.67,33.39,33.39,0,0,1-6.23-.53,17.23,17.23,0,0,1-3.3-.93,7.79,7.79,0,0,1-1.49-.77,2.87,2.87,0,0,1-.55-.44,1.12,1.12,0,0,1-.19-.24V495a3.61,3.61,0,0,1,.26-1.17,11.93,11.93,0,0,1,1.36-2.57,41.14,41.14,0,0,1,7.21-8.26,37.55,37.55,0,0,1,7.74-5.22l-6.45-12.65Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ff8a00',
              }}
            />
            <path
              d="M389.56,457.55a31.7,31.7,0,0,0-5.15-.36,42.78,42.78,0,0,0-12.71,1.94,40.54,40.54,0,0,0-15.84,9.27l14.4,15.28a19.74,19.74,0,0,1,9.57-5,22.19,22.19,0,0,1,4.6-.5,9.66,9.66,0,0,1,1.51.06h.26l.76-5.34-.9,5.32h.14l.76-5.34-.9,5.32,3.51-20.7Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#fe4c00',
              }}
            />
            <polyline
              points="383.5 478.79 387.83 478.79 387.83 478.17 383.5 478.17"
              style={{
                fill: '#fc4c01',
              }}
            />
            <polyline
              points="436.69 529.3 464.48 606.17 477.83 601.34 450.05 524.47"
              style={{
                fill: '#ff8a00',
              }}
            />
            <path
              d="M465.34,565l-13.94,5-17.15-47.46a7.41,7.41,0,0,1,13.93-5Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#193441',
              }}
            />
            <path
              d="M429.37,468s21.95,6.65,31.93,0"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#fe4c00',
                strokeMiterlimit: 10,
                strokeWidth: 21,
              }}
            />
            <path
              d="M492,598.83l-25.54,9.23a1.25,1.25,0,0,1-1.59-.74h0L461.56,598l18.59-6.72a9.88,9.88,0,0,1,12.64,5.93h0a1.24,1.24,0,0,1-.75,1.58Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#193441',
              }}
            />
            <rect
              x={458.45}
              y={575.08}
              width={14.82}
              height={26.42}
              transform="translate(-172.22 193.37) rotate(-19.87)"
              style={{
                fill: '#193441',
              }}
            />
            <path
              d="M419.48,479.52l-1.85-.56,1.83.62v-.06l-1.85-.56,1.83.62-.51-.17.51.18h0l-.51-.17.51.18h0s.07-.15.14-.27a1.49,1.49,0,0,1,.42-.48.57.57,0,0,1,.23-.12,1,1,0,0,1,.39-.05h.16v-.09l-.06.08h0v-.09l-.06.08h0a.44.44,0,0,1,.08.11,2.07,2.07,0,0,1,.18.47.43.43,0,0,1,0,.16h0l.33,0h-.33l.33-.05h-.33l2-.23-2,.18v.15l2-.23-2,.18a3.09,3.09,0,1,0,6.17-.29,2.28,2.28,0,0,0,0-.26,5.67,5.67,0,0,0-.18-1,6.64,6.64,0,0,0-.33-1.4,7,7,0,0,0-.73-1.28,6,6,0,0,0-2-1.84,6.48,6.48,0,0,0-3.16-.8,7.17,7.17,0,0,0-3.45.85,7.72,7.72,0,0,0-1.77,1.34,7.92,7.92,0,0,0-1.4,2,6.94,6.94,0,0,0-.45,1.09,3.09,3.09,0,0,0,5.82,2.08,1.71,1.71,0,0,0,.09-.3Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ff6900',
              }}
            />
            <path
              d="M427.9,490.31H414.63a3.1,3.1,0,0,1-3.08-3.07v-6.51a4.3,4.3,0,0,1,4.29-4.29H427.9a6.33,6.33,0,0,1,6.31,6.31V484A6.32,6.32,0,0,1,427.9,490.31Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#ff8a00',
              }}
            />
            <polyline
              points="424.34 530.79 424.34 612.52 438.55 612.52 438.55 530.79"
              style={{
                fill: '#ff8a00',
              }}
            />
            <path
              d="M438.56,574.07H423.72V523.6a7.41,7.41,0,0,1,14.82,0Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#193441',
              }}
            />
            <path
              d="M452.73,615H425.56a1.25,1.25,0,0,1-1.24-1.24v-9.87h19.77a9.87,9.87,0,0,1,9.87,9.87A1.24,1.24,0,0,1,452.73,615Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#193441',
              }}
            />
            <rect
              x={424.34}
              y={582.94}
              width={14.82}
              height={26.42}
              style={{
                fill: '#193441',
              }}
            />
          </g>
          <rect
            x={493.36}
            y={497.46}
            width={22.92}
            height={116.25}
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M528.46,616.57H481.17a5.74,5.74,0,0,1,5.73-5.73h35.83a5.72,5.72,0,0,1,5.73,5.71Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#101d23',
            }}
          />
          <path
            d="M378.83,497.68H625.58A6.32,6.32,0,0,1,631.9,504H372.51A6.32,6.32,0,0,1,378.83,497.68Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#bc7235',
            }}
          />
          <g>
            <polygon
              points="403.44 497.61 504.09 573.51 606.07 497.25 403.44 497.61"
              style={{
                fill: '#fff',
              }}
            />
            <polygon
              points="403.44 497.61 504.09 573.51 606.07 497.25 403.44 497.61"
              style={{
                fill: 'url(#Plaid_3_Color)',
              }}
            />
          </g>
        </g>
        <rect
          x={50.35}
          y={703.27}
          width={540.6}
          height={74.39}
          style={{
            opacity: 0.1899999976158142,
            isolation: 'isolate',
            fill: 'url(#linear-gradient-5)',
          }}
        />
        <rect
          y={614.83}
          width={590.94}
          height={88.44}
          style={{
            fill: 'url(#linear-gradient-6)',
          }}
        />
        <rect
          x={18.56}
          y={614.83}
          width={572.58}
          height={24.95}
          style={{
            opacity: 0.5299999713897705,
            isolation: 'isolate',
            fill: 'url(#linear-gradient-7)',
          }}
        />
        <rect
          x={18.56}
          y={639.78}
          width={572.58}
          height={3.24}
          style={{
            opacity: 0.5299999713897705,
            isolation: 'isolate',
            fill: 'url(#linear-gradient-8)',
          }}
        />
        <g>
          <line
            x1={119.51}
            y1={651.54}
            x2={134.24}
            y2={651.54}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={148.31}
            y1={651.54}
            x2={163.04}
            y2={651.54}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={175.86}
            y1={683.08}
            x2={190.59}
            y2={683.08}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={193.39}
            y1={667.86}
            x2={208.12}
            y2={667.86}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={278.55}
            y1={684.71}
            x2={293.28}
            y2={684.71}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={293.57}
            y1={671.66}
            x2={308.3}
            y2={671.66}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={306.6}
            y1={684.98}
            x2={321.33}
            y2={684.98}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={425.42}
            y1={685.43}
            x2={440.15}
            y2={685.43}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={455.13}
            y1={685.43}
            x2={469.86}
            y2={685.43}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={439.61}
            y1={696.51}
            x2={454.34}
            y2={696.51}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={532.72}
            y1={660.6}
            x2={547.45}
            y2={660.6}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={520.75}
            y1={650.84}
            x2={535.48}
            y2={650.84}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={353.68}
            y1={666.22}
            x2={368.41}
            y2={666.22}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={566.51}
            y1={690.61}
            x2={581.24}
            y2={690.61}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={404.23}
            y1={650.26}
            x2={418.96}
            y2={650.26}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={133.54}
            y1={663.78}
            x2={148.27}
            y2={663.78}
            style={{
              fill: 'none',
              stroke: '#ff9100',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
        </g>
        <g>
          <g id="leaf2">
            <circle
              cx={617.73}
              cy={541.47}
              r={14.5}
              style={{
                fill: '#97ca67',
              }}
            />
            <circle
              cx={611.73}
              cy={529.93}
              r={9.96}
              style={{
                fill: '#97ca67',
              }}
            />
            <circle
              cx={602.75}
              cy={545.09}
              r={9.99}
              style={{
                fill: '#97ca67',
              }}
            />
            <circle
              cx={600.62}
              cy={544.49}
              r={2.22}
              style={{
                fill: '#c6170a',
              }}
            />
            <path
              d="M632.11,546.55c1.47.78,2.74,3.53,3.29,4.89a.68.68,0,0,1-.27.92.73.73,0,0,1-.25.08c-1.44.29-4.43.76-5.9,0-2-1.06-2.89-3.23-2-4.84S630.12,545.49,632.11,546.55Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M603.73,557.91c-1.48.77-4.46.26-5.91-.06a.69.69,0,0,1-.58-.77.63.63,0,0,1,.08-.23c.57-1.36,1.88-4.08,3.36-4.85,2-1,4.3-.55,5.15,1.07S605.73,556.88,603.73,557.91Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#97ca67',
              }}
            />
            <path
              d="M630.15,539.75c2.33-.4,6.12,1.57,7.93,2.62a1,1,0,0,1,.39,1.36l-.13.18c-1.36,1.58-4.3,4.69-6.63,5.08-3.14.53-6-1.11-6.46-3.66S627,540.28,630.15,539.75Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#97ca67',
              }}
            />
            <circle
              cx={613.43}
              cy={528.44}
              r={2.22}
              style={{
                fill: '#c6170a',
              }}
            />
            <circle
              cx={622.7}
              cy={536.09}
              r={1.46}
              style={{
                fill: '#c6170a',
              }}
            />
          </g>
          <path
            d="M604.9,550.62h26.43v16.77A17.34,17.34,0,0,1,614,584.75h-9.1V550.62Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#2e4556',
            }}
          />
          <g id="leaf3">
            <path
              d="M620.56,548.22c1.23,1.13,1.77,4.1,2,5.56a.69.69,0,0,1-.54.81.67.67,0,0,1-.2,0c-1.48-.08-4.49-.38-5.71-1.51-1.66-1.52-2-3.85-.75-5.2S618.93,546.69,620.56,548.22Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#97ca67',
              }}
            />
          </g>
          <rect
            x={133.42}
            y={529.83}
            width={330.19}
            height={85.8}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={133.42}
            y={604.76}
            width={330.19}
            height={10.87}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={133.42}
            y={529.6}
            width={330.19}
            height={10.87}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M592.72,615.62H463.63V604.75h140a10.87,10.87,0,0,1-10.87,10.87Z"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={463.6}
            y={529.61}
            width={140.69}
            height={10.87}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={57.15}
            y={529.6}
            width={67.16}
            height={10.87}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={57.15}
            y={604.98}
            width={67.16}
            height={10.87}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={232.63}
            y={529.83}
            width={16.92}
            height={85.8}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={132.87}
            y={529.83}
            width={16.92}
            height={85.8}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={104.94}
            y={529.83}
            width={16.92}
            height={85.8}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={443.69}
            y={529.83}
            width={16.92}
            height={85.8}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={470.95}
            y={529.83}
            width={16.92}
            height={85.8}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M590.5,615.62h-3.38v-85.8H604V602a13.54,13.54,0,0,1-13.5,13.58Z"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={350.68}
            y={529.83}
            width={16.92}
            height={85.8}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <rect
            x={57.27}
            y={529.83}
            width={65.27}
            height={85.8}
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M468.15,529.82H603.93v72.11a13.69,13.69,0,0,1-13.69,13.69H468.15v-85.8Z"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <path
            d="M604.9,544h26.6v23.44a17.35,17.35,0,0,1-17.35,17.35H604.9V544Z"
            transform="translate(0 0.01)"
            style={{
              fill: 'none',
              stroke: '#101d23',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 4,
            }}
          />
          <g>
            <rect
              x={119.15}
              y={520.32}
              width={16.26}
              height={97.22}
              style={{
                fill: '#101d23',
              }}
            />
            <rect
              x={117.09}
              y={520.25}
              width={20.67}
              height={3.19}
              rx={1.59}
              style={{
                fill: '#101d23',
              }}
            />
            <rect
              x={121.28}
              y={517.95}
              width={12.14}
              height={2.33}
              style={{
                fill: '#101d23',
              }}
            />
            <circle
              cx={127.33}
              cy={508.32}
              r={11.39}
              style={{
                fill: '#101d23',
              }}
            />
          </g>
          <g>
            <rect
              x={457.68}
              y={520.32}
              width={16.26}
              height={97.22}
              style={{
                fill: '#101d23',
              }}
            />
            <rect
              x={455.62}
              y={520.25}
              width={20.67}
              height={3.19}
              rx={1.59}
              style={{
                fill: '#101d23',
              }}
            />
            <rect
              x={459.8}
              y={517.95}
              width={12.14}
              height={2.33}
              style={{
                fill: '#101d23',
              }}
            />
            <circle
              cx={465.85}
              cy={508.32}
              r={11.39}
              style={{
                fill: '#101d23',
              }}
            />
          </g>
          <g>
            <g id="leaf5">
              <path
                d="M401.61,538.52a5.17,5.17,0,0,0-10-1.77,8.43,8.43,0,0,0-6,.28,11.88,11.88,0,0,0-19.27-4,18.69,18.69,0,0,0-8.58-5.19,27,27,0,0,0-50-2.84,18.55,18.55,0,0,0-23.21,10.4,8.43,8.43,0,0,0-11.91.18,8.63,8.63,0,0,0-1.09,1.4,11.8,11.8,0,0,0-8.85-4,9.77,9.77,0,0,0-1.08.06,18.56,18.56,0,0,0-30.8-3.81,11.86,11.86,0,0,0-18.27,6.17,8.15,8.15,0,1,0,3.31,12.23,11.88,11.88,0,0,0,12.62,2.24,18.56,18.56,0,0,0,28.6,5.49,11.88,11.88,0,0,0,16.08-4.86,11.66,11.66,0,0,0,.86-2,8.4,8.4,0,0,0,9.92-.42,18.56,18.56,0,0,0,30.17,8.35,27,27,0,0,0,28.44,4.88,18.57,18.57,0,0,0,27.52-8.75,11.86,11.86,0,0,0,12.54-2.21,8.43,8.43,0,0,0,14.78-5.56,7.43,7.43,0,0,0-.09-1.15A5.16,5.16,0,0,0,401.61,538.52Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
            </g>
            <path
              d="M208.57,547.49H395.46v13.24a21,21,0,0,1-21,21H229.55a21,21,0,0,1-21-21h0V547.49Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#2e4556',
              }}
            />
            <line
              x1={208.35}
              y1={555.33}
              x2={336.49}
              y2={555.33}
              style={{
                fill: 'none',
                stroke: '#57758f',
                strokeMiterlimit: 10,
              }}
            />
            <line
              x1={381.93}
              y1={555.33}
              x2={348.9}
              y2={555.33}
              style={{
                fill: 'none',
                stroke: '#57758f',
                strokeMiterlimit: 10,
              }}
            />
            <g id="leaf4">
              <circle
                cx={246.59}
                cy={543.49}
                r={6.45}
                style={{
                  fill: '#97ca67',
                }}
              />
              <circle
                cx={311.22}
                cy={533.5}
                r={1.96}
                style={{
                  fill: '#c6170a',
                }}
              />
              <path
                d="M399.43,541.17c1.28,1.07,2,4,2.26,5.46a.69.69,0,0,1-.51.83.62.62,0,0,1-.19,0c-1.48,0-4.5-.14-5.79-1.2-1.73-1.43-2.19-3.74-1-5.15S397.7,539.74,399.43,541.17Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M353.93,523.73c.71-1.52,3.38-2.94,4.71-3.57a.69.69,0,0,1,.93.26.68.68,0,0,1,.07.2c.37,1.43,1,4.39.3,5.9-.94,2-3.06,3.07-4.72,2.3S353,525.77,353.93,523.73Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M359.44,525.09c1.67,0,4.12,1.72,5.28,2.64a.68.68,0,0,1,.15.95.54.54,0,0,1-.15.15c-1.11,1-3.48,2.85-5.15,2.89-2.25,0-4.11-1.39-4.15-3.22S357.19,525.14,359.44,525.09Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <circle
                cx={374.65}
                cy={535.66}
                r={1.96}
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={255.19}
                cy={548.52}
                r={6}
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M260.48,553.76c.54,1.06.19,3.17,0,4.2a.49.49,0,0,1-.54.41l-.15,0c-1-.41-2.91-1.33-3.46-2.39a2.41,2.41,0,0,1,3.74-3,2.33,2.33,0,0,1,.45.87Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M261.08,549.24c1.18.15,2.71,1.66,3.43,2.43a.49.49,0,0,1,0,.68l-.12.09c-.89.56-2.76,1.62-3.94,1.47a2.41,2.41,0,0,1-.41-4.8,2.36,2.36,0,0,1,1,.13Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M346.79,546.18c.93,1.38.77,4.4.62,5.87a.67.67,0,0,1-.71.65.65.65,0,0,1-.2,0c-1.42-.42-4.28-1.4-5.21-2.78-1.26-1.87-1-4.21.47-5.24S345.56,544.31,346.79,546.18Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M350.69,543c1.47.79,2.74,3.53,3.3,4.9a.7.7,0,0,1-.3.93.57.57,0,0,1-.22.07c-1.45.29-4.43.76-5.91,0-2-1.07-2.89-3.23-2-4.85S348.7,542,350.69,543Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M271.75,545.33c1.05.56,1.95,2.51,2.35,3.48a.49.49,0,0,1-.23.66l-.14,0c-1,.21-3.15.54-4.2,0a2.41,2.41,0,1,1,1.34-4.63,2.35,2.35,0,0,1,.88.47Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M232.84,549.14c-.66,1.16-2.88,2.12-4,2.53a.54.54,0,0,1-.71-.27.48.48,0,0,1,0-.17c-.2-1.16-.51-3.55.15-4.71.89-1.56,2.64-2.24,3.91-1.51A3,3,0,0,1,232.84,549.14Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M310.56,549.31c-.9,1-3.28,1.42-4.45,1.57a.54.54,0,0,1-.64-.41.55.55,0,0,1,0-.18c.07-1.18.3-3.58,1.21-4.56a2.7,2.7,0,0,1,4.64,2.77A2.76,2.76,0,0,1,310.56,549.31Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <circle
                cx={236.5}
                cy={531.28}
                r={1.12}
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={243.89}
                cy={535.08}
                r={1.12}
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={225.97}
                cy={545.41}
                r={0.98}
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={217.96}
                cy={532.91}
                r={1.07}
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={255.21}
                cy={547.33}
                r={1.12}
                transform="translate(-325.93 711.58) rotate(-80.78)"
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={294.4}
                cy={533.49}
                r={1.33}
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={396.34}
                cy={536.48}
                r={1.33}
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={324.3}
                cy={532}
                r={1.61}
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={332.59}
                cy={520.01}
                r={2.22}
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={347.11}
                cy={533}
                r={1.7}
                style={{
                  fill: '#c6170a',
                }}
              />
              <circle
                cx={257.37}
                cy={536.32}
                r={0.83}
                style={{
                  fill: '#c6170a',
                }}
              />
              <path
                d="M227.7,548.47c-1,.58-3,.35-4,.19a.47.47,0,0,1-.43-.49.83.83,0,0,1,0-.15c.34-.95,1.12-2.85,2.1-3.42a2.3,2.3,0,1,1,3.12,3.38,2.26,2.26,0,0,1-.83.49Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
            </g>
            <path
              d="M208.57,540.46H395.46v20.26a21,21,0,0,1-21,21H229.55a21,21,0,0,1-21-21h0V540.46Z"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <rect
              x={228.69}
              y={540.47}
              width={17.79}
              height={40.9}
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <rect
              x={356.38}
              y={540.47}
              width={17.79}
              height={40.9}
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <rect
              x={291.04}
              y={540.47}
              width={17.79}
              height={40.9}
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
          </g>
        </g>
        <g>
          <rect
            x={55.27}
            y={221.46}
            width={547.7}
            height={30.94}
            style={{
              fill: '#009245',
            }}
          />
          <rect
            x={55.27}
            y={220.13}
            width={547.7}
            height={5.05}
            style={{
              fill: '#ffd505',
            }}
          />
          <g>
            <path
              d="M55.27,244.39H92.83v24.48a10.43,10.43,0,0,1-10.44,10.44H65.71a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#009245',
              }}
            />
            <path
              d="M92.17,244.39h37.56v24.48a10.43,10.43,0,0,1-10.44,10.44H102.61a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#009245',
              }}
            />
            <path
              d="M128.42,244.39H166v24.48a10.43,10.43,0,0,1-10.44,10.44h-16.7a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#009245',
              }}
            />
            <path
              d="M165.33,244.39h37.56v24.48a10.43,10.43,0,0,1-10.44,10.44H175.77a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#009245',
              }}
            />
            <g>
              <path
                d="M200.93,244.39h37.56v24.48a10.43,10.43,0,0,1-10.44,10.44H211.37a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
              <path
                d="M237.83,244.39h37.56v24.48A10.44,10.44,0,0,1,265,279.31H248.27a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
              <path
                d="M274.08,244.39h37.56v24.48a10.43,10.43,0,0,1-10.44,10.44H284.52a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
              <path
                d="M311,244.39h37.56v24.48a10.43,10.43,0,0,1-10.44,10.44H321.43A10.45,10.45,0,0,1,311,268.87V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
            </g>
            <g>
              <path
                d="M347.89,244.39h37.56v24.48A10.43,10.43,0,0,1,375,279.31H358.33a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
              <path
                d="M384.8,244.39h37.56v24.48a10.43,10.43,0,0,1-10.44,10.44H395.24a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
              <path
                d="M421.05,244.39h37.56v24.48a10.43,10.43,0,0,1-10.44,10.44H431.49a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
              <path
                d="M458,244.39h37.56v24.48a10.43,10.43,0,0,1-10.44,10.44H468.4A10.44,10.44,0,0,1,458,268.87V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
            </g>
            <g>
              <path
                d="M492.25,244.39h37.56v24.48a10.43,10.43,0,0,1-10.44,10.44H502.69a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
              <path
                d="M529.15,244.39h37.56v24.48a10.43,10.43,0,0,1-10.44,10.44H539.59a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
              <path
                d="M565.4,244.39H603v24.48a10.43,10.43,0,0,1-10.44,10.44H575.84a10.43,10.43,0,0,1-10.44-10.44h0V244.39Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#009245',
                }}
              />
            </g>
          </g>
          <line
            x1={55.27}
            y1={234.65}
            x2={538.65}
            y2={234.65}
            style={{
              fill: 'none',
              stroke: '#025b2a',
              strokeMiterlimit: 10,
            }}
          />
          <line
            x1={602.96}
            y1={234.65}
            x2={554.78}
            y2={234.65}
            style={{
              fill: 'none',
              stroke: '#025b2a',
              strokeMiterlimit: 10,
            }}
          />
          <g>
            <path
              d="M503.93,244.4h3.31c3.43,0,1.65,3.68,3.43,3.68h.9l1.65-6a5.64,5.64,0,0,1-2.43.51h-13a8.83,8.83,0,0,0-.3,1c0,.78,1.47.27,1.47,1.14a2.27,2.27,0,0,1-.09.52l-4.21,15.8c-.45,1.62-1.83.78-2.13,1.8l-.27.91h16.5l1.48-5.46h-.91c-2.46,0-.45,3.62-6.88,3.62h-3.16l2.17-8.11h2.19c1.93,0,.45,2.5,2.08,2.5h.75l1.65-6.18h-.9c-1.62,0-.84,1.84-3.25,1.84h-2Zm-14.49,0h2.32c3,0,.69,3.53,2.64,3.53h.75l1.54-5.88a5.72,5.72,0,0,1-2.44.51H480.49a6.28,6.28,0,0,1-1.06-.06,2.17,2.17,0,0,1-1-.45l-1.53,5.88h.9c2.34,0,.6-3.53,5.68-3.53h1l-4.36,16.25c-.57,2.2-1.89,1.24-2.22,2.2l-.3.91h8.45a9.68,9.68,0,0,0,.27-1.06c0-.72-1.42-.33-1.42-1.14a3.19,3.19,0,0,1,.18-1.06ZM455.2,260.56c-.63,2.42-2,1-2.4,2.29l-.27.91h6a5.82,5.82,0,0,0,.24-1c0-.84-1.71-.33-1.71-1.62a3.69,3.69,0,0,1,.15-.94l3.57-13.36,7.1,17.13H470l5-18.6c.48-2,1.57-.52,2-2.08l.18-.76h-5.35a5.1,5.1,0,0,0-.21.94c0,.93,1.53.39,1.53,1.5a7.21,7.21,0,0,1-.24,1.12l-2.81,10.31-5.77-13.84h-6.25a6.63,6.63,0,0,0-.21.88c0,.9,1.41.36,1.41,1.5a3.39,3.39,0,0,1-.18,1Zm-10.37-2.86.33,2.26a6.26,6.26,0,0,1,.12,1.06c0,1.65-1.53.75-1.83,1.83l-.24.91h8.23a8.56,8.56,0,0,0,.24-1c0-.78-1.17-.09-1.41-1.62l-2.79-17.85c-.06-.37-.12-1.27-.67-1.27a5.11,5.11,0,0,0-.75.18l-2.28.63c-.42.12-1,.15-1,.73,0,.33.15,1,.18,1.26l.09.61-10.19,15.89c-.78,1.2-1.75.75-2,1.56l-.24.91h6.59a8.56,8.56,0,0,0,.24-1c0-.87-1.63-.42-1.63-1.65a2.93,2.93,0,0,1,.54-1.48l1.21-1.93Zm-.27-2h-5.77l4.63-7.54ZM420.81,254h.3c.6,0,.9.42,1.11.9l2.89,8.87h6a8.56,8.56,0,0,0,.24-1c0-.93-1.17.34-2.22-2.68l-.9-2.59-.33-1c-.55-1.63-1.24-3-3.13-3v-.06c3.49,0,8.48-1.93,8.48-6.18s-4-4.71-6-4.71H417.17c0,.12-.3.91-.3,1,0,.78,1.45.27,1.45,1.14a1.54,1.54,0,0,1-.09.52L414,261.11c-.42,1.56-1.78.54-2.11,1.68l-.27.91h8.36a6.41,6.41,0,0,0,.3-1.06c0-.75-1.44-.27-1.44-1.11a2.28,2.28,0,0,1,.09-.51Zm2.59-9.74h2.43c1.77,0,2.23,1.87,2.23,2.59,0,4.32-3.7,5.46-5.6,5.46h-1.23Zm-20-.66c3.07,0,4,3,4,5.51,0,4.14-2.22,13.63-7.54,13.63-3.07,0-4-3-4-5.51,0-4.1,2.19-13.6,7.51-13.6Zm-.15-1.54c-7.24,0-12.32,6.27-12.32,13.24a8.79,8.79,0,0,0,8.57,9,4.86,4.86,0,0,0,.54,0c7.24,0,12.32-6.27,12.32-13.24a8.73,8.73,0,0,0-8.46-9h-.68Zm-17.82,2.36h2.31c3,0,.69,3.53,2.65,3.53h.75l1.53-5.88a5.64,5.64,0,0,1-2.43.51H376.47a6.17,6.17,0,0,1-1.05-.06,2.17,2.17,0,0,1-1-.45l-1.54,5.88h.9c2.35,0,.61-3.53,5.69-3.53h1l-4.36,16.25c-.57,2.2-1.9,1.24-2.23,2.2l-.3.91H382a9.68,9.68,0,0,0,.27-1.06c0-.72-1.41-.33-1.41-1.14a3.19,3.19,0,0,1,.18-1.06Zm-15.82-1.6a.92.92,0,0,1-.87.67c-1.17,0-2.22-1.42-5.44-1.42-4,0-7.51,2.53-7.51,6.48,0,5.91,7.81,6.85,7.81,10.92,0,2-2.07,3.13-3.66,3.13-5.24,0-3.82-4.76-5.78-4.76h-.9l-1.62,5.94h1.65c.33-.54.63-.85,1.2-.85,1.09,0,3.07,1.36,6.47,1.36,4.81,0,8-2.95,8-6.63,0-5.7-7.81-7.21-7.81-11a3,3,0,0,1,2.94-2.92c4.12,0,3.1,4.28,5,4.28H370l1.38-5.22Zm-23.29-.24a5.68,5.68,0,0,0-.27,1c0,.84,1.5.24,1.5,1.14a2.27,2.27,0,0,1-.09.52L343.19,261c-.42,1.59-1.77.66-2.16,1.8l-.3.91h8.53a9.68,9.68,0,0,0,.27-1.06c0-.75-1.47-.24-1.47-1.11a1.48,1.48,0,0,1,.09-.51l4.09-15.32c.69-2.56,1.89-1,2.34-2.44l.24-.76ZM330,254h.3a1.23,1.23,0,0,1,1.12.9l2.88,8.87h6a8.56,8.56,0,0,0,.24-1c0-.93-1.17.34-2.22-2.68l-.9-2.59-.33-1c-.54-1.63-1.23-3-3.13-3v-.06c3.49,0,8.48-1.93,8.48-6.18s-4-4.71-6-4.71H326.39c0,.12-.3.91-.3,1,0,.78,1.44.27,1.44,1.14a1.54,1.54,0,0,1-.09.52l-4.27,15.92c-.42,1.56-1.77.54-2.1,1.68l-.27.91h8.35a6.41,6.41,0,0,0,.3-1.06c0-.75-1.44-.27-1.44-1.11a2.28,2.28,0,0,1,.09-.51Zm2.59-9.74H335c1.78,0,2.23,1.87,2.23,2.59A5.35,5.35,0,0,1,332,252.3h-1.58Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#fffbf5',
              }}
            />
            <path
              d="M308.31,252.58a2.7,2.7,0,1,1-2.7-2.7h0A2.7,2.7,0,0,1,308.31,252.58Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#fffbf5',
              }}
            />
            <circle
              cx={527.29}
              cy={252.59}
              r={2.7}
              style={{
                fill: '#fffbf5',
              }}
            />
          </g>
        </g>
        <g>
          <circle
            cx={535.9}
            cy={359.05}
            r={37.09}
            transform="translate(95.64 830.53) rotate(-80.78)"
            style={{
              fill: '#ffd505',
              opacity: 0.27000001072883606,
              isolation: 'isolate',
            }}
          />
          <path
            d="M536,311.91h0a3,3,0,0,1,3,3v14h-6v-14A3,3,0,0,1,536,311.91Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#ffbc00',
            }}
          />
          <g id="light1">
            <g
              style={{
                clipPath: 'url(#clip-path)',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-2)',
                }}
              >
                <image
                  id="image-25"
                  width={132}
                  height={132}
                  transform="translate(504.13 322.64) scale(0.48)"
                  xlinkHref="data:image/png;base64,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"
                  style={{
                    isolation: 'isolate',
                  }}
                />
              </g>
            </g>
          </g>
          <path
            d="M527.83,326.08H544a5.65,5.65,0,0,1,5.66,5.66H522.17a5.65,5.65,0,0,1,5.64-5.66Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#ffbc00',
            }}
          />
          <rect
            x={532.98}
            y={323.09}
            width={6}
            height={2.78}
            style={{
              fill: '#e5a505',
            }}
          />
          <rect
            x={525.3}
            y={324.45}
            width={21.42}
            height={1.7}
            style={{
              fill: '#ffa300',
            }}
          />
          <g
            style={{
              opacity: 0.4399999976158142,
            }}
          >
            <path
              d="M556.67,352.34v1a22.29,22.29,0,0,1-22.27,22.29h-.94"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#fff',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <path
              d="M556.06,348.27a7.47,7.47,0,0,0-1.91-4.73"
              transform="translate(0 0.01)"
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
        <g>
          <circle
            cx={98.28}
            cy={359.06}
            r={37.09}
            style={{
              fill: '#ffd505',
              opacity: 0.27000001072883606,
              isolation: 'isolate',
            }}
          />
          <path
            d="M98.35,311.91h0a3,3,0,0,1,3,3v14h-6v-14A3,3,0,0,1,98.35,311.91Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#ffbc00',
            }}
          />
          <g id="light2">
            <g
              style={{
                clipPath: 'url(#clip-path-3)',
              }}
            >
              <g
                style={{
                  clipPath: 'url(#clip-path-4)',
                }}
              >
                <image
                  width={132}
                  height={132}
                  transform="translate(66.51 322.64) scale(0.48)"
                  xlinkHref="data:image/png;base64,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"
                  style={{
                    isolation: 'isolate',
                  }}
                />
              </g>
            </g>
          </g>
          <path
            d="M90.2,326.08h16.14a5.65,5.65,0,0,1,5.66,5.64v0H84.56a5.65,5.65,0,0,1,5.66-5.66h0Z"
            transform="translate(0 0.01)"
            style={{
              fill: '#ffbc00',
            }}
          />
          <rect
            x={95.36}
            y={323.09}
            width={6}
            height={2.78}
            style={{
              fill: '#e5a505',
            }}
          />
          <rect
            x={87.68}
            y={324.45}
            width={21.42}
            height={1.7}
            style={{
              fill: '#ffa300',
            }}
          />
          <g
            style={{
              opacity: 0.4399999976158142,
            }}
          >
            <path
              d="M119,352.34v1a22.29,22.29,0,0,1-22.27,22.29h-.94"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#fff',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <path
              d="M118.43,348.27a7.36,7.36,0,0,0-1.91-4.73"
              transform="translate(0 0.01)"
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
        <g>
          <rect
            x={1155.74}
            y={630.25}
            width={164.18}
            height={73.02}
            style={{
              fill: 'url(#linear-gradient-9)',
            }}
          />
          <rect
            x={1155.74}
            y={630.25}
            width={164.18}
            height={4.73}
            style={{
              fill: '#ff7d37',
            }}
          />
          <rect
            x={1155.74}
            y={703.26}
            width={164.18}
            height={67.54}
            style={{
              opacity: 0.17000000178813934,
              isolation: 'isolate',
              fill: 'url(#linear-gradient-10)',
            }}
          />
          <rect
            x={1155.74}
            y={181.7}
            width={164.18}
            height={449.78}
            style={{
              fill: '#ffeec4',
            }}
          />
          <rect
            x={1155.74}
            y={150}
            width={164.18}
            height={31.69}
            style={{
              fill: '#ffb255',
            }}
          />
          <rect
            x={1155.74}
            y={181.7}
            width={164.18}
            height={2.87}
            style={{
              fill: 'url(#linear-gradient-11)',
            }}
          />
          <line
            x1={1169.27}
            y1={655.09}
            x2={1184.64}
            y2={655.09}
            style={{
              fill: 'none',
              stroke: '#af3610',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <g
            style={{
              opacity: 0.6299999952316284,
            }}
          >
            <line
              x1={1160.88}
              y1={311.46}
              x2={1179.06}
              y2={311.46}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1172.1}
              y1={321.66}
              x2={1190.27}
              y2={321.66}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1239.11}
              y1={270.23}
              x2={1257.28}
              y2={270.23}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1250.33}
              y1={280.43}
              x2={1268.5}
              y2={280.43}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1215.86}
              y1={280.43}
              x2={1234.03}
              y2={280.43}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1164.44}
              y1={266.24}
              x2={1182.61}
              y2={266.24}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1166.35}
              y1={448.69}
              x2={1184.53}
              y2={448.69}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1208.61}
              y1={618.4}
              x2={1226.79}
              y2={618.4}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1169.36}
              y1={402.58}
              x2={1187.54}
              y2={402.58}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1170.59}
              y1={529.94}
              x2={1188.77}
              y2={529.94}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1185.36}
              y1={541.69}
              x2={1203.54}
              y2={541.69}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1170.59}
              y1={240.02}
              x2={1188.77}
              y2={240.02}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1203.69}
              y1={240.02}
              x2={1221.86}
              y2={240.02}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1226.26}
              y1={223.56}
              x2={1244.43}
              y2={223.56}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1187.69}
              y1={205.77}
              x2={1205.86}
              y2={205.77}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1185.36}
              y1={251.77}
              x2={1203.54}
              y2={251.77}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1236.24}
              y1={565.63}
              x2={1254.41}
              y2={565.63}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1220.92}
              y1={577.16}
              x2={1239.09}
              y2={577.16}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1160.88}
              y1={597.67}
              x2={1179.06}
              y2={597.67}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1240.75}
              y1={587.03}
              x2={1258.93}
              y2={587.03}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <g>
              <path
                d="M1155.76,590.46H1165c2.38,0,4.32-1.56,4.32-3.5s-1.94-3.5-4.32-3.5h-9.32Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#ffddb0',
                }}
              />
              <path
                d="M1155.72,581.87h2.76c2.38,0,4.32-1.57,4.32-3.5s-1.94-3.5-4.32-3.5h-2.81Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#ffddb0',
                }}
              />
            </g>
            <line
              x1={1266.05}
              y1={550.23}
              x2={1284.23}
              y2={550.23}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
            <line
              x1={1172.1}
              y1={300.38}
              x2={1190.27}
              y2={300.38}
              style={{
                fill: 'none',
                stroke: '#ff9100',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 7,
                opacity: 0.3100000023841858,
                isolation: 'isolate',
              }}
            />
          </g>
          <line
            x1={1178.52}
            y1={665.51}
            x2={1193.89}
            y2={665.51}
            style={{
              fill: 'none',
              stroke: '#af3610',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={1168.34}
            y1={675.71}
            x2={1183.71}
            y2={675.71}
            style={{
              fill: 'none',
              stroke: '#af3610',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={1207.58}
            y1={690.34}
            x2={1218.76}
            y2={690.34}
            style={{
              fill: 'none',
              stroke: '#af3610',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={1217.34}
            y1={680.36}
            x2={1228.52}
            y2={680.36}
            style={{
              fill: 'none',
              stroke: '#af3610',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={1205.56}
            y1={649.99}
            x2={1216.74}
            y2={649.99}
            style={{
              fill: 'none',
              stroke: '#af3610',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={1245.83}
            y1={662.96}
            x2={1259.05}
            y2={662.96}
            style={{
              fill: 'none',
              stroke: '#af3610',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <line
            x1={1281.94}
            y1={653.21}
            x2={1295.15}
            y2={653.21}
            style={{
              fill: 'none',
              stroke: '#af3610',
              strokeLinecap: 'round',
              strokeMiterlimit: 10,
              strokeWidth: 7,
              opacity: 0.3100000023841858,
              isolation: 'isolate',
            }}
          />
          <g>
            <rect
              x={1172.44}
              y={305.7}
              width={134.64}
              height={235.44}
              style={{
                fill: '#fff',
              }}
            />
            <rect
              x={1182.28}
              y={320.11}
              width={112.81}
              height={208.75}
              style={{
                fill: 'url(#linear-gradient-12)',
              }}
            />
            <rect
              x={1182.28}
              y={320.11}
              width={52.76}
              height={208.79}
              style={{
                fill: 'url(#linear-gradient-13)',
              }}
            />
            <rect
              x={1182.28}
              y={320.11}
              width={4.01}
              height={204.68}
              style={{
                fill: '#ffe499',
              }}
            />
          </g>
          <g>
            <g id="leaf1">
              <ellipse
                cx={1147.67}
                cy={538.78}
                rx={15.14}
                ry={14.5}
                style={{
                  fill: '#97ca67',
                }}
              />
              <ellipse
                cx={1154.52}
                cy={525.37}
                rx={10.4}
                ry={9.96}
                style={{
                  fill: '#97ca67',
                }}
              />
              <ellipse
                cx={1163.3}
                cy={542.4}
                rx={10.42}
                ry={9.99}
                style={{
                  fill: '#97ca67',
                }}
              />
              <ellipse
                cx={1168.28}
                cy={543.91}
                rx={2.31}
                ry={2.22}
                style={{
                  fill: '#c6170a',
                }}
              />
              <path
                d="M1132.65,543.86c-1.53.78-2.86,3.53-3.44,4.89a.69.69,0,0,0,.3.93.73.73,0,0,0,.24.07c1.52.29,4.63.76,6.17,0,2.07-1.06,3-3.23,2.12-4.84S1134.73,542.8,1132.65,543.86Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M1162.27,555.22c1.54.77,4.65.26,6.16-.06a.68.68,0,0,0,.61-.74.79.79,0,0,0-.08-.26c-.61-1.36-2-4.08-3.52-4.85-2.08-1-4.48-.55-5.36,1.07S1160.18,554.19,1162.27,555.22Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <path
                d="M1134.69,537.06c-2.42-.4-6.38,1.57-8.27,2.62a.93.93,0,0,0-.48,1.24,1,1,0,0,0,.21.3c1.42,1.58,4.49,4.69,6.91,5.08,3.28.53,6.3-1.11,6.75-3.66S1138,537.59,1134.69,537.06Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
              <ellipse
                cx={1152.75}
                cy={523.88}
                rx={2.32}
                ry={2.22}
                style={{
                  fill: '#c6170a',
                }}
              />
              <ellipse
                cx={1142.48}
                cy={533.4}
                rx={1.52}
                ry={1.46}
                style={{
                  fill: '#c6170a',
                }}
              />
              <ellipse
                cx={1151.62}
                cy={537.15}
                rx={1.52}
                ry={1.46}
                style={{
                  fill: '#c6170a',
                }}
              />
              <path
                d="M1163.19,536.21c1.31.68,2.43,3,2.92,4.22a.57.57,0,0,1-.27.77.56.56,0,0,1-.21.06c-1.29.24-4,.62-5.28-.06-1.77-.93-2.56-2.8-1.78-4.17S1161.43,535.28,1163.19,536.21Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
            </g>
            <path
              d="M1161.05,582.06h-10.22a17.35,17.35,0,0,1-17.35-17.35V547.94h27.58v34.12Z"
              transform="translate(0 0.01)"
              style={{
                fill: '#2e4556',
              }}
            />
            <g id="leaf11">
              <path
                d="M1144.67,545.53c-1.28,1.13-1.84,4.1-2,5.56a.72.72,0,0,0,.59.82h.19c1.54-.08,4.68-.38,6-1.51,1.73-1.53,2.08-3.85.78-5.2S1146.4,544,1144.67,545.53Z"
                transform="translate(0 0.01)"
                style={{
                  fill: '#97ca67',
                }}
              />
            </g>
            <path
              d="M1161.05,582.05h-10.41a17.35,17.35,0,0,1-17.35-17.35V541.26h27.76v40.79Z"
              transform="translate(0 0.01)"
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
            <line
              x1={1158.65}
              y1={541.22}
              x2={1186.41}
              y2={541.22}
              style={{
                fill: 'none',
                stroke: '#101d23',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
          </g>
        </g>
        <path
          d="M505.41,725.58H616.26a20.84,20.84,0,0,0,20.84-20.84h0a20.84,20.84,0,0,0-20.84-20.84h-4.88"
          transform="translate(0 0.01)"
          style={{
            fill: 'none',
            stroke: '#57758f',
            strokeMiterlimit: 10,
            strokeWidth: 2,
            opacity: 0.30000001192092896,
            isolation: 'isolate',
          }}
        />
        <path
          d="M592.33,743.65h27.6a37.25,37.25,0,0,0,37.25-37.25h0"
          transform="translate(0 0.01)"
          style={{
            fill: 'none',
            stroke: '#57758f',
            strokeMiterlimit: 10,
            strokeWidth: 2,
            opacity: 0.30000001192092896,
            isolation: 'isolate',
          }}
        />
        <line
          x1={521.38}
          y1={744.66}
          x2={493.89}
          y2={744.66}
          style={{
            fill: 'none',
            stroke: '#57758f',
            strokeMiterlimit: 10,
            strokeWidth: 2,
            opacity: 0.30000001192092896,
            isolation: 'isolate',
          }}
        />
        <path
          d="M630.91,670.82h4.32a21,21,0,0,1,21,21h0"
          transform="translate(0 0.01)"
          style={{
            fill: 'none',
            stroke: '#57758f',
            strokeMiterlimit: 10,
            strokeWidth: 2,
            opacity: 0.30000001192092896,
            isolation: 'isolate',
          }}
        />
      </g>
    </svg>
  );
}

export default SvgItalyHeroDesktop;
