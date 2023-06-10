/** @type {import('next').NextConfig} */

module.exports = () => {
  return {
    experimental: {
      appDir: true,
      scrollRestoration: true,
      typedRoutes: true,
    },
    poweredByHeader: false,
    reactStrictMode: true,
  };
};
