import { useRouter } from 'next/router';
import React from 'react';
import { Button } from '../Button';
import { Title } from '../Title';

export function HomeMapSection() {
  // GET USERS LOCATION
  // const geolocation = useGeolocation();

  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      {/* MAP BACKDROP */}
      <div className="absolute top-0 right-0 bottom-0 left-0">as</div>

      {/* BACKGROUND OVERLAY */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-orange-100"></div>

      {/* TEXT OVERLAY */}
      <div className="flex justify-end w-full py-4 px-6">
        <div className="flex flex-col items-center justify-center z-10">
          <Title level={3} className="text-primary font-somatic text-center">
            Discover and
            <br />
            save your new
            <br />
            favourite dishes!
          </Title>

          <Button type="solid" color="primary" size="small" className="text-sm">
            Find the tastiest!
          </Button>
        </div>
      </div>
    </div>
  );
}
