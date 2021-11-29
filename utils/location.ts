export const getMapBoxStaticSource = (
  lat: number,
  lon: number,
  width?: number,
  height?: number,
  zoom?: number,
) =>
  `https://api.mapbox.com/styles/v1/${
    process.env.NEXT_PUBLIC_MAP_BOX_USERNAME
  }/${process.env.NEXT_PUBLIC_MAP_BOX_STYLE_ID}/static/${lon},${lat},${
    zoom ?? 10
  },0,60/${width ?? 1200}x${height ?? 300}?access_token=${
    process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN
  }`;

export const getGoogleMapLink = (lat: number, lon: number, zoom = 12) => {
  return `https://maps.google.com/maps?q=${lat},${lon}&ll=${lat},${lon}&z=${zoom}`;
};
