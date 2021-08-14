import { Button } from '@tastiest-io/tastiest-components';
import { SearchIcon } from '@tastiest-io/tastiest-icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getMapBoxStaticSource } from 'utils/location';
import { expandSearchOverlay } from '../../state/navigation';
import { Title } from '../Title';

export function HomeMapSection() {
  // GET USERS LOCATION
  // const geolocation = useGeolocation();
  const dispatch = useDispatch();

  return (
    <div className="relative z-0 w-full overflow-hidden rounded-xl">
      {/* MAP BACKDROP */}
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <img
          className="object-cover w-full h-full"
          src={getMapBoxStaticSource(51.5188, -0.1127)}
        />
      </div>

      {/* TEXT OVERLAY */}
      <div className="flex justify-end w-full px-6">
        <div
          style={{
            boxShadow: '0px 0px 150px 90px rgba(255,255,255,0.75)',
          }}
          className="z-10 flex flex-col items-center justify-center py-4 bg-white bg-opacity-75"
        >
          <Title level={3} className="text-center text-primary font-somatic">
            Search
            <br />
            dishes and
            <br />
            restaurants!
          </Title>

          {/* 
          Map styles
          mapbox://styles/tastiestvince/ckj6mv0zb04uz1amskq1bpi3u
          */}

          <Button
            onClick={() => dispatch(expandSearchOverlay())}
            type="solid"
            color="primary"
            className="text-sm"
            prefix={<SearchIcon className="w-4 h-4 text-white fill-current" />}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
