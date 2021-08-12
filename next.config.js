const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  webpack(config, _options) {
    const rules = [{}];

    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...rules],
      },
    };
  },
  experimental: {
    jsconfigPaths: true,
  },
  future: {
    webpack5: true,
  },
  fallback: {
    fs: false,
  },
  images: {
    domains: ['images.cfassets.net', 'images.ctfassets.net'],
  },
};

module.exports = withPlugins([withImages], nextConfig);
