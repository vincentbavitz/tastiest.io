import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface FancyBorderProps {
  children: ReactNode;
  layers?: 'single' | 'double';
}

export default function FancyBorder(props: FancyBorderProps) {
  const { layers = 'single', children } = props;

  return (
    <div className={clsx(layers === 'double' && 'p-2 border-2 border-primary')}>
      <div className="relative">
        <div className="py-8 px-2">{children}</div>

        <div className="absolute my-4 border-primary border-l-2 border-r-2 inset-0"></div>
        <div className="absolute mx-4 border-primary border-t-2 border-b-2 inset-0"></div>

        <div className="absolute top-0 left-0">
          <BorderCorner rotation={90} />
        </div>

        <div className="absolute top-0 right-0">
          <BorderCorner rotation={180} />
        </div>

        <div className="absolute bottom-0 left-0">
          <BorderCorner rotation={0} />
        </div>

        <div className="absolute bottom-0 right-0">
          <BorderCorner rotation={270} />
        </div>
      </div>
    </div>
  );
}

interface BorderCornerProps {
  rotation?: 0 | 90 | 180 | 270;
}

const BorderCorner = (props: BorderCornerProps) => {
  const { rotation = 0 } = props;

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className="relative w-8 h-8"
    >
      <div
        style={{ width: '2px' }}
        className="absolute bottom-0 left-4 h-4 bg-primary"
      ></div>

      <div
        style={{ width: '2px' }}
        className="absolute bottom-4 left-0 h-4 bg-primary"
      ></div>

      <div
        style={{ height: '2px' }}
        className="absolute bottom-4 left-0 w-4 bg-primary"
      ></div>

      <div
        style={{ height: '2px' }}
        className="absolute bottom-0 left-4 w-4 bg-primary"
      ></div>

      <div className="absolute top-0 right-0 w-4 h-4 border-primary border-2"></div>
    </div>
  );
};
