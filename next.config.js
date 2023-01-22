/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'lh3.googleusercontent.com',
      'ui-avatars.com',
      'firebasestorage.googleapis.com',
      'cloudflare-ipfs.com'
    ]
  }
}

module.exports = nextConfig
