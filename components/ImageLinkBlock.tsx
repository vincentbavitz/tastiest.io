import { ArrowRightOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useHoverDirty } from 'react-use';

interface Props {
  /** Line 1 and line 2 */
  label: [string, string];
  description: string;
  image: string;
  href?: string;
  onClick?: () => void;
}

export default function ImageLinkBlock(props: Props) {
  const { href, onClick = () => null } = props;

  return (
    <div onClick={onClick} className="w-full cursor-pointer">
      {href ? (
        <Link href={href}>
          <a className="no-underline">
            <ImageLinkBlockInner {...props} />
          </a>
        </Link>
      ) : (
        <ImageLinkBlockInner {...props} />
      )}
    </div>
  );
}

function ImageLinkBlockInner(props: Props) {
  const { label, description, image } = props;

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  return (
    <div ref={ref} className="flex flex-col space-y-4">
      <div
        style={{ paddingBottom: '100%' }}
        className={clsx('relative w-full h-0 overflow-hidden')}
      >
        <Image
          layout="fill"
          className={clsx(
            'object-cover w-full h-full transform duration-300',
            isHovering && 'scale-105',
          )}
          src={image}
        />
      </div>

      <div>
        {label.map((line, index) => (
          <div
            key={line}
            className="flex items-center font-primary text-primary leading-8 text-2xl"
          >
            {line}

            {index === 1 && (
              <div className="inline mt-1 ml-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-primary text-xs">
                  <ArrowRightOutlined
                    style={{
                      transform: `translateX(${isHovering ? '2px' : '0'})`,
                    }}
                    className="duration-300"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <p
        className={clsx(
          'leading-loose text-sm duration-300',
          isHovering ? 'text-dark' : 'text-gray-600',
        )}
      >
        {description}
      </p>
    </div>
  );
}
