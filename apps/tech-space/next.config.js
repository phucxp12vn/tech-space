//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    missions: `missions@${process.env.NEXT_PUBLIC_MISSIONS_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'techApp',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        extraOptions: {
          automaticAsyncBoundary: true,
        },
        exposes: {},
        shared: {},
      })
    );

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
