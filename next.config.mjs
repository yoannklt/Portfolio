import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
    reactStrictMode: true,
});

export default nextConfig;




