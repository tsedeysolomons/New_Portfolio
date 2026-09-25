import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  // Allow the preview panel / localhost origins to load dev assets (fonts, HMR).
  allowedDevOrigins: ['127.0.0.1', 'localhost', '192.168.1.10'],
  // Optional override: build to a fast local disk instead of the (slow) project folder.
  // Default behaviour is unchanged unless NEXT_DIST_DIR is set.
  distDir: process.env.NEXT_DIST_DIR || '.next',
}

export default nextConfig
