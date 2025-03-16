import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        removeConsole: true, // Supprime les console.log() en prod
    },
    experimental: {
        profiling: true, // Active l’analyse des performances
    },
};

export default nextConfig;

