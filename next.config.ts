/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This replaces `next export` command
  images: {
    unoptimized: true, // needed for static export if you use next/image
  },
};

module.exports = nextConfig;
