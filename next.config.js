const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withSvgr = require('next-svgr');

const nextConfig = {
  webpack(config, _options) {
    const rules = [{}];

    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...rules],
      },
      node: {
        fs: 'empty',
      },
    };
  },
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,

    ANANYTICS_SOURCE_ID: process.env.ANANYTICS_SOURCE_ID,
    ANALYTICS_WRITE_KEY: process.env.ANALYTICS_WRITE_KEY,

    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,

    STRIPE_LIVE_PUBLISHABLE_KEY: '',
    STRIPE_TEST_PUBLISHABLE_KEY: process.env.STRIPE_TEST_PUBLISHABLE_KEY,

    MAP_BOX_USERNAME: process.env.MAP_BOX_USERNAME,
    MAP_BOX_STYLE_ID: process.env.MAP_BOX_STYLE_ID,
    MAP_BOX_ACCESS_TOKEN: process.env.MAP_BOX_ACCESS_TOKEN,
  },
  experimental: {
    jsconfigPaths: true,
  },
};

module.exports = withPlugins([withFonts, withSvgr], nextConfig);
