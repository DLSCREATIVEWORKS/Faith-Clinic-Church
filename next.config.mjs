/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain files: the whole site is exported to static HTML, CSS and JS.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
