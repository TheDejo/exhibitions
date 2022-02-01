/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['artic-web.imgix.net'],
},
  reactStrictMode: true,
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  poweredByHeader: false,
}

module.exports = nextConfig
