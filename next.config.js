const withPlugins = require('next-compose-plugins');

const withSass = require('@zeit/next-sass');
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
};

module.exports = withPlugins([withSass, withFonts, withSvgr], nextConfig);
