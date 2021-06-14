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
