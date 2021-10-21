import * as React from 'react';

function SvgHomeInformationAlert(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 134.46 114.1"
      {...props}
    >
      <defs>
        <style>
          {
            '.home-information-alert_svg__cls-1{fill:#fafafa;stroke:#3882bb;stroke-linecap:round;stroke-linejoin:round}'
          }
        </style>
      </defs>
      <g id="home-information-alert_svg__Layer_2" data-name="Layer 2">
        <g id="home-information-alert_svg__Layer_1-2" data-name="Layer 1">
          <path
            className="home-information-alert_svg__cls-1"
            d="M124.75 20.61c5.09 0 9.21 3.6 9.21 8v65.95c0 4.44-4.12 8-9.21 8H9.71c-5.09 0-9.21-3.61-9.21-8V28.65c0-4.44 4.12-8 9.21-8"
          />
          <text
            transform="translate(13.03 63.87)"
            fontSize={8}
            fill="#3882bb"
            fontFamily="Poppins-Medium,Poppins"
            fontWeight={500}
          >
            {'Numa have a table for 2 at '}
            <tspan x={-4.1} y={12}>
              {'7:30pm. Grab it now before it '}
            </tspan>
            <tspan x={27.4} y={24}>
              {'gets booked!'}
            </tspan>
          </text>
          <circle
            className="home-information-alert_svg__cls-1"
            cx={66.31}
            cy={21.05}
            r={20.55}
          />
          <path
            className="home-information-alert_svg__cls-1"
            d="M41.59 33.92a16.66 16.66 0 01.19-24.53M32.71 40.43A25.34 25.34 0 0133 3.13M93.25 33.92a16.68 16.68 0 00-.19-24.53M102.12 40.43a25.35 25.35 0 00-.28-37.3"
          />
          <g id="home-information-alert_svg__VHbADt_tif">
            <path
              className="home-information-alert_svg__cls-1"
              d="M70.94 30.6a4.12 4.12 0 01-2.12 2.84 11.43 11.43 0 01-1.59.54h-.9a11.61 11.61 0 01-1.54-.52 4.11 4.11 0 01-2.1-2.64 1.17 1.17 0 010-.22M63.12 11a7 7 0 012.13-.69c.15 0 .19-.08.19-.22v-1a1.13 1.13 0 112.26 0v1.07a15.84 15.84 0 012 .65A7.75 7.75 0 0174.48 18v3a7.63 7.63 0 002.68 6.06 2 2 0 01-.2 3.18 2 2 0 01-1.13.32H57.32a2 2 0 01-1.91-1.26 1.92 1.92 0 01.59-2.23 7.63 7.63 0 002.58-4.59 10.39 10.39 0 00.09-1.37c0-1.19 0-2.39.05-3.57a7.69 7.69 0 014.4-6.54"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgHomeInformationAlert;
