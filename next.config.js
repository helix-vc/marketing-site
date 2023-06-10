/** @type {import('next').NextConfig} */

module.exports = () => {
  return {
    experimental: {
      appDir: true,
      typedRoutes: true,
    },
    poweredByHeader: false,
    reactStrictMode: true,
  };
};
