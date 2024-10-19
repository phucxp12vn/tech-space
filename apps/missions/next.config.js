//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'missions',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        extraOptions: {},
        exposes: {
          './missions': './src/app',
        },
        shared: {},
      })
    );

    return config;
  },
  async rewrites() {
    return [
        {
            source: "/",
            destination: "http://localhost:3001/ecommerce",
        },
    ];
},
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
