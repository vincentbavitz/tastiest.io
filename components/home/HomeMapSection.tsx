import React from 'react';
import { useDispatch } from 'react-redux';
import { getMapBoxStaticSource } from 'utils/location';
import { expandSearchOverlay } from '../../state/navigation';
import { Button } from '../Button';
import { Title } from '../Title';

export function HomeMapSection() {
  // GET USERS LOCATION
  // const geolocation = useGeolocation();
  const dispatch = useDispatch();

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* MAP BACKDROP */}
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <img
          className="object-cover w-full h-full"
          src={getMapBoxStaticSource(-0.1127, 51.5188)}
        />
      </div>

      {/* BACKGROUND OVERLAY */}
      {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-white bg-opacity-50"></div> */}
      <div className="absolute top-0 bottom-0 left-0 right-0"></div>

      {/* TEXT OVERLAY */}
      <div className="flex justify-end w-full px-6">
        <div
          style={{
            boxShadow: '0px 0px 75px 75px rgba(255,255,255,0.5)',
          }}
          className="z-10 flex flex-col items-center justify-center py-4 bg-white bg-opacity-50"
        >
          <Title level={3} className="text-center text-primary font-somatic">
            Discover and
            <br />
            save your new
            <br />
            favourite dishes!
          </Title>

          {/* 
Map styles
mapbox://styles/tastiestvince/ckj6mv0zb04uz1amskq1bpi3u
*/}

          <Button
            onClick={() => dispatch(expandSearchOverlay())}
            type="solid"
            color="primary"
            size="small"
            className="text-sm"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
