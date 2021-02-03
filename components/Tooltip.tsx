import classNames from 'classnames';
import { useRef } from 'react';
import { useHoverDirty } from 'react-use';

export type TooltipPlacement =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left';

interface Props {
  placement?: TooltipPlacement;
  content: string | JSX.Element | JSX.Element[];
  children: string | JSX.Element | JSX.Element[];
}

export function Tooltip(props: Props) {
  const { content, placement = 'top', children } = props;

  // Use hooks
  const tooltipRef = useRef(null);
  const isHovering = useHoverDirty(tooltipRef);

  const pointerWidth = 0.725;
  const pointerStyles = {
    height: '0.5rem',
    width: `${pointerWidth}rem`,
    marginLeft: `calc(50% - ${pointerWidth / 2}rem)`,
    bottom: '-0.48rem',
    clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
  };

  const contentStyles = {
    bottom: '0',
    marginBottom: 'calc(100% + 0.75rem)',
    width: 'max-content',
    maxWidth: '18rem',
    zIndex: 100,
    display: isHovering ? 'block' : 'none',
    filter: 'drop-shadow(1px 2px 2px rgba(0,0,0,0.1))',
  };

  const textContentStyles = {
    marginLeft: `${
      (placement.includes('left') && '33') ||
      (placement.includes('right') && '-33') ||
      '0'
    }%`,
  };

  return (
    <div ref={tooltipRef} className="relative flex justify-center">
      <div className="absolute flex justify-center" style={contentStyles}>
        <div
          style={pointerStyles}
          className={classNames('absolute bg-gray-100')}
        ></div>
        <div
          style={textContentStyles}
          className="w-full h-full p-3 text-sm text-black bg-gray-100 rounded-md"
        >
          {content}
        </div>
      </div>
      {children}
    </div>
  );
}
