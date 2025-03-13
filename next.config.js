/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStricMode: true,
    swcMinify: true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
});

module.exports = nextConfig;
