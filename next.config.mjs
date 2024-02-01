import { setupDevBindings } from '@cloudflare/next-on-pages/next-dev'

/** @type {import('next').NextConfig} */
const nextConfig = {}

if (process.env.NODE_ENV === 'development') {
  await setupDevBindings({
    bindings: {},
  })
}

export default nextConfig
