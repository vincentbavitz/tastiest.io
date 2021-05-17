// const withPlugins = require('next-compose-plugins');

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
};

// module.exports = withPlugins(nextConfig);
module.exports = nextConfig;
