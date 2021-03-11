export const getMapBoxStaticSource = (
  lat: number,
  lon: number,
  width?: number,
  height?: number,
) =>
  `https://api.mapbox.com/styles/v1/${process.env.MAP_BOX_USERNAME}/${
    process.env.MAP_BOX_STYLE_ID
  }/static/${lat},${lon},8.5,0,60/${width ?? 1200}x${
    height ?? 300
  }?access_token=${process.env.MAP_BOX_ACCESS_TOKEN}`;
