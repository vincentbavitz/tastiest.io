import { IRestaurant } from '@tastiest-io/tastiest-utils';
import { Modal } from 'components/Modal';
import { useMap } from 'hooks/useMap';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { ModalInstance } from 'state/navigation';

interface Props {
  restaurant: IRestaurant;
  isOpen: boolean;
  close: () => void;
}

interface InnerProps {
  restaurant: IRestaurant;
}

export function RestaurantMapModal(props: Props) {
  const { close, isOpen, restaurant } = props;

  return (
    <Modal
      id={ModalInstance.RESTAURANT_MAP}
      title="Restaurant Map"
      isOpen={isOpen}
      close={close}
      noPadding
    >
      <RestaurantMapInner restaurant={restaurant} />
    </Modal>
  );
}

function RestaurantMapInner({ restaurant }: InnerProps) {
  const { isMobile } = useScreenSize();

  useMap('map', {
    lat: restaurant.location.lat,
    lng: restaurant.location.lon,
    zoom: 16,
    markers: [
      {
        lat: restaurant.location.lat,
        lng: restaurant.location.lon,
      },
    ],
  });

  return (
    <div
      id="map"
      style={{
        height: isMobile ? '90vh' : '500px',
        width: '800px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.10))',
      }}
      className="relative w-full overflow-hidden bg-opacity-25 rounded-sm bg-secondary-2"
    ></div>
  );
}
