import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Block } from '@contentful/rich-text-types';
import { ContentfulRestaurant, titleCase } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import LineLimit from 'components/text/LineLimit';
import Image from 'next/image';
import React from 'react';

interface Props {
  restaurant: ContentfulRestaurant;
  compact?: boolean;
}

export default function FeaturedRestaurantCard(props: Props) {
  const { restaurant, compact = false } = props;

  return (
    <div
      style={{ minHeight: '300px', width: compact ? '300px' : '600px' }}
      className={clsx('relative flex bg-primary', compact ? 'flex-col' : '')}
    >
      {/* Left Side */}
      <div className="flex flex-col justify-between h-auto flex-1 p-6 text-light">
        <div>
          <div className="flex items-center mb-2">
            <IconCutlery />
            {titleCase(restaurant.cuisine.replace('_', ' '))}
          </div>

          <div className="flex items-center">
            <IconLocation />
            {titleCase(restaurant.location_display)}
          </div>
        </div>

        <div>
          <h4 className="font-primary text-4xl mt-6 mb-4">{restaurant.name}</h4>

          <p className="text-sm leading-loose opacity-75">
            <LineLimit lines={4} fit="loose">
              {documentToPlainTextString(restaurant.description as Block)}
            </LineLimit>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex-1">
        <div
          style={{ height: '300px', width: '300px' }}
          className="relative h-0 w-full"
        >
          <Image
            src={restaurant.display_photograph.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      {/* Center Circle */}
      {/* <div className="absolute top-6 left-0 right-0 bottom-0 flex justify-center">
        <div className="w-20 h-20 rounded-full bg-blue-200">{}</div>
      </div> */}
    </div>
  );
}

const IconCutlery = () => {
  return (
    <svg className="w-4 h-4 inline mr-2" viewBox="0 0 26.028 30.848">
      <path
        id="Icon_metro-spoon-fork"
        data-name="Icon metro-spoon-fork"
        d="M9.319,1.928c-3.195,0-5.784,3.021-5.784,6.748a6.621,6.621,0,0,0,4.45,6.567L7.027,30.852a1.8,1.8,0,0,0,1.81,1.924H9.8a1.8,1.8,0,0,0,1.81-1.924l-.958-15.609A6.621,6.621,0,0,0,15.1,8.676c0-3.727-2.59-6.748-5.784-6.748Zm19.441,0-1.607,9.64H25.948l-.8-9.64h-.8l-.8,9.64H22.333l-1.607-9.64h-.8V14.46a.964.964,0,0,0,.964.964H23.4l-.947,15.428a1.8,1.8,0,0,0,1.81,1.924h.964a1.8,1.8,0,0,0,1.81-1.924l-.947-15.428H28.6a.964.964,0,0,0,.964-.964V1.928Z"
        transform="translate(-3.535 -1.928)"
        fill="#bbdaf6"
      />
    </svg>
  );
};

const IconLocation = () => {
  return (
    <svg className="w-4 h-4 inline mr-2" viewBox="0 0 19.28 30.848">
      <path
        id="Icon_metro-location"
        data-name="Icon metro-location"
        d="M17.995,1.928a9.64,9.64,0,0,0-9.64,9.64c0,9.64,9.64,21.208,9.64,21.208s9.64-11.568,9.64-21.208a9.64,9.64,0,0,0-9.64-9.64Zm0,15.545a5.9,5.9,0,1,1,5.9-5.9A5.9,5.9,0,0,1,17.995,17.473Zm-3.736-5.9A3.736,3.736,0,1,1,17.995,15.3,3.736,3.736,0,0,1,14.259,11.568Z"
        transform="translate(-8.355 -1.928)"
        fill="#bbdaf6"
      />
    </svg>
  );
};
