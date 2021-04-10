const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');

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
  experimental: {
    jsconfigPaths: true,
  },
};

module.exports = withPlugins([withFonts], nextConfig);
