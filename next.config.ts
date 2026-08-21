import { networkInterfaces } from 'node:os'
import type { NextConfig } from 'next'

/**
 * Next blocks cross-origin requests to /_next/* in development, so loading the
 * dev server from a phone on the same wifi returns 403 for every chunk and the
 * page never hydrates. Allow whatever addresses this machine currently holds,
 * which keeps working when DHCP hands out a different one.
 */
const lanOrigins = Object.values(networkInterfaces())
  .flat()
  .filter((iface) => iface?.family === 'IPv4' && !iface.internal)
  .map((iface) => (iface as { address: string }).address)

const nextConfig: NextConfig = {
  allowedDevOrigins: lanOrigins,
}

export default nextConfig
