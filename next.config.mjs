/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/anilibriaApi/:path*",
        destination: "https://api.anilibria.tv/v3/:path*",
      },
      {
        source: "/anilibriaPosters/:path*",
        destination: "https://static-libria.weekstorm.one/:path*",
      },
    ];
  },
};

export default nextConfig;
