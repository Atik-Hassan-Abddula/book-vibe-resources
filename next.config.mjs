/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  //https://via.placeholder.com/150/92c952"
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
       
      },
    ],
  },
};

export default nextConfig;
