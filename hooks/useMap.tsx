import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import { getMapBoxStyleUrl } from 'utils/location';

interface UseMapParams {
  lat: number;
  lng: number;
  zoom?: number;
  pitch?: number;
  markers?: [{ lat: number; lng: number; size?: number }];
  hideControls?: boolean;
}

export const useMap = (container: string, params: UseMapParams) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const pitch = params.pitch ?? 33;
  const zoom = params.zoom ?? 10;

  // Initialize map
  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN;
    const _map = new mapboxgl.Map({
      style: getMapBoxStyleUrl(),
      center: [params.lng, params.lat], // starting position [lng, lat]
      container,
      zoom,
      pitch,
    });

    setMap(_map);

    // Add controls
    if (!params?.hideControls) {
      _map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    // Add marker(s) to the map
    if (params.markers) {
      params.markers.forEach(marker => {
        const size = marker.size ?? 45;

        const el = document.createElement('div');
        el.className = 'marker';

        // Depends on the aspect ratio of the image
        el.style.width = `${size / 1.282608}px`;
        el.style.height = `${size}px`;
        el.style.cursor = 'pointer';
        el.style.backgroundSize = 'cover';
        el.style.backgroundImage = "url('/assets/ui/location-brand-icon.png')";

        new mapboxgl.Marker(el).setLngLat([marker.lng, marker.lat]).addTo(_map);
      });
    }

    return () => _map.remove();
  }, []);

  // Update coordinates and orientation from parent
  useEffect(() => {
    if (map) {
      map.setCenter([params.lng, params.lat]);
      map.setCenter([params.lng, params.lat]);
      map.setZoom(params.zoom);
      map.setPitch(pitch);
    }
  }, [map, params.lng, params.lat, params.zoom, params.pitch]);

  return { map, zoom, pitch };
};
